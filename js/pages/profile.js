// Profile and Favorites Page JavaScript

class FavoritesPage {
    constructor() {
        this.favorites = [];
        this.sortOrder = 'newest';
        this.init();
    }

    init() {
        console.log('=== 收藏页面初始化 ===');
        this.loadFavorites();
        this.renderFavorites();
        this.bindEvents();
        this.updateStats();
        console.log('=== 收藏页面初始化完成 ===');
    }

    loadFavorites() {
        const favoriteIds = UserPreferences.getFavorites();
        console.log('收藏的菜谱ID:', favoriteIds);
        
        // 根据ID从菜谱数据中获取完整信息
        this.favorites = favoriteIds
            .map(id => {
                const recipe = RecipeUtils.getRecipeById(id);
                if (!recipe) {
                    console.warn(`未找到菜谱: ${id}`);
                }
                return recipe;
            })
            .filter(recipe => recipe !== undefined && recipe !== null);
        
        console.log('已加载收藏菜谱:', this.favorites.length, this.favorites);
    }

    bindEvents() {
        // 排序选择
        const sortSelect = DOMUtil.$('#sortSelect');
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                this.sortOrder = e.target.value;
                this.sortFavorites();
                this.renderFavorites();
            });
        }

        // 清空收藏按钮
        const clearAllBtn = DOMUtil.$('#clearAllBtn');
        if (clearAllBtn) {
            clearAllBtn.addEventListener('click', () => {
                if (confirm('确定要清空所有收藏吗？此操作不可恢复！')) {
                    this.clearAllFavorites();
                }
            });
        }

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

        // 监听收藏变化事件（从其他页面触发）
        document.addEventListener('favoriteChanged', (e) => {
            this.handleFavoriteChanged(e.detail);
        });
    }

    sortFavorites() {
        switch (this.sortOrder) {
            case 'newest':
                // 收藏时间倒序（最新的在前）
                this.favorites.reverse();
                break;
            case 'oldest':
                // 收藏时间正序（最早的在前）
                this.favorites = [...this.favorites];
                break;
            case 'name':
                // 按名称排序
                this.favorites.sort((a, b) => a.title.localeCompare(b.title, 'zh-CN'));
                break;
            case 'difficulty':
                // 按难度排序
                const difficultyOrder = { easy: 1, medium: 2, hard: 3 };
                this.favorites.sort((a, b) => 
                    difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]
                );
                break;
        }
    }

    renderFavorites() {
        const container = DOMUtil.$('#favoritesContent');
        const emptyState = DOMUtil.$('#emptyState');

        if (!container) return;

        // 排序
        this.sortFavorites();

        if (this.favorites.length === 0) {
            // 显示空状态
            container.style.display = 'none';
            if (emptyState) {
                emptyState.style.display = 'block';
            }
            return;
        }

        // 隐藏空状态，显示收藏列表
        container.style.display = 'grid';
        if (emptyState) {
            emptyState.style.display = 'none';
        }

        // 清空容器
        container.innerHTML = '';

        // 渲染每个收藏的菜谱
        this.favorites.forEach((recipe, index) => {
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
                <button class="recipe-card__favorite recipe-card__favorite--active" 
                        data-recipe-id="${recipe.id}">
                    ♥
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

        // 点击卡片跳转到详情页
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('recipe-card__favorite')) {
                window.location.href = `../recipes/detail.html?id=${recipe.id}`;
            }
        });

        return card;
    }

    toggleFavorite(recipeId, buttonElement) {
        const isFavorite = UserPreferences.isFavorite(recipeId);
        const recipe = RecipeUtils.getRecipeById(recipeId);
        
        if (isFavorite) {
            // 取消收藏
            UserPreferences.removeFavorite(recipeId);
            
            // 从当前列表中移除
            this.favorites = this.favorites.filter(r => r.id !== recipeId);
            
            // 重新渲染
            this.renderFavorites();
            this.updateStats();
            
            this.showNotification(`已取消收藏 "${recipe ? recipe.title : '菜谱'}"`, 'info');
        }
    }

    clearAllFavorites() {
        // 清空localStorage中的收藏
        UserPreferences.getFavorites().forEach(id => {
            UserPreferences.removeFavorite(id);
        });
        
        // 清空当前列表
        this.favorites = [];
        
        // 重新渲染
        this.renderFavorites();
        this.updateStats();
        
        this.showNotification('已清空所有收藏', 'info');
    }

    updateStats() {
        const countElement = DOMUtil.$('#favoritesCount');
        if (countElement) {
            countElement.textContent = this.favorites.length;
        }
    }

    handleFavoriteChanged(detail) {
        const { recipeId, isFavorite } = detail;
        
        if (isFavorite) {
            // 添加到收藏
            const recipe = RecipeUtils.getRecipeById(recipeId);
            if (recipe && !this.favorites.find(r => r.id === recipeId)) {
                this.favorites.unshift(recipe);
                this.renderFavorites();
                this.updateStats();
            }
        } else {
            // 从收藏中移除
            this.favorites = this.favorites.filter(r => r.id !== recipeId);
            this.renderFavorites();
            this.updateStats();
        }
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: ${type === 'success' ? '#4caf50' : type === 'info' ? '#2196f3' : '#ff9800'};
            color: white;
            padding: 12px 24px;
            border-radius: 6px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 1000;
            opacity: 0;
            transform: translateX(100px);
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        }, 10);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    darkenColor(color, percent) {
        const num = parseInt(color.replace("#", ""), 16);
        const amt = Math.round(2.55 * percent);
        const R = Math.max(0, Math.min(255, (num >> 16) - amt));
        const G = Math.max(0, Math.min(255, (num >> 8 & 0x00FF) - amt));
        const B = Math.max(0, Math.min(255, (num & 0x0000FF) - amt));
        return "#" + ((1 << 24) + (R << 16) + (G << 8) + B).toString(16).slice(1);
    }

    formatNumber(num) {
        if (num < 1000) return num.toString();
        if (num < 10000) return (num / 1000).toFixed(1) + 'K';
        return Math.floor(num / 1000) + 'K';
    }
}

// 页面加载完成后初始化
DOMUtil.ready(() => {
    // 只在收藏页面初始化
    if (DOMUtil.$('#favoritesContent')) {
        new FavoritesPage();
    }
});

// 导出供其他模块使用
window.FavoritesPage = FavoritesPage;
