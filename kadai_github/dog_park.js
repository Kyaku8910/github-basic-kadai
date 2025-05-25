// Canvasの設定
const canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

// 水彩風の効果を追加する関数
function addWatercolorEffect(x, y, radius, color) {
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
}

// 背景を描画
function drawBackground() {
    // 空
    const skyGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    skyGradient.addColorStop(0, '#A5D8FF');
    skyGradient.addColorStop(1, '#E6F3FF');
    ctx.fillStyle = skyGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 芝生
    const grassGradient = ctx.createLinearGradient(0, canvas.height * 0.6, 0, canvas.height);
    grassGradient.addColorStop(0, '#90A959');
    grassGradient.addColorStop(1, '#7D9F35');
    ctx.fillStyle = grassGradient;
    ctx.fillRect(0, canvas.height * 0.6, canvas.width, canvas.height * 0.4);

    // 木
    drawTree(200, 400, 100);
    drawTree(600, 450, 80);
}

// 木を描画
function drawTree(x, y, size) {
    // 木の幹
    ctx.fillStyle = '#8B4513';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - 20, y + size);
    ctx.lineTo(x + 20, y + size);
    ctx.closePath();
    ctx.fill();

    // 木の葉
    for (let i = 0; i < 5; i++) {
        addWatercolorEffect(
            x + (Math.random() - 0.5) * 40,
            y - i * 30,
            40,
            '#7D9F35'
        );
    }
}

// 犬を描画
function drawDog() {
    const x = canvas.width * 0.6;
    const y = canvas.height * 0.7;

    // 犬の体
    addWatercolorEffect(x, y, 50, '#E6B17A');
    
    // 犬の頭
    addWatercolorEffect(x + 40, y - 20, 30, '#E6B17A');
    
    // 犬の耳
    addWatercolorEffect(x + 50, y - 40, 15, '#D4A76A');
    addWatercolorEffect(x + 30, y - 40, 15, '#D4A76A');
    
    // 犬の尻尾
    ctx.beginPath();
    ctx.moveTo(x - 30, y);
    ctx.quadraticCurveTo(x - 50, y - 20, x - 40, y - 40);
    ctx.strokeStyle = '#E6B17A';
    ctx.lineWidth = 10;
    ctx.stroke();
}

// 花を描画
function drawFlowers() {
    const flowerColors = ['#FFB6C1', '#FFC0CB', '#FFDAB9'];
    
    for (let i = 0; i < 10; i++) {
        const x = Math.random() * canvas.width;
        const y = canvas.height * 0.6 + Math.random() * (canvas.height * 0.4);
        const color = flowerColors[Math.floor(Math.random() * flowerColors.length)];
        
        // 花びら
        for (let j = 0; j < 5; j++) {
            const angle = (j * Math.PI * 2) / 5;
            const petalX = x + Math.cos(angle) * 10;
            const petalY = y + Math.sin(angle) * 10;
            addWatercolorEffect(petalX, petalY, 8, color);
        }
        
        // 花の中心
        addWatercolorEffect(x, y, 5, '#FFD700');
    }
}

// ボールを描画
function drawBall() {
    const x = canvas.width * 0.5;
    const y = canvas.height * 0.7;
    
    // ボールの影
    addWatercolorEffect(x, y + 10, 20, 'rgba(0, 0, 0, 0.1)');
    
    // ボール
    addWatercolorEffect(x, y, 20, '#FF6B6B');
}

// メインの描画関数
function draw() {
    // 背景を描画
    drawBackground();
    
    // 花を描画
    drawFlowers();
    
    // ボールを描画
    drawBall();
    
    // 犬を描画
    drawDog();
}

// 描画を開始
draw();

// アニメーション効果を追加
function animate() {
    // キャンバスをクリア
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 再描画
    draw();
    
    // 次のフレームを要求
    requestAnimationFrame(animate);
}

// アニメーションを開始
animate(); 