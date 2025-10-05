// Header Component (Basic functionality)

// 移动菜单功能
DOMUtil.ready(() => {
    const menuBtn = DOMUtil.$('#mobileMenuBtn');
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            this.classList.toggle('header__menu-btn--active');
        });
    }
});
