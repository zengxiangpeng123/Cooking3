// Local Storage Utility Functions

class StorageUtil {
    // 检查 localStorage 是否可用
    static isStorageAvailable() {
        try {
            const test = '__storage_test__';
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch (e) {
            return false;
        }
    }

    // 设置数据到 localStorage
    static setItem(key, value) {
        if (!this.isStorageAvailable()) {
            console.warn('localStorage is not available');
            return false;
        }

        try {
            const serializedValue = JSON.stringify(value);
            localStorage.setItem(key, serializedValue);
            return true;
        } catch (error) {
            console.error('Error setting localStorage item:', error);
            return false;
        }
    }

    // 从 localStorage 获取数据
    static getItem(key, defaultValue = null) {
        if (!this.isStorageAvailable()) {
            return defaultValue;
        }

        try {
            const item = localStorage.getItem(key);
            if (item === null) {
                return defaultValue;
            }
            return JSON.parse(item);
        } catch (error) {
            console.error('Error getting localStorage item:', error);
            return defaultValue;
        }
    }

    // 从 localStorage 删除数据
    static removeItem(key) {
        if (!this.isStorageAvailable()) {
            return false;
        }

        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error('Error removing localStorage item:', error);
            return false;
        }
    }

    // 清空所有 localStorage 数据
    static clear() {
        if (!this.isStorageAvailable()) {
            return false;
        }

        try {
            localStorage.clear();
            return true;
        } catch (error) {
            console.error('Error clearing localStorage:', error);
            return false;
        }
    }

    // 获取所有存储的键
    static getAllKeys() {
        if (!this.isStorageAvailable()) {
            return [];
        }

        const keys = [];
        for (let i = 0; i < localStorage.length; i++) {
            keys.push(localStorage.key(i));
        }
        return keys;
    }

    // 获取存储大小（近似值，以字符为单位）
    static getStorageSize() {
        if (!this.isStorageAvailable()) {
            return 0;
        }

        let total = 0;
        for (let key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                total += localStorage[key].length + key.length;
            }
        }
        return total;
    }
}

// 用户偏好设置管理
class UserPreferences {
    static KEYS = {
        FAVORITES: 'cooking_favorites',
        HISTORY: 'cooking_history',
        PREFERENCES: 'cooking_preferences',
        SEARCH_HISTORY: 'cooking_search_history',
        LIKED_TOPICS: 'cooking_liked_topics',
        LIKED_REPLIES: 'cooking_liked_replies'
    };

    // 获取收藏的菜谱
    static getFavorites() {
        return StorageUtil.getItem(this.KEYS.FAVORITES, []);
    }

    // 添加收藏
    static addFavorite(recipeId) {
        const favorites = this.getFavorites();
        if (!favorites.includes(recipeId)) {
            favorites.push(recipeId);
            StorageUtil.setItem(this.KEYS.FAVORITES, favorites);
            return true;
        }
        return false;
    }

    // 移除收藏
    static removeFavorite(recipeId) {
        const favorites = this.getFavorites();
        const index = favorites.indexOf(recipeId);
        if (index > -1) {
            favorites.splice(index, 1);
            StorageUtil.setItem(this.KEYS.FAVORITES, favorites);
            return true;
        }
        return false;
    }

    // 检查是否已收藏
    static isFavorite(recipeId) {
        const favorites = this.getFavorites();
        return favorites.includes(recipeId);
    }

    // 获取浏览历史
    static getHistory() {
        return StorageUtil.getItem(this.KEYS.HISTORY, []);
    }

    // 添加到浏览历史
    static addToHistory(recipe) {
        const history = this.getHistory();
        const existingIndex = history.findIndex(item => item.id === recipe.id);
        
        // 如果已存在，先移除
        if (existingIndex > -1) {
            history.splice(existingIndex, 1);
        }

        // 添加到开头
        history.unshift({
            ...recipe,
            viewedAt: new Date().toISOString()
        });

        // 保持历史记录不超过50条
        if (history.length > 50) {
            history.splice(50);
        }

        StorageUtil.setItem(this.KEYS.HISTORY, history);
    }

    // 清空浏览历史
    static clearHistory() {
        StorageUtil.removeItem(this.KEYS.HISTORY);
    }

    // 获取用户偏好设置
    static getPreferences() {
        return StorageUtil.getItem(this.KEYS.PREFERENCES, {
            theme: 'light',
            language: 'zh-CN',
            difficulty: 'all',
            cuisine: 'all',
            notifications: true,
            autoplay: true
        });
    }

    // 更新用户偏好设置
    static updatePreferences(newPreferences) {
        const currentPreferences = this.getPreferences();
        const updatedPreferences = { ...currentPreferences, ...newPreferences };
        StorageUtil.setItem(this.KEYS.PREFERENCES, updatedPreferences);
        return updatedPreferences;
    }

    // 获取搜索历史
    static getSearchHistory() {
        return StorageUtil.getItem(this.KEYS.SEARCH_HISTORY, []);
    }

    // 添加搜索记录
    static addSearchHistory(query) {
        const searchHistory = this.getSearchHistory();
        const trimmedQuery = query.trim();
        
        if (!trimmedQuery) return;

        // 移除已存在的相同查询
        const existingIndex = searchHistory.indexOf(trimmedQuery);
        if (existingIndex > -1) {
            searchHistory.splice(existingIndex, 1);
        }

        // 添加到开头
        searchHistory.unshift(trimmedQuery);

        // 保持搜索历史不超过20条
        if (searchHistory.length > 20) {
            searchHistory.splice(20);
        }

        StorageUtil.setItem(this.KEYS.SEARCH_HISTORY, searchHistory);
    }

    // 清空搜索历史
    static clearSearchHistory() {
        StorageUtil.removeItem(this.KEYS.SEARCH_HISTORY);
    }

    // 导出用户数据
    static exportUserData() {
        return {
            favorites: this.getFavorites(),
            history: this.getHistory(),
            preferences: this.getPreferences(),
            searchHistory: this.getSearchHistory(),
            exportDate: new Date().toISOString()
        };
    }

    // 导入用户数据
    static importUserData(userData) {
        try {
            if (userData.favorites) {
                StorageUtil.setItem(this.KEYS.FAVORITES, userData.favorites);
            }
            if (userData.history) {
                StorageUtil.setItem(this.KEYS.HISTORY, userData.history);
            }
            if (userData.preferences) {
                StorageUtil.setItem(this.KEYS.PREFERENCES, userData.preferences);
            }
            if (userData.searchHistory) {
                StorageUtil.setItem(this.KEYS.SEARCH_HISTORY, userData.searchHistory);
            }
            return true;
        } catch (error) {
            console.error('Error importing user data:', error);
            return false;
        }
    }

    // 清空所有用户数据
    static clearAllUserData() {
        Object.values(this.KEYS).forEach(key => {
            StorageUtil.removeItem(key);
        });
    }

    // ========== 点赞管理 ==========
    
    // 获取已点赞的话题列表
    static getLikedTopics() {
        return StorageUtil.getItem(this.KEYS.LIKED_TOPICS, []);
    }

    // 检查是否已点赞话题
    static hasLikedTopic(topicId) {
        const likedTopics = this.getLikedTopics();
        return likedTopics.includes(topicId);
    }

    // 添加话题点赞
    static addTopicLike(topicId) {
        const likedTopics = this.getLikedTopics();
        if (!likedTopics.includes(topicId)) {
            likedTopics.push(topicId);
            StorageUtil.setItem(this.KEYS.LIKED_TOPICS, likedTopics);
            return true;
        }
        return false;
    }

    // 取消话题点赞
    static removeTopicLike(topicId) {
        const likedTopics = this.getLikedTopics();
        const index = likedTopics.indexOf(topicId);
        if (index > -1) {
            likedTopics.splice(index, 1);
            StorageUtil.setItem(this.KEYS.LIKED_TOPICS, likedTopics);
            return true;
        }
        return false;
    }

    // 获取已点赞的回复列表
    static getLikedReplies() {
        return StorageUtil.getItem(this.KEYS.LIKED_REPLIES, []);
    }

    // 检查是否已点赞回复
    static hasLikedReply(replyId) {
        const likedReplies = this.getLikedReplies();
        return likedReplies.includes(replyId);
    }

    // 添加回复点赞
    static addReplyLike(replyId) {
        const likedReplies = this.getLikedReplies();
        if (!likedReplies.includes(replyId)) {
            likedReplies.push(replyId);
            StorageUtil.setItem(this.KEYS.LIKED_REPLIES, likedReplies);
            return true;
        }
        return false;
    }

    // 取消回复点赞
    static removeReplyLike(replyId) {
        const likedReplies = this.getLikedReplies();
        const index = likedReplies.indexOf(replyId);
        if (index > -1) {
            likedReplies.splice(index, 1);
            StorageUtil.setItem(this.KEYS.LIKED_REPLIES, likedReplies);
            return true;
        }
        return false;
    }
}

// 缓存管理
class CacheManager {
    static CACHE_PREFIX = 'cooking_cache_';
    static DEFAULT_TTL = 30 * 60 * 1000; // 30分钟

    // 设置缓存
    static set(key, data, ttl = this.DEFAULT_TTL) {
        const cacheKey = this.CACHE_PREFIX + key;
        const cacheData = {
            data: data,
            timestamp: Date.now(),
            ttl: ttl
        };
        
        return StorageUtil.setItem(cacheKey, cacheData);
    }

    // 获取缓存
    static get(key) {
        const cacheKey = this.CACHE_PREFIX + key;
        const cacheData = StorageUtil.getItem(cacheKey);

        if (!cacheData) {
            return null;
        }

        // 检查是否过期
        if (Date.now() - cacheData.timestamp > cacheData.ttl) {
            this.remove(key);
            return null;
        }

        return cacheData.data;
    }

    // 移除缓存
    static remove(key) {
        const cacheKey = this.CACHE_PREFIX + key;
        return StorageUtil.removeItem(cacheKey);
    }

    // 清空所有缓存
    static clear() {
        const keys = StorageUtil.getAllKeys();
        keys.forEach(key => {
            if (key.startsWith(this.CACHE_PREFIX)) {
                StorageUtil.removeItem(key);
            }
        });
    }

    // 清理过期缓存
    static cleanup() {
        const keys = StorageUtil.getAllKeys();
        const cacheKeys = keys.filter(key => key.startsWith(this.CACHE_PREFIX));
        
        cacheKeys.forEach(cacheKey => {
            const cacheData = StorageUtil.getItem(cacheKey);
            if (cacheData && Date.now() - cacheData.timestamp > cacheData.ttl) {
                StorageUtil.removeItem(cacheKey);
            }
        });
    }
}

// 定期清理过期缓存
setInterval(() => {
    CacheManager.cleanup();
}, 5 * 60 * 1000); // 每5分钟清理一次

// 导出到全局对象
window.StorageUtil = StorageUtil;
window.UserPreferences = UserPreferences;
window.CacheManager = CacheManager;
