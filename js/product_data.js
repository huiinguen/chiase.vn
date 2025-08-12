var allProducts = [
    {
        id: 1,
        name: 'App python tổng hợp',
        price: 80000,
        images_gallery: ['images/py.jpg', 'images/placeholder.png', 'images/placeholder.png'],
        category: 'Source Code',
        subCategory: 'Python', // Mục con mới
        description: 'Chức năng: (1) spam chỉ chuột vào đích  (2) spam dạng ctrl+v  (3) tạo list mail ',
    },
     {
        id: 1,
        name: 'code web',
        price: 80000,
        images_gallery: ['images/py.jpg', 'images/placeholder.png', 'images/placeholder.png'],
        category: 'Source Code',
        subCategory: 'html/css/js', // Mục con mới
        description: '',
    },
    {
        id: 2,
        name: 'Source Code Game Flappy Bird (Unity)',
        price: 0,
        images_gallery: ['images/flappybird_code.jpg'],
        category: 'Source Code',
        subCategory: 'Game', // Mục con mới
        description: '',
    },
    {
        id: 3,
        name: 'Source Code TDS TIKTOK',
        price: 0,
        images_gallery: ['images/flappybird_code.jpg'],
        category: 'Source Code',
        subCategory: 'Python', // Mục con mới
        description: '',
        resourceLink: 'https://drive.google.com/drive/u/0/folders/1-bHlCbRAO1XG_6c6vS4MQ6z60yi8IyNF',
    },
      {
        id: 3,
        name: 'Source Code TDS fb',
        price: 0,
        images_gallery: ['images/flappybird_code.jpg'],
        category: 'Source Code',
        subCategory: 'Python', // Mục con mới
        description: '',
        resourceLink: 'https://drive.google.com/drive/u/0/folders/1-bHlCbRAO1XG_6c6vS4MQ6z60yi8IyNF',
    },
    {
        id: 3,
        name: 'app c++',
        price: 50000,
        images_gallery: ['images/flappybird_code.jpg'],
        category: 'Source Code',
        subCategory: 'C/C++', // Mục con mới
        description: 'đa tính năng dạng cơ bản',
    },
    {
        id: 4,
        name: 'Locket Gold Link 1',
        price: 0,
        images_gallery: ['images/locket.jpg'],
        category: 'Share Tài Nguyên',
        subCategory: 'Module & Script', // Mục con mới
        description: '',
        resourceLink: 'https://raw.githubusercontent.com/hvbstar/coderhvb/main/Locket_Gold_HVB.sgmodule'
    },
    {
        id: 5,
        name: 'Locket Gold Link 2',
        price: 0,
        images_gallery: ['images/locket.jpg'],
        category: 'Share Tài Nguyên',
        subCategory: 'Module & Script', // Mục con mới
        description: '',
        resourceLink: 'https://raw.githubusercontent.com/vuong2023/shad/main/modules/Locket_ohb.sgmodule'
    },
    {
        id: 6,
        name: 'Tải Shadowrocket',
        price: 0,
        images_gallery: ['images/shadow.jpg'],
        category: 'Share Tài Nguyên',
        subCategory: 'Ứng dụng', // Mục con mới
        description: '',
        resourceLink: 'https://idapple.csadata4g.me/'
    },
    {
        id: 7,
        name: 'Module YouTube Premium',
        price: 0,
        images_gallery: ['images/yt.jpg'],
        category: 'Share Tài Nguyên',
        subCategory: 'Module & Script', // Mục con mới
        description: '',
        resourceLink: 'https://raw.githubusercontent.com/quocchienn/YouTubePIP/refs/heads/YouTube%2B%2B/YouTubefix3.conf'
    },
    {
        id: 8,
        name: 'Link YouTube Premium',
        price: 0,
        images_gallery: ['images/yt.jpg'],
        category: 'Share Tài Nguyên',
        subCategory: 'Module & Script', // Mục con mới
        description: '',
        resourceLink: 'https://raw.githubusercontent.com/vuong2023/shad/main/modules/Locket_ohb.sgmodule'
    },
    {
        id: 9,
        name: 'Spotify Config',
        price: 0,
        images_gallery: ['images/spotify.jpg'],
        category: 'Share Tài Nguyên',
        subCategory: 'Module & Script', // Mục con mới
        description: '',
        resourceLink: 'https://raw.githubusercontent.com/quocchienn/1in1/refs/heads/main/Spotify.conf'
    },
    {
        id: 10,
        name: 'Spotify Module',
        price: 0,
        images_gallery: ['images/spotify.jpg'],
        category: 'Share Tài Nguyên',
        subCategory: 'Module & Script', // Mục con mới
        description: '',
        resourceLink: 'https://raw.githubusercontent.com/quocchienn/1in1/refs/heads/main/Spotify.module'
    },
    {
        id: 11,
        name: 'SoundCloud',
        price: 0,
        images_gallery: ['images/'],
        category: 'Share Tài Nguyên',
        subCategory: 'Ứng dụng', // Mục con mới
        description: '',
        resourceLink: 'https://raw.githubusercontent.com/vantuan380/vantuan/refs/heads/main/soundcloud.module'
    },
    {
        id: 12,
        name: 'Module Tổng Hợp',
        price: 0,
        images_gallery: ['images/shadow.jpg'],
        category: 'Share Tài Nguyên',
        subCategory: 'Module & Script', // Mục con mới
        description: '',
        resourceLink: 'https://raw.githubusercontent.com/quocchienn/Make/refs/heads/crack/ALL_Lucky_VP3.modules'
    },
    {
        id: 13,
        name: 'meitu module',
        price: 0,
        images_gallery: ['images/'],
        category: 'Share Tài Nguyên',
        subCategory: 'Module & Script', // Mục con mới
        description: '',
        resourceLink: 'https://raw.githubusercontent.com/vantuan380/vantuan/refs/heads/main/Meitu.module'
    },
    {
        id: 13,
        name: 'Lightroom 2',
        price: 0,
        images_gallery: ['images/'],
        category: 'Share Tài Nguyên',
        subCategory: 'Module & Script', // Mục con mới
        description: 'cre: whatshub',
        resourceLink: 'https://whatshub.top/module/lightroom.module'
    },
    {
        id: 14,
        name: 'Lightroom',
        price: 0,
        images_gallery: ['images/'],
        category: 'Share Tài Nguyên',
        subCategory: 'Module & Script', // Mục con mới
        description: '',
        resourceLink: 'https://raw.githubusercontent.com/vantuan380/phonton/refs/heads/main/lightroom.module'
    },
    {
        id: 15,
        name: 'follow tiktok',
        price: 10000,
        images_gallery: ['images/'],
        category: 'MXH',
        subCategory: 'Tiktok',
        description: '10k/100',
    },
    {
        id: 16,
        name: 'tim tiktok',
        price: 10000,
        images_gallery: ['images/'],
        category: 'MXH',
        subCategory: 'Tiktok',
        description: '10k/100',
    },
    {
        id: 17,
        name: 'lưu lại tiktok',
        price: 10000,
        images_gallery: ['images/'],
        category: 'MXH',
        subCategory: 'Tiktok',
        description: '10k/100',
    },
    {
        id: 18,
        name: 'đăng lại tiktok',
        price: 10000,
        images_gallery: ['images/'],
        category: 'MXH',
        subCategory: 'Tiktok',
        description: '10k/100',
    },
    {
        id: 19,
        name: 'Share Instagram Story',
        price: 50000,
        images_gallery: ['images/'],
        category: 'MXH',
        subCategory: 'Instagram',
        description: 'Chia sẻ câu chuyện Instagram',
    },
    {
        id: 20,
        name: 'Lượt like Facebook',
        price: 15000,
        images_gallery: ['images/'],
        category: 'MXH',
        description: '15k/100 lượt thích',
    },
];

const placeholderImage = 'images/placeholder.png';
allProducts.forEach(product => {
    if (!product.image) product.image = placeholderImage;
    if (!product.images_gallery || product.images_gallery.length === 0) {
        product.images_gallery = [product.image || placeholderImage];
    }
    product.images_gallery = product.images_gallery.map(img => img || placeholderImage);
});