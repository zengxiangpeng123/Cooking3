// Forum Topics Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initForumTopics();
});

let currentPage = 1;
const topicsPerPage = 10;
let currentFilters = {
    category: 'all',
    sort: 'latest',
    search: ''
};

function initForumTopics() {
    // 从URL获取参数
    parseURLParams();
    
    // 初始化过滤器
    initFilters();
    
    // 渲染话题列表
    renderTopicsList();
    
    // 绑定事件
    bindFilterEvents();
    bindSearchEvents();
}

// 解析URL参数
function parseURLParams() {
    const urlParams = new URLSearchParams(window.location.search);
    
    if (urlParams.has('category')) {
        currentFilters.category = urlParams.get('category');
    }
    if (urlParams.has('sort')) {
        currentFilters.sort = urlParams.get('sort');
    }
    if (urlParams.has('search')) {
        currentFilters.search = urlParams.get('search');
    }
    if (urlParams.has('page')) {
        currentPage = parseInt(urlParams.get('page')) || 1;
    }
}

// 初始化过滤器
function initFilters() {
    // 设置分类过滤器
    const categoryButtons = document.querySelectorAll('#categoryFilter .filter__btn');
    categoryButtons.forEach(btn => {
        if (btn.dataset.category === currentFilters.category) {
            btn.classList.add('filter__btn--active');
        } else {
            btn.classList.remove('filter__btn--active');
        }
    });
    
    // 设置排序选择器
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.value = currentFilters.sort;
    }
    
    // 设置搜索框
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = currentFilters.search;
    }
}

// 渲染话题列表
function renderTopicsList() {
    const container = document.getElementById('topicsContent');
    const countElement = document.getElementById('topicsCount');
    const loading = document.getElementById('loading');
    const emptyState = document.getElementById('emptyState');
    
    if (!container) return;
    
    // 显示加载状态
    if (loading) loading.style.display = 'block';
    container.innerHTML = '';
    if (emptyState) emptyState.style.display = 'none';
    
    // 模拟加载延迟
    setTimeout(() => {
        const options = {
            category: currentFilters.category,
            sort: currentFilters.sort,
            search: currentFilters.search,
            page: currentPage,
            limit: topicsPerPage
        };
        
        const allTopics = ForumUtils.getTopics({
            category: currentFilters.category,
            sort: currentFilters.sort,
            search: currentFilters.search
        });
        
        const topics = ForumUtils.getTopics(options);
        
        // 隐藏加载状态
        if (loading) loading.style.display = 'none';
        
        // 更新话题数量
        if (countElement) {
            countElement.textContent = `共找到 ${allTopics.length} 个话题`;
        }
        
        if (topics.length === 0) {
            // 显示空状态
            if (emptyState) emptyState.style.display = 'block';
            return;
        }
        
        // 渲染话题
        container.innerHTML = topics.map(topic => createTopicListItem(topic)).join('');
        
        // 渲染分页
        renderPagination(allTopics.length);
        
    }, 300);
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
            <h3 class="topic-card__title">${highlightSearchTerm(topic.title, currentFilters.search)}</h3>
            <p class="topic-card__excerpt">${highlightSearchTerm(getTopicExcerpt(topic.content), currentFilters.search)}</p>
            <div class="topic-tags">
                ${topic.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="topic-card__meta">
                <div class="topic-card__author">
                    <div class="topic-card__avatar">${topic.author.avatar}</div>
                    <div class="author-info">
                        <span class="author-name">${topic.author.name}</span>
                        <span class="author-level" style="color: ${levelInfo.color}">${levelInfo.icon} ${topic.author.level}</span>
                    </div>
                    <span class="topic-time">发布于 ${ForumUtils.formatTime(topic.createdAt)}</span>
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
            ${topic.lastReply ? `
                <div class="topic-card__last-reply">
                    <span class="last-reply-text">
                        最后回复：${topic.lastReply.author} · ${ForumUtils.formatTime(topic.lastReply.time)}
                    </span>
                </div>
            ` : ''}
        </div>
    `;
}

// 获取话题摘要
function getTopicExcerpt(content, maxLength = 150) {
    const plainText = content.replace(/[#*`\[\]]/g, '').replace(/\n+/g, ' ').trim();
    
    if (plainText.length <= maxLength) {
        return plainText;
    }
    
    return plainText.substring(0, maxLength) + '...';
}

// 高亮搜索关键词
function highlightSearchTerm(text, term) {
    if (!term) return text;
    
    const regex = new RegExp(`(${term})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// 渲染分页
function renderPagination(totalItems) {
    const container = document.getElementById('pagination');
    if (!container) return;
    
    const totalPages = Math.ceil(totalItems / topicsPerPage);
    
    if (totalPages <= 1) {
        container.innerHTML = '';
        return;
    }
    
    let paginationHTML = '';
    
    // 上一页
    if (currentPage > 1) {
        paginationHTML += `
            <button class="pagination__btn pagination__btn--prev" onclick="changePage(${currentPage - 1})">
                ← 上一页
            </button>
        `;
    }
    
    // 页码
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);
    
    if (startPage > 1) {
        paginationHTML += `<button class="pagination__btn" onclick="changePage(1)">1</button>`;
        if (startPage > 2) {
            paginationHTML += `<span class="pagination__ellipsis">...</span>`;
        }
    }
    
    for (let i = startPage; i <= endPage; i++) {
        paginationHTML += `
            <button class="pagination__btn ${i === currentPage ? 'pagination__btn--active' : ''}" onclick="changePage(${i})">
                ${i}
            </button>
        `;
    }
    
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            paginationHTML += `<span class="pagination__ellipsis">...</span>`;
        }
        paginationHTML += `<button class="pagination__btn" onclick="changePage(${totalPages})">${totalPages}</button>`;
    }
    
    // 下一页
    if (currentPage < totalPages) {
        paginationHTML += `
            <button class="pagination__btn pagination__btn--next" onclick="changePage(${currentPage + 1})">
                下一页 →
            </button>
        `;
    }
    
    container.innerHTML = `<div class="pagination__list">${paginationHTML}</div>`;
}

// 改变页码
function changePage(page) {
    currentPage = page;
    updateURL();
    renderTopicsList();
    
    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 绑定过滤器事件
function bindFilterEvents() {
    // 分类过滤器
    const categoryButtons = document.querySelectorAll('#categoryFilter .filter__btn');
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            categoryButtons.forEach(b => b.classList.remove('filter__btn--active'));
            this.classList.add('filter__btn--active');
            
            currentFilters.category = this.dataset.category;
            currentPage = 1;
            updateURL();
            renderTopicsList();
        });
    });
    
    // 排序选择器
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            currentFilters.sort = this.value;
            currentPage = 1;
            updateURL();
            renderTopicsList();
        });
    }
}

// 绑定搜索事件
function bindSearchEvents() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            currentFilters.search = searchInput.value.trim();
            currentPage = 1;
            updateURL();
            renderTopicsList();
        });
    }
}

// 更新URL
function updateURL() {
    const params = new URLSearchParams();
    
    if (currentFilters.category !== 'all') {
        params.set('category', currentFilters.category);
    }
    if (currentFilters.sort !== 'latest') {
        params.set('sort', currentFilters.sort);
    }
    if (currentFilters.search) {
        params.set('search', currentFilters.search);
    }
    if (currentPage > 1) {
        params.set('page', currentPage);
    }
    
    const newURL = window.location.pathname + (params.toString() ? '?' + params.toString() : '');
    window.history.replaceState({}, '', newURL);
}

// 全局函数供HTML调用
window.changePage = changePage;
