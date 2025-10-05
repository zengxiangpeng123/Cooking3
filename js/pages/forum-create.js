// Forum Create Topic Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initCreateTopic();
});

let selectedImages = [];
let selectedTags = [];

function initCreateTopic() {
    // 绑定表单事件
    bindFormEvents();
    
    // 初始化编辑器
    initEditor();
    
    // 加载热门标签
    loadPopularTags();
    
    // 初始化图片上传
    initImageUpload();
}

// 绑定表单事件
function bindFormEvents() {
    const form = document.getElementById('createTopicForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            submitTopic();
        });
    }
    
    // 标题字符计数
    const titleInput = document.getElementById('topicTitle');
    const titleCharCount = document.getElementById('titleCharCount');
    if (titleInput && titleCharCount) {
        titleInput.addEventListener('input', function() {
            titleCharCount.textContent = this.value.length;
        });
    }
    
    // 内容字符计数
    const contentTextarea = document.getElementById('topicContent');
    const contentCharCount = document.getElementById('contentCharCount');
    if (contentTextarea && contentCharCount) {
        contentTextarea.addEventListener('input', function() {
            contentCharCount.textContent = this.value.length;
        });
    }
    
    // 标签输入
    const tagsInput = document.getElementById('topicTags');
    if (tagsInput) {
        tagsInput.addEventListener('input', function() {
            updateTagsPreview(this.value);
        });
    }
    
    // 预览按钮
    const previewBtn = document.getElementById('previewBtn');
    if (previewBtn) {
        previewBtn.addEventListener('click', function() {
            togglePreview();
        });
    }
    
    // 保存草稿按钮
    const saveDraftBtn = document.getElementById('saveDraftBtn');
    if (saveDraftBtn) {
        saveDraftBtn.addEventListener('click', function() {
            saveDraft();
        });
    }
}

// 初始化编辑器
function initEditor() {
    const toolbar = document.querySelector('.editor-toolbar');
    const textarea = document.getElementById('topicContent');
    
    if (!toolbar) return;
    
    const editorButtons = toolbar.querySelectorAll('.editor-btn');
    editorButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.dataset.action;
            if (action !== 'separator') {
                handleEditorAction(action);
            }
        });
    });
    
    // 添加键盘快捷键支持
    if (textarea) {
        textarea.addEventListener('keydown', function(e) {
            if (e.ctrlKey) {
                switch (e.key.toLowerCase()) {
                    case 'b':
                        e.preventDefault();
                        handleEditorAction('bold');
                        break;
                    case 'i':
                        if (e.shiftKey) {
                            e.preventDefault();
                            handleEditorAction('image'); // Ctrl+Shift+I 上传图片
                        } else {
                            e.preventDefault();
                            handleEditorAction('italic'); // Ctrl+I 斜体
                        }
                        break;
                    case 'k':
                        e.preventDefault();
                        handleEditorAction('link');
                        break;
                }
            }
        });
    }
}

// 处理编辑器操作
function handleEditorAction(action) {
    const textarea = document.getElementById('topicContent');
    if (!textarea) return;
    
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    
    let replacement = '';
    
    switch (action) {
        case 'bold':
            replacement = `**${selectedText || '粗体文字'}**`;
            break;
        case 'italic':
            replacement = `*${selectedText || '斜体文字'}*`;
            break;
        case 'link':
            const url = prompt('请输入链接地址:', 'https://');
            if (url) {
                replacement = `[${selectedText || '链接文字'}](${url})`;
            }
            break;
        case 'image':
            // 直接触发图片上传
            const imageInput = document.getElementById('imageInput');
            if (imageInput) {
                // 保存当前光标位置
                window.currentCursorPosition = start;
                imageInput.click();
                return; // 不执行后续的文本替换，等待图片上传完成
            } else {
                // 降级处理：手动输入图片链接
                const imageUrl = prompt('请输入图片地址:', 'https://');
                if (imageUrl) {
                    replacement = `![${selectedText || '图片描述'}](${imageUrl})`;
                }
            }
            break;
    }
    
    if (replacement) {
        textarea.value = textarea.value.substring(0, start) + replacement + textarea.value.substring(end);
        textarea.focus();
        textarea.setSelectionRange(start, start + replacement.length);
        
        // 更新字符计数
        const event = new Event('input');
        textarea.dispatchEvent(event);
    }
}

// 初始化图片上传
function initImageUpload() {
    const uploadArea = document.getElementById('imageUpload');
    const imageInput = document.getElementById('imageInput');
    
    if (uploadArea && imageInput) {
        // 点击上传
        uploadArea.addEventListener('click', function() {
            imageInput.click();
        });
        
        // 文件选择
        imageInput.addEventListener('change', function() {
            handleImageSelect(this.files);
        });
        
        // 拖拽上传
        uploadArea.addEventListener('dragover', function(e) {
            e.preventDefault();
            this.classList.add('upload-area--dragover');
        });
        
        uploadArea.addEventListener('dragleave', function(e) {
            e.preventDefault();
            this.classList.remove('upload-area--dragover');
        });
        
        uploadArea.addEventListener('drop', function(e) {
            e.preventDefault();
            this.classList.remove('upload-area--dragover');
            handleImageSelect(e.dataTransfer.files);
        });
    }
}

// 处理图片选择
function handleImageSelect(files) {
    Array.from(files).forEach(file => {
        if (file.type.startsWith('image/')) {
            if (file.size > 5 * 1024 * 1024) {
                showNotification('图片大小不能超过5MB', 'error');
                return;
            }
            
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageId = addImagePreview(file.name, e.target.result);
                
                // 如果是从工具栏触发的上传，直接插入到编辑器
                if (window.currentCursorPosition !== undefined) {
                    setTimeout(() => {
                        insertImageToEditor(imageId);
                        delete window.currentCursorPosition; // 清理临时变量
                    }, 100);
                }
            };
            reader.readAsDataURL(file);
        } else {
            showNotification('请选择图片文件（JPG、PNG等格式）', 'error');
        }
    });
}

// 添加图片预览 - 显示编号系统
function addImagePreview(fileName, dataUrl) {
    const previewContainer = document.getElementById('imagePreview');
    if (!previewContainer) return;
    
    const imageId = 'img_' + Date.now();
    selectedImages.push({ 
        id: imageId, 
        name: fileName, 
        data: dataUrl,
        isUsed: false,
        insertedAt: null
    });
    
    // 重新渲染所有图片预览，更新编号
    renderImagePreviews();
    
    // 更新图片引用助手
    updateImageHelper();
    
    return imageId;
}

// 渲染图片预览列表
function renderImagePreviews() {
    const previewContainer = document.getElementById('imagePreview');
    if (!previewContainer) return;
    
    previewContainer.innerHTML = selectedImages.map((image, index) => {
        const imageNumber = index + 1;
        
        return `
            <div class="preview-item" style="
                position: relative;
                display: inline-block;
                margin: 10px;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                border: ${image.isUsed ? '3px solid #4caf50' : '1px solid #ddd'};
            ">
                <img src="${image.data}" alt="${image.name}" style="
                    width: 120px;
                    height: 120px;
                    object-fit: cover;
                    display: block;
                ">
                
                <!-- 图片编号标签 -->
                <div class="image-number" style="
                    position: absolute;
                    top: 8px;
                    left: 8px;
                    background: #ff6b35;
                    color: white;
                    padding: 4px 8px;
                    border-radius: 12px;
                    font-size: 12px;
                    font-weight: 600;
                ">
                    图${imageNumber}
                </div>
                
                <div class="preview-actions" style="
                    position: absolute;
                    top: 8px;
                    right: 8px;
                    display: flex;
                    gap: 4px;
                ">
                    <button type="button" class="preview-btn insert-btn" 
                            onclick="insertImageToEditor('${image.id}')" 
                            title="插入为[图片${imageNumber}]"
                            ${image.isUsed ? 'disabled' : ''}
                            style="
                                background: ${image.isUsed ? '#666' : '#4caf50'};
                                color: white;
                                border: none;
                                width: 24px;
                                height: 24px;
                                border-radius: 4px;
                                cursor: ${image.isUsed ? 'default' : 'pointer'};
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                font-size: 12px;
                            ">
                        ${image.isUsed ? '✓' : '+'}
                    </button>
                    <button type="button" class="preview-btn remove-btn" 
                            onclick="removeImage('${image.id}')" 
                            title="删除图片"
                            style="
                                background: #f44336;
                                color: white;
                                border: none;
                                width: 24px;
                                height: 24px;
                                border-radius: 4px;
                                cursor: pointer;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                font-size: 14px;
                            ">
                        ×
                    </button>
                </div>
                
                <div class="preview-info" style="
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: ${image.isUsed ? 'rgba(76,175,80,0.8)' : 'rgba(0,0,0,0.7)'};
                    color: white;
                    padding: 6px;
                    font-size: 11px;
                    text-align: center;
                ">
                    ${image.isUsed ? `已用作图片${imageNumber}` : `${fileName.length > 15 ? fileName.substring(0, 12) + '...' : fileName}`}
                </div>
            </div>
        `;
    }).join('');
    
    // 更新图片引用助手
    updateImageHelper();
}

// 插入图片到编辑器 - 使用编号引用系统
function insertImageToEditor(imageId) {
    const image = selectedImages.find(img => img.id === imageId);
    if (!image) return;
    
    const textarea = document.getElementById('topicContent');
    if (!textarea) return;
    
    // 使用保存的光标位置或当前光标位置
    let cursorPosition = window.currentCursorPosition !== undefined 
        ? window.currentCursorPosition 
        : textarea.selectionStart;
    
    const currentContent = textarea.value;
    
    // 获取图片编号（从1开始）
    const imageIndex = selectedImages.findIndex(img => img.id === imageId) + 1;
    
    // 插入图片占位符，而不是完整的图片数据
    const imagePlaceholder = `[图片${imageIndex}]`;
    
    // 在指定位置插入占位符
    const newContent = currentContent.slice(0, cursorPosition) + imagePlaceholder + currentContent.slice(cursorPosition);
    
    textarea.value = newContent;
    
    // 移动光标到插入内容之后
    const newCursorPosition = cursorPosition + imagePlaceholder.length;
    textarea.setSelectionRange(newCursorPosition, newCursorPosition);
    
    // 更新字符计数
    const contentCharCount = document.getElementById('contentCharCount');
    if (contentCharCount) {
        contentCharCount.textContent = newContent.length;
    }
    
    // 标记图片为已使用状态
    image.isUsed = true;
    
    // 更新按钮状态
    const insertBtn = document.querySelector(`[onclick="insertImageToEditor('${imageId}')"]`);
    if (insertBtn) {
        insertBtn.style.background = '#666';
        insertBtn.innerHTML = '✓';
        insertBtn.title = `已插入为图片${imageIndex}`;
        insertBtn.disabled = true;
    }
    
    // 显示成功提示
    showNotification(`已插入图片引用"[图片${imageIndex}]"，文档保持简洁`, 'success');
    
    // 聚焦到编辑器
    textarea.focus();
    
    // 更新预览（如果预览区域可见）
    updatePreview();
    
    // 更新图片引用助手
    updateImageHelper();
    
    console.log(`✅ 图片${imageIndex}引用已插入:`, image.name);
}

// 移除图片 - 处理编号重新分配
function removeImage(imageId) {
    const removedImageIndex = selectedImages.findIndex(img => img.id === imageId);
    if (removedImageIndex === -1) return;
    
    const removedImage = selectedImages[removedImageIndex];
    
    // 如果图片已被使用，需要更新文档中的引用
    if (removedImage.isUsed) {
        const textarea = document.getElementById('topicContent');
        if (textarea) {
            let content = textarea.value;
            const oldImageNumber = removedImageIndex + 1;
            
            // 移除对应的图片占位符
            content = content.replace(new RegExp(`\\[图片${oldImageNumber}\\]`, 'g'), '');
            
            // 更新后续图片的编号
            selectedImages.forEach((img, idx) => {
                if (idx > removedImageIndex && img.isUsed) {
                    const oldNumber = idx + 1;
                    const newNumber = idx; // 因为删除了一个，所以编号减1
                    content = content.replace(new RegExp(`\\[图片${oldNumber}\\]`, 'g'), `[图片${newNumber}]`);
                }
            });
            
            textarea.value = content;
            
            // 更新字符计数
            const contentCharCount = document.getElementById('contentCharCount');
            if (contentCharCount) {
                contentCharCount.textContent = content.length;
            }
        }
    }
    
    // 从数组中移除图片
    selectedImages.splice(removedImageIndex, 1);
    
    // 重新渲染预览
    renderImagePreviews();
    
    // 更新预览（如果可见）
    updatePreview();
    
    // 更新图片引用助手
    updateImageHelper();
    
    showNotification(`已删除图片，编号已自动重新分配`, 'info');
}

// 更新标签预览
function updateTagsPreview(tagsString) {
    const tags = tagsString.split(/\s+/).filter(tag => tag.trim().length > 0).slice(0, 5);
    selectedTags = tags;
    
    const previewContainer = document.getElementById('tagsPreview');
    if (previewContainer) {
        previewContainer.innerHTML = tags.map(tag => `
            <span class="tag">${tag}</span>
        `).join('');
    }
}

// 加载热门标签
function loadPopularTags() {
    const container = document.getElementById('popularTags');
    if (!container) return;
    
    const popularTags = ['家常菜', '新手', '川菜', '烘焙', '减肥餐', '快手菜', '汤品', '素食'];
    
    container.innerHTML = popularTags.map(tag => `
        <span class="tag tag--popular" onclick="addPopularTag('${tag}')">${tag}</span>
    `).join('');
}

// 添加热门标签
function addPopularTag(tag) {
    const tagsInput = document.getElementById('topicTags');
    if (!tagsInput) return;
    
    const currentTags = tagsInput.value.trim();
    const tagsArray = currentTags ? currentTags.split(/\s+/) : [];
    
    if (!tagsArray.includes(tag) && tagsArray.length < 5) {
        tagsArray.push(tag);
        tagsInput.value = tagsArray.join(' ');
        updateTagsPreview(tagsInput.value);
    }
}

// 切换预览
function togglePreview() {
    const previewSection = document.getElementById('previewSection');
    const previewContainer = document.getElementById('topicPreview');
    const previewBtn = document.getElementById('previewBtn');
    
    if (!previewSection || !previewContainer || !previewBtn) return;
    
    if (previewSection.style.display === 'none' || previewSection.style.display === '') {
        // 显示预览
        const formData = getFormData();
        
        if (!formData.title || !formData.content) {
            showNotification('请先填写标题和内容', 'error');
            return;
        }
        
        previewContainer.innerHTML = createTopicPreview(formData);
        previewSection.style.display = 'block';
        previewBtn.textContent = '隐藏预览';
        
        // 滚动到预览区域
        previewSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        // 隐藏预览
        previewSection.style.display = 'none';
        previewBtn.textContent = '预览';
    }
}

// 创建话题预览
function createTopicPreview(formData) {
    const category = ForumUtils.getCategoryById(formData.category);
    
    return `
        <div class="topic-preview__header">
            <div class="topic-meta">
                <span class="topic-category" style="background-color: ${category?.color || '#666'}">${category?.name || '其他'}</span>
            </div>
            <h2 class="topic-title">${formData.title}</h2>
            <div class="topic-author-info">
                <div class="author-avatar">👤</div>
                <div class="author-details">
                    <div class="author-name">当前用户</div>
                    <div class="author-time">刚刚发布</div>
                </div>
            </div>
        </div>
        <div class="topic-content">
            <div class="topic-body">
                ${formatTopicContent(formData.content)}
            </div>
            ${formData.tags.length > 0 ? `
                <div class="topic-tags">
                    ${formData.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            ` : ''}
        </div>
    `;
}

// 格式化内容（Markdown渲染 + 图片占位符替换）
function formatTopicContent(content) {
    // 首先处理图片占位符替换
    let formattedContent = replaceImagePlaceholders(content);
    
    // 然后处理Markdown语法
    return formattedContent
        .replace(/^## (.+)$/gm, '<h2>$1</h2>')
        .replace(/^### (.+)$/gm, '<h3>$1</h3>')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        .replace(/^- (.+)$/gm, '<li>$1</li>')
        .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>');
}

// 替换图片占位符为实际图片HTML
function replaceImagePlaceholders(content) {
    // 匹配 [图片1]、[图片2] 等占位符
    return content.replace(/\[图片(\d+)\]/g, (match, imageNumber) => {
        const imageIndex = parseInt(imageNumber) - 1;
        const image = selectedImages[imageIndex];
        
        if (image && image.data) {
            return `
                <div class="embedded-image" style="
                    margin: 20px 0;
                    text-align: center;
                    padding: 15px;
                    background: #f8f9fa;
                    border-radius: 8px;
                    border: 1px solid #e9ecef;
                ">
                    <img src="${image.data}" 
                         alt="${image.name}" 
                         style="
                            max-width: 100%;
                            height: auto;
                            border-radius: 6px;
                            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                         ">
                    <div class="image-caption" style="
                        margin-top: 10px;
                        font-size: 0.9rem;
                        color: #666;
                        font-style: italic;
                    ">
                        图${imageNumber}：${image.name}
                    </div>
                </div>
            `;
        } else {
            // 如果找不到对应图片，显示占位符
            return `
                <div class="missing-image" style="
                    margin: 20px 0;
                    padding: 20px;
                    background: #fff3cd;
                    border: 1px solid #ffeaa7;
                    border-radius: 8px;
                    text-align: center;
                    color: #856404;
                ">
                    ⚠️ 图片${imageNumber}未找到或已删除
                </div>
            `;
        }
    });
}

// 更新预览内容
function updatePreview() {
    const previewSection = document.getElementById('previewSection');
    const previewContainer = document.getElementById('topicPreview');
    
    // 如果预览区域不可见，不需要更新
    if (!previewSection || !previewContainer || previewSection.style.display === 'none') {
        return;
    }
    
    // 获取当前表单数据
    const formData = getFormData();
    
    // 更新预览内容
    previewContainer.innerHTML = createTopicPreview(formData);
    
    console.log('✅ 预览已更新');
}

// 更新图片引用助手
function updateImageHelper() {
    const helperContainer = document.getElementById('imagesStatus');
    if (!helperContainer) return;
    
    if (selectedImages.length === 0) {
        helperContainer.innerHTML = '<div style="color: #999; text-align: center; padding: 20px;">暂无上传的图片</div>';
        return;
    }
    
    let helperHTML = '<div class="images-list">';
    
    selectedImages.forEach((image, index) => {
        const imageNumber = index + 1;
        helperHTML += `
            <div class="helper-image-item" style="
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 8px;
                margin: 6px 0;
                background: ${image.isUsed ? '#e8f5e8' : '#fff'};
                border: 1px solid ${image.isUsed ? '#4caf50' : '#ddd'};
                border-radius: 6px;
                font-size: 0.8rem;
            ">
                <div class="helper-image-info" style="flex: 1;">
                    <div style="font-weight: 600; color: #333;">图片${imageNumber}</div>
                    <div style="color: #666; font-size: 0.75rem; margin-top: 2px;">
                        ${image.name.length > 12 ? image.name.substring(0, 12) + '...' : image.name}
                    </div>
                </div>
                <div class="helper-image-actions">
                    ${image.isUsed 
                        ? '<span style="color: #4caf50; font-size: 0.75rem;">✓ 已使用</span>' 
                        : `<button onclick="insertImageToEditor('${image.id}')" style="
                            background: #ff6b35;
                            color: white;
                            border: none;
                            padding: 4px 8px;
                            border-radius: 4px;
                            cursor: pointer;
                            font-size: 0.7rem;
                        ">插入</button>`
                    }
                </div>
            </div>
        `;
    });
    
    helperHTML += '</div>';
    
    // 添加使用统计
    const usedCount = selectedImages.filter(img => img.isUsed).length;
    helperHTML += `
        <div class="helper-stats" style="
            margin-top: 15px;
            padding: 10px;
            background: #e3f2fd;
            border-radius: 6px;
            text-align: center;
            font-size: 0.8rem;
            color: #1976d2;
        ">
            📊 已使用 ${usedCount}/${selectedImages.length} 张图片
        </div>
    `;
    
    if (selectedImages.length > usedCount) {
        helperHTML += `
            <div style="
                margin-top: 8px;
                text-align: center;
                font-size: 0.75rem;
                color: #ff9800;
            ">
                ⚠️ 还有 ${selectedImages.length - usedCount} 张图片未使用
            </div>
        `;
    }
    
    helperContainer.innerHTML = helperHTML;
}

// 获取表单数据
function getFormData() {
    return {
        category: document.getElementById('topicCategory')?.value || '',
        title: document.getElementById('topicTitle')?.value.trim() || '',
        content: document.getElementById('topicContent')?.value.trim() || '',
        tags: selectedTags,
        images: selectedImages
    };
}

// 保存草稿
function saveDraft() {
    const formData = getFormData();
    
    if (!formData.title && !formData.content) {
        showNotification('没有内容需要保存', 'info');
        return;
    }
    
    try {
        localStorage.setItem('forum_draft', JSON.stringify({
            ...formData,
            savedAt: new Date().toISOString()
        }));
        showNotification('草稿已保存', 'success');
    } catch (error) {
        showNotification('保存草稿失败', 'error');
    }
}

// 加载草稿
function loadDraft() {
    try {
        const draft = localStorage.getItem('forum_draft');
        if (!draft) return;
        
        const draftData = JSON.parse(draft);
        
        // 确认是否加载草稿
        if (confirm('发现有未发布的草稿，是否加载？')) {
            document.getElementById('topicCategory').value = draftData.category || '';
            document.getElementById('topicTitle').value = draftData.title || '';
            document.getElementById('topicContent').value = draftData.content || '';
            document.getElementById('topicTags').value = draftData.tags ? draftData.tags.join(' ') : '';
            
            selectedTags = draftData.tags || [];
            selectedImages = draftData.images || [];
            
            // 更新预览
            updateTagsPreview(document.getElementById('topicTags').value);
            
            // 触发字符计数更新
            const titleInput = document.getElementById('topicTitle');
            const contentTextarea = document.getElementById('topicContent');
            if (titleInput) titleInput.dispatchEvent(new Event('input'));
            if (contentTextarea) contentTextarea.dispatchEvent(new Event('input'));
        }
    } catch (error) {
        console.warn('加载草稿失败:', error);
    }
}

// 提交话题
function submitTopic() {
    const formData = getFormData();
    
    // 验证必填字段
    if (!formData.category) {
        showNotification('请选择话题分类', 'error');
        return;
    }
    
    if (!formData.title) {
        showNotification('请输入话题标题', 'error');
        return;
    }
    
    if (!formData.content) {
        showNotification('请输入话题内容', 'error');
        return;
    }
    
    // 创建话题数据 - 分离存储文本和图片
    const topicData = {
        title: formData.title,
        content: formData.content, // 包含[图片1]等占位符的简洁文本
        category: formData.category,
        author: {
            name: localStorage.getItem('username') || '当前用户',
            avatar: localStorage.getItem('userAvatar') || '👤',
            level: '新手',
            joinDate: new Date().toISOString().split('T')[0]
        },
        tags: formData.tags,
        views: 0,
        replies: 0,
        likes: 0,
        images: selectedImages.map(img => ({
            id: img.id,
            name: img.name,
            data: img.data,
            isUsed: img.isUsed || false
        })), // 图片数据单独存储，包含编号信息
        imageCount: selectedImages.length,
        contentType: 'text-with-image-refs' // 标记这是新的内容格式
    };
    
    console.log('📝 话题数据统计:', {
        textLength: formData.content.length,
        imageCount: selectedImages.length,
        usedImages: selectedImages.filter(img => img.isUsed).length,
        contentSample: formData.content.substring(0, 100) + (formData.content.length > 100 ? '...' : '')
    });
    
    // 显示提交中状态
    const publishBtn = document.getElementById('publishBtn');
    if (publishBtn) {
        publishBtn.disabled = true;
        publishBtn.textContent = '发布中...';
    }
    
    // 模拟提交延迟
    setTimeout(() => {
        try {
            const newTopic = ForumUtils.createTopic(topicData);
            
            // 清除草稿
            localStorage.removeItem('forum_draft');
            
            showNotification('话题发布成功！', 'success');
            
            // 跳转到话题详情页
            setTimeout(() => {
                window.location.href = `topic.html?id=${newTopic.id}`;
            }, 1000);
            
        } catch (error) {
            showNotification('发布失败，请重试', 'error');
            
            if (publishBtn) {
                publishBtn.disabled = false;
                publishBtn.textContent = '发布话题';
            }
        }
    }, 1000);
}

// 显示通知
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('notification--show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('notification--show');
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// 页面加载时尝试加载草稿
window.addEventListener('load', function() {
    setTimeout(loadDraft, 500);
});

// 全局函数供HTML调用
window.removeImage = removeImage;
window.insertImageToEditor = insertImageToEditor;
window.addPopularTag = addPopularTag;
