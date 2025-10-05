// Recipe Detail Page JavaScript

class RecipeDetailPage {
    constructor() {
        this.recipeId = null;
        this.recipe = null;
        this.init();
    }

    init() {
        this.getRecipeIdFromUrl();
        this.setupReturnLinks();
        this.loadRecipe();
        this.bindEvents();
    }

    getRecipeIdFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        this.recipeId = urlParams.get('id');
        
        if (!this.recipeId) {
            // 如果没有ID参数，默认显示第一个菜谱
            this.recipeId = 'recipe_001';
        }
        
        // 保存来源页面的筛选参数
        this.sourceFilters = {};
        if (urlParams.get('from') === 'list') {
            this.sourceFilters.cuisine = urlParams.get('cuisine');
            this.sourceFilters.difficulty = urlParams.get('difficulty');
            this.sourceFilters.time = urlParams.get('time');
            this.sourceFilters.search = urlParams.get('search');
            this.sourceFilters.sort = urlParams.get('sort');
        }
    }
    
    setupReturnLinks() {
        // 构建返回链接，包含筛选参数
        let returnUrl = 'list.html';
        
        if (this.sourceFilters && Object.keys(this.sourceFilters).length > 0) {
            const params = new URLSearchParams();
            
            Object.entries(this.sourceFilters).forEach(([key, value]) => {
                if (value && value !== 'all' && value !== 'default') {
                    params.set(key, value);
                }
            });
            
            if (params.toString()) {
                returnUrl += '?' + params.toString();
            }
        }
        
        // 更新所有返回链接
        const returnLinks = document.querySelectorAll('a[href="list.html"]');
        returnLinks.forEach(link => {
            link.href = returnUrl;
        });
        
        // 更新导航栏中的菜谱大全链接
        const navLinks = document.querySelectorAll('.nav__link[href="list.html"]');
        navLinks.forEach(link => {
            link.href = returnUrl;
        });
    }

    loadRecipe() {
        this.recipe = RecipeUtils.getRecipeById(this.recipeId);
        
        if (!this.recipe) {
            this.showError('菜谱不存在');
            return;
        }

        // 添加学习记录
        this.addLearningRecord();
        
        this.renderRecipe();
        this.loadRelatedRecipes();
    }

    // 添加学习记录
    addLearningRecord() {
        try {
            // 如果用户中心管理系统可用，使用它
            if (window.userCenterManager) {
                window.userCenterManager.addLearningRecord(this.recipeId);
            } else {
                // 降级处理：直接操作localStorage
                const history = JSON.parse(localStorage.getItem('learning_history') || '[]');
                
                // 检查是否已存在
                const existingIndex = history.findIndex(item => item.recipeId === this.recipeId);
                
                const newRecord = {
                    recipeId: this.recipeId,
                    timestamp: new Date().toISOString(),
                    date: new Date().toDateString()
                };
                
                if (existingIndex >= 0) {
                    // 更新时间
                    history[existingIndex] = newRecord;
                } else {
                    // 添加新记录
                    history.unshift(newRecord);
                }
                
                // 限制记录数量
                const limitedHistory = history.slice(0, 50);
                localStorage.setItem('learning_history', JSON.stringify(limitedHistory));
            }
            
            console.log('✅ 学习记录已添加:', this.recipeId);
        } catch (error) {
            console.warn('添加学习记录失败:', error);
        }
    }

    renderRecipe() {
        // 更新页面标题
        document.title = `${this.recipe.title} - 炒菜学习平台`;
        DOMUtil.setContent('#pageTitle', `${this.recipe.title} - 炒菜学习平台`);
        
        // 更新面包屑
        DOMUtil.setContent('#breadcrumbCurrent', this.recipe.title);
        
        // 更新菜谱基本信息
        DOMUtil.setContent('#recipeTitle', this.recipe.title);
        DOMUtil.setContent('#recipeDescription', this.recipe.description);
        DOMUtil.setContent('#recipeCookTime', this.recipe.cookTime);
        DOMUtil.setContent('#recipeServings', this.recipe.servings);
        
        // 设置难度
        const difficultyInfo = RecipeUtils.getDifficultyInfo(this.recipe.difficulty);
        DOMUtil.setContent('#recipeDifficulty', difficultyInfo.name);
        
        // 设置菜系
        const cuisineInfo = RecipeUtils.getCuisineInfo(this.recipe.cuisine);
        DOMUtil.setContent('#recipeCuisine', cuisineInfo.name);
        
        // 设置图片
        this.renderRecipeImage();
        
        // 渲染食材列表
        this.renderIngredients();
        
        // 渲染制作步骤
        this.renderSteps();
        
        // 渲染烹饪技巧
        this.renderTips();
        
        // 渲染营养信息
        this.renderNutrition();
        
        // 更新收藏按钮状态
        this.updateFavoriteButton();
    }

    renderRecipeImage() {
        const imageElement = DOMUtil.$('#recipeImage');
        const placeholderElement = DOMUtil.$('#imagePlaceholder');
        const cuisineInfo = RecipeUtils.getCuisineInfo(this.recipe.cuisine);
        const difficultyInfo = RecipeUtils.getDifficultyInfo(this.recipe.difficulty);
        
        // 生成标准图片路径
        const standardImagePath = this.generateStandardImagePath(this.recipe);
        const hasRealImage = standardImagePath;
            
        if (hasRealImage) {
            // 如果有真实图片，隐藏占位符，显示图片
            DOMUtil.hide(placeholderElement);
            imageElement.src = standardImagePath;
            imageElement.alt = this.recipe.title;
            DOMUtil.show(imageElement);
        } else {
            // 使用美化的占位符
            DOMUtil.hide(imageElement);
            placeholderElement.innerHTML = `
                <div style="
                    background: linear-gradient(135deg, ${cuisineInfo.color}, ${this.darkenColor(cuisineInfo.color, 20)});
                    width: 100%;
                    height: 300px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 12px;
                    box-shadow: 0 8px 32px rgba(255, 107, 53, 0.3);
                ">
                    <div style="text-align: center; color: white;">
                        <div style="font-size: 4rem; margin-bottom: 1rem;">${cuisineInfo.icon}</div>
                        <div style="font-size: 1.2rem; font-weight: 600;">${this.recipe.title}</div>
                        <div style="font-size: 0.9rem; opacity: 0.9; margin-top: 0.5rem;">${cuisineInfo.name} · ${difficultyInfo.name}</div>
                    </div>
                </div>
            `;
            DOMUtil.show(placeholderElement);
        }
    }

    renderIngredients() {
        const container = DOMUtil.$('#ingredientsList');
        if (!container) return;

        container.innerHTML = '';
        
        // 主要食材
        const mainIngredients = this.recipe.ingredients.filter(ing => !ing.note || !ing.note.includes('调料'));
        // 调料
        const seasonings = this.recipe.ingredients.filter(ing => ing.note && ing.note.includes('调料'));
        
        // 渲染主要食材
        if (mainIngredients.length > 0) {
            const mainSection = DOMUtil.createElement('div', { className: 'ingredients__section' });
            const mainTitle = DOMUtil.createElement('h4', { 
                className: 'ingredients__section-title',
                textContent: '主要食材'
            });
            const mainList = DOMUtil.createElement('ul', { className: 'ingredients__list' });
            
            mainIngredients.forEach(ingredient => {
                const item = DOMUtil.createElement('li', { className: 'ingredients__item' });
                item.innerHTML = `
                    <span class="ingredient__name">${ingredient.name}</span>
                    <span class="ingredient__amount">${ingredient.amount}</span>
                    ${ingredient.note ? `<span class="ingredient__note">${ingredient.note}</span>` : ''}
                `;
                mainList.appendChild(item);
            });
            
            mainSection.appendChild(mainTitle);
            mainSection.appendChild(mainList);
            container.appendChild(mainSection);
        }
        
        // 渲染调料
        const otherIngredients = this.recipe.ingredients.filter(ing => 
            !mainIngredients.includes(ing) && !seasonings.includes(ing)
        );
        
        if (otherIngredients.length > 0) {
            const otherSection = DOMUtil.createElement('div', { className: 'ingredients__section' });
            const otherTitle = DOMUtil.createElement('h4', { 
                className: 'ingredients__section-title',
                textContent: '调料配菜'
            });
            const otherList = DOMUtil.createElement('ul', { className: 'ingredients__list' });
            
            otherIngredients.forEach(ingredient => {
                const item = DOMUtil.createElement('li', { className: 'ingredients__item' });
                item.innerHTML = `
                    <span class="ingredient__name">${ingredient.name}</span>
                    <span class="ingredient__amount">${ingredient.amount}</span>
                    ${ingredient.note ? `<span class="ingredient__note">${ingredient.note}</span>` : ''}
                `;
                otherList.appendChild(item);
            });
            
            otherSection.appendChild(otherTitle);
            otherSection.appendChild(otherList);
            container.appendChild(otherSection);
        }

        // 添加采购小贴士
        const tipsContainer = DOMUtil.$('#ingredientsTips');
        if (tipsContainer) {
            tipsContainer.innerHTML = '';
            const tips = [
                '选择新鲜食材，确保最佳口感',
                '提前准备所有配料，烹饪过程更顺畅',
                '根据家庭人数适当调整分量',
                '调料可根据个人口味适量增减'
            ];
            
            tips.forEach(tip => {
                const li = DOMUtil.createElement('li', { textContent: tip });
                tipsContainer.appendChild(li);
            });
        }
    }

    renderSteps() {
        const container = DOMUtil.$('#cookingSteps');
        if (!container) return;

        container.innerHTML = '';
        
        this.recipe.steps.forEach((step, index) => {
            const stepElement = DOMUtil.createElement('div', { className: 'cooking-step' });
            
            stepElement.innerHTML = `
                <div class="cooking-step__number">${step.step}</div>
                <div class="cooking-step__content">
                    <div class="cooking-step__instruction">${step.instruction}</div>
                    ${step.time ? `<div class="cooking-step__time">⏰ ${step.time}</div>` : ''}
                    ${step.image ? `<div class="cooking-step__image">
                        <div style="
                            background: linear-gradient(45deg, #f8f9fa, #e9ecef);
                            height: 120px;
                            border-radius: 8px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            margin-top: 12px;
                            border: 2px dashed #dee2e6;
                        ">
                            <span style="color: #6c757d; font-size: 2rem;">📷</span>
                        </div>
                    </div>` : ''}
                </div>
            `;
            
            container.appendChild(stepElement);
        });
    }

    renderTips() {
        const container = DOMUtil.$('#cookingTips');
        if (!container) return;

        container.innerHTML = '';
        
        if (this.recipe.tips && this.recipe.tips.length > 0) {
            const tipsList = DOMUtil.createElement('ul', { className: 'cooking-tips__list' });
            
            this.recipe.tips.forEach(tip => {
                const li = DOMUtil.createElement('li', { 
                    className: 'cooking-tips__item',
                    innerHTML: `<span class="tip-icon">💡</span> ${tip}`
                });
                tipsList.appendChild(li);
            });
            
            container.appendChild(tipsList);
        } else {
            container.innerHTML = '<p class="no-content">暂无特别提示</p>';
        }
    }

    renderNutrition() {
        const container = DOMUtil.$('#nutritionInfo');
        if (!container || !this.recipe.nutrition) return;

        container.innerHTML = '';
        
        const nutritionGrid = DOMUtil.createElement('div', { className: 'nutrition__grid' });
        
        Object.entries(this.recipe.nutrition).forEach(([key, value]) => {
            const nutritionNames = {
                calories: '热量',
                protein: '蛋白质',
                fat: '脂肪',
                carbs: '碳水化合物',
                fiber: '纤维',
                sodium: '钠'
            };
            
            const item = DOMUtil.createElement('div', { className: 'nutrition__item' });
            item.innerHTML = `
                <div class="nutrition__label">${nutritionNames[key] || key}</div>
                <div class="nutrition__value">${value}</div>
            `;
            nutritionGrid.appendChild(item);
        });
        
        container.appendChild(nutritionGrid);
    }

    loadRelatedRecipes() {
        const container = DOMUtil.$('#relatedRecipes');
        if (!container) return;

        const relatedRecipes = RecipeUtils.getRelatedRecipes(this.recipe, 4);
        container.innerHTML = '';
        
        relatedRecipes.forEach(recipe => {
            const card = this.createRecipeCard(recipe);
            container.appendChild(card);
        });
    }

    createRecipeCard(recipe) {
        const card = DOMUtil.createElement('article', { className: 'recipe-card card' });
        
        const difficultyInfo = RecipeUtils.getDifficultyInfo(recipe.difficulty);
        const cuisineInfo = RecipeUtils.getCuisineInfo(recipe.cuisine);
        
        card.innerHTML = `
            <div class="recipe-card__image">
                <div class="recipe-card__image-placeholder" style="
                    background: linear-gradient(135deg, ${cuisineInfo.color}, ${this.darkenColor(cuisineInfo.color, 20)});
                    height: 180px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                ">
                    <div style="text-align: center;">
                        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">${cuisineInfo.icon}</div>
                        <div style="font-size: 0.9rem; font-weight: 600;">${recipe.title}</div>
                    </div>
                </div>
                <button class="recipe-card__favorite ${UserPreferences.isFavorite(recipe.id) ? 'recipe-card__favorite--active' : ''}" 
                        data-recipe-id="${recipe.id}">
                    ${UserPreferences.isFavorite(recipe.id) ? '♥' : '♡'}
                </button>
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
            </div>
        `;
        
        // 点击跳转
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('recipe-card__favorite')) {
                window.location.href = `detail.html?id=${recipe.id}`;
            }
        });
        
        return card;
    }

    updateFavoriteButton() {
        const favoriteBtn = DOMUtil.$('#favoriteBtn');
        if (!favoriteBtn) return;

        const isFavorite = UserPreferences.isFavorite(this.recipeId);
        favoriteBtn.dataset.recipeId = this.recipeId;
        
        if (isFavorite) {
            DOMUtil.addClass(favoriteBtn, 'btn--active');
            favoriteBtn.innerHTML = '<span class="btn__icon">♥</span><span class="btn__text">已收藏</span>';
        } else {
            DOMUtil.removeClass(favoriteBtn, 'btn--active');
            favoriteBtn.innerHTML = '<span class="btn__icon">♡</span><span class="btn__text">收藏菜谱</span>';
        }
    }

    bindEvents() {
        // 收藏按钮
        const favoriteBtn = DOMUtil.$('#favoriteBtn');
        if (favoriteBtn) {
            favoriteBtn.addEventListener('click', this.toggleFavorite.bind(this));
        }

        // 分享按钮
        const shareBtn = DOMUtil.$('#shareBtn');
        if (shareBtn) {
            shareBtn.addEventListener('click', this.showShareModal.bind(this));
        }

        // 打印按钮
        const printBtn = DOMUtil.$('#printBtn');
        if (printBtn) {
            printBtn.addEventListener('click', this.printRecipe.bind(this));
        }

        // 关闭分享模态框
        const closeShareModal = DOMUtil.$('#closeShareModal');
        if (closeShareModal) {
            closeShareModal.addEventListener('click', this.hideShareModal.bind(this));
        }

        // 复制链接
        const copyLinkBtn = DOMUtil.$('#copyLinkBtn');
        if (copyLinkBtn) {
            copyLinkBtn.addEventListener('click', this.copyLink.bind(this));
        }
    }

    toggleFavorite() {
        const isFavorite = UserPreferences.isFavorite(this.recipeId);
        
        if (isFavorite) {
            UserPreferences.removeFavorite(this.recipeId);
            this.showNotification('已取消收藏');
        } else {
            UserPreferences.addFavorite(this.recipeId);
            this.showNotification('已添加到收藏');
        }
        
        this.updateFavoriteButton();
    }

    showShareModal() {
        const modal = DOMUtil.$('#shareModal');
        if (modal) {
            DOMUtil.addClass(modal, 'modal--visible');
        }
    }

    hideShareModal() {
        const modal = DOMUtil.$('#shareModal');
        if (modal) {
            DOMUtil.removeClass(modal, 'modal--visible');
        }
    }

    copyLink() {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            this.showNotification('链接已复制到剪贴板');
            this.hideShareModal();
        }).catch(() => {
            this.showNotification('复制失败，请手动复制链接', 'error');
        });
    }

    printRecipe() {
        window.print();
    }

    showError(message) {
        const main = DOMUtil.$('#recipeDetail');
        if (main) {
            main.innerHTML = `
                <div class="error-state">
                    <div class="error-state__icon">😞</div>
                    <h2 class="error-state__title">出错了</h2>
                    <p class="error-state__message">${message}</p>
                    <a href="list.html" class="btn btn--primary">返回菜谱列表</a>
                </div>
            `;
        }
    }

    showNotification(message, type = 'success') {
        // 简单的通知实现
        const notification = DOMUtil.createElement('div', {
            className: `notification notification--${type}`,
            textContent: message
        });
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            DOMUtil.addClass(notification, 'notification--visible');
        }, 10);
        
        setTimeout(() => {
            DOMUtil.removeClass(notification, 'notification--visible');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 3000);
    }

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
    new RecipeDetailPage();
});

// 导出供其他模块使用
window.RecipeDetailPage = RecipeDetailPage;
