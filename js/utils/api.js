// API Utility Functions (Placeholder for future backend integration)

class APIUtil {
    static async fetchRecipes() {
        // 目前使用本地数据，将来可接入后端API
        return Promise.resolve(RecipeData.recipes);
    }

    static async fetchRecipeById(id) {
        return Promise.resolve(RecipeUtils.getRecipeById(id));
    }
}

window.APIUtil = APIUtil;
