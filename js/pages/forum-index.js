// Forum Index Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initForumIndex();
});

function initForumIndex() {
    // 渲染论坛分类
    renderForumCategories();
    
    // 渲染热门话题
    renderHotTopics();
    
    // 渲染最新话题
    renderRecentTopics();
    
    // 渲染精华内容
    renderFeaturedTopics();
    
    // 更新统计数据
    updateForumStats();
    
    // 绑定搜索事件
    bindSearchEvents();
}

// 渲染论坛分类
function renderForumCategories() {
    const container = document.getElementById('forumCategories');
    if (!container) return;
    
    const categories = ForumUtils.getCategories();
    
    container.innerHTML = categories.map(category => `
        <a href="topics.html?category=${category.id}" class="category-card">
            <div class="category-card__header">
                <div class="category-card__icon" style="background: linear-gradient(135deg, ${category.color}, ${adjustColor(category.color, 20)});">
                    ${category.icon.includes('.png') ? 
                        `<img src="../../${category.icon}" alt="${category.name}" style="width: 48px; height: 48px; object-fit: contain; border-radius: 8px;">` : 
                        category.icon
                    }
                </div>
                <div class="category-card__info">
                    <h3 class="category-card__title">${category.name}</h3>
                    <p class="category-card__desc">${category.description}</p>
                </div>
            </div>
            <div class="category-card__stats">
                <div class="category-stat">
                    <span class="category-stat__number">${ForumUtils.formatNumber(category.topicCount)}</span>
                    <span class="category-stat__label">话题</span>
                </div>
                <div class="category-stat">
                    <span class="category-stat__number">${ForumUtils.formatNumber(category.replyCount)}</span>
                    <span class="category-stat__label">回复</span>
                </div>
                <div class="category-stat">
                    <span class="category-stat__number">${category.moderators.length}</span>
                    <span class="category-stat__label">版主</span>
                </div>
            </div>
        </a>
    `).join('');
}

// 渲染热门话题
function renderHotTopics() {
    const container = document.getElementById('hotTopics');
    if (!container) return;
    
    const topics = ForumUtils.getHotTopics(5);
    
    container.innerHTML = topics.map(topic => createTopicListItem(topic)).join('');
}

// 渲染最新话题
function renderRecentTopics() {
    const container = document.getElementById('recentTopics');
    if (!container) return;
    
    const topics = ForumUtils.getRecentTopics(5);
    
    container.innerHTML = topics.map(topic => createTopicListItem(topic)).join('');
}

// 渲染精华内容
function renderFeaturedTopics() {
    const container = document.getElementById('featuredTopics');
    if (!container) return;
    
    const topics = ForumUtils.getFeaturedTopics(6);
    
    container.innerHTML = topics.map(topic => createTopicCard(topic)).join('');
}

// 创建话题列表项
function createTopicListItem(topic) {
    const category = ForumUtils.getCategoryById(topic.category);
    const levelInfo = ForumUtils.getUserLevelInfo(topic.author.level);
    
    return `
        <div class="topic-card" onclick="window.location.href='topic.html?id=${topic.id}'">
            <div class="topic-card__header">
                <span class="topic-card__category" style="background-color: ${category?.color || '#666'}">${category?.name || '其他'}</span>
                ${topic.featured ? '<span class="topic-card__featured">精华</span>' : ''}
                ${topic.pinned ? '<span class="topic-card__pinned">📌</span>' : ''}
            </div>
            <h3 class="topic-card__title">${topic.title}</h3>
            <div class="topic-card__meta">
                <div class="topic-card__author">
                    <div class="topic-card__avatar">${topic.author.avatar}</div>
                    <div class="author-info">
                        <span class="author-name">${topic.author.name}</span>
                        <span class="author-level" style="color: ${levelInfo.color}">${levelInfo.icon} ${topic.author.level}</span>
                    </div>
                    <span class="topic-time">${ForumUtils.formatTime(topic.createdAt)}</span>
                </div>
                <div class="topic-card__stats">
                    <div class="topic-card__stat">
                        <span class="stat-icon">👁️</span>
                        <span class="stat-number">${ForumUtils.formatNumber(topic.views)}</span>
                    </div>
                    <div class="topic-card__stat">
                        <span class="stat-icon">💬</span>
                        <span class="stat-number">${topic.replies}</span>
                    </div>
                    <div class="topic-card__stat">
                        <span class="stat-icon">👍</span>
                        <span class="stat-number">${topic.likes}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 创建话题卡片
function createTopicCard(topic) {
    const category = ForumUtils.getCategoryById(topic.category);
    const levelInfo = ForumUtils.getUserLevelInfo(topic.author.level);
    
    return `
        <div class="topic-card" onclick="window.location.href='topic.html?id=${topic.id}'">
            <div class="topic-card__header">
                <span class="topic-card__category" style="background-color: ${category?.color || '#666'}">${category?.name || '其他'}</span>
                ${topic.featured ? '<span class="topic-card__featured">精华</span>' : ''}
                ${topic.pinned ? '<span class="topic-card__pinned">📌</span>' : ''}
            </div>
            <h3 class="topic-card__title">${topic.title}</h3>
            <p class="topic-card__excerpt">${getTopicExcerpt(topic.content)}</p>
            <div class="topic-card__meta">
                <div class="topic-card__author">
                    <div class="topic-card__avatar">${topic.author.avatar}</div>
                    <span class="author-name">${topic.author.name}</span>
                    <span class="topic-time">${ForumUtils.formatTime(topic.createdAt)}</span>
                </div>
                <div class="topic-card__stats">
                    <div class="topic-card__stat">
                        <span class="stat-icon">👁️</span>
                        <span class="stat-number">${ForumUtils.formatNumber(topic.views)}</span>
                    </div>
                    <div class="topic-card__stat">
                        <span class="stat-icon">💬</span>
                        <span class="stat-number">${topic.replies}</span>
                    </div>
                    <div class="topic-card__stat">
                        <span class="stat-icon">👍</span>
                        <span class="stat-number">${topic.likes}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 获取话题摘要
function getTopicExcerpt(content, maxLength = 120) {
    // 移除Markdown格式
    const plainText = content.replace(/[#*`\[\]]/g, '').replace(/\n+/g, ' ').trim();
    
    if (plainText.length <= maxLength) {
        return plainText;
    }
    
    return plainText.substring(0, maxLength) + '...';
}

// 更新论坛统计数据
function updateForumStats() {
    const stats = ForumUtils.getStats();
    
    const elements = {
        totalTopics: document.getElementById('totalTopics'),
        totalReplies: document.getElementById('totalReplies'),
        onlineUsers: document.getElementById('onlineUsers')
    };
    
    if (elements.totalTopics) {
        elements.totalTopics.textContent = ForumUtils.formatNumber(stats.totalTopics);
    }
    if (elements.totalReplies) {
        elements.totalReplies.textContent = ForumUtils.formatNumber(stats.totalReplies);
    }
    if (elements.onlineUsers) {
        elements.onlineUsers.textContent = stats.onlineUsers;
    }
}

// 绑定搜索事件
function bindSearchEvents() {
    const searchForm = document.getElementById('forumSearchForm');
    const searchInput = document.getElementById('forumSearchInput');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const query = searchInput.value.trim();
            if (query) {
                window.location.href = `topics.html?search=${encodeURIComponent(query)}`;
            }
        });
    }
}

// 调整颜色亮度
function adjustColor(color, amount) {
    const usePound = color[0] === '#';
    const col = usePound ? color.slice(1) : color;
    const num = parseInt(col, 16);
    
    let r = (num >> 16) + amount;
    let g = (num >> 8 & 0x00FF) + amount;
    let b = (num & 0x0000FF) + amount;
    
    r = r > 255 ? 255 : r < 0 ? 0 : r;
    g = g > 255 ? 255 : g < 0 ? 0 : g;
    b = b > 255 ? 255 : b < 0 ? 0 : b;
    
    return (usePound ? '#' : '') + (r << 16 | g << 8 | b).toString(16).padStart(6, '0');
}
