// 用户中心管理系统 - 完整功能版本

class UserCenterManager {
    constructor() {
        this.init();
    }

    init() {
        console.log('🚀 用户中心管理系统初始化...');
        this.initializePersistentStorage();
        this.loadUserData();
        this.setupEventListeners();
    }

    // 初始化持久化存储
    initializePersistentStorage() {
        // 检查是否支持localStorage
        if (typeof Storage !== "undefined") {
            console.log('✅ 支持本地存储');
            
            // 设置数据过期策略（永不过期，除非手动删除）
            const storageConfig = {
                version: '1.0',
                persistent: true,
                autoCleanup: false,
                lastAccess: new Date().toISOString()
            };
            
            localStorage.setItem('cooking_platform_config', JSON.stringify(storageConfig));
        } else {
            console.error('❌ 浏览器不支持本地存储');
        }
    }

    // 加载用户数据
    loadUserData() {
        this.userData = {
            learningHistory: this.getLearningHistory(),
            weeklyLearning: this.getWeeklyLearning(),
            stats: this.getStats(),
            favorites: this.getFavorites()
        };
    }

    // 获取学习历史
    getLearningHistory() {
        const history = JSON.parse(localStorage.getItem('learning_history') || '[]');
        return history.map(item => ({
            ...item,
            timestamp: new Date(item.timestamp),
            recipe: this.getRecipeById(item.recipeId)
        })).filter(item => item.recipe);
    }

    // 添加学习记录
    addLearningRecord(recipeId) {
        const history = JSON.parse(localStorage.getItem('learning_history') || '[]');
        
        // 检查是否已存在（避免重复）
        const existingIndex = history.findIndex(item => item.recipeId === recipeId);
        
        const newRecord = {
            recipeId: recipeId,
            timestamp: new Date().toISOString(),
            date: new Date().toDateString()
        };
        
        if (existingIndex >= 0) {
            // 更新已存在的记录时间
            history[existingIndex] = newRecord;
        } else {
            // 添加新记录
            history.unshift(newRecord);
        }
        
        // 限制历史记录数量（最多50条）
        const limitedHistory = history.slice(0, 50);
        
        localStorage.setItem('learning_history', JSON.stringify(limitedHistory));
        this.updateStats();
        
        console.log('✅ 学习记录已添加:', recipeId);
    }

    // 获取本周学习数据
    getWeeklyLearning() {
        const now = new Date();
        const monday = new Date(now.setDate(now.getDate() - now.getDay() + 1));
        monday.setHours(0, 0, 0, 0);
        
        const history = this.getLearningHistory();
        const thisWeekRecords = history.filter(record => 
            record.timestamp >= monday && record.timestamp <= new Date()
        );
        
        return {
            startDate: monday,
            records: thisWeekRecords,
            dailyStatus: this.generateDailyStatus(thisWeekRecords)
        };
    }

    // 生成每日学习状态
    generateDailyStatus(weekRecords) {
        const dailyStatus = [];
        const now = new Date();
        const monday = new Date(now);
        monday.setDate(now.getDate() - now.getDay() + 1);
        monday.setHours(0, 0, 0, 0);

        for (let i = 0; i < 7; i++) {
            const currentDay = new Date(monday);
            currentDay.setDate(monday.getDate() + i);
            
            const dayRecords = weekRecords.filter(record => 
                record.timestamp.toDateString() === currentDay.toDateString()
            );
            
            const isToday = currentDay.toDateString() === now.toDateString();
            const isPast = currentDay < now && !isToday;
            const isFuture = currentDay > now;
            
            dailyStatus.push({
                date: currentDay,
                dayName: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][currentDay.getDay()],
                hasLearning: dayRecords.length > 0,
                learningCount: dayRecords.length,
                isToday: isToday,
                isPast: isPast,
                isFuture: isFuture,
                status: this.getDayStatus(dayRecords.length, isToday, isPast, isFuture)
            });
        }
        
        return dailyStatus;
    }

    // 获取每日状态
    getDayStatus(learningCount, isToday, isPast, isFuture) {
        if (learningCount > 0) {
            return { icon: '✅', text: '已学习', class: 'completed' };
        } else if (isToday) {
            return { icon: '🔥', text: '今天', class: 'current' };
        } else if (isPast) {
            return { icon: '❌', text: '未学习', class: 'missed' };
        } else {
            return { icon: '⭕', text: '未来', class: 'future' };
        }
    }

    // 获取统计数据
    getStats() {
        const history = this.getLearningHistory();
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        
        // 计算连续学习天数
        const studyDays = this.calculateConsecutiveStudyDays(history);
        
        return {
            learnedRecipes: new Set(history.map(h => h.recipeId)).size,
            favoriteCount: favorites.length,
            studyDays: studyDays,
            achievements: this.calculateAchievements(history, favorites)
        };
    }

    // 计算连续学习天数
    calculateConsecutiveStudyDays(history) {
        if (history.length === 0) return 0;
        
        const uniqueDates = [...new Set(history.map(h => h.timestamp.toDateString()))];
        uniqueDates.sort((a, b) => new Date(b) - new Date(a));
        
        let consecutiveDays = 0;
        const today = new Date().toDateString();
        
        for (let i = 0; i < uniqueDates.length; i++) {
            const currentDate = new Date(uniqueDates[i]);
            const expectedDate = new Date();
            expectedDate.setDate(expectedDate.getDate() - i);
            
            if (currentDate.toDateString() === expectedDate.toDateString()) {
                consecutiveDays++;
            } else {
                break;
            }
        }
        
        return consecutiveDays;
    }

    // 计算成就数量
    calculateAchievements(history, favorites) {
        let achievements = 0;
        const learnedCount = new Set(history.map(h => h.recipeId)).size;
        const studyDays = this.calculateConsecutiveStudyDays(history);
        
        // 成就规则
        if (learnedCount >= 1) achievements++; // 初学者
        if (studyDays >= 7) achievements++; // 热爱烹饪
        if (learnedCount >= 10) achievements++; // 烹饪新手
        if (favorites.length >= 20) achievements++; // 收藏达人
        if (learnedCount >= 50) achievements++; // 厨艺大师
        if (studyDays >= 30) achievements++; // 持之以恒
        
        return achievements;
    }

    // 获取收藏数据 - 使用统一的UserPreferences系统
    getFavorites() {
        if (window.UserPreferences) {
            return window.UserPreferences.getFavorites();
        } else {
            // 降级处理：直接读取 cooking_favorites
            return JSON.parse(localStorage.getItem('cooking_favorites') || '[]');
        }
    }

    // 根据ID获取菜谱
    getRecipeById(recipeId) {
        if (window.RecipeData && window.RecipeData.recipes) {
            return window.RecipeData.recipes.find(recipe => recipe.id === recipeId);
        }
        return null;
    }

    // 渲染最近学习
    renderRecentLearning() {
        // 适配新的HTML结构
        const container = document.getElementById('learningGrid') || document.getElementById('recentLearningGrid');
        const emptyState = document.getElementById('learningEmpty') || document.getElementById('learningEmptyState');
        const viewMoreBtn = document.getElementById('viewMoreLearning');
        
        if (!container) {
            console.warn('未找到学习历史容器');
            return;
        }
        
        const history = this.getLearningHistory();
        const recentItems = history.slice(0, 6); // 显示最近6条记录
        
        console.log('渲染最近学习，记录数量:', recentItems.length);
        
        if (recentItems.length === 0) {
            container.style.display = 'none';
            if (emptyState) emptyState.style.display = 'block';
            if (viewMoreBtn) viewMoreBtn.style.display = 'none';
            return;
        }
        
        container.style.display = 'grid';
        if (emptyState) emptyState.style.display = 'none';
        
        // 显示"查看更多"按钮（如果有超过6条记录）
        if (viewMoreBtn) {
            viewMoreBtn.style.display = history.length > 6 ? 'block' : 'none';
        }
        
        container.innerHTML = recentItems.map(item => this.createLearningCard(item)).join('');
        
        // 绑定卡片事件
        this.bindLearningCardEvents();
    }

    // 创建学习记录卡片
    createLearningCard(item) {
        const recipe = item.recipe;
        const cuisineInfo = this.getCuisineInfo(recipe.cuisine);
        const timeDiff = this.getTimeAgo(item.timestamp);
        
        // 检查是否收藏
        const isFavorite = this.getFavorites().includes(recipe.id);
        
        return `
            <div class="learning-card" data-recipe-id="${recipe.id}">
                <div class="learning-card__image">
                    <img src="/cooking-platform/data/imgs/${this.getCuisineFolderName(recipe.cuisine)}/${recipe.title}.png" 
                         alt="${recipe.title}"
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                         style="width: 100%; height: 160px; object-fit: cover; border-radius: 8px;">
                    <div class="learning-card__placeholder" style="
                        display: none;
                        width: 100%; 
                        height: 160px; 
                        background: linear-gradient(135deg, ${cuisineInfo.color}, ${this.darkenColor(cuisineInfo.color, 20)});
                        border-radius: 8px;
                        align-items: center;
                        justify-content: center;
                        color: white;
                    ">
                        <div style="text-align: center;">
                            <div style="font-size: 2rem; margin-bottom: 0.5rem;">${cuisineInfo.icon}</div>
                            <div style="font-size: 0.9rem; font-weight: 600;">${recipe.title}</div>
                        </div>
                    </div>
                    
                    <!-- 学习时间标签 -->
                    <div class="learning-card__time-badge" style="
                        position: absolute;
                        top: 8px;
                        left: 8px;
                        background: rgba(0,0,0,0.7);
                        color: white;
                        padding: 4px 8px;
                        border-radius: 4px;
                        font-size: 0.75rem;
                    ">
                        ${timeDiff}
                    </div>
                </div>
                
                <div class="learning-card__content" style="padding: 12px;">
                    <h4 class="learning-card__title" style="margin: 0 0 8px 0; font-size: 1rem; font-weight: 600; color: #333;">${recipe.title}</h4>
                    <p class="learning-card__desc" style="margin: 0 0 12px 0; font-size: 0.85rem; color: #666; line-height: 1.4;">${recipe.description.substring(0, 60)}...</p>
                    
                    <div class="learning-card__meta" style="display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem; color: #999; margin-bottom: 12px;">
                        <span>${cuisineInfo.name}</span>
                        <span>${recipe.cookTime}</span>
                    </div>
                    
                    <div class="learning-card__actions" style="display: flex; justify-content: space-between;">
                        <button class="learning-card__view-btn" onclick="window.location.href='../recipes/detail.html?id=${recipe.id}'" style="
                            background: #ff6b35; 
                            color: white; 
                            border: none; 
                            padding: 6px 12px; 
                            border-radius: 4px; 
                            font-size: 0.8rem; 
                            cursor: pointer;
                        ">
                            查看详情
                        </button>
                        
                        <div class="learning-card__quick-actions" style="display: flex; gap: 8px;">
                            <button class="quick-action-btn favorite-btn ${isFavorite ? 'active' : ''}" 
                                    data-recipe-id="${recipe.id}" 
                                    title="${isFavorite ? '取消收藏' : '收藏'}"
                                    style="
                                        background: none;
                                        border: 1px solid #ddd;
                                        padding: 6px 8px;
                                        border-radius: 4px;
                                        cursor: pointer;
                                        color: ${isFavorite ? '#ff6b35' : '#666'};
                                    ">
                                ${isFavorite ? '♥' : '♡'}
                            </button>
                            
                            <button class="quick-action-btn share-btn" 
                                    data-recipe-id="${recipe.id}" 
                                    title="分享"
                                    style="
                                        background: none;
                                        border: 1px solid #ddd;
                                        padding: 6px 8px;
                                        border-radius: 4px;
                                        cursor: pointer;
                                        color: #666;
                                    ">
                                🔗
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // 渲染本周学习状态
    renderWeeklyLearning() {
        const container = document.getElementById('weeklyGrid');
        const weekRange = document.getElementById('currentWeekRange');
        const completedCount = document.getElementById('completedDaysCount');
        const remainingCount = document.getElementById('remainingDaysCount');
        
        if (!container) {
            console.warn('未找到本周学习容器');
            return;
        }
        
        console.log('渲染本周学习状态...');
        
        const weeklyData = this.getWeeklyLearning();
        
        // 设置周范围显示
        if (weekRange) {
            const startDate = weeklyData.startDate;
            const endDate = new Date(startDate);
            endDate.setDate(startDate.getDate() + 6);
            
            weekRange.textContent = `(${this.formatDate(startDate)} - ${this.formatDate(endDate)})`;
        }
        
        // 渲染每日状态 - 适配新的CSS类名
        container.innerHTML = weeklyData.dailyStatus.map(day => `
            <div class="day-item ${day.status.class}" title="${day.date.toLocaleDateString()} - ${day.status.text}">
                <div class="day-name">${day.dayName}</div>
                <div class="day-status">${day.status.icon}</div>
                <div class="day-date">${day.date.getDate()}日</div>
                ${day.learningCount > 0 ? `<div style="position: absolute; top: 5px; right: 5px; background: rgba(255,255,255,0.3); color: inherit; font-size: 0.7rem; padding: 2px 6px; border-radius: 10px;">+${day.learningCount}</div>` : ''}
            </div>
        `).join('');
        
        // 更新统计
        const completedDays = weeklyData.dailyStatus.filter(day => day.hasLearning).length;
        if (completedCount) completedCount.textContent = completedDays;
        if (remainingCount) remainingCount.textContent = 7 - completedDays;
        
        console.log('✅ 本周学习状态渲染完成，完成天数:', completedDays);
    }

    // 绑定学习卡片事件
    bindLearningCardEvents() {
        // 收藏按钮事件
        document.querySelectorAll('.favorite-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const recipeId = btn.getAttribute('data-recipe-id');
                this.toggleFavorite(recipeId, btn);
            });
        });
        
        // 分享按钮事件
        document.querySelectorAll('.share-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const recipeId = btn.getAttribute('data-recipe-id');
                this.shareRecipe(recipeId);
            });
        });
    }

    // 切换收藏状态 - 使用统一的UserPreferences系统
    toggleFavorite(recipeId, btn) {
        const recipe = this.getRecipeById(recipeId);
        
        if (!window.UserPreferences) {
            console.error('UserPreferences 系统未加载');
            this.showToast('收藏功能暂不可用，请刷新页面重试', 'error');
            return;
        }
        
        const isFavorite = window.UserPreferences.isFavorite(recipeId);
        
        let success = false;
        
        if (isFavorite) {
            // 取消收藏
            success = window.UserPreferences.removeFavorite(recipeId);
            if (success) {
                btn.classList.remove('active');
                btn.innerHTML = '♡';
                btn.style.color = '#666';
                btn.title = '收藏';
                this.showToast(`已取消收藏 "${recipe ? recipe.title : '菜谱'}"`, 'info');
            }
        } else {
            // 添加收藏
            success = window.UserPreferences.addFavorite(recipeId);
            if (success) {
                btn.classList.add('active');
                btn.innerHTML = '♥';
                btn.style.color = '#ff6b35';
                btn.title = '取消收藏';
                this.showToast(`已收藏 "${recipe ? recipe.title : '菜谱'}"`, 'success');
            }
        }
        
        if (success) {
            // 触发自定义事件，通知其他页面更新收藏状态
            const favoriteEvent = new CustomEvent('favoriteChanged', {
                detail: { recipeId, isFavorite: !isFavorite, recipe }
            });
            window.dispatchEvent(favoriteEvent);
            
            // 更新本页面的统计
            this.updateStats();
            
            console.log('✅ 收藏状态已更新:', { recipeId, newStatus: !isFavorite, recipeName: recipe?.title, system: 'UserPreferences' });
        } else {
            this.showToast('收藏操作失败，请重试', 'error');
            console.error('❌ 收藏操作失败:', { recipeId, action: isFavorite ? 'remove' : 'add' });
        }
    }

    // 分享菜谱
    shareRecipe(recipeId) {
        const recipe = this.getRecipeById(recipeId);
        if (!recipe) return;
        
        const shareUrl = `${window.location.origin}/cooking-platform/pages/recipes/detail.html?id=${recipeId}`;
        const shareText = `我在炒菜学习平台学习了「${recipe.title}」，一起来看看这道美味的${this.getCuisineInfo(recipe.cuisine).name}吧！`;
        
        if (navigator.share) {
            // 使用Web Share API
            navigator.share({
                title: `炒菜学习平台 - ${recipe.title}`,
                text: shareText,
                url: shareUrl
            });
        } else {
            // 复制到剪贴板
            const fullShareText = `${shareText}\n${shareUrl}`;
            navigator.clipboard.writeText(fullShareText).then(() => {
                this.showToast('分享链接已复制到剪贴板', 'success');
            }).catch(() => {
                // 降级处理
                prompt('请复制以下链接分享：', fullShareText);
            });
        }
    }

    // 数据导入功能
    importFavorites() {
        const fileInput = document.getElementById('favoritesFileInput');
        if (fileInput) {
            fileInput.click();
        }
    }

    importAllData() {
        const fileInput = document.getElementById('backupFileInput');
        if (fileInput) {
            fileInput.click();
        }
    }

    // 处理文件导入
    handleFileImport(file, type) {
        const reader = new FileReader();
        
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                
                if (type === 'favorites') {
                    this.importFavoritesData(data);
                } else if (type === 'backup') {
                    this.importBackupData(data);
                }
            } catch (error) {
                this.showToast('文件格式错误，无法导入', 'error');
                console.error('导入失败:', error);
            }
        };
        
        reader.readAsText(file);
    }

    // 导入收藏数据 - 使用统一的UserPreferences系统
    importFavoritesData(data) {
        if (!window.UserPreferences) {
            this.showToast('收藏系统未加载，请刷新页面重试', 'error');
            return;
        }
        
        let importedCount = 0;
        
        if (Array.isArray(data)) {
            data.forEach(recipeId => {
                if (!window.UserPreferences.isFavorite(recipeId) && this.getRecipeById(recipeId)) {
                    if (window.UserPreferences.addFavorite(recipeId)) {
                        importedCount++;
                    }
                }
            });
            
            this.showToast(`成功导入 ${importedCount} 个收藏`, 'success');
            this.updateStats();
            this.renderRecentLearning();
        } else {
            this.showToast('收藏数据格式错误', 'error');
        }
    }

    // 导入完整备份数据 - 使用统一的UserPreferences系统
    importBackupData(data) {
        if (confirm('导入数据将覆盖当前所有数据，是否继续？')) {
            let importedItems = 0;
            
            try {
                // 导入用户基本信息
                if (data.username) {
                    localStorage.setItem('username', data.username);
                    importedItems++;
                }
                if (data.email) {
                    localStorage.setItem('email', data.email);
                    importedItems++;
                }
                if (data.phone) {
                    localStorage.setItem('phone', data.phone);
                    importedItems++;
                }
                if (data.bio) {
                    localStorage.setItem('bio', data.bio);
                    importedItems++;
                }
                if (data.userAvatar) {
                    localStorage.setItem('userAvatar', data.userAvatar);
                    importedItems++;
                }
                
                // 导入收藏数据 - 使用UserPreferences系统
                if (data.favorites && window.UserPreferences) {
                    // 清空现有收藏
                    const currentFavorites = window.UserPreferences.getFavorites();
                    currentFavorites.forEach(id => window.UserPreferences.removeFavorite(id));
                    
                    // 导入新收藏
                    let favoriteImported = 0;
                    data.favorites.forEach(recipeId => {
                        if (window.UserPreferences.addFavorite(recipeId)) {
                            favoriteImported++;
                        }
                    });
                    if (favoriteImported > 0) importedItems++;
                    console.log(`导入了 ${favoriteImported} 个收藏`);
                }
                
                // 导入学习历史
                if (data.learning_history) {
                    localStorage.setItem('learning_history', JSON.stringify(data.learning_history));
                    importedItems++;
                }
                
                this.showToast(`数据导入成功，共恢复 ${importedItems} 项数据`, 'success');
                
                // 刷新页面以显示新数据
                setTimeout(() => {
                    location.reload();
                }, 2000);
            } catch (error) {
                console.error('数据导入失败:', error);
                this.showToast('数据导入失败，请检查文件格式', 'error');
            }
        }
    }

    // 辅助方法
    getCuisineInfo(cuisine) {
        const cuisines = {
            'sichuan': { name: '川菜', icon: '🌶️', color: '#ff4757' },
            'cantonese': { name: '粤菜', icon: '🦐', color: '#3742fa' },
            'hunan': { name: '湘菜', icon: '🔥', color: '#ff3838' },
            'shandong': { name: '鲁菜', icon: '🐟', color: '#2f3542' }
        };
        return cuisines[cuisine] || { name: '其他', icon: '🍽️', color: '#57606f' };
    }

    getCuisineFolderName(cuisine) {
        const mapping = {
            'sichuan': '川菜',
            'hunan': '湘菜', 
            'cantonese': '粵菜',
            'shandong': '鲁菜'
        };
        return mapping[cuisine] || '川菜';
    }

    darkenColor(color, percent) {
        const num = parseInt(color.replace("#", ""), 16);
        const amt = Math.round(2.55 * percent);
        const R = Math.max(0, Math.min(255, (num >> 16) - amt));
        const G = Math.max(0, Math.min(255, (num >> 8 & 0x00FF) - amt));
        const B = Math.max(0, Math.min(255, (num & 0x0000FF) - amt));
        return "#" + ((1 << 24) + (R << 16) + (G << 8) + B).toString(16).slice(1);
    }

    getTimeAgo(date) {
        const now = new Date();
        const diffMs = now - date;
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffMins = Math.floor(diffMs / (1000 * 60));
        
        if (diffDays > 0) {
            return `${diffDays}天前`;
        } else if (diffHours > 0) {
            return `${diffHours}小时前`;
        } else if (diffMins > 0) {
            return `${diffMins}分钟前`;
        } else {
            return '刚刚';
        }
    }

    formatDate(date) {
        return `${date.getMonth() + 1}/${date.getDate()}`;
    }

    updateStats() {
        const stats = this.getStats();
        
        const elements = {
            learnedRecipes: document.getElementById('learnedRecipes'),
            favoriteCount: document.getElementById('favoriteCount'),
            studyDays: document.getElementById('studyDays'),
            achievements: document.getElementById('achievements')
        };
        
        Object.keys(elements).forEach(key => {
            if (elements[key]) {
                elements[key].textContent = stats[key];
            }
        });
    }

    // 设置事件监听器
    setupEventListeners() {
        // 收藏文件导入
        const favoritesInput = document.getElementById('favoritesFileInput');
        if (favoritesInput) {
            favoritesInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    this.handleFileImport(file, 'favorites');
                }
            });
        }
        
        // 备份文件导入
        const backupInput = document.getElementById('backupFileInput');
        if (backupInput) {
            backupInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    this.handleFileImport(file, 'backup');
                }
            });
        }
    }

    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: ${type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#2196f3'};
            color: white;
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
        }, 3000);
    }
}

// 全局函数（供HTML调用）
window.userCenterManager = new UserCenterManager();

// 清空学习历史
function clearLearningHistory() {
    if (confirm('确定要清空所有学习记录吗？此操作不可恢复！')) {
        localStorage.removeItem('learning_history');
        window.userCenterManager.showToast('学习记录已清空', 'info');
        window.userCenterManager.loadUserData();
        window.userCenterManager.renderRecentLearning();
        window.userCenterManager.renderWeeklyLearning();
        window.userCenterManager.updateStats();
    }
}

// 导入收藏数据
function importFavorites() {
    window.userCenterManager.importFavorites();
}

// 导入所有数据
function importAllData() {
    window.userCenterManager.importAllData();
}

// 打开完整学习历史页面
function openFullLearningHistory() {
    window.location.href = 'learning-history.html';
}

console.log('✅ 用户中心管理系统加载完成');
