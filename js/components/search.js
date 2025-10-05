// Search Component - 实时搜索功能

class SearchComponent {
    constructor() {
        this.initializeSearch();
    }

    initializeSearch() {
        // 绑定所有搜索框的实时搜索功能
        const searchInputs = document.querySelectorAll('.search__input');
        
        searchInputs.forEach(input => {
            // 实时搜索（输入时触发）
            input.addEventListener('input', this.debounce((e) => {
                this.handleRealTimeSearch(e.target);
            }, 300));
            
            // 焦点事件
            input.addEventListener('focus', (e) => {
                this.showSearchSuggestions(e.target);
            });
            
            // 失焦事件
            input.addEventListener('blur', (e) => {
                // 延迟隐藏，允许点击建议项
                setTimeout(() => {
                    this.hideSearchSuggestions(e.target);
                }, 200);
            });
            
            // 键盘事件
            input.addEventListener('keydown', (e) => {
                this.handleKeyboardNavigation(e);
            });
        });
    }

    handleRealTimeSearch(input) {
        const query = input.value.trim();
        
        if (query.length >= 2) {
            // 如果在菜谱列表页面，实时过滤
            if (window.recipeListPage) {
                window.recipeListPage.currentFilters.search = query;
                window.recipeListPage.currentPage = 1;
                window.recipeListPage.applyFiltersAndRender();
                window.recipeListPage.updateUrl();
            } else {
                // 显示搜索建议
                this.showSearchSuggestions(input, query);
            }
        } else if (query.length === 0) {
            // 清空搜索
            if (window.recipeListPage) {
                window.recipeListPage.currentFilters.search = '';
                window.recipeListPage.currentPage = 1;
                window.recipeListPage.applyFiltersAndRender();
                window.recipeListPage.updateUrl();
            }
            this.hideSearchSuggestions(input);
        }
    }

    showSearchSuggestions(input, query = null) {
        // 移除已存在的建议框
        this.hideSearchSuggestions(input);
        
        if (!query) query = input.value.trim();
        if (query.length < 2) return;

        // 创建建议框
        const suggestions = document.createElement('div');
        suggestions.className = 'search-suggestions';
        suggestions.style.cssText = `
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            border: 1px solid #ddd;
            border-top: none;
            border-radius: 0 0 8px 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            max-height: 300px;
            overflow-y: auto;
            z-index: 1000;
        `;

        // 搜索匹配的菜谱
        const matchedRecipes = this.searchRecipes(query);
        
        if (matchedRecipes.length > 0) {
            matchedRecipes.slice(0, 5).forEach(recipe => {
                const item = document.createElement('div');
                item.className = 'search-suggestion-item';
                item.style.cssText = `
                    padding: 12px 16px;
                    border-bottom: 1px solid #f0f0f0;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    transition: background-color 0.2s;
                `;
                
                item.innerHTML = `
                    <span class="suggestion-icon" style="margin-right: 12px; font-size: 18px;">🍳</span>
                    <div>
                        <div class="suggestion-title" style="font-weight: 500; color: #333;">${this.highlightMatch(recipe.title, query)}</div>
                        <div class="suggestion-desc" style="font-size: 12px; color: #666; margin-top: 2px;">${recipe.cuisine} | ${recipe.difficulty}</div>
                    </div>
                `;
                
                item.addEventListener('mouseenter', () => {
                    item.style.backgroundColor = '#f8f9fa';
                });
                
                item.addEventListener('mouseleave', () => {
                    item.style.backgroundColor = 'white';
                });
                
                item.addEventListener('click', () => {
                    input.value = recipe.title;
                    this.hideSearchSuggestions(input);
                    this.performSearch(input, recipe.title);
                });
                
                suggestions.appendChild(item);
            });
        } else {
            const noResult = document.createElement('div');
            noResult.style.cssText = `
                padding: 16px;
                text-align: center;
                color: #666;
                font-size: 14px;
            `;
            noResult.textContent = '没有找到相关菜谱';
            suggestions.appendChild(noResult);
        }

        // 定位建议框
        const searchContainer = input.closest('.header__search') || input.parentElement;
        searchContainer.style.position = 'relative';
        searchContainer.appendChild(suggestions);
    }

    hideSearchSuggestions(input) {
        const searchContainer = input.closest('.header__search') || input.parentElement;
        const suggestions = searchContainer.querySelector('.search-suggestions');
        if (suggestions) {
            suggestions.remove();
        }
    }

    searchRecipes(query) {
        if (!window.RecipeData || !window.RecipeData.recipes) {
            console.warn('RecipeData 未加载，返回空结果');
            return [];
        }
        
        const lowercaseQuery = query.toLowerCase();
        try {
            return window.RecipeData.recipes.filter(recipe => 
                recipe.title.toLowerCase().includes(lowercaseQuery) ||
                recipe.description.toLowerCase().includes(lowercaseQuery) ||
                (recipe.tags && recipe.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))) ||
                (recipe.ingredients && recipe.ingredients.some(ing => ing.name.toLowerCase().includes(lowercaseQuery)))
            );
        } catch (error) {
            console.error('搜索过程中出错:', error);
            return [];
        }
    }

    highlightMatch(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark style="background: #ffe066; padding: 0 2px;">$1</mark>');
    }

    performSearch(input, query) {
        // 保存搜索历史
        if (window.UserPreferences && window.UserPreferences.addSearchHistory) {
            window.UserPreferences.addSearchHistory(query);
        }
        
        // 如果在菜谱列表页面，直接搜索
        if (window.recipeListPage) {
            window.recipeListPage.currentFilters.search = query;
            window.recipeListPage.currentPage = 1;
            window.recipeListPage.applyFiltersAndRender();
            window.recipeListPage.updateUrl();
        } else {
            // 跳转到菜谱列表页面
            window.location.href = `pages/recipes/list.html?search=${encodeURIComponent(query)}`;
        }
    }

    handleKeyboardNavigation(e) {
        const suggestions = e.target.closest('.header__search').querySelector('.search-suggestions');
        if (!suggestions) return;

        const items = suggestions.querySelectorAll('.search-suggestion-item');
        if (items.length === 0) return;

        let currentIndex = -1;
        items.forEach((item, index) => {
            if (item.classList.contains('active')) {
                currentIndex = index;
            }
        });

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                currentIndex = Math.min(currentIndex + 1, items.length - 1);
                break;
            case 'ArrowUp':
                e.preventDefault();
                currentIndex = Math.max(currentIndex - 1, -1);
                break;
            case 'Enter':
                e.preventDefault();
                if (currentIndex >= 0) {
                    items[currentIndex].click();
                }
                return;
            case 'Escape':
                this.hideSearchSuggestions(e.target);
                return;
            default:
                return;
        }

        // 更新高亮
        items.forEach((item, index) => {
            item.classList.toggle('active', index === currentIndex);
            if (index === currentIndex) {
                item.style.backgroundColor = '#f8f9fa';
            } else {
                item.style.backgroundColor = 'white';
            }
        });
    }

    // 防抖函数
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func.apply(this, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// 自动初始化搜索组件
document.addEventListener('DOMContentLoaded', () => {
    window.searchComponent = new SearchComponent();
});

console.log('Search component loaded with real-time search functionality');
