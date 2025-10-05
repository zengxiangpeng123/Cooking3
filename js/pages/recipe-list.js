// Recipe List Page JavaScript

class RecipeListPage {
    constructor() {
        this.currentFilters = {
            cuisine: 'all',
            difficulty: 'all',
            time: 'all',
            sort: 'default',
            search: ''
        };
        this.currentView = 'grid';
        this.currentPage = 1;
        this.itemsPerPage = 12;
        this.allRecipes = [];
        this.filteredRecipes = [];
        
        this.init();
    }

    init() {
        console.log('初始化菜谱列表页面...');
        
        // 等待数据加载完成
        this.waitForData(() => {
            this.loadRecipes();
            this.setupFilters();
            this.bindEvents();
            this.parseUrlParams();
            this.applyFiltersAndRender();
        });
    }

    waitForData(callback, maxAttempts = 20, currentAttempt = 1) {
        console.log(`尝试加载数据 (${currentAttempt}/${maxAttempts})...`);
        
        // 检查数据是否加载完成
        if (window.RecipeData && window.RecipeData.recipes && window.RecipeData.recipes.length > 0) {
            console.log('✅ 数据加载完成！菜谱数量:', window.RecipeData.recipes.length);
            callback();
        } else if (currentAttempt < maxAttempts) {
            // 增加重试次数和等待时间
            setTimeout(() => {
                this.waitForData(callback, maxAttempts, currentAttempt + 1);
            }, 300);
        } else {
            console.error('❌ 数据加载失败，显示错误信息');
            console.log('当前 RecipeData 状态:', window.RecipeData);
            this.hideLoading();
            this.showError(`
                菜谱数据加载失败，请尝试以下解决方案：<br><br>
                <button onclick="location.reload()" style="background: #28a745; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; margin: 5px;">
                    🔄 刷新页面
                </button>
                <button onclick="window.open('../../search-fixed.html', '_blank')" style="background: #ff6b35; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; margin: 5px;">
                    🔍 使用备用搜索页面
                </button>
                <br><br>
                <small style="color: #666;">
                    如果刷新无效，请点击"使用备用搜索页面"，该页面包含完整的搜索功能
                </small>
            `);
        }
    }

    loadRecipes() {
        console.log('开始加载菜谱数据...');
        
        // 检查 RecipeData 是否存在
        if (!window.RecipeData) {
            console.error('RecipeData 未找到！');
            this.allRecipes = [];
            return;
        }
        
        // 检查 recipes 属性
        if (!window.RecipeData.recipes) {
            console.error('RecipeData.recipes 未找到！');
            this.allRecipes = [];
            return;
        }
        
        // 加载并验证菜谱数据
        this.allRecipes = [...window.RecipeData.recipes];
        
        // 验证和修复菜谱数据结构
        this.allRecipes = this.allRecipes.map(recipe => {
            // 确保每个菜谱都有必需的属性
            return {
                ...recipe,
                tags: recipe.tags || [],
                ingredients: recipe.ingredients || [],
                title: recipe.title || '未知菜谱',
                description: recipe.description || '暂无描述',
                cuisine: recipe.cuisine || 'unknown'
            };
        });
        
        console.log(`✅ 成功加载并验证 ${this.allRecipes.length} 道菜谱`);
        
        // 输出一些示例菜谱信息
        if (this.allRecipes.length > 0) {
            console.log('示例菜谱:', this.allRecipes.slice(0, 3).map(r => ({
                title: r.title,
                hasIngredients: Array.isArray(r.ingredients),
                hasTags: Array.isArray(r.tags),
                ingredientCount: r.ingredients.length
            })));
        }
    }

    parseUrlParams() {
        const urlParams = new URLSearchParams(window.location.search);
        
        if (urlParams.has('cuisine')) {
            this.currentFilters.cuisine = urlParams.get('cuisine');
        }
        if (urlParams.has('difficulty')) {
            this.currentFilters.difficulty = urlParams.get('difficulty');
        }
        if (urlParams.has('search')) {
            this.currentFilters.search = urlParams.get('search');
            const searchInput = DOMUtil.$('#searchInput');
            if (searchInput) {
                searchInput.value = this.currentFilters.search;
            }
        }
    }

    setupFilters() {
        // 设置菜系筛选按钮的活跃状态
        const cuisineFilters = DOMUtil.$$('[data-cuisine]');
        cuisineFilters.forEach(btn => {
            if (btn.dataset.cuisine === this.currentFilters.cuisine) {
                DOMUtil.addClass(btn, 'filter__btn--active');
            } else {
                DOMUtil.removeClass(btn, 'filter__btn--active');
            }
        });

        // 设置难度筛选按钮的活跃状态
        const difficultyFilters = DOMUtil.$$('[data-difficulty]');
        difficultyFilters.forEach(btn => {
            if (btn.dataset.difficulty === this.currentFilters.difficulty) {
                DOMUtil.addClass(btn, 'filter__btn--active');
            } else {
                DOMUtil.removeClass(btn, 'filter__btn--active');
            }
        });

        // 设置时间筛选按钮的活跃状态
        const timeFilters = DOMUtil.$$('[data-time]');
        timeFilters.forEach(btn => {
            if (btn.dataset.time === this.currentFilters.time) {
                DOMUtil.addClass(btn, 'filter__btn--active');
            } else {
                DOMUtil.removeClass(btn, 'filter__btn--active');
            }
        });
    }

    bindEvents() {
        // 菜系筛选
        const cuisineFilter = DOMUtil.$('#cuisineFilter');
        if (cuisineFilter) {
            cuisineFilter.addEventListener('click', (e) => {
                if (e.target.hasAttribute('data-cuisine')) {
                    this.handleCuisineFilter(e.target);
                }
            });
        }

        // 难度筛选
        const difficultyFilter = DOMUtil.$('#difficultyFilter');
        if (difficultyFilter) {
            difficultyFilter.addEventListener('click', (e) => {
                if (e.target.hasAttribute('data-difficulty')) {
                    this.handleDifficultyFilter(e.target);
                }
            });
        }

        // 时间筛选
        const timeFilter = DOMUtil.$('#timeFilter');
        if (timeFilter) {
            timeFilter.addEventListener('click', (e) => {
                if (e.target.hasAttribute('data-time')) {
                    this.handleTimeFilter(e.target);
                }
            });
        }

        // 排序选择
        const sortSelect = DOMUtil.$('#sortSelect');
        if (sortSelect) {
            sortSelect.addEventListener('change', this.handleSortChange.bind(this));
        }

        // 视图切换
        const gridViewBtn = DOMUtil.$('#gridViewBtn');
        const listViewBtn = DOMUtil.$('#listViewBtn');
        
        if (gridViewBtn) {
            gridViewBtn.addEventListener('click', () => this.changeView('grid'));
        }
        if (listViewBtn) {
            listViewBtn.addEventListener('click', () => this.changeView('list'));
        }

        // 搜索功能
        const searchForm = DOMUtil.$('#searchForm');
        if (searchForm) {
            searchForm.addEventListener('submit', this.handleSearch.bind(this));
        }

    }

    handleCuisineFilter(button) {
        const cuisine = button.dataset.cuisine;
        this.currentFilters.cuisine = cuisine;
        this.currentPage = 1;
        
        // 更新按钮状态
        DOMUtil.$$('[data-cuisine]').forEach(btn => {
            DOMUtil.removeClass(btn, 'filter__btn--active');
        });
        DOMUtil.addClass(button, 'filter__btn--active');
        
        this.applyFiltersAndRender();
        this.updateUrl();
    }

    handleDifficultyFilter(button) {
        const difficulty = button.dataset.difficulty;
        this.currentFilters.difficulty = difficulty;
        this.currentPage = 1;
        
        // 更新按钮状态
        DOMUtil.$$('[data-difficulty]').forEach(btn => {
            DOMUtil.removeClass(btn, 'filter__btn--active');
        });
        DOMUtil.addClass(button, 'filter__btn--active');
        
        this.applyFiltersAndRender();
        this.updateUrl();
    }

    handleTimeFilter(button) {
        const time = button.dataset.time;
        this.currentFilters.time = time;
        this.currentPage = 1;
        
        // 更新按钮状态
        DOMUtil.$$('[data-time]').forEach(btn => {
            DOMUtil.removeClass(btn, 'filter__btn--active');
        });
        DOMUtil.addClass(button, 'filter__btn--active');
        
        this.applyFiltersAndRender();
        this.updateUrl();
    }

    handleSortChange(e) {
        this.currentFilters.sort = e.target.value;
        this.applyFiltersAndRender();
        this.updateUrl();
    }

    handleSearch(e) {
        e.preventDefault();
        console.log('触发搜索事件...');
        
        const searchInput = DOMUtil.$('#searchInput');
        if (!searchInput) {
            console.error('搜索输入框未找到');
            return;
        }
        
        const query = searchInput.value.trim();
        console.log('搜索查询:', query);
        
        this.currentFilters.search = query;
        this.currentPage = 1;
        
        // 添加到搜索历史
        if (query && window.UserPreferences) {
            try {
                window.UserPreferences.addSearchHistory(query);
            } catch (error) {
                console.warn('保存搜索历史失败:', error);
            }
        }
        
        console.log('开始应用搜索筛选...');
        this.applyFiltersAndRender();
        this.updateUrl();
    }

    changeView(view) {
        this.currentView = view;
        
        // 更新按钮状态
        const gridBtn = DOMUtil.$('#gridViewBtn');
        const listBtn = DOMUtil.$('#listViewBtn');
        
        if (view === 'grid') {
            DOMUtil.addClass(gridBtn, 'view__btn--active');
            DOMUtil.removeClass(listBtn, 'view__btn--active');
        } else {
            DOMUtil.addClass(listBtn, 'view__btn--active');
            DOMUtil.removeClass(gridBtn, 'view__btn--active');
        }
        
        // 更新网格样式
        const recipesGrid = DOMUtil.$('#recipesGrid');
        if (recipesGrid) {
            if (view === 'list') {
                DOMUtil.addClass(recipesGrid, 'recipes__grid--list');
            } else {
                DOMUtil.removeClass(recipesGrid, 'recipes__grid--list');
            }
        }
    }

    applyFiltersAndRender() {
        console.log('开始应用筛选和渲染...');
        this.showLoading();
        
        // 模拟异步加载
        setTimeout(() => {
            try {
                console.log('当前菜谱数量:', this.allRecipes.length);
                console.log('当前筛选条件:', this.currentFilters);
                
                this.filteredRecipes = this.filterRecipes();
                console.log('筛选后菜谱数量:', this.filteredRecipes.length);
                
                this.sortRecipes();
                this.renderRecipes();
                this.renderPagination();
                this.updateRecipeCount();
                this.hideLoading();
                
                console.log('✅ 渲染完成');
                
                // 重新绑定收藏事件（关键修复）
                if (window.bindFavoriteEvents) {
                    setTimeout(window.bindFavoriteEvents, 100);
                }
            } catch (error) {
                console.error('渲染过程中出错:', error);
                this.hideLoading();
                this.showError('加载菜谱时出现错误，请刷新页面重试');
            }
        }, 300);
    }

    filterRecipes() {
        let filtered = [...this.allRecipes];

        // 菜系筛选
        if (this.currentFilters.cuisine !== 'all') {
            filtered = filtered.filter(recipe => recipe.cuisine === this.currentFilters.cuisine);
        }

        // 难度筛选
        if (this.currentFilters.difficulty !== 'all') {
            filtered = filtered.filter(recipe => recipe.difficulty === this.currentFilters.difficulty);
        }

        // 时间筛选
        if (this.currentFilters.time !== 'all') {
            filtered = filtered.filter(recipe => {
                const cookTime = parseInt(recipe.cookTime);
                switch (this.currentFilters.time) {
                    case 'quick':
                        return cookTime <= 15;
                    case 'medium':
                        return cookTime > 15 && cookTime <= 30;
                    case 'long':
                        return cookTime > 30;
                    default:
                        return true;
                }
            });
        }

        // 搜索筛选
        if (this.currentFilters.search) {
            const query = this.currentFilters.search.toLowerCase();
            console.log('搜索查询:', query);
            
            filtered = filtered.filter(recipe => {
                try {
                    // 基础搜索：标题和描述
                    const titleMatch = recipe.title && recipe.title.toLowerCase().includes(query);
                    const descMatch = recipe.description && recipe.description.toLowerCase().includes(query);
                    
                    // 标签搜索（安全检查）
                    const tagsMatch = recipe.tags && Array.isArray(recipe.tags) ? 
                        recipe.tags.some(tag => tag && tag.toLowerCase().includes(query)) : false;
                    
                    // 食材搜索（安全检查）
                    const ingredientsMatch = recipe.ingredients && Array.isArray(recipe.ingredients) ? 
                        recipe.ingredients.some(ing => {
                            if (!ing) return false;
                            // 支持字符串或对象格式的食材
                            const ingredientName = typeof ing === 'string' ? ing : (ing.name || '');
                            return ingredientName.toLowerCase().includes(query);
                        }) : false;
                    
                    const matched = titleMatch || descMatch || tagsMatch || ingredientsMatch;
                    
                    if (matched) {
                        console.log('匹配的菜谱:', recipe.title);
                    }
                    
                    return matched;
                } catch (error) {
                    console.error('搜索过程中出错，跳过菜谱:', recipe.title, error);
                    return false;
                }
            });
            
            console.log('搜索结果数量:', filtered.length);
        }

        return filtered;
    }

    sortRecipes() {
        switch (this.currentFilters.sort) {
            case 'popular':
                this.filteredRecipes.sort((a, b) => b.viewCount - a.viewCount);
                break;
            case 'newest':
                this.filteredRecipes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                break;
            case 'rating':
                this.filteredRecipes.sort((a, b) => b.rating - a.rating);
                break;
            case 'time-asc':
                this.filteredRecipes.sort((a, b) => parseInt(a.cookTime) - parseInt(b.cookTime));
                break;
            default:
                // 保持默认顺序
                break;
        }
    }

    renderRecipes() {
        console.log('开始渲染菜谱，当前筛选后数量:', this.filteredRecipes.length);
        const container = DOMUtil.$('#recipesGrid');
        if (!container) return;

        container.innerHTML = '';

        if (this.filteredRecipes.length === 0) {
            this.renderEmptyState(container);
            return;
        }

        // 计算当前页的菜谱
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        const pageRecipes = this.filteredRecipes.slice(startIndex, endIndex);

        pageRecipes.forEach((recipe, index) => {
            const recipeCard = this.createRecipeCard(recipe);
            recipeCard.style.animationDelay = `${index * 0.1}s`;
            container.appendChild(recipeCard);
        });
    }

    createRecipeCard(recipe) {
        const card = DOMUtil.createElement('article', {
            className: 'recipe-card card animate-in'
        });

        const difficultyInfo = RecipeUtils.getDifficultyInfo(recipe.difficulty);
        const cuisineInfo = RecipeUtils.getCuisineInfo(recipe.cuisine);

        // 生成标准图片路径并检查
        const standardImagePath = this.generateStandardImagePath(recipe);
        const hasRealImage = standardImagePath;
        
        if (hasRealImage) {
            // 使用真实图片作为背景
            card.innerHTML = `
                <div class="recipe-card__image" style="
                    background-image: url('${standardImagePath}');
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    height: 200px;
                    position: relative;
                ">
                    <!-- 半透明遮罩，让文字更清晰 -->
                    <div style="
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6));
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
                    <button class="recipe-card__favorite ${UserPreferences.isFavorite(recipe.id) ? 'recipe-card__favorite--active' : ''}" 
                            data-recipe-id="${recipe.id}" style="position: absolute; top: 10px; left: 10px; z-index: 3; background: rgba(255,255,255,0.9); border: none; border-radius: 50%; width: 36px; height: 36px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 18px; color: #ff6b35; transition: all 0.3s ease;">
                        ${UserPreferences.isFavorite(recipe.id) ? '♥' : '♡'}
                    </button>
                    <div class="recipe-card__badge" style="position: absolute; top: 10px; right: 10px; z-index: 3; background: var(--primary-color); color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px; font-weight: 600;">${difficultyInfo.name}</div>
                </div>
                <div class="recipe-card__content">
                    <h3 class="recipe-card__title">${recipe.title}</h3>
                    <p class="recipe-card__description">${recipe.description}</p>
                    <div class="recipe-card__meta">
                        <span class="recipe-card__difficulty recipe-card__difficulty--${recipe.difficulty}">
                            ${difficultyInfo.name}
                        </span>
                        <div class="recipe-card__time">⏰ ${recipe.cookTime}</div>
                    </div>
                    <div class="recipe-card__stats">
                        <div class="recipe-card__stat">⭐ ${recipe.rating}</div>
                        <div class="recipe-card__stat">👁️ ${this.formatNumber(recipe.viewCount)}</div>
                    </div>
                </div>
            `;
        } else {
            // 使用占位符
            card.innerHTML = `
                <div class="recipe-card__image">
                    <div class="recipe-card__image-placeholder" style="
                        background: linear-gradient(135deg, ${cuisineInfo.color}, ${this.darkenColor(cuisineInfo.color, 20)});
                        height: 200px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                    ">
                        <div style="text-align: center;">
                            <div style="font-size: 3rem; margin-bottom: 0.5rem;">${cuisineInfo.icon}</div>
                            <div style="font-size: 1rem; font-weight: 600; opacity: 0.9;">${recipe.title}</div>
                            <div style="font-size: 0.8rem; opacity: 0.7; margin-top: 0.25rem;">${cuisineInfo.name}</div>
                        </div>
                    </div>
                    <button class="recipe-card__favorite ${UserPreferences.isFavorite(recipe.id) ? 'recipe-card__favorite--active' : ''}" 
                            data-recipe-id="${recipe.id}" onclick="handleFavoriteClick(this)">
                        ${UserPreferences.isFavorite(recipe.id) ? '♥' : '♡'}
                    </button>
                    <div class="recipe-card__badge">${difficultyInfo.name}</div>
                </div>
                <div class="recipe-card__content">
                    <h3 class="recipe-card__title">${recipe.title}</h3>
                    <p class="recipe-card__description">${recipe.description}</p>
                    <div class="recipe-card__meta">
                        <span class="recipe-card__difficulty recipe-card__difficulty--${recipe.difficulty}">
                            ${difficultyInfo.name}
                        </span>
                        <div class="recipe-card__time">⏰ ${recipe.cookTime}</div>
                    </div>
                    <div class="recipe-card__stats">
                        <div class="recipe-card__stat">⭐ ${recipe.rating}</div>
                        <div class="recipe-card__stat">👁️ ${this.formatNumber(recipe.viewCount)}</div>
                    </div>
                </div>
            `;
        }

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

                // 构建详情页链接，包含筛选状态
                const detailParams = new URLSearchParams();
                detailParams.set('id', recipe.id);
                detailParams.set('from', 'list');
                
                // 添加当前筛选参数
                if (this.currentFilters.cuisine !== 'all') {
                    detailParams.set('cuisine', this.currentFilters.cuisine);
                }
                if (this.currentFilters.difficulty !== 'all') {
                    detailParams.set('difficulty', this.currentFilters.difficulty);
                }
                if (this.currentFilters.time !== 'all') {
                    detailParams.set('time', this.currentFilters.time);
                }
                if (this.currentFilters.sort !== 'default') {
                    detailParams.set('sort', this.currentFilters.sort);
                }
                if (this.currentFilters.search) {
                    detailParams.set('search', this.currentFilters.search);
                }
                
                window.location.href = `detail.html?${detailParams.toString()}`;
            }
        });

        return card;
    }

    renderEmptyState(container) {
        const emptyState = DOMUtil.createElement('div', {
            className: 'recipes__empty'
        });

        emptyState.innerHTML = `
            <div class="recipes__empty-icon">🔍</div>
            <h3 class="recipes__empty-title">没有找到相关菜谱</h3>
            <p class="recipes__empty-message">
                ${this.currentFilters.search 
                    ? `没有找到包含"${this.currentFilters.search}"的菜谱，试试其他关键词？` 
                    : '当前筛选条件下没有菜谱，试试调整筛选条件？'}
            </p>
            <button class="btn btn--primary" onclick="location.reload()">重置筛选</button>
        `;

        container.appendChild(emptyState);
    }

    renderPagination() {
        const container = DOMUtil.$('#pagination');
        if (!container) return;

        const totalPages = Math.ceil(this.filteredRecipes.length / this.itemsPerPage);
        
        if (totalPages <= 1) {
            container.innerHTML = '';
            return;
        }

        container.innerHTML = '';

        // 上一页按钮
        const prevBtn = DOMUtil.createElement('button', {
            className: `pagination__prev ${this.currentPage === 1 ? 'pagination__prev--disabled' : ''}`,
            textContent: '上一页',
            disabled: this.currentPage === 1
        });

        prevBtn.addEventListener('click', () => {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.applyFiltersAndRender();
                this.scrollToTop();
            }
        });

        container.appendChild(prevBtn);

        // 页码列表
        const pageList = DOMUtil.createElement('ul', { className: 'pagination__list' });
        
        const startPage = Math.max(1, this.currentPage - 2);
        const endPage = Math.min(totalPages, this.currentPage + 2);

        for (let i = startPage; i <= endPage; i++) {
            const li = DOMUtil.createElement('li', { className: 'pagination__item' });
            const link = DOMUtil.createElement('button', {
                className: `pagination__link ${i === this.currentPage ? 'pagination__link--active' : ''}`,
                textContent: i
            });

            if (i !== this.currentPage) {
                link.addEventListener('click', () => {
                    this.currentPage = i;
                    this.applyFiltersAndRender();
                    this.scrollToTop();
                });
            }

            li.appendChild(link);
            pageList.appendChild(li);
        }

        container.appendChild(pageList);

        // 下一页按钮
        const nextBtn = DOMUtil.createElement('button', {
            className: `pagination__next ${this.currentPage === totalPages ? 'pagination__next--disabled' : ''}`,
            textContent: '下一页',
            disabled: this.currentPage === totalPages
        });

        nextBtn.addEventListener('click', () => {
            if (this.currentPage < totalPages) {
                this.currentPage++;
                this.applyFiltersAndRender();
                this.scrollToTop();
            }
        });

        container.appendChild(nextBtn);
    }

    updateRecipeCount() {
        const countElement = DOMUtil.$('#recipesCount');
        if (countElement) {
            const total = this.filteredRecipes.length;
            countElement.textContent = `共找到 ${total} 道菜谱`;
        }
    }

    showLoading() {
        const loading = DOMUtil.$('#loading');
        if (loading) {
            DOMUtil.show(loading);
        }
    }

    hideLoading() {
        const loading = DOMUtil.$('#loading');
        if (loading) {
            DOMUtil.hide(loading);
        }
    }

    showError(message) {
        const container = DOMUtil.$('#recipesGrid');
        if (container) {
            container.innerHTML = `
                <div class="error-message" style="
                    text-align: center;
                    padding: 40px 20px;
                    color: #e74c3c;
                    font-size: 16px;
                    border: 2px solid #e74c3c;
                    border-radius: 8px;
                    background: #fdf2f2;
                ">
                    <p style="margin: 0 0 15px 0;"><strong>⚠️ ${message}</strong></p>
                    <button onclick="location.reload()" style="
                        background: #e74c3c;
                        color: white;
                        border: none;
                        padding: 8px 16px;
                        border-radius: 4px;
                        cursor: pointer;
                    ">刷新页面</button>
                </div>
            `;
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    updateUrl() {
        const params = new URLSearchParams();
        
        if (this.currentFilters.cuisine !== 'all') {
            params.set('cuisine', this.currentFilters.cuisine);
        }
        if (this.currentFilters.difficulty !== 'all') {
            params.set('difficulty', this.currentFilters.difficulty);
        }
        if (this.currentFilters.time !== 'all') {
            params.set('time', this.currentFilters.time);
        }
        if (this.currentFilters.sort !== 'default') {
            params.set('sort', this.currentFilters.sort);
        }
        if (this.currentFilters.search) {
            params.set('search', this.currentFilters.search);
        }
        
        const newUrl = params.toString() 
            ? `${window.location.pathname}?${params.toString()}`
            : window.location.pathname;
            
        window.history.replaceState({}, '', newUrl);
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

    // 工具函数
    darkenColor(color, percent) {
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
}

// 页面加载完成后初始化
DOMUtil.ready(() => {
    window.recipeListPage = new RecipeListPage();
});

// 导出供其他模块使用
window.RecipeListPage = RecipeListPage;
