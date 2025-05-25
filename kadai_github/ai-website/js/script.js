// 画像のパスを配列で管理
const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg'
];

// 現在表示中の画像のインデックス
let currentIndex = 0;

// 画像を切り替える関数
function changeImage() {
    // 次の画像のインデックスを計算
    currentIndex = (currentIndex + 1) % images.length;
    
    // 画像要素を取得
    const imageElement = document.getElementById('slideshow-image');
    
    // 画像のsrc属性を更新
    imageElement.src = images[currentIndex];
}

// 3秒周期で画像を切り替える
setInterval(changeImage, 3000);