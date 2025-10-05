// Home Page JavaScript

class HomePage {
    constructor() {
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadContent();
        this.setupAnimations();
    }

    bindEvents() {
        // 搜索功能
        const searchForm = DOMUtil.$('#searchForm');
        if (searchForm) {
            searchForm.addEventListener('submit', this.handleSearch.bind(this));
        }

        // 移动端菜单切换
        const mobileMenuBtn = DOMUtil.$('#mobileMenuBtn');
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', this.toggleMobileMenu.bind(this));
        }

        // 关闭移动菜单（点击外部）
        document.addEventListener('click', (e) => {
            const mobileNav = DOMUtil.$('.header__mobile-nav');
            const menuBtn = DOMUtil.$('#mobileMenuBtn');
            
            if (mobileNav && menuBtn && 
                DOMUtil.hasClass(mobileNav, 'header__mobile-nav--active') &&
                !mobileNav.contains(e.target) && 
                !menuBtn.contains(e.target)) {
                this.closeMobileMenu();
            }
        });

        // 窗口滚动事件
        window.addEventListener('scroll', DOMUtil.throttle(this.handleScroll.bind(this), 100));

        // 收藏按钮事件委托
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('recipe-card__favorite')) {
                e.preventDefault();
                e.stopPropagation();
                const recipeId = e.target.getAttribute('data-recipe-id');
                if (recipeId) {
                    this.toggleFavorite(recipeId, e.target);
                }
            }
        });
    }

    handleSearch(e) {
        e.preventDefault();
        const searchInput = DOMUtil.$('#searchInput');
        const query = searchInput.value.trim();
        
        if (query) {
            // 保存搜索历史
            try {
                if (window.UserPreferences) {
                    window.UserPreferences.addSearchHistory(query);
                }
            } catch (error) {
                console.warn('保存搜索历史失败:', error);
            }
            
            // 检查数据是否可用，决定跳转到哪个页面
            if (window.RecipeData && window.RecipeData.recipes && window.RecipeData.recipes.length > 0) {
                // 数据正常，跳转到正常的菜谱列表页面
                window.location.href = `pages/recipes/list.html?search=${encodeURIComponent(query)}`;
            } else {
                // 数据加载失败，跳转到备用搜索页面
                console.log('数据未加载，跳转到备用搜索页面');
                const fixedSearchUrl = `search-fixed.html`;
                window.open(fixedSearchUrl, '_blank');
                // 同时在当前页面显示提示
                this.showSearchTip(query);
            }
        }
    }

    showSearchTip(query) {
        const tip = document.createElement('div');
        tip.innerHTML = `
            <div style="
                position: fixed; top: 80px; right: 20px; 
                background: #ff6b35; color: white; 
                padding: 15px 20px; border-radius: 8px; 
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                z-index: 10000; max-width: 300px;
            ">
                <strong>搜索 "${query}"</strong><br>
                已为您打开专用搜索页面！<br>
                <button onclick="this.parentElement.remove()" style="
                    background: rgba(255,255,255,0.2); border: none; 
                    color: white; padding: 5px 10px; border-radius: 4px; 
                    cursor: pointer; margin-top: 8px;
                ">知道了</button>
            </div>
        `;
        document.body.appendChild(tip);
        setTimeout(() => {
            if (tip.parentElement) tip.remove();
        }, 8000);
    }

    toggleMobileMenu() {
        const mobileNav = this.createMobileNav();
        const menuBtn = DOMUtil.$('#mobileMenuBtn');
        
        DOMUtil.toggleClass(mobileNav, 'header__mobile-nav--active');
        DOMUtil.toggleClass(menuBtn, 'header__menu-btn--active');
    }

    createMobileNav() {
        let mobileNav = DOMUtil.$('.header__mobile-nav');
        
        if (!mobileNav) {
            const headerContent = DOMUtil.$('.header__content');
            
            mobileNav = DOMUtil.createElement('div', {
                className: 'header__mobile-nav'
            });

            const navList = DOMUtil.createElement('ul', {
                className: 'mobile-nav__list'
            });

            // 菜单项
            const menuItems = [
                { text: '首页', href: 'index.html', active: true },
                { text: '菜谱大全', href: 'pages/recipes/list.html', active: false },
                { text: '烹饪指南', href: 'pages/guide/basics.html', active: false },
                { text: '我的收藏', href: 'pages/profile/favorites.html', active: false }
            ];

            menuItems.forEach(item => {
                const li = DOMUtil.createElement('li', { className: 'mobile-nav__item' });
                const link = DOMUtil.createElement('a', {
                    className: `mobile-nav__link ${item.active ? 'mobile-nav__link--active' : ''}`,
                    href: item.href,
                    textContent: item.text
                });
                li.appendChild(link);
                navList.appendChild(li);
            });

            // 移动搜索
            const mobileSearch = DOMUtil.createElement('div', {
                className: 'mobile-search'
            });

            const searchForm = DOMUtil.createElement('form', {
                className: 'search__form'
            });

            const searchInput = DOMUtil.createElement('input', {
                type: 'text',
                className: 'search__input',
                placeholder: '搜索菜谱或食材...'
            });

            const searchBtn = DOMUtil.createElement('button', {
                type: 'submit',
                className: 'search__btn'
            });

            const searchIcon = DOMUtil.createElement('span', {
                className: 'search__icon',
                textContent: '🔍'
            });

            searchBtn.appendChild(searchIcon);
            searchForm.appendChild(searchInput);
            searchForm.appendChild(searchBtn);
            mobileSearch.appendChild(searchForm);

            mobileNav.appendChild(navList);
            mobileNav.appendChild(mobileSearch);
            
            headerContent.appendChild(mobileNav);
        }
        
        return mobileNav;
    }

    closeMobileMenu() {
        const mobileNav = DOMUtil.$('.header__mobile-nav');
        const menuBtn = DOMUtil.$('#mobileMenuBtn');
        
        if (mobileNav) {
            DOMUtil.removeClass(mobileNav, 'header__mobile-nav--active');
        }
        if (menuBtn) {
            DOMUtil.removeClass(menuBtn, 'header__menu-btn--active');
        }
    }

    handleScroll() {
        const header = DOMUtil.$('.header');
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            DOMUtil.addClass(header, 'header--scrolled');
        } else {
            DOMUtil.removeClass(header, 'header--scrolled');
        }

        // 滚动动画
        this.animateOnScroll();
    }

    handleFavoriteClick(e) {
        if (e.target.classList.contains('recipe-card__favorite')) {
            e.preventDefault();
            e.stopPropagation();
            
            const recipeId = e.target.dataset.recipeId;
            if (recipeId) {
                this.toggleFavorite(recipeId, e.target);
            }
        }
    }

    toggleFavorite(recipeId, buttonElement) {
        const isFavorite = UserPreferences.isFavorite(recipeId);
        
        if (isFavorite) {
            UserPreferences.removeFavorite(recipeId);
            DOMUtil.removeClass(buttonElement, 'recipe-card__favorite--active');
            buttonElement.innerHTML = '♡';
        } else {
            UserPreferences.addFavorite(recipeId);
            DOMUtil.addClass(buttonElement, 'recipe-card__favorite--active');
            buttonElement.innerHTML = '♥';
        }
    }

    loadContent() {
        this.loadCategories();
        this.loadFeaturedRecipes();
        this.loadPopularRecipes();
        this.loadCookingTips();
    }

    loadCategories() {
        const grid = DOMUtil.$('#categoriesGrid');
        if (!grid) return;

        // 背景图片映射
        const backgroundImages = {
            'sichuan': 'data/imgs/popular_cuisine/川菜.png',
            'cantonese': 'data/imgs/popular_cuisine/粤菜.png',
            'hunan': 'data/imgs/popular_cuisine/緗菜.png',
            'shandong': 'data/imgs/popular_cuisine/鲁菜.png',
            'jiangsu': 'data/imgs/popular_cuisine/苏菜.png',
            'zhejiang': 'data/imgs/popular_cuisine/浙菜.png',
            'fujian': 'data/imgs/popular_cuisine/闽菜.png',
            'anhui': 'data/imgs/popular_cuisine/微菜.png'
        };

        const categories = Object.entries(RecipeData.cuisines).slice(0, 8);
        
        categories.forEach(([key, category]) => {
            const recipeCount = RecipeUtils.getRecipesByCuisine(key).length;
            
            const categoryCard = DOMUtil.createElement('a', {
                className: 'category-card',
                href: `pages/recipes/list.html?cuisine=${key}`
            });

            const cardContent = DOMUtil.createElement('div', {
                className: 'category-card__content'
            });

            const icon = DOMUtil.createElement('span', {
                className: 'category-card__icon',
                textContent: category.icon
            });

            const title = DOMUtil.createElement('h3', {
                className: 'category-card__title',
                textContent: category.name
            });

            const count = DOMUtil.createElement('p', {
                className: 'category-card__count',
                textContent: `${recipeCount} 道菜谱`
            });

            cardContent.appendChild(icon);
            cardContent.appendChild(title);
            cardContent.appendChild(count);
            categoryCard.appendChild(cardContent);

            // 设置背景图片（如果有）或背景色
            if (backgroundImages[key]) {
                categoryCard.style.backgroundImage = `url('${backgroundImages[key]}')`;
                categoryCard.classList.add('category-card--with-image');
            } else {
                categoryCard.style.background = `linear-gradient(135deg, ${category.color}, ${this.darkenColor(category.color, 20)})`;
            }

            grid.appendChild(categoryCard);
        });
    }

    loadFeaturedRecipes() {
        const grid = DOMUtil.$('#featuredRecipes');
        if (!grid) return;

        const recipes = RecipeUtils.getFeaturedRecipes(8);
        this.renderRecipeGrid(grid, recipes);
    }

    loadPopularRecipes() {
        const grid = DOMUtil.$('#popularRecipes');
        if (!grid) return;

        const recipes = RecipeUtils.getPopularRecipes(8);
        this.renderRecipeGrid(grid, recipes);
    }

    renderRecipeGrid(container, recipes) {
        recipes.forEach(recipe => {
            const recipeCard = this.createRecipeCard(recipe);
            container.appendChild(recipeCard);
        });
    }

    createRecipeCard(recipe) {
        const card = DOMUtil.createElement('article', {
            className: 'recipe-card card'
        });

        const difficultyInfo = RecipeUtils.getDifficultyInfo(recipe.difficulty);
        const cuisineInfo = RecipeUtils.getCuisineInfo(recipe.cuisine);

        // 生成标准图片路径
        const standardImagePath = this.generateStandardImagePath(recipe);
        const hasRealImage = standardImagePath;
        
        // 图片区域
        const imageContainer = DOMUtil.createElement('div', {
            className: 'recipe-card__image'
        });
        
        if (hasRealImage) {
            // 使用真实图片作为背景
            imageContainer.innerHTML = `
                <div style="
                    background-image: url('${standardImagePath}');
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    height: 200px;
                    position: relative;
                    border-radius: 12px 12px 0 0;
                ">
                    <!-- 半透明遮罩 -->
                    <div style="
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6));
                        border-radius: 12px 12px 0 0;
                        z-index: 1;
                    "></div>
                    <!-- 菜名显示在图片上 -->
                    <div style="
                        position: absolute;
                        bottom: 15px;
                        left: 15px;
                        right: 15px;
                        color: white;
                        z-index: 2;
                    ">
                        <div style="font-size: 1.1rem; font-weight: 700; text-shadow: 0 1px 3px rgba(0,0,0,0.8);">${recipe.title}</div>
                        <div style="font-size: 0.85rem; opacity: 0.9; margin-top: 0.25rem; text-shadow: 0 1px 2px rgba(0,0,0,0.8);">${cuisineInfo.name}</div>
                    </div>
                </div>
            `;
        } else {
            // 使用彩色占位符
            imageContainer.innerHTML = `
                <div class="recipe-card__image-placeholder" style="
                    background: linear-gradient(135deg, ${cuisineInfo.color}, ${this.darkenColor(cuisineInfo.color, 20)});
                    height: 200px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    border-radius: 12px 12px 0 0;
                ">
                    <div style="text-align: center;">
                        <div style="font-size: 3rem; margin-bottom: 0.5rem;">${cuisineInfo.icon}</div>
                        <div style="font-size: 1rem; font-weight: 600; opacity: 0.9;">${recipe.title}</div>
                        <div style="font-size: 0.8rem; opacity: 0.7; margin-top: 0.25rem;">${cuisineInfo.name}</div>
                    </div>
                </div>
            `;
        }

        // 收藏按钮
        const favoriteBtn = DOMUtil.createElement('button', {
            className: `recipe-card__favorite ${UserPreferences.isFavorite(recipe.id) ? 'recipe-card__favorite--active' : ''}`,
            'data-recipe-id': recipe.id,
            innerHTML: UserPreferences.isFavorite(recipe.id) ? '♥' : '♡'
        });
        favoriteBtn.style.position = 'absolute';
        favoriteBtn.style.top = '10px';
        favoriteBtn.style.left = '10px';
        favoriteBtn.style.zIndex = '3';

        // 难度标签
        const badge = DOMUtil.createElement('div', {
            className: 'recipe-card__badge',
            textContent: difficultyInfo.name
        });
        badge.style.position = 'absolute';
        badge.style.top = '10px';
        badge.style.right = '10px';
        badge.style.zIndex = '3';

        imageContainer.style.position = 'relative';
        imageContainer.appendChild(favoriteBtn);
        imageContainer.appendChild(badge);

        // 内容区域
        const content = DOMUtil.createElement('div', {
            className: 'recipe-card__content'
        });

        const title = DOMUtil.createElement('h3', {
            className: 'recipe-card__title',
            textContent: recipe.title
        });

        const description = DOMUtil.createElement('p', {
            className: 'recipe-card__description',
            textContent: recipe.description
        });

        // 元信息
        const meta = DOMUtil.createElement('div', {
            className: 'recipe-card__meta'
        });

        const difficulty = DOMUtil.createElement('span', {
            className: `recipe-card__difficulty recipe-card__difficulty--${recipe.difficulty}`,
            textContent: difficultyInfo.name
        });

        const time = DOMUtil.createElement('div', {
            className: 'recipe-card__time',
            innerHTML: `<span>⏰</span> ${recipe.cookTime}`
        });

        meta.appendChild(difficulty);
        meta.appendChild(time);

        // 统计信息
        const stats = DOMUtil.createElement('div', {
            className: 'recipe-card__stats'
        });

        const rating = DOMUtil.createElement('div', {
            className: 'recipe-card__stat',
            innerHTML: `<span>⭐</span> ${recipe.rating}`
        });

        const views = DOMUtil.createElement('div', {
            className: 'recipe-card__stat',
            innerHTML: `<span>👁️</span> ${this.formatNumber(recipe.viewCount)}`
        });

        stats.appendChild(rating);
        stats.appendChild(views);

        content.appendChild(title);
        content.appendChild(description);
        content.appendChild(meta);
        content.appendChild(stats);

        card.appendChild(imageContainer);
        card.appendChild(content);

        // 点击跳转到详情页
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('recipe-card__favorite')) {
                // 添加到浏览历史
                UserPreferences.addToHistory({
                    id: recipe.id,
                    title: recipe.title,
                    description: recipe.description,
                    image: recipe.image
                });

                window.location.href = `pages/recipes/detail.html?id=${recipe.id}`;
            }
        });

        return card;
    }

    loadCookingTips() {
        const grid = DOMUtil.$('#cookingTips');
        if (!grid) return;

        const tips = [
            {
                icon: '🔥',
                title: '火候掌握',
                content: '掌握不同菜品的火候要求，是烹饪成功的关键。大火爆炒保持食材鲜嫩，小火慢炖让食材入味。'
            },
            {
                icon: '🧂',
                title: '调味技巧',
                content: '调味要分层次进行，先放不易挥发的调料，后放易挥发的。盐要最后放，保持食材的鲜味。'
            },
            {
                icon: '⏱️',
                title: '时间把控',
                content: '不同食材的烹饪时间不同，掌握好时间能让菜品口感最佳。绿叶菜快炒，根茎菜需要较长时间。'
            }
        ];

        tips.forEach(tip => {
            const tipCard = DOMUtil.createElement('div', {
                className: 'tip-card card'
            });

            const icon = DOMUtil.createElement('span', {
                className: 'tip-card__icon',
                textContent: tip.icon
            });

            const title = DOMUtil.createElement('h3', {
                className: 'tip-card__title',
                textContent: tip.title
            });

            const content = DOMUtil.createElement('p', {
                className: 'tip-card__content',
                textContent: tip.content
            });

            tipCard.appendChild(icon);
            tipCard.appendChild(title);
            tipCard.appendChild(content);

            grid.appendChild(tipCard);
        });
    }

    setupAnimations() {
        // 设置滚动动画观察器
        this.setupScrollObserver();
        
        // 为卡片添加动画类
        setTimeout(() => {
            const cards = DOMUtil.$$('.card');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    DOMUtil.addClass(card, 'animate-on-scroll');
                }, index * 100);
            });
        }, 500);
    }

    setupScrollObserver() {
        if ('IntersectionObserver' in window) {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        DOMUtil.addClass(entry.target, 'animate-on-scroll');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // 观察所有需要动画的元素
            const animateElements = DOMUtil.$$('.card, .section__title, .hero__title, .hero__description');
            animateElements.forEach(el => {
                observer.observe(el);
            });
        }
    }

    animateOnScroll() {
        const cards = DOMUtil.$$('.card:not(.animate-on-scroll)');
        
        cards.forEach(card => {
            if (DOMUtil.isInViewport(card, 100)) {
                DOMUtil.addClass(card, 'animate-on-scroll');
            }
        });
    }

    // 工具函数
    darkenColor(color, percent) {
        // 简单的颜色加深函数
        const num = parseInt(color.replace("#", ""), 16);
        const amt = Math.round(2.55 * percent);
        const R = (num >> 16) + amt;
        const G = (num >> 8 & 0x00FF) + amt;
        const B = (num & 0x0000FF) + amt;
        return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + 
                     (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + 
                     (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
    }

    formatNumber(num) {
        if (num < 1000) return num.toString();
        if (num < 10000) return (num / 1000).toFixed(1) + 'K';
        return Math.floor(num / 1000) + 'K';
    }
    
    // 生成标准图片路径
    generateStandardImagePath(recipe) {
        const cuisineMapping = {
            'sichuan': '川菜',
            'hunan': '湘菜', 
            'cantonese': '粵菜',
            'shandong': '鲁菜',
            'jiangsu': '苏菜',
            'zhejiang': '浙菜',
            'fujian': '闽菜',
            'anhui': '徽菜'
        };
        
        const cuisineFolder = cuisineMapping[recipe.cuisine];
        if (!cuisineFolder) {
            console.warn(`未知菜系: ${recipe.cuisine} (菜谱: ${recipe.title})`);
            return null;
        }
        
        return `/cooking-platform/data/imgs/${cuisineFolder}/${recipe.title}.png`;
    }
}

// 页面加载完成后初始化
DOMUtil.ready(() => {
    new HomePage();
});

// 导出供其他模块使用
window.HomePage = HomePage;
