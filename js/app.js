// Main Application File

class CookingPlatformApp {
    constructor() {
        this.init();
    }

    init() {
        // 等待DOM加载完成
        DOMUtil.ready(() => {
            this.setupGlobalComponents();
            this.setupGlobalEvents();
            this.checkBrowserSupport();
            this.loadUserPreferences();
            this.setupServiceWorker();
        });
    }

    setupGlobalComponents() {
        // 初始化头部组件
        this.initHeader();
        
        // 初始化搜索功能
        this.initSearch();
        
        // 初始化收藏功能
        this.initFavorites();
        
        // 初始化懒加载
        this.initLazyLoading();
        
        // 初始化返回顶部按钮
        this.initBackToTop();
    }

    setupGlobalEvents() {
        // 监听页面可见性变化
        document.addEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
        
        // 监听在线/离线状态
        window.addEventListener('online', this.handleOnline.bind(this));
        window.addEventListener('offline', this.handleOffline.bind(this));
        
        // 监听窗口大小变化
        window.addEventListener('resize', DOMUtil.throttle(this.handleResize.bind(this), 250));
        
        // 全局错误处理
        window.addEventListener('error', this.handleError.bind(this));
        window.addEventListener('unhandledrejection', this.handleUnhandledRejection.bind(this));
        
        // 监听存储变化（多标签页同步）
        window.addEventListener('storage', this.handleStorageChange.bind(this));
    }

    initHeader() {
        // 移动端菜单功能
        const mobileMenuBtn = DOMUtil.$('#mobileMenuBtn');
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', this.toggleMobileMenu.bind(this));
        }

        // 滚动时头部样式变化
        window.addEventListener('scroll', DOMUtil.throttle(() => {
            const header = DOMUtil.$('.header');
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 50) {
                DOMUtil.addClass(header, 'header--scrolled');
            } else {
                DOMUtil.removeClass(header, 'header--scrolled');
            }
        }, 100));
    }

    toggleMobileMenu() {
        const header = DOMUtil.$('.header');
        DOMUtil.toggleClass(header, 'header--mobile-open');
        
        // 阻止页面滚动
        const isOpen = DOMUtil.hasClass(header, 'header--mobile-open');
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    initSearch() {
        // 搜索表单处理
        const searchForms = DOMUtil.$$('.search__form');
        searchForms.forEach(form => {
            form.addEventListener('submit', this.handleSearch.bind(this));
        });

        // 搜索建议功能
        const searchInputs = DOMUtil.$$('.search__input');
        searchInputs.forEach(input => {
            input.addEventListener('input', DOMUtil.debounce(this.handleSearchInput.bind(this), 300));
            input.addEventListener('focus', this.showSearchSuggestions.bind(this));
            input.addEventListener('blur', this.hideSearchSuggestions.bind(this));
        });
    }

    handleSearch(e) {
        e.preventDefault();
        const input = e.target.querySelector('.search__input');
        const query = input.value.trim();
        
        if (query) {
            // 添加到搜索历史
            UserPreferences.addSearchHistory(query);
            
            // 跳转到搜索结果页
            const searchUrl = this.getSearchUrl(query);
            window.location.href = searchUrl;
        }
    }

    handleSearchInput(e) {
        const query = e.target.value.trim();
        if (query.length >= 2) {
            this.showSearchSuggestions(e);
        } else {
            this.hideSearchSuggestions();
        }
    }

    showSearchSuggestions(e) {
        const input = e.target;
        const query = input.value.trim();
        
        if (query.length < 2) return;
        
        let dropdown = DOMUtil.$('.search__dropdown');
        if (!dropdown) {
            dropdown = this.createSearchDropdown(input);
        }
        
        this.updateSearchSuggestions(dropdown, query);
        DOMUtil.addClass(dropdown, 'search__dropdown--visible');
    }

    hideSearchSuggestions() {
        setTimeout(() => {
            const dropdown = DOMUtil.$('.search__dropdown');
            if (dropdown) {
                DOMUtil.removeClass(dropdown, 'search__dropdown--visible');
            }
        }, 200);
    }

    createSearchDropdown(input) {
        const dropdown = DOMUtil.createElement('div', {
            className: 'search__dropdown'
        });
        
        const container = input.closest('.header__search') || input.parentElement;
        container.style.position = 'relative';
        container.appendChild(dropdown);
        
        return dropdown;
    }

    updateSearchSuggestions(dropdown, query) {
        // 获取搜索建议
        const suggestions = this.getSearchSuggestions(query);
        
        dropdown.innerHTML = '';
        
        if (suggestions.length > 0) {
            const list = DOMUtil.createElement('ul', {
                className: 'search__suggestions'
            });
            
            suggestions.forEach(suggestion => {
                const item = DOMUtil.createElement('li', {
                    className: 'search__suggestion'
                });
                
                const link = DOMUtil.createElement('a', {
                    href: this.getSearchUrl(suggestion.text),
                    innerHTML: this.highlightQuery(suggestion.text, query)
                });
                
                item.appendChild(link);
                list.appendChild(item);
            });
            
            dropdown.appendChild(list);
        }
    }

    getSearchSuggestions(query) {
        const searchHistory = UserPreferences.getSearchHistory();
        const recipes = RecipeUtils.searchRecipes(query).slice(0, 5);
        
        const suggestions = [];
        
        // 添加搜索历史
        searchHistory
            .filter(term => term.toLowerCase().includes(query.toLowerCase()))
            .slice(0, 3)
            .forEach(term => {
                suggestions.push({ text: term, type: 'history' });
            });
        
        // 添加菜谱标题
        recipes.forEach(recipe => {
            suggestions.push({ text: recipe.title, type: 'recipe' });
        });
        
        return suggestions.slice(0, 8);
    }

    highlightQuery(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<strong>$1</strong>');
    }

    getSearchUrl(query) {
        const currentPath = window.location.pathname;
        const basePath = currentPath.includes('/pages/') ? '../../' : '';
        return `${basePath}pages/recipes/list.html?search=${encodeURIComponent(query)}`;
    }

    initFavorites() {
        // 收藏按钮事件委托
        document.addEventListener('click', (e) => {
            if (e.target.matches('.recipe-card__favorite, .favorite-btn')) {
                e.preventDefault();
                e.stopPropagation();
                
                const recipeId = e.target.dataset.recipeId;
                if (recipeId) {
                    this.toggleFavorite(recipeId, e.target);
                }
            }
        });
    }

    toggleFavorite(recipeId, buttonElement) {
        const isFavorite = UserPreferences.isFavorite(recipeId);
        
        if (isFavorite) {
            UserPreferences.removeFavorite(recipeId);
            this.updateFavoriteButton(buttonElement, false);
            this.showNotification('已取消收藏');
        } else {
            UserPreferences.addFavorite(recipeId);
            this.updateFavoriteButton(buttonElement, true);
            this.showNotification('已添加到收藏');
        }
        
        // 触发收藏变化事件
        DOMUtil.trigger(document, 'favoriteChanged', { recipeId, isFavorite: !isFavorite });
    }

    updateFavoriteButton(button, isFavorite) {
        if (isFavorite) {
            DOMUtil.addClass(button, 'recipe-card__favorite--active');
            button.innerHTML = '♥';
        } else {
            DOMUtil.removeClass(button, 'recipe-card__favorite--active');
            button.innerHTML = '♡';
        }
    }

    initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        const src = img.dataset.src;
                        
                        if (src) {
                            img.src = src;
                            img.removeAttribute('data-src');
                            DOMUtil.removeClass(img, 'lazy');
                            imageObserver.unobserve(img);
                        }
                    }
                });
            });
            
            // 观察所有懒加载图片
            const lazyImages = DOMUtil.$$('img[data-src]');
            lazyImages.forEach(img => imageObserver.observe(img));
        }
    }

    initBackToTop() {
        // 创建返回顶部按钮
        const backToTopBtn = DOMUtil.createElement('button', {
            className: 'back-to-top',
            innerHTML: '↑',
            'aria-label': '返回顶部'
        });
        
        document.body.appendChild(backToTopBtn);
        
        // 滚动显示/隐藏按钮
        window.addEventListener('scroll', DOMUtil.throttle(() => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 500) {
                DOMUtil.addClass(backToTopBtn, 'back-to-top--visible');
            } else {
                DOMUtil.removeClass(backToTopBtn, 'back-to-top--visible');
            }
        }, 100));
        
        // 点击返回顶部
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    checkBrowserSupport() {
        // 检查必要的浏览器功能
        const features = {
            localStorage: 'localStorage' in window,
            flexbox: CSS.supports('display', 'flex'),
            grid: CSS.supports('display', 'grid'),
            customProperties: CSS.supports('--custom', 'property')
        };
        
        const unsupported = Object.entries(features)
            .filter(([feature, supported]) => !supported)
            .map(([feature]) => feature);
        
        if (unsupported.length > 0) {
            console.warn('不支持的浏览器功能:', unsupported);
            this.showBrowserWarning();
        }
    }

    showBrowserWarning() {
        const warning = DOMUtil.createElement('div', {
            className: 'browser-warning',
            innerHTML: `
                <div class="browser-warning__content">
                    <h3>浏览器兼容性提醒</h3>
                    <p>您的浏览器版本较老，可能影响页面显示效果。建议升级到最新版本的Chrome、Firefox或Edge浏览器。</p>
                    <button class="browser-warning__close">知道了</button>
                </div>
            `
        });
        
        document.body.appendChild(warning);
        
        const closeBtn = warning.querySelector('.browser-warning__close');
        closeBtn.addEventListener('click', () => {
            warning.remove();
        });
    }

    loadUserPreferences() {
        const preferences = UserPreferences.getPreferences();
        
        // 应用主题
        if (preferences.theme === 'dark') {
            document.body.classList.add('theme-dark');
        }
        
        // 应用其他偏好设置
        document.documentElement.lang = preferences.language;
    }

    setupServiceWorker() {
        // Service Worker 注册（用于离线缓存）
        if ('serviceWorker' in navigator && 'caches' in window) {
            // 这里可以注册 Service Worker
            // navigator.serviceWorker.register('/sw.js');
        }
    }

    // 事件处理器
    handleVisibilityChange() {
        if (document.hidden) {
            // 页面隐藏时的处理
            console.log('页面隐藏');
        } else {
            // 页面显示时的处理
            console.log('页面显示');
        }
    }

    handleOnline() {
        this.showNotification('网络已连接', 'success');
        DOMUtil.removeClass(document.body, 'offline');
    }

    handleOffline() {
        this.showNotification('网络已断开，某些功能可能不可用', 'warning');
        DOMUtil.addClass(document.body, 'offline');
    }

    handleResize() {
        // 窗口大小变化处理
        const mobileBreakpoint = 768;
        const isMobile = window.innerWidth < mobileBreakpoint;
        
        if (isMobile) {
            DOMUtil.addClass(document.body, 'is-mobile');
        } else {
            DOMUtil.removeClass(document.body, 'is-mobile');
            // 关闭移动菜单
            const header = DOMUtil.$('.header');
            DOMUtil.removeClass(header, 'header--mobile-open');
            document.body.style.overflow = '';
        }
    }

    handleError(e) {
        console.error('全局错误:', e.error);
        // 可以发送错误报告到服务器
    }

    handleUnhandledRejection(e) {
        console.error('未处理的Promise拒绝:', e.reason);
        // 阻止默认的错误处理
        e.preventDefault();
    }

    handleStorageChange(e) {
        // 处理其他标签页的存储变化
        if (e.key && e.key.startsWith('cooking_')) {
            console.log('存储变化:', e.key, e.newValue);
            // 可以更新UI以反映变化
        }
    }

    // 工具方法
    showNotification(message, type = 'info', duration = 3000) {
        const notification = DOMUtil.createElement('div', {
            className: `notification notification--${type}`,
            textContent: message
        });
        
        document.body.appendChild(notification);
        
        // 显示动画
        setTimeout(() => {
            DOMUtil.addClass(notification, 'notification--visible');
        }, 10);
        
        // 自动隐藏
        setTimeout(() => {
            DOMUtil.removeClass(notification, 'notification--visible');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, duration);
        
        // 点击关闭
        notification.addEventListener('click', () => {
            DOMUtil.removeClass(notification, 'notification--visible');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        });
    }

    // 格式化数字
    formatNumber(num) {
        if (num < 1000) return num.toString();
        if (num < 10000) return (num / 1000).toFixed(1) + 'K';
        return Math.floor(num / 1000) + 'K';
    }

    // 格式化时间
    formatTime(minutes) {
        if (minutes < 60) return `${minutes}分钟`;
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return mins > 0 ? `${hours}小时${mins}分钟` : `${hours}小时`;
    }

    // 颜色工具
    hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
}

// 初始化应用
const app = new CookingPlatformApp();

// 导出到全局
window.CookingPlatformApp = CookingPlatformApp;
