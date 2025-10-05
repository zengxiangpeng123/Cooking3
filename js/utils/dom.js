// DOM Utility Functions

class DOMUtil {
    // 安全地选择元素
    static $(selector, context = document) {
        try {
            return context.querySelector(selector);
        } catch (error) {
            console.error('Invalid selector:', selector, error);
            return null;
        }
    }

    // 安全地选择多个元素
    static $$(selector, context = document) {
        try {
            return Array.from(context.querySelectorAll(selector));
        } catch (error) {
            console.error('Invalid selector:', selector, error);
            return [];
        }
    }

    // 创建元素
    static createElement(tag, attributes = {}, children = []) {
        const element = document.createElement(tag);

        // 设置属性
        Object.entries(attributes).forEach(([key, value]) => {
            if (key === 'className' || key === 'class') {
                element.className = value;
            } else if (key === 'textContent') {
                element.textContent = value;
            } else if (key === 'innerHTML') {
                element.innerHTML = value;
            } else if (key.startsWith('data-')) {
                element.setAttribute(key, value);
            } else if (key in element) {
                element[key] = value;
            } else {
                element.setAttribute(key, value);
            }
        });

        // 添加子元素
        children.forEach(child => {
            if (typeof child === 'string') {
                element.appendChild(document.createTextNode(child));
            } else if (child instanceof Node) {
                element.appendChild(child);
            }
        });

        return element;
    }

    // 添加类名
    static addClass(element, className) {
        if (!element || !className) return false;
        
        if (typeof element === 'string') {
            element = this.$(element);
        }
        
        if (element) {
            element.classList.add(className);
            return true;
        }
        return false;
    }

    // 移除类名
    static removeClass(element, className) {
        if (!element || !className) return false;
        
        if (typeof element === 'string') {
            element = this.$(element);
        }
        
        if (element) {
            element.classList.remove(className);
            return true;
        }
        return false;
    }

    // 切换类名
    static toggleClass(element, className) {
        if (!element || !className) return false;
        
        if (typeof element === 'string') {
            element = this.$(element);
        }
        
        if (element) {
            element.classList.toggle(className);
            return true;
        }
        return false;
    }

    // 检查是否有类名
    static hasClass(element, className) {
        if (!element || !className) return false;
        
        if (typeof element === 'string') {
            element = this.$(element);
        }
        
        return element ? element.classList.contains(className) : false;
    }

    // 设置样式
    static setStyle(element, styles) {
        if (!element || !styles) return false;
        
        if (typeof element === 'string') {
            element = this.$(element);
        }
        
        if (element) {
            Object.entries(styles).forEach(([property, value]) => {
                element.style[property] = value;
            });
            return true;
        }
        return false;
    }

    // 获取计算后的样式
    static getStyle(element, property) {
        if (!element) return null;
        
        if (typeof element === 'string') {
            element = this.$(element);
        }
        
        if (element) {
            return window.getComputedStyle(element)[property];
        }
        return null;
    }

    // 显示元素
    static show(element, display = 'block') {
        return this.setStyle(element, { display });
    }

    // 隐藏元素
    static hide(element) {
        return this.setStyle(element, { display: 'none' });
    }

    // 切换显示/隐藏
    static toggle(element, display = 'block') {
        if (!element) return false;
        
        if (typeof element === 'string') {
            element = this.$(element);
        }
        
        if (element) {
            const currentDisplay = this.getStyle(element, 'display');
            if (currentDisplay === 'none') {
                this.show(element, display);
            } else {
                this.hide(element);
            }
            return true;
        }
        return false;
    }

    // 事件监听器
    static on(element, event, handler, options = {}) {
        if (!element || !event || !handler) return false;
        
        if (typeof element === 'string') {
            element = this.$(element);
        }
        
        if (element) {
            element.addEventListener(event, handler, options);
            return true;
        }
        return false;
    }

    // 移除事件监听器
    static off(element, event, handler, options = {}) {
        if (!element || !event || !handler) return false;
        
        if (typeof element === 'string') {
            element = this.$(element);
        }
        
        if (element) {
            element.removeEventListener(event, handler, options);
            return true;
        }
        return false;
    }

    // 触发事件
    static trigger(element, eventType, detail = {}) {
        if (!element || !eventType) return false;
        
        if (typeof element === 'string') {
            element = this.$(element);
        }
        
        if (element) {
            const event = new CustomEvent(eventType, { detail });
            element.dispatchEvent(event);
            return true;
        }
        return false;
    }

    // 获取元素的位置信息
    static getPosition(element) {
        if (!element) return null;
        
        if (typeof element === 'string') {
            element = this.$(element);
        }
        
        if (element) {
            const rect = element.getBoundingClientRect();
            return {
                top: rect.top + window.scrollY,
                left: rect.left + window.scrollX,
                width: rect.width,
                height: rect.height,
                right: rect.right + window.scrollX,
                bottom: rect.bottom + window.scrollY
            };
        }
        return null;
    }

    // 平滑滚动到元素
    static scrollTo(element, options = {}) {
        if (!element) return false;
        
        if (typeof element === 'string') {
            element = this.$(element);
        }
        
        if (element) {
            const defaultOptions = {
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            };
            
            element.scrollIntoView({ ...defaultOptions, ...options });
            return true;
        }
        return false;
    }

    // 设置元素内容
    static setContent(element, content, method = 'textContent') {
        if (!element) return false;
        
        if (typeof element === 'string') {
            element = this.$(element);
        }
        
        if (element) {
            element[method] = content;
            return true;
        }
        return false;
    }

    // 获取元素内容
    static getContent(element, method = 'textContent') {
        if (!element) return null;
        
        if (typeof element === 'string') {
            element = this.$(element);
        }
        
        return element ? element[method] : null;
    }

    // 清空元素内容
    static empty(element) {
        if (!element) return false;
        
        if (typeof element === 'string') {
            element = this.$(element);
        }
        
        if (element) {
            element.innerHTML = '';
            return true;
        }
        return false;
    }

    // 移除元素
    static remove(element) {
        if (!element) return false;
        
        if (typeof element === 'string') {
            element = this.$(element);
        }
        
        if (element && element.parentNode) {
            element.parentNode.removeChild(element);
            return true;
        }
        return false;
    }

    // 插入元素
    static insertAfter(newElement, targetElement) {
        if (!newElement || !targetElement) return false;
        
        if (typeof targetElement === 'string') {
            targetElement = this.$(targetElement);
        }
        
        if (targetElement && targetElement.parentNode) {
            targetElement.parentNode.insertBefore(newElement, targetElement.nextSibling);
            return true;
        }
        return false;
    }

    static insertBefore(newElement, targetElement) {
        if (!newElement || !targetElement) return false;
        
        if (typeof targetElement === 'string') {
            targetElement = this.$(targetElement);
        }
        
        if (targetElement && targetElement.parentNode) {
            targetElement.parentNode.insertBefore(newElement, targetElement);
            return true;
        }
        return false;
    }

    // 等待DOM加载完成
    static ready(callback) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', callback);
        } else {
            callback();
        }
    }

    // 防抖函数
    static debounce(func, wait, immediate = false) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                timeout = null;
                if (!immediate) func.apply(this, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(this, args);
        };
    }

    // 节流函数
    static throttle(func, limit) {
        let lastFunc;
        let lastRan;
        return function(...args) {
            if (!lastRan) {
                func.apply(this, args);
                lastRan = Date.now();
            } else {
                clearTimeout(lastFunc);
                lastFunc = setTimeout(() => {
                    if ((Date.now() - lastRan) >= limit) {
                        func.apply(this, args);
                        lastRan = Date.now();
                    }
                }, limit - (Date.now() - lastRan));
            }
        };
    }

    // 获取表单数据
    static getFormData(form) {
        if (!form) return null;
        
        if (typeof form === 'string') {
            form = this.$(form);
        }
        
        if (form) {
            const formData = new FormData(form);
            const data = {};
            
            for (let [key, value] of formData.entries()) {
                if (data[key]) {
                    if (Array.isArray(data[key])) {
                        data[key].push(value);
                    } else {
                        data[key] = [data[key], value];
                    }
                } else {
                    data[key] = value;
                }
            }
            
            return data;
        }
        return null;
    }

    // 检查元素是否在视窗中
    static isInViewport(element, threshold = 0) {
        if (!element) return false;
        
        if (typeof element === 'string') {
            element = this.$(element);
        }
        
        if (element) {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const windowWidth = window.innerWidth || document.documentElement.clientWidth;
            
            return (
                rect.top >= -threshold &&
                rect.left >= -threshold &&
                rect.bottom <= windowHeight + threshold &&
                rect.right <= windowWidth + threshold
            );
        }
        return false;
    }

    // 格式化HTML字符串
    static escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // 生成唯一ID
    static generateId(prefix = 'id') {
        return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
}

// 导出到全局对象
window.DOMUtil = DOMUtil;
