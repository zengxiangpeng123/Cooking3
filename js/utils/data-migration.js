// 数据迁移和验证工具
// 确保新旧收藏系统的数据一致性

class DataMigration {
    constructor() {
        this.init();
    }

    init() {
        console.log('🔄 数据迁移工具初始化...');
        this.checkAndMigrateFavorites();
        this.validateDataConsistency();
    }

    // 检查并迁移收藏数据
    checkAndMigrateFavorites() {
        if (!window.UserPreferences) {
            console.warn('UserPreferences 未加载，跳过收藏数据检查');
            return;
        }

        // 获取新系统的收藏数据
        const newFavorites = window.UserPreferences.getFavorites();
        
        // 获取旧系统的收藏数据
        const oldFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        
        console.log('🔍 收藏数据检查:');
        console.log('- 新系统 (cooking_favorites):', newFavorites.length, '个收藏');
        console.log('- 旧系统 (favorites):', oldFavorites.length, '个收藏');

        // 如果新系统没有数据，但旧系统有数据，进行自动迁移
        if (newFavorites.length === 0 && oldFavorites.length > 0) {
            console.log('🚚 自动迁移旧收藏数据...');
            
            let migratedCount = 0;
            oldFavorites.forEach(recipeId => {
                if (this.isValidRecipeId(recipeId)) {
                    if (window.UserPreferences.addFavorite(recipeId)) {
                        migratedCount++;
                    }
                }
            });
            
            if (migratedCount > 0) {
                console.log(`✅ 成功迁移 ${migratedCount} 个收藏到新系统`);
                
                // 清除旧数据
                localStorage.removeItem('favorites');
                
                // 显示通知（如果在用户中心页面）
                if (typeof showToast === 'function') {
                    showToast(`已自动迁移 ${migratedCount} 个收藏到新系统`, 'success');
                }
            }
        } else if (newFavorites.length > 0 && oldFavorites.length > 0) {
            // 两个系统都有数据，检查一致性
            console.log('⚠️ 检测到新旧两套收藏数据，建议清理旧数据');
            
            // 如果数据不完全一致，提示用户
            const hasConflict = !this.arraysEqual(newFavorites.sort(), oldFavorites.sort());
            if (hasConflict) {
                console.log('🔄 收藏数据不一致，需要手动处理');
            } else {
                // 数据一致，清理旧数据
                localStorage.removeItem('favorites');
                console.log('✅ 清理了重复的旧收藏数据');
            }
        }
    }

    // 验证菜谱ID是否有效
    isValidRecipeId(recipeId) {
        if (!window.RecipeData || !window.RecipeData.recipes) return false;
        return window.RecipeData.recipes.some(recipe => recipe.id === recipeId);
    }

    // 比较数组是否相等
    arraysEqual(a, b) {
        if (a.length !== b.length) return false;
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }

    // 验证数据一致性
    validateDataConsistency() {
        if (!window.UserPreferences) return;

        const favorites = window.UserPreferences.getFavorites();
        const validFavorites = favorites.filter(id => this.isValidRecipeId(id));
        
        // 如果有无效的收藏ID，清理它们
        if (validFavorites.length < favorites.length) {
            console.log(`🧹 清理 ${favorites.length - validFavorites.length} 个无效收藏`);
            
            // 重新设置有效的收藏
            window.UserPreferences.clearAllUserData();
            validFavorites.forEach(id => window.UserPreferences.addFavorite(id));
        }

        console.log(`✅ 收藏数据验证完成，有效收藏: ${validFavorites.length} 个`);
    }

    // 手动同步收藏数据（供调试使用）
    static syncFavoriteData() {
        const migration = new DataMigration();
        migration.checkAndMigrateFavorites();
        
        // 重新加载相关页面内容
        if (window.userCenterPage) {
            window.userCenterPage.updateAllStats();
            window.userCenterPage.renderContent();
        }
        
        // 如果在收藏页面，重新加载
        if (typeof loadAndDisplayFavorites === 'function') {
            loadAndDisplayFavorites();
        }
        
        console.log('🔄 收藏数据手动同步完成');
    }
}

// 自动初始化
document.addEventListener('DOMContentLoaded', () => {
    // 延迟初始化，确保其他系统先加载
    setTimeout(() => {
        window.dataMigration = new DataMigration();
    }, 800);
});

// 导出到全局
window.DataMigration = DataMigration;
console.log('✅ 数据迁移工具加载完成');




