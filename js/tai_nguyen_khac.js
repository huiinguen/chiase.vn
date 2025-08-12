document.addEventListener('DOMContentLoaded', function() {
    const resourceCategoriesContainer = document.getElementById('resourceCategories');
    const modal = document.getElementById('resourceModal');
    const modalTitle = document.getElementById('modal-title');
    const modalResourceList = document.getElementById('modal-resource-list');
    const closeButton = document.querySelector('.close-button');

    if (resourceCategoriesContainer && typeof otherResourcesData !== 'undefined') {
        // Tạo các thẻ accordion header, nhưng không có nội dung accordion
        otherResourcesData.forEach(category => {
            const accordionHtml = `
                <div class="category-accordion">
                    <div class="accordion-header" data-category-id="${category.id}">
                        <h2><i class="${category.icon}"></i> ${category.category}</h2>
                        <i class="fas fa-chevron-right"></i> </div>
                </div>
            `;
            resourceCategoriesContainer.innerHTML += accordionHtml;
        });

        // Xử lý sự kiện click để mở Modal
        document.querySelectorAll('.accordion-header').forEach(header => {
            header.addEventListener('click', function() {
                const categoryId = this.getAttribute('data-category-id');
                const categoryData = otherResourcesData.find(cat => cat.id === categoryId);

                if (categoryData) {
                    modalTitle.textContent = categoryData.category;
                    modalResourceList.innerHTML = ''; // Xóa nội dung cũ

                    // Tạo và thêm các liên kết vào modal
                    categoryData.links.forEach(link => {
                        const listItem = document.createElement('li');
                        listItem.innerHTML = `
                            <a href="${link.url}" target="_blank" rel="noopener noreferrer">
                                ${link.name}
                            </a>
                            <p class="resource-description">${link.description}</p>
                        `;
                        modalResourceList.appendChild(listItem);
                    });
                    
                    modal.style.display = 'flex'; // Hiển thị modal
                }
            });
        });

        // Đóng modal khi nhấp vào nút đóng
        closeButton.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        // Đóng modal khi nhấp vào vùng nền mờ
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});