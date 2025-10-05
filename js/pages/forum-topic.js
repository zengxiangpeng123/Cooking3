// Forum Topic Detail Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initTopicDetail();
});

let currentTopic = null;
let currentReplies = [];

function initTopicDetail() {
    // 从URL获取话题ID
    const urlParams = new URLSearchParams(window.location.search);
    const topicId = urlParams.get('id');
    
    if (!topicId) {
        showError('话题不存在');
        return;
    }
    
    // 加载话题详情
    loadTopicDetail(topicId);
    
    // 绑定事件
    bindTopicEvents();
}

// 加载话题详情
function loadTopicDetail(topicId) {
    currentTopic = ForumUtils.getTopicById(topicId);
    
    if (!currentTopic) {
        showError('话题不存在');
        return;
    }
    
    // 增加浏览量
    ForumUtils.incrementTopicViews(topicId);
    
    // 渲染话题详情
    renderTopicDetail();
    
    // 加载回复
    loadTopicReplies();
    
    // 加载相关话题
    loadRelatedTopics();
}

// 渲染话题详情
function renderTopicDetail() {
    if (!currentTopic) return;
    
    const category = ForumUtils.getCategoryById(currentTopic.category);
    const levelInfo = ForumUtils.getUserLevelInfo(currentTopic.author.level);
    
    // 更新页面标题
    document.title = `${currentTopic.title} - 美食论坛`;
    document.getElementById('pageTitle').textContent = `${currentTopic.title} - 美食论坛`;
    
    // 更新面包屑
    const breadcrumbCurrent = document.getElementById('breadcrumbCurrent');
    if (breadcrumbCurrent) {
        breadcrumbCurrent.textContent = currentTopic.title;
    }
    
    // 更新话题分类
    const topicCategory = document.getElementById('topicCategory');
    if (topicCategory) {
        topicCategory.textContent = category?.name || '其他';
        topicCategory.style.backgroundColor = category?.color || '#666';
    }
    
    // 显示精华和置顶标记
    const featuredElement = document.getElementById('topicFeatured');
    const pinnedElement = document.getElementById('topicPinned');
    
    if (featuredElement) {
        featuredElement.style.display = currentTopic.featured ? 'inline-block' : 'none';
    }
    if (pinnedElement) {
        pinnedElement.style.display = currentTopic.pinned ? 'inline-block' : 'none';
    }
    
    // 更新话题标题
    const topicTitle = document.getElementById('topicTitle');
    if (topicTitle) {
        topicTitle.textContent = currentTopic.title;
    }
    
    // 更新作者信息
    const authorAvatar = document.getElementById('authorAvatar');
    const authorName = document.getElementById('authorName');
    const topicTime = document.getElementById('topicTime');
    
    if (authorAvatar) authorAvatar.textContent = currentTopic.author.avatar;
    if (authorName) authorName.textContent = currentTopic.author.name;
    if (topicTime) topicTime.textContent = `发布于 ${ForumUtils.formatTime(currentTopic.createdAt)}`;
    
    // 更新统计数据
    const topicViews = document.getElementById('topicViews');
    const topicReplies = document.getElementById('topicReplies');
    const topicLikes = document.getElementById('topicLikes');
    
    if (topicViews) topicViews.textContent = ForumUtils.formatNumber(currentTopic.views);
    if (topicReplies) topicReplies.textContent = currentTopic.replies;
    if (topicLikes) topicLikes.textContent = currentTopic.likes;
    
    // 更新话题内容
    const topicContent = document.getElementById('topicContent');
    if (topicContent) {
        topicContent.innerHTML = formatTopicContent(currentTopic.content);
    }
    
    // 检查并更新点赞按钮状态
    const likeBtn = document.getElementById('likeBtn');
    if (likeBtn) {
        const hasLiked = UserPreferences.hasLikedTopic(currentTopic.id);
        if (hasLiked) {
            likeBtn.classList.add('btn--liked');
            likeBtn.querySelector('.btn__text').textContent = '已点赞';
        } else {
            likeBtn.classList.remove('btn--liked');
            likeBtn.querySelector('.btn__text').textContent = '点赞';
        }
    }
}

// 格式化话题内容
function formatTopicContent(content) {
    // 简单的Markdown渲染
    let formattedContent = content
        .replace(/^## (.+)$/gm, '<h2>$1</h2>')
        .replace(/^### (.+)$/gm, '<h3>$1</h3>')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        .replace(/^- (.+)$/gm, '<li>$1</li>')
        .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>');
    
    // 包装段落
    if (!formattedContent.includes('<p>')) {
        formattedContent = '<p>' + formattedContent + '</p>';
    }
    
    return formattedContent;
}

// 加载话题回复
function loadTopicReplies() {
    if (!currentTopic) return;
    
    const sortSelect = document.getElementById('repliesSort');
    const sortOption = sortSelect ? sortSelect.value : 'newest';
    
    currentReplies = ForumUtils.getTopicReplies(currentTopic.id, { sort: sortOption });
    
    // 更新回复数量
    const repliesCount = document.getElementById('repliesCount');
    if (repliesCount) {
        repliesCount.textContent = currentReplies.length;
    }
    
    // 渲染回复列表
    renderRepliesList();
}

// 渲染回复列表
function renderRepliesList() {
    const container = document.getElementById('repliesList');
    if (!container) return;
    
    if (currentReplies.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state__icon">💬</div>
                <h3 class="empty-state__title">暂无回复</h3>
                <p class="empty-state__description">快来发表第一个回复吧！</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = currentReplies.map(reply => createReplyItem(reply)).join('');
}

// 创建回复项
function createReplyItem(reply) {
    const levelInfo = ForumUtils.getUserLevelInfo(reply.author.level);
    const hasLiked = UserPreferences.hasLikedReply(reply.id);
    const likeClass = hasLiked ? 'reply-action reply-action--liked' : 'reply-action';
    
    return `
        <div class="reply-item" id="reply-${reply.id}">
            <div class="reply__header">
                <div class="reply__author">
                    <div class="reply__avatar">${reply.author.avatar}</div>
                    <div class="reply__author-info">
                        <div class="reply__author-name">${reply.author.name}</div>
                        <div class="reply__time">${ForumUtils.formatTime(reply.createdAt)}</div>
                    </div>
                </div>
                <div class="reply__actions">
                    <button class="${likeClass}" onclick="likeReply('${reply.id}')" data-reply-id="${reply.id}">
                        <span class="action-icon">👍</span>
                        <span class="action-text">${reply.likes}</span>
                    </button>
                    <button class="reply__action" onclick="replyToReply('${reply.id}', '${reply.author.name}')">
                        <span class="action-icon">💬</span>
                        <span class="action-text">回复</span>
                    </button>
                </div>
            </div>
            <div class="reply__content">
                ${formatTopicContent(reply.content)}
            </div>
        </div>
    `;
}

// 加载相关话题
function loadRelatedTopics() {
    if (!currentTopic) return;
    
    const container = document.getElementById('relatedTopics');
    if (!container) return;
    
    // 获取相关话题（同分类或相同标签）
    const relatedTopics = ForumData.topics.filter(topic => 
        topic.id !== currentTopic.id && (
            topic.category === currentTopic.category ||
            topic.tags.some(tag => currentTopic.tags.includes(tag))
        )
    ).slice(0, 4);
    
    if (relatedTopics.length === 0) {
        container.innerHTML = '<p class="no-related">暂无相关话题</p>';
        return;
    }
    
    container.innerHTML = relatedTopics.map(topic => {
        const category = ForumUtils.getCategoryById(topic.category);
        return `
            <div class="topic-card" onclick="window.location.href='topic.html?id=${topic.id}'">
                <div class="topic-card__header">
                    <span class="topic-card__category" style="background-color: ${category?.color || '#666'}">${category?.name || '其他'}</span>
                </div>
                <h3 class="topic-card__title">${topic.title}</h3>
                <div class="topic-card__meta">
                    <span class="topic-author">${topic.author.name}</span>
                    <div class="topic-card__stats">
                        <span class="stat-item">👁️ ${ForumUtils.formatNumber(topic.views)}</span>
                        <span class="stat-item">💬 ${topic.replies}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// 绑定话题事件
function bindTopicEvents() {
    // 点赞按钮
    const likeBtn = document.getElementById('likeBtn');
    if (likeBtn) {
        likeBtn.addEventListener('click', function() {
            likeTopic();
        });
    }
    
    // 收藏按钮
    const favoriteBtn = document.getElementById('favoriteBtn');
    if (favoriteBtn) {
        favoriteBtn.addEventListener('click', function() {
            favoriteTopic();
        });
    }
    
    // 分享按钮
    const shareBtn = document.getElementById('shareBtn');
    if (shareBtn) {
        shareBtn.addEventListener('click', function() {
            showShareModal();
        });
    }
    
    // 回复排序
    const repliesSort = document.getElementById('repliesSort');
    if (repliesSort) {
        repliesSort.addEventListener('change', function() {
            loadTopicReplies();
        });
    }
    
    // 回复表单
    const replyForm = document.getElementById('replyForm');
    if (replyForm) {
        replyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            submitReply();
        });
    }
    
    // 分享模态框关闭
    const closeShareModal = document.getElementById('closeShareModal');
    if (closeShareModal) {
        closeShareModal.addEventListener('click', function() {
            hideShareModal();
        });
    }
    
    // 复制链接
    const copyLinkBtn = document.getElementById('copyLinkBtn');
    if (copyLinkBtn) {
        copyLinkBtn.addEventListener('click', function() {
            copyTopicLink();
        });
    }
}

// 点赞话题
function likeTopic() {
    if (!currentTopic) return;
    
    const likeBtn = document.getElementById('likeBtn');
    const topicLikes = document.getElementById('topicLikes');
    
    // 检查是否已点赞
    const hasLiked = UserPreferences.hasLikedTopic(currentTopic.id);
    
    if (hasLiked) {
        // 取消点赞
        UserPreferences.removeTopicLike(currentTopic.id);
        ForumUtils.unlikeTopic(currentTopic.id);
        currentTopic.likes--;
        
        // 更新按钮状态
        if (likeBtn) {
            likeBtn.classList.remove('btn--liked');
            likeBtn.querySelector('.btn__text').textContent = '点赞';
        }
        
        // 更新显示
        if (topicLikes) {
            topicLikes.textContent = currentTopic.likes;
        }
        
        showNotification('已取消点赞', 'info');
    } else {
        // 添加点赞
        UserPreferences.addTopicLike(currentTopic.id);
        ForumUtils.likeTopic(currentTopic.id);
        currentTopic.likes++;
        
        // 更新按钮状态
        if (likeBtn) {
            likeBtn.classList.add('btn--liked');
            likeBtn.querySelector('.btn__text').textContent = '已点赞';
        }
        
        // 更新显示
        if (topicLikes) {
            topicLikes.textContent = currentTopic.likes;
        }
        
        showNotification('点赞成功！', 'success');
    }
}

// 收藏话题
function favoriteTopic() {
    if (!currentTopic) return;
    
    // 这里可以添加收藏逻辑
    showNotification('收藏成功！', 'success');
}

// 显示分享模态框
function showShareModal() {
    const modal = document.getElementById('shareModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

// 隐藏分享模态框
function hideShareModal() {
    const modal = document.getElementById('shareModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// 复制话题链接
function copyTopicLink() {
    const url = window.location.href;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
            showNotification('链接已复制到剪贴板', 'success');
            hideShareModal();
        });
    } else {
        // 兼容旧浏览器
        const textArea = document.createElement('textarea');
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('链接已复制到剪贴板', 'success');
        hideShareModal();
    }
}

// 提交回复
function submitReply() {
    if (!currentTopic) return;
    
    const replyContent = document.getElementById('replyContent');
    if (!replyContent) return;
    
    const content = replyContent.value.trim();
    if (!content) {
        showNotification('请输入回复内容', 'error');
        return;
    }
    
    // 创建回复数据
    const replyData = {
        topicId: currentTopic.id,
        content: content,
        author: {
            name: '当前用户', // 实际应用中应该从登录状态获取
            avatar: '👤',
            level: '新手',
            joinDate: new Date().toISOString().split('T')[0]
        }
    };
    
    // 添加回复
    const newReply = ForumUtils.createReply(replyData);
    
    // 清空表单
    replyContent.value = '';
    
    // 重新加载回复列表
    loadTopicReplies();
    
    // 更新话题信息
    currentTopic = ForumUtils.getTopicById(currentTopic.id);
    const topicReplies = document.getElementById('topicReplies');
    if (topicReplies) {
        topicReplies.textContent = currentTopic.replies;
    }
    
    showNotification('回复发表成功！', 'success');
    
    // 滚动到新回复
    setTimeout(() => {
        const newReplyElement = document.getElementById(`reply-${newReply.id}`);
        if (newReplyElement) {
            newReplyElement.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
}

// 点赞回复
function likeReply(replyId) {
    // 检查是否已点赞
    const hasLiked = UserPreferences.hasLikedReply(replyId);
    
    if (hasLiked) {
        // 取消点赞
        UserPreferences.removeReplyLike(replyId);
        ForumUtils.unlikeReply(replyId);
        showNotification('已取消点赞', 'info');
    } else {
        // 添加点赞
        UserPreferences.addReplyLike(replyId);
        ForumUtils.likeReply(replyId);
        showNotification('点赞成功！', 'success');
    }
    
    // 重新加载回复列表以更新UI
    loadTopicReplies();
}

// 回复某个回复
function replyToReply(replyId, authorName) {
    const replyContent = document.getElementById('replyContent');
    if (replyContent) {
        replyContent.value = `@${authorName} `;
        replyContent.focus();
        
        // 滚动到回复区域
        const replySection = document.querySelector('.reply-form-section');
        if (replySection) {
            replySection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// 显示错误
function showError(message) {
    document.body.innerHTML = `
        <div class="error-page">
            <div class="error-content">
                <h1>404</h1>
                <p>${message}</p>
                <a href="index.html" class="btn btn--primary">返回论坛首页</a>
            </div>
        </div>
    `;
}

// 显示通知
function showNotification(message, type = 'info') {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    
    // 添加到页面
    document.body.appendChild(notification);
    
    // 显示动画
    setTimeout(() => {
        notification.classList.add('notification--show');
    }, 10);
    
    // 自动隐藏
    setTimeout(() => {
        notification.classList.remove('notification--show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// 全局函数供HTML调用
window.likeReply = likeReply;
window.replyToReply = replyToReply;

