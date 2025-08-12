document.addEventListener('DOMContentLoaded', function() {
    const blogGrid = document.getElementById('blogGrid');
    
    if (typeof blogPosts === 'undefined' || blogPosts.length === 0) {
        if (blogGrid) {
            blogGrid.innerHTML = '<p class="loading-text">Không có bài viết nào để hiển thị.</p>';
        }
        return;
    }

    // ... trong vòng lặp forEach
if (blogGrid) {
    blogPosts.forEach(post => {
        const blogCard = document.createElement('a');
        blogCard.href = `bai_viet.html?id=${post.id}`;
        blogCard.classList.add('blog-card');

        // Tạo biến để chứa icon tích xanh
        const verifiedIcon = post.author === 'Admin' 
            ? '<i class="fas fa-check-circle verified-icon"></i>' 
            : '';

        // Bổ sung '(Tham khảo)' vào trong metadata
        const metaHtml = post.references && post.references.length > 0
            ? `<p class="blog-card-meta">
                <span><i class="fas fa-user"></i> ${post.author} ${verifiedIcon}</span>
                <span><i class="fas fa-calendar-alt"></i> ${post.date}</span>
                <span class="reference-tag">(Tham khảo)</span>
            </p>`
            : `<p class="blog-card-meta">
                <span><i class="fas fa-user"></i> ${post.author} ${verifiedIcon}</span>
                <span><i class="fas fa-calendar-alt"></i> ${post.date}</span>
            </p>`;

        blogCard.innerHTML = `
            <div class="blog-card-image" style="background-image: url('${post.image}')"></div>
            <div class="blog-card-content">
                <h3>${post.title}</h3>
                ${metaHtml}
                <p class="blog-card-snippet">${post.snippet}</p>
            </div>
        `;
        blogGrid.appendChild(blogCard);
    });
}
// ...
});