// 全局搜索功能 - 所有页面的搜索框都跳转到菜谱大全

class GlobalSearch {
    constructor() {
        this.init();
    }

    init() {
        // 等待DOM加载完成
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.bindSearchEvents();
            });
        } else {
            this.bindSearchEvents();
        }
    }

    bindSearchEvents() {
        // 获取所有搜索表单
        const searchForms = document.querySelectorAll('.search__form, #searchForm, #forumSearchForm');
        
        searchForms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSearch(form);
            });
        });

        console.log(`✅ 全局搜索已初始化，绑定了 ${searchForms.length} 个搜索框`);
    }

    handleSearch(form) {
        // 获取搜索输入框
        const input = form.querySelector('.search__input, #searchInput, #forumSearchInput');
        
        if (!input) {
            console.warn('未找到搜索输入框');
            return;
        }

        const query = input.value.trim();
        
        if (!query) {
            this.showToast('请输入搜索内容', 'warning');
            return;
        }

        // 构建搜索URL
        const searchUrl = this.buildSearchUrl(query);
        
        console.log('🔍 搜索内容:', query);
        console.log('🔗 跳转到:', searchUrl);
        
        // 跳转到菜谱列表页面进行搜索
        window.location.href = searchUrl;
    }

    buildSearchUrl(query) {
        // 获取当前页面路径
        const currentPath = window.location.pathname;
        
        // 根据当前路径计算相对路径
        let basePath = '';
        
        if (currentPath.includes('/pages/recipes/')) {
            basePath = 'list.html';
        } else if (currentPath.includes('/pages/')) {
            basePath = '../recipes/list.html';
        } else if (currentPath.includes('main.html') || currentPath.includes('index.html') || currentPath === '/') {
            basePath = 'pages/recipes/list.html';
        } else {
            // 默认使用绝对路径
            basePath = 'pages/recipes/list.html';
        }
        
        // 编码搜索关键词
        const encodedQuery = encodeURIComponent(query);
        
        return `${basePath}?search=${encodedQuery}`;
    }

    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : type === 'warning' ? '#ffc107' : '#007bff'};
            color: ${type === 'warning' ? '#000' : '#fff'};
            padding: 15px 25px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            z-index: 10000;
            font-size: 14px;
            font-weight: 500;
            opacity: 0;
            transform: translateX(100px);
            transition: all 0.3s ease;
        `;

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translateX(0)';
        }, 10);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100px)';
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, 2000);
    }
}

// 创建全局搜索实例
window.globalSearch = new GlobalSearch();

// 导出类
window.GlobalSearch = GlobalSearch;
