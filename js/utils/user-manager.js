// 用户信息统一管理系统
// 确保所有页面的用户信息保持同步

class UserManager {
    constructor() {
        this.userInfo = this.loadUserInfo();
        this.init();
    }

    // 加载用户信息
    loadUserInfo() {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn !== 'true') {
            return null;
        }

        return {
            username: localStorage.getItem('username') || '',
            email: localStorage.getItem('email') || '',
            avatar: localStorage.getItem('userAvatar') || this.getDefaultAvatar(),
            isLoggedIn: true
        };
    }

    // 获取默认头像
    getDefaultAvatar() {
        return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiNmZjZiMzUiLz4KPHN2ZyB4PSI4IiB5PSI4IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IndoaXRlIj4KPHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0xMiAxMkMxNC4yMDkxIDEyIDE2IDEwLjIwOTEgMTYgOEMxNiA1Ljc5MDg2IDE0LjIwOTEgNCAxMiA0QzkuNzkwODYgNCA4IDUuNzkwODYgOCA4QzggMTAuMjA5MSA5Ljc5MDg2IDEyIDEyIDEyWiIgZmlsbD0iY3VycmVudENvbG9yIi8+CjxwYXRoIGQ9Ik0xMiAxNEM5LjMzIDEzLjk5NiA2LjgwNiAxNS4wNzggNS4xNzUgMTYuOTlDNC4xMjkgMTcuOTg2IDQuMDY2IDE5LjU3NiA1LjAxNyAyMC42NjdDNS43MTQgMjEuNDgyIDYuOTIgMjEuOTk3IDguMTY2IDIySDguMTc2SDE1LjgyNEMxNy4wOCAyMS45OTcgMTguMjg2IDIxLjQ4MiAxOC45ODMgMjAuNjY3QzE5LjkzNCAxOS41NzYgMTkuODcxIDE3Ljk4NiAxOC44MjUgMTYuOTlDMTcuMTk0IDE1LjA3OCAxNC42NyAxMy45OTYgMTIgMTRaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPC9zdmc+Cjwvc3ZnPgo8L3N2Zz4=';
    }

    // 初始化
    init() {
        // 监听localStorage变化（用于跨标签页同步）
        window.addEventListener('storage', (e) => {
            if (e.key === 'username' || e.key === 'userAvatar' || e.key === 'isLoggedIn') {
                this.userInfo = this.loadUserInfo();
                this.updateAllUserElements();
            }
        });

        // 监听自定义用户信息更新事件
        window.addEventListener('userInfoUpdated', () => {
            this.userInfo = this.loadUserInfo();
            this.updateAllUserElements();
        });
    }

    // 登录用户
    login(username, email = '') {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        if (email) {
            localStorage.setItem('email', email);
        }
        
        this.userInfo = this.loadUserInfo();
        this.updateAllUserElements();
        this.triggerUserInfoUpdate();
        
        return true;
    }

    // 更新用户信息
    updateUserInfo(updates) {
        if (!this.userInfo) return false;

        if (updates.username) {
            localStorage.setItem('username', updates.username);
            this.userInfo.username = updates.username;
        }

        if (updates.email) {
            localStorage.setItem('email', updates.email);
            this.userInfo.email = updates.email;
        }

        if (updates.avatar) {
            localStorage.setItem('userAvatar', updates.avatar);
            this.userInfo.avatar = updates.avatar;
        }

        this.updateAllUserElements();
        this.triggerUserInfoUpdate();
        
        return true;
    }

    // 退出登录
    logout() {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        localStorage.removeItem('email');
        localStorage.removeItem('userAvatar');
        
        this.userInfo = null;
        this.updateAllUserElements();
        this.triggerUserInfoUpdate();
        
        return true;
    }

    // 触发用户信息更新事件
    triggerUserInfoUpdate() {
        window.dispatchEvent(new CustomEvent('userInfoUpdated', {
            detail: this.userInfo
        }));
    }

    // 更新页面中所有用户相关元素
    updateAllUserElements() {
        this.updateUserAvatars();
        this.updateUserNames();
        this.updateUserStatus();
    }

    // 更新所有头像
    updateUserAvatars() {
        const avatarElements = document.querySelectorAll('#userAvatar, .user-avatar img, [data-user="avatar"]');
        const avatar = this.userInfo ? this.userInfo.avatar : this.getDefaultAvatar();
        
        avatarElements.forEach(img => {
            if (img) {
                img.src = avatar;
                img.alt = this.userInfo ? `${this.userInfo.username}的头像` : '用户头像';
            }
        });
    }

    // 更新所有用户名
    updateUserNames() {
        const nameElements = document.querySelectorAll('#userName, .user-name, [data-user="name"]');
        const username = this.userInfo ? this.userInfo.username : '用户名';
        
        nameElements.forEach(element => {
            if (element) {
                element.textContent = username;
            }
        });
    }

    // 更新用户登录状态显示
    updateUserStatus() {
        const authButtons = document.getElementById('authButtons');
        const userInfoElement = document.getElementById('userInfo');
        
        if (this.userInfo && this.userInfo.isLoggedIn) {
            // 已登录状态
            if (authButtons) authButtons.style.display = 'none';
            if (userInfoElement) {
                userInfoElement.style.display = 'flex';
            }
        } else {
            // 未登录状态
            if (authButtons) authButtons.style.display = 'flex';
            if (userInfoElement) {
                userInfoElement.style.display = 'none';
            }
        }
    }

    // 获取当前用户信息
    getCurrentUser() {
        return this.userInfo;
    }

    // 检查是否已登录
    isLoggedIn() {
        return this.userInfo && this.userInfo.isLoggedIn;
    }

    // 初始化页面用户显示
    initPageDisplay() {
        this.updateAllUserElements();
    }
}

// 创建全局用户管理器实例
window.userManager = new UserManager();

// 页面加载时初始化用户显示
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.userManager.initPageDisplay();
    });
} else {
    window.userManager.initPageDisplay();
}
