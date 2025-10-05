// Recipe Data

// 示例菜谱数据
const RecipeData = {
    recipes: [
        {
            id: 'recipe_001',
            title: '宫保鸡丁',  
            description: '经典川菜，鸡丁鲜嫩，花生香脆，口感丰富，酸甜微辣。是川菜中最具代表性的菜品之一，以其独特的糖醋味和麻辣香而闻名。',
            image: '/cooking-platform/data/imgs/川菜/宫保鸡丁.png',
            cuisine: 'sichuan',
            difficulty: 'medium',
            cookTime: '20分钟',
            prepTime: '15分钟',
            servings: '2-3人',
            rating: 4.8,
            viewCount: 15420,  
            favoriteCount: 2847,
            ingredients: [
                { name: '鸡胸肉', amount: '300g', note: '选用新鲜鸡胸肉，切成1.5cm见方的丁' },
                { name: '花生米', amount: '80g', note: '生花生米，去皮红衣' },
                { name: '青椒', amount: '1个', note: '选择脆嫩的青椒，切成1cm见方的丁' },
                { name: '胡萝卜', amount: '1/2根', note: '切成与鸡丁大小相近的丁' },
                { name: '大葱白', amount: '2段', note: '取葱白部分，切成段' },
                { name: '干辣椒', amount: '8-10个', note: '四川二荆条或朝天椒，掰段去籽' },
                { name: '花椒', amount: '1茶勺', note: '四川汉源花椒最佳' },
                { name: '蒜', amount: '3瓣', note: '切片' },
                { name: '姜', amount: '1小块', note: '切片' },
                { name: '料酒', amount: '1汤勺', note: '黄酒或料酒' },
                { name: '生抽', amount: '2汤勺', note: '用于调味和腌制' },
                { name: '老抽', amount: '1茶勺', note: '调色用，可选' },
                { name: '白糖', amount: '1汤勺', note: '冰糖更佳，需压碎' },
                { name: '香醋', amount: '1汤勺', note: '镇江香醋最佳' },
                { name: '水淀粉', amount: '2汤勺', note: '干淀粉1勺+水1勺调成' },
                { name: '盐', amount: '1/2茶勺', note: '调味用' },
                { name: '植物油', amount: '3汤勺', note: '花生油或菜籽油' },
                { name: '香油', amount: '几滴', note: '最后提香用' }
            ],
            steps: [
                {
                    step: 1,
                    instruction: '鸡肉处理：将鸡胸肉洗净擦干，切成1.5cm见方的丁。用料酒1勺、生抽1勺、水淀粉1勺抓匀腌制15分钟，让鸡肉充分入味。',
                    image: '',
                    time: '15分钟',
                    tips: '鸡肉要逆着纹理切，这样口感更嫩。腌制时要充分抓匀，让每块鸡肉都裹上淀粉。'
                },
                {
                    step: 2,
                    instruction: '花生米处理：冷锅冷油下花生米，小火慢炸至金黄酥脆，约3-4分钟。盛起沥油晾凉备用。',
                    image: '',
                    time: '4分钟',
                    tips: '花生米一定要冷油下锅，避免外焦内生。炸好后要立即盛起，防止余温过度加热。'
                },
                {
                    step: 3,
                    instruction: '调制宫保汁：将生抽2勺、老抽1勺、白糖1勺、香醋1勺、盐1/2勺和剩余的水淀粉混合均匀调成宫保汁备用。',
                    image: '',
                    time: '2分钟',
                    tips: '宫保汁的甜酸比例很关键，可根据个人口味调整糖醋比例。调汁时要充分搅拌均匀。'
                },
                {
                    step: 4,
                    instruction: '爆香配料：热锅下油2勺，小火下干辣椒段和花椒粒炸香，出香味后立即捞出备用，避免炸糊发苦。',
                    image: '',
                    time: '1分钟',
                    tips: '火候要小，干辣椒变色即可，千万不要炸黑。花椒出香味后要及时捞出。'
                },
                {
                    step: 5,
                    instruction: '炒制鸡丁：锅内重新加油1勺，大火爆炒腌好的鸡丁，快速炒至表面变白定型，约2分钟后盛起备用。',
                    image: '',
                    time: '2分钟',
                    tips: '大火快炒是关键，鸡丁一变色就要盛起，避免炒老。不要翻动过频，让鸡丁充分受热。'
                },
                {
                    step: 6,
                    instruction: '炒制蔬菜：锅内留底油，下蒜片、姜片爆香30秒，再下青椒丁和胡萝卜丁大火炒1分钟至断生。',
                    image: '',
                    time: '2分钟',
                    tips: '蔬菜要保持脆嫩口感，不要炒太久。胡萝卜可以稍微炒久一点，青椒断生即可。'
                },
                {
                    step: 7,
                    instruction: '最后合成：倒入炒好的鸡丁，淋入调好的宫保汁，快速炒匀让每块鸡丁都裹上汁。最后撒入炸好的花生米、炸香的辣椒花椒和葱段，滴几滴香油炒匀即可出锅。',
                    image: '',
                    time: '2分钟',
                    tips: '动作要快，汁水收得刚好包裹住食材即可。花生米最后加入保持酥脆，香油提香不可少。'
                }
            ],
            tips: [
                '选料要点：鸡胸肉要选新鲜的，花生米选颗粒饱满的生花生米',
                '切丁技巧：所有丁状食材大小要均匀，约1.5cm见方，这样受热均匀口感好',
                '腌制秘诀：鸡丁腌制时要用手抓匀，让每块肉都裹上淀粉浆，这样炒出来嫩滑',
                '火候掌握：全程大火快炒，但炸花椒辣椒时要小火，避免炸糊',
                '调味平衡：宫保鸡丁的精髓在于甜酸麻辣的平衡，醋的香味很重要',
                '最后提醒：花生米要保持酥脆，所以要最后加入，切勿久炒'
            ],
            nutrition: {
                calories: '285千卡/100g',
                protein: '28.5g',
                fat: '15.2g',
                carbs: '8.6g',
                fiber: '2.8g',
                sodium: '580mg',
                calcium: '45mg',
                iron: '2.1mg',
                vitaminA: '315μg',
                vitaminC: '28mg',
                potassium: '420mg'
            },
            healthBenefits: [
                '高蛋白低脂肪，适合健身人群',
                '花生含有丰富的不饱和脂肪酸，有益心血管健康',
                '青椒富含维生素C，增强免疫力',
                '适量辣椒素能促进新陈代谢'
            ],
            relatedRecipes: [
                { id: 'recipe_002', title: '麻婆豆腐', reason: '同为川菜经典，口味相近' },
                { id: 'recipe_003', title: '回锅肉', reason: '川菜代表，下饭神器' },
                { id: 'recipe_007', title: '水煮鱼', reason: '川菜麻辣系列' }
            ],
            tags: ['川菜', '家常菜', '下饭菜', '宴客菜'],
            createdAt: '2024-01-15T10:00:00Z',
            updatedAt: '2024-01-15T10:00:00Z'
        },
        {
            id: 'recipe_002',
            title: '红烧肉',
            description: '经典家常菜，肥而不腻，瘦而不柴，软糯香甜，老少皆宜。',
            image: '/cooking-platform/data/imgs/湘菜/红烧肉.png',
            cuisine: 'hunan',
            difficulty: 'easy',
            cookTime: '45分钟',
            prepTime: '10分钟',
            servings: '3-4人',
            rating: 4.9,
            viewCount: 28340,
            favoriteCount: 5621,
            ingredients: [
                { name: '五花肉', amount: '800g', note: '切成3cm见方的块' },
                { name: '冰糖', amount: '30g', note: '或白糖' },
                { name: '生抽', amount: '3汤勺', note: '' },
                { name: '老抽', amount: '1汤勺', note: '调色' },
                { name: '料酒', amount: '2汤勺', note: '' },
                { name: '大葱', amount: '2段', note: '切段' },
                { name: '生姜', amount: '3片', note: '' },
                { name: '八角', amount: '2个', note: '' },
                { name: '桂皮', amount: '1小段', note: '' },
                { name: '盐', amount: '适量', note: '' },
                { name: '植物油', amount: '2汤勺', note: '' }
            ],
            steps: [
                {
                    step: 1,
                    instruction: '五花肉洗净切成3cm见方的块，冷水下锅焯水，撇去浮沫，捞出控水。',
                    image: '',
                    time: '10分钟'
                },
                {
                    step: 2,
                    instruction: '锅内放少量油，下入冰糖小火炒至焦糖色。',
                    image: '',
                    time: '3分钟'
                },
                {
                    step: 3,
                    instruction: '下入五花肉块，翻炒上色。',
                    image: '',
                    time: '3分钟'
                },
                {
                    step: 4,
                    instruction: '加入料酒、生抽、老抽、葱段、姜片、八角、桂皮。',
                    image: '',
                    time: '1分钟'
                },
                {
                    step: 5,
                    instruction: '加入热水没过肉块，大火烧开后转小火慢炖35分钟。',
                    image: '',
                    time: '35分钟'
                },
                {
                    step: 6,
                    instruction: '最后大火收汁，调味即可出锅。',
                    image: '',
                    time: '5分钟'
                }
            ],
            tips: [
                '五花肉要选择肥瘦相间，层次分明的。',
                '炒糖色时火候很重要，小火慢炒至枣红色。',
                '焯水能去除血水和腥味，让肉质更加干净。',
                '炖煮时间要够，这样肉质才会软烂。'
            ],
            nutrition: {
                calories: '280千卡/100g',
                protein: '18g',
                fat: '22g',
                carbs: '6g',
                fiber: '0g',
                sodium: '420mg'
            },
            tags: ['湘菜', '家常菜', '红烧菜', '年菜'],
            createdAt: '2024-01-10T14:30:00Z',
            updatedAt: '2024-01-10T14:30:00Z'
        },
        {
            id: 'recipe_003',
            title: '麻婆豆腐',
            description: '川菜经典，豆腐嫩滑，麻辣鲜香，是最受欢迎的素食菜品之一。以其"麻、辣、鲜、香、烫"的特点闻名于世，是川菜中的代表性素菜。',
            image: '/cooking-platform/data/imgs/川菜/麻婆豆腐.png',
            cuisine: 'sichuan',
            difficulty: 'easy',
            cookTime: '15分钟',
            prepTime: '10分钟',
            servings: '2-3人',
            rating: 4.7,
            viewCount: 19850,
            favoriteCount: 3247,
            ingredients: [
                { name: '嫩豆腐', amount: '400g', note: '选用内酯豆腐或嫩豆腐，切成2cm见方的块' },
                { name: '牛肉末', amount: '100g', note: '选用牛肉末，也可用猪肉末代替' },
                { name: '郫县豆瓣酱', amount: '2汤勺', note: '用刀剁碎，这是正宗麻婆豆腐的关键调料' },
                { name: '豆豉', amount: '1茶勺', note: '四川豆豉，剁碎' },
                { name: '花椒粉', amount: '1茶勺', note: '用四川汉源花椒现磨最佳' },
                { name: '花椒粒', amount: '1茶勺', note: '用于爆香' },
                { name: '大葱', amount: '2根', note: '切成葱花' },
                { name: '蒜苗', amount: '2根', note: '切成1cm长的段' },
                { name: '蒜', amount: '3瓣', note: '切末' },
                { name: '姜', amount: '1小块', note: '切末' },
                { name: '生抽', amount: '1汤勺', note: '调味用' },
                { name: '盐', amount: '1/2茶勺', note: '根据豆瓣酱的咸度调整' },
                { name: '白糖', amount: '1/2茶勺', note: '提鲜用' },
                { name: '料酒', amount: '1茶勺', note: '去腥增香' },
                { name: '水淀粉', amount: '2汤勺', note: '干淀粉1勺+冷水1勺调成' },
                { name: '高汤', amount: '200ml', note: '没有可用清水代替' },
                { name: '植物油', amount: '3汤勺', note: '菜籽油最佳' },
                { name: '香油', amount: '几滴', note: '最后提香用' }
            ],
            steps: [
                {
                    step: 1,
                    instruction: '豆腐切块，用淡盐水浸泡10分钟，去除豆腥味。',
                    image: '',
                    time: '10分钟'
                },
                {
                    step: 2,
                    instruction: '热锅下油，下牛肉末炒至变色，盛起备用。',
                    image: '',
                    time: '2分钟'
                },
                {
                    step: 3,
                    instruction: '锅内留底油，下豆瓣酱炒出红油。',
                    image: '',
                    time: '1分钟'
                },
                {
                    step: 4,
                    instruction: '加入半碗清水，下豆腐块，轻轻推动，避免弄碎。',
                    image: '',
                    time: '2分钟'
                },
                {
                    step: 5,
                    instruction: '加入生抽、盐、糖调味，倒入肉末，煮2分钟。',
                    image: '',
                    time: '2分钟'
                },
                {
                    step: 6,
                    instruction: '淋入水淀粉勾芡，撒花椒粉和蒜苗段即可。',
                    image: '',
                    time: '1分钟'
                }
            ],
            tips: [
                '豆腐要选择嫩豆腐，口感更佳。',
                '用盐水浸泡可以去除豆腥味，增加豆腐韧性。',
                '豆瓣酱要炒出红油，这是正宗川味的关键。',
                '花椒粉最后撒，保持麻香味。'
            ],
            nutrition: {
                calories: '150千卡/100g',
                protein: '12g',
                fat: '8g',
                carbs: '8g',
                fiber: '2g',
                sodium: '580mg'
            },
            tags: ['川菜', '素食', '下饭菜', '经典菜'],
            createdAt: '2024-01-12T16:20:00Z',
            updatedAt: '2024-01-12T16:20:00Z'
        },
        {
            id: 'recipe_004',
            title: '糖醋里脊',
            description: '酸甜可口的经典菜品，外酥内嫩，颜色红亮，深受大人孩子喜爱。',
            image: '/cooking-platform/data/imgs/粵菜/糖醋里脊.png',
            cuisine: 'cantonese',
            difficulty: 'medium',
            cookTime: '25分钟',
            prepTime: '20分钟',
            servings: '2-3人',
            rating: 4.6,
            viewCount: 12750,
            favoriteCount: 2134,
            ingredients: [
                { name: '猪里脊肉', amount: '300g', note: '切成长条' },
                { name: '鸡蛋', amount: '1个', note: '取蛋清' },
                { name: '淀粉', amount: '3汤勺', note: '调糊用' },
                { name: '面粉', amount: '2汤勺', note: '' },
                { name: '白醋', amount: '3汤勺', note: '' },
                { name: '白糖', amount: '4汤勺', note: '' },
                { name: '番茄酱', amount: '2汤勺', note: '' },
                { name: '生抽', amount: '1茶勺', note: '' },
                { name: '盐', amount: '1茶勺', note: '' },
                { name: '料酒', amount: '1汤勺', note: '' },
                { name: '植物油', amount: '500ml', note: '炸制用' }
            ],
            steps: [
                {
                    step: 1,
                    instruction: '里脊肉切成手指粗的长条，用盐、料酒腌制15分钟。',
                    image: '',
                    time: '15分钟'
                },
                {
                    step: 2,
                    instruction: '调制面糊：淀粉、面粉、蛋清、少量水调成无颗粒的糊状。',
                    image: '',
                    time: '3分钟'
                },
                {
                    step: 3,
                    instruction: '调制糖醋汁：白醋、白糖、番茄酱、生抽、少量淀粉水混合。',
                    image: '',
                    time: '2分钟'
                },
                {
                    step: 4,
                    instruction: '肉条裹上面糊，油温六成热时下锅炸至定型，捞出。',
                    image: '',
                    time: '4分钟'
                },
                {
                    step: 5,
                    instruction: '油温升至八成热，复炸一次至表面金黄酥脆，捞出沥油。',
                    image: '',
                    time: '2分钟'
                },
                {
                    step: 6,
                    instruction: '另起锅，倒入调好的糖醋汁，小火煮至浓稠，倒入炸好的肉条快速翻匀。',
                    image: '',
                    time: '3分钟'
                }
            ],
            tips: [
                '里脊肉要选择新鲜的，切条要均匀。',
                '面糊调制要无颗粒，这样炸出来才光滑。',
                '二次炸制能让外皮更酥脆。',
                '糖醋汁要小火慢煮，避免糊锅。'
            ],
            nutrition: {
                calories: '260千卡/100g',
                protein: '20g',
                fat: '12g',
                carbs: '18g',
                fiber: '1g',
                sodium: '380mg'
            },
            tags: ['粤菜', '酸甜菜', '炸制菜', '儿童喜爱'],
            createdAt: '2024-01-08T11:15:00Z',
            updatedAt: '2024-01-08T11:15:00Z'
        },
        {
            id: 'recipe_005',
            title: '清蒸鲈鱼',
            description: '清淡鲜美，营养丰富，保持鱼肉的鲜嫩和原汁原味。',
            image: '/cooking-platform/data/imgs/粵菜/清蒸鲈鱼.png',
            cuisine: 'cantonese',
            difficulty: 'easy',
            cookTime: '15分钟',
            prepTime: '15分钟',
            servings: '2-3人',
            rating: 4.8,
            viewCount: 16230,
            favoriteCount: 2876,
            ingredients: [
                { name: '鲈鱼', amount: '1条(约600g)', note: '新鲜活鱼' },
                { name: '大葱', amount: '2根', note: '切丝' },
                { name: '生姜', amount: '1块', note: '切丝' },
                { name: '香菜', amount: '2根', note: '切段' },
                { name: '蒸鱼豉油', amount: '3汤勺', note: '' },
                { name: '料酒', amount: '2汤勺', note: '' },
                { name: '盐', amount: '1茶勺', note: '' },
                { name: '植物油', amount: '2汤勺', note: '热油浇制' }
            ],
            steps: [
                {
                    step: 1,
                    instruction: '鲈鱼去鳞去内脏洗净，在鱼身两面各斜切几刀，用盐和料酒腌制10分钟。',
                    image: '',
                    time: '10分钟'
                },
                {
                    step: 2,
                    instruction: '鱼腹内外塞入葱丝和姜丝，盘子底部也铺上一层。',
                    image: '',
                    time: '2分钟'
                },
                {
                    step: 3,
                    instruction: '蒸锅水开后放入鱼，大火蒸8-10分钟。',
                    image: '',
                    time: '10分钟'
                },
                {
                    step: 4,
                    instruction: '蒸好后取出，倒掉盘中的汁水，撒上新鲜葱丝。',
                    image: '',
                    time: '1分钟'
                },
                {
                    step: 5,
                    instruction: '淋上蒸鱼豉油，热油浇在葱丝上即可。',
                    image: '',
                    time: '1分钟'
                }
            ],
            tips: [
                '鱼要选择新鲜的，眼睛清亮，鳃红肉紧。',
                '腌制时间不宜过长，避免肉质变老。',
                '蒸制时间根据鱼的大小调整，一般8-12分钟。',
                '热油浇制能激发葱香，提升口感。'
            ],
            nutrition: {
                calories: '110千卡/100g',
                protein: '22g',
                fat: '2g',
                carbs: '0g',
                fiber: '0g',
                sodium: '320mg'
            },
            tags: ['粤菜', '清蒸菜', '健康菜', '鱼类'],
            createdAt: '2024-01-05T09:45:00Z',
            updatedAt: '2024-01-05T09:45:00Z'
        },
        {
            id: 'recipe_006',
            title: '回锅肉',
            description: '川菜代表菜之一，肥而不腻，香辣下饭，家常必备。素有"回锅肉不回锅，不算到四川"的美誉，是川菜中最具家常特色的经典菜品，以其独特的"灯盏窝"造型和浓郁的豆瓣香味而闻名。',
            image: '/cooking-platform/data/imgs/川菜/回锅肉.png',
            cuisine: 'sichuan',
            difficulty: 'medium',
            cookTime: '25分钟',
            prepTime: '15分钟',
            servings: '2-3人',
            rating: 4.7,
            viewCount: 21560,
            favoriteCount: 4231,
            ingredients: [
                { name: '带皮五花肉', amount: '400g', note: '选择肥瘦相间、皮厚肉嫩的新鲜五花肉' },
                { name: '青椒', amount: '2个', note: '选择厚实的青椒，切成菱形块' },
                { name: '蒜苗', amount: '3根', note: '选择嫩绿的蒜苗，切成寸段' },
                { name: '郫县豆瓣酱', amount: '2汤勺', note: '正宗郫县豆瓣酱，用刀剁碎' },
                { name: '甜面酱', amount: '1汤勺', note: '增加回甜味，平衡辣味' },
                { name: '豆豉', amount: '1茶勺', note: '四川豆豉，剁碎增香' },
                { name: '生抽', amount: '1汤勺', note: '调味上色' },
                { name: '老抽', amount: '1茶勺', note: '调色用，可选' },
                { name: '白糖', amount: '1茶勺', note: '提鲜调味' },
                { name: '料酒', amount: '2汤勺', note: '煮肉和调味用' },
                { name: '大蒜', amount: '4瓣', note: '切厚片' },
                { name: '生姜', amount: '3片', note: '煮肉用，切厚片' },
                { name: '大葱白', amount: '2段', note: '煮肉用' },
                { name: '花椒', amount: '10粒', note: '煮肉去腥用' },
                { name: '植物油', amount: '3汤勺', note: '菜籽油最佳' },
                { name: '香油', amount: '几滴', note: '最后提香用' }
            ],
            steps: [
                {
                    step: 1,
                    instruction: '五花肉预处理：将五花肉洗净，冷水下锅，加入料酒1勺、姜片、葱段、花椒，大火烧开后转中火煮15分钟至八成熟（用筷子能轻松插入但有阻力）。',
                    image: '',
                    time: '15分钟',
                    tips: '煮肉时要冷水下锅，这样能去除腥味。煮制时间不宜过长，八成熟即可，过熟会影响后续炒制效果。'
                },
                {
                    step: 2,
                    instruction: '肉片切制：将煮好的五花肉捞出晾凉（微温即可），切成厚约3mm的片，要求肥瘦相连，大小均匀。青椒去籽切成菱形块，蒜苗切成寸段。',
                    image: '',
                    time: '8分钟',
                    tips: '肉片不能切得太薄，太薄容易破碎；也不能太厚，太厚不易入味。微温时切片最好操作。'
                },
                {
                    step: 3,
                    instruction: '煸炒肉片：热锅下少量油，下肉片用中火慢慢煸炒，炒至肉片微微卷曲呈"灯盏窝"状，表面微焦，逼出部分油脂。',
                    image: '',
                    time: '4分钟',
                    tips: '这一步很关键，要把肥肉的油脂煸出来，肉片卷曲成灯盏窝状才是正宗回锅肉的特征。'
                },
                {
                    step: 4,
                    instruction: '制作红油：将肉片推到锅一侧，在空出的地方下豆瓣酱，小火慢炒出红油，然后加入豆豉和甜面酱继续炒香。',
                    image: '',
                    time: '3分钟',
                    tips: '豆瓣酱要小火炒制，避免炒糊。炒出红油是回锅肉色香味的关键。甜面酱能平衡豆瓣酱的咸辣。'
                },
                {
                    step: 5,
                    instruction: '调味合炒：下蒜片爆香，将肉片与酱料炒匀，加入生抽、老抽、糖调味上色，用大火快炒让每片肉都均匀裹上酱汁。',
                    image: '',
                    time: '2分钟',
                    tips: '调料要快速炒匀，大火保持锅气。糖的用量要适中，既要提鲜又不能过甜。'
                },
                {
                    step: 6,
                    instruction: '下配菜收尾：下青椒块大火炒至断生变色但仍保持脆嫩，最后下蒜苗段炒匀，滴几滴香油，快速炒匀即可出锅。',
                    image: '',
                    time: '3分钟',
                    tips: '青椒要保持脆嫩，不能炒老。蒜苗最后下，保持其特有的香味。整个过程要大火快炒。'
                }
            ],
            tips: [
                '选肉要点：五花肉要选择肥瘦相间、皮不太厚的，这样口感层次丰富',
                '煮肉技巧：煮制时间掌握在八成熟，用筷子能插入但有阻力为准',
                '切片标准：厚度3mm左右，太薄易碎，太厚不入味，要肥瘦相连',
                '煸炒关键：肉片要煸出油脂，呈灯盏窝状，这是回锅肉的经典特征',
                '酱料搭配：豆瓣酱提供咸辣，甜面酱提供回甜，两者缺一不可',
                '火候掌握：全程大火快炒，保持川菜特有的锅气和爽脆口感'
            ],
            nutrition: {
                calories: '315千卡/100g',
                protein: '16.8g',
                fat: '24.2g',
                carbs: '6.5g',
                fiber: '2.1g',
                sodium: '680mg',
                calcium: '35mg',
                iron: '2.5mg',
                vitaminA: '180μg',
                vitaminC: '45mg',
                potassium: '320mg'
            },
            healthBenefits: [
                '五花肉提供优质蛋白质和必需脂肪酸',
                '青椒富含维生素C，增强免疫力',
                '蒜苗含有丰富的膳食纤维，促进消化',
                '适量的辣椒素能促进血液循环和新陈代谢'
            ],
            relatedRecipes: [
                { id: 'recipe_001', title: '宫保鸡丁', reason: '同为川菜经典，下饭必备' },
                { id: 'recipe_003', title: '麻婆豆腐', reason: '川菜代表，豆瓣酱调味' },
                { id: 'recipe_008', title: '水煮鱼', reason: '川菜麻辣系列，口味相近' }
            ],
            tags: ['川菜', '家常菜', '下饭菜', '经典菜'],
            createdAt: '2024-01-20T15:30:00Z',
            updatedAt: '2024-01-20T15:30:00Z'
        },
        {
            id: 'recipe_007',
            title: '西红柿鸡蛋',
            description: '最经典的家常菜，酸甜适口，营养丰富，老少皆宜。',
            image: '/cooking-platform/data/imgs/湘菜/西红柿鸡蛋.png',
            cuisine: 'hunan',
            difficulty: 'easy',
            cookTime: '10分钟',
            prepTime: '5分钟',
            servings: '2人',
            rating: 4.9,
            viewCount: 35420,
            favoriteCount: 8967,
            ingredients: [
                { name: '西红柿', amount: '3个', note: '选择成熟的' },
                { name: '鸡蛋', amount: '4个', note: '常温鸡蛋' },
                { name: '大葱', amount: '1根', note: '切花' },
                { name: '白糖', amount: '1茶勺', note: '提鲜用' },
                { name: '盐', amount: '适量', note: '' },
                { name: '生抽', amount: '1茶勺', note: '可选' },
                { name: '植物油', amount: '3汤勺', note: '' }
            ],
            steps: [
                { step: 1, instruction: '西红柿用开水烫一下，去皮切成块。鸡蛋打散加少量盐。', time: '3分钟' },
                { step: 2, instruction: '热锅下油，油热后倒入蛋液，快速炒散盛起。', time: '2分钟' },
                { step: 3, instruction: '锅内留底油，下西红柿块炒出汁水。', time: '3分钟' },
                { step: 4, instruction: '加入白糖和盐调味，再倒入炒蛋翻匀。', time: '2分钟' },
                { step: 5, instruction: '最后撒上葱花即可出锅。', time: '1分钟' }
            ],
            tips: [
                '西红柿要充分炒出汁水，这样更香。',
                '鸡蛋要先炒熟盛起，避免炒老。',
                '加一点白糖能提升西红柿的鲜味。',
                '葱花最后放，保持香味。'
            ],
            nutrition: { calories: '120千卡/100g', protein: '8g', fat: '6g', carbs: '10g', fiber: '2g', sodium: '280mg' },
            tags: ['家常菜', '快手菜', '营养菜', '经典菜'],
            createdAt: '2024-01-18T12:00:00Z',
            updatedAt: '2024-01-18T12:00:00Z'
        },
        {
            id: 'recipe_008',
            title: '蒜蓉蒸扇贝',
            description: '粤菜海鲜代表，鲜美滑嫩，蒜香浓郁，制作简单。',
            image: '/cooking-platform/data/imgs/粵菜/蒜蓉蒸扇贝.png',
            cuisine: 'cantonese',
            difficulty: 'easy',
            cookTime: '12分钟',
            prepTime: '10分钟',
            servings: '2-3人',
            rating: 4.8,
            viewCount: 18750,
            favoriteCount: 3456,
            ingredients: [
                { name: '扇贝', amount: '8个', note: '新鲜活扇贝' },
                { name: '大蒜', amount: '1头', note: '剁成蒜蓉' },
                { name: '小葱', amount: '2根', note: '切花' },
                { name: '生抽', amount: '2汤勺', note: '' },
                { name: '蒸鱼豉油', amount: '1汤勺', note: '' },
                { name: '料酒', amount: '1汤勺', note: '' },
                { name: '植物油', amount: '3汤勺', note: '' },
                { name: '盐', amount: '少许', note: '' }
            ],
            steps: [
                { step: 1, instruction: '扇贝清洗干净，去掉黑色内脏，保留扇贝肉和扇贝柱。', time: '5分钟' },
                { step: 2, instruction: '用料酒和盐腌制扇贝肉5分钟去腥。', time: '5分钟' },
                { step: 3, instruction: '热锅下油，小火炒蒜蓉至微黄，加生抽调味。', time: '3分钟' },
                { step: 4, instruction: '将扇贝肉放回壳中，铺上蒜蓉。', time: '2分钟' },
                { step: 5, instruction: '蒸锅水开后放入扇贝，大火蒸5分钟。', time: '5分钟' },
                { step: 6, instruction: '出锅后淋蒸鱼豉油，撒葱花，浇热油即可。', time: '2分钟' }
            ],
            tips: [
                '扇贝要选择新鲜的，壳紧闭或轻敲会合上。',
                '蒜蓉要小火炒制，避免炒糊。',
                '蒸制时间不宜过长，保持嫩滑。',
                '最后的热油能激发葱香。'
            ],
            nutrition: { calories: '95千卡/100g', protein: '18g', fat: '2g', carbs: '4g', fiber: '0g', sodium: '320mg' },
            tags: ['粤菜', '海鲜', '蒸菜', '健康菜'],
            createdAt: '2024-01-22T14:20:00Z',
            updatedAt: '2024-01-22T14:20:00Z'
        },
        {
            id: 'recipe_009',
            title: '可乐鸡翅',
            description: '孩子们的最爱，甜香可口，制作简单，聚餐必备。',
            image: '/cooking-platform/data/imgs/湘菜/可乐鸡翅.png',
            cuisine: 'hunan',
            difficulty: 'easy',
            cookTime: '25分钟',
            prepTime: '10分钟',
            servings: '2-3人',
            rating: 4.6,
            viewCount: 25630,
            favoriteCount: 5234,
            ingredients: [
                { name: '鸡翅中', amount: '12个', note: '新鲜鸡翅' },
                { name: '可乐', amount: '350ml', note: '一罐可乐' },
                { name: '生抽', amount: '2汤勺', note: '' },
                { name: '老抽', amount: '1汤勺', note: '调色用' },
                { name: '料酒', amount: '2汤勺', note: '' },
                { name: '生姜', amount: '3片', note: '' },
                { name: '大葱', amount: '2段', note: '切段' },
                { name: '八角', amount: '2个', note: '' },
                { name: '盐', amount: '少许', note: '' },
                { name: '植物油', amount: '2汤勺', note: '' }
            ],
            steps: [
                { step: 1, instruction: '鸡翅洗净，用刀在表面划几刀，用料酒腌制10分钟。', time: '10分钟' },
                { step: 2, instruction: '热锅下油，将鸡翅煎至两面金黄。', time: '5分钟' },
                { step: 3, instruction: '加入葱段、姜片、八角爆香。', time: '1分钟' },
                { step: 4, instruction: '倒入可乐没过鸡翅，加生抽、老抽调色。', time: '2分钟' },
                { step: 5, instruction: '大火烧开后转中小火焖煮15分钟。', time: '15分钟' },
                { step: 6, instruction: '最后大火收汁，调味即可。', time: '3分钟' }
            ],
            tips: [
                '鸡翅要先煎制定型，这样更香。',
                '可乐的甜味会在收汁时浓缩，不需要额外加糖。',
                '收汁时要经常翻动，避免糊底。',
                '最后汁水浓稠包裹鸡翅即可。'
            ],
            nutrition: { calories: '180千卡/100g', protein: '16g', fat: '8g', carbs: '12g', fiber: '0g', sodium: '420mg' },
            tags: ['家常菜', '儿童喜爱', '聚餐菜', '甜味菜'],
            createdAt: '2024-01-16T16:45:00Z',
            updatedAt: '2024-01-16T16:45:00Z'
        },
        {
            id: 'recipe_010',
            title: '蚂蚁上树',
            description: '四川传统名菜，粉丝爽滑，肉末香浓，下饭神器。',
            image: '/cooking-platform/data/imgs/川菜/蚂蚁上树.png',
            cuisine: 'sichuan',
            difficulty: 'medium',
            cookTime: '18分钟',
            prepTime: '15分钟',
            servings: '2-3人',
            rating: 4.5,
            viewCount: 14230,
            favoriteCount: 2876,
            ingredients: [
                { name: '粉丝', amount: '100g', note: '红薯粉丝，提前泡软' },
                { name: '猪肉末', amount: '150g', note: '三分肥七分瘦' },
                { name: '豆瓣酱', amount: '1.5汤勺', note: '郫县豆瓣酱' },
                { name: '生抽', amount: '2汤勺', note: '' },
                { name: '料酒', amount: '1汤勺', note: '' },
                { name: '高汤', amount: '200ml', note: '或清水' },
                { name: '韭黄', amount: '2根', note: '切段，可选' },
                { name: '蒜', amount: '3瓣', note: '切末' },
                { name: '生姜', amount: '1小块', note: '切末' },
                { name: '植物油', amount: '3汤勺', note: '' }
            ],
            steps: [
                { step: 1, instruction: '粉丝用温水泡软，剪成15cm左右的段。', time: '10分钟' },
                { step: 2, instruction: '热锅下油，下肉末炒散炒香。', time: '3分钟' },
                { step: 3, instruction: '下豆瓣酱炒出红油，再下蒜末姜末爆香。', time: '2分钟' },
                { step: 4, instruction: '加入料酒和生抽翻炒均匀。', time: '1分钟' },
                { step: 5, instruction: '下粉丝翻炒，加高汤焖煮5分钟。', time: '5分钟' },
                { step: 6, instruction: '汤汁快收干时，撒韭黄段炒匀即可。', time: '2分钟' }
            ],
            tips: [
                '粉丝不要泡太软，七成软即可。',
                '肉末要充分炒香，去除腥味。',
                '豆瓣酱要炒出红油才正宗。',
                '最后汤汁不要收得太干，略带汁水更好吃。'
            ],
            nutrition: { calories: '160千卡/100g', protein: '12g', fat: '8g', carbs: '15g', fiber: '1g', sodium: '580mg' },
            tags: ['川菜', '下饭菜', '传统菜', '经典菜'],
            createdAt: '2024-01-14T13:30:00Z',
            updatedAt: '2024-01-14T13:30:00Z'
        },
        {
            id: 'recipe_011',
            title: '白切鸡',
            description: '粤菜经典，清淡鲜美，皮爽肉滑，蘸料丰富。',
            image: '/cooking-platform/data/imgs/粵菜/白切鸡.png',
            cuisine: 'cantonese',
            difficulty: 'medium',
            cookTime: '30分钟',
            prepTime: '10分钟',
            servings: '4-5人',
            rating: 4.7,
            viewCount: 19840,
            favoriteCount: 3672,
            ingredients: [
                { name: '土鸡', amount: '1只(约1.5kg)', note: '新鲜土鸡' },
                { name: '生姜', amount: '50g', note: '切片' },
                { name: '大葱', amount: '3根', note: '切段' },
                { name: '料酒', amount: '3汤勺', note: '' },
                { name: '盐', amount: '2茶勺', note: '' }
            ],
            steps: [
                { step: 1, instruction: '整鸡清洗干净，用盐里外抹匀腌制30分钟。', time: '30分钟' },
                { step: 2, instruction: '锅内放足够的水，加姜片、葱段、料酒烧开。', time: '5分钟' },
                { step: 3, instruction: '将整鸡放入，水要没过鸡身，再次烧开。', time: '5分钟' },
                { step: 4, instruction: '转小火煮25分钟，关火焖10分钟。', time: '35分钟' },
                { step: 5, instruction: '捞出鸡放入冰水中浸泡15分钟定型。', time: '15分钟' },
                { step: 6, instruction: '取出晾干，刷上香油，切块装盘。', time: '10分钟' }
            ],
            tips: [
                '选择土鸡口感更好，肉质更紧实。',
                '煮制时要保持小火，避免皮破。',
                '冰水浸泡能让鸡皮更爽脆。',
                '蘸料可配姜葱蓉或生抽。'
            ],
            nutrition: { calories: '140千卡/100g', protein: '20g', fat: '6g', carbs: '0g', fiber: '0g', sodium: '280mg' },
            tags: ['粤菜', '白切菜', '健康菜', '宴客菜'],
            createdAt: '2024-01-25T11:15:00Z',
            updatedAt: '2024-01-25T11:15:00Z'
        },
        {
            id: 'recipe_012',
            title: '酸辣土豆丝',
            description: '经典下饭菜，酸辣爽脆，制作简单，百吃不厌。',
            image: '/cooking-platform/data/imgs/川菜/酸辣土豆丝.png',
            cuisine: 'sichuan',
            difficulty: 'easy',
            cookTime: '8分钟',
            prepTime: '12分钟',
            servings: '2人',
            rating: 4.8,
            viewCount: 32150,
            favoriteCount: 7234,
            ingredients: [
                { name: '土豆', amount: '2个', note: '选择脆嫩的' },
                { name: '青椒', amount: '1个', note: '切丝' },
                { name: '红椒', amount: '1个', note: '切丝，配色' },
                { name: '干辣椒', amount: '5个', note: '掰段' },
                { name: '花椒', amount: '10粒', note: '' },
                { name: '白醋', amount: '2汤勺', note: '' },
                { name: '生抽', amount: '1汤勺', note: '' },
                { name: '盐', amount: '1茶勺', note: '' },
                { name: '糖', amount: '1/2茶勺', note: '' },
                { name: '蒜', amount: '3瓣', note: '切片' },
                { name: '植物油', amount: '3汤勺', note: '' }
            ],
            steps: [
                { step: 1, instruction: '土豆去皮切成细丝，用清水浸泡洗去淀粉。', time: '8分钟' },
                { step: 2, instruction: '青红椒切丝，蒜切片备用。', time: '3分钟' },
                { step: 3, instruction: '热锅下油，放花椒和干辣椒炸香。', time: '1分钟' },
                { step: 4, instruction: '下蒜片爆香，再下土豆丝大火炒2分钟。', time: '2分钟' },
                { step: 5, instruction: '下青红椒丝炒匀，调入盐、糖、生抽。', time: '1分钟' },
                { step: 6, instruction: '最后淋白醋炒匀即可出锅。', time: '1分钟' }
            ],
            tips: [
                '土豆丝要切得均匀，用水洗去淀粉。',
                '炒制要用大火，动作要快。',
                '醋要最后放，保持酸味。',
                '不要炒太久，保持脆嫩口感。'
            ],
            nutrition: { calories: '85千卡/100g', protein: '2g', fat: '3g', carbs: '16g', fiber: '3g', sodium: '320mg' },
            tags: ['川菜', '素食', '下饭菜', '快手菜'],
            createdAt: '2024-01-19T10:30:00Z',
            updatedAt: '2024-01-19T10:30:00Z'
        },
        // 鲁菜菜谱
        {
            id: 'recipe_016',
            title: '糖醋里脊',
            description: '经典鲁菜，外酥内嫩，酸甜可口，色泽金黄。',
            image: '/cooking-platform/data/imgs/鲁菜/糖醇里脊.png',
            cuisine: 'shandong',
            difficulty: 'medium',
            cookTime: '25分钟',
            prepTime: '20分钟',
            servings: '2-3人',
            rating: 4.7,
            viewCount: 12800,
            favoriteCount: 2156,
            ingredients: [
                { name: '里脊肉', amount: '300g', note: '切条状' },
                { name: '鸡蛋', amount: '1个', note: '' },
                { name: '面粉', amount: '50g', note: '' },
                { name: '淀粉', amount: '30g', note: '' },
                { name: '白糖', amount: '3汤勺', note: '' },
                { name: '白醋', amount: '2汤勺', note: '' },
                { name: '番茄酱', amount: '2汤勺', note: '' },
                { name: '生抽', amount: '1汤勺', note: '' },
                { name: '盐', amount: '适量', note: '' }
            ],
            steps: [
                { step: 1, instruction: '里脊肉切条，用蛋液、面粉、淀粉调成糊包裹。', time: '10分钟' },
                { step: 2, instruction: '油温六成热时下锅炸至金黄，捞起备用。', time: '5分钟' },
                { step: 3, instruction: '调糖醋汁，锅内放少量油，下糖醋汁炒制。', time: '3分钟' },
                { step: 4, instruction: '汁浓稠时下炸好的里脊快速翻炒均匀即可。', time: '2分钟' }
            ],
            tips: ['肉条要切均匀', '油温控制很关键', '糖醋汁要现调现用'],
            nutrition: { calories: '180千卡/100g', protein: '20g', fat: '8g', carbs: '12g', fiber: '0.5g', sodium: '280mg' },
            tags: ['鲁菜', '酸甜', '下饭菜', '宴客菜'],
            createdAt: '2024-01-20T09:00:00Z',
            updatedAt: '2024-01-20T09:00:00Z'
        },
        {
            id: 'recipe_017',
            title: '德州扒鸡',
            description: '山东名菜，肉质鲜嫩，香味浓郁，营养丰富。',
            image: '/cooking-platform/data/imgs/鲁菜/德州扑鸡.png',
            cuisine: 'shandong',
            difficulty: 'hard',
            cookTime: '2小时',
            prepTime: '30分钟',
            servings: '4-6人',
            rating: 4.9,
            viewCount: 8900,
            favoriteCount: 1890,
            ingredients: [
                { name: '三黄鸡', amount: '1只', note: '约1.5kg' },
                { name: '老抽', amount: '3汤勺', note: '上色用' },
                { name: '生抽', amount: '2汤勺', note: '' },
                { name: '料酒', amount: '2汤勺', note: '' },
                { name: '冰糖', amount: '30g', note: '' },
                { name: '八角', amount: '3个', note: '' },
                { name: '桂皮', amount: '1段', note: '' },
                { name: '花椒', amount: '1茶勺', note: '' }
            ],
            steps: [
                { step: 1, instruction: '整鸡清洗干净，用调料腌制30分钟。', time: '30分钟' },
                { step: 2, instruction: '锅内放油，将鸡炸至金黄色。', time: '15分钟' },
                { step: 3, instruction: '加水和调料，小火焖煮1.5小时。', time: '90分钟' },
                { step: 4, instruction: '大火收汁，出锅晾凉即可。', time: '15分钟' }
            ],
            tips: ['要选择新鲜的三黄鸡', '焖煮时间要够', '收汁要适度'],
            nutrition: { calories: '165千卡/100g', protein: '18g', fat: '9g', carbs: '2g', fiber: '0g', sodium: '420mg' },
            tags: ['鲁菜', '滋补', '宴客菜', '传统菜'],
            createdAt: '2024-01-20T09:30:00Z',
            updatedAt: '2024-01-20T09:30:00Z'
        },
        // 更多川菜
        {
            id: 'recipe_018',
            title: '口水鸡',
            description: '川菜凉菜，麻辣鲜香，鸡肉嫩滑，口水直流。',
            image: '/cooking-platform/data/imgs/川菜/口水鸡.png',
            cuisine: 'sichuan',
            difficulty: 'easy',
            cookTime: '20分钟',
            prepTime: '15分钟',
            servings: '2-3人',
            rating: 4.6,
            viewCount: 11200,
            favoriteCount: 1856,
            ingredients: [
                { name: '三黄鸡', amount: '半只', note: '约600g' },
                { name: '生姜', amount: '3片', note: '' },
                { name: '大葱', amount: '2段', note: '' },
                { name: '料酒', amount: '1汤勺', note: '' },
                { name: '生抽', amount: '3汤勺', note: '' },
                { name: '香醋', amount: '2汤勺', note: '' },
                { name: '白糖', amount: '1汤勺', note: '' },
                { name: '红油辣椒', amount: '2汤勺', note: '或辣椒油' },
                { name: '花椒粉', amount: '1茶勺', note: '' },
                { name: '芝麻酱', amount: '1汤勺', note: '可选' },
                { name: '蒜泥', amount: '2瓣', note: '捣成泥' },
                { name: '香葱', amount: '2根', note: '切葱花' },
                { name: '熟芝麻', amount: '1茶勺', note: '装饰用' }
            ],
            steps: [
                { step: 1, instruction: '鸡肉冷水下锅，加入生姜片、葱段、料酒煮制15分钟至熟透。', time: '15分钟' },
                { step: 2, instruction: '煮熟的鸡肉捞出放入冰水中冰镇5分钟，让肉质更紧实。', time: '5分钟' },
                { step: 3, instruction: '将鸡肉撕成丝或切成条状，装盘备用。', time: '3分钟' },
                { step: 4, instruction: '调制口水鸡汁：生抽、香醋、白糖、红油辣椒、花椒粉、芝麻酱、蒜泥混合搅拌均匀。', time: '5分钟' },
                { step: 5, instruction: '将调好的汁料淋在鸡丝上，撒上葱花和熟芝麻即可。', time: '2分钟' }
            ],
            tips: [
                '鸡肉煮制时不要时间过长，保持嫩滑口感。',
                '冰镇步骤很重要，让鸡肉更有嚼劲。',
                '口水鸡汁可根据个人喜好调整酸辣度。',
                '配菜可加黄瓜丝、豆芽等增加爽脆口感。'
            ],
            nutrition: { calories: '165千卡/100g', protein: '22g', fat: '8g', carbs: '3g', fiber: '0.5g', sodium: '580mg' },
            tags: ['川菜', '凉菜', '麻辣', '开胃'],
            createdAt: '2024-01-25T10:00:00Z',
            updatedAt: '2024-01-25T10:00:00Z'
        },
        {
            id: 'recipe_019', 
            title: '水煮鱼',
            description: '经典川菜，鱼肉嫩滑，汤汁麻辣鲜香。起源于重庆渝北地区，以"麻上头、辣过瘾、鲜美无比"的特色享誉全国，是川菜中最具代表性的水煮系列菜品之一。',
            image: '/cooking-platform/data/imgs/川菜/水煮鱼.png',
            cuisine: 'sichuan',
            difficulty: 'medium',
            cookTime: '30分钟',
            prepTime: '20分钟',
            servings: '3-4人',
            rating: 4.8,
            viewCount: 18900,
            favoriteCount: 3245,
            ingredients: [
                { name: '新鲜草鱼', amount: '1条', note: '约1000g，选择活鱼或冰鲜鱼，肉质鲜嫩' },
                { name: '大白菜', amount: '300g', note: '洗净切段，也可用娃娃菜' },
                { name: '绿豆芽', amount: '200g', note: '掐去头尾，洗净沥干' },
                { name: '郫县豆瓣酱', amount: '3汤勺', note: '用刀剁碎，这是灵魂调料' },
                { name: '干辣椒', amount: '30个', note: '四川二荆条，掰段去籽' },
                { name: '花椒粒', amount: '2汤勺', note: '四川汉源花椒，分两次使用' },
                { name: '大蒜', amount: '1头', note: '拍碎切片' },
                { name: '生姜', amount: '1大块', note: '切厚片' },
                { name: '大葱', amount: '3根', note: '葱白切段，葱绿切花' },
                { name: '鸡蛋清', amount: '1个', note: '腌制鱼片用' },
                { name: '料酒', amount: '3汤勺', note: '黄酒或料酒，去腥用' },
                { name: '盐', amount: '1茶勺', note: '腌鱼和调味用' },
                { name: '白胡椒粉', amount: '1/2茶勺', note: '去腥提鲜' },
                { name: '水淀粉', amount: '3汤勺', note: '干淀粉2勺+水1勺调成' },
                { name: '生抽', amount: '1汤勺', note: '调味上色' },
                { name: '白糖', amount: '1茶勺', note: '提鲜用' },
                { name: '高汤', amount: '800ml', note: '没有可用清水代替' },
                { name: '菜籽油', amount: '250ml', note: '菜籽油香味最佳，分批使用' }
            ],
            steps: [
                {
                    step: 1,
                    instruction: '鱼类处理：将草鱼宰杀洗净，去鳞去内脏。从鱼背部下刀，将鱼肉片成厚约0.5cm的鱼片。鱼头、鱼骨留作汤底。用料酒2勺、盐1/2勺、蛋清、白胡椒粉、水淀粉2勺抓匀腌制15分钟。',
                    image: '',
                    time: '20分钟',
                    tips: '片鱼时刀要倾斜45度角，这样鱼片不易碎。腌制时要顺一个方向抓匀，让鱼片表面形成保护膜。'
                },
                {
                    step: 2,
                    instruction: '配菜准备：将白菜切成段，豆芽菜掐去两头洗净。锅内烧开水，分别将白菜和豆芽焯水至断生，捞出沥水，平铺在深盆或汤碗底部。',
                    image: '',
                    time: '5分钟',
                    tips: '焯水时间不宜过长，保持蔬菜的脆嫩口感。焯好的蔬菜要沥干水分，避免稀释汤汁。'
                },
                {
                    step: 3,
                    instruction: '制作汤底：热锅下油2勺，下鱼头鱼骨煎至两面微黄。加入姜片、葱段爆香，倒入高汤或开水，大火煮15分钟成浓白色鱼汤，过筛留汤备用。',
                    image: '',
                    time: '18分钟',
                    tips: '鱼头鱼骨要先煎制，这样煮出的汤汁更香浓。大火煮制能让汤色变白，营养更丰富。'
                },
                {
                    step: 4,
                    instruction: '炒制底料：另起锅下油3勺，小火下豆瓣酱炒制出红油，下蒜片、姜片爆香，再下1勺花椒粒炒香。倒入鱼汤烧开，加生抽、糖调味。',
                    image: '',
                    time: '5分钟',
                    tips: '豆瓣酱要小火慢炒，炒出红油是水煮鱼色香味的关键。花椒不要炒糊，出香味即可。'
                },
                {
                    step: 5,
                    instruction: '煮制鱼片：汤汁烧开后，用勺子将腌好的鱼片一片片滑入锅中，不要搅动。大火煮2-3分钟至鱼片变白熟透，立即连汤带鱼倒入铺好配菜的盆中。',
                    image: '',
                    time: '4分钟',
                    tips: '鱼片下锅后不要立即翻动，避免鱼片破碎。煮制时间不宜过长，鱼片变白即熟。'
                },
                {
                    step: 6,
                    instruction: '最后调香：在鱼片表面撒上剩余的干辣椒段和花椒粒，再撒上蒜片。另起锅将剩余的油烧至冒烟，立即淋在辣椒花椒上，激发出香味。最后撒上葱花即可。',
                    image: '',
                    time: '3分钟',
                    tips: '油温要够高，这样才能激发出辣椒和花椒的香味。淋油时要快准，让每个角落都能淋到热油。'
                }
            ],
            tips: [
                '选鱼要领：草鱼肉质鲜嫩，也可用黑鱼、鲈鱼等，关键是要新鲜',
                '片鱼技巧：刀要锋利，下刀角度45度，片出的鱼片薄厚均匀不易碎',
                '腌制关键：蛋清和淀粉形成保护膜，保持鱼片嫩滑，腌制时间15分钟即可',
                '火候掌握：鱼片下锅后大火快煮，时间不宜过长，变白即熟',
                '油温控制：最后淋油要用高温热油，才能激发出香辣味',
                '配菜选择：可根据喜好加入金针菇、冬瓜、莴笋等，增加口感层次'
            ],
            nutrition: {
                calories: '165千卡/100g',
                protein: '24.8g',
                fat: '8.2g',
                carbs: '3.5g',
                fiber: '1.2g',
                sodium: '580mg',
                calcium: '28mg',
                iron: '1.8mg',
                vitaminA: '45μg',
                vitaminB1: '0.08mg',
                vitaminB2: '0.12mg',
                potassium: '280mg'
            },
            healthBenefits: [
                '鱼肉富含优质蛋白质，易于消化吸收，适合各年龄段人群',
                '含有丰富的不饱和脂肪酸，有益心血管健康',
                '豆芽菜富含维生素C和膳食纤维，促进消化',
                '适量的辣椒素能促进血液循环，增进食欲',
                '花椒含有挥发油，具有温中散寒的功效'
            ],
            relatedRecipes: [
                { id: 'recipe_020', title: '毛血旺', reason: '同为川菜水煮系列，制作工艺相近' },
                { id: 'recipe_001', title: '宫保鸡丁', reason: '川菜经典，麻辣鲜香' },
                { id: 'recipe_021', title: '水煮牛肉', reason: '水煮系列菜品，口味相似' }
            ],
            tags: ['川菜', '麻辣', '主菜', '下饭'],
            createdAt: '2024-01-25T11:00:00Z',
            updatedAt: '2024-01-25T11:00:00Z'
        },
        {
            id: 'recipe_020',
            title: '毛血旺',
            description: '重庆特色川菜，麻辣鲜香，配菜丰富。',
            image: '/cooking-platform/data/imgs/川菜/毛血旺.png',
            cuisine: 'sichuan', 
            difficulty: 'medium',
            cookTime: '25分钟',
            prepTime: '20分钟',
            servings: '3-4人',
            rating: 4.5,
            viewCount: 9800,
            favoriteCount: 1567,
            ingredients: [
                { name: '鸭血', amount: '300g', note: '切厚片' },
                { name: '午餐肉', amount: '200g', note: '切片' },
                { name: '黄豆芽', amount: '200g', note: '掐去根须' },
                { name: '韭菜', amount: '100g', note: '切段' },
                { name: '粉条', amount: '100g', note: '提前泡软' },
                { name: '郫县豆瓣酱', amount: '3汤勺', note: '剁碎' },
                { name: '干辣椒', amount: '15个', note: '掰段' },
                { name: '花椒', amount: '1汤勺', note: '' },
                { name: '生姜', amount: '3片', note: '切片' },
                { name: '大蒜', amount: '4瓣', note: '切片' },
                { name: '生抽', amount: '2汤勺', note: '' },
                { name: '料酒', amount: '1汤勺', note: '' },
                { name: '盐', amount: '适量', note: '' },
                { name: '鸡精', amount: '1茶勺', note: '' },
                { name: '植物油', amount: '适量', note: '' }
            ],
            steps: [
                { step: 1, instruction: '鸭血焯水去腥，豆芽菜焯水断生，盛起备用。', time: '5分钟' },
                { step: 2, instruction: '热锅下油，爆炒豆瓣酱出红油，下姜蒜片炒香。', time: '3分钟' },
                { step: 3, instruction: '加水煮开，调入生抽、料酒、盐、鸡精调味。', time: '3分钟' },
                { step: 4, instruction: '下鸭血、午餐肉煮3分钟，再下粉条煮2分钟。', time: '5分钟' },
                { step: 5, instruction: '最后下韭菜段煮1分钟，连汤盛入大盆中。', time: '2分钟' },
                { step: 6, instruction: '表面撒干辣椒段和花椒，淋热油爆香即可。', time: '2分钟' }
            ],
            tips: [
                '鸭血一定要先焯水，去除血腥味。',
                '豆瓣酱要炒出红油，汤汁才会红亮。',
                '配菜可以根据喜好调整，常见的有金针菇、木耳等。',
                '最后的热油爆香步骤是毛血旺的精髓。'
            ],
            nutrition: { calories: '145千卡/100g', protein: '12g', fat: '8g', carbs: '6g', fiber: '2g', sodium: '580mg' },
            tags: ['川菜', '麻辣', '重庆菜', '下饭'],
            createdAt: '2024-01-25T12:00:00Z',
            updatedAt: '2024-01-25T12:00:00Z'
        },
        {
            id: 'recipe_021',
            title: '蒜泥白肉',
            description: '川菜凉菜，肥而不腻，蒜香浓郁。',
            image: '/cooking-platform/data/imgs/川菜/蒜泥白肉.png',
            cuisine: 'sichuan',
            difficulty: 'easy', 
            cookTime: '15分钟',
            prepTime: '10分钟',
            servings: '2-3人',
            rating: 4.4,
            viewCount: 7600,
            favoriteCount: 1234,
            ingredients: [
                { name: '五花肉', amount: '500g', note: '选择肥瘦相间的' },
                { name: '大蒜', amount: '8瓣', note: '捣成蒜泥' },
                { name: '生抽', amount: '3汤勺', note: '' },
                { name: '香醋', amount: '1汤勺', note: '' },
                { name: '白糖', amount: '1茶勺', note: '' },
                { name: '香油', amount: '1茶勺', note: '' },
                { name: '红油辣椒', amount: '2汤勺', note: '可选' },
                { name: '花椒粉', amount: '少许', note: '' },
                { name: '盐', amount: '少许', note: '' },
                { name: '香葱', amount: '2根', note: '切葱花' },
                { name: '黄瓜', amount: '1根', note: '切丝，垫盘用' }
            ],
            steps: [
                { step: 1, instruction: '五花肉洗净，放入冷水锅中煮25分钟至熟透。', time: '25分钟' },
                { step: 2, instruction: '煮好的肉捞出晾凉，切成薄片。', time: '5分钟' },
                { step: 3, instruction: '调制蒜泥汁：蒜泥加生抽、香醋、白糖、香油、花椒粉、盐调匀。', time: '3分钟' },
                { step: 4, instruction: '黄瓜丝垫盘底，摆上白肉片。', time: '2分钟' },
                { step: 5, instruction: '淋上调好的蒜泥汁，撒葱花即可。', time: '1分钟' }
            ],
            tips: [
                '五花肉煮制时间要够，确保完全熟透。',
                '切肉片时要等完全晾凉，这样不容易散。',
                '蒜泥要捣得细腻，口感更好。',
                '可根据个人喜好添加红油辣椒调色调味。'
            ],
            nutrition: { calories: '280千卡/100g', protein: '18g', fat: '22g', carbs: '3g', fiber: '0.5g', sodium: '520mg' },
            tags: ['川菜', '凉菜', '蒜香', '开胃'],
            createdAt: '2024-01-25T13:00:00Z',
            updatedAt: '2024-01-25T13:00:00Z'
        },
        {
            id: 'recipe_022',
            title: '夫妻肺片',
            description: '成都名小吃，口感丰富，麻辣鲜香。',
            image: '/cooking-platform/data/imgs/川菜/夫妻肺片.png',
            cuisine: 'sichuan',
            difficulty: 'medium',
            cookTime: '30分钟', 
            prepTime: '25分钟',
            servings: '2-3人', 
            rating: 4.7,
            viewCount: 13400,
            favoriteCount: 2789,
            ingredients: [
                { name: '牛肺', amount: '200g', note: '或用牛肚代替' },
                { name: '牛心', amount: '150g', note: '' },
                { name: '牛舌', amount: '100g', note: '可选' },
                { name: '牛肚', amount: '150g', note: '' },
                { name: '生抽', amount: '3汤勺', note: '' },
                { name: '香醋', amount: '2汤勺', note: '' },
                { name: '红油辣椒', amount: '3汤勺', note: '' },
                { name: '花椒面', amount: '1汤勺', note: '' },
                { name: '白糖', amount: '1茶勺', note: '' },
                { name: '盐', amount: '适量', note: '' },
                { name: '蒜泥', amount: '3瓣', note: '' },
                { name: '芝麻', amount: '1汤勺', note: '熟芝麻' },
                { name: '花生米', amount: '50g', note: '油炸花生米，压碎' },
                { name: '芹菜', amount: '50g', note: '切丁' }
            ],
            steps: [
                { step: 1, instruction: '将牛肺、牛心、牛舌等洗净，冷水下锅煮40分钟至软烂。', time: '40分钟' },
                { step: 2, instruction: '煮好的牛杂捞出晾凉，切成薄片。', time: '10分钟' },
                { step: 3, instruction: '调制红油汁：生抽、香醋、红油辣椒、花椒面、白糖、盐、蒜泥混合。', time: '5分钟' },
                { step: 4, instruction: '将切好的牛杂装盘，淋上调好的红油汁。', time: '3分钟' },
                { step: 5, instruction: '撒上熟芝麻、花生米碎、芹菜丁即可。', time: '2分钟' }
            ],
            tips: [
                '牛杂一定要煮够时间，确保软烂易嚼。',
                '切片要薄而均匀，这样更容易入味。',
                '红油的质量很重要，决定了夫妻肺片的色泽和口感。',
                '花生米要压碎但不要太细，保持一定颗粒感。'
            ],
            nutrition: { calories: '185千卡/100g', protein: '20g', fat: '10g', carbs: '4g', fiber: '1g', sodium: '620mg' },
            tags: ['川菜', '凉菜', '小吃', '麻辣'],
            createdAt: '2024-01-25T14:00:00Z',
            updatedAt: '2024-01-25T14:00:00Z'
        },
        {
            id: 'recipe_023',
            title: '鱼香茄子',
            description: '经典川菜，茄子软糯，鱼香味浓。',
            image: '/cooking-platform/data/imgs/川菜/鱼香茄子.png',
            cuisine: 'sichuan',
            difficulty: 'easy',
            cookTime: '18分钟',
            prepTime: '10分钟',
            servings: '2-3人',
            rating: 4.5,
            viewCount: 16800,
            favoriteCount: 2456,
            ingredients: [
                { name: '长茄子', amount: '2根', note: '约400g，切条' },
                { name: '猪肉丝', amount: '50g', note: '可选，增加口感' },
                { name: '泡椒', amount: '3个', note: '剁碎' },
                { name: '豆瓣酱', amount: '1汤勺', note: '剁碎' },
                { name: '蒜', amount: '3瓣', note: '切末' },
                { name: '生姜', amount: '1片', note: '切末' },
                { name: '大葱', amount: '1根', note: '切花' },
                { name: '生抽', amount: '2汤勺', note: '' },
                { name: '老抽', amount: '1茶勺', note: '调色' },
                { name: '香醋', amount: '1汤勺', note: '' },
                { name: '白糖', amount: '2茶勺', note: '' },
                { name: '淀粉', amount: '1汤勺', note: '调水淀粉' },
                { name: '植物油', amount: '适量', note: '炸茄子用' }
            ],
            steps: [
                { step: 1, instruction: '茄子切条后用盐腌制10分钟，挤去水分。', time: '10分钟' },
                { step: 2, instruction: '调制鱼香汁：生抽、老抽、醋、糖、水淀粉调匀。', time: '3分钟' },
                { step: 3, instruction: '茄条下油锅炸至软身，盛起沥油。', time: '5分钟' },
                { step: 4, instruction: '锅留底油，爆炒豆瓣酱和泡椒出红油。', time: '2分钟' },
                { step: 5, instruction: '下姜蒜末炒香，倒入茄条翻炒。', time: '2分钟' },
                { step: 6, instruction: '淋入鱼香汁炒匀，撒葱花即可。', time: '1分钟' }
            ],
            tips: [
                '茄子腌制后要挤干水分，这样炸制时不会溅油。',
                '油温要控制好，茄子炸至外表微黄即可。',
                '鱼香汁的酸甜比例很重要，可根据口味调整。',
                '最后勾芡能让汁料更好地裹在茄子上。'
            ],
            nutrition: { calories: '125千卡/100g', protein: '3g', fat: '8g', carbs: '12g', fiber: '3g', sodium: '480mg' },
            tags: ['川菜', '素食', '下饭', '家常'],
            createdAt: '2024-01-25T15:00:00Z',
            updatedAt: '2024-01-25T15:00:00Z'
        },
        {
            id: 'recipe_024',
            title: '水煮牛肉',
            description: '四川名菜，牛肉嫩滑，麻辣开胃。',
            image: '/cooking-platform/data/imgs/川菜/水煮牛肉.png',
            cuisine: 'sichuan',
            difficulty: 'medium',
            cookTime: '35分钟',
            prepTime: '20分钟',
            servings: '3-4人',
            rating: 4.8,
            viewCount: 21500,
            favoriteCount: 3890,
            ingredients: [
                { name: '牛肉', amount: '300g', note: '牛里脊，切片' },
                { name: '白菜', amount: '200g', note: '洗净切段' },
                { name: '豆芽', amount: '150g', note: '掐去根须' },
                { name: '郫县豆瓣酱', amount: '2汤勺', note: '剁碎' },
                { name: '干辣椒', amount: '15个', note: '掰段去籽' },
                { name: '花椒', amount: '1汤勺', note: '' },
                { name: '生姜', amount: '3片', note: '切片' },
                { name: '大蒜', amount: '4瓣', note: '切片' },
                { name: '大葱', amount: '2根', note: '切段' },
                { name: '蛋清', amount: '1个', note: '腌肉用' },
                { name: '料酒', amount: '1汤勺', note: '' },
                { name: '生抽', amount: '2汤勺', note: '' },
                { name: '盐', amount: '适量', note: '' },
                { name: '淀粉', amount: '2汤勺', note: '腌肉用' },
                { name: '植物油', amount: '150ml', note: '爆香料用' }
            ],
            steps: [
                { step: 1, instruction: '牛肉片用料酒、盐、蛋清、淀粉腌制15分钟。', time: '15分钟' },
                { step: 2, instruction: '白菜和豆芽焯水至断生，铺在盆底。', time: '3分钟' },
                { step: 3, instruction: '热锅下油，爆炒豆瓣酱出红油，下姜蒜片炒香。', time: '3分钟' },
                { step: 4, instruction: '加水煮开，调味后下牛肉片煮2分钟。', time: '4分钟' },
                { step: 5, instruction: '将牛肉和汤倒入铺好菜的盆中。', time: '1分钟' },
                { step: 6, instruction: '在牛肉上撒干辣椒段和花椒，淋热油爆香。', time: '2分钟' }
            ],
            tips: [
                '牛肉要切得薄厚均匀，腌制让肉质更嫩。',
                '豆瓣酱炒出红油是关键，汤汁才会红亮。',
                '牛肉下锅后不要煮太久，保持嫩滑。',
                '最后淋热油激发香味，是川菜的经典做法。'
            ],
            nutrition: { calories: '195千卡/100g', protein: '26g', fat: '9g', carbs: '4g', fiber: '1g', sodium: '580mg' },
            tags: ['川菜', '麻辣', '牛肉', '下饭'],
            createdAt: '2024-01-25T16:00:00Z',
            updatedAt: '2024-01-25T16:00:00Z'
        },
        {
            id: 'recipe_025',
            title: '担担面',
            description: '成都特色面食，麻辣香甜，口感层次丰富。',
            image: '/cooking-platform/data/imgs/川菜/担担面.png',
            cuisine: 'sichuan',
            difficulty: 'medium',
            cookTime: '20分钟',
            prepTime: '15分钟',
            servings: '2人',
            rating: 4.6,
            viewCount: 14700,
            favoriteCount: 2345,
            ingredients: [
                { name: '细面条', amount: '200g', note: '手工面或挂面' },
                { name: '猪肉末', amount: '100g', note: '肥瘦各半' },
                { name: '芽菜', amount: '50g', note: '四川特产，切碎' },
                { name: '芝麻酱', amount: '2汤勺', note: '调稀备用' },
                { name: '生抽', amount: '2汤勺', note: '' },
                { name: '老抽', amount: '1茶勺', note: '调色' },
                { name: '香醋', amount: '1汤勺', note: '' },
                { name: '白糖', amount: '1茶勺', note: '' },
                { name: '红油辣椒', amount: '2汤勺', note: '' },
                { name: '花椒粉', amount: '1茶勺', note: '' },
                { name: '蒜泥', amount: '2瓣', note: '' },
                { name: '香葱', amount: '2根', note: '切葱花' },
                { name: '榨菜丝', amount: '30g', note: '可选' },
                { name: '盐', amount: '适量', note: '' },
                { name: '鸡汤', amount: '200ml', note: '或清水' }
            ],
            steps: [
                { step: 1, instruction: '热锅下少量油，下肉末和芽菜炒香，盛起备用。', time: '5分钟' },
                { step: 2, instruction: '调制担担面汁：芝麻酱、生抽、老抽、醋、糖、红油、花椒粉、蒜泥混合。', time: '5分钟' },
                { step: 3, instruction: '面条下开水煮至8分熟，捞起沥水。', time: '4分钟' },
                { step: 4, instruction: '将面条装碗，淋上调好的担担面汁。', time: '1分钟' },
                { step: 5, instruction: '铺上炒好的肉末芽菜，撒葱花和榨菜丝即可。', time: '2分钟' }
            ],
            tips: [
                '芝麻酱要先用温水调开，避免结块。',
                '肉末要炒得干香，这样口感更好。',
                '面汁的咸甜比例可根据个人喜好调整。',
                '正宗担担面不加汤，是干拌面的做法。'
            ],
            nutrition: { calories: '320千卡/100g', protein: '15g', fat: '12g', carbs: '42g', fiber: '3g', sodium: '680mg' },
            tags: ['川菜', '面食', '麻辣', '小吃'],
            createdAt: '2024-01-25T17:00:00Z',
            updatedAt: '2024-01-25T17:00:00Z'
        },
        {
            id: 'recipe_026',
            title: '钟水饺',
            description: '成都名小吃，皮薄馅嫩，调料独特。',
            cuisine: 'sichuan',
            difficulty: 'hard',
            cookTime: '45分钟',
            prepTime: '30分钟',
            servings: '3-4人',
            rating: 4.7,
            viewCount: 8900,
            favoriteCount: 1678,
            ingredients: [
                { name: '面粉', amount: '300g', note: '高筋面粉' },
                { name: '温水', amount: '150ml', note: '和面用' },
                { name: '猪肉馅', amount: '250g', note: '肥瘦3:7' },
                { name: '韭菜', amount: '100g', note: '洗净切碎' },
                { name: '生抽', amount: '2汤勺', note: '调馅用' },
                { name: '料酒', amount: '1汤勺', note: '' },
                { name: '香油', amount: '1汤勺', note: '' },
                { name: '盐', amount: '1茶勺', note: '' },
                { name: '胡椒粉', amount: '少许', note: '' },
                { name: '红油辣椒', amount: '2汤勺', note: '蘸料用' },
                { name: '蒜泥', amount: '3瓣', note: '蘸料用' },
                { name: '香醋', amount: '1汤勺', note: '蘸料用' },
                { name: '花椒粉', amount: '1茶勺', note: '蘸料用' }
            ],
            steps: [
                { step: 1, instruction: '面粉加温水和成光滑面团，饧20分钟。', time: '25分钟' },
                { step: 2, instruction: '调制肉馅：猪肉馅加韭菜、生抽、料酒、香油、盐、胡椒粉拌匀。', time: '8分钟' },
                { step: 3, instruction: '面团擀成薄饺子皮，包成钟水饺形状。', time: '15分钟' },
                { step: 4, instruction: '调制蘸料：红油、蒜泥、香醋、花椒粉混合。', time: '5分钟' },
                { step: 5, instruction: '水开后下饺子，煮至浮起再煮2分钟即可。', time: '8分钟' },
                { step: 6, instruction: '盛起装盘，蘸特制调料食用。', time: '2分钟' }
            ],
            tips: [
                '面团要和得软硬适中，饧制时间要够。',
                '包饺子时要封口严实，避免煮制时破皮。',
                '钟水饺的特色在于独特的红油蘸料。',
                '煮饺子火候要掌握好，避免煮破。'
            ],
            nutrition: { calories: '210千卡/100g', protein: '12g', fat: '8g', carbs: '28g', fiber: '2g', sodium: '520mg' },
            tags: ['川菜', '饺子', '小吃', '传统'],
            createdAt: '2024-01-25T18:00:00Z',
            updatedAt: '2024-01-25T18:00:00Z'
        },
        {
            id: 'recipe_027',
            title: '冒菜',
            description: '成都特色小吃，一人一锅，麻辣鲜香。',
            cuisine: 'sichuan',
            difficulty: 'easy',
            cookTime: '15分钟',
            prepTime: '10分钟',
            servings: '1-2人',
            rating: 4.4,
            viewCount: 12300,
            favoriteCount: 1890,
            ingredients: [
                { name: '白菜', amount: '200g', note: '洗净切段' },
                { name: '土豆', amount: '1个', note: '切片' },
                { name: '豆皮', amount: '100g', note: '切条' },
                { name: '粉条', amount: '50g', note: '提前泡软' },
                { name: '午餐肉', amount: '100g', note: '切片，可选' },
                { name: '郫县豆瓣酱', amount: '2汤勺', note: '剁碎' },
                { name: '火锅底料', amount: '1块', note: '约20g' },
                { name: '干辣椒', amount: '8个', note: '掰段' },
                { name: '花椒', amount: '1茶勺', note: '' },
                { name: '生姜', amount: '3片', note: '切片' },
                { name: '大蒜', amount: '3瓣', note: '切片' },
                { name: '大葱', amount: '1根', note: '切段' },
                { name: '盐', amount: '适量', note: '' },
                { name: '鸡精', amount: '1茶勺', note: '' },
                { name: '香菜', amount: '2根', note: '切段，装饰用' }
            ],
            steps: [
                { step: 1, instruction: '热锅下油，爆炒豆瓣酱和火锅底料出红油。', time: '3分钟' },
                { step: 2, instruction: '下姜蒜片和干辣椒花椒炒香。', time: '2分钟' },
                { step: 3, instruction: '加水烧开，调入盐和鸡精。', time: '3分钟' },
                { step: 4, instruction: '先下土豆片煮3分钟，再下其他蔬菜。', time: '5分钟' },
                { step: 5, instruction: '最后下午餐肉和粉条煮1分钟。', time: '2分钟' },
                { step: 6, instruction: '盛起装碗，撒香菜即可。', time: '1分钟' }
            ],
            tips: [
                '豆瓣酱要炒出红油，这样汤底才香。',
                '蔬菜要分批下锅，先难熟后易熟的。',
                '汤汁不要太浓，保持清爽的口感。',
                '可根据个人喜好选择喜欢的蔬菜。'
            ],
            nutrition: { calories: '105千卡/100g', protein: '6g', fat: '4g', carbs: '12g', fiber: '3g', sodium: '480mg' },
            tags: ['川菜', '小吃', '麻辣', '快手'],
            createdAt: '2024-01-25T19:00:00Z',
            updatedAt: '2024-01-25T19:00:00Z'
        },
        {
            id: 'recipe_028',
            title: '酸辣粉',
            description: '重庆小吃，酸辣开胃，粉条爽滑。',
            cuisine: 'sichuan',
            difficulty: 'easy',
            cookTime: '12分钟',
            prepTime: '8分钟',
            servings: '1人',
            rating: 4.3,
            viewCount: 15600,
            favoriteCount: 2134,
            ingredients: [
                { name: '红薯粉条', amount: '100g', note: '提前泡软' },
                { name: '花生米', amount: '30g', note: '炸花生米' },
                { name: '榨菜丝', amount: '30g', note: '' },
                { name: '香菜', amount: '2根', note: '切段' },
                { name: '韭菜', amount: '20g', note: '切段' },
                { name: '生抽', amount: '2汤勺', note: '' },
                { name: '香醋', amount: '3汤勺', note: '' },
                { name: '红油辣椒', amount: '2汤勺', note: '' },
                { name: '花椒粉', amount: '1茶勺', note: '' },
                { name: '盐', amount: '1茶勺', note: '' },
                { name: '鸡精', amount: '1茶勺', note: '' },
                { name: '蒜泥', amount: '2瓣', note: '' },
                { name: '香葱', amount: '1根', note: '切花' },
                { name: '热汤', amount: '300ml', note: '骨汤或开水' }
            ],
            steps: [
                { step: 1, instruction: '红薯粉条用开水泡软，沥干备用。', time: '5分钟' },
                { step: 2, instruction: '调制酸辣汁：生抽、香醋、红油、花椒粉、盐、鸡精、蒜泥混合。', time: '3分钟' },
                { step: 3, instruction: '将调好的汁料放入碗底。', time: '1分钟' },
                { step: 4, instruction: '粉条下开水烫1分钟，捞入调料碗中。', time: '2分钟' },
                { step: 5, instruction: '冲入热汤，撒上花生米、榨菜丝、香菜、韭菜。', time: '1分钟' },
                { step: 6, instruction: '最后撒葱花，趁热享用。', time: '1分钟' }
            ],
            tips: [
                '粉条不要煮太久，保持Q弹口感。',
                '酸辣汁的比例很重要，可根据口味调整。',
                '热汤要趁热冲入，这样粉条更入味。',
                '配菜可根据喜好增减。'
            ],
            nutrition: { calories: '158千卡/100g', protein: '4g', fat: '6g', carbs: '24g', fiber: '2g', sodium: '580mg' },
            tags: ['川菜', '小吃', '酸辣', '重庆'],
            createdAt: '2024-01-25T20:00:00Z',
            updatedAt: '2024-01-25T20:00:00Z'
        },
        {
            id: 'recipe_029',
            title: '辣子鸡',
            description: '重庆特色菜，鸡肉酥脆，麻辣香甜。',
            cuisine: 'sichuan',
            difficulty: 'medium',
            cookTime: '25分钟',
            prepTime: '20分钟',
            servings: '2-3人',
            rating: 4.8,
            viewCount: 19200,
            favoriteCount: 3567,
            ingredients: [
                { name: '嫩鸡', amount: '600g', note: '剁成小块' },
                { name: '干辣椒', amount: '50g', note: '掰段去籽' },
                { name: '花椒', amount: '2汤勺', note: '' },
                { name: '生姜', amount: '1块', note: '切片' },
                { name: '大蒜', amount: '5瓣', note: '切片' },
                { name: '大葱', amount: '2根', note: '切段' },
                { name: '生抽', amount: '2汤勺', note: '' },
                { name: '老抽', amount: '1茶勺', note: '调色' },
                { name: '料酒', amount: '2汤勺', note: '' },
                { name: '白糖', amount: '1汤勺', note: '' },
                { name: '盐', amount: '1茶勺', note: '' },
                { name: '淀粉', amount: '2汤勺', note: '腌鸡用' },
                { name: '花生米', amount: '50g', note: '炸花生米，可选' },
                { name: '植物油', amount: '500ml', note: '炸鸡用' }
            ],
            steps: [
                { step: 1, instruction: '鸡块用料酒、盐、淀粉腌制15分钟。', time: '15分钟' },
                { step: 2, instruction: '热油至七成热，下鸡块炸至外表金黄酥脆，捞起。', time: '8分钟' },
                { step: 3, instruction: '锅留底油，下干辣椒和花椒小火炸香。', time: '2分钟' },
                { step: 4, instruction: '下姜蒜片爆香，再下炸好的鸡块。', time: '2分钟' },
                { step: 5, instruction: '调入生抽、老抽、白糖炒匀。', time: '3分钟' },
                { step: 6, instruction: '撒入葱段和花生米炒匀即可。', time: '2分钟' }
            ],
            tips: [
                '鸡块要炸得酥脆，这是辣子鸡的关键。',
                '干辣椒不要炸糊，小火慢炸出香味。',
                '最后炒制时间不要太长，保持鸡肉酥脆。',
                '可根据个人喜好调整辣椒用量。'
            ],
            nutrition: { calories: '245千卡/100g', protein: '22g', fat: '15g', carbs: '6g', fiber: '1g', sodium: '520mg' },
            tags: ['川菜', '辣味', '鸡肉', '重庆菜'],
            createdAt: '2024-01-25T21:00:00Z',
            updatedAt: '2024-01-25T21:00:00Z'
        },
        {
            id: 'recipe_030',
            title: '蒸蛋羹',
            description: '川式蒸蛋，嫩滑如豆腐，营养丰富。',
            cuisine: 'sichuan',
            difficulty: 'easy',
            cookTime: '10分钟',
            prepTime: '5分钟',
            servings: '2人',
            rating: 4.2,
            viewCount: 8700,
            favoriteCount: 1345,
            ingredients: [
                { name: '鸡蛋', amount: '3个', note: '新鲜鸡蛋' },
                { name: '温水', amount: '150ml', note: '约40度' },
                { name: '盐', amount: '1/2茶勺', note: '' },
                { name: '生抽', amount: '1茶勺', note: '调味用' },
                { name: '香油', amount: '几滴', note: '提香用' },
                { name: '香葱', amount: '1根', note: '切葱花' },
                { name: '虾仁', amount: '50g', note: '可选，切丁' },
                { name: '香菇', amount: '2朵', note: '可选，切丁' }
            ],
            steps: [
                { step: 1, instruction: '鸡蛋打散，加温水、盐、生抽搅拌均匀。', time: '3分钟' },
                { step: 2, instruction: '过筛去除泡沫，倒入蒸碗中。', time: '2分钟' },
                { step: 3, instruction: '如加配菜，此时加入虾仁丁、香菇丁。', time: '1分钟' },
                { step: 4, instruction: '用保鲜膜封口，蒸锅水开后中火蒸8分钟。', time: '8分钟' },
                { step: 5, instruction: '蒸好后焖2分钟再开盖。', time: '2分钟' },
                { step: 6, instruction: '淋香油，撒葱花即可。', time: '1分钟' }
            ],
            tips: [
                '蛋液与水的比例是1:1，这样蒸出来最嫩滑。',
                '一定要过筛，去除泡沫，成品才光滑。',
                '蒸制时要盖保鲜膜，避免水蒸汽滴入。',
                '中火蒸制，火候太大容易有蜂窝。'
            ],
            nutrition: { calories: '78千卡/100g', protein: '7g', fat: '5g', carbs: '2g', fiber: '0g', sodium: '180mg' },
            tags: ['川菜', '蒸菜', '嫩滑', '营养'],
            createdAt: '2024-01-25T22:00:00Z',
            updatedAt: '2024-01-25T22:00:00Z'
        },
        {
            id: 'recipe_031',
            title: '红烧狮子头',
            description: '川式狮子头，肉质鲜美，汤汁浓郁。',
            cuisine: 'sichuan',
            difficulty: 'medium',
            cookTime: '40分钟',
            prepTime: '25分钟',
            servings: '3-4人',
            rating: 4.6,
            viewCount: 10800,
            favoriteCount: 1789,
            ingredients: [
                { name: '猪肉馅', amount: '500g', note: '肥瘦3:7' },
                { name: '马蹄', amount: '5个', note: '剁碎，增加爽脆' },
                { name: '香菇', amount: '4朵', note: '切丁' },
                { name: '生姜', amount: '1块', note: '切末' },
                { name: '大葱', amount: '2根', note: '切末' },
                { name: '鸡蛋', amount: '1个', note: '打散' },
                { name: '淀粉', amount: '2汤勺', note: '' },
                { name: '料酒', amount: '2汤勺', note: '' },
                { name: '生抽', amount: '3汤勺', note: '' },
                { name: '老抽', amount: '1汤勺', note: '调色' },
                { name: '白糖', amount: '1汤勺', note: '' },
                { name: '盐', amount: '1茶勺', note: '' },
                { name: '胡椒粉', amount: '1茶勺', note: '' },
                { name: '高汤', amount: '500ml', note: '或清水' },
                { name: '植物油', amount: '适量', note: '煎制用' }
            ],
            steps: [
                { step: 1, instruction: '肉馅加马蹄丁、香菇丁、姜末、葱末、鸡蛋、淀粉、盐、胡椒粉拌匀。', time: '15分钟' },
                { step: 2, instruction: '用手团成大肉圆，每个约60g。', time: '10分钟' },
                { step: 3, instruction: '平底锅刷油，将肉圆煎至表面微黄定型。', time: '8分钟' },
                { step: 4, instruction: '砂锅加高汤，放入煎好的狮子头。', time: '2分钟' },
                { step: 5, instruction: '加生抽、老抽、糖调味，小火炖30分钟。', time: '30分钟' },
                { step: 6, instruction: '最后收汁装盘即可。', time: '5分钟' }
            ],
            tips: [
                '肉馅要顺一个方向搅拌，这样口感更嫩。',
                '马蹄增加爽脆口感，也可用冬笋代替。',
                '先煎后炖的做法能保持狮子头形状不散。',
                '炖制时要小火慢炖，让肉质更加软嫩。'
            ],
            nutrition: { calories: '185千卡/100g', protein: '16g', fat: '12g', carbs: '5g', fiber: '1g', sodium: '520mg' },
            tags: ['川菜', '红烧', '肉菜', '家常'],
            createdAt: '2024-01-25T23:00:00Z',
            updatedAt: '2024-01-25T23:00:00Z'
        },
        {
            id: 'recipe_032',
            title: '白切鸡',
            description: '粤菜经典，鸡肉鲜嫩，蘸料丰富。',
            cuisine: 'cantonese',
            difficulty: 'easy',
            cookTime: '30分钟',
            prepTime: '10分钟',
            servings: '3-4人',
            rating: 4.5,
            viewCount: 14200,
            favoriteCount: 2456,
            ingredients: [
                { name: '土鸡', amount: '1只', note: '约1.2kg，新鲜土鸡' },
                { name: '生姜', amount: '50g', note: '切片' },
                { name: '大葱', amount: '3根', note: '切段' },
                { name: '料酒', amount: '3汤勺', note: '' },
                { name: '盐', amount: '2茶勺', note: '' },
                { name: '蒜泥', amount: '4瓣', note: '蘸料用' },
                { name: '生抽', amount: '3汤勺', note: '蘸料用' },
                { name: '香油', amount: '1茶勺', note: '蘸料用' }
            ],
            steps: [
                { step: 1, instruction: '整鸡清洗干净，用盐里外抹匀腌制30分钟。', time: '30分钟' },
                { step: 2, instruction: '锅内放足够的水，加姜片、葱段、料酒烧开。', time: '5分钟' },
                { step: 3, instruction: '将整鸡放入，水要没过鸡身，再次烧开。', time: '5分钟' },
                { step: 4, instruction: '转小火煮25分钟，关火焖10分钟。', time: '35分钟' },
                { step: 5, instruction: '捞出鸡放入冰水中浸泡15分钟定型。', time: '15分钟' },
                { step: 6, instruction: '调制蘸料：蒜泥、生抽、香油混合，切块装盘。', time: '5分钟' }
            ],
            tips: [
                '选择土鸡口感更好，肉质更紧实。',
                '煮制时要保持小火，避免皮破。',
                '冰水浸泡能让鸡皮更爽脆。',
                '蘸料可配姜葱蓉或豉油。'
            ],
            nutrition: { calories: '140千卡/100g', protein: '20g', fat: '6g', carbs: '0g', fiber: '0g', sodium: '280mg' },
            tags: ['粤菜', '白切', '鸡肉', '清淡'],
            createdAt: '2024-01-26T21:00:00Z',
            updatedAt: '2024-01-26T21:00:00Z'
        },
        {
            id: 'recipe_033',
            title: '蜜汁叉烧',
            description: '广东名菜，色泽红亮，甜香可口。',
            cuisine: 'cantonese',
            difficulty: 'medium',
            cookTime: '1小时',
            prepTime: '20分钟',
            servings: '3-4人',
            rating: 4.8,
            viewCount: 16700,
            favoriteCount: 3234,
            ingredients: [
                { name: '猪肉', amount: '500g', note: '梅头肉或里脊肉' },
                { name: '叉烧酱', amount: '3汤勺', note: '广式叉烧酱' },
                { name: '蜂蜜', amount: '2汤勺', note: '' },
                { name: '生抽', amount: '2汤勺', note: '' },
                { name: '老抽', amount: '1汤勺', note: '调色' },
                { name: '料酒', amount: '2汤勺', note: '' },
                { name: '白糖', amount: '1汤勺', note: '' },
                { name: '蚝油', amount: '1汤勺', note: '' },
                { name: '五香粉', amount: '1茶勺', note: '' },
                { name: '盐', amount: '1茶勺', note: '' },
                { name: '植物油', amount: '2汤勺', note: '' }
            ],
            steps: [
                { step: 1, instruction: '猪肉切成长条状，用所有调料腌制2小时以上。', time: '2小时' },
                { step: 2, instruction: '烤箱预热至200度。', time: '5分钟' },
                { step: 3, instruction: '肉条放烤盘上，烤25分钟。', time: '25分钟' },
                { step: 4, instruction: '取出刷蜂蜜，再烤10分钟。', time: '10分钟' },
                { step: 5, instruction: '翻面再刷蜂蜜，烤8分钟至表面焦糖色。', time: '8分钟' },
                { step: 6, instruction: '取出晾凉，切片装盘即可。', time: '5分钟' }
            ],
            tips: [
                '腌制时间要够长，让肉充分入味。',
                '烤制过程中要多次刷蜂蜜，增加光泽。',
                '温度和时间要控制好，避免烤糊。',
                '没有烤箱可用平底锅小火煎制。'
            ],
            nutrition: { calories: '195千卡/100g', protein: '22g', fat: '8g', carbs: '8g', fiber: '0g', sodium: '520mg' },
            tags: ['粤菜', '烧菜', '甜味', '传统'],
            createdAt: '2024-01-26T22:00:00Z',
            updatedAt: '2024-01-26T22:00:00Z'
        },
        {
            id: 'recipe_034',
            title: '广式点心',
            description: '精致粤式茶点，造型美观，口感丰富。',
            image: '/cooking-platform/data/imgs/粵菜/广式点心.png',
            cuisine: 'cantonese',
            difficulty: 'hard',
            cookTime: '50分钟',
            prepTime: '1.5小时',
            servings: '4-6人',
            rating: 4.9,
            viewCount: 11900,
            favoriteCount: 2567,
            ingredients: [
                { name: '澄粉', amount: '150g', note: '小麦淀粉' },
                { name: '生粉', amount: '30g', note: '玉米淀粉' },
                { name: '开水', amount: '200ml', note: '刚烧开的开水' },
                { name: '猪油', amount: '15g', note: '或植物油' },
                { name: '盐', amount: '1小撮', note: '' },
                { name: '鲜虾仁', amount: '200g', note: '去虾线，切小丁' },
                { name: '猪肉馅', amount: '100g', note: '肥瘦相间' },
                { name: '冬笋', amount: '50g', note: '切小丁' },
                { name: '韭黄', amount: '30g', note: '切碎' },
                { name: '生抽', amount: '1汤匙', note: '' },
                { name: '料酒', amount: '1茶匙', note: '' },
                { name: '白胡椒粉', amount: '少许', note: '' },
                { name: '香油', amount: '1茶匙', note: '' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '制作水晶皮',
                    content: '将澄粉和生粉混合，加入一小撮盐。用刚烧开的开水冲入粉中，边冲边搅拌成絮状。',
                    image: '',
                    tips: '水要一次性加入，趁热搅拌才能形成透明的水晶皮。'
                },
                {
                    step: 2,
                    title: '揉制面团',
                    content: '趁热加入猪油，揉成光滑的面团。盖上湿布醒面30分钟。',
                    image: '',
                    tips: '面团要趁热揉制，冷了就不好操作了。'
                },
                {
                    step: 3,
                    title: '调制馅料',
                    content: '虾仁用盐和生粉腌制10分钟。猪肉馅加料酒、生抽、胡椒粉调味。',
                    image: '',
                    tips: '虾仁要保持Q弹口感，不要过度腌制。'
                },
                {
                    step: 4,
                    title: '炒制馅料',
                    content: '热锅下油，先炒肉馅至变色，再下虾仁炒至八分熟，加入冬笋丁翻炒，最后下韭黄炒匀，调味盛起晾凉。',
                    image: '',
                    tips: '馅料要晾凉再包，否则会烫坏水晶皮。'
                },
                {
                    step: 5,
                    title: '包制饺子',
                    content: '将面团分成小剂子，擀成薄饼。包入适量馅料，收口捏紧，整形成饺子状。',
                    image: '',
                    tips: '水晶皮比较粘，可以刷少许油防粘。'
                },
                {
                    step: 6,
                    title: '蒸制点心',
                    content: '蒸笼刷油，放入包好的点心，大火蒸8-10分钟至透明即可。',
                    image: '',
                    tips: '蒸好后不要立即开盖，焖2分钟再打开。'
                }
            ],
            tips: [
                '澄粉一定要用开水烫制，才能形成透明效果。',
                '面团要趁热操作，冷了会变硬。',
                '馅料可以根据喜好调整，如加入马蹄增加脆嫩口感。',
                '蒸制时间不宜过长，以免破皮。'
            ],
            nutrition: {
                calories: '180千卡/100g',
                protein: '12g',
                fat: '6g',
                carbs: '22g',
                fiber: '1g',
                sodium: '420mg'
            },
            tags: ['粤菜', '点心', '茶点', '精致'],
            createdAt: '2024-01-26T23:30:00Z',
            updatedAt: '2024-01-26T23:30:00Z'
        },
        {
            id: 'recipe_035',
            title: '白灼虾',
            description: '粤菜海鲜，虾肉鲜甜，做法简单。',
            cuisine: 'cantonese',
            difficulty: 'easy',
            cookTime: '8分钟',
            prepTime: '10分钟',
            servings: '2-3人',
            rating: 4.6,
            viewCount: 13800,
            favoriteCount: 2789,
            ingredients: [
                { name: '基围虾', amount: '500g', note: '新鲜活虾' },
                { name: '生姜', amount: '3片', note: '切丝' },
                { name: '大葱', amount: '2根', note: '切段' },
                { name: '料酒', amount: '1汤勺', note: '' },
                { name: '盐', amount: '1茶勺', note: '' },
                { name: '生抽', amount: '3汤勺', note: '蘸料用' },
                { name: '蒸鱼豉油', amount: '1汤勺', note: '蘸料用' },
                { name: '香油', amount: '1茶勺', note: '蘸料用' },
                { name: '蒜泥', amount: '2瓣', note: '蘸料用' },
                { name: '香葱', amount: '2根', note: '切花，蘸料用' }
            ],
            steps: [
                { step: 1, instruction: '虾洗净剪去虾须，挑去虾线。', time: '8分钟' },
                { step: 2, instruction: '调制蘸料：生抽、蒸鱼豉油、香油、蒜泥、葱花混合。', time: '3分钟' },
                { step: 3, instruction: '锅内加水，放姜片、葱段、料酒、盐烧开。', time: '3分钟' },
                { step: 4, instruction: '水开后下虾，煮至虾身弯曲变红。', time: '3分钟' },
                { step: 5, instruction: '立即捞出放入冰水中冰镇。', time: '2分钟' },
                { step: 6, instruction: '沥干装盘，配蘸料即可。', time: '2分钟' }
            ],
            tips: [
                '虾要选择新鲜活虾，这样肉质最甜。',
                '煮制时间不要太长，保持虾肉嫩滑。',
                '冰镇能让虾肉更紧实爽脆。',
                '蘸料是白灼虾的精华，不可缺少。'
            ],
            nutrition: { calories: '85千卡/100g', protein: '18g', fat: '1g', carbs: '1g', fiber: '0g', sodium: '280mg' },
            tags: ['粤菜', '海鲜', '清淡', '简单'],
            createdAt: '2024-01-26T23:00:00Z',
            updatedAt: '2024-01-26T23:00:00Z'
        },
        {
            id: 'recipe_036',
            title: '老火靓汤',
            description: '广东特色汤品，营养丰富，滋补养生。',
            cuisine: 'cantonese',
            difficulty: 'easy',
            cookTime: '2小时',
            prepTime: '20分钟',
            servings: '4-6人',
            rating: 4.7,
            viewCount: 9500,
            favoriteCount: 1678,
            ingredients: [
                { name: '猪骨', amount: '500g', note: '筒骨或脊骨' },
                { name: '瘦肉', amount: '200g', note: '猪瘦肉' },
                { name: '玉米', amount: '1根', note: '切段' },
                { name: '胡萝卜', amount: '2根', note: '切块' },
                { name: '马蹄', amount: '6个', note: '去皮' },
                { name: '红枣', amount: '6颗', note: '去核' },
                { name: '枸杞', amount: '1汤勺', note: '' },
                { name: '生姜', amount: '3片', note: '' },
                { name: '盐', amount: '适量', note: '调味用' },
                { name: '清水', amount: '2000ml', note: '' }
            ],
            steps: [
                { step: 1, instruction: '猪骨和瘦肉冷水下锅焯水5分钟，捞出洗净。', time: '8分钟' },
                { step: 2, instruction: '将所有材料放入汤锅，加足量清水。', time: '5分钟' },
                { step: 3, instruction: '大火烧开，撇去浮沫。', time: '10分钟' },
                { step: 4, instruction: '转小火慢炖1.5小时。', time: '90分钟' },
                { step: 5, instruction: '最后30分钟加入枸杞。', time: '30分钟' },
                { step: 6, instruction: '调味即可，趁热享用。', time: '2分钟' }
            ],
            tips: [
                '老火汤要用小火慢炖，时间要够长。',
                '焯水很重要，能去除血污和腥味。',
                '汤料搭配可根据季节和个人体质调整。',
                '枸杞要最后加入，避免煮烂。'
            ],
            nutrition: { calories: '65千卡/100g', protein: '8g', fat: '2g', carbs: '4g', fiber: '1g', sodium: '180mg' },
            tags: ['粤菜', '汤品', '滋补', '养生'],
            createdAt: '2024-01-27T09:00:00Z',
            updatedAt: '2024-01-27T09:00:00Z'
        },
        {
            id: 'recipe_037',
            title: '广式烧鹅',
            description: '粤菜名菜，皮脆肉嫩，香味浓郁。',
            image: '/cooking-platform/data/imgs/粵菜/广式烧鹅.png',
            cuisine: 'cantonese',
            difficulty: 'hard',
            cookTime: '1.5小时',
            prepTime: '2小时',
            servings: '6-8人',
            rating: 4.9,
            viewCount: 15600,
            favoriteCount: 3456,
            ingredients: [
                { name: '光鹅', amount: '1只(约2.5kg)', note: '新鲜宰杀，去毛洗净' },
                { name: '海鲜酱', amount: '3汤匙', note: '' },
                { name: '老抽', amount: '2汤匙', note: '上色用' },
                { name: '生抽', amount: '2汤匙', note: '' },
                { name: '米酒', amount: '3汤匙', note: '或黄酒' },
                { name: '白糖', amount: '2茶匙', note: '' },
                { name: '五香粉', amount: '1茶匙', note: '' },
                { name: '盐', amount: '2茶匙', note: '' },
                { name: '蒜蓉', amount: '3瓣', note: '压成蒜泥' },
                { name: '姜汁', amount: '1汤匙', note: '姜磨蓉取汁' },
                { name: '柱候酱', amount: '2汤匙', note: '或豆瓣酱' },
                { name: '芝麻油', amount: '1茶匙', note: '' },
                { name: '蜂蜜', amount: '2汤匙', note: '烤前刷用' },
                { name: '白醋', amount: '1汤匙', note: '与蜂蜜混合' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '处理鹅肉',
                    content: '鹅清洗干净后，在腹部开口处往里吹气，让鹅皮与肉分离，有利于烤出酥脆效果。用开水烫鹅皮3-5分钟。',
                    image: '',
                    tips: '吹气时要小心，不要弄破鹅皮。烫皮能收紧毛孔。'
                },
                {
                    step: 2,
                    title: '调制腌料',
                    content: '将海鲜酱、柱候酱、生抽、老抽、米酒、糖、盐、五香粉、蒜蓉、姜汁、芝麻油混合调匀成腌料。',
                    image: '',
                    tips: '腌料要充分混合，没有颗粒感。'
                },
                {
                    step: 3,
                    title: '腌制鹅肉',
                    content: '用腌料内外均匀涂抹整只鹅，特别是腹腔内要涂抹充分。腌制2小时以上，最好过夜。',
                    image: '',
                    tips: '腌制时间越长，入味越深。可以放冰箱腌制。'
                },
                {
                    step: 4,
                    title: '风干处理',
                    content: '腌制好的鹅用钩子挂起，在通风处风干1-2小时，直到表皮干燥略微紧缩。',
                    image: '',
                    tips: '风干是关键步骤，能让烤出的皮更脆。'
                },
                {
                    step: 5,
                    title: '准备烘烤',
                    content: '烤箱预热至200°C。鹅肚内塞入香料(八角、桂皮、陈皮)，用牙签封住开口。',
                    image: '',
                    tips: '内塞香料能增加内部香味，牙签要插紧。'
                },
                {
                    step: 6,
                    title: '初次烘烤',
                    content: '将鹅放入烤盘，先烤30分钟。期间每10分钟取出刷一次腌料汁。',
                    image: '',
                    tips: '勤刷汁能保持湿润，增加光泽。'
                },
                {
                    step: 7,
                    title: '调低温度继续烤',
                    content: '降至160°C继续烤45分钟，每15分钟翻面一次，确保受热均匀。',
                    image: '',
                    tips: '降温慢烤能让肉质更嫩，外皮更脆。'
                },
                {
                    step: 8,
                    title: '最后上色',
                    content: '最后10分钟，刷蜂蜜醋汁，升温至220°C烤至金黄酥脆即可。',
                    image: '',
                    tips: '蜂蜜醋汁能增加光泽和甜味，注意不要烤糊。'
                }
            ],
            tips: [
                '选择嫩鹅，肉质会更好。',
                '吹气分离皮肉是关键技巧，决定皮的酥脆度。',
                '腌制时间要足够，最好过夜。',
                '风干步骤不可省略，影响最终口感。',
                '烘烤过程中要注意观察，避免烤糊。',
                '可以在烤盘下放水盘，保持湿润。'
            ],
            nutrition: {
                calories: '260千卡/100g',
                protein: '22g',
                fat: '18g',
                carbs: '2g',
                fiber: '0g',
                sodium: '680mg'
            },
            tags: ['粤菜', '烧菜', '鹅肉', '宴客'],
            createdAt: '2024-01-27T10:00:00Z',
            updatedAt: '2024-01-27T10:00:00Z'
        },
        {
            id: 'recipe_038',
            title: '煲仔饭',
            description: '广东特色，米饭香糯，配菜丰富。',
            cuisine: 'cantonese',
            difficulty: 'medium',
            cookTime: '35分钟',
            prepTime: '20分钟',
            servings: '2-3人',
            rating: 4.5,
            viewCount: 18200,
            favoriteCount: 2890,
            ingredients: [
                { name: '优质大米', amount: '200g', note: '丝苗米或泰香米' },
                { name: '广式腊肠', amount: '2根', note: '切片' },
                { name: '腊肉', amount: '100g', note: '切薄片' },
                { name: '鸡蛋', amount: '2个', note: '' },
                { name: '青菜', amount: '150g', note: '小白菜或菜心' },
                { name: '香菇', amount: '4朵', note: '泡发切片' },
                { name: '葱花', amount: '适量', note: '装饰用' },
                { name: '生抽', amount: '2汤匙', note: '' },
                { name: '老抽', amount: '1茶匙', note: '调色' },
                { name: '蚝油', amount: '1汤匙', note: '' },
                { name: '糖', amount: '1茶匙', note: '' },
                { name: '香油', amount: '1茶匙', note: '' },
                { name: '食用油', amount: '适量', note: '' },
                { name: '水', amount: '适量', note: '煮饭用' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '准备工作',
                    content: '大米淘洗干净，浸泡30分钟。腊肠、腊肉切片，香菇泡发切片，青菜洗净。',
                    image: '',
                    tips: '浸泡大米能让米饭更加香糯。'
                },
                {
                    step: 2,
                    title: '调制酱汁',
                    content: '将生抽、老抽、蚝油、糖、香油混合调成调味汁备用。',
                    image: '',
                    tips: '酱汁是煲仔饭的精华，要提前调好。'
                },
                {
                    step: 3,
                    title: '煮制米饭',
                    content: '煲仔刷少许油，放入大米和适量水，大火煮开后转小火焖煮15分钟。',
                    image: '',
                    tips: '水米比例约为1.2:1，刷油能防粘。'
                },
                {
                    step: 4,
                    title: '加入配菜',
                    content: '当米饭七成熟时，将腊肠、腊肉片铺在米饭上，继续小火焖10分钟。',
                    image: '',
                    tips: '配菜要铺放均匀，这样受热也均匀。'
                },
                {
                    step: 5,
                    title: '制作锅巴',
                    content: '最后3分钟用大火，听到轻微滋滋声即有锅巴形成，关火焖5分钟。',
                    image: '',
                    tips: '锅巴是煲仔饭的特色，不要烧糊了。'
                },
                {
                    step: 6,
                    title: '处理配菜',
                    content: '另起锅烧水，将青菜焯水至软身，香菇用少许油炒香。',
                    image: '',
                    tips: '青菜要保持翠绿色，不要过度烹饪。'
                },
                {
                    step: 7,
                    title: '煎制鸡蛋',
                    content: '平底锅刷油，煎制两个太阳蛋，蛋黄要保持半熟状态。',
                    image: '',
                    tips: '半熟蛋黄与米饭拌匀后更香滑。'
                },
                {
                    step: 8,
                    title: '最终装盘',
                    content: '打开煲仔，加入青菜、香菇、煎蛋，淋上调味汁，撒葱花即可。',
                    image: '',
                    tips: '趁热享用，拌匀后口感更佳。'
                }
            ],
            tips: [
                '选择砂锅或专用煲仔，受热更均匀。',
                '米饭不要煮得太烂，要有嚼劲。',
                '腊味要选择质量好的，影响整体味道。',
                '调味汁可根据个人口味调整。',
                '锅巴是精华，掌握好火候很重要。',
                '吃的时候要趁热，凉了就不香了。'
            ],
            nutrition: {
                calories: '320千卡/100g',
                protein: '12g',
                fat: '8g',
                carbs: '52g',
                fiber: '2g',
                sodium: '580mg'
            },
            tags: ['粤菜', '米饭', '煲仔', '一锅菜'],
            createdAt: '2024-01-27T11:00:00Z',
            updatedAt: '2024-01-27T11:00:00Z'
        },
        {
            id: 'recipe_039',
            title: '艇仔粥',
            description: '广州名粥，配料丰富，口感香滑。',
            cuisine: 'cantonese',
            difficulty: 'easy',
            cookTime: '25分钟',
            prepTime: '15分钟',
            servings: '2-3人',
            rating: 4.4,
            viewCount: 10700,
            favoriteCount: 1567,
            ingredients: [
                { name: '大米', amount: '100g', note: '珠江米或丝苗米' },
                { name: '鲜虾', amount: '150g', note: '去壳去虾线' },
                { name: '瘦肉丝', amount: '80g', note: '猪肉切丝' },
                { name: '鱼片', amount: '100g', note: '草鱼或鲈鱼片' },
                { name: '花生米', amount: '50g', note: '炸花生米' },
                { name: '咸菜丝', amount: '30g', note: '榨菜或萝卜干' },
                { name: '油条', amount: '1根', note: '切段' },
                { name: '葱花', amount: '适量', note: '' },
                { name: '香菜', amount: '适量', note: '切碎' },
                { name: '生姜', amount: '3片', note: '切丝' },
                { name: '胡椒粉', amount: '适量', note: '白胡椒粉' },
                { name: '盐', amount: '适量', note: '' },
                { name: '料酒', amount: '1茶匙', note: '' },
                { name: '香油', amount: '几滴', note: '' },
                { name: '水', amount: '1200ml', note: '' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '准备食材',
                    content: '大米提前浸泡30分钟。虾剥壳去虾线，肉切丝用料酒腌制，鱼片切薄片，花生米炸脆备用。',
                    image: '',
                    tips: '浸泡大米能让粥更容易煮烂煮香。'
                },
                {
                    step: 2,
                    title: '煮制粥底',
                    content: '锅中放入大米和水，大火煮开后转小火慢煮20分钟，期间要不时搅拌防粘底。',
                    image: '',
                    tips: '要耐心搅拌，让米粒充分开花。'
                },
                {
                    step: 3,
                    title: '调味粥底',
                    content: '当米粥煮至粘稠状时，加入生姜丝，用盐调味，继续煮5分钟。',
                    image: '',
                    tips: '姜丝能去腥提味，是艇仔粥的经典配料。'
                },
                {
                    step: 4,
                    title: '下入海鲜',
                    content: '先放入鱼片煮2分钟，再放入虾仁煮1分钟，最后放入肉丝煮1分钟。',
                    image: '',
                    tips: '海鲜不宜久煮，保持鲜嫩口感。'
                },
                {
                    step: 5,
                    title: '加入配菜',
                    content: '放入咸菜丝、炸花生米，轻轻搅拌均匀，煮1分钟即可关火。',
                    image: '',
                    tips: '咸菜丝增加爽脆口感，花生米增加香味。'
                },
                {
                    step: 6,
                    title: '最后调味',
                    content: '撒入白胡椒粉提味，滴几滴香油增香，最后撒上葱花和香菜碎。',
                    image: '',
                    tips: '白胡椒粉是艇仔粥的必备调料。'
                },
                {
                    step: 7,
                    title: '装盘享用',
                    content: '盛入碗中，配上切段的油条，趁热享用最香。',
                    image: '',
                    tips: '油条蘸粥吃是经典搭配，增加层次感。'
                }
            ],
            tips: [
                '选用好大米是关键，影响粥的口感。',
                '火候要掌握好，小火慢煮才香浓。',
                '海鲜要新鲜，不宜久煮保持嫩滑。',
                '配菜搭配要均衡，咸香脆嫩都要有。',
                '白胡椒粉是精华调料，不可缺少。',
                '趁热食用，凉了就失去风味了。'
            ],
            nutrition: {
                calories: '125千卡/100g',
                protein: '8g',
                fat: '3g',
                carbs: '18g',
                fiber: '1g',
                sodium: '320mg'
            },
            tags: ['粤菜', '粥品', '营养', '早餐'],
            createdAt: '2024-01-27T12:00:00Z',
            updatedAt: '2024-01-27T12:00:00Z'
        },
        {
            id: 'recipe_040',
            title: '广式腊味煲仔饭',
            description: '冬季暖胃佳品，腊味香浓，米饭焦香。',
            cuisine: 'cantonese',
            difficulty: 'medium',
            cookTime: '40分钟',
            prepTime: '20分钟',
            servings: '2-3人',
            rating: 4.7,
            viewCount: 12800,
            favoriteCount: 2234,
            ingredients: [
                { name: '优质大米', amount: '200g', note: '丝苗米最佳' },
                { name: '广式腊肠', amount: '3根', note: '切斜片' },
                { name: '腊肉', amount: '150g', note: '切厚片' },
                { name: '咸鸭蛋', amount: '2个', note: '蛋黄切半，蛋白切块' },
                { name: '干香菇', amount: '6朵', note: '提前泡发切片' },
                { name: '胡萝卜', amount: '80g', note: '切丁' },
                { name: '青豆', amount: '50g', note: '焯水备用' },
                { name: '小葱', amount: '3根', note: '切葱花' },
                { name: '生抽', amount: '3汤匙', note: '' },
                { name: '老抽', amount: '1汤匙', note: '上色' },
                { name: '蚝油', amount: '1汤匙', note: '' },
                { name: '糖', amount: '1茶匙', note: '' },
                { name: '香油', amount: '1茶匙', note: '' },
                { name: '料酒', amount: '1汤匙', note: '' },
                { name: '食用油', amount: '适量', note: '' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '准备工作',
                    content: '大米提前浸泡1小时。腊肠、腊肉切片，香菇泡发切片，胡萝卜切丁，青豆焯水备用。',
                    image: '',
                    tips: '充分浸泡大米是煲出香糯米饭的关键。'
                },
                {
                    step: 2,
                    title: '预处理腊味',
                    content: '热锅不放油，将腊肠、腊肉片小火煎至出油，盛起备用。用煎出的腊味油炒香菇片。',
                    image: '',
                    tips: '腊味自身有油脂，先煎出油脂再使用。'
                },
                {
                    step: 3,
                    title: '调制酱汁',
                    content: '将生抽、老抽、蚝油、糖、香油、料酒混合调成调味汁。',
                    image: '',
                    tips: '提前调好酱汁，最后调味更均匀。'
                },
                {
                    step: 4,
                    title: '煮制米饭',
                    content: '煲仔刷油，放入大米和适量水(1:1.2比例)，大火煮开后转小火煮15分钟至八成熟。',
                    image: '',
                    tips: '刷油防粘，水量要准确控制。'
                },
                {
                    step: 5,
                    title: '铺放腊味',
                    content: '米饭八成熟时，将腊肠、腊肉、香菇、胡萝卜丁铺在米饭上，继续小火焖10分钟。',
                    image: '',
                    tips: '腊味要铺放均匀，确保每口都有。'
                },
                {
                    step: 6,
                    title: '制作锅巴',
                    content: '最后5分钟转大火，听到滋滋声后关火，焖10分钟让锅巴形成。',
                    image: '',
                    tips: '锅巴是煲仔饭的精华，火候要掌握好。'
                },
                {
                    step: 7,
                    title: '最终装饰',
                    content: '开盖后放入青豆、咸鸭蛋，淋上调好的酱汁，撒上葱花即可。',
                    image: '',
                    tips: '趁热拌匀食用，口感最佳。'
                }
            ],
            tips: [
                '选择优质腊味，影响整体风味。',
                '米饭不要煮得太烂，要有嚼劲。',
                '锅巴要适度，焦而不糊最好。',
                '咸鸭蛋增加丰富口感层次。',
                '调味汁的比例可根据口味调整。',
                '冬季食用最佳，暖胃驱寒。'
            ],
            nutrition: {
                calories: '380千卡/100g',
                protein: '15g',
                fat: '12g',
                carbs: '55g',
                fiber: '2g',
                sodium: '720mg'
            },
            tags: ['粤菜', '腊味', '煲仔饭', '冬季'],
            createdAt: '2024-01-27T13:00:00Z',
            updatedAt: '2024-01-27T13:00:00Z'
        },
        {
            id: 'recipe_041',
            title: '港式奶茶',
            description: '香港茶餐厅经典，奶香浓郁，茶味醇厚。',
            image: '/cooking-platform/data/imgs/粵菜/港式奶茶.png',
            cuisine: 'cantonese',
            difficulty: 'easy',
            cookTime: '15分钟',
            prepTime: '5分钟',
            servings: '2杯',
            rating: 4.3,
            viewCount: 22100,
            favoriteCount: 4567,
            ingredients: [
                { name: '红茶茶叶', amount: '15g', note: '锡兰红茶或阿萨姆茶' },
                { name: '淡奶', amount: '150ml', note: '港式茶餐厅专用淡奶' },
                { name: '炼乳', amount: '3汤匙', note: '调甜度用' },
                { name: '白砂糖', amount: '2茶匙', note: '可根据个人口味调整' },
                { name: '开水', amount: '500ml', note: '刚烧开的沸水' },
                { name: '冰块', amount: '适量', note: '制作冻奶茶用' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '准备茶叶',
                    content: '选用优质红茶茶叶15克，最好是锡兰红茶或阿萨姆红茶，茶香浓郁。',
                    image: '',
                    tips: '茶叶质量直接影响奶茶的口感，不要吝啬。'
                },
                {
                    step: 2,
                    title: '第一次冲泡',
                    content: '将茶叶放入茶壶，用500ml刚烧开的沸水冲泡，盖上盖子焖3-4分钟。',
                    image: '',
                    tips: '水温要足够高，才能充分提取茶香。'
                },
                {
                    step: 3,
                    title: '撞茶过程',
                    content: '准备两个茶壶，将泡好的茶汤从高处倒入另一个茶壶，反复倒3-4次。',
                    image: '',
                    tips: '撞茶能增加茶汤的香气和口感层次。'
                },
                {
                    step: 4,
                    title: '第二次冲泡',
                    content: '将撞好的茶汤重新倒回茶叶上，再焖2分钟，让茶味更加浓郁。',
                    image: '',
                    tips: '二次冲泡能最大化提取茶叶精华。'
                },
                {
                    step: 5,
                    title: '过滤茶汤',
                    content: '用茶网或纱布过滤茶汤，去除茶叶碎末，得到清澈的茶汤。',
                    image: '',
                    tips: '过滤要彻底，避免茶渣影响口感。'
                },
                {
                    step: 6,
                    title: '调制奶茶',
                    content: '趁热在茶汤中加入淡奶和炼乳，根据口味调整甜度，搅拌均匀。',
                    image: '',
                    tips: '奶茶比例约为7:3(茶:奶)，可按喜好调整。'
                },
                {
                    step: 7,
                    title: '最终调味',
                    content: '品尝后根据个人喜好添加白砂糖调整甜度，搅拌至完全融化即可享用。',
                    image: '',
                    tips: '港式奶茶偏甜，可根据个人口味调整。'
                }
            ],
            tips: [
                '选择优质红茶是关键，直接影响奶茶品质。',
                '撞茶技巧很重要，能让茶香更浓郁。',
                '淡奶比牛奶更香滑，是正宗港式奶茶的必备。',
                '可制作热奶茶或加冰制成冻奶茶。',
                '甜度可根据个人喜好调整。',
                '最好现泡现喝，味道最佳。'
            ],
            nutrition: {
                calories: '180千卡/杯',
                protein: '6g',
                fat: '8g',
                carbs: '22g',
                fiber: '0g',
                sodium: '85mg'
            },
            tags: ['粤菜', '饮品', '奶茶', '港式'],
            createdAt: '2024-01-27T14:00:00Z',
            updatedAt: '2024-01-27T14:00:00Z'
        },
        {
            id: 'recipe_042',
            title: '云吞面',
            description: '广东特色面食，云吞饱满，汤鲜面爽。',
            cuisine: 'cantonese',
            difficulty: 'medium',
            cookTime: '30分钟',
            prepTime: '45分钟',
            servings: '2-3人',
            rating: 4.5,
            viewCount: 16400,
            favoriteCount: 2678,
            ingredients: [
                { name: '云吞皮', amount: '30张', note: '市售或自制' },
                { name: '鲜虾', amount: '200g', note: '大虾，去壳去虾线' },
                { name: '猪肉馅', amount: '150g', note: '肥瘦相间，三七开' },
                { name: '韭黄', amount: '50g', note: '切碎' },
                { name: '生抽', amount: '1汤匙', note: '' },
                { name: '料酒', amount: '1茶匙', note: '' },
                { name: '白胡椒粉', amount: '少许', note: '' },
                { name: '盐', amount: '适量', note: '' },
                { name: '香油', amount: '1茶匙', note: '' },
                { name: '鸡蛋面', amount: '300g', note: '细面条或竹升面' },
                { name: '大骨汤', amount: '800ml', note: '或鸡汤' },
                { name: '小白菜', amount: '100g', note: '洗净切段' },
                { name: '葱花', amount: '适量', note: '装饰用' },
                { name: '韭菜', amount: '适量', note: '切段' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '处理虾肉',
                    content: '鲜虾去壳去虾线，切成小块，一部分切碎，一部分保留小块状，用盐和生粉腌制10分钟。',
                    image: '',
                    tips: '保留部分虾块能增加云吞的口感层次。'
                },
                {
                    step: 2,
                    title: '调制馅料',
                    content: '将猪肉馅与处理好的虾肉混合，加入韭黄碎、生抽、料酒、白胡椒粉、盐、香油，顺一个方向搅拌至起胶。',
                    image: '',
                    tips: '搅拌至起胶状态，云吞口感会更Q弹。'
                },
                {
                    step: 3,
                    title: '包制云吞',
                    content: '取一张云吞皮，放入适量馅料，将云吞皮对折成三角形，再将两个角捏合，包成元宝状。',
                    image: '',
                    tips: '包云吞时手要轻，避免弄破皮子。'
                },
                {
                    step: 4,
                    title: '准备汤底',
                    content: '大骨汤或鸡汤加热至沸腾，调味后保持微沸状态。可加少许生抽和盐调味。',
                    image: '',
                    tips: '汤底要鲜美，是云吞面好吃的关键。'
                },
                {
                    step: 5,
                    title: '煮制云吞',
                    content: '另起一锅水煮沸，下入包好的云吞，煮至云吞浮起后再煮2-3分钟即熟。',
                    image: '',
                    tips: '云吞浮起表示基本熟了，再煮2-3分钟确保完全熟透。'
                },
                {
                    step: 6,
                    title: '煮制面条',
                    content: '鸡蛋面下沸水中煮1-2分钟至软硬适中，捞起沥干水分。',
                    image: '',
                    tips: '面条不要煮得太软，要保持一定嚼劲。'
                },
                {
                    step: 7,
                    title: '焯制青菜',
                    content: '小白菜在沸水中快速焯烫30秒至软身，捞起备用。',
                    image: '',
                    tips: '青菜焯烫时间不要太长，保持翠绿色泽。'
                },
                {
                    step: 8,
                    title: '最终装盘',
                    content: '将面条盛入碗中，放上煮好的云吞和焯好的青菜，倒入热汤，撒上葱花和韭菜段即可。',
                    image: '',
                    tips: '趁热享用，汤鲜面滑云吞嫩。'
                }
            ],
            tips: [
                '选用优质云吞皮，薄而有韧性。',
                '馅料要新鲜，虾肉不要全部切碎。',
                '包云吞手法要轻，避免破皮。',
                '汤底是关键，要用好的高汤。',
                '面条选用鸡蛋面或竹升面最佳。',
                '各个配菜的火候都要掌握好。'
            ],
            nutrition: {
                calories: '280千卡/100g',
                protein: '15g',
                fat: '8g',
                carbs: '35g',
                fiber: '2g',
                sodium: '480mg'
            },
            tags: ['粤菜', '面食', '云吞', '汤面'],
            createdAt: '2024-01-27T15:00:00Z',
            updatedAt: '2024-01-27T15:00:00Z'
        },
        {
            id: 'recipe_043',
            title: '广式早茶',
            description: '粤式茶点拼盘，品种丰富，精致美味。',
            image: '/cooking-platform/data/imgs/粵菜/广式早茶.png',
            cuisine: 'cantonese',
            difficulty: 'hard',
            cookTime: '1小时',
            prepTime: '2小时',
            servings: '6-8人',
            rating: 4.8,
            viewCount: 13700,
            favoriteCount: 2890,
            ingredients: [
                { name: '虾饺皮粉', amount: '200g', note: '澄粉150g+生粉50g' },
                { name: '开水', amount: '250ml', note: '烫面用' },
                { name: '鲜虾仁', amount: '300g', note: '去虾线，切丁' },
                { name: '猪肉馅', amount: '200g', note: '肥瘦相间' },
                { name: '马蹄', amount: '100g', note: '切小丁' },
                { name: '韭黄', amount: '50g', note: '切碎' },
                { name: '面粉', amount: '300g', note: '包叉烧包用' },
                { name: '酵母', amount: '3g', note: '发面用' },
                { name: '叉烧肉', amount: '200g', note: '切丁' },
                { name: '糯米', amount: '200g', note: '做糯米鸡用' },
                { name: '香菇', amount: '6朵', note: '切丁' },
                { name: '腊肠', amount: '100g', note: '切丁' },
                { name: '咸蛋黄', amount: '4个', note: '切半' },
                { name: '荷叶', amount: '4张', note: '包糯米鸡用' },
                { name: '生抽', amount: '3汤匙', note: '' },
                { name: '蚝油', amount: '2汤匙', note: '' },
                { name: '料酒', amount: '2汤匙', note: '' },
                { name: '盐', amount: '适量', note: '' },
                { name: '白糖', amount: '2汤匙', note: '' },
                { name: '胡椒粉', amount: '1茶匙', note: '' },
                { name: '香油', amount: '1汤匙', note: '' },
                { name: '植物油', amount: '适量', note: '' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '制作虾饺',
                    content: '澄粉生粉用开水烫制成团，加少许猪油揉光滑。虾仁调味后包成虾饺，蒸8分钟。',
                    image: '',
                    tips: '虾饺皮要趁热制作，包制时动作要快。'
                },
                {
                    step: 2,
                    title: '制作烧卖',
                    content: '猪肉馅加马蹄丁、韭黄调味，用烧卖皮包成花状，顶部露馅，蒸10分钟。',
                    image: '',
                    tips: '烧卖要包成花朵状，顶部不封口。'
                },
                {
                    step: 3,
                    title: '制作叉烧包',
                    content: '面粉发酵后制成包子皮，叉烧肉切丁调味做馅，包成包子蒸15分钟。',
                    image: '',
                    tips: '叉烧包要发酵充分，皮要白净松软。'
                },
                {
                    step: 4,
                    title: '制作糯米鸡',
                    content: '糯米蒸熟，加腊肠丁、香菇丁、咸蛋黄炒制，用荷叶包成四角形，蒸20分钟。',
                    image: '',
                    tips: '荷叶要先用开水烫软，包制要紧实。'
                },
                {
                    step: 5,
                    title: '制作流沙包',
                    content: '咸蛋黄压碎，加牛奶、奶粉、糖调成流沙馅，用发面皮包制蒸12分钟。',
                    image: '',
                    tips: '流沙馅要调得恰到好处，蒸后会流出金黄汁液。'
                },
                {
                    step: 6,
                    title: '制作凤爪',
                    content: '鸡爪先炸后蒸，用豆豉、蒜蓉调味，蒸25分钟至软烂入味。',
                    image: '',
                    tips: '凤爪要先炸定型再蒸，这样口感更好。'
                },
                {
                    step: 7,
                    title: '精美摆盘',
                    content: '将各种茶点按颜色搭配摆放在蒸笼中，趁热享用。',
                    image: '',
                    tips: '摆盘要美观，体现粤式早茶的精致。'
                }
            ],
            tips: [
                '广式早茶讲究品种丰富，至少要有4-6种点心。',
                '每种点心的制作工艺都不同，需要耐心。',
                '蒸制时间要分别掌握，避免过老或不熟。',
                '选料要精，这是粤式茶点的特色。',
                '摆盘要美观，色彩搭配要协调。',
                '趁热享用是广式早茶的精髓。'
            ],
            nutrition: {
                calories: '280千卡/100g',
                protein: '12g',
                fat: '15g',
                carbs: '28g',
                fiber: '2g',
                sodium: '520mg'
            },
            tags: ['粤菜', '早茶', '点心', '传统'],
            createdAt: '2024-01-29T01:00:00Z',
            updatedAt: '2024-01-29T01:00:00Z'
        },
        {
            id: 'recipe_044',
            title: '姜葱白切鸡',
            description: '粤菜经典，做法简单，原汁原味。',
            image: '/cooking-platform/data/imgs/粵菜/姜葱白切鸡.png',
            cuisine: 'cantonese',
            difficulty: 'easy',
            cookTime: '25分钟',
            prepTime: '10分钟',
            servings: '3-4人',
            rating: 4.6,
            viewCount: 11500,
            favoriteCount: 1890,
            ingredients: [
                { name: '土鸡', amount: '1只(约1.2kg)', note: '新鲜土鸡' },
                { name: '生姜', amount: '100g', note: '一半切片，一半切蓉' },
                { name: '大葱白', amount: '100g', note: '切丝' },
                { name: '香葱', amount: '50g', note: '切段' },
                { name: '料酒', amount: '3汤匙', note: '' },
                { name: '盐', amount: '2茶匙', note: '煮鸡和调料用' },
                { name: '生抽', amount: '4汤匙', note: '调蘸料' },
                { name: '香油', amount: '2汤匙', note: '调蘸料' },
                { name: '白糖', amount: '1茶匙', note: '调蘸料' },
                { name: '植物油', amount: '3汤匙', note: '制作蘸料' },
                { name: '冰块', amount: '适量', note: '过冰用' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '处理土鸡',
                    content: '土鸡洗净，去除内脏杂物，用盐里外擦遍腌制20分钟。',
                    image: '',
                    tips: '选择1年左右的土鸡，肉质最鲜嫩。'
                },
                {
                    step: 2,
                    title: '煮制白切鸡',
                    content: '锅内加水，放姜片、葱段、料酒，水开后下整只鸡，用中小火煮20分钟。',
                    image: '',
                    tips: '水不要大沸，保持微开状态，这样鸡皮不会破。'
                },
                {
                    step: 3,
                    title: '过冰定型',
                    content: '煮好的鸡立即放入冰水中浸泡10分钟，让鸡皮收缩变脆。',
                    image: '',
                    tips: '冰镇是白切鸡皮脆的关键步骤。'
                },
                {
                    step: 4,
                    title: '制作姜葱蓉',
                    content: '姜蓉、葱蓉加盐混合，热油烧至冒烟，冲入姜葱蓉中激发香味。',
                    image: '',
                    tips: '热油冲姜葱蓉能最大化激发香味。'
                },
                {
                    step: 5,
                    title: '调制蘸料',
                    content: '生抽、糖、香油调匀，与姜葱蓉分别装盘做蘸料。',
                    image: '',
                    tips: '蘸料要调得咸甜适中，突出鸡肉本味。'
                },
                {
                    step: 6,
                    title: '切块装盘',
                    content: '鸡肉晾凉后剁成块，按原型摆盘，配姜葱蘸料上桌。',
                    image: '',
                    tips: '切块要整齐，摆盘要美观，体现粤菜精致。'
                }
            ],
            tips: [
                '选择优质土鸡是关键，决定口感。',
                '煮制时水温控制很重要，不能大沸。',
                '冰镇步骤不可省略，是皮脆的秘诀。',
                '姜葱蘸料是白切鸡的精华搭配。',
                '这道菜体现了粤菜清淡本味的特色。',
                '要趁制作完成后尽快享用。'
            ],
            nutrition: {
                calories: '165千卡/100g',
                protein: '25g',
                fat: '6g',
                carbs: '2g',
                fiber: '0g',
                sodium: '380mg'
            },
            tags: ['粤菜', '鸡肉', '清淡', '简单'],
            createdAt: '2024-01-29T02:00:00Z',
            updatedAt: '2024-01-29T02:00:00Z'
        },
        {
            id: 'recipe_045',
            title: '蚝油生菜',
            description: '粤菜素食，生菜鲜嫩，蚝油香浓。',
            image: '/cooking-platform/data/imgs/粵菜/蚝油生菜.png',
            cuisine: 'cantonese',
            difficulty: 'easy',
            cookTime: '5分钟',
            prepTime: '5分钟',
            servings: '2-3人',
            rating: 4.2,
            viewCount: 19800,
            favoriteCount: 3456,
            ingredients: [
                { name: '生菜', amount: '500g', note: '新鲜嫩生菜' },
                { name: '蚝油', amount: '3汤匙', note: '优质蚝油' },
                { name: '大蒜', amount: '4瓣', note: '切末' },
                { name: '生抽', amount: '1汤匙', note: '' },
                { name: '白糖', amount: '1茶匙', note: '提鲜' },
                { name: '淀粉', amount: '1茶匙', note: '勾芡用' },
                { name: '植物油', amount: '2汤匙', note: '' },
                { name: '香油', amount: '几滴', note: '提香' },
                { name: '盐', amount: '适量', note: '焯菜用' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '准备生菜',
                    content: '生菜洗净，掰成大片，沥干水分，准备蒜末。',
                    image: '',
                    tips: '生菜要选择新鲜脆嫩的，洗净沥干很重要。'
                },
                {
                    step: 2,
                    title: '调制蚝油汁',
                    content: '蚝油、生抽、糖、少许水和淀粉调成蚝油汁备用。',
                    image: '',
                    tips: '蚝油汁要调得咸甜适中，略带粘稠。'
                },
                {
                    step: 3,
                    title: '焯水生菜',
                    content: '锅内水开后加少许盐和油，下生菜快速焯烫30秒至软身。',
                    image: '',
                    tips: '焯水时间要短，保持生菜的脆嫩和翠绿。'
                },
                {
                    step: 4,
                    title: '沥水装盘',
                    content: '焯好的生菜捞起沥干水分，整齐地码放在盘中。',
                    image: '',
                    tips: '要沥净水分，避免稀释蚝油汁。'
                },
                {
                    step: 5,
                    title: '爆香蒜蓉',
                    content: '热锅下油，爆香蒜末，倒入调好的蚝油汁煮至微沸。',
                    image: '',
                    tips: '蒜要爆至微黄出香，但不能炒糊。'
                },
                {
                    step: 6,
                    title: '浇汁装盘',
                    content: '将蚝油汁趁热浇在生菜上，滴几滴香油即可上桌。',
                    image: '',
                    tips: '要趁热浇汁，这样生菜能更好地吸收蚝油香味。'
                }
            ],
            tips: [
                '选择新鲜脆嫩的生菜是基础。',
                '焯水时间要短，保持生菜脆嫩。',
                '蚝油要选择优质的，影响整体味道。',
                '爆香蒜蓉不能过火，避免发苦。',
                '这道菜制作简单，但要掌握好时间。',
                '是粤菜中经典的素食快手菜。'
            ],
            nutrition: {
                calories: '45千卡/100g',
                protein: '2g',
                fat: '3g',
                carbs: '4g',
                fiber: '2g',
                sodium: '420mg'
            },
            tags: ['粤菜', '素食', '快手', '清淡'],
            createdAt: '2024-01-29T03:00:00Z',
            updatedAt: '2024-01-29T03:00:00Z'
        },
        // 湘菜扩展
        {
            id: 'recipe_046',
            title: '剁椒鱼头',
            description: '湖南名菜，鱼肉鲜嫩，剁椒香辣。',
            cuisine: 'hunan',
            difficulty: 'medium',
            cookTime: '30分钟',
            prepTime: '20分钟',
            servings: '3-4人',
            rating: 4.8,
            viewCount: 18200,
            favoriteCount: 3567,
            ingredients: [
                { name: '鱼头', amount: '1个', note: '大头鱼或草鱼头，约800g' },
                { name: '剁椒', amount: '100g', note: '湖南剁椒' },
                { name: '生姜', amount: '1块', note: '切丝' },
                { name: '大蒜', amount: '5瓣', note: '切末' },
                { name: '大葱', amount: '2根', note: '切段' },
                { name: '料酒', amount: '3汤勺', note: '' },
                { name: '生抽', amount: '2汤勺', note: '' },
                { name: '蒸鱼豉油', amount: '2汤勺', note: '' },
                { name: '白糖', amount: '1茶勺', note: '' },
                { name: '盐', amount: '1茶勺', note: '' },
                { name: '植物油', amount: '3汤勺', note: '' },
                { name: '香葱', amount: '2根', note: '切葱花' },
                { name: '香菜', amount: '2根', note: '切段，装饰用' }
            ],
            steps: [
                { step: 1, instruction: '鱼头洗净对半剖开，用料酒和盐腌制15分钟。', time: '15分钟' },
                { step: 2, instruction: '鱼头摆盘，在切面上铺满剁椒。', time: '3分钟' },
                { step: 3, instruction: '热锅下油，爆炒蒜末和姜丝出香味。', time: '2分钟' },
                { step: 4, instruction: '将炒香的蒜姜连油一起淋在剁椒上。', time: '1分钟' },
                { step: 5, instruction: '蒸锅水开后放入鱼头，大火蒸15分钟。', time: '15分钟' },
                { step: 6, instruction: '出锅淋蒸鱼豉油，撒葱花和香菜即可。', time: '2分钟' }
            ],
            tips: [
                '鱼头要选择新鲜的，眼睛清亮。',
                '剁椒的用量可根据个人喜好调整。',
                '蒸制时间不要太长，保持鱼肉嫩滑。',
                '最后的蒸鱼豉油提升整体鲜味。'
            ],
            nutrition: { calories: '125千卡/100g', protein: '18g', fat: '5g', carbs: '3g', fiber: '1g', sodium: '520mg' },
            tags: ['湘菜', '鱼类', '辣椒', '蒸菜'],
            createdAt: '2024-01-26T09:00:00Z',
            updatedAt: '2024-01-26T09:00:00Z'
        },
        {
            id: 'recipe_047',
            title: '口味虾',
            description: '长沙特色，麻辣鲜香，虾肉Q弹。',
            cuisine: 'hunan',
            difficulty: 'medium',
            cookTime: '20分钟',
            prepTime: '15分钟',
            servings: '2-3人',
            rating: 4.7,
            viewCount: 22100,
            favoriteCount: 4123,
            ingredients: [
                { name: '小龙虾', amount: '500g', note: '或基围虾' },
                { name: '干辣椒', amount: '20个', note: '掰段去籽' },
                { name: '花椒', amount: '1汤勺', note: '' },
                { name: '生姜', amount: '1块', note: '切片' },
                { name: '大蒜', amount: '6瓣', note: '切片' },
                { name: '大葱', amount: '2根', note: '切段' },
                { name: '剁椒', amount: '2汤勺', note: '湖南剁椒' },
                { name: '生抽', amount: '2汤勺', note: '' },
                { name: '老抽', amount: '1茶勺', note: '调色' },
                { name: '料酒', amount: '2汤勺', note: '' },
                { name: '白糖', amount: '1汤勺', note: '' },
                { name: '盐', amount: '1茶勺', note: '' },
                { name: '鸡精', amount: '1茶勺', note: '' },
                { name: '香葱', amount: '2根', note: '切段' },
                { name: '植物油', amount: '适量', note: '爆炒用' }
            ],
            steps: [
                { step: 1, instruction: '虾洗净去虾线，用料酒和盐腌制10分钟。', time: '10分钟' },
                { step: 2, instruction: '热锅下油，爆炒干辣椒和花椒出香味。', time: '2分钟' },
                { step: 3, instruction: '下姜蒜片炒香，再加入剁椒炒出红油。', time: '3分钟' },
                { step: 4, instruction: '下虾大火爆炒至变色。', time: '3分钟' },
                { step: 5, instruction: '调入生抽、老抽、糖、盐、鸡精炒匀。', time: '5分钟' },
                { step: 6, instruction: '撒入葱段炒匀即可出锅。', time: '2分钟' }
            ],
            tips: [
                '虾要选择新鲜的，处理干净虾线。',
                '大火爆炒是关键，保持虾肉Q弹。',
                '剁椒的香辣味是这道菜的精髓。',
                '最后撒葱段增加香味和色彩。'
            ],
            nutrition: { calories: '135千卡/100g', protein: '20g', fat: '5g', carbs: '4g', fiber: '1g', sodium: '580mg' },
            tags: ['湘菜', '海鲜', '麻辣', '夜宵'],
            createdAt: '2024-01-26T10:00:00Z',
            updatedAt: '2024-01-26T10:00:00Z'
        },
        {
            id: 'recipe_048',
            title: '湘式腊肉炒饭',
            description: '湖南特色炒饭，腊肉香浓，米饭粒粒分明。',
            cuisine: 'hunan',
            difficulty: 'easy',
            cookTime: '15分钟',
            prepTime: '10分钟',
            servings: '2人',
            rating: 4.4,
            viewCount: 15600,
            favoriteCount: 2345,
            ingredients: [
                { name: '米饭', amount: '2碗', note: '隔夜米饭最佳' },
                { name: '湖南腊肉', amount: '100g', note: '切丁' },
                { name: '鸡蛋', amount: '2个', note: '打散' },
                { name: '韭菜', amount: '50g', note: '切段' },
                { name: '胡萝卜', amount: '半根', note: '切丁' },
                { name: '豌豆', amount: '50g', note: '可选' },
                { name: '大蒜', amount: '3瓣', note: '切末' },
                { name: '生姜', amount: '2片', note: '切末' },
                { name: '生抽', amount: '2汤勺', note: '' },
                { name: '老抽', amount: '1茶勺', note: '调色' },
                { name: '盐', amount: '适量', note: '' },
                { name: '胡椒粉', amount: '少许', note: '' },
                { name: '香葱', amount: '1根', note: '切花' },
                { name: '植物油', amount: '3汤勺', note: '' }
            ],
            steps: [
                { step: 1, instruction: '腊肉先蒸5分钟软化，然后切丁。', time: '8分钟' },
                { step: 2, instruction: '热锅下少量油，炒散鸡蛋盛起备用。', time: '2分钟' },
                { step: 3, instruction: '锅内下腊肉丁煸炒出油，下姜蒜末炒香。', time: '3分钟' },
                { step: 4, instruction: '下米饭大火炒散，炒至粒粒分明。', time: '5分钟' },
                { step: 5, instruction: '加胡萝卜丁、豌豆炒匀，调味。', time: '3分钟' },
                { step: 6, instruction: '最后下韭菜段和鸡蛋炒匀，撒葱花即可。', time: '2分钟' }
            ],
            tips: [
                '隔夜米饭水分少，炒出来更香。',
                '腊肉要先蒸软再切，这样不会太硬。',
                '大火炒制，动作要快，保持米粒分明。',
                '韭菜最后下锅，保持翠绿色泽。'
            ],
            nutrition: { calories: '285千卡/100g', protein: '12g', fat: '10g', carbs: '38g', fiber: '2g', sodium: '620mg' },
            tags: ['湘菜', '炒饭', '腊肉', '主食'],
            createdAt: '2024-01-26T11:00:00Z',
            updatedAt: '2024-01-26T11:00:00Z'
        },
        {
            id: 'recipe_049',
            title: '臭豆腐',
            description: '长沙名小吃，外焦内嫩，味道独特。',
            cuisine: 'hunan',
            difficulty: 'medium',
            cookTime: '25分钟',
            prepTime: '10分钟',
            servings: '2人',
            rating: 4.3,
            viewCount: 11200,
            favoriteCount: 1789,
            ingredients: [
                { name: '臭豆腐', amount: '8块', note: '长沙黑色臭豆腐' },
                { name: '韭菜', amount: '50g', note: '切段' },
                { name: '香菜', amount: '30g', note: '切段' },
                { name: '蒜泥', amount: '3瓣', note: '' },
                { name: '生抽', amount: '2汤勺', note: '' },
                { name: '香醋', amount: '1汤勺', note: '' },
                { name: '剁椒', amount: '2汤勺', note: '湖南剁椒' },
                { name: '白糖', amount: '1茶勺', note: '' },
                { name: '鸡精', amount: '1茶勺', note: '' },
                { name: '花椒粉', amount: '少许', note: '' },
                { name: '香葱', amount: '2根', note: '切花' },
                { name: '植物油', amount: '300ml', note: '炸制用' }
            ],
            steps: [
                { step: 1, instruction: '臭豆腐冲洗表面，沥干水分。', time: '3分钟' },
                { step: 2, instruction: '调制蘸料：蒜泥、生抽、醋、剁椒、糖、鸡精、花椒粉混合。', time: '5分钟' },
                { step: 3, instruction: '热油至六成热，下臭豆腐炸至外表金黄。', time: '8分钟' },
                { step: 4, instruction: '炸好的臭豆腐用筷子戳几个洞。', time: '1分钟' },
                { step: 5, instruction: '淋上调好的蘸料，撒韭菜段和香菜段。', time: '2分钟' },
                { step: 6, instruction: '最后撒葱花即可享用。', time: '1分钟' }
            ],
            tips: [
                '臭豆腐要选择正宗的长沙黑色臭豆腐。',
                '炸制时油温不要太高，避免外糊内生。',
                '戳洞是为了让蘸料更好地渗入。',
                '蘸料的搭配是臭豆腐好吃的关键。'
            ],
            nutrition: { calories: '165千卡/100g', protein: '8g', fat: '12g', carbs: '8g', fiber: '2g', sodium: '580mg' },
            tags: ['湘菜', '小吃', '豆腐', '特色'],
            createdAt: '2024-01-26T12:00:00Z',
            updatedAt: '2024-01-26T12:00:00Z'
        },
        {
            id: 'recipe_050',
            title: '湘式红烧肉',
            description: '湖南特色红烧肉，肥而不腻，香甜可口。',
            cuisine: 'hunan',
            difficulty: 'medium',
            cookTime: '1小时',
            prepTime: '15分钟',
            servings: '4-5人',
            rating: 4.6,
            viewCount: 17800,
            favoriteCount: 3234,
            ingredients: [
                { name: '五花肉', amount: '800g', note: '切成3cm见方的块' },
                { name: '冰糖', amount: '50g', note: '炒糖色用' },
                { name: '生抽', amount: '3汤勺', note: '' },
                { name: '老抽', amount: '2汤勺', note: '调色' },
                { name: '料酒', amount: '3汤勺', note: '' },
                { name: '生姜', amount: '1块', note: '切片' },
                { name: '大葱', amount: '2根', note: '切段' },
                { name: '八角', amount: '2个', note: '' },
                { name: '桂皮', amount: '1小段', note: '' },
                { name: '香叶', amount: '2片', note: '' },
                { name: '剁椒', amount: '1汤勺', note: '湖南特色，可选' },
                { name: '盐', amount: '1茶勺', note: '' },
                { name: '植物油', amount: '2汤勺', note: '' }
            ],
            steps: [
                { step: 1, instruction: '五花肉冷水下锅焯水5分钟，捞出洗净。', time: '8分钟' },
                { step: 2, instruction: '锅内放冰糖小火炒至焦糖色。', time: '5分钟' },
                { step: 3, instruction: '下五花肉块炒至上色。', time: '5分钟' },
                { step: 4, instruction: '加料酒、生抽、老抽、姜片、葱段、香料炒匀。', time: '3分钟' },
                { step: 5, instruction: '加开水没过肉块，大火烧开转小火炖45分钟。', time: '45分钟' },
                { step: 6, instruction: '最后大火收汁，调入剁椒和盐即可。', time: '8分钟' }
            ],
            tips: [
                '炒糖色是关键，要小火慢炒至焦糖色。',
                '焯水能去除肉腥味，让成品更香。',
                '炖制时要小火慢炖，让肉质软烂。',
                '湖南红烧肉的特色是加入剁椒提味。'
            ],
            nutrition: { calories: '320千卡/100g', protein: '15g', fat: '28g', carbs: '6g', fiber: '0.5g', sodium: '480mg' },
            tags: ['湘菜', '红烧', '猪肉', '下饭'],
            createdAt: '2024-01-26T13:00:00Z',
            updatedAt: '2024-01-26T13:00:00Z'
        },
        {
            id: 'recipe_051',
            title: '湘式小炒肉',
            description: '家常湘菜，肉嫩菜脆，辣味适中。',
            cuisine: 'hunan',
            difficulty: 'easy',
            cookTime: '12分钟',
            prepTime: '10分钟',
            servings: '2-3人',
            rating: 4.5,
            viewCount: 24500,
            favoriteCount: 4567,
            ingredients: [
                { name: '五花肉', amount: '300g', note: '切片' },
                { name: '青椒', amount: '3个', note: '切块' },
                { name: '红椒', amount: '1个', note: '切块，配色' },
                { name: '洋葱', amount: '半个', note: '切块' },
                { name: '干辣椒', amount: '5个', note: '掰段' },
                { name: '生姜', amount: '3片', note: '切丝' },
                { name: '大蒜', amount: '3瓣', note: '切片' },
                { name: '豆豉', amount: '1汤勺', note: '湖南特色' },
                { name: '生抽', amount: '2汤勺', note: '' },
                { name: '老抽', amount: '1茶勺', note: '调色' },
                { name: '料酒', amount: '1汤勺', note: '' },
                { name: '盐', amount: '1茶勺', note: '' },
                { name: '白糖', amount: '1茶勺', note: '' },
                { name: '植物油', amount: '3汤勺', note: '' }
            ],
            steps: [
                { step: 1, instruction: '五花肉片用料酒和生抽腌制5分钟。', time: '5分钟' },
                { step: 2, instruction: '热锅不放油，下肉片煸炒出油。', time: '3分钟' },
                { step: 3, instruction: '下干辣椒、豆豉、姜蒜爆香。', time: '1分钟' },
                { step: 4, instruction: '下青红椒块和洋葱大火炒制。', time: '3分钟' },
                { step: 5, instruction: '调入老抽、盐、糖炒匀上色。', time: '2分钟' },
                { step: 6, instruction: '大火炒至断生即可出锅。', time: '1分钟' }
            ],
            tips: [
                '五花肉要先煸出油脂，这样不腥腻。',
                '青椒要保持脆嫩，不要炒太久。',
                '豆豉是湘菜小炒肉的特色调料。',
                '全程大火爆炒，动作要快。'
            ],
            nutrition: { calories: '245千卡/100g', protein: '18g', fat: '18g', carbs: '6g', fiber: '2g', sodium: '520mg' },
            tags: ['湘菜', '家常', '小炒', '下饭'],
            createdAt: '2024-01-26T14:00:00Z',
            updatedAt: '2024-01-26T14:00:00Z'
        },
        {
            id: 'recipe_052',
            title: '湘式酸萝卜',
            description: '湖南泡菜，酸辣开胃，爽脆可口。',
            cuisine: 'hunan',
            difficulty: 'easy',
            cookTime: '5分钟',
            prepTime: '15分钟',
            servings: '4-5人',
            rating: 4.2,
            viewCount: 9800,
            favoriteCount: 1456,
            ingredients: [
                { name: '白萝卜', amount: '500g', note: '选择新鲜脆嫩的' },
                { name: '胡萝卜', amount: '1根', note: '增加色彩' },
                { name: '白醋', amount: '4汤勺', note: '' },
                { name: '白糖', amount: '3汤勺', note: '' },
                { name: '盐', amount: '2茶勺', note: '' },
                { name: '剁椒', amount: '1汤勺', note: '湖南剁椒' },
                { name: '生姜', amount: '3片', note: '切丝' },
                { name: '大蒜', amount: '2瓣', note: '切片' },
                { name: '干辣椒', amount: '3个', note: '掰段' },
                { name: '花椒', amount: '10粒', note: '' },
                { name: '香葱', amount: '1根', note: '切花' }
            ],
            steps: [
                { step: 1, instruction: '白萝卜和胡萝卜洗净，切成细条。', time: '8分钟' },
                { step: 2, instruction: '萝卜条用盐腌制10分钟，挤去水分。', time: '10分钟' },
                { step: 3, instruction: '调制酸辣汁：醋、糖、剁椒混合调匀。', time: '3分钟' },
                { step: 4, instruction: '热锅下少量油，爆炒姜蒜丝和干辣椒花椒。', time: '2分钟' },
                { step: 5, instruction: '将炒香的料油淋在萝卜条上。', time: '1分钟' },
                { step: 6, instruction: '倒入酸辣汁拌匀，撒葱花即可。', time: '1分钟' }
            ],
            tips: [
                '萝卜要选择新鲜脆嫩的，口感更好。',
                '腌制后一定要挤干水分，避免稀释味道。',
                '酸甜比例可根据个人喜好调整。',
                '现拌现吃最爽脆，也可腌制几小时更入味。'
            ],
            nutrition: { calories: '45千卡/100g', protein: '1g', fat: '1g', carbs: '10g', fiber: '3g', sodium: '320mg' },
            tags: ['湘菜', '泡菜', '开胃', '素食'],
            createdAt: '2024-01-26T15:00:00Z',
            updatedAt: '2024-01-26T15:00:00Z'
        },
        {
            id: 'recipe_053',
            title: '湘式蒸蛋',
            description: '湖南家常菜，嫩滑香甜，营养丰富。',
            cuisine: 'hunan',
            difficulty: 'easy',
            cookTime: '15分钟',
            prepTime: '8分钟',
            servings: '2人',
            rating: 4.3,
            viewCount: 8900,
            favoriteCount: 1234,
            ingredients: [
                { name: '鸡蛋', amount: '3个', note: '新鲜鸡蛋' },
                { name: '温水', amount: '160ml', note: '约40度' },
                { name: '盐', amount: '1/2茶勺', note: '' },
                { name: '生抽', amount: '1茶勺', note: '' },
                { name: '香油', amount: '几滴', note: '' },
                { name: '香葱', amount: '1根', note: '切葱花' },
                { name: '肉丝', amount: '50g', note: '可选' },
                { name: '虫草花', amount: '2朵', note: '可选，切丁' }
            ],
            steps: [
                { step: 1, instruction: '鸡蛋打散，加温水、盐、生抽搅拌均匀。', time: '3分钟' },
                { step: 2, instruction: '过筛去除泡沫，倒入蒸碗中。', time: '2分钟' },
                { step: 3, instruction: '如加配菜，此时加入肉丝、虫草花丁。', time: '1分钟' },
                { step: 4, instruction: '用保鲜膜封口，蒸锅水开后中火蒸10分钟。', time: '10分钟' },
                { step: 5, instruction: '蒸好后焖2分钟再开盖。', time: '2分钟' },
                { step: 6, instruction: '淋香油，撒葱花即可。', time: '1分钟' }
            ],
            tips: [
                '湘式蒸蛋可加入少量肉丝增加鲜味。',
                '蒸制时要盖保鲜膜，避免水蒸气滴入。',
                '中火蒸制，火候太大容易有蜂窝。',
                '可加入虫草花或香菇提鲜。'
            ],
            nutrition: { calories: '85千卡/100g', protein: '8g', fat: '5g', carbs: '3g', fiber: '0g', sodium: '200mg' },
            tags: ['湘菜', '蒸菜', '鸡蛋', '营养'],
            createdAt: '2024-01-26T16:00:00Z',
            updatedAt: '2024-01-26T16:00:00Z'
        },
        {
            id: 'recipe_054',
            title: '糖油粑粑',
            description: '长沙特色小吃，外酥内糯，甜香可口。',
            cuisine: 'hunan',
            difficulty: 'easy',
            cookTime: '20分钟',
            prepTime: '15分钟',
            servings: '3-4人',
            rating: 4.4,
            viewCount: 13400,
            favoriteCount: 2345,
            ingredients: [
                { name: '糯米粉', amount: '200g', note: '' },
                { name: '红糖', amount: '100g', note: '打成粉末' },
                { name: '温水', amount: '120ml', note: '' },
                { name: '植物油', amount: '3汤勺', note: '煎制用' },
                { name: '白芝麻', amount: '2汤勺', note: '熟芝麻' }
            ],
            steps: [
                { step: 1, instruction: '糯米粉加温水和成光滑面团。', time: '10分钟' },
                { step: 2, instruction: '将面团搓成小圆子，压成小饼。', time: '8分钟' },
                { step: 3, instruction: '平底锅刷油，下粑粑煎至两面金黄。', time: '6分钟' },
                { step: 4, instruction: '加入红糖粉和少量水炒化。', time: '3分钟' },
                { step: 5, instruction: '用小火慢炖至粑粑软糯，糖汁浓稠。', time: '8分钟' },
                { step: 6, instruction: '撒上芝麻即可出锅。', time: '1分钟' }
            ],
            tips: [
                '面团要和得软硬适中，太硬了口感不好。',
                '煎制时用小火，避免糖汁糊底。',
                '红糖要充分炒化，让粑粑吸收甜味。',
                '趁热享用口感最佳，外酥内糯。'
            ],
            nutrition: { calories: '185千卡/100g', protein: '2g', fat: '6g', carbs: '32g', fiber: '1g', sodium: '10mg' },
            tags: ['湘菜', '小吃', '甜品', '传统'],
            createdAt: '2024-01-26T17:00:00Z',
            updatedAt: '2024-01-26T17:00:00Z'
        },
        {
            id: 'recipe_055',
            title: '湘式血鸭',
            description: '湖南特色菜，鸭肉鲜美，做法独特。',
            cuisine: 'hunan',
            difficulty: 'hard',
            cookTime: '45分钟',
            prepTime: '20分钟',
            servings: '4-5人',
            rating: 4.7,
            viewCount: 7600,
            favoriteCount: 1567,
            ingredients: [
                { name: '鸭子', amount: '1只', note: '约1.5kg' },
                { name: '鸭血', amount: '200ml', note: '新鲜鸭血' },
                { name: '干辣椒', amount: '15个', note: '掰段' },
                { name: '生姜', amount: '1块', note: '切片' },
                { name: '大蒜', amount: '5瓣', note: '拍碎' },
                { name: '豆豉', amount: '1汤勺', note: '湖南特色' },
                { name: '生抽', amount: '3汤勺', note: '' },
                { name: '老抽', amount: '1汤勺', note: '调色' },
                { name: '料酒', amount: '3汤勺', note: '' },
                { name: '盐', amount: '适量', note: '' },
                { name: '白糖', amount: '1茶勺', note: '' },
                { name: '植物油', amount: '适量', note: '' }
            ],
            steps: [
                { step: 1, instruction: '鸭子切块，用料酒和盐腌制10分钟。', time: '15分钟' },
                { step: 2, instruction: '热锅下油，爆炒鸭块至出油。', time: '8分钟' },
                { step: 3, instruction: '下辣椒、豆豉、姜蒜爆香。', time: '3分钟' },
                { step: 4, instruction: '调入生抽、老抽、糖炒匀。', time: '3分钟' },
                { step: 5, instruction: '加水焖煮15分钟至鸭肉软烂。', time: '15分钟' },
                { step: 6, instruction: '最后淋入鸭血煮2分钟即可。', time: '3分钟' }
            ],
            tips: [
                '鸭血要新鲜，最后下锅，煮太久会老。',
                '豆豉是湘式血鸭的特色调料。',
                '鸭块要先爆炒出油，去除腥味。',
                '最后的收汁要留一些汤汁拌饭。'
            ],
            nutrition: { calories: '220千卡/100g', protein: '18g', fat: '15g', carbs: '4g', fiber: '0.5g', sodium: '520mg' },
            tags: ['湘菜', '鸭肉', '特色', '传统'],
            createdAt: '2024-01-26T18:00:00Z',
            updatedAt: '2024-01-26T18:00:00Z'
        },
        {
            id: 'recipe_056',
            title: '湘式干锅花菜',
            description: '湖南干锅菜，花菜爽脆，味道香辣。',
            cuisine: 'hunan',
            difficulty: 'easy',
            cookTime: '18分钟',
            prepTime: '10分钟',
            servings: '2-3人',
            rating: 4.4,
            viewCount: 16200,
            favoriteCount: 2678,
            ingredients: [
                { name: '花菜', amount: '1个', note: '约500g，掰成小朵' },
                { name: '五花肉', amount: '100g', note: '切片' },
                { name: '干辣椒', amount: '8个', note: '掰段' },
                { name: '生姜', amount: '3片', note: '切丝' },
                { name: '大蒜', amount: '3瓣', note: '切片' },
                { name: '豆豉', amount: '1汤勺', note: '' },
                { name: '生抽', amount: '2汤勺', note: '' },
                { name: '老抽', amount: '1茶勺', note: '调色' },
                { name: '料酒', amount: '1汤勺', note: '' },
                { name: '盐', amount: '1茶勺', note: '' },
                { name: '鸡精', amount: '1茶勺', note: '' },
                { name: '植物油', amount: '3汤勺', note: '' }
            ],
            steps: [
                { step: 1, instruction: '花菜洗净掰成小朵，汽水焯至2分钟。', time: '5分钟' },
                { step: 2, instruction: '热锅下油，煸炒五花肉片出油。', time: '3分钟' },
                { step: 3, instruction: '下干辣椒、豆豉、姜蒜爆香。', time: '2分钟' },
                { step: 4, instruction: '下花菜大火爆炒。', time: '5分钟' },
                { step: 5, instruction: '调入生抽、老抽、料酒、盐、鸡精。', time: '2分钟' },
                { step: 6, instruction: '继续大火爆炒至断生即可。', time: '3分钟' }
            ],
            tips: [
                '花菜要先焯水，去除生涩味。',
                '全程大火爆炒，保持花菜脆嫩。',
                '五花肉片要先煸出油脂。',
                '豆豉是湘式干锅的特色调料。'
            ],
            nutrition: { calories: '95千卡/100g', protein: '5g', fat: '6g', carbs: '8g', fiber: '3g', sodium: '420mg' },
            tags: ['湘菜', '干锅', '素食', '香辣'],
            createdAt: '2024-01-26T19:00:00Z',
            updatedAt: '2024-01-26T19:00:00Z'
        },
        {
            id: 'recipe_057',
            title: '湘式炸臭豆腐',
            description: '长沙街头小吃，外酥内嫩，配料丰富。',
            cuisine: 'hunan',
            difficulty: 'medium',
            cookTime: '20分钟',
            prepTime: '10分钟',
            servings: '2人',
            rating: 4.3,
            viewCount: 12700,
            favoriteCount: 1890,
            ingredients: [
                { name: '臭豆腐', amount: '10块', note: '长沙黑色臭豆腐' },
                { name: '韭菜', amount: '80g', note: '切段' },
                { name: '香菜', amount: '50g', note: '切段' },
                { name: '蒜泥', amount: '5瓣', note: '' },
                { name: '生抽', amount: '3汤勺', note: '' },
                { name: '香醋', amount: '2汤勺', note: '' },
                { name: '剁椒', amount: '3汤勺', note: '湖南剁椒' },
                { name: '白糖', amount: '2茶勺', note: '' },
                { name: '鸡精', amount: '1茶勺', note: '' },
                { name: '花椒粉', amount: '少许', note: '' },
                { name: '植物油', amount: '400ml', note: '炸制用' }
            ],
            steps: [
                { step: 1, instruction: '臭豆腐冲洗表面，沥干水分。', time: '3分钟' },
                { step: 2, instruction: '调制蘸料：蒜泥、生抽、醋、剁椒、糖、鸡精、花椒粉混合。', time: '5分钟' },
                { step: 3, instruction: '热油至六成热，下臭豆腐炸至外表金黄。', time: '8分钟' },
                { step: 4, instruction: '炸好的臭豆腐用筷子戳几个洞。', time: '1分钟' },
                { step: 5, instruction: '淋上调好的蘸料，撒韭菜段和香菜段。', time: '2分钟' },
                { step: 6, instruction: '最后撒葱花即可享用。', time: '1分钟' }
            ],
            tips: [
                '臭豆腐要选择正宗的长沙黑色臭豆腐。',
                '炸制时油温不要太高，避免外糊内生。',
                '戳洞是为了让蘸料更好地渗入。',
                '蘸料的搭配是臭豆腐好吃的关键。'
            ],
            nutrition: { calories: '175千卡/100g', protein: '9g', fat: '13g', carbs: '9g', fiber: '3g', sodium: '620mg' },
            tags: ['湘菜', '小吃', '油炸', '特色'],
            createdAt: '2024-01-26T20:00:00Z',
            updatedAt: '2024-01-26T20:00:00Z'
        },
        // 更多鲁菜
        {
            id: 'recipe_058',
            title: '九转大肠',
            description: '济南名菜，酸甜咸辣香五味俱全。',
            image: '/cooking-platform/data/imgs/鲁菜/九转大肠.png',
            cuisine: 'shandong',
            difficulty: 'hard',
            cookTime: '1小时',
            prepTime: '30分钟',
            servings: '4-5人',
            rating: 4.8,
            viewCount: 8900,
            favoriteCount: 1456,
            ingredients: [
                { name: '猪大肠', amount: '1kg', note: '新鲜大肠，处理干净' },
                { name: '白糖', amount: '80g', note: '炒糖色用' },
                { name: '生抽', amount: '4汤匙', note: '' },
                { name: '老抽', amount: '2汤匙', note: '上色用' },
                { name: '料酒', amount: '3汤匙', note: '' },
                { name: '香醋', amount: '2汤匙', note: '山西老陈醋' },
                { name: '盐', amount: '适量', note: '' },
                { name: '味精', amount: '1茶匙', note: '' },
                { name: '胡椒粉', amount: '1茶匙', note: '白胡椒粉' },
                { name: '桂皮', amount: '1段', note: '' },
                { name: '八角', amount: '3个', note: '' },
                { name: '花椒', amount: '1汤匙', note: '' },
                { name: '干辣椒', amount: '5个', note: '切段' },
                { name: '大葱', amount: '3段', note: '切段' },
                { name: '生姜', amount: '1块', note: '切片' },
                { name: '蒜瓣', amount: '5瓣', note: '拍碎' },
                { name: '淀粉', amount: '2汤匙', note: '勾芡用' },
                { name: '植物油', amount: '适量', note: '' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '处理大肠',
                    content: '大肠反复冲洗，用盐和面粉搓洗去异味，再用开水焯烫5分钟，捞出洗净切成4cm段。',
                    image: '',
                    tips: '处理大肠是关键，一定要洗净去腥。'
                },
                {
                    step: 2,
                    title: '第一次煮制',
                    content: '大肠放入锅中，加水、料酒、葱段、姜片，大火煮开后转小火煮30分钟至软糯。',
                    image: '',
                    tips: '煮制时间要足够，让大肠充分软糯。'
                },
                {
                    step: 3,
                    title: '炒制糖色',
                    content: '另起锅，小火炒白糖至焦糖色，颜色呈琥珀色时立即加入少许开水调成糖色汁。',
                    image: '',
                    tips: '炒糖色火候很关键，过了就会发苦。'
                },
                {
                    step: 4,
                    title: '爆炒调味',
                    content: '热锅下油，爆香八角、桂皮、花椒、干辣椒，再下蒜瓣炒香。',
                    image: '',
                    tips: '香料要小火慢炒，避免炒糊。'
                },
                {
                    step: 5,
                    title: '下大肠调色',
                    content: '下煮好的大肠段翻炒，倒入糖色汁、生抽、老抽炒匀上色。',
                    image: '',
                    tips: '大肠要炒至每段都均匀上色。'
                },
                {
                    step: 6,
                    title: '调味焖煮',
                    content: '加入香醋、盐、胡椒粉、味精，添少许高汤或水，小火焖煮15分钟。',
                    image: '',
                    tips: '醋要适量，是九转大肠酸味的来源。'
                },
                {
                    step: 7,
                    title: '收汁出锅',
                    content: '用水淀粉勾薄芡，大火收汁至汁浓裹匀，撒葱花即可出锅。',
                    image: '',
                    tips: '收汁时要不断翻炒，让每段大肠都裹上汁液。'
                }
            ],
            tips: [
                '大肠处理是关键，要反复清洗去异味。',
                '炒糖色要掌握好火候，颜色太浅不香，太深会苦。',
                '九转指的是制作工艺复杂，要经过多次调味。',
                '正宗九转大肠要有酸甜咸辣香五种味道。',
                '最后收汁很重要，汁要浓稠光亮。',
                '可根据个人口味调整酸甜比例。'
            ],
            nutrition: {
                calories: '280千卡/100g',
                protein: '12g',
                fat: '22g',
                carbs: '8g',
                fiber: '0g',
                sodium: '680mg'
            },
            tags: ['鲁菜', '传统', '宴客', '特色'],
            createdAt: '2024-01-27T16:00:00Z',
            updatedAt: '2024-01-27T16:00:00Z'
        },
        {
            id: 'recipe_059',
            title: '爆炒腰花',
            description: '山东经典，腰花嫩滑，火候精准。',
            image: '/cooking-platform/data/imgs/鲁菜/爆炒腰花.png',
            cuisine: 'shandong',
            difficulty: 'hard',
            cookTime: '15分钟',
            prepTime: '25分钟',
            servings: '2-3人',
            rating: 4.5,
            viewCount: 12400,
            favoriteCount: 2123,
            ingredients: [
                { name: '猪腰子', amount: '2个', note: '新鲜猪腰，约300g' },
                { name: '冬笋', amount: '100g', note: '切片' },
                { name: '木耳', amount: '50g', note: '提前泡发' },
                { name: '青椒', amount: '1个', note: '切片' },
                { name: '红椒', amount: '半个', note: '切片，配色用' },
                { name: '大葱', amount: '2段', note: '切段' },
                { name: '生姜', amount: '1块', note: '切丝' },
                { name: '大蒜', amount: '3瓣', note: '切片' },
                { name: '料酒', amount: '3汤匙', note: '腌制和炒制用' },
                { name: '生抽', amount: '2汤匙', note: '' },
                { name: '盐', amount: '1茶匙', note: '' },
                { name: '白糖', amount: '1茶匙', note: '' },
                { name: '香醋', amount: '1汤匙', note: '镇江香醋' },
                { name: '淀粉', amount: '2汤匙', note: '腌制和勾芡用' },
                { name: '鸡蛋清', amount: '1个', note: '腌制用' },
                { name: '胡椒粉', amount: '少许', note: '白胡椒粉' },
                { name: '植物油', amount: '适量', note: '炒制用' },
                { name: '香油', amount: '几滴', note: '最后调香' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '处理腰花',
                    content: '腰子剖开去除白色筋膜，在表面斜切花刀，深度2/3，切成2cm见方的块。',
                    image: '',
                    tips: '花刀要切得均匀，深度要一致，这样炒出来形状才好看。'
                },
                {
                    step: 2,
                    title: '腌制腰花',
                    content: '腰花用清水冲洗干净，加料酒、蛋清、淀粉、盐腌制15分钟去腥。',
                    image: '',
                    tips: '腌制时间不要太长，15分钟足够，时间长了会变老。'
                },
                {
                    step: 3,
                    title: '准备配菜',
                    content: '冬笋切片，木耳撕成小朵，青红椒切片，葱段、姜丝、蒜片准备好。',
                    image: '',
                    tips: '所有配菜都要提前准备好，爆炒时动作要快。'
                },
                {
                    step: 4,
                    title: '调制芡汁',
                    content: '生抽、糖、醋、盐、胡椒粉、少许淀粉和水调成芡汁备用。',
                    image: '',
                    tips: '芡汁要提前调好，炒制时没时间现调。'
                },
                {
                    step: 5,
                    title: '焯烫腰花',
                    content: '开水中放少许料酒，腰花快速焯烫10秒即起，沥干水分。',
                    image: '',
                    tips: '焯水时间要短，只是为了去腥和定型。'
                },
                {
                    step: 6,
                    title: '爆炒腰花',
                    content: '热锅下油，油温7成热时下腰花大火爆炒30秒，迅速盛起。',
                    image: '',
                    tips: '火要大，动作要快，腰花一变色就要盛起。'
                },
                {
                    step: 7,
                    title: '炒制配菜',
                    content: '锅内留底油，下姜蒜爆香，依次下冬笋、木耳、青红椒炒1分钟。',
                    image: '',
                    tips: '配菜炒至断生即可，保持脆嫩口感。'
                },
                {
                    step: 8,
                    title: '合炒调味',
                    content: '倒入腰花快速炒匀，淋入调好的芡汁，撒葱段，滴香油即可出锅。',
                    image: '',
                    tips: '最后合炒时间要短，否则腰花会变老。'
                }
            ],
            tips: [
                '选择新鲜猪腰，颜色鲜红有光泽的最好。',
                '切花刀是关键技巧，要耐心练习。',
                '全程大火爆炒，动作要快，火候是成败关键。',
                '腰花不能炒时间过长，否则会变老发硬。',
                '焯水和腌制都是为了去腥，不可省略。',
                '芡汁要适量，太多会影响爽脆口感。'
            ],
            nutrition: {
                calories: '135千卡/100g',
                protein: '18g',
                fat: '5g',
                carbs: '4g',
                fiber: '2g',
                sodium: '420mg'
            },
            tags: ['鲁菜', '爆炒', '内脏', '技巧'],
            createdAt: '2024-01-27T17:00:00Z',
            updatedAt: '2024-01-27T17:00:00Z'
        },
        {
            id: 'recipe_060',
            title: '油爆双脆',
            description: '山东名菜，口感脆嫩，技法精湛。',
            image: '/cooking-platform/data/imgs/鲁菜/油爆双脆.png',
            cuisine: 'shandong',
            difficulty: 'hard',
            cookTime: '12分钟',
            prepTime: '30分钟',
            servings: '2-3人',
            rating: 4.7,
            viewCount: 9800,
            favoriteCount: 1678,
            ingredients: [
                { name: '猪肚', amount: '300g', note: '处理干净' },
                { name: '鸡胗', amount: '200g', note: '去除筋膜' },
                { name: '冬笋', amount: '100g', note: '切片' },
                { name: '青蒜苗', amount: '100g', note: '切段' },
                { name: '生姜', amount: '1块', note: '切丝' },
                { name: '大蒜', amount: '3瓣', note: '切片' },
                { name: '干红椒', amount: '3个', note: '切段' },
                { name: '料酒', amount: '3汤匙', note: '腌制和炒制用' },
                { name: '生抽', amount: '2汤匙', note: '' },
                { name: '盐', amount: '1茶匙', note: '' },
                { name: '白糖', amount: '1茶匙', note: '' },
                { name: '香醋', amount: '1汤匙', note: '山西陈醋' },
                { name: '淀粉', amount: '2汤匙', note: '腌制和勾芡用' },
                { name: '鸡蛋清', amount: '1个', note: '腌制用' },
                { name: '胡椒粉', amount: '少许', note: '白胡椒粉' },
                { name: '植物油', amount: '适量', note: '爆炒用' },
                { name: '香油', amount: '几滴', note: '调香用' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '处理猪肚',
                    content: '猪肚用盐和面粉反复搓洗，去除粘液，用开水焯烫3分钟，刮去表面薄膜，切成细丝。',
                    image: '',
                    tips: '猪肚处理要彻底，否则会有异味。'
                },
                {
                    step: 2,
                    title: '处理鸡胗',
                    content: '鸡胗去除筋膜，在表面斜切花刀，切成薄片，用刀背轻拍松软。',
                    image: '',
                    tips: '鸡胗要去净筋膜，切花刀能让口感更脆嫩。'
                },
                {
                    step: 3,
                    title: '腌制双脆',
                    content: '猪肚丝和鸡胗片分别用料酒、蛋清、淀粉、盐腌制15分钟。',
                    image: '',
                    tips: '腌制能去腥并保持嫩滑，时间不要过长。'
                },
                {
                    step: 4,
                    title: '调制芡汁',
                    content: '生抽、糖、醋、盐、胡椒粉、少许淀粉和清汤调成芡汁。',
                    image: '',
                    tips: '芡汁要提前调好，爆炒时来不及现调。'
                },
                {
                    step: 5,
                    title: '焯烫定形',
                    content: '开水中放料酒，先下猪肚丝焯15秒，再下鸡胗片焯10秒，立即捞出沥干。',
                    image: '',
                    tips: '焯水时间要短，只是为了定形和进一步去腥。'
                },
                {
                    step: 6,
                    title: '爆炒双脆',
                    content: '热锅下油，油温8成热时下双脆大火爆炒20秒，迅速盛起。',
                    image: '',
                    tips: '油温要高，动作要快，炒得时间长了会变老。'
                },
                {
                    step: 7,
                    title: '炒制配菜',
                    content: '锅内留底油，下干红椒、姜蒜爆香，下冬笋片炒30秒。',
                    image: '',
                    tips: '配菜要保持脆嫩，不要炒太久。'
                },
                {
                    step: 8,
                    title: '合炒调味',
                    content: '倒入双脆快速炒匀，淋芡汁，下青蒜苗炒匀，滴香油即可出锅。',
                    image: '',
                    tips: '最后合炒时间要极短，保持双脆的脆嫩口感。'
                }
            ],
            tips: [
                '选料要新鲜，猪肚要厚实有弹性，鸡胗要色泽鲜红。',
                '刀工要精细，切丝和切片都要厚薄均匀。',
                '火候是关键，全程大火爆炒，动作要快。',
                '双脆的精髓在于脆嫩，炒制时间不能过长。',
                '油温要够高，这样炒出来才脆。',
                '调料要适中，不能掩盖双脆本身的鲜味。'
            ],
            nutrition: {
                calories: '145千卡/100g',
                protein: '20g',
                fat: '5g',
                carbs: '3g',
                fiber: '1g',
                sodium: '380mg'
            },
            tags: ['鲁菜', '爆炒', '脆嫩', '技法'],
            createdAt: '2024-01-27T18:00:00Z',
            updatedAt: '2024-01-27T18:00:00Z'
        },
        {
            id: 'recipe_061',
            title: '葱爆羊肉',
            description: '山东特色，羊肉鲜嫩，葱香浓郁。',
            image: '/cooking-platform/data/imgs/鲁菜/葱爆羊肉.png',
            cuisine: 'shandong',
            difficulty: 'medium',
            cookTime: '18分钟',
            prepTime: '20分钟',
            servings: '2-3人',
            rating: 4.6,
            viewCount: 14500,
            favoriteCount: 2567,
            ingredients: [
                { name: '羊肉', amount: '400g', note: '羊腿肉最佳，切薄片' },
                { name: '大葱', amount: '300g', note: '大葱白，切段' },
                { name: '洋葱', amount: '半个', note: '切丝，增加甜味' },
                { name: '生姜', amount: '1块', note: '切丝' },
                { name: '大蒜', amount: '3瓣', note: '切片' },
                { name: '干辣椒', amount: '3个', note: '切段，可选' },
                { name: '料酒', amount: '3汤匙', note: '腌制和炒制用' },
                { name: '生抽', amount: '2汤匙', note: '' },
                { name: '老抽', amount: '1茶匙', note: '调色用' },
                { name: '盐', amount: '1茶匙', note: '' },
                { name: '白糖', amount: '1茶匙', note: '' },
                { name: '胡椒粉', amount: '1茶匙', note: '白胡椒粉' },
                { name: '孜然粉', amount: '1茶匙', note: '去膻味增香' },
                { name: '淀粉', amount: '1汤匙', note: '腌制用' },
                { name: '鸡蛋清', amount: '半个', note: '腌制用' },
                { name: '植物油', amount: '适量', note: '爆炒用' },
                { name: '香油', amount: '几滴', note: '调香用' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '处理羊肉',
                    content: '羊肉逆着纹路切成3mm厚的薄片，用清水漂洗去血水，沥干。',
                    image: '',
                    tips: '逆纹切能让羊肉更嫩，漂洗能去除膻味。'
                },
                {
                    step: 2,
                    title: '腌制羊肉',
                    content: '羊肉片加料酒、蛋清、淀粉、盐、胡椒粉腌制15分钟。',
                    image: '',
                    tips: '腌制能去膻味并保持肉质嫩滑。'
                },
                {
                    step: 3,
                    title: '准备大葱',
                    content: '大葱洗净，斜切成5cm长的段，洋葱切丝，姜蒜切好备用。',
                    image: '',
                    tips: '大葱要选择葱白部分，这样香味更浓。'
                },
                {
                    step: 4,
                    title: '调制调料',
                    content: '生抽、老抽、糖、孜然粉、少许盐调成调味汁。',
                    image: '',
                    tips: '孜然粉是关键调料，能很好地去除羊肉膻味。'
                },
                {
                    step: 5,
                    title: '爆炒羊肉',
                    content: '热锅下油，油温7成热时下羊肉片，大火爆炒至变色，立即盛起。',
                    image: '',
                    tips: '羊肉要大火快炒，时间不能长，否则会变老。'
                },
                {
                    step: 6,
                    title: '爆炒大葱',
                    content: '锅内留底油，下姜蒜和干辣椒爆香，再下洋葱丝炒30秒。',
                    image: '',
                    tips: '洋葱丝能增加甜味，平衡羊肉的膻味。'
                },
                {
                    step: 7,
                    title: '下葱段炒制',
                    content: '下大葱段大火炒1分钟，葱段断生但保持脆嫩。',
                    image: '',
                    tips: '大葱不要炒太久，要保持一定的脆嫩度。'
                },
                {
                    step: 8,
                    title: '合炒调味',
                    content: '倒入羊肉片快速炒匀，淋入调味汁，翻炒均匀，滴香油即可出锅。',
                    image: '',
                    tips: '最后合炒时间要短，保持羊肉的嫩度和葱的香味。'
                }
            ],
            tips: [
                '选择新鲜羊肉，颜色鲜红，无异味。',
                '逆纹切肉是关键，能让羊肉更嫩。',
                '孜然粉和料酒能很好地去除羊肉膻味。',
                '全程大火爆炒，动作要快。',
                '大葱要保持一定的脆嫩度，不要炒过头。',
                '可根据个人喜好增减孜然粉的用量。'
            ],
            nutrition: {
                calories: '195千卡/100g',
                protein: '22g',
                fat: '10g',
                carbs: '6g',
                fiber: '2g',
                sodium: '480mg'
            },
            tags: ['鲁菜', '羊肉', '葱爆', '下饭'],
            createdAt: '2024-01-27T19:00:00Z',
            updatedAt: '2024-01-27T19:00:00Z'
        },
        {
            id: 'recipe_062',
            title: '坛子肉',
            description: '山东传统菜，肉烂汤浓，营养丰富。',
            image: '/cooking-platform/data/imgs/鲁菜/坛子肉.png',
            cuisine: 'shandong',
            difficulty: 'easy',
            cookTime: '2小时',
            prepTime: '20分钟',
            servings: '4-5人',
            rating: 4.4,
            viewCount: 7600,
            favoriteCount: 1234,
            ingredients: [
                { name: '五花肉', amount: '1kg', note: '带皮五花肉，切大块' },
                { name: '排骨', amount: '300g', note: '猪肋排，剁段' },
                { name: '老豆腐', amount: '200g', note: '切厚片' },
                { name: '白萝卜', amount: '300g', note: '切滚刀块' },
                { name: '土豆', amount: '200g', note: '切块' },
                { name: '胡萝卜', amount: '1根', note: '切段' },
                { name: '大葱', amount: '3段', note: '切段' },
                { name: '生姜', amount: '1大块', note: '拍碎' },
                { name: '八角', amount: '3个', note: '' },
                { name: '桂皮', amount: '2段', note: '' },
                { name: '香叶', amount: '3片', note: '' },
                { name: '花椒', amount: '1汤匙', note: '' },
                { name: '干辣椒', amount: '5个', note: '可选' },
                { name: '生抽', amount: '4汤匙', note: '' },
                { name: '老抽', amount: '2汤匙', note: '上色用' },
                { name: '料酒', amount: '3汤匙', note: '' },
                { name: '冰糖', amount: '30g', note: '炒糖色用' },
                { name: '盐', amount: '适量', note: '' },
                { name: '鸡精', amount: '1茶匙', note: '' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '处理肉类',
                    content: '五花肉和排骨洗净，冷水下锅焯水，撇去浮沫，捞出洗净备用。',
                    image: '',
                    tips: '焯水能去除血水和腥味，让炖出的汤更清澈。'
                },
                {
                    step: 2,
                    title: '炒制糖色',
                    content: '锅内放少许油，下冰糖小火炒至焦糖色，颜色呈琥珀色时加少许热水调成糖色汁。',
                    image: '',
                    tips: '炒糖色火候要掌握好，太深会发苦。'
                },
                {
                    step: 3,
                    title: '炒制肉块',
                    content: '热锅下油，下五花肉块和排骨煸炒至表面微黄，倒入糖色汁炒匀上色。',
                    image: '',
                    tips: '煸炒能让肉块出油，口感更香。'
                },
                {
                    step: 4,
                    title: '添加调料',
                    content: '加入料酒、生抽、老抽翻炒，再下八角、桂皮、香叶、花椒、葱段、姜块爆香。',
                    image: '',
                    tips: '香料要小火炒出香味，不要炒糊了。'
                },
                {
                    step: 5,
                    title: '转入坛子',
                    content: '将炒好的肉和调料转入砂锅或坛子中，加入开水没过肉块2cm。',
                    image: '',
                    tips: '用砂锅炖制受热更均匀，味道更香。'
                },
                {
                    step: 6,
                    title: '小火慢炖',
                    content: '大火烧开后转小火，盖盖慢炖1.5小时，炖至肉块软烂。',
                    image: '',
                    tips: '要小火慢炖，时间要足够，肉才会软烂。'
                },
                {
                    step: 7,
                    title: '加入蔬菜',
                    content: '加入萝卜块、土豆块、胡萝卜段，继续炖20分钟至蔬菜软烂。',
                    image: '',
                    tips: '蔬菜后加，避免炖得太烂影响形状。'
                },
                {
                    step: 8,
                    title: '最后调味',
                    content: '最后10分钟加入豆腐片，调入盐和鸡精，再炖10分钟即可。',
                    image: '',
                    tips: '豆腐最后加入，避免炖烂影响口感。'
                }
            ],
            tips: [
                '选择肥瘦相间的五花肉，口感更好。',
                '砂锅或坛子炖制效果最佳，受热均匀。',
                '炖制时间要充足，肉要炖至软烂。',
                '蔬菜要分批加入，避免炖得过烂。',
                '可根据个人喜好添加其他蔬菜。',
                '汤汁浓稠香醇是这道菜的特色。'
            ],
            nutrition: {
                calories: '320千卡/100g',
                protein: '18g',
                fat: '25g',
                carbs: '8g',
                fiber: '3g',
                sodium: '520mg'
            },
            tags: ['鲁菜', '炖菜', '猪肉', '滋补'],
            createdAt: '2024-01-27T20:00:00Z',
            updatedAt: '2024-01-27T20:00:00Z'
        },
        {
            id: 'recipe_063',
            title: '鲁式红烧肉',
            description: '山东红烧肉，肥而不腻，色泽红亮。',
            image: '/cooking-platform/data/imgs/鲁菜/鲁式红烧肉.png',
            cuisine: 'shandong',
            difficulty: 'medium',
            cookTime: '50分钟',
            prepTime: '15分钟',
            servings: '4-5人',
            rating: 4.5,
            viewCount: 16200,
            favoriteCount: 2890,
            ingredients: [
                { name: '五花肉', amount: '1kg', note: '带皮五花肉，切4cm方块' },
                { name: '冰糖', amount: '50g', note: '炒糖色用' },
                { name: '生抽', amount: '3汤匙', note: '' },
                { name: '老抽', amount: '2汤匙', note: '上色用' },
                { name: '料酒', amount: '3汤匙', note: '' },
                { name: '大葱', amount: '3段', note: '切段' },
                { name: '生姜', amount: '1块', note: '切片' },
                { name: '大蒜', amount: '5瓣', note: '拍扁' },
                { name: '八角', amount: '2个', note: '' },
                { name: '桂皮', amount: '1段', note: '' },
                { name: '香叶', amount: '2片', note: '' },
                { name: '花椒', amount: '1茶匙', note: '' },
                { name: '盐', amount: '适量', note: '' },
                { name: '植物油', amount: '适量', note: '' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '处理五花肉',
                    content: '五花肉洗净切成4cm见方的块，冷水下锅焯水5分钟，撇去浮沫，捞出洗净。',
                    image: '',
                    tips: '焯水能去除血污和腥味，让红烧肉更香。'
                },
                {
                    step: 2,
                    title: '炒制糖色',
                    content: '锅内放少量油，下冰糖小火慢炒，炒至焦糖色呈琥珀状，立即加入少许热水。',
                    image: '',
                    tips: '炒糖色是鲁式红烧肉的关键，火候要掌握准确。'
                },
                {
                    step: 3,
                    title: '煸炒肉块',
                    content: '下焯好的肉块，煸炒至表面微黄出油，倒入糖色翻炒上色。',
                    image: '',
                    tips: '煸炒出油能让红烧肉不腥不腻。'
                },
                {
                    step: 4,
                    title: '添加调料',
                    content: '加入料酒、生抽、老抽炒匀，再放入葱段、姜片、蒜瓣、八角、桂皮、香叶。',
                    image: '',
                    tips: '鲁菜讲究香料的搭配，要充分炒出香味。'
                },
                {
                    step: 5,
                    title: '加水炖煮',
                    content: '加入热水没过肉块，大火烧开后转小火，盖盖炖40分钟至软糯。',
                    image: '',
                    tips: '炖煮时间要充足，让肉质变得软糯。'
                },
                {
                    step: 6,
                    title: '收汁调味',
                    content: '开盖转大火收汁，调入盐，收至汤汁浓稠包裹肉块即可出锅。',
                    image: '',
                    tips: '收汁要适度，太干会影响口感。'
                }
            ],
            tips: [
                '选择肥瘦相间的上等五花肉最佳。',
                '炒糖色是关键技巧，要有耐心慢慢炒制。',
                '煸炒出油的步骤不可省略，影响最终口感。',
                '炖煮火候要掌握好，小火慢炖才能软糯。',
                '鲁菜红烧肉偏甜，可根据口味调整糖量。',
                '收汁时要不断翻动，避免糊底。'
            ],
            nutrition: {
                calories: '350千卡/100g',
                protein: '15g',
                fat: '30g',
                carbs: '8g',
                fiber: '0g',
                sodium: '580mg'
            },
            tags: ['鲁菜', '红烧', '猪肉', '家常'],
            createdAt: '2024-01-27T21:00:00Z',
            updatedAt: '2024-01-27T21:00:00Z'
        },
        {
            id: 'recipe_064',
            title: '鲁式海参',
            description: '山东海味，海参软糯，营养价值高。',
            image: '/cooking-platform/data/imgs/鲁菜/鲁式海参.png',
            cuisine: 'shandong',
            difficulty: 'hard',
            cookTime: '1.5小时',
            prepTime: '2小时',
            servings: '4-5人',
            rating: 4.9,
            viewCount: 6700,
            favoriteCount: 1567,
            ingredients: [
                { name: '干海参', amount: '8只', note: '优质干海参，提前发制' },
                { name: '五花肉', amount: '300g', note: '切块' },
                { name: '鸡汤', amount: '500ml', note: '浓郁鸡汤' },
                { name: '冬笋', amount: '100g', note: '切片' },
                { name: '香菇', amount: '6朵', note: '提前泡发' },
                { name: '青菜心', amount: '150g', note: '焯水备用' },
                { name: '大葱', amount: '3段', note: '切段' },
                { name: '生姜', amount: '1块', note: '切片' },
                { name: '蒜瓣', amount: '5个', note: '拍碎' },
                { name: '生抽', amount: '2汤匙', note: '' },
                { name: '老抽', amount: '1汤匙', note: '调色' },
                { name: '料酒', amount: '3汤匙', note: '' },
                { name: '白糖', amount: '1茶匙', note: '' },
                { name: '盐', amount: '适量', note: '' },
                { name: '淀粉', amount: '2汤匙', note: '勾芡用' },
                { name: '植物油', amount: '适量', note: '' },
                { name: '香油', amount: '几滴', note: '提香' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '发制海参',
                    content: '干海参提前24小时用清水浸泡，再用热水煮制1小时，去除内脏，反复清洗至无异味。',
                    image: '',
                    tips: '海参发制是关键，要充分涨发，去除所有杂质。'
                },
                {
                    step: 2,
                    title: '预处理海参',
                    content: '发好的海参切成段，用开水焯烫2分钟，加料酒去腥，捞出备用。',
                    image: '',
                    tips: '焯烫能进一步去腥，保持海参的鲜味。'
                },
                {
                    step: 3,
                    title: '炒制肉块',
                    content: '五花肉切块，锅内放油，下肉块煸炒至表面微黄出油。',
                    image: '',
                    tips: '五花肉出油能增加菜品的香味。'
                },
                {
                    step: 4,
                    title: '爆香调料',
                    content: '下葱段、姜片、蒜瓣爆香，加入料酒、生抽、老抽炒匀。',
                    image: '',
                    tips: '葱姜蒜的香味是鲁菜的基础。'
                },
                {
                    step: 5,
                    title: '添汤焖煮',
                    content: '倒入鸡汤，放入海参、冬笋、香菇，大火烧开后转小火焖30分钟。',
                    image: '',
                    tips: '鸡汤要浓郁，焖煮时间要足够让海参入味。'
                },
                {
                    step: 6,
                    title: '调味收汁',
                    content: '加入盐、糖调味，用水淀粉勾薄芡，使汤汁略稠。',
                    image: '',
                    tips: '勾芡不要太厚，保持汤汁的清澈。'
                },
                {
                    step: 7,
                    title: '最后装盘',
                    content: '放入焯好的青菜心，淋香油，轻轻拌匀即可出锅装盘。',
                    image: '',
                    tips: '青菜心要保持翠绿，最后加入即可。'
                }
            ],
            tips: [
                '海参发制要充分，这是成功的关键。',
                '选用优质干海参，肉质厚实的最佳。',
                '鸡汤要浓郁，最好是老母鸡汤。',
                '火候要掌握好，小火慢焖才能入味。',
                '海参性质温和，搭配五花肉能增加口感层次。',
                '这道菜营养丰富，有很好的滋补功效。'
            ],
            nutrition: {
                calories: '180千卡/100g',
                protein: '25g',
                fat: '6g',
                carbs: '8g',
                fiber: '2g',
                sodium: '520mg'
            },
            tags: ['鲁菜', '海鲜', '滋补', '高档'],
            createdAt: '2024-01-27T22:00:00Z',
            updatedAt: '2024-01-27T22:00:00Z'
        },
        {
            id: 'recipe_065',
            title: '山东煎饼',
            description: '传统主食，薄如纸片，香脆可口。',
            image: '/cooking-platform/data/imgs/鲁菜/山东煎饼.png',
            cuisine: 'shandong',
            difficulty: 'medium',
            cookTime: '30分钟',
            rating: 4.3,
            viewCount: 18900,
            favoriteCount: 3456,
            tags: ['鲁菜', '主食', '煎饼', '传统']
        },
        {
            id: 'recipe_066',
            title: '鲁式鲍鱼',
            description: '山东高档海鲜，鲍鱼鲜美，制作精细。',
            image: '/cooking-platform/data/imgs/鲁菜/鲁式鲍鱼.png',
            cuisine: 'shandong',
            difficulty: 'hard',
            cookTime: '2小时',
            rating: 4.9,
            viewCount: 5400,
            favoriteCount: 1123,
            tags: ['鲁菜', '海鲜', '鲍鱼', '宴客']
        },
        {
            id: 'recipe_067',
            title: '鲁式蒸蛋',
            description: '山东家常菜，蛋羹嫩滑，老少皆宜。',
            image: '/cooking-platform/data/imgs/鲁菜/鲁式蒸蛋.png',
            cuisine: 'shandong',
            difficulty: 'easy',
            cookTime: '15分钟',
            rating: 4.2,
            viewCount: 11800,
            favoriteCount: 1789,
            tags: ['鲁菜', '蒸菜', '鸡蛋', '家常']
        },
        {
            id: 'recipe_068',
            title: '鲁式炖鸡',
            description: '山东炖菜，鸡肉酥烂，汤汁鲜美。',
            cuisine: 'shandong',
            difficulty: 'easy',
            cookTime: '1小时',
            rating: 4.4,
            viewCount: 9700,
            favoriteCount: 1567,
            tags: ['鲁菜', '炖菜', '鸡肉', '汤品']
        },
        {
            id: 'recipe_069',
            title: '山东大包子',
            description: '山东特色面食，皮薄馅大，营养丰富。',
            image: '/cooking-platform/data/imgs/鲁菜/山东大包子.png',
            cuisine: 'shandong',
            difficulty: 'medium',
            cookTime: '1小时',
            prepTime: '2小时',
            servings: '6-8人',
            rating: 4.3,
            viewCount: 13600,
            favoriteCount: 2234,
            ingredients: [
                { name: '面粉', amount: '500g', note: '中筋面粉' },
                { name: '酵母', amount: '5g', note: '干酵母' },
                { name: '温水', amount: '250ml', note: '35°C左右' },
                { name: '白糖', amount: '1汤匙', note: '助发酵' },
                { name: '猪肉馅', amount: '400g', note: '肥瘦3:7' },
                { name: '韭菜', amount: '300g', note: '洗净切碎' },
                { name: '香菇', amount: '8朵', note: '泡发切丁' },
                { name: '冬笋', amount: '100g', note: '切丁' },
                { name: '生姜', amount: '1块', note: '切末' },
                { name: '大葱', amount: '3根', note: '切末' },
                { name: '生抽', amount: '3汤匙', note: '' },
                { name: '料酒', amount: '2汤匙', note: '' },
                { name: '香油', amount: '2汤匙', note: '' },
                { name: '盐', amount: '适量', note: '' },
                { name: '胡椒粉', amount: '1茶匙', note: '白胡椒粉' },
                { name: '鸡蛋', amount: '1个', note: '调馅用' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '发面制皮',
                    content: '面粉加酵母、糖、温水和成光滑面团，盖布发酵至2倍大，约1.5小时。',
                    image: '',
                    tips: '发酵充分是包子皮松软的关键。'
                },
                {
                    step: 2,
                    title: '调制肉馅',
                    content: '猪肉馅加姜葱末、生抽、料酒、盐、胡椒粉、鸡蛋，顺一个方向搅拌上劲。',
                    image: '',
                    tips: '肉馅要搅拌至有粘性，口感才好。'
                },
                {
                    step: 3,
                    title: '拌入蔬菜',
                    content: '韭菜碎用少许盐杀水，挤干后加入肉馅，再放香菇丁、笋丁，淋香油拌匀。',
                    image: '',
                    tips: '韭菜要杀水挤干，避免出水影响包制。'
                },
                {
                    step: 4,
                    title: '制作包子皮',
                    content: '发好的面团揉匀排气，分成大剂子，擀成厚边薄中间的圆皮。',
                    image: '',
                    tips: '山东大包子的皮要比普通包子大一倍。'
                },
                {
                    step: 5,
                    title: '包制大包子',
                    content: '放入大量馅料，用拇指和食指捏褶，收口要严实，包成大包子。',
                    image: '',
                    tips: '馅料要多，体现山东大包子的特色。'
                },
                {
                    step: 6,
                    title: '醒发蒸制',
                    content: '包好的包子醒发20分钟，然后大火蒸20分钟即可。',
                    image: '',
                    tips: '蒸制时间要足够，确保包子熟透。'
                }
            ],
            tips: [
                '山东大包子以馅料丰富著称。',
                '发面要充分，包子皮才会松软。',
                '韭菜馅是经典搭配，香味浓郁。',
                '包制时要封口严实，避免漏馅。',
                '蒸制火候要掌握好，大火足气。',
                '这是山东人的传统主食之一。'
            ],
            nutrition: {
                calories: '250千卡/100g',
                protein: '12g',
                fat: '8g',
                carbs: '32g',
                fiber: '3g',
                sodium: '520mg'
            },
            tags: ['鲁菜', '面食', '包子', '主食'],
            createdAt: '2024-01-29T08:00:00Z',
            updatedAt: '2024-01-29T08:00:00Z'
        },
        {
            id: 'recipe_070',
            title: '鲁式糖醋鲤鱼',
            description: '山东名菜，鱼肉鲜嫩，糖醋味美。',
            image: '/cooking-platform/data/imgs/鲁菜/鲁式糖醋鲤鱼.png',
            cuisine: 'shandong',
            difficulty: 'medium',
            cookTime: '35分钟',
            prepTime: '25分钟',
            servings: '4-5人',
            rating: 4.7,
            viewCount: 10900,
            favoriteCount: 1890,
            ingredients: [
                { name: '鲤鱼', amount: '1条(约1kg)', note: '新鲜活鲤鱼' },
                { name: '鸡蛋', amount: '2个', note: '调糊用' },
                { name: '干淀粉', amount: '200g', note: '裹鱼用' },
                { name: '面粉', amount: '100g', note: '调糊用' },
                { name: '白糖', amount: '6汤匙', note: '鲁菜偏甜' },
                { name: '镇江醋', amount: '4汤匙', note: '正宗镇江醋' },
                { name: '生抽', amount: '2汤匙', note: '' },
                { name: '料酒', amount: '3汤匙', note: '' },
                { name: '盐', amount: '适量', note: '' },
                { name: '大葱', amount: '3段', note: '切丝' },
                { name: '生姜', amount: '1块', note: '切丝' },
                { name: '蒜瓣', amount: '4个', note: '切末' },
                { name: '胡萝卜丝', amount: '50g', note: '装饰用' },
                { name: '青椒丝', amount: '50g', note: '装饰用' },
                { name: '植物油', amount: '1000ml', note: '炸鱼用' },
                { name: '淀粉', amount: '2汤匙', note: '勾芡用' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '处理鲤鱼',
                    content: '鲤鱼去鳞去内脏洗净，在鱼身两侧斜切花刀，刀距1cm，深度至鱼骨。',
                    image: '',
                    tips: '花刀要切得均匀深透，这样炸后才能开花。'
                },
                {
                    step: 2,
                    title: '腌制鱼肉',
                    content: '鱼用料酒、盐腌制20分钟，然后拍干水分，全身拍上干淀粉。',
                    image: '',
                    tips: '腌制去腥，拍淀粉能让鱼炸得更酥脆。'
                },
                {
                    step: 3,
                    title: '调制蛋糊',
                    content: '鸡蛋、面粉、少许水调成无颗粒的糊，将鱼全身裹上蛋糊。',
                    image: '',
                    tips: '蛋糊要调得恰当，太稠太稀都不好。'
                },
                {
                    step: 4,
                    title: '炸制鲤鱼',
                    content: '油温7成热时下鱼，炸至定型捞起，再升高油温至8成热复炸至金黄。',
                    image: '',
                    tips: '两次炸制，第一次定型，第二次上色酥脆。'
                },
                {
                    step: 5,
                    title: '调制糖醋汁',
                    content: '锅内放少许油，爆香蒜末，加糖、醋、生抽、少许水调成糖醋汁。',
                    image: '',
                    tips: '鲁式糖醋偏甜，糖醋比例约3:2。'
                },
                {
                    step: 6,
                    title: '勾芡浇汁',
                    content: '糖醋汁煮沸后用水淀粉勾芡，浇在炸鱼上，撒葱丝、姜丝、彩椒丝装饰。',
                    image: '',
                    tips: '要趁热浇汁，这样会有滋滋声效果。'
                }
            ],
            tips: [
                '选择新鲜活鲤鱼，肉质才会鲜美。',
                '花刀技法要熟练，影响成品美观。',
                '油温控制很重要，影响炸制效果。',
                '鲁式糖醋偏甜，要掌握好糖醋比例。',
                '这道菜寓意年年有余，是宴客佳肴。',
                '装饰配菜要色彩丰富，增加美观度。'
            ],
            nutrition: {
                calories: '220千卡/100g',
                protein: '18g',
                fat: '12g',
                carbs: '15g',
                fiber: '1g',
                sodium: '420mg'
            },
            tags: ['鲁菜', '鱼类', '糖醋', '宴客'],
            createdAt: '2024-01-29T09:00:00Z',
            updatedAt: '2024-01-29T09:00:00Z'
        },
        {
            id: 'recipe_071',
            title: '山东烧饼',
            description: '传统面食，外酥内软，层次分明。',
            image: '/cooking-platform/data/imgs/鲁菜/山东烧饼.png',
            cuisine: 'shandong',
            difficulty: 'medium',
            cookTime: '45分钟',
            prepTime: '2小时',
            servings: '4-6人',
            rating: 4.2,
            viewCount: 15300,
            favoriteCount: 2567,
            ingredients: [
                { name: '面粉', amount: '500g', note: '中筋面粉' },
                { name: '温水', amount: '250ml', note: '和面用' },
                { name: '酵母', amount: '3g', note: '干酵母' },
                { name: '白糖', amount: '1汤匙', note: '助发酵' },
                { name: '盐', amount: '1茶匙', note: '' },
                { name: '猪油', amount: '100g', note: '做油酥' },
                { name: '面粉', amount: '150g', note: '做油酥用' },
                { name: '芝麻', amount: '50g', note: '撒表面用' },
                { name: '花椒盐', amount: '2茶匙', note: '调味用' },
                { name: '大葱', amount: '3根', note: '切末，做馅用' },
                { name: '鸡蛋', amount: '1个', note: '刷表面用' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '发面制皮',
                    content: '面粉加酵母、糖、盐、温水和成光滑面团，发酵至2倍大，约1.5小时。',
                    image: '',
                    tips: '发酵充分是烧饼松软的基础。'
                },
                {
                    step: 2,
                    title: '制作油酥',
                    content: '猪油加热融化，倒入150g面粉中调成油酥，加花椒盐调味。',
                    image: '',
                    tips: '油酥是烧饼层次的关键，要调匀。'
                },
                {
                    step: 3,
                    title: '包制油酥',
                    content: '发好的面团擀开，抹上油酥和葱末，卷起后盘成螺旋状，醒20分钟。',
                    image: '',
                    tips: '抹油酥要均匀，卷制要紧实。'
                },
                {
                    step: 4,
                    title: '制作烧饼',
                    content: '将螺旋面团轻压成饼状，不要压得太扁，保持一定厚度。',
                    image: '',
                    tips: '压制时要轻，保持内部层次。'
                },
                {
                    step: 5,
                    title: '装饰表面',
                    content: '表面刷蛋液，撒上芝麻，轻压让芝麻粘牢。',
                    image: '',
                    tips: '芝麻能增加香味和美观度。'
                },
                {
                    step: 6,
                    title: '烘烤烧饼',
                    content: '烤箱预热200°C，烤25-30分钟至表面金黄酥脆即可。',
                    image: '',
                    tips: '烤制过程要观察颜色，避免烤糊。'
                }
            ],
            tips: [
                '发面要充分，影响烧饼的松软度。',
                '油酥的调制是层次的关键。',
                '卷制时要紧实，但不要压得太扁。',
                '烘烤温度和时间要掌握好。',
                '山东烧饼以层次丰富著称。',
                '趁热享用外酥内软，凉了层次感会差一些。'
            ],
            nutrition: {
                calories: '320千卡/100g',
                protein: '8g',
                fat: '15g',
                carbs: '42g',
                fiber: '2g',
                sodium: '380mg'
            },
            tags: ['鲁菜', '面食', '烧饼', '传统'],
            createdAt: '2024-01-29T10:00:00Z',
            updatedAt: '2024-01-29T10:00:00Z'
        },
        // 苏菜
        {
            id: 'recipe_072',
            title: '松鼠桂鱼',
            description: '苏菜名菜，造型美观，酸甜可口。',
            image: '/cooking-platform/data/imgs/苏菜/松鼠桂鱼.png',
            cuisine: 'jiangsu',
            difficulty: 'hard',
            cookTime: '40分钟',
            prepTime: '30分钟',
            servings: '3-4人',
            rating: 4.9,
            viewCount: 14200,
            favoriteCount: 3456,
            ingredients: [
                { name: '桂鱼', amount: '1条(约750g)', note: '新鲜活鱼，去鳞去内脏' },
                { name: '鸡蛋', amount: '2个', note: '取蛋清用' },
                { name: '干淀粉', amount: '150g', note: '裹鱼用' },
                { name: '面粉', amount: '50g', note: '调糊用' },
                { name: '番茄酱', amount: '4汤匙', note: '调色调味' },
                { name: '白醋', amount: '3汤匙', note: '镇江白醋最佳' },
                { name: '白糖', amount: '4汤匙', note: '调甜味' },
                { name: '料酒', amount: '2汤匙', note: '' },
                { name: '盐', amount: '适量', note: '' },
                { name: '青豆', amount: '50g', note: '装饰用' },
                { name: '胡萝卜丁', amount: '50g', note: '装饰用' },
                { name: '冬笋丁', amount: '50g', note: '装饰用' },
                { name: '大葱', amount: '2段', note: '切丝' },
                { name: '生姜', amount: '1块', note: '切丝' },
                { name: '蒜瓣', amount: '3个', note: '切末' },
                { name: '植物油', amount: '1000ml', note: '炸鱼用' },
                { name: '鸡汤', amount: '100ml', note: '调汁用' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '处理桂鱼',
                    content: '桂鱼去鳞、去鳃、去内脏洗净，从腹部剖开，去骨，鱼肉片成大片，在鱼肉上斜切花刀。',
                    image: '',
                    tips: '花刀要切得深而密，但不要切断，这样炸后才能形成松鼠状。'
                },
                {
                    step: 2,
                    title: '腌制鱼肉',
                    content: '鱼肉用盐、料酒腌制15分钟，然后拍干水分，撒上干淀粉。',
                    image: '',
                    tips: '腌制能去腥增味，拍干淀粉能让鱼炸得更酥脆。'
                },
                {
                    step: 3,
                    title: '调制蛋糊',
                    content: '蛋清打散，加入面粉调成无颗粒的蛋糊，将鱼肉裹上蛋糊。',
                    image: '',
                    tips: '蛋糊要调得不稠不稀，能很好地包裹鱼肉。'
                },
                {
                    step: 4,
                    title: '炸制鱼肉',
                    content: '油温升至7成热，将鱼肉下锅炸至定型，捞起。再升高油温至8成热，复炸至金黄酥脆。',
                    image: '',
                    tips: '两次炸制是关键，第一次定型，第二次上色增酥。'
                },
                {
                    step: 5,
                    title: '调制糖醋汁',
                    content: '锅内放少许油，下蒜末爆香，加番茄酱炒出红油，再加糖、醋、鸡汤调成糖醋汁。',
                    image: '',
                    tips: '糖醋汁要酸甜适中，颜色红亮诱人。'
                },
                {
                    step: 6,
                    title: '制作配菜',
                    content: '青豆、胡萝卜丁、冬笋丁焯水断生，葱丝、姜丝过油爆香。',
                    image: '',
                    tips: '配菜颜色要鲜艳，增加视觉效果。'
                },
                {
                    step: 7,
                    title: '最终装盘',
                    content: '炸好的鱼装盘成松鼠造型，淋上糖醋汁，撒上配菜即可。',
                    image: '',
                    tips: '趁热淋汁，这样会发出滋滋声，增加效果。'
                }
            ],
            tips: [
                '选择新鲜桂鱼，肉质才会鲜美。',
                '花刀技巧是关键，要多练习才能掌握。',
                '油温控制很重要，影响成品效果。',
                '糖醋汁的比例要准确，是成败的关键。',
                '造型要美观，体现苏菜精致的特点。',
                '这道菜要趁热享用，凉了就失去效果了。'
            ],
            nutrition: {
                calories: '210千卡/100g',
                protein: '18g',
                fat: '12g',
                carbs: '8g',
                fiber: '1g',
                sodium: '380mg'
            },
            tags: ['苏菜', '鱼类', '造型', '宴客'],
            createdAt: '2024-01-28T09:00:00Z',
            updatedAt: '2024-01-28T09:00:00Z'
        },
        {
            id: 'recipe_073',
            title: '蟹粉狮子头',
            description: '扬州名菜，蟹香浓郁，肉质鲜美。',
            image: '/cooking-platform/data/imgs/苏菜/蟹粉狮子头.png',
            cuisine: 'jiangsu',
            difficulty: 'hard',
            cookTime: '1小时',
            prepTime: '45分钟',
            servings: '4-5人',
            rating: 4.8,
            viewCount: 11800,
            favoriteCount: 2789,
            ingredients: [
                { name: '猪肉馅', amount: '500g', note: '三肥七瘦，手工剁制' },
                { name: '蟹粉', amount: '100g', note: '新鲜蟹黄蟹肉' },
                { name: '马蹄', amount: '100g', note: '去皮切细丁' },
                { name: '鸡蛋清', amount: '2个', note: '' },
                { name: '高汤', amount: '800ml', note: '鸡汤或骨汤' },
                { name: '冬笋', amount: '50g', note: '切丁' },
                { name: '香菇', amount: '4朵', note: '泡发切丁' },
                { name: '青菜心', amount: '8棵', note: '洗净备用' },
                { name: '生姜', amount: '1块', note: '切末' },
                { name: '大葱', amount: '2段', note: '切末' },
                { name: '料酒', amount: '3汤匙', note: '' },
                { name: '生抽', amount: '2汤匙', note: '' },
                { name: '盐', amount: '适量', note: '' },
                { name: '白糖', amount: '1茶匙', note: '' },
                { name: '淀粉', amount: '2汤匙', note: '调制肉馅用' },
                { name: '胡椒粉', amount: '1茶匙', note: '白胡椒粉' },
                { name: '香油', amount: '1汤匙', note: '' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '制作肉馅',
                    content: '猪肉馅加入蛋清、盐、料酒、胡椒粉，顺一个方向搅拌至起胶，再加入马蹄丁、冬笋丁拌匀。',
                    image: '',
                    tips: '肉馅要搅拌至有粘性，这样做出的狮子头才不会散。'
                },
                {
                    step: 2,
                    title: '加入蟹粉',
                    content: '将蟹粉轻轻拌入肉馅中，不要过度搅拌，保持蟹粉的完整。',
                    image: '',
                    tips: '蟹粉是精华，要轻柔处理，保持颗粒感。'
                },
                {
                    step: 3,
                    title: '制作狮子头',
                    content: '取适量肉馅，用手团成大丸子，每个约80g，表面要光滑。',
                    image: '',
                    tips: '手要蘸水，防止粘手，狮子头要做得圆润。'
                },
                {
                    step: 4,
                    title: '焯水定型',
                    content: '锅内放温水，将狮子头轻轻放入，小火煮5分钟至定型，捞起备用。',
                    image: '',
                    tips: '用温水定型，避免散掉，火不要太大。'
                },
                {
                    step: 5,
                    title: '制作汤底',
                    content: '另起砂锅，放入高汤，加料酒、生抽、盐、糖调味，烧开后转小火。',
                    image: '',
                    tips: '汤要清澈鲜美，调味要适中。'
                },
                {
                    step: 6,
                    title: '焖煮狮子头',
                    content: '将狮子头放入汤中，加香菇丁，小火焖煮30分钟至熟透。',
                    image: '',
                    tips: '要小火慢煮，让狮子头充分入味。'
                },
                {
                    step: 7,
                    title: '最后装盘',
                    content: '加入青菜心煮2分钟，淋香油，调味后即可装盘。',
                    image: '',
                    tips: '青菜心最后加入，保持翠绿色泽。'
                }
            ],
            tips: [
                '选择新鲜蟹粉是关键，决定菜品档次。',
                '肉馅的肥瘦比例要准确，影响口感。',
                '手工剁制的肉馅比机打的更有弹性。',
                '火候要掌握好，全程小火慢煮。',
                '汤要清而不浊，体现淮扬菜特色。',
                '这道菜工艺复杂，需要耐心和技巧。'
            ],
            nutrition: {
                calories: '195千卡/100g',
                protein: '20g',
                fat: '12g',
                carbs: '4g',
                fiber: '1g',
                sodium: '480mg'
            },
            tags: ['苏菜', '蟹粉', '狮子头', '传统'],
            createdAt: '2024-01-28T10:00:00Z',
            updatedAt: '2024-01-28T10:00:00Z'
        },
        {
            id: 'recipe_074',
            title: '白汁圆菜',
            description: '苏菜素食，清淡爽口，营养健康。',
            cuisine: 'jiangsu',
            difficulty: 'easy',
            cookTime: '20分钟',
            rating: 4.3,
            viewCount: 8900,
            favoriteCount: 1456,
            tags: ['苏菜', '素食', '清淡', '健康']
        },
        {
            id: 'recipe_075',
            title: '苏式红烧肉',
            description: '江苏特色，肉质酥烂，味道香甜。',
            cuisine: 'jiangsu',
            difficulty: 'medium',
            cookTime: '1小时',
            rating: 4.6,
            viewCount: 19200,
            favoriteCount: 3567,
            tags: ['苏菜', '红烧', '猪肉', '甜味']
        },
        {
            id: 'recipe_076',
            title: '清汤火方',
            description: '苏菜经典，汤清味鲜，火腿香浓。',
            cuisine: 'jiangsu',
            difficulty: 'medium',
            cookTime: '45分钟',
            rating: 4.5,
            viewCount: 7800,
            favoriteCount: 1234,
            tags: ['苏菜', '汤品', '火腿', '清淡']
        },
        {
            id: 'recipe_077',
            title: '镇江肴肉',
            description: '镇江特色，肉质鲜美，口感独特。',
            cuisine: 'jiangsu',
            difficulty: 'medium',
            cookTime: '2小时',
            rating: 4.4,
            viewCount: 6500,
            favoriteCount: 1123,
            tags: ['苏菜', '肴肉', '镇江', '特色']
        },
        {
            id: 'recipe_078',
            title: '苏式糖醋排骨',
            description: '江苏版糖醋排骨，甜味突出，色泽诱人。',
            cuisine: 'jiangsu',
            difficulty: 'medium',
            cookTime: '35分钟',
            rating: 4.6,
            viewCount: 16700,
            favoriteCount: 2890,
            tags: ['苏菜', '糖醋', '排骨', '甜味']
        },
        {
            id: 'recipe_079',
            title: '扬州炒饭',
            description: '扬州名菜，米粒分明，配料丰富。',
            image: '/cooking-platform/data/imgs/苏菜/扬州炒饭.png',
            cuisine: 'jiangsu',
            difficulty: 'medium',
            cookTime: '20分钟',
            prepTime: '15分钟',
            servings: '2-3人',
            rating: 4.7,
            viewCount: 25600,
            favoriteCount: 4789,
            ingredients: [
                { name: '米饭', amount: '400g', note: '隔夜米饭，粒粒分明' },
                { name: '鸡蛋', amount: '3个', note: '打散备用' },
                { name: '火腿', amount: '100g', note: '切小丁' },
                { name: '鲜虾仁', amount: '150g', note: '去虾线，用盐腌制' },
                { name: '海参', amount: '50g', note: '发好的海参，切丁' },
                { name: '干贝', amount: '30g', note: '提前泡发撕成丝' },
                { name: '冬笋', amount: '80g', note: '切小丁' },
                { name: '香菇', amount: '4朵', note: '泡发切丁' },
                { name: '青豆', amount: '50g', note: '焯水备用' },
                { name: '胡萝卜', amount: '50g', note: '切小丁' },
                { name: '韭黄', amount: '50g', note: '切段' },
                { name: '大葱', amount: '2段', note: '切末' },
                { name: '生姜', amount: '1小块', note: '切末' },
                { name: '料酒', amount: '2汤匙', note: '' },
                { name: '生抽', amount: '1汤匙', note: '' },
                { name: '盐', amount: '适量', note: '' },
                { name: '白胡椒粉', amount: '少许', note: '' },
                { name: '植物油', amount: '适量', note: '' },
                { name: '香油', amount: '几滴', note: '提香用' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '准备食材',
                    content: '所有配料切丁，大小要均匀。虾仁用盐、料酒腌制10分钟，青豆、胡萝卜丁焯水备用。',
                    image: '',
                    tips: '食材切丁要大小一致，这样炒出来才美观。'
                },
                {
                    step: 2,
                    title: '炒制鸡蛋',
                    content: '热锅下油，倒入蛋液快速炒散成嫩滑的蛋花，盛起备用。',
                    image: '',
                    tips: '鸡蛋要炒得嫩一些，这样口感更好。'
                },
                {
                    step: 3,
                    title: '炒制配料',
                    content: '锅内放油，下姜葱末爆香，依次下虾仁、火腿丁、海参丁、干贝丝炒香。',
                    image: '',
                    tips: '海鲜类配料要最后下，避免炒老。'
                },
                {
                    step: 4,
                    title: '下蔬菜丁',
                    content: '加入冬笋丁、香菇丁翻炒1分钟，再下青豆、胡萝卜丁炒匀。',
                    image: '',
                    tips: '蔬菜丁要保持脆嫩，不要炒过头。'
                },
                {
                    step: 5,
                    title: '下米饭炒制',
                    content: '下米饭，用锅铲压散，大火快速炒制，让每粒米饭都包裹上油分。',
                    image: '',
                    tips: '米饭要用隔夜的，这样不容易粘锅。'
                },
                {
                    step: 6,
                    title: '调味合炒',
                    content: '加入生抽、盐、胡椒粉调味，倒入炒蛋快速炒匀。',
                    image: '',
                    tips: '调料要适量，不要掩盖食材本味。'
                },
                {
                    step: 7,
                    title: '最后收尾',
                    content: '最后下韭黄段炒匀，淋香油，快速翻炒几下即可出锅。',
                    image: '',
                    tips: '韭黄最后下锅，保持翠绿色泽和香味。'
                }
            ],
            tips: [
                '米饭要用隔夜的，这样粒粒分明不粘锅。',
                '配料要丰富，体现扬州炒饭的精致。',
                '火候要大，动作要快，保持食材鲜味。',
                '调色要淡雅，不要过于浓重。',
                '正宗扬州炒饭不放酱油，颜色清淡。',
                '每种配料都要炒到恰到好处，不能过火。'
            ],
            nutrition: {
                calories: '280千卡/100g',
                protein: '15g',
                fat: '8g',
                carbs: '38g',
                fiber: '2g',
                sodium: '520mg'
            },
            tags: ['苏菜', '炒饭', '扬州', '主食'],
            createdAt: '2024-01-28T11:00:00Z',
            updatedAt: '2024-01-28T11:00:00Z'
        },
        {
            id: 'recipe_080',
            title: '苏式青团',
            description: '江南特色点心，清香软糯，春季美食。',
            cuisine: 'jiangsu',
            difficulty: 'medium',
            cookTime: '1小时',
            rating: 4.4,
            viewCount: 12300,
            favoriteCount: 2345,
            tags: ['苏菜', '点心', '青团', '春季']
        },
        {
            id: 'recipe_081',
            title: '苏式汤包',
            description: '江苏小笼包，皮薄汁多，鲜美无比。',
            image: '/cooking-platform/data/imgs/苏菜/苏式汤包.png',
            cuisine: 'jiangsu',
            difficulty: 'hard',
            cookTime: '2小时',
            prepTime: '3小时',
            servings: '4-5人',
            rating: 4.8,
            viewCount: 15600,
            favoriteCount: 3234,
            ingredients: [
                { name: '面粉', amount: '500g', note: '中筋面粉' },
                { name: '温水', amount: '250ml', note: '37°C左右' },
                { name: '干酵母', amount: '5g', note: '' },
                { name: '白糖', amount: '1茶匙', note: '发面用' },
                { name: '盐', amount: '1茶匙', note: '' },
                { name: '猪肉馅', amount: '400g', note: '肥瘦3:7' },
                { name: '猪皮冻', amount: '300g', note: '提前制作' },
                { name: '生姜', amount: '1块', note: '切末' },
                { name: '大葱', amount: '2根', note: '切末' },
                { name: '料酒', amount: '2汤匙', note: '' },
                { name: '生抽', amount: '3汤匙', note: '' },
                { name: '老抽', amount: '1汤匙', note: '调色' },
                { name: '白糖', amount: '1汤匙', note: '调馅用' },
                { name: '盐', amount: '适量', note: '' },
                { name: '胡椒粉', amount: '1茶匙', note: '白胡椒粉' },
                { name: '香油', amount: '2汤匙', note: '' },
                { name: '鸡精', amount: '1茶匙', note: '' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '制作猪皮冻',
                    content: '猪皮洗净，水开后煮30分钟，刮去肥油，切丝，加水煮2小时至胶质析出，过滤后冷藏成冻。',
                    image: '',
                    tips: '猪皮冻要提前一天制作，是汤包有汤汁的关键。'
                },
                {
                    step: 2,
                    title: '和面发酵',
                    content: '面粉加温水、酵母、糖，揉成光滑面团，盖湿布发酵至2倍大，约1.5小时。',
                    image: '',
                    tips: '面团要揉得光滑，发酵充分才能包出薄皮。'
                },
                {
                    step: 3,
                    title: '调制肉馅',
                    content: '肉馅加姜葱末、料酒、生抽、老抽、糖、盐、胡椒粉、香油、鸡精，顺一个方向搅拌上劲。',
                    image: '',
                    tips: '肉馅要搅拌至有粘性，这样包的时候不容易散。'
                },
                {
                    step: 4,
                    title: '拌入皮冻',
                    content: '将猪皮冻切小丁，轻轻拌入肉馅中，不要过度搅拌。',
                    image: '',
                    tips: '皮冻丁要小，拌入时动作要轻，保持完整。'
                },
                {
                    step: 5,
                    title: '制作包子皮',
                    content: '发好的面团揉匀排气，分成小剂子，擀成中间厚边缘薄的圆皮。',
                    image: '',
                    tips: '包子皮要擀得薄而均匀，中间略厚承重。'
                },
                {
                    step: 6,
                    title: '包制汤包',
                    content: '取适量馅料放在皮中央，用拇指和食指捏褶，收口要紧，不能漏汁。',
                    image: '',
                    tips: '包汤包的手法要熟练，褶子要均匀，收口要严。'
                },
                {
                    step: 7,
                    title: '醒发蒸制',
                    content: '包好的汤包放蒸屉上醒发20分钟，然后大火蒸15分钟即可。',
                    image: '',
                    tips: '蒸好后不要立即开盖，焖2分钟再打开。'
                },
                {
                    step: 8,
                    title: '品尝要领',
                    content: '吃汤包要"轻提、慢移、先开窗、后喝汤"，避免烫伤。',
                    image: '',
                    tips: '正宗的汤包吃法很讲究，要小心汤汁烫口。'
                }
            ],
            tips: [
                '猪皮冻是汤包有汤汁的秘密，不可省略。',
                '面皮要和得软硬适中，太硬包不住馅。',
                '包汤包的手法要多练习，熟能生巧。',
                '蒸制时间要准确，过久皮会破。',
                '吃汤包要趁热，凉了皮冻凝固就没有汤汁了。',
                '这是技术含量很高的点心，需要经验积累。'
            ],
            nutrition: {
                calories: '240千卡/100g',
                protein: '12g',
                fat: '10g',
                carbs: '28g',
                fiber: '1g',
                sodium: '580mg'
            },
            tags: ['苏菜', '包子', '汤包', '精工'],
            createdAt: '2024-01-28T12:00:00Z',
            updatedAt: '2024-01-28T12:00:00Z'
        },
        {
            id: 'recipe_082',
            title: '苏式蜜汁藕',
            description: '江苏甜菜，藕片软糯，蜜汁香甜。',
            image: '/cooking-platform/data/imgs/苏菜/苏式蜜汁藕.png',
            cuisine: 'jiangsu',
            difficulty: 'easy',
            cookTime: '30分钟',
            prepTime: '15分钟',
            servings: '3-4人',
            rating: 4.3,
            viewCount: 9800,
            favoriteCount: 1567,
            ingredients: [
                { name: '莲藕', amount: '500g', note: '选择脆嫩的莲藕' },
                { name: '蜂蜜', amount: '4汤匙', note: '优质蜂蜜' },
                { name: '冰糖', amount: '50g', note: '' },
                { name: '白糖', amount: '3汤匙', note: '' },
                { name: '桂花', amount: '10g', note: '干桂花' },
                { name: '红枣', amount: '6个', note: '去核切片' },
                { name: '枸杞', amount: '20g', note: '清洗备用' },
                { name: '淀粉', amount: '1汤匙', note: '勾芡用' },
                { name: '柠檬汁', amount: '1汤匙', note: '防氧化' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '处理莲藕',
                    content: '莲藕去皮洗净，切成0.8cm厚的片，用淡盐水浸泡防氧化。',
                    image: '',
                    tips: '选择脆嫩的莲藕，孔洞要干净无泥。'
                },
                {
                    step: 2,
                    title: '焯水处理',
                    content: '锅内水开后，下藕片焯烫2分钟至断生，捞出过凉水。',
                    image: '',
                    tips: '焯水时间不要太长，保持藕片脆嫩。'
                },
                {
                    step: 3,
                    title: '制作蜜汁',
                    content: '锅内放少许水，下冰糖、白糖、红枣片小火煮至糖化。',
                    image: '',
                    tips: '糖要完全化开，火候不能太大。'
                },
                {
                    step: 4,
                    title: '加藕片炖煮',
                    content: '下藕片小火炖15分钟，让藕片充分吸收甜味。',
                    image: '',
                    tips: '要小火慢炖，让藕片入味但不煮烂。'
                },
                {
                    step: 5,
                    title: '调制蜜汁',
                    content: '加入蜂蜜、柠檬汁调味，用少许淀粉水勾薄芡。',
                    image: '',
                    tips: '蜂蜜最后加入，保持营养和香味。'
                },
                {
                    step: 6,
                    title: '装盘装饰',
                    content: '盛盘后撒枸杞和桂花装饰，晾凉后享用口感更佳。',
                    image: '',
                    tips: '可热食也可凉食，各有风味。'
                }
            ],
            tips: [
                '选择脆嫩莲藕是关键，老藕口感差。',
                '焯水能去除涩味，保持脆嫩。',
                '苏菜偏甜，糖的用量要足够。',
                '蜂蜜要最后加入，避免高温破坏营养。',
                '这道菜有润肺清热的功效。',
                '可作为餐前开胃菜或餐后甜品。'
            ],
            nutrition: {
                calories: '95千卡/100g',
                protein: '2g',
                fat: '0.5g',
                carbs: '22g',
                fiber: '4g',
                sodium: '25mg'
            },
            tags: ['苏菜', '甜菜', '藕片', '素食'],
            createdAt: '2024-01-29T11:00:00Z',
            updatedAt: '2024-01-29T11:00:00Z'
        },
        {
            id: 'recipe_083',
            title: '苏式白切肉',
            description: '江苏家常菜，肉质鲜嫩，蘸料丰富。',
            cuisine: 'jiangsu',
            difficulty: 'easy',
            cookTime: '40分钟',
            rating: 4.2,
            viewCount: 11700,
            favoriteCount: 1890,
            tags: ['苏菜', '白切', '猪肉', '家常']
        },
        {
            id: 'recipe_084',
            title: '苏式鸭血粉丝汤',
            description: '南京特色，汤鲜味美，营养丰富。',
            image: '/cooking-platform/data/imgs/苏菜/苏式鸭血粉丝汤.png',
            cuisine: 'jiangsu',
            difficulty: 'easy',
            cookTime: '25分钟',
            prepTime: '15分钟',
            servings: '2-3人',
            rating: 4.4,
            viewCount: 18200,
            favoriteCount: 3123,
            ingredients: [
                { name: '鸭血', amount: '200g', note: '新鲜鸭血，切块' },
                { name: '粉丝', amount: '100g', note: '红薯粉丝，泡软' },
                { name: '鸭肠', amount: '100g', note: '处理干净，切段' },
                { name: '鸭肝', amount: '50g', note: '切片，可选' },
                { name: '豆腐果', amount: '100g', note: '油豆腐，切半' },
                { name: '韭菜', amount: '50g', note: '切段' },
                { name: '香菜', amount: '30g', note: '切段' },
                { name: '鸭汤', amount: '800ml', note: '浓郁鸭汤' },
                { name: '生姜', amount: '3片', note: '' },
                { name: '大蒜', amount: '2瓣', note: '切末' },
                { name: '生抽', amount: '2汤匙', note: '' },
                { name: '料酒', amount: '1汤匙', note: '' },
                { name: '盐', amount: '适量', note: '' },
                { name: '白胡椒粉', amount: '1茶匙', note: '' },
                { name: '香油', amount: '几滴', note: '' },
                { name: '辣椒油', amount: '适量', note: '根据喜好' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '处理鸭血',
                    content: '新鲜鸭血切成2cm见方的块，用淡盐水浸泡10分钟去腥。',
                    image: '',
                    tips: '鸭血要新鲜，浸泡能去除血腥味。'
                },
                {
                    step: 2,
                    title: '处理鸭杂',
                    content: '鸭肠用盐搓洗干净，鸭肝切片，用开水焯烫1分钟去腥。',
                    image: '',
                    tips: '鸭杂处理要彻底，去除异味很重要。'
                },
                {
                    step: 3,
                    title: '准备配菜',
                    content: '粉丝用温水泡软，豆腐果切半，韭菜香菜洗净切段。',
                    image: '',
                    tips: '粉丝不要泡得太软，保持一定嚼劲。'
                },
                {
                    step: 4,
                    title: '煮制汤底',
                    content: '鸭汤烧开，加姜片、料酒去腥，调入生抽、盐、胡椒粉调味。',
                    image: '',
                    tips: '鸭汤要浓郁，是这道菜好喝的基础。'
                },
                {
                    step: 5,
                    title: '下料煮制',
                    content: '先下鸭肠、鸭肝煮2分钟，再下鸭血、豆腐果、粉丝煮3分钟。',
                    image: '',
                    tips: '鸭血要轻柔下锅，避免弄碎。'
                },
                {
                    step: 6,
                    title: '最后调味',
                    content: '下韭菜段煮1分钟，撒香菜段，淋香油和辣椒油即可。',
                    image: '',
                    tips: '韭菜和香菜最后下锅，保持翠绿和香味。'
                }
            ],
            tips: [
                '选择新鲜鸭血是关键，影响口感。',
                '鸭杂处理要仔细，去腥很重要。',
                '汤底要浓郁鲜美，最好用老鸭汤。',
                '鸭血下锅要轻柔，避免弄碎。',
                '这是南京人最喜爱的小吃之一。',
                '趁热享用，汤鲜血嫩粉丝滑。'
            ],
            nutrition: {
                calories: '85千卡/100g',
                protein: '8g',
                fat: '3g',
                carbs: '8g',
                fiber: '1g',
                sodium: '480mg'
            },
            tags: ['苏菜', '汤品', '鸭血', '南京'],
            createdAt: '2024-01-29T12:00:00Z',
            updatedAt: '2024-01-29T12:00:00Z'
        },
        {
            id: 'recipe_085',
            title: '苏式桂花糯米藕',
            description: '江南甜品，糯米香甜，桂花飘香。',
            image: '/cooking-platform/data/imgs/苏菜/苏式桂花糯米藕.png',
            cuisine: 'jiangsu',
            difficulty: 'medium',
            cookTime: '1.5小时',
            prepTime: '30分钟',
            servings: '4-5人',
            rating: 4.5,
            viewCount: 10900,
            favoriteCount: 2234,
            ingredients: [
                { name: '莲藕', amount: '2节', note: '粗大完整的莲藕' },
                { name: '糯米', amount: '200g', note: '提前浸泡2小时' },
                { name: '冰糖', amount: '150g', note: '' },
                { name: '红糖', amount: '100g', note: '调色用' },
                { name: '桂花', amount: '20g', note: '干桂花' },
                { name: '红枣', amount: '8个', note: '去核' },
                { name: '枸杞', amount: '30g', note: '清洗备用' },
                { name: '蜂蜜', amount: '3汤匙', note: '最后调味' },
                { name: '桂花蜜', amount: '2汤匙', note: '装饰用' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '准备莲藕',
                    content: '选择粗大莲藕，一端切开约3cm做盖子，用小勺挖空内部，洗净沥干。',
                    image: '',
                    tips: '选择孔洞大而均匀的莲藕，便于灌入糯米。'
                },
                {
                    step: 2,
                    title: '灌入糯米',
                    content: '将浸泡好的糯米填入藕孔中，用筷子压实，盖上切下的藕盖，用牙签固定。',
                    image: '',
                    tips: '糯米要填满压实，这样蒸出来口感才好。'
                },
                {
                    step: 3,
                    title: '蒸制糯米藕',
                    content: '将填好的糯米藕放入蒸锅，大火蒸1小时至糯米熟透。',
                    image: '',
                    tips: '蒸制时间要足够，让糯米完全熟透。'
                },
                {
                    step: 4,
                    title: '制作糖浆',
                    content: '锅内放冰糖、红糖、红枣，加水煮制成浓稠糖浆，过滤备用。',
                    image: '',
                    tips: '糖浆要煮得浓稠，颜色要红亮。'
                },
                {
                    step: 5,
                    title: '切片装盘',
                    content: '蒸好的糯米藕晾凉后切成1cm厚的片，整齐摆放在盘中。',
                    image: '',
                    tips: '要完全晾凉再切，否则糯米会散开。'
                },
                {
                    step: 6,
                    title: '浇汁装饰',
                    content: '淋上糖浆和蜂蜜，撒桂花和枸杞装饰即可享用。',
                    image: '',
                    tips: '可热食也可冷藏后享用，各有风味。'
                }
            ],
            tips: [
                '选择合适的莲藕很重要，孔洞要大而整齐。',
                '糯米要提前充分浸泡，蒸制时才能熟透。',
                '灌米时要耐心，每个孔都要填满。',
                '蒸制时间要充足，确保糯米完全熟透。',
                '这是江南地区的传统甜品。',
                '寓意甜甜蜜蜜，是节庆和宴客的佳品。'
            ],
            nutrition: {
                calories: '220千卡/100g',
                protein: '4g',
                fat: '1g',
                carbs: '50g',
                fiber: '6g',
                sodium: '15mg'
            },
            tags: ['苏菜', '甜品', '糯米藕', '桂花'],
            createdAt: '2024-01-29T13:00:00Z',
            updatedAt: '2024-01-29T13:00:00Z'
        },
        {
            id: 'recipe_086',
            title: '苏式酱排骨',
            description: '江苏特色，排骨酥烂，酱香浓郁。',
            image: '/cooking-platform/data/imgs/苏菜/苏式酱排骨.png',
            cuisine: 'jiangsu',
            difficulty: 'medium',
            cookTime: '45分钟',
            prepTime: '20分钟',
            servings: '3-4人',
            rating: 4.6,
            viewCount: 14800,
            favoriteCount: 2567,
            ingredients: [
                { name: '猪排骨', amount: '800g', note: '肋排，剁段' },
                { name: '甜面酱', amount: '4汤匙', note: '苏式特色' },
                { name: '生抽', amount: '3汤匙', note: '' },
                { name: '老抽', amount: '2汤匙', note: '上色用' },
                { name: '料酒', amount: '3汤匙', note: '' },
                { name: '冰糖', amount: '50g', note: '苏菜偏甜' },
                { name: '大葱', amount: '3段', note: '切段' },
                { name: '生姜', amount: '1块', note: '切片' },
                { name: '八角', amount: '2个', note: '' },
                { name: '桂皮', amount: '1段', note: '' },
                { name: '盐', amount: '适量', note: '' },
                { name: '植物油', amount: '适量', note: '' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '处理排骨',
                    content: '排骨剁成4cm段，冷水下锅焯水，撇去浮沫血污，捞出洗净。',
                    image: '',
                    tips: '焯水能去除血污和腥味，让酱排骨更香。'
                },
                {
                    step: 2,
                    title: '煸炒排骨',
                    content: '热锅下少许油，下排骨煸炒至表面微黄，出香味。',
                    image: '',
                    tips: '煸炒能让排骨更香，去除腥味。'
                },
                {
                    step: 3,
                    title: '炒制酱料',
                    content: '下甜面酱小火炒香，炒出酱香味，再加生抽、老抽炒匀。',
                    image: '',
                    tips: '甜面酱要炒出香味，是苏式酱排骨的关键。'
                },
                {
                    step: 4,
                    title: '调味炖煮',
                    content: '加料酒、冰糖、葱段、姜片、八角、桂皮，倒入热水没过排骨。',
                    image: '',
                    tips: '苏菜偏甜，冰糖是必需的调料。'
                },
                {
                    step: 5,
                    title: '小火焖炖',
                    content: '大火烧开后转小火炖30分钟至排骨酥烂，能轻松脱骨。',
                    image: '',
                    tips: '要小火慢炖，让排骨充分软烂入味。'
                },
                {
                    step: 6,
                    title: '收汁出锅',
                    content: '最后大火收汁，收至汤汁浓稠包裹排骨，调味即可出锅。',
                    image: '',
                    tips: '收汁时要翻动排骨，让每块都裹上酱汁。'
                }
            ],
            tips: [
                '选择新鲜排骨，肉质要好。',
                '甜面酱的炒制是关键，要炒出香味。',
                '苏菜偏甜，糖的用量要足够。',
                '炖煮时间要充足，排骨要软烂。',
                '酱汁要浓稠红亮，包裹每块排骨。',
                '这是苏菜中经典的酱烧类菜品。'
            ],
            nutrition: {
                calories: '320千卡/100g',
                protein: '22g',
                fat: '20g',
                carbs: '12g',
                fiber: '0g',
                sodium: '680mg'
            },
            tags: ['苏菜', '酱菜', '排骨', '家常'],
            createdAt: '2024-01-29T14:00:00Z',
            updatedAt: '2024-01-29T14:00:00Z'
        },
        // 浙菜
        {
            id: 'recipe_087',
            title: '西湖醋鱼',
            description: '杭州名菜，鱼肉鲜嫩，酸甜开胃。',
            image: '/cooking-platform/data/imgs/浙菜/西湖醋鱼.png',
            cuisine: 'zhejiang',
            difficulty: 'medium',
            cookTime: '25分钟',
            prepTime: '20分钟',
            servings: '3-4人',
            rating: 4.8,
            viewCount: 16500,
            favoriteCount: 3456,
            ingredients: [
                { name: '活草鱼', amount: '1条(约800g)', note: '新鲜活鱼' },
                { name: '镇江香醋', amount: '4汤匙', note: '正宗镇江醋' },
                { name: '白糖', amount: '3汤匙', note: '' },
                { name: '生抽', amount: '2汤匙', note: '' },
                { name: '料酒', amount: '2汤匙', note: '' },
                { name: '盐', amount: '1茶匙', note: '' },
                { name: '淀粉', amount: '2汤匙', note: '勾芡用' },
                { name: '生姜', amount: '1块', note: '切丝' },
                { name: '大葱', amount: '2段', note: '切丝' },
                { name: '蒜瓣', amount: '3个', note: '切末' },
                { name: '鸡蛋清', amount: '1个', note: '' },
                { name: '植物油', amount: '适量', note: '' },
                { name: '香菜', amount: '适量', note: '装饰用' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '处理鱼肉',
                    content: '活草鱼宰杀洗净，从背部开刀，去骨去刺，片成两大片鱼肉，在鱼肉上斜切花刀。',
                    image: '',
                    tips: '鱼肉要新鲜，花刀要均匀，深度约2/3，不要切断。'
                },
                {
                    step: 2,
                    title: '腌制鱼肉',
                    content: '鱼肉用盐、料酒腌制15分钟，然后用蛋清和少许淀粉抓匀上浆。',
                    image: '',
                    tips: '腌制能去腥增鲜，上浆能保持鱼肉嫩滑。'
                },
                {
                    step: 3,
                    title: '调制糖醋汁',
                    content: '香醋、糖、生抽、少许盐和100ml清水调成糖醋汁，比例要酸甜适中。',
                    image: '',
                    tips: '糖醋汁是这道菜的精髓，比例要准确。'
                },
                {
                    step: 4,
                    title: '焯水定型',
                    content: '锅内水开后，将鱼肉快速焯水30秒定型，捞起沥干水分。',
                    image: '',
                    tips: '焯水时间要短，只是为了定型，不要煮老。'
                },
                {
                    step: 5,
                    title: '制作醋汁',
                    content: '锅内放少许油，爆香姜蒜末，倒入调好的糖醋汁，烧开后用水淀粉勾芡。',
                    image: '',
                    tips: '醋汁要烧至微微粘稠，颜色红亮。'
                },
                {
                    step: 6,
                    title: '浇汁装盘',
                    content: '将处理好的鱼肉装盘，趁热浇上糖醋汁，撒上葱丝和香菜装饰。',
                    image: '',
                    tips: '要趁热浇汁，这样鱼肉能更好地吸收汁味。'
                }
            ],
            tips: [
                '选择新鲜活草鱼，肉质才会鲜美。',
                '花刀技法要熟练，影响成品美观。',
                '糖醋汁的调配是关键，要多次尝试找到最佳比例。',
                '焯水时间掌握很重要，过久鱼肉会老。',
                '这道菜要趁热享用，体现浙菜清淡的特点。',
                '正宗西湖醋鱼不放番茄酱，保持原有风味。'
            ],
            nutrition: {
                calories: '165千卡/100g',
                protein: '18g',
                fat: '6g',
                carbs: '12g',
                fiber: '0g',
                sodium: '420mg'
            },
            tags: ['浙菜', '鱼类', '酸甜', '杭州'],
            createdAt: '2024-01-28T13:00:00Z',
            updatedAt: '2024-01-28T13:00:00Z'
        },
        {
            id: 'recipe_088',
            title: '东坡肉',
            description: '杭州传统菜，肥而不腻，入口即化。',
            image: '/cooking-platform/data/imgs/浙菜/东坡肉.png',
            cuisine: 'zhejiang',
            difficulty: 'medium',
            cookTime: '2小时',
            prepTime: '20分钟',
            servings: '4-5人',
            rating: 4.7,
            viewCount: 13200,
            favoriteCount: 2789,
            ingredients: [
                { name: '五花肉', amount: '1kg', note: '带皮五花肉，肥瘦相间' },
                { name: '绍兴黄酒', amount: '200ml', note: '正宗绍兴酒' },
                { name: '冰糖', amount: '80g', note: '炒糖色用' },
                { name: '生抽', amount: '3汤匙', note: '' },
                { name: '老抽', amount: '2汤匙', note: '上色用' },
                { name: '盐', amount: '1茶匙', note: '' },
                { name: '大葱', amount: '3段', note: '切段，垫底用' },
                { name: '生姜', amount: '1大块', note: '拍碎' },
                { name: '八角', amount: '2个', note: '' },
                { name: '桂皮', amount: '1段', note: '' },
                { name: '香叶', amount: '3片', note: '' },
                { name: '植物油', amount: '适量', note: '' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '处理五花肉',
                    content: '五花肉洗净，切成5cm见方的块，用开水焯烫5分钟，去除血污，洗净备用。',
                    image: '',
                    tips: '焯水能去除血污和腥味，让成品更干净。'
                },
                {
                    step: 2,
                    title: '煎制肉块',
                    content: '平底锅刷少许油，将肉块皮朝下煎至金黄，再翻面煎制，六面都要煎到微黄。',
                    image: '',
                    tips: '煎制能让肉块表面定型，也能煎出部分油脂。'
                },
                {
                    step: 3,
                    title: '炒制糖色',
                    content: '另起锅，小火炒冰糖至焦糖色，颜色呈琥珀状时，立即下入煎好的肉块翻炒上色。',
                    image: '',
                    tips: '炒糖色火候很关键，过了会发苦，要掌握好时机。'
                },
                {
                    step: 4,
                    title: '添酒调味',
                    content: '加入绍兴黄酒、生抽、老抽炒匀，再放入姜块、八角、桂皮、香叶。',
                    image: '',
                    tips: '绍兴酒是东坡肉的精髓，不能用料酒代替。'
                },
                {
                    step: 5,
                    title: '砂锅慢炖',
                    content: '砂锅底部铺上葱段，将肉块皮朝上码放，倒入炒制时的汁液，加水刚好没过肉块。',
                    image: '',
                    tips: '用砂锅炖制受热更均匀，口感更佳。'
                },
                {
                    step: 6,
                    title: '小火慢炖',
                    content: '大火烧开后转最小火，盖锅盖炖1.5小时，期间不要翻动。',
                    image: '',
                    tips: '要用最小火慢炖，让肉质慢慢变软糯。'
                },
                {
                    step: 7,
                    title: '收汁装盘',
                    content: '最后30分钟开盖，转中火收汁，汁浓稠后即可装盘。',
                    image: '',
                    tips: '收汁时要小心，避免糊底，汁要浓稠光亮。'
                }
            ],
            tips: [
                '选择优质五花肉，肥瘦比例要合适。',
                '绍兴黄酒是正宗做法的必需品。',
                '全程小火慢炖是关键，不能着急。',
                '砂锅炖制效果最佳，受热均匀。',
                '正宗东坡肉色泽红亮，肥而不腻。',
                '这道菜体现了浙菜精工细作的特点。'
            ],
            nutrition: {
                calories: '380千卡/100g',
                protein: '12g',
                fat: '35g',
                carbs: '8g',
                fiber: '0g',
                sodium: '620mg'
            },
            tags: ['浙菜', '红烧', '猪肉', '传统'],
            createdAt: '2024-01-28T14:00:00Z',
            updatedAt: '2024-01-28T14:00:00Z'
        },
        {
            id: 'recipe_089',
            title: '龙井虾仁',
            description: '杭州名菜，虾仁鲜嫩，茶香淡雅。',
            cuisine: 'zhejiang',
            difficulty: 'medium',
            cookTime: '15分钟',
            rating: 4.6,
            viewCount: 12800,
            favoriteCount: 2345,
            tags: ['浙菜', '海鲜', '茶香', '清淡']
        },
        {
            id: 'recipe_090',
            title: '叫化鸡',
            description: '浙菜名菜，鸡肉嫩滑，香味浓郁。',
            cuisine: 'zhejiang',
            difficulty: 'hard',
            cookTime: '2小时',
            rating: 4.8,
            viewCount: 9800,
            favoriteCount: 1890,
            tags: ['浙菜', '鸡肉', '传统', '特色']
        },
        {
            id: 'recipe_091',
            title: '浙式蒸蛋',
            description: '浙江家常菜，蛋羹滑嫩，清香可口。',
            cuisine: 'zhejiang',
            difficulty: 'easy',
            cookTime: '12分钟',
            rating: 4.3,
            viewCount: 14500,
            favoriteCount: 2456,
            tags: ['浙菜', '蒸菜', '鸡蛋', '家常']
        },
        {
            id: 'recipe_092',
            title: '浙式年糕',
            description: '浙江传统小吃，软糯香甜，寓意美好。',
            image: '/cooking-platform/data/imgs/浙菜/浙式年糕.png',
            cuisine: 'zhejiang',
            difficulty: 'easy',
            cookTime: '20分钟',
            prepTime: '15分钟',
            servings: '3-4人',
            rating: 4.4,
            viewCount: 16700,
            favoriteCount: 2890,
            ingredients: [
                { name: '年糕片', amount: '400g', note: '宁波水磨年糕' },
                { name: '青菜', amount: '200g', note: '小白菜或青菜心' },
                { name: '香菇', amount: '6朵', note: '泡发切片' },
                { name: '笋丝', amount: '100g', note: '冬笋切丝' },
                { name: '肉丝', amount: '100g', note: '猪肉丝，可选' },
                { name: '生抽', amount: '2汤匙', note: '' },
                { name: '老抽', amount: '1茶匙', note: '调色' },
                { name: '白糖', amount: '2茶匙', note: '浙菜偏甜' },
                { name: '盐', amount: '适量', note: '' },
                { name: '料酒', amount: '1汤匙', note: '' },
                { name: '香油', amount: '几滴', note: '' },
                { name: '植物油', amount: '2汤匙', note: '' },
                { name: '高汤', amount: '200ml', note: '或清水' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '准备年糕',
                    content: '年糕片用温水浸泡至软身，青菜洗净切段，香菇泡发切片。',
                    image: '',
                    tips: '宁波年糕要选择水磨的，口感更糯。'
                },
                {
                    step: 2,
                    title: '焯水处理',
                    content: '年糕片在沸水中焯烫1分钟至软身，捞出沥干备用。',
                    image: '',
                    tips: '焯水能去除年糕的硬心，让后续炒制更容易。'
                },
                {
                    step: 3,
                    title: '炒制配菜',
                    content: '热锅下油，如有肉丝先炒至变色，再下香菇片、笋丝炒香。',
                    image: '',
                    tips: '配菜要炒出香味，增加年糕的层次。'
                },
                {
                    step: 4,
                    title: '下年糕炒制',
                    content: '下年糕片翻炒，加生抽、老抽、糖、料酒调味上色。',
                    image: '',
                    tips: '年糕要炒至每片都上色均匀。'
                },
                {
                    step: 5,
                    title: '加汤焖煮',
                    content: '倒入高汤或清水，盖锅小火焖5分钟，让年糕充分入味。',
                    image: '',
                    tips: '焖煮能让年糕更软糯，也更入味。'
                },
                {
                    step: 6,
                    title: '下青菜收汁',
                    content: '下青菜段炒至断生，大火收汁，淋香油即可出锅。',
                    image: '',
                    tips: '青菜最后下锅，保持翠绿色泽。'
                }
            ],
            tips: [
                '选择正宗宁波水磨年糕，口感最佳。',
                '年糕要先焯水处理，避免炒制时粘锅。',
                '浙菜偏甜，白糖是必需的调料。',
                '配菜可根据季节和喜好调整。',
                '火候要掌握好，避免年糕炒糊。',
                '这道菜寓意年年高升，是节庆必备。'
            ],
            nutrition: {
                calories: '180千卡/100g',
                protein: '4g',
                fat: '6g',
                carbs: '28g',
                fiber: '3g',
                sodium: '420mg'
            },
            tags: ['浙菜', '年糕', '小吃', '传统'],
            createdAt: '2024-01-29T04:00:00Z',
            updatedAt: '2024-01-29T04:00:00Z'
        },
        {
            id: 'recipe_093',
            title: '宁波汤圆',
            description: '宁波特色，汤圆软糯，馅料丰富。',
            image: '/cooking-platform/data/imgs/浙菜/宁波汤圆.png',
            cuisine: 'zhejiang',
            difficulty: 'medium',
            cookTime: '30分钟',
            prepTime: '1小时',
            servings: '4-6人',
            rating: 4.5,
            viewCount: 11200,
            favoriteCount: 1789,
            ingredients: [
                { name: '糯米粉', amount: '300g', note: '优质糯米粉' },
                { name: '温水', amount: '200ml', note: '和面用' },
                { name: '黑芝麻', amount: '100g', note: '炒香' },
                { name: '白糖', amount: '80g', note: '做馅用' },
                { name: '猪油', amount: '60g', note: '做馅用' },
                { name: '核桃仁', amount: '50g', note: '炒香切碎' },
                { name: '花生仁', amount: '50g', note: '炒香去皮' },
                { name: '桂花', amount: '5g', note: '干桂花，可选' },
                { name: '红豆沙', amount: '150g', note: '另一种馅料' },
                { name: '红糖', amount: '50g', note: '煮汤圆用' },
                { name: '桂圆肉', amount: '30g', note: '煮汤用' },
                { name: '红枣', amount: '6个', note: '去核，煮汤用' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '制作黑芝麻馅',
                    content: '黑芝麻炒香磨碎，加白糖、猪油、核桃碎、花生碎拌匀成馅。',
                    image: '',
                    tips: '芝麻要炒得香，磨得细，这样馅料才香滑。'
                },
                {
                    step: 2,
                    title: '和制糯米团',
                    content: '糯米粉加温水和成光滑面团，不粘手为宜，盖布醒20分钟。',
                    image: '',
                    tips: '水温要适中，面团软硬度要正好。'
                },
                {
                    step: 3,
                    title: '包制汤圆',
                    content: '取小块面团揉圆压扁，包入馅料，收口搓圆成汤圆。',
                    image: '',
                    tips: '包制时要封口严实，汤圆要搓得圆润。'
                },
                {
                    step: 4,
                    title: '准备汤底',
                    content: '锅内加水，放入红枣、桂圆肉煮10分钟成甜汤。',
                    image: '',
                    tips: '汤底要有淡淡甜味，不要过甜。'
                },
                {
                    step: 5,
                    title: '煮制汤圆',
                    content: '水开后下汤圆，煮至汤圆浮起再煮2-3分钟即熟。',
                    image: '',
                    tips: '汤圆浮起表示基本熟了，再煮片刻确保熟透。'
                },
                {
                    step: 6,
                    title: '调味装盘',
                    content: '用红糖调整汤的甜度，盛入碗中，撒桂花装饰即可。',
                    image: '',
                    tips: '趁热享用，汤圆软糯，汤甜香浓。'
                }
            ],
            tips: [
                '糯米粉要选择优质的，影响汤圆口感。',
                '黑芝麻馅要调得香甜适中。',
                '包汤圆的手法要熟练，避免露馅。',
                '煮汤圆火候要掌握好，避免煮破皮。',
                '宁波汤圆以黑芝麻馅最为著名。',
                '这是元宵节的传统美食，寓意团圆。'
            ],
            nutrition: {
                calories: '280千卡/100g',
                protein: '6g',
                fat: '12g',
                carbs: '38g',
                fiber: '4g',
                sodium: '80mg'
            },
            tags: ['浙菜', '汤圆', '甜品', '宁波'],
            createdAt: '2024-01-29T05:00:00Z',
            updatedAt: '2024-01-29T05:00:00Z'
        },
        {
            id: 'recipe_094',
            title: '浙式白切羊肉',
            description: '浙江特色，羊肉鲜嫩，蘸料独特。',
            image: '/cooking-platform/data/imgs/浙菜/浙式白切羊肉.png',
            cuisine: 'zhejiang',
            difficulty: 'easy',
            cookTime: '1小时',
            prepTime: '20分钟',
            servings: '4-5人',
            rating: 4.4,
            viewCount: 8600,
            favoriteCount: 1345,
            ingredients: [
                { name: '羊腿肉', amount: '1kg', note: '带骨羊腿' },
                { name: '白萝卜', amount: '300g', note: '切厚片，去膻味' },
                { name: '大葱', amount: '3根', note: '切段' },
                { name: '生姜', amount: '1大块', note: '拍碎' },
                { name: '料酒', amount: '100ml', note: '黄酒最佳' },
                { name: '花椒', amount: '1汤匙', note: '' },
                { name: '八角', amount: '2个', note: '' },
                { name: '桂皮', amount: '1段', note: '' },
                { name: '盐', amount: '2茶匙', note: '' },
                { name: '蒜泥', amount: '50g', note: '做蘸料' },
                { name: '生抽', amount: '4汤匙', note: '做蘸料' },
                { name: '香醋', amount: '2汤匙', note: '镇江香醋' },
                { name: '香油', amount: '1汤匙', note: '做蘸料' },
                { name: '辣椒油', amount: '1汤匙', note: '可选' },
                { name: '香菜', amount: '适量', note: '装饰用' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '处理羊肉',
                    content: '羊腿肉洗净，冷水下锅，加料酒、葱段、姜片焯水，撇去浮沫血污。',
                    image: '',
                    tips: '焯水能去除羊肉的膻味和血污。'
                },
                {
                    step: 2,
                    title: '加料炖煮',
                    content: '焯好的羊肉重新加水，放入白萝卜、花椒、八角、桂皮、葱姜，大火烧开。',
                    image: '',
                    tips: '白萝卜能很好地去除羊肉膻味。'
                },
                {
                    step: 3,
                    title: '小火慢炖',
                    content: '转小火炖45分钟至羊肉软烂，用筷子能轻松穿透即可。',
                    image: '',
                    tips: '要小火慢炖，让羊肉充分软烂。'
                },
                {
                    step: 4,
                    title: '调制蘸料',
                    content: '蒜泥、生抽、香醋、香油调成蒜泥汁，可加少许辣椒油。',
                    image: '',
                    tips: '蘸料是白切羊肉的精华搭配。'
                },
                {
                    step: 5,
                    title: '晾凉切片',
                    content: '羊肉煮好后捞出晾凉，切成薄片整齐摆盘。',
                    image: '',
                    tips: '要完全晾凉再切，这样不容易散开。'
                },
                {
                    step: 6,
                    title: '装盘上桌',
                    content: '切好的羊肉配蘸料，撒香菜装饰即可上桌享用。',
                    image: '',
                    tips: '配好蘸料一起享用，能很好地解腥提味。'
                }
            ],
            tips: [
                '选择新鲜羊肉，膻味相对较轻。',
                '白萝卜是去膻的关键配菜。',
                '炖煮时间要充足，羊肉要软烂。',
                '蘸料调配是这道菜的精华。',
                '这道菜体现了浙菜清淡的特色。',
                '适合秋冬季节食用，温补效果好。'
            ],
            nutrition: {
                calories: '220千卡/100g',
                protein: '25g',
                fat: '12g',
                carbs: '3g',
                fiber: '1g',
                sodium: '480mg'
            },
            tags: ['浙菜', '羊肉', '白切', '清淡'],
            createdAt: '2024-01-29T06:00:00Z',
            updatedAt: '2024-01-29T06:00:00Z'
        },
        {
            id: 'recipe_095',
            title: '浙式红烧肉',
            description: '浙江红烧肉，色泽红亮，甜而不腻。',
            image: '/cooking-platform/data/imgs/浙菜/浙式红烧肉.png',
            cuisine: 'zhejiang',
            difficulty: 'medium',
            cookTime: '1小时',
            prepTime: '15分钟',
            servings: '4-5人',
            rating: 4.6,
            viewCount: 18900,
            favoriteCount: 3234,
            ingredients: [
                { name: '五花肉', amount: '1kg', note: '带皮五花肉，肥瘦相间' },
                { name: '冰糖', amount: '100g', note: '浙式偏甜' },
                { name: '生抽', amount: '4汤匙', note: '' },
                { name: '老抽', amount: '2汤匙', note: '上色用' },
                { name: '绍兴酒', amount: '100ml', note: '浙菜特色' },
                { name: '大葱', amount: '3段', note: '切段' },
                { name: '生姜', amount: '1大块', note: '拍碎' },
                { name: '八角', amount: '2个', note: '' },
                { name: '桂皮', amount: '1段', note: '' },
                { name: '香叶', amount: '3片', note: '' },
                { name: '盐', amount: '1茶匙', note: '' },
                { name: '植物油', amount: '适量', note: '' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '处理五花肉',
                    content: '五花肉洗净切成4cm见方的块，冷水下锅焯水，撇去浮沫，捞出洗净。',
                    image: '',
                    tips: '焯水能去除血污和腥味，让红烧肉更香。'
                },
                {
                    step: 2,
                    title: '炒制糖色',
                    content: '锅内放少量油，下冰糖小火慢炒至深红色，立即加少许热水调成糖色汁。',
                    image: '',
                    tips: '浙式红烧肉糖色要深一些，甜味更浓。'
                },
                {
                    step: 3,
                    title: '煸炒肉块',
                    content: '下肉块煸炒至表面微黄，倒入糖色汁翻炒上色。',
                    image: '',
                    tips: '煸炒能让肉更香，上色要均匀。'
                },
                {
                    step: 4,
                    title: '添酒调味',
                    content: '加入绍兴酒、生抽、老抽炒匀，放入葱段、姜块、香料。',
                    image: '',
                    tips: '绍兴酒是浙菜的特色，不能省略。'
                },
                {
                    step: 5,
                    title: '加水炖煮',
                    content: '加水刚好没过肉块，大火烧开后转小火炖45分钟至软烂。',
                    image: '',
                    tips: '炖煮时间要充足，让肉质变软糯。'
                },
                {
                    step: 6,
                    title: '收汁出锅',
                    content: '最后大火收汁，调入盐，收至汤汁浓稠红亮即可。',
                    image: '',
                    tips: '浙式红烧肉汁要浓稠甜润，色泽红亮。'
                }
            ],
            tips: [
                '选择优质五花肉，肥瘦比例要合适。',
                '浙菜偏甜，冰糖用量比其他菜系多。',
                '绍兴酒是浙菜红烧肉的特色调料。',
                '炖煮火候要掌握好，小火慢炖。',
                '糖色要炒得深一些，体现浙菜特色。',
                '成品要甜而不腻，肥而不腻。'
            ],
            nutrition: {
                calories: '360千卡/100g',
                protein: '15g',
                fat: '32g',
                carbs: '12g',
                fiber: '0g',
                sodium: '620mg'
            },
            tags: ['浙菜', '红烧', '猪肉', '甜味'],
            createdAt: '2024-01-29T07:00:00Z',
            updatedAt: '2024-01-29T07:00:00Z'
        },
        // 更多浙菜
        {
            id: 'recipe_096',
            title: '浙式白斩鸡',
            description: '浙江白切鸡，鸡肉嫩滑，清淡爽口。',
            cuisine: 'zhejiang',
            difficulty: 'easy',
            cookTime: '35分钟',
            rating: 4.4,
            viewCount: 13400,
            favoriteCount: 2345,
            tags: ['浙菜', '鸡肉', '白切', '清淡']
        },
        {
            id: 'recipe_097',
            title: '浙式糖醋鱼',
            description: '浙江版糖醋鱼，酸甜适中，鱼肉鲜嫩。',
            cuisine: 'zhejiang',
            difficulty: 'medium',
            cookTime: '28分钟',
            rating: 4.5,
            viewCount: 15200,
            favoriteCount: 2678,
            tags: ['浙菜', '鱼类', '糖醋', '家常']
        },
        {
            id: 'recipe_098',
            title: '浙江春笋',
            description: '浙菜时令菜，春笋鲜嫩，清香爽口。',
            image: '/cooking-platform/data/imgs/浙菜/浙江春笋.png',
            cuisine: 'zhejiang',
            difficulty: 'easy',
            cookTime: '15分钟',
            prepTime: '10分钟',
            servings: '2-3人',
            rating: 4.3,
            viewCount: 11800,
            favoriteCount: 1890,
            ingredients: [
                { name: '春笋', amount: '400g', note: '新鲜嫩春笋' },
                { name: '火腿丝', amount: '50g', note: '金华火腿' },
                { name: '香菇', amount: '4朵', note: '泡发切丝' },
                { name: '青蒜苗', amount: '50g', note: '切段' },
                { name: '生抽', amount: '2汤匙', note: '' },
                { name: '白糖', amount: '2茶匙', note: '浙菜偏甜' },
                { name: '盐', amount: '适量', note: '' },
                { name: '料酒', amount: '1汤匙', note: '' },
                { name: '高汤', amount: '100ml', note: '或清水' },
                { name: '香油', amount: '几滴', note: '' },
                { name: '植物油', amount: '2汤匙', note: '' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '处理春笋',
                    content: '春笋剥壳洗净，切成滚刀块，用开水焯烫3分钟去除涩味。',
                    image: '',
                    tips: '春笋要选择嫩的，焯水能去除草酸和涩味。'
                },
                {
                    step: 2,
                    title: '准备配菜',
                    content: '火腿切丝，香菇泡发切丝，青蒜苗洗净切段备用。',
                    image: '',
                    tips: '火腿丝能增加鲜香味，是春笋的经典搭配。'
                },
                {
                    step: 3,
                    title: '炒制火腿',
                    content: '热锅下少许油，先炒火腿丝出香味，再下香菇丝炒香。',
                    image: '',
                    tips: '火腿和香菇要炒出香味，提升整道菜的层次。'
                },
                {
                    step: 4,
                    title: '下笋块炒制',
                    content: '下春笋块翻炒，加料酒、生抽、糖调味，炒匀上色。',
                    image: '',
                    tips: '春笋要炒至每块都上色，但不要炒老。'
                },
                {
                    step: 5,
                    title: '加汤焖煮',
                    content: '倒入高汤，盖锅焖煮8分钟至春笋入味软嫩。',
                    image: '',
                    tips: '焖煮时间要适中，保持春笋的脆嫩。'
                },
                {
                    step: 6,
                    title: '收汁装盘',
                    content: '下青蒜苗段炒匀，大火收汁，淋香油即可出锅。',
                    image: '',
                    tips: '青蒜苗最后下锅，保持翠绿和香味。'
                }
            ],
            tips: [
                '选择新鲜嫩春笋是关键，老笋纤维粗。',
                '焯水去涩是必要步骤，不可省略。',
                '火腿丝是传统搭配，增加鲜香。',
                '浙菜偏甜，白糖要适量添加。',
                '这是春季时令菜，体现浙菜清淡特色。',
                '春笋有清热化痰的功效。'
            ],
            nutrition: {
                calories: '65千卡/100g',
                protein: '4g',
                fat: '2g',
                carbs: '12g',
                fiber: '6g',
                sodium: '320mg'
            },
            tags: ['浙菜', '春笋', '时令', '素食'],
            createdAt: '2024-01-29T15:00:00Z',
            updatedAt: '2024-01-29T15:00:00Z'
        },
        {
            id: 'recipe_099',
            title: '浙式蒸蛋羹',
            description: '浙江蒸蛋，嫩如豆腐，营养丰富。',
            cuisine: 'zhejiang',
            difficulty: 'easy',
            cookTime: '12分钟',
            rating: 4.2,
            viewCount: 17600,
            favoriteCount: 3012,
            tags: ['浙菜', '蒸菜', '鸡蛋', '营养']
        },
        {
            id: 'recipe_100',
            title: '浙江醉虾',
            description: '浙菜海鲜，虾肉鲜甜，酒香醉人。',
            image: '/cooking-platform/data/imgs/浙菜/浙江醉虾.png',
            cuisine: 'zhejiang',
            difficulty: 'easy',
            cookTime: '20分钟',
            prepTime: '2小时',
            servings: '2-3人',
            rating: 4.6,
            viewCount: 12900,
            favoriteCount: 2234,
            ingredients: [
                { name: '活河虾', amount: '500g', note: '新鲜活虾，中等大小' },
                { name: '绍兴酒', amount: '200ml', note: '优质黄酒' },
                { name: '生抽', amount: '3汤匙', note: '' },
                { name: '白糖', amount: '2茶匙', note: '' },
                { name: '盐', amount: '1茶匙', note: '' },
                { name: '生姜', amount: '1块', note: '切丝' },
                { name: '大葱', amount: '2段', note: '切段' },
                { name: '花椒', amount: '10粒', note: '' },
                { name: '八角', amount: '1个', note: '' },
                { name: '桂皮', amount: '1小段', note: '' },
                { name: '香叶', amount: '2片', note: '' },
                { name: '香菜', amount: '适量', note: '装饰用' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '处理活虾',
                    content: '活虾用清水养半小时，让其吐净泥沙，然后洗净沥干。',
                    image: '',
                    tips: '选择活力强的河虾，肉质才会鲜甜。'
                },
                {
                    step: 2,
                    title: '制作醉料',
                    content: '绍兴酒加生抽、糖、盐、姜丝、葱段、花椒、八角、桂皮、香叶调成醉料。',
                    image: '',
                    tips: '醉料要调得咸甜适中，酒香浓郁。'
                },
                {
                    step: 3,
                    title: '煮制香料',
                    content: '将醉料煮开2分钟，让香料充分释放香味，然后晾凉。',
                    image: '',
                    tips: '煮制能让香料更好地融入醉料中。'
                },
                {
                    step: 4,
                    title: '醉制河虾',
                    content: '将处理好的活虾放入晾凉的醉料中，冰箱冷藏醉制2小时以上。',
                    image: '',
                    tips: '醉制时间要足够，让虾肉充分入味。'
                },
                {
                    step: 5,
                    title: '入味翻拌',
                    content: '醉制过程中要翻拌2-3次，让每只虾都均匀入味。',
                    image: '',
                    tips: '翻拌能确保入味均匀，效果更好。'
                },
                {
                    step: 6,
                    title: '装盘享用',
                    content: '醉好的虾装盘，滤掉香料，撒香菜装饰即可享用。',
                    image: '',
                    tips: '醉虾要冷食，虾肉鲜甜，酒香浓郁。'
                }
            ],
            tips: [
                '选择新鲜活虾是关键，死虾做不出好效果。',
                '绍兴酒的质量很重要，要选择优质的。',
                '醉制时间要足够，至少2小时以上。',
                '冷藏醉制效果更佳，虾肉更紧实。',
                '这道菜体现了浙菜清淡雅致的特色。',
                '适合作为冷盘开胃菜享用。'
            ],
            nutrition: {
                calories: '95千卡/100g',
                protein: '18g',
                fat: '1g',
                carbs: '3g',
                fiber: '0g',
                sodium: '420mg'
            },
            tags: ['浙菜', '海鲜', '醉制', '清淡'],
            createdAt: '2024-01-29T16:00:00Z',
            updatedAt: '2024-01-29T16:00:00Z'
        },
        {
            id: 'recipe_101',
            title: '浙式油焖笋',
            description: '浙江名菜，春笋鲜嫩，油润香甜。',
            image: '/cooking-platform/data/imgs/浙菜/浙式油焖笋.png',
            cuisine: 'zhejiang',
            difficulty: 'easy',
            cookTime: '18分钟',
            prepTime: '10分钟',
            servings: '2-3人',
            rating: 4.4,
            viewCount: 14300,
            favoriteCount: 2456,
            ingredients: [
                { name: '春笋', amount: '500g', note: '新鲜嫩春笋' },
                { name: '生抽', amount: '3汤匙', note: '' },
                { name: '老抽', amount: '1茶匙', note: '上色用' },
                { name: '白糖', amount: '3茶匙', note: '浙菜偏甜' },
                { name: '盐', amount: '1茶匙', note: '' },
                { name: '料酒', amount: '2汤匙', note: '' },
                { name: '植物油', amount: '4汤匙', note: '油焖用' },
                { name: '高汤', amount: '150ml', note: '或热水' },
                { name: '香油', amount: '几滴', note: '' },
                { name: '葱花', amount: '适量', note: '装饰用' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '处理春笋',
                    content: '春笋剥壳洗净，切成滚刀块，用开水焯烫2分钟去除涩味和草酸。',
                    image: '',
                    tips: '春笋要选择嫩的，焯水是必须步骤。'
                },
                {
                    step: 2,
                    title: '热油爆炒',
                    content: '热锅下油，油要多一些，下春笋块大火爆炒2分钟。',
                    image: '',
                    tips: '油焖笋要用较多的油，这是传统做法。'
                },
                {
                    step: 3,
                    title: '调味上色',
                    content: '加入生抽、老抽、糖、盐、料酒，翻炒均匀上色。',
                    image: '',
                    tips: '要炒至每块春笋都上色均匀。'
                },
                {
                    step: 4,
                    title: '加汤焖制',
                    content: '倒入高汤或热水，盖锅中火焖12分钟至春笋软嫩入味。',
                    image: '',
                    tips: '焖制时间要掌握好，保持春笋脆嫩。'
                },
                {
                    step: 5,
                    title: '收汁调味',
                    content: '开盖大火收汁，收至汤汁浓稠油润即可。',
                    image: '',
                    tips: '收汁要适度，让春笋裹上浓稠的汁液。'
                },
                {
                    step: 6,
                    title: '装盘出锅',
                    content: '淋香油，撒葱花装饰即可出锅装盘。',
                    image: '',
                    tips: '油焖笋色泽红亮，油润光滑是特色。'
                }
            ],
            tips: [
                '选择鲜嫩春笋是关键，老笋纤维粗糙。',
                '焯水去涩是必须步骤，不可省略。',
                '油要用得足够，体现"油焖"的特色。',
                '浙菜偏甜，糖的用量要足。',
                '火候要掌握好，保持春笋的脆嫩。',
                '这是浙菜中经典的素食菜品。'
            ],
            nutrition: {
                calories: '85千卡/100g',
                protein: '3g',
                fat: '6g',
                carbs: '12g',
                fiber: '5g',
                sodium: '420mg'
            },
            tags: ['浙菜', '春笋', '油焖', '素食'],
            createdAt: '2024-01-29T17:00:00Z',
            updatedAt: '2024-01-29T17:00:00Z'
        },
        // 闽菜
        {
            id: 'recipe_102',
            title: '佛跳墙',
            description: '福建名菜，食材丰富，营养价值极高。',
            image: '/cooking-platform/data/imgs/闽菜/佛跳墙.png',
            cuisine: 'fujian',
            difficulty: 'hard',
            cookTime: '3小时',
            prepTime: '2小时',
            servings: '6-8人',
            rating: 4.9,
            viewCount: 8900,
            favoriteCount: 2345,
            ingredients: [
                { name: '水发鲍鱼', amount: '4只', note: '提前发制好' },
                { name: '水发海参', amount: '4只', note: '提前发制好' },
                { name: '鱼翅', amount: '100g', note: '提前发制好' },
                { name: '鱼肚', amount: '100g', note: '提前发制好' },
                { name: '干贝', amount: '50g', note: '提前泡发' },
                { name: '花菇', amount: '8朵', note: '大朵香菇，泡发' },
                { name: '鸽蛋', amount: '8个', note: '煮熟去壳' },
                { name: '猪蹄筋', amount: '200g', note: '提前处理' },
                { name: '鸡肉', amount: '300g', note: '土鸡，切块' },
                { name: '鸭肉', amount: '300g', note: '切块' },
                { name: '猪肘子', amount: '200g', note: '切块' },
                { name: '火腿', amount: '100g', note: '金华火腿，切片' },
                { name: '冬笋', amount: '200g', note: '切厚片' },
                { name: '绍兴酒', amount: '200ml', note: '优质黄酒' },
                { name: '上汤', amount: '1500ml', note: '浓郁高汤' },
                { name: '生姜', amount: '1大块', note: '切片' },
                { name: '大葱', amount: '3段', note: '切段' },
                { name: '盐', amount: '适量', note: '' },
                { name: '胡椒粉', amount: '少许', note: '白胡椒粉' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '准备珍贵食材',
                    content: '鲍鱼、海参、鱼翅、鱼肚等海味提前24-48小时发制，干贝泡发撕成丝，花菇去蒂泡发。',
                    image: '',
                    tips: '海味发制是关键，要充分泡发，去除异味。'
                },
                {
                    step: 2,
                    title: '处理肉类',
                    content: '鸡肉、鸭肉、猪肘子分别焯水去血沫，猪蹄筋提前炖煮至软烂，火腿切厚片。',
                    image: '',
                    tips: '肉类焯水能去腥去污，保持汤色清澈。'
                },
                {
                    step: 3,
                    title: '制作高汤',
                    content: '用老母鸡、猪骨、火腿骨熬制浓郁高汤，撇去浮沫，保持汤色清澈。',
                    image: '',
                    tips: '高汤是佛跳墙的精华，要熬制得浓郁鲜美。'
                },
                {
                    step: 4,
                    title: '预处理配菜',
                    content: '鸽蛋煮熟去壳，冬笋焯水去涩味，所有配菜分别用高汤煨制入味。',
                    image: '',
                    tips: '每种配菜都要单独处理，保持各自特色。'
                },
                {
                    step: 5,
                    title: '装坛分层',
                    content: '取佛跳墙专用坛子，将各种食材分层装入，先放肉类，再放海味，最后放蛋类。',
                    image: '',
                    tips: '分层装入能保持食材形状，避免煮烂。'
                },
                {
                    step: 6,
                    title: '调味封坛',
                    content: '加入绍兴酒、高汤没过食材，用盐、胡椒粉调味，用荷叶封坛口。',
                    image: '',
                    tips: '绍兴酒是传统做法，荷叶封坛能增加香味。'
                },
                {
                    step: 7,
                    title: '小火慢炖',
                    content: '将封好的坛子放入蒸锅，大火烧开后转小火炖制2小时。',
                    image: '',
                    tips: '要用最小火慢炖，让各种食材的精华充分融合。'
                },
                {
                    step: 8,
                    title: '开坛享用',
                    content: '炖好后小心开坛，香气四溢即为成功，趁热享用。',
                    image: '',
                    tips: '开坛时香气扑鼻，这就是传说中的"佛跳墙"。'
                }
            ],
            tips: [
                '选料要精，海味要充分发制，这是成功的关键。',
                '高汤要浓郁，最好用老母鸡和猪骨熬制。',
                '火候掌握很重要，要小火慢炖才能入味。',
                '传统做法用绍兴酒，不能用其他酒类代替。',
                '这道菜工艺复杂，需要大量时间和经验。',
                '正宗佛跳墙有"坛启荤香飘四邻，佛闻弃禅跳墙来"之誉。'
            ],
            nutrition: {
                calories: '280千卡/100g',
                protein: '35g',
                fat: '12g',
                carbs: '8g',
                fiber: '2g',
                sodium: '680mg'
            },
            tags: ['闽菜', '名菜', '滋补', '宴客'],
            createdAt: '2024-01-28T15:00:00Z',
            updatedAt: '2024-01-28T15:00:00Z'
        },
        {
            id: 'recipe_103',
            title: '白切河田鸡',
            description: '福建特色，鸡肉鲜嫩，原汁原味。',
            cuisine: 'fujian',
            difficulty: 'easy',
            cookTime: '40分钟',
            rating: 4.5,
            viewCount: 12600,
            favoriteCount: 2123,
            tags: ['闽菜', '鸡肉', '白切', '清淡']
        },
        {
            id: 'recipe_104',
            title: '闽南春卷',
            description: '福建小吃，皮薄馅丰，香脆可口。',
            image: '/cooking-platform/data/imgs/闽菜/闽南春卷.png',
            cuisine: 'fujian',
            difficulty: 'medium',
            cookTime: '45分钟',
            prepTime: '1小时',
            servings: '4-6人',
            rating: 4.4,
            viewCount: 15800,
            favoriteCount: 2789,
            ingredients: [
                { name: '春卷皮', amount: '20张', note: '市售或自制薄皮' },
                { name: '五花肉丝', amount: '200g', note: '切细丝' },
                { name: '鲜虾', amount: '150g', note: '去壳切段' },
                { name: '豆芽菜', amount: '200g', note: '掐去头尾' },
                { name: '韭菜', amount: '100g', note: '切段' },
                { name: '胡萝卜丝', amount: '100g', note: '切细丝' },
                { name: '豆干丝', amount: '100g', note: '切细丝' },
                { name: '香菇丝', amount: '50g', note: '泡发切丝' },
                { name: '蛋皮丝', amount: '2个鸡蛋', note: '摊成薄饼切丝' },
                { name: '粉丝', amount: '100g', note: '泡软切段' },
                { name: '大蒜', amount: '3瓣', note: '切末' },
                { name: '生姜', amount: '1块', note: '切丝' },
                { name: '生抽', amount: '2汤匙', note: '' },
                { name: '老抽', amount: '1汤匙', note: '调色' },
                { name: '料酒', amount: '1汤匙', note: '' },
                { name: '盐', amount: '适量', note: '' },
                { name: '白糖', amount: '1茶匙', note: '' },
                { name: '胡椒粉', amount: '少许', note: '' },
                { name: '香油', amount: '1汤匙', note: '' },
                { name: '植物油', amount: '适量', note: '炒制和油炸用' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '准备配菜',
                    content: '将所有蔬菜洗净切丝，鸡蛋摊成薄饼切丝，粉丝泡软切段，香菇泡发切丝。',
                    image: '',
                    tips: '所有配菜要切得均匀细致，这样包出来的春卷才美观。'
                },
                {
                    step: 2,
                    title: '炒制馅料',
                    content: '热锅下油，先炒肉丝至变色，再下虾仁炒熟，盛起备用。',
                    image: '',
                    tips: '肉丝和虾仁要先炒熟，避免春卷内部不熟。'
                },
                {
                    step: 3,
                    title: '炒制蔬菜',
                    content: '锅内留底油，爆香蒜末姜丝，依次下胡萝卜丝、豆芽菜、豆干丝、香菇丝炒制。',
                    image: '',
                    tips: '蔬菜炒制要保持爽脆，不要炒得太软烂。'
                },
                {
                    step: 4,
                    title: '调味合炒',
                    content: '加入生抽、老抽、料酒、盐、糖调味，再下粉丝、韭菜段、蛋皮丝炒匀。',
                    image: '',
                    tips: '调味要适中，春卷馅料不宜太咸太湿。'
                },
                {
                    step: 5,
                    title: '收汁晾凉',
                    content: '将炒好的肉丝虾仁倒入炒匀，淋香油，大火炒至收汁，盛起晾凉。',
                    image: '',
                    tips: '馅料要完全晾凉再包春卷，否则会烫破春卷皮。'
                },
                {
                    step: 6,
                    title: '包制春卷',
                    content: '取春卷皮，放适量馅料，将皮的一角向中心折，再将两侧折入，卷成长条状。',
                    image: '',
                    tips: '包春卷时动作要轻，封口处用蛋液粘合。'
                },
                {
                    step: 7,
                    title: '油炸至脆',
                    content: '锅内放油烧至六成热，下春卷炸至金黄色，捞起沥油即可。',
                    image: '',
                    tips: '油温不要太高，慢炸至金黄酥脆为佳。'
                }
            ],
            tips: [
                '春卷皮要薄，市售的比较方便，也可自制。',
                '馅料要丰富多样，体现闽南春卷的特色。',
                '炒制馅料时要控制水分，太湿会破皮。',
                '包春卷的手法要熟练，封口要严实。',
                '油炸时火候要掌握好，外酥内嫩是关键。',
                '可配甜面酱或蒜蓉辣椒酱一起享用。'
            ],
            nutrition: {
                calories: '220千卡/100g',
                protein: '12g',
                fat: '14g',
                carbs: '18g',
                fiber: '3g',
                sodium: '480mg'
            },
            tags: ['闽菜', '小吃', '春卷', '传统'],
            createdAt: '2024-01-28T16:00:00Z',
            updatedAt: '2024-01-28T16:00:00Z'
        },
        {
            id: 'recipe_105',
            title: '福建鱼丸',
            description: '福建特色，鱼丸Q弹，汤鲜味美。',
            image: '/cooking-platform/data/imgs/闽菜/福建鱼丸.png',
            cuisine: 'fujian',
            difficulty: 'medium',
            cookTime: '1小时',
            prepTime: '1.5小时',
            servings: '4-5人',
            rating: 4.6,
            viewCount: 18200,
            favoriteCount: 3234,
            ingredients: [
                { name: '新鲜带鱼', amount: '800g', note: '或鲈鱼、草鱼' },
                { name: '猪肥膘', amount: '100g', note: '切小丁' },
                { name: '马蹄', amount: '100g', note: '去皮切碎' },
                { name: '蛋清', amount: '2个', note: '' },
                { name: '盐', amount: '2茶匙', note: '分次使用' },
                { name: '淀粉', amount: '3汤匙', note: '红薯淀粉最佳' },
                { name: '料酒', amount: '2汤匙', note: '' },
                { name: '姜汁', amount: '1汤匙', note: '姜磨蓉取汁' },
                { name: '白胡椒粉', amount: '1茶匙', note: '' },
                { name: '香油', amount: '1茶匙', note: '' },
                { name: '鱼汤', amount: '1200ml', note: '用鱼骨熬制' },
                { name: '紫菜', amount: '适量', note: '汤用' },
                { name: '小白菜', amount: '100g', note: '洗净切段' },
                { name: '葱花', amount: '适量', note: '装饰用' },
                { name: '香菜', amount: '适量', note: '装饰用' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '处理鱼肉',
                    content: '鱼去鳞、去骨、去皮，取净鱼肉，用刀背剁成鱼茸，去除筋膜。',
                    image: '',
                    tips: '鱼肉要剁得细腻，去除所有筋膜，这样鱼丸才Q弹。'
                },
                {
                    step: 2,
                    title: '调制鱼茸',
                    content: '鱼茸加盐用力搅拌至起胶，分次加入蛋清、料酒、姜汁继续搅拌。',
                    image: '',
                    tips: '要顺一个方向搅拌，直到鱼茸有明显粘性。'
                },
                {
                    step: 3,
                    title: '加配料调味',
                    content: '加入马蹄碎、肥膘丁、淀粉、胡椒粉、香油，搅拌均匀成鱼丸馅。',
                    image: '',
                    tips: '马蹄增加爽脆，肥膘增加润滑，配比要适当。'
                },
                {
                    step: 4,
                    title: '制作鱼丸',
                    content: '用勺子舀取鱼茸，在手心团成圆球状，大小要均匀，约20g一个。',
                    image: '',
                    tips: '手要蘸水，防止粘手，鱼丸要做得圆润光滑。'
                },
                {
                    step: 5,
                    title: '煮制鱼丸',
                    content: '锅内水烧至微开(不沸腾)，轻轻下入鱼丸，小火煮至浮起，约8分钟。',
                    image: '',
                    tips: '水不能沸腾，否则鱼丸会散掉，要小火慢煮。'
                },
                {
                    step: 6,
                    title: '制作汤底',
                    content: '用鱼骨熬制清汤，撇去浮沫，调入盐、胡椒粉调味。',
                    image: '',
                    tips: '鱼汤要清澈鲜美，是鱼丸汤好喝的基础。'
                },
                {
                    step: 7,
                    title: '最终装盘',
                    content: '将鱼丸盛入汤碗，倒入热鱼汤，放入紫菜、小白菜，撒葱花香菜即可。',
                    image: '',
                    tips: '趁热享用，鱼丸Q弹，汤鲜味美。'
                }
            ],
            tips: [
                '选择新鲜鱼肉是关键，影响鱼丸质量。',
                '鱼茸要剁得足够细腻，去除所有筋膜。',
                '搅拌要有技巧，顺一个方向直到起胶。',
                '煮鱼丸火候很重要，不能用大火。',
                '正宗福建鱼丸有馅心，口感层次丰富。',
                '可以一次多做一些，冷冻保存。'
            ],
            nutrition: {
                calories: '125千卡/100g',
                protein: '18g',
                fat: '4g',
                carbs: '6g',
                fiber: '1g',
                sodium: '420mg'
            },
            tags: ['闽菜', '鱼丸', '汤品', '特色'],
            createdAt: '2024-01-28T17:00:00Z',
            updatedAt: '2024-01-28T17:00:00Z'
        },
        {
            id: 'recipe_106',
            title: '闽式红烧肉',
            description: '福建红烧肉，甜味突出，肉质酥烂。',
            cuisine: 'fujian',
            difficulty: 'medium',
            cookTime: '1小时',
            rating: 4.5,
            viewCount: 14600,
            favoriteCount: 2567,
            tags: ['闽菜', '红烧', '猪肉', '甜味']
        },
        {
            id: 'recipe_107',
            title: '福建沙茶面',
            description: '厦门特色面食，汤头浓郁，配料丰富。',
            cuisine: 'fujian',
            difficulty: 'medium',
            cookTime: '25分钟',
            rating: 4.7,
            viewCount: 19800,
            favoriteCount: 3567,
            tags: ['闽菜', '面食', '沙茶', '厦门']
        },
        {
            id: 'recipe_108',
            title: '闽南卤面',
            description: '福建特色面条，汤汁浓郁，配菜丰富。',
            cuisine: 'fujian',
            difficulty: 'easy',
            cookTime: '20分钟',
            rating: 4.3,
            viewCount: 16700,
            favoriteCount: 2890,
            tags: ['闽菜', '面食', '卤制', '家常']
        },
        {
            id: 'recipe_109',
            title: '福建土笋冻',
            description: '闽南特色小吃，口感Q弹，鲜美独特。',
            cuisine: 'fujian',
            difficulty: 'hard',
            cookTime: '2小时',
            rating: 4.4,
            viewCount: 7800,
            favoriteCount: 1456,
            tags: ['闽菜', '小吃', '特色', '海味']
        },
        {
            id: 'recipe_110',
            title: '闽式蚵仔煎',
            description: '福建海鲜小吃，蚵仔鲜美，外酥内嫩。',
            cuisine: 'fujian',
            difficulty: 'medium',
            cookTime: '15分钟',
            rating: 4.5,
            viewCount: 13900,
            favoriteCount: 2234,
            tags: ['闽菜', '海鲜', '煎制', '小吃']
        },
        {
            id: 'recipe_111',
            title: '福建荔枝肉',
            description: '福州名菜，形似荔枝，酸甜开胃。',
            cuisine: 'fujian',
            difficulty: 'medium',
            cookTime: '30分钟',
            rating: 4.6,
            viewCount: 11500,
            favoriteCount: 1890,
            tags: ['闽菜', '猪肉', '酸甜', '福州']
        },
        {
            id: 'recipe_112',
            title: '闽南肉粽',
            description: '福建特色粽子，馅料丰富，香糯可口。',
            cuisine: 'fujian',
            difficulty: 'medium',
            cookTime: '2小时',
            rating: 4.4,
            viewCount: 14200,
            favoriteCount: 2567,
            tags: ['闽菜', '粽子', '传统', '节庆']
        },
        {
            id: 'recipe_113',
            title: '福建白粿',
            description: '闽南传统小食，口感软糯，清香淡甜。',
            cuisine: 'fujian',
            difficulty: 'easy',
            cookTime: '30分钟',
            rating: 4.2,
            viewCount: 9600,
            favoriteCount: 1567,
            tags: ['闽菜', '小吃', '传统', '甜品']
        },
        {
            id: 'recipe_114',
            title: '闽式蒸蛋',
            description: '福建蒸蛋，嫩滑爽口，老少皆宜。',
            cuisine: 'fujian',
            difficulty: 'easy',
            cookTime: '15分钟',
            rating: 4.3,
            viewCount: 12800,
            favoriteCount: 1890,
            tags: ['闽菜', '蒸菜', '鸡蛋', '家常']
        },
        {
            id: 'recipe_115',
            title: '福建红糟鸡',
            description: '福建传统菜，红糟香浓，鸡肉鲜美。',
            cuisine: 'fujian',
            difficulty: 'medium',
            cookTime: '45分钟',
            rating: 4.5,
            viewCount: 10700,
            favoriteCount: 1789,
            tags: ['闽菜', '红糟', '鸡肉', '传统']
        },
        {
            id: 'recipe_116',
            title: '闽南海蛎煎',
            description: '厦门特色，海蛎鲜美，外酥内嫩。',
            cuisine: 'fujian',
            difficulty: 'medium',
            cookTime: '18分钟',
            rating: 4.6,
            viewCount: 16200,
            favoriteCount: 2678,
            tags: ['闽菜', '海鲜', '煎制', '厦门']
        },
        // 徽菜
        {
            id: 'recipe_117',
            title: '臭鳜鱼',
            description: '安徽名菜，闻着臭吃着香，鱼肉鲜美。',
            image: '/cooking-platform/data/imgs/徽菜/臭鳜鱼.png',
            cuisine: 'anhui',
            difficulty: 'hard',
            cookTime: '1小时',
            prepTime: '7天',
            servings: '3-4人',
            rating: 4.8,
            viewCount: 9800,
            favoriteCount: 1890,
            ingredients: [
                { name: '新鲜鳜鱼', amount: '1条(约800g)', note: '活鳜鱼最佳' },
                { name: '粗盐', amount: '100g', note: '腌制用' },
                { name: '猪五花肉', amount: '100g', note: '切片' },
                { name: '冬笋', amount: '100g', note: '切片' },
                { name: '香菇', amount: '6朵', note: '泡发切片' },
                { name: '青蒜苗', amount: '100g', note: '切段' },
                { name: '生姜', amount: '1块', note: '切片' },
                { name: '大蒜', amount: '5瓣', note: '切片' },
                { name: '干辣椒', amount: '5个', note: '切段' },
                { name: '料酒', amount: '3汤匙', note: '黄酒最佳' },
                { name: '生抽', amount: '3汤匙', note: '' },
                { name: '老抽', amount: '1汤匙', note: '调色' },
                { name: '白糖', amount: '2汤匙', note: '' },
                { name: '盐', amount: '适量', note: '' },
                { name: '植物油', amount: '适量', note: '炒制用' },
                { name: '香油', amount: '几滴', note: '调香' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '腌制鳜鱼',
                    content: '新鲜鳜鱼去鳞去内脏洗净，用粗盐里外腌制，用稻草或木盒密封，室温下腌制5-7天至有特殊臭味。',
                    image: '',
                    tips: '腌制是关键工艺，要在适当温度下发酵，产生特殊香味。'
                },
                {
                    step: 2,
                    title: '清洗处理',
                    content: '腌好的鱼用清水冲洗表面盐分，沥干水分，在鱼身两面斜切花刀。',
                    image: '',
                    tips: '冲洗要彻底但不能过度，保留适当的发酵味道。'
                },
                {
                    step: 3,
                    title: '煎制鱼肉',
                    content: '平底锅放油加热，将鳜鱼两面煎至金黄定型，盛起备用。',
                    image: '',
                    tips: '煎制能去除部分腥味，也能让鱼肉定型不散。'
                },
                {
                    step: 4,
                    title: '炒制配菜',
                    content: '锅内放油，爆香姜蒜片和干辣椒，下五花肉片煸炒出油。',
                    image: '',
                    tips: '五花肉的油脂能增加菜品香味。'
                },
                {
                    step: 5,
                    title: '添菜调味',
                    content: '依次下冬笋片、香菇片炒香，加料酒、生抽、老抽、糖调味。',
                    image: '',
                    tips: '配菜要炒出香味，调料要适中。'
                },
                {
                    step: 6,
                    title: '红烧鳜鱼',
                    content: '将煎好的鳜鱼放入，加适量水，大火烧开后转小火红烧30分钟。',
                    image: '',
                    tips: '红烧时要翻面，让两面都均匀上色入味。'
                },
                {
                    step: 7,
                    title: '收汁装盘',
                    content: '最后下青蒜苗炒匀，大火收汁至浓稠，淋香油即可装盘。',
                    image: '',
                    tips: '收汁时要小心翻动鱼身，避免弄碎。'
                }
            ],
            tips: [
                '选择新鲜鳜鱼是基础，鱼要够新鲜才能腌制。',
                '腌制环境很重要，温度和湿度要适当。',
                '发酵后的鱼有特殊臭味是正常的，这正是特色。',
                '红烧时间要充足，让鱼肉充分入味。',
                '这道菜"闻着臭，吃着香"，是徽菜代表。',
                '初次制作建议找有经验的师傅指导。'
            ],
            nutrition: {
                calories: '185千卡/100g',
                protein: '20g',
                fat: '10g',
                carbs: '6g',
                fiber: '1g',
                sodium: '520mg'
            },
            tags: ['徽菜', '鱼类', '特色', '传统'],
            createdAt: '2024-01-28T18:00:00Z',
            updatedAt: '2024-01-28T18:00:00Z'
        },
        {
            id: 'recipe_118',
            title: '徽州毛豆腐',
            description: '安徽特色，毛豆腐嫩滑，风味独特。',
            image: '/cooking-platform/data/imgs/徽菜/徽州毛豆腐.png',
            cuisine: 'anhui',
            difficulty: 'medium',
            cookTime: '25分钟',
            prepTime: '10分钟',
            servings: '2-3人',
            rating: 4.4,
            viewCount: 11200,
            favoriteCount: 1678,
            ingredients: [
                { name: '毛豆腐', amount: '8块', note: '安徽特产毛豆腐' },
                { name: '猪肉丝', amount: '100g', note: '切细丝' },
                { name: '冬笋丝', amount: '50g', note: '切细丝' },
                { name: '韭菜', amount: '50g', note: '切段' },
                { name: '生姜', amount: '1块', note: '切丝' },
                { name: '大蒜', amount: '3瓣', note: '切片' },
                { name: '干辣椒', amount: '3个', note: '切段' },
                { name: '料酒', amount: '2汤匙', note: '' },
                { name: '生抽', amount: '2汤匙', note: '' },
                { name: '老抽', amount: '1茶匙', note: '调色' },
                { name: '盐', amount: '适量', note: '' },
                { name: '白糖', amount: '1茶匙', note: '' },
                { name: '胡椒粉', amount: '少许', note: '' },
                { name: '香油', amount: '几滴', note: '' },
                { name: '植物油', amount: '适量', note: '煎制用' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '处理毛豆腐',
                    content: '毛豆腐轻轻洗去表面的毛，沥干水分，小心处理不要弄碎。',
                    image: '',
                    tips: '毛豆腐很嫩，处理时要格外小心。'
                },
                {
                    step: 2,
                    title: '煎制毛豆腐',
                    content: '平底锅放少许油，将毛豆腐轻轻放入，小火煎至底部微黄，翻面再煎。',
                    image: '',
                    tips: '煎制时火不能太大，要有耐心慢慢煎。'
                },
                {
                    step: 3,
                    title: '炒制肉丝',
                    content: '另起锅放油，爆香姜蒜和干辣椒，下肉丝炒至变色。',
                    image: '',
                    tips: '肉丝要炒得香一些，增加整体风味。'
                },
                {
                    step: 4,
                    title: '添加配菜',
                    content: '加入冬笋丝炒香，调入料酒、生抽、老抽、糖、盐调味。',
                    image: '',
                    tips: '配菜要保持脆嫩，调料要适中。'
                },
                {
                    step: 5,
                    title: '合炒调味',
                    content: '将煎好的毛豆腐轻轻放入，加少许水，小火焖2分钟入味。',
                    image: '',
                    tips: '焖制时间不要太长，保持毛豆腐的形状。'
                },
                {
                    step: 6,
                    title: '最后收尾',
                    content: '下韭菜段炒匀，撒胡椒粉，淋香油即可出锅装盘。',
                    image: '',
                    tips: '韭菜最后下锅，保持翠绿和香味。'
                }
            ],
            tips: [
                '毛豆腐是徽州特产，有特殊的发酵香味。',
                '处理毛豆腐要轻柔，避免弄碎影响卖相。',
                '煎制时火候要小，慢慢煎出香味。',
                '这道菜体现了徽菜善用发酵食材的特点。',
                '可以根据个人口味调整辣度。',
                '毛豆腐的毛是有益菌群，对身体有好处。'
            ],
            nutrition: {
                calories: '145千卡/100g',
                protein: '15g',
                fat: '8g',
                carbs: '8g',
                fiber: '3g',
                sodium: '380mg'
            },
            tags: ['徽菜', '豆腐', '特色', '传统'],
            createdAt: '2024-01-28T19:00:00Z',
            updatedAt: '2024-01-28T19:00:00Z'
        },
        {
            id: 'recipe_119',
            title: '徽式红烧肉',
            description: '安徽红烧肉，色泽红亮，肥而不腻。',
            cuisine: 'anhui',
            difficulty: 'medium',
            cookTime: '1小时',
            rating: 4.5,
            viewCount: 15600,
            favoriteCount: 2456,
            tags: ['徽菜', '红烧', '猪肉', '家常']
        },
        {
            id: 'recipe_120',
            title: '徽州刀板香',
            description: '安徽特色，腊肉香浓，刀板留香。',
            image: '/cooking-platform/data/imgs/徽菜/徽州刀板香.png',
            cuisine: 'anhui',
            difficulty: 'easy',
            cookTime: '30分钟',
            prepTime: '15分钟',
            servings: '3-4人',
            rating: 4.3,
            viewCount: 8900,
            favoriteCount: 1345,
            ingredients: [
                { name: '徽州腊肉', amount: '400g', note: '肥瘦相间的腊肉' },
                { name: '干豆角', amount: '100g', note: '提前泡发' },
                { name: '冬笋', amount: '150g', note: '切厚片' },
                { name: '青蒜苗', amount: '100g', note: '切段' },
                { name: '干辣椒', amount: '5个', note: '切段' },
                { name: '生姜', amount: '1块', note: '切片' },
                { name: '大蒜', amount: '4瓣', note: '拍碎' },
                { name: '料酒', amount: '2汤匙', note: '' },
                { name: '生抽', amount: '1汤匙', note: '' },
                { name: '老抽', amount: '1茶匙', note: '调色' },
                { name: '白糖', amount: '1汤匙', note: '' },
                { name: '胡椒粉', amount: '少许', note: '' },
                { name: '植物油', amount: '少许', note: '腊肉自身有油' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '处理腊肉',
                    content: '徽州腊肉用温水洗净表面灰尘，上蒸锅蒸20分钟至软身，晾凉后切厚片。',
                    image: '',
                    tips: '蒸制能让腊肉变软，便于切片和后续烹饪。'
                },
                {
                    step: 2,
                    title: '准备配菜',
                    content: '干豆角提前泡发洗净切段，冬笋切厚片，青蒜苗切段，姜蒜准备好。',
                    image: '',
                    tips: '干豆角要充分泡发，去除咸味。'
                },
                {
                    step: 3,
                    title: '煸炒腊肉',
                    content: '热锅不放油，下腊肉片小火煸炒出油脂，至表面微焦香。',
                    image: '',
                    tips: '腊肉自带油脂，煸炒能激发香味。'
                },
                {
                    step: 4,
                    title: '爆香调料',
                    content: '用煸出的腊肉油爆香干辣椒、姜片、蒜瓣，炒出香味。',
                    image: '',
                    tips: '用腊肉油炒调料，香味更浓郁。'
                },
                {
                    step: 5,
                    title: '下配菜炒制',
                    content: '下干豆角炒2分钟，再下冬笋片炒1分钟，调入料酒、生抽、老抽、糖。',
                    image: '',
                    tips: '配菜要炒出香味，调料要适中。'
                },
                {
                    step: 6,
                    title: '焖制入味',
                    content: '加少许水，盖锅盖小火焖10分钟，让各种香味充分融合。',
                    image: '',
                    tips: '焖制能让腊肉香味渗透到配菜中。'
                },
                {
                    step: 7,
                    title: '最后收汁',
                    content: '开盖大火收汁，下青蒜苗炒匀，撒胡椒粉即可出锅。',
                    image: '',
                    tips: '青蒜苗最后下锅，保持翠绿和辛香味。'
                }
            ],
            tips: [
                '选择正宗徽州腊肉，香味才够浓郁。',
                '腊肉要先蒸软再切，这样不会太硬。',
                '煸炒腊肉出油是关键步骤，不可省略。',
                '配菜搭配要均衡，干豆角是经典搭配。',
                '这道菜香味浓郁，刀板上都留有余香。',
                '体现了徽菜善用腊制品的特色。'
            ],
            nutrition: {
                calories: '280千卡/100g',
                protein: '18g',
                fat: '22g',
                carbs: '6g',
                fiber: '4g',
                sodium: '720mg'
            },
            tags: ['徽菜', '腊肉', '特色', '香味'],
            createdAt: '2024-01-28T20:00:00Z',
            updatedAt: '2024-01-28T20:00:00Z'
        },
        {
            id: 'recipe_121',
            title: '徽式炖鸡',
            description: '安徽家常菜，鸡肉酥烂，汤汁鲜美。',
            cuisine: 'anhui',
            difficulty: 'easy',
            cookTime: '1.5小时',
            rating: 4.4,
            viewCount: 12300,
            favoriteCount: 1789,
            tags: ['徽菜', '炖菜', '鸡肉', '家常']
        },
        {
            id: 'recipe_122',
            title: '徽州糕点',
            description: '安徽传统点心，制作精细，口感丰富。',
            image: '/cooking-platform/data/imgs/徽菜/徽州糕点.png',
            cuisine: 'anhui',
            difficulty: 'hard',
            cookTime: '2小时',
            prepTime: '3小时',
            servings: '6-8人',
            rating: 4.6,
            viewCount: 7600,
            favoriteCount: 1234,
            ingredients: [
                { name: '糯米粉', amount: '300g', note: '优质糯米粉' },
                { name: '粳米粉', amount: '200g', note: '' },
                { name: '白糖', amount: '150g', note: '细砂糖' },
                { name: '猪油', amount: '80g', note: '熬制的猪油' },
                { name: '温水', amount: '200ml', note: '35°C左右' },
                { name: '红豆沙', amount: '300g', note: '自制或市售' },
                { name: '核桃仁', amount: '100g', note: '去皮切碎' },
                { name: '花生米', amount: '100g', note: '炒香去皮' },
                { name: '芝麻', amount: '50g', note: '炒香' },
                { name: '桂花', amount: '10g', note: '干桂花' },
                { name: '蜜枣', amount: '8个', note: '去核切碎' },
                { name: '泡打粉', amount: '5g', note: '' },
                { name: '食用色素', amount: '少许', note: '调色用，可选' },
                { name: '保鲜膜', amount: '适量', note: '蒸制用' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '制作糕粉',
                    content: '糯米粉和粳米粉混合，加入泡打粉拌匀，过筛备用。',
                    image: '',
                    tips: '过筛能让粉质更细腻，糕点口感更好。'
                },
                {
                    step: 2,
                    title: '调制糖浆',
                    content: '白糖加温水搅拌至完全融化，晾至微温，慢慢倒入面粉中搅拌。',
                    image: '',
                    tips: '糖浆不能太热，否则会烫熟面粉。'
                },
                {
                    step: 3,
                    title: '和制糕团',
                    content: '加入熬化的猪油，用手揉成光滑的糕团，盖湿布醒30分钟。',
                    image: '',
                    tips: '猪油能让糕点更香润，醒面很重要。'
                },
                {
                    step: 4,
                    title: '制作馅料',
                    content: '红豆沙加核桃碎、花生碎、芝麻、桂花、蜜枣碎拌匀成馅料。',
                    image: '',
                    tips: '馅料要拌匀，各种坚果增加层次感。'
                },
                {
                    step: 5,
                    title: '分割包制',
                    content: '糕团分成小剂子，擀成圆皮，包入馅料，封好口，整成各种花样。',
                    image: '',
                    tips: '包制时可以做成不同造型，增加美观度。'
                },
                {
                    step: 6,
                    title: '蒸制定型',
                    content: '蒸屉铺湿纱布，放入糕点，包好保鲜膜，大火蒸30分钟。',
                    image: '',
                    tips: '保鲜膜能防止水蒸气滴落，保持糕点形状。'
                },
                {
                    step: 7,
                    title: '晾凉成型',
                    content: '蒸好后关火焖5分钟再开盖，取出晾凉即可享用。',
                    image: '',
                    tips: '晾凉后口感更佳，可保存2-3天。'
                }
            ],
            tips: [
                '糯米粉和粳米粉的比例影响口感。',
                '猪油的使用是传统做法，让糕点更香。',
                '馅料可以根据季节和喜好调整。',
                '蒸制时间要准确，过久会影响口感。',
                '徽州糕点讲究造型精美，体现工艺水平。',
                '这类点心适合作为茶点或节庆食品。'
            ],
            nutrition: {
                calories: '320千卡/100g',
                protein: '6g',
                fat: '12g',
                carbs: '48g',
                fiber: '3g',
                sodium: '120mg'
            },
            tags: ['徽菜', '点心', '传统', '精工'],
            createdAt: '2024-01-28T21:00:00Z',
            updatedAt: '2024-01-28T21:00:00Z'
        },
        {
            id: 'recipe_123',
            title: '徽式蒸蛋',
            description: '安徽蒸蛋，嫩滑清香，老少皆宜。',
            cuisine: 'anhui',
            difficulty: 'easy',
            cookTime: '15分钟',
            rating: 4.2,
            viewCount: 13700,
            favoriteCount: 2123,
            tags: ['徽菜', '蒸菜', '鸡蛋', '清淡']
        },
        {
            id: 'recipe_124',
            title: '徽州火腿',
            description: '安徽特产，火腿香浓，制作传统。',
            cuisine: 'anhui',
            difficulty: 'hard',
            cookTime: '3小时',
            rating: 4.7,
            viewCount: 6800,
            favoriteCount: 1456,
            tags: ['徽菜', '火腿', '特产', '腌制']
        },
        {
            id: 'recipe_125',
            title: '徽式白切肉',
            description: '安徽家常菜，肉质鲜嫩，蘸料独特。',
            cuisine: 'anhui',
            difficulty: 'easy',
            cookTime: '45分钟',
            rating: 4.3,
            viewCount: 11900,
            favoriteCount: 1890,
            tags: ['徽菜', '白切', '猪肉', '家常']
        },
        {
            id: 'recipe_126',
            title: '徽州石耳炖鸡',
            description: '安徽滋补菜，石耳珍贵，鸡汤鲜美。',
            cuisine: 'anhui',
            difficulty: 'medium',
            cookTime: '2小时',
            rating: 4.6,
            viewCount: 8400,
            favoriteCount: 1567,
            tags: ['徽菜', '滋补', '石耳', '炖汤']
        },
        {
            id: 'recipe_127',
            title: '徽式豆腐',
            description: '安徽豆制品，豆腐嫩滑，口感丰富。',
            cuisine: 'anhui',
            difficulty: 'easy',
            cookTime: '20分钟',
            rating: 4.2,
            viewCount: 14800,
            favoriteCount: 2234,
            tags: ['徽菜', '豆腐', '素食', '健康']
        },
        {
            id: 'recipe_128',
            title: '徽州糖醋鱼',
            description: '安徽糖醋鱼，酸甜适口，鱼肉鲜嫩。',
            cuisine: 'anhui',
            difficulty: 'medium',
            cookTime: '30分钟',
            rating: 4.5,
            viewCount: 13200,
            favoriteCount: 2123,
            tags: ['徽菜', '鱼类', '糖醋', '家常']
        },
        {
            id: 'recipe_129',
            title: '徽式笋干烧肉',
            description: '安徽山珍，笋干香浓，肉质酥烂。',
            image: '/cooking-platform/data/imgs/徽菜/徽式笋干烧肉.png',
            cuisine: 'anhui',
            difficulty: 'medium',
            cookTime: '1小时',
            prepTime: '30分钟',
            servings: '3-4人',
            rating: 4.4,
            viewCount: 10600,
            favoriteCount: 1678,
            ingredients: [
                { name: '五花肉', amount: '500g', note: '切块' },
                { name: '笋干', amount: '200g', note: '提前泡发' },
                { name: '生姜', amount: '1块', note: '切片' },
                { name: '大葱', amount: '2段', note: '切段' },
                { name: '八角', amount: '2个', note: '' },
                { name: '桂皮', amount: '1段', note: '' },
                { name: '料酒', amount: '3汤匙', note: '' },
                { name: '生抽', amount: '3汤匙', note: '' },
                { name: '老抽', amount: '1汤匙', note: '上色' },
                { name: '冰糖', amount: '30g', note: '' },
                { name: '盐', amount: '适量', note: '' },
                { name: '植物油', amount: '适量', note: '' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '处理笋干',
                    content: '笋干提前用温水浸泡4-6小时至软身，洗净切段，用开水焯烫去除酸味。',
                    image: '',
                    tips: '笋干要充分泡发，焯水能去除酸涩味。'
                },
                {
                    step: 2,
                    title: '处理五花肉',
                    content: '五花肉洗净切成3cm块，冷水下锅焯水，撇去浮沫，捞出洗净。',
                    image: '',
                    tips: '焯水能去除血污和腥味。'
                },
                {
                    step: 3,
                    title: '煸炒肉块',
                    content: '热锅下少许油，下肉块煸炒至表面微黄出油。',
                    image: '',
                    tips: '煸炒能让肉更香，去除腥味。'
                },
                {
                    step: 4,
                    title: '炒糖上色',
                    content: '下冰糖炒至焦糖色，下肉块翻炒上色，加料酒、生抽、老抽。',
                    image: '',
                    tips: '糖色要炒得恰到好处，不能过焦。'
                },
                {
                    step: 5,
                    title: '添香料炖煮',
                    content: '加姜片、葱段、八角、桂皮，倒入热水没过肉块，大火烧开转小火炖30分钟。',
                    image: '',
                    tips: '要用小火慢炖，让肉质变软。'
                },
                {
                    step: 6,
                    title: '加入笋干',
                    content: '加入处理好的笋干，继续炖20分钟至笋干入味，肉质酥烂。',
                    image: '',
                    tips: '笋干后加，避免炖得过烂。'
                },
                {
                    step: 7,
                    title: '收汁调味',
                    content: '最后大火收汁，调入盐，收至汤汁浓稠即可出锅。',
                    image: '',
                    tips: '收汁时要小心翻动，避免粘锅。'
                }
            ],
            tips: [
                '选择优质笋干，色泽金黄有光泽。',
                '笋干要充分泡发，去除酸涩味很重要。',
                '五花肉选择肥瘦相间的，口感更佳。',
                '这道菜体现了徽菜善用山珍的特色。',
                '炖煮时间要足够，让笋香肉香充分融合。',
                '是徽菜中经典的荤素搭配菜品。'
            ],
            nutrition: {
                calories: '280千卡/100g',
                protein: '16g',
                fat: '20g',
                carbs: '12g',
                fiber: '8g',
                sodium: '580mg'
            },
            tags: ['徽菜', '笋干', '猪肉', '山珍'],
            createdAt: '2024-01-28T22:00:00Z',
            updatedAt: '2024-01-28T22:00:00Z'
        },
        {
            id: 'recipe_130',
            title: '徽州酥饼',
            description: '安徽传统点心，酥脆香甜，层次分明。',
            image: '/cooking-platform/data/imgs/徽菜/徽州酥饼.png',
            cuisine: 'anhui',
            difficulty: 'medium',
            cookTime: '1小时',
            prepTime: '2小时',
            servings: '6-8人',
            rating: 4.3,
            viewCount: 12500,
            favoriteCount: 1890,
            ingredients: [
                { name: '面粉', amount: '500g', note: '中筋面粉' },
                { name: '猪油', amount: '150g', note: '熬制的猪油' },
                { name: '温水', amount: '200ml', note: '和面用' },
                { name: '白糖', amount: '100g', note: '做馅用' },
                { name: '芝麻', amount: '80g', note: '炒香' },
                { name: '核桃仁', amount: '100g', note: '炒香切碎' },
                { name: '花生仁', amount: '100g', note: '炒香去皮碎' },
                { name: '桂花', amount: '10g', note: '干桂花' },
                { name: '蜂蜜', amount: '50g', note: '调馅用' },
                { name: '盐', amount: '1茶匙', note: '和面用' },
                { name: '鸡蛋', amount: '1个', note: '蛋液刷表面' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '制作油酥',
                    content: '取150g面粉，加入熬化的猪油100g，揉成光滑的油酥团，盖布醒30分钟。',
                    image: '',
                    tips: '油酥是酥饼层次的关键，要揉匀醒透。'
                },
                {
                    step: 2,
                    title: '和制水面',
                    content: '剩余面粉加温水、盐、剩余猪油50g，和成光滑面团，醒30分钟。',
                    image: '',
                    tips: '水面要和得软硬适中，便于包制。'
                },
                {
                    step: 3,
                    title: '制作馅料',
                    content: '炒香的芝麻、核桃碎、花生碎与白糖、蜂蜜、桂花拌匀成馅。',
                    image: '',
                    tips: '馅料要拌匀，坚果要炒香增加香味。'
                },
                {
                    step: 4,
                    title: '包制油酥',
                    content: '水面团包入油酥团，封好口，擀成长方形，三折后再擀，重复3次。',
                    image: '',
                    tips: '反复擀折能形成层次，是酥饼酥脆的秘密。'
                },
                {
                    step: 5,
                    title: '分割包馅',
                    content: '将酥面团分成小剂子，包入馅料，收口朝下，轻压成饼状。',
                    image: '',
                    tips: '包制时要封口严实，避免馅料漏出。'
                },
                {
                    step: 6,
                    title: '烘烤酥饼',
                    content: '表面刷蛋液，烤箱预热180°C，烤20-25分钟至表面金黄即可。',
                    image: '',
                    tips: '烤制温度时间要掌握好，避免烤过头。'
                }
            ],
            tips: [
                '猪油的使用是传统做法，让酥饼更香酥。',
                '反复擀折是形成层次的关键技巧。',
                '馅料可根据个人喜好调整配比。',
                '烘烤时要观察颜色，避免烤糊。',
                '徽州酥饼是传统节庆食品。',
                '趁温热享用口感最佳，酥脆香甜。'
            ],
            nutrition: {
                calories: '380千卡/100g',
                protein: '8g',
                fat: '18g',
                carbs: '45g',
                fiber: '4g',
                sodium: '150mg'
            },
            tags: ['徽菜', '点心', '酥饼', '传统'],
            createdAt: '2024-01-28T23:00:00Z',
            updatedAt: '2024-01-28T23:00:00Z'
        },
        {
            id: 'recipe_131',
            title: '徽式蒸饺',
            description: '安徽蒸饺，皮薄馅嫩，汤汁鲜美。',
            image: '/cooking-platform/data/imgs/徽菜/徽式蒸饺.png',
            cuisine: 'anhui',
            difficulty: 'medium',
            cookTime: '40分钟',
            prepTime: '1小时',
            servings: '4-5人',
            rating: 4.4,
            viewCount: 9700,
            favoriteCount: 1456,
            ingredients: [
                { name: '面粉', amount: '400g', note: '中筋面粉' },
                { name: '开水', amount: '200ml', note: '烫面用' },
                { name: '猪肉馅', amount: '400g', note: '肥瘦3:7' },
                { name: '韭菜', amount: '200g', note: '洗净切碎' },
                { name: '香菇', amount: '6朵', note: '泡发切丁' },
                { name: '虾仁', amount: '150g', note: '切丁' },
                { name: '生姜', amount: '1块', note: '切末' },
                { name: '大葱', amount: '2根', note: '切末' },
                { name: '生抽', amount: '3汤匙', note: '' },
                { name: '料酒', amount: '2汤匙', note: '' },
                { name: '香油', amount: '2汤匙', note: '' },
                { name: '盐', amount: '适量', note: '' },
                { name: '胡椒粉', amount: '1茶匙', note: '白胡椒粉' },
                { name: '鸡蛋', amount: '1个', note: '打散' },
                { name: '淀粉', amount: '1汤匙', note: '调馅用' }
            ],
            instructions: [
                {
                    step: 1,
                    title: '烫面制皮',
                    content: '面粉用开水烫制，边冲边搅拌成絮状，晾至不烫手时揉成光滑面团，醒30分钟。',
                    image: '',
                    tips: '烫面制作的饺子皮更有韧性，适合蒸制。'
                },
                {
                    step: 2,
                    title: '调制肉馅',
                    content: '猪肉馅加姜葱末、生抽、料酒、盐、胡椒粉、鸡蛋、淀粉，顺一个方向搅拌上劲。',
                    image: '',
                    tips: '肉馅要搅拌至有粘性，这样包制时不易散开。'
                },
                {
                    step: 3,
                    title: '拌入配菜',
                    content: '加入韭菜碎、香菇丁、虾仁丁，淋入香油拌匀成饺子馅。',
                    image: '',
                    tips: '配菜要拌匀，韭菜增香，香菇增鲜。'
                },
                {
                    step: 4,
                    title: '制作饺子皮',
                    content: '面团揉匀后分成小剂子，擀成中间厚边缘薄的圆皮。',
                    image: '',
                    tips: '饺子皮要擀得薄而均匀，中间稍厚能承重。'
                },
                {
                    step: 5,
                    title: '包制蒸饺',
                    content: '取适量馅料放在皮中央，捏成饺子形状，收口要严实。',
                    image: '',
                    tips: '包制时要封口严密，避免蒸制时漏汁。'
                },
                {
                    step: 6,
                    title: '蒸制饺子',
                    content: '蒸屉刷油防粘，码放饺子，大火蒸15分钟即可。',
                    image: '',
                    tips: '蒸制时间要准确，过久皮会过软。'
                },
                {
                    step: 7,
                    title: '调制蘸料',
                    content: '生抽、香醋、香油、蒜泥调成蘸料，配饺子一起享用。',
                    image: '',
                    tips: '蘸料是徽式蒸饺的经典搭配。'
                }
            ],
            tips: [
                '烫面制皮是徽式蒸饺的特色工艺。',
                '馅料搭配要均衡，荤素搭配营养丰富。',
                '包制手法要熟练，形状要美观。',
                '蒸制火候要掌握好，保持饺子形状。',
                '趁热享用口感最佳，皮薄馅嫩。',
                '是徽菜中经典的面点小食。'
            ],
            nutrition: {
                calories: '260千卡/100g',
                protein: '15g',
                fat: '12g',
                carbs: '25g',
                fiber: '2g',
                sodium: '520mg'
            },
            tags: ['徽菜', '饺子', '蒸制', '家常'],
            createdAt: '2024-01-29T00:00:00Z',
            updatedAt: '2024-01-29T00:00:00Z'
        }
    ],
    
    // 菜系分类
    cuisines: {
        sichuan: { name: '川菜', icon: '🌶️', color: '#ff4757' },
        cantonese: { name: '粤菜', icon: '🦐', color: '#3742fa' },
        hunan: { name: '湘菜', icon: '🔥', color: '#ff3838' },
        shandong: { name: '鲁菜', icon: '🐟', color: '#2f3542' },
        jiangsu: { name: '苏菜', icon: '🦆', color: '#57606f' },
        zhejiang: { name: '浙菜', icon: '🦀', color: '#2ed573' },
        fujian: { name: '闽菜', icon: '🐚', color: '#1e90ff' },
        anhui: { name: '徽菜', icon: '🐷', color: '#8B4513' }
    },

    // 难度等级
    difficulties: {
        easy: { name: '简单', color: '#2ed573', icon: '⭐' },
        medium: { name: '中等', color: '#ffa502', icon: '⭐⭐' },
        hard: { name: '困难', color: '#ff4757', icon: '⭐⭐⭐' }
    },

    // 标签
    tags: [
        '家常菜', '快手菜', '下饭菜', '宴客菜', '素食', '荤菜',
        '汤品', '凉菜', '热菜', '主食', '小食', '甜品',
        '低脂', '高蛋白', '儿童喜爱', '老人适宜'
    ]
};

// 工具函数
const RecipeUtils = {
    // 根据ID获取菜谱
    getRecipeById(id) {
        return RecipeData.recipes.find(recipe => recipe.id === id);
    },

    // 获取随机菜谱
    getRandomRecipes(count = 6) {
        const shuffled = [...RecipeData.recipes].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    },

    // 根据菜系筛选
    getRecipesByCuisine(cuisine, limit = null) {
        const filtered = RecipeData.recipes.filter(recipe => recipe.cuisine === cuisine);
        return limit ? filtered.slice(0, limit) : filtered;
    },

    // 根据难度筛选
    getRecipesByDifficulty(difficulty, limit = null) {
        const filtered = RecipeData.recipes.filter(recipe => recipe.difficulty === difficulty);
        return limit ? filtered.slice(0, limit) : filtered;
    },

    // 搜索菜谱
    searchRecipes(keyword) {
        const lowerKeyword = keyword.toLowerCase();
        return RecipeData.recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(lowerKeyword) ||
            recipe.description.toLowerCase().includes(lowerKeyword) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(lowerKeyword)) ||
            recipe.ingredients.some(ing => ing.name.toLowerCase().includes(lowerKeyword))
        );
    },

    // 获取热门菜谱（按浏览量排序）
    getPopularRecipes(limit = 6) {
        const sorted = [...RecipeData.recipes].sort((a, b) => b.viewCount - a.viewCount);
        return sorted.slice(0, limit);
    },

    // 获取推荐菜谱（按评分排序）
    getFeaturedRecipes(limit = 6) {
        const sorted = [...RecipeData.recipes].sort((a, b) => b.rating - a.rating);
        return sorted.slice(0, limit);
    },

    // 格式化烹饪时间
    formatCookTime(time) {
        return time;
    },

    // 获取难度信息
    getDifficultyInfo(difficulty) {
        return RecipeData.difficulties[difficulty] || RecipeData.difficulties.easy;
    },

    // 获取菜系信息
    getCuisineInfo(cuisine) {
        return RecipeData.cuisines[cuisine] || { name: '其他', icon: '🍽️', color: '#57606f' };
    },

    // 计算总时间
    getTotalTime(prepTime, cookTime) {
        // 简单的时间计算，实际应用中可能需要更复杂的逻辑
        const prep = parseInt(prepTime);
        const cook = parseInt(cookTime);
        return `${prep + cook}分钟`;
    },

    // 获取相关推荐菜谱
    getRelatedRecipes(recipe, limit = 4) {
        const related = RecipeData.recipes.filter(r => 
            r.id !== recipe.id && (
                r.cuisine === recipe.cuisine ||
                r.tags.some(tag => recipe.tags.includes(tag))
            )
        );
        
        // 按相似度排序（这里简化为随机）
        const shuffled = related.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, limit);
    }
};

// 导出到全局对象
window.RecipeData = RecipeData;
window.RecipeUtils = RecipeUtils;
