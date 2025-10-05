# 炒菜学习平台

一个专注于中式炒菜教学的在线学习平台，采用纯前端技术构建，提供丰富的菜谱、详细的制作步骤和实用的烹饪技巧。

## 🌟 项目特色

- **纯前端技术栈**：HTML5 + CSS3 + JavaScript，无需后端服务器
- **响应式设计**：完美适配桌面端、平板端、移动端
- **模块化架构**：代码结构清晰，便于维护和扩展
- **本地化存储**：支持用户偏好设置和收藏功能
- **现代化UI**：简洁直观的界面设计，良好的用户体验

## 🚀 快速开始

### 1. 下载项目
```bash
# 直接下载或克隆项目
git clone [项目地址]
cd cooking-platform
```

### 2. 运行项目
由于是纯前端项目，可以通过以下方式运行：

**方法一：直接打开**
- 直接双击 `index.html` 文件在浏览器中打开

**方法二：本地服务器**
```bash
# 使用 Python 启动简单服务器
python -m http.server 8000
# 或使用 Node.js 的 http-server
npx http-server

# 然后在浏览器访问 http://localhost:8000
```

**方法三：VS Code Live Server**
- 在 VS Code 中安装 Live Server 扩展
- 右键点击 `index.html` 选择 "Open with Live Server"

## 📁 项目结构

```
cooking-platform/
├── index.html              # 首页
├── pages/                  # 页面文件夹
│   ├── recipes/           # 菜谱相关页面
│   │   ├── list.html      # 菜谱列表页
│   │   ├── detail.html    # 菜谱详情页
│   │   └── search.html    # 搜索页面
│   ├── guide/             # 指南页面
│   │   ├── basics.html    # 基础指南
│   │   └── tips.html      # 烹饪技巧
│   └── profile/           # 个人中心
│       ├── favorites.html # 收藏页面
│       └── history.html   # 浏览历史
├── css/                   # 样式文件夹
│   ├── base/             # 基础样式
│   │   ├── reset.css     # 样式重置
│   │   ├── variables.css # CSS变量
│   │   └── base.css      # 基础样式
│   ├── components/       # 组件样式
│   │   ├── header.css    # 头部样式
│   │   ├── footer.css    # 底部样式
│   │   └── card.css      # 卡片组件
│   ├── pages/           # 页面样式
│   │   ├── home.css     # 首页样式
│   │   └── ...          # 其他页面样式
│   └── responsive.css    # 响应式样式
├── js/                   # JavaScript文件夹
│   ├── utils/           # 工具函数
│   │   ├── storage.js   # 本地存储工具
│   │   ├── dom.js       # DOM操作工具
│   │   └── api.js       # 数据获取工具
│   ├── components/      # 组件脚本
│   ├── pages/          # 页面脚本
│   ├── data/           # 数据管理
│   │   └── recipes.js  # 菜谱数据
│   └── app.js          # 应用入口
├── assets/             # 资源文件夹
│   └── images/         # 图片资源
└── data/               # 模拟数据
```

## 🎯 功能特性

### 核心功能
- ✅ 菜谱浏览和搜索
- ✅ 详细的制作步骤展示
- ✅ 菜谱收藏和管理
- ✅ 烹饪技巧和指南
- ✅ 响应式界面设计
- ✅ 本地存储用户数据

### 技术特点
- 🏗️ 模块化JavaScript架构
- 🎨 CSS变量和现代布局
- 📱 移动端友好的交互设计
- 💾 本地存储管理用户偏好
- 🔍 智能搜索和筛选功能

## 📱 页面介绍

### 首页 (index.html)
- 展示热门菜系分类
- 今日推荐和热门菜谱
- 烹饪技巧预览
- 响应式英雄区域

### 菜谱列表页 (pages/recipes/list.html)
- 多维度筛选（菜系、难度、时长）
- 网格/列表视图切换
- 分页和排序功能
- 实时搜索

### 菜谱详情页 (pages/recipes/detail.html)
- 完整的菜谱信息展示
- 分步骤制作指导
- 收藏和分享功能
- 相关菜谱推荐

### 烹饪指南页 (pages/guide/basics.html)
- 标签页切换的内容组织
- 基础知识、厨具使用等分类
- 图文并茂的指导内容

### 个人中心 (pages/profile/favorites.html)
- 收藏菜谱管理
- 浏览历史记录
- 个人偏好设置

## 🛠️ 技术栈

- **HTML5**：语义化标签，无障碍设计
- **CSS3**：
  - CSS Variables 主题系统
  - Flexbox & CSS Grid 布局
  - CSS Animation 动效
  - Media Queries 响应式设计
- **JavaScript (ES6+)**：
  - 模块化设计
  - 面向对象编程
  - 本地存储API
  - 事件委托和防抖节流

## 🎨 设计理念

### 色彩搭配
- 主色调：橙色 (#ff6b35) - 代表美食的温暖
- 辅色：青绿色 (#4ecdc4) - 代表健康和新鲜
- 强调色：黄色 (#ffe66d) - 代表愉悦的烹饪体验

### 布局设计
- 采用卡片式设计，信息层次清晰
- 响应式网格布局，适配多种屏幕
- 现代化的组件设计语言

### 交互体验
- 流畅的动画过渡效果
- 直观的图标和按钮设计
- 友好的错误处理和反馈

## 🔧 自定义和扩展

### 添加新菜谱
在 `js/data/recipes.js` 文件中的 `RecipeData.recipes` 数组中添加新的菜谱对象：

```javascript
{
    id: 'recipe_new',
    title: '新菜谱名称',
    description: '菜谱描述',
    cuisine: 'sichuan',
    difficulty: 'easy',
    cookTime: '20分钟',
    ingredients: [...],
    steps: [...],
    // ... 其他属性
}
```

### 修改样式主题
在 `css/base/variables.css` 文件中修改CSS变量：

```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    /* 修改其他颜色变量 */
}
```

### 添加新页面
1. 在相应文件夹下创建HTML文件
2. 在 `css/pages/` 下创建对应的CSS文件
3. 在 `js/pages/` 下创建对应的JavaScript文件
4. 更新导航菜单

## 📄 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

推荐使用现代浏览器以获得最佳体验。

## 📝 许可证

MIT License - 可自由使用和修改

## 🤝 贡献

欢迎提交问题和改进建议！

## 📞 联系方式

如有问题或建议，请联系：
- 邮箱：contact@cooking-platform.com
- 电话：400-123-4567

---

**享受烹饪，享受生活！** 🍳✨
