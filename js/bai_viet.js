document.addEventListener('DOMContentLoaded', function() {
    const blogPostDetailContainer = document.getElementById('blogPostDetailContainer');
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));
    const blogPostTitle = document.getElementById('blogPostTitle');

    if (!blogPostDetailContainer || isNaN(postId) || !blogPosts) {
        blogPostDetailContainer.innerHTML = '<p class="error-text">Không tìm thấy bài viết hoặc ID không hợp lệ.</p>';
        return;
    }

    const post = blogPosts.find(p => p.id === postId);
    const referencesSection = document.getElementById('referencesSection');
    const referencesList = document.getElementById('referencesList');

    if (post) {
        if (blogPostTitle) {
            blogPostTitle.textContent = post.title;
        }

        blogPostDetailContainer.innerHTML = `
            <div class="post-header">
                <h1>${post.title}</h1>
                <p class="post-meta">
                    <span><i class="fas fa-user"></i> Tác giả: ${post.author} <i class="fas fa-check-circle verified-icon"></i></span>
                    <span><i class="fas fa-calendar-alt"></i> Ngày đăng: ${post.date}</span>
                </p>
            </div>
            <div class="post-content">
                ${post.content}
            </div>
        `;

        if (post.references && post.references.length > 0) {
            referencesSection.style.display = 'block';
            referencesList.innerHTML = '';
            post.references.forEach(ref => {
                const li = document.createElement('li');
                if (ref.link) {
                    li.innerHTML = `<a href="${ref.link}" target="_blank" rel="noopener noreferrer">${ref.text}</a>`;
                } else {
                    li.textContent = ref.text;
                }
                referencesList.appendChild(li);
            });
        }
    } else {
        blogPostDetailContainer.innerHTML = '<p class="error-text">Không tìm thấy bài viết.</p>';
        if (referencesSection) {
            referencesSection.style.display = 'none';
        }
    }
});