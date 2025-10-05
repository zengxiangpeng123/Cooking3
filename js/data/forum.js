// Forum Data Structure and Management

// 论坛数据结构
const ForumData = {
    // 论坛板块分类
    categories: [
        {
            id: 'newbie',
            name: '新手交流',
            description: '从零开始学习烹饪基础知识',
            icon: 'data/imgs/烹饪基础指南/图标/新手交流.png',
            color: '#FF9A3D',
            topicCount: 156,
            replyCount: 823,
            moderators: ['小厨师', '美食达人']
        },
        {
            id: 'recipe',
            name: '菜谱分享',
            description: '分享你的拿手菜谱和烹饪心得',
            icon: 'data/imgs/烹饪基础指南/图标/菜谱分享.png',
            color: '#FF6B6B',
            topicCount: 289,
            replyCount: 1547,
            moderators: ['菜谱专家', '美食家']
        },
        {
            id: 'tools',
            name: '厨具讨论',
            description: '厨房工具选购和使用经验分享',
            icon: 'data/imgs/烹饪基础指南/图标/厨具讨论.png',
            color: '#FF9A3D',
            topicCount: 87,
            replyCount: 456,
            moderators: ['厨具达人']
        },
        {
            id: 'photo',
            name: '美食摄影',
            description: '分享美食摄影技巧和精美作品',
            icon: 'data/imgs/烹饪基础指南/图标/美食摄影.png',
            color: '#FF6B6B',
            topicCount: 134,
            replyCount: 678,
            moderators: ['摄影师', '美食博主']
        },
        {
            id: 'qa',
            name: '问答求助',
            description: '烹饪过程中的问题在线解答',
            icon: 'data/imgs/烹饪基础指南/图标/问答求助.png',
            color: '#FF9A3D',
            topicCount: 198,
            replyCount: 934,
            moderators: ['烹饪老师']
        },
        {
            id: 'lifestyle',
            name: '美食生活',
            description: '与美食相关的生活点滴分享',
            icon: 'data/imgs/烹饪基础指南/图标/美食生活.png',
            color: '#FF6B6B',
            topicCount: 145,
            replyCount: 567,
            moderators: ['生活家']
        }
    ],

    // 示例话题数据
    topics: [
        {
            id: 'topic_001',
            title: '新手请教：第一次做宫保鸡丁失败了，求指导',
            content: '昨天按照网上的教程做宫保鸡丁，结果鸡肉炒得太老了，花生也糊了，味道也不对。请问各位大神，新手做这道菜需要注意什么？',
            category: 'newbie',
            author: {
                name: '烹饪小白',
                avatar: '👨‍🍳',
                level: '新手',
                joinDate: '2024-01-20'
            },
            createdAt: '2024-01-30T09:30:00Z',
            updatedAt: '2024-01-30T14:25:00Z',
            views: 245,
            replies: 12,
            likes: 8,
            featured: false,
            pinned: false,
            tags: ['宫保鸡丁', '新手求助', '川菜'],
            lastReply: {
                author: '川菜大师',
                time: '2024-01-30T14:25:00Z'
            }
        },
        {
            id: 'topic_002',
            title: '【精华】家常红烧肉的完美做法，保证软糯不腻',
            content: `经过多年的实践和改良，我总结出了这个红烧肉的做法，每次做都很成功。

## 食材准备
- 五花肉 1000g（选择肥瘦相间的）
- 冰糖 50g
- 生抽 4勺
- 老抽 2勺
- 料酒 3勺
- 葱段、姜片适量

## 制作步骤
1. **处理肉块**：五花肉切成4cm见方的块，冷水下锅焯水
2. **炒糖色**：这是关键步骤，小火慢炒至枣红色
3. **炖煮**：加水没过肉块，小火慢炖1小时
4. **收汁**：大火收汁，让每块肉都裹上糖色

## 关键技巧
- 炒糖色时一定要小火，颜色到位立即下肉
- 炖煮时间要够，这样肉质才会软烂
- 最后收汁时要经常翻动

希望对大家有帮助！`,
            category: 'recipe',
            author: {
                name: '红烧肉专家',
                avatar: '👩‍🍳',
                level: '大厨',
                joinDate: '2023-05-15'
            },
            createdAt: '2024-01-28T10:15:00Z',
            updatedAt: '2024-01-30T16:45:00Z',
            views: 1250,
            replies: 35,
            likes: 89,
            featured: true,
            pinned: true,
            tags: ['红烧肉', '家常菜', '精华教程'],
            images: ['assets/images/forum/hongshao-step1.jpg', 'assets/images/forum/hongshao-final.jpg'],
            lastReply: {
                author: '美食爱好者',
                time: '2024-01-30T16:45:00Z'
            }
        },
        {
            id: 'topic_003',
            title: '求推荐一款性价比高的炒锅',
            content: '最近想换一个炒锅，预算在200-500之间，主要用来炒菜，请问有什么好推荐吗？铁锅还是不锈钢锅比较好？',
            category: 'tools',
            author: {
                name: '厨房新人',
                avatar: '🧑‍🍳',
                level: '初学者',
                joinDate: '2024-01-25'
            },
            createdAt: '2024-01-29T15:20:00Z',
            updatedAt: '2024-01-30T11:30:00Z',
            views: 189,
            replies: 8,
            likes: 5,
            featured: false,
            pinned: false,
            tags: ['炒锅', '厨具推荐', '选购指南'],
            lastReply: {
                author: '厨具达人',
                time: '2024-01-30T11:30:00Z'
            }
        },
        {
            id: 'topic_004',
            title: '如何拍出诱人的美食照片？分享一些拍摄技巧',
            content: `作为一个美食摄影爱好者，想和大家分享一些拍摄技巧：

## 光线是关键
- 自然光是最好的选择
- 避免使用闪光灯，会让食物失去质感
- 侧光和背光能营造层次感

## 构图技巧
- 三分法则，让主体不在正中央
- 45度角拍摄，展现食物的立体感
- 适当留白，突出主体

## 道具搭配
- 选择合适的餐具和背景
- 颜色搭配要和谐
- 适当添加装饰元素

大家有什么拍摄心得也来分享一下吧！`,
            category: 'photo',
            author: {
                name: '美食摄影师',
                avatar: '📸',
                level: '专家',
                joinDate: '2023-08-10'
            },
            createdAt: '2024-01-27T14:00:00Z',
            updatedAt: '2024-01-30T09:15:00Z',
            views: 567,
            replies: 23,
            likes: 45,
            featured: true,
            pinned: false,
            tags: ['美食摄影', '拍摄技巧', '分享'],
            images: ['assets/images/forum/photo-tips1.jpg', 'assets/images/forum/photo-tips2.jpg'],
            lastReply: {
                author: '摄影新手',
                time: '2024-01-30T09:15:00Z'
            }
        },
        {
            id: 'topic_005',
            title: '急！蒸蛋羹总是有蜂窝怎么办？',
            content: '每次蒸蛋羹都会有很多小孔，口感不嫩滑，试过很多方法都不行，有经验的朋友能指点一下吗？',
            category: 'qa',
            author: {
                name: '蒸蛋困扰者',
                avatar: '😵',
                level: '新手',
                joinDate: '2024-01-15'
            },
            createdAt: '2024-01-30T08:45:00Z',
            updatedAt: '2024-01-30T17:20:00Z',
            views: 98,
            replies: 15,
            likes: 12,
            featured: false,
            pinned: false,
            tags: ['蒸蛋羹', '求助', '技巧'],
            lastReply: {
                author: '蛋羹专家',
                time: '2024-01-30T17:20:00Z'
            }
        },
        {
            id: 'topic_006',
            title: '分享一下我家的年夜饭菜单，大家觉得怎么样？',
            content: `春节快到了，开始准备年夜饭菜单：

**冷菜**
- 白切鸡
- 酱牛肉
- 蒜泥白肉

**热菜**
- 红烧鱼（年年有余）
- 白切鸡（吉利）
- 蒜蓉蒸扇贝
- 清炒时蔬

**汤品**
- 冬瓜排骨汤

**主食**
- 饺子（必不可少）

大家觉得还需要添加什么菜吗？有什么建议？`,
            category: 'lifestyle',
            author: {
                name: '年夜饭策划师',
                avatar: '🧧',
                level: '资深',
                joinDate: '2023-12-01'
            },
            createdAt: '2024-01-25T16:30:00Z',
            updatedAt: '2024-01-30T12:40:00Z',
            views: 456,
            replies: 28,
            likes: 34,
            featured: false,
            pinned: false,
            tags: ['年夜饭', '菜单规划', '传统节日'],
            lastReply: {
                author: '传统美食爱好者',
                time: '2024-01-30T12:40:00Z'
            }
        }
    ],

    // 回复数据
    replies: [
        {
            id: 'reply_001',
            topicId: 'topic_001',
            content: '新手做宫保鸡丁确实容易出错，我建议：1. 鸡肉腌制时间不要太长，15分钟就够了；2. 花生要单独炸，小火慢炸；3. 火候要掌握好，大火快炒。',
            author: {
                name: '川菜大师',
                avatar: '👨‍🍳',
                level: '大厨',
                joinDate: '2023-03-20'
            },
            createdAt: '2024-01-30T10:15:00Z',
            likes: 15,
            parentId: null
        },
        {
            id: 'reply_002',
            topicId: 'topic_001',
            content: '@川菜大师 谢谢指导！请问腌制鸡肉用什么调料比较好？',
            author: {
                name: '烹饪小白',
                avatar: '👨‍🍳',
                level: '新手',
                joinDate: '2024-01-20'
            },
            createdAt: '2024-01-30T11:30:00Z',
            likes: 3,
            parentId: 'reply_001'
        },
        {
            id: 'reply_003',
            topicId: 'topic_002',
            content: '太棒了！按照这个方法做出来的红烧肉确实很好吃，关键是炒糖色的步骤，我之前总是掌握不好火候。',
            author: {
                name: '美食爱好者',
                avatar: '😋',
                level: '初学者',
                joinDate: '2024-01-10'
            },
            createdAt: '2024-01-30T16:45:00Z',
            likes: 8,
            parentId: null
        }
    ],

    // 用户数据（简化版）
    users: [
        {
            id: 'user_001',
            name: '烹饪小白',
            avatar: '👨‍🍳',
            level: '新手',
            points: 150,
            joinDate: '2024-01-20',
            topicCount: 3,
            replyCount: 15,
            likesReceived: 25
        },
        {
            id: 'user_002',
            name: '川菜大师',
            avatar: '👨‍🍳',
            level: '大厨',
            points: 2500,
            joinDate: '2023-03-20',
            topicCount: 45,
            replyCount: 234,
            likesReceived: 1250
        }
    ],

    // 统计数据
    stats: {
        totalTopics: 1009,
        totalReplies: 5256,
        totalUsers: 2847,
        onlineUsers: 42,
        todayNewTopics: 15,
        todayNewReplies: 67
    }
};

// 论坛工具函数
const ForumUtils = {
    // 获取所有分类
    getCategories() {
        return ForumData.categories;
    },

    // 根据ID获取分类
    getCategoryById(id) {
        return ForumData.categories.find(cat => cat.id === id);
    },

    // 获取话题列表
    getTopics(options = {}) {
        let topics = [...ForumData.topics];
        
        // 按分类筛选
        if (options.category && options.category !== 'all') {
            topics = topics.filter(topic => topic.category === options.category);
        }
        
        // 搜索
        if (options.search) {
            const searchTerm = options.search.toLowerCase();
            topics = topics.filter(topic => 
                topic.title.toLowerCase().includes(searchTerm) ||
                topic.content.toLowerCase().includes(searchTerm) ||
                topic.tags.some(tag => tag.toLowerCase().includes(searchTerm))
            );
        }
        
        // 排序
        switch (options.sort) {
            case 'newest':
                topics.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                break;
            case 'oldest':
                topics.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
                break;
            case 'hot':
                topics.sort((a, b) => (b.views + b.replies * 5 + b.likes * 3) - (a.views + a.replies * 5 + a.likes * 3));
                break;
            case 'featured':
                topics = topics.filter(topic => topic.featured);
                topics.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
                break;
            default: // latest (最新回复)
                topics.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        }
        
        // 分页
        if (options.page && options.limit) {
            const start = (options.page - 1) * options.limit;
            const end = start + options.limit;
            topics = topics.slice(start, end);
        }
        
        return topics;
    },

    // 获取热门话题
    getHotTopics(limit = 5) {
        return this.getTopics({ sort: 'hot', limit });
    },

    // 获取最新话题
    getRecentTopics(limit = 5) {
        return this.getTopics({ sort: 'newest', limit });
    },

    // 获取精华话题
    getFeaturedTopics(limit = 6) {
        return this.getTopics({ sort: 'featured', limit });
    },

    // 根据ID获取话题
    getTopicById(id) {
        return ForumData.topics.find(topic => topic.id === id);
    },

    // 获取话题的回复
    getTopicReplies(topicId, options = {}) {
        let replies = ForumData.replies.filter(reply => reply.topicId === topicId);
        
        // 排序
        switch (options.sort) {
            case 'oldest':
                replies.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
                break;
            case 'likes':
                replies.sort((a, b) => b.likes - a.likes);
                break;
            default: // newest
                replies.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        }
        
        return replies;
    },

    // 格式化时间
    formatTime(timeString) {
        const now = new Date();
        const time = new Date(timeString);
        const diff = now - time;
        
        if (diff < 60000) return '刚刚';
        if (diff < 3600000) return `${Math.floor(diff / 60000)}分钟前`;
        if (diff < 86400000) return `${Math.floor(diff / 3600000)}小时前`;
        if (diff < 2592000000) return `${Math.floor(diff / 86400000)}天前`;
        
        return time.toLocaleDateString('zh-CN');
    },

    // 格式化数字
    formatNumber(num) {
        if (num >= 10000) {
            return (num / 10000).toFixed(1) + 'w';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'k';
        }
        return num.toString();
    },

    // 获取用户等级信息
    getUserLevelInfo(level) {
        const levels = {
            '新手': { color: '#95a5a6', icon: '🌱' },
            '初学者': { color: '#3498db', icon: '📚' },
            '资深': { color: '#e67e22', icon: '🏆' },
            '专家': { color: '#9b59b6', icon: '👑' },
            '大厨': { color: '#e74c3c', icon: '⭐' }
        };
        return levels[level] || levels['新手'];
    },

    // 获取统计数据
    getStats() {
        return ForumData.stats;
    },

    // 创建新话题
    createTopic(topicData) {
        const newTopic = {
            id: `topic_${Date.now()}`,
            ...topicData,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            views: 0,
            replies: 0,
            likes: 0,
            featured: false,
            pinned: false
        };
        
        ForumData.topics.unshift(newTopic);
        this.saveToStorage();
        return newTopic;
    },

    // 创建回复
    createReply(replyData) {
        const newReply = {
            id: `reply_${Date.now()}`,
            ...replyData,
            createdAt: new Date().toISOString(),
            likes: 0
        };
        
        ForumData.replies.push(newReply);
        
        // 更新话题的回复数和最后回复时间
        const topic = this.getTopicById(replyData.topicId);
        if (topic) {
            topic.replies++;
            topic.updatedAt = newReply.createdAt;
            topic.lastReply = {
                author: replyData.author.name,
                time: newReply.createdAt
            };
        }
        
        this.saveToStorage();
        return newReply;
    },

    // 点赞话题
    likeTopic(topicId) {
        const topic = this.getTopicById(topicId);
        if (topic) {
            topic.likes++;
            this.saveToStorage();
        }
    },

    // 取消点赞话题
    unlikeTopic(topicId) {
        const topic = this.getTopicById(topicId);
        if (topic && topic.likes > 0) {
            topic.likes--;
            this.saveToStorage();
        }
    },

    // 点赞回复
    likeReply(replyId) {
        const reply = ForumData.replies.find(r => r.id === replyId);
        if (reply) {
            reply.likes++;
            this.saveToStorage();
        }
    },

    // 取消点赞回复
    unlikeReply(replyId) {
        const reply = ForumData.replies.find(r => r.id === replyId);
        if (reply && reply.likes > 0) {
            reply.likes--;
            this.saveToStorage();
        }
    },

    // 增加话题浏览量
    incrementTopicViews(topicId) {
        const topic = this.getTopicById(topicId);
        if (topic) {
            topic.views++;
            this.saveToStorage();
        }
    },

    // 保存到本地存储
    saveToStorage() {
        try {
            localStorage.setItem('forum_data', JSON.stringify({
                topics: ForumData.topics,
                replies: ForumData.replies,
                stats: ForumData.stats,
                lastUpdated: new Date().toISOString()
            }));
        } catch (error) {
            console.warn('保存论坛数据失败:', error);
        }
    },

    // 从本地存储加载
    loadFromStorage() {
        try {
            const stored = localStorage.getItem('forum_data');
            if (stored) {
                const data = JSON.parse(stored);
                if (data.topics) ForumData.topics = data.topics;
                if (data.replies) ForumData.replies = data.replies;
                if (data.stats) ForumData.stats = { ...ForumData.stats, ...data.stats };
            }
        } catch (error) {
            console.warn('加载论坛数据失败:', error);
        }
    },

    // 初始化
    init() {
        this.loadFromStorage();
    }
};

// 自动初始化
ForumUtils.init();

// 导出到全局
window.ForumData = ForumData;
window.ForumUtils = ForumUtils;
