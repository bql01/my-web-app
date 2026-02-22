// 1. 要素の取得
const drawBtn = document.getElementById('draw-btn');
const resultDisplay = document.getElementById('result-display');
const fortuneImage = document.getElementById('fortune-image');
const omikujiBox = document.getElementById('omikuji-box');

// 2. おみくじデータの準備
const fortunes = [
    { result: '大吉', image: 'images/daikichi.png' },
    { result: '中吉', image: 'images/daikichi.png' },
    { result: '凶', image: 'images/kyo.png' }
];

// 3. クリックイベント
drawBtn.addEventListener('click', () => {
    // 演出開始：ボタンを無効化し、筒を揺らす
    drawBtn.disabled = true;
    omikujiBox.style.display = 'block';
    omikujiBox.classList.add('shaking');

    fortuneImage.style.display = 'none'; // 前の結果を隠す
    resultDisplay.textContent = '振っています...';

    // 1秒後に結果を表示
    setTimeout(() => {
        // 揺れを止める
        omikujiBox.classList.remove('shaking');
        omikujiBox.style.display = 'none'; // 筒を隠す（オプション）

        // ランダム抽選
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        const selected = fortunes[randomIndex];

        // 結果を反映
        resultDisplay.textContent = selected.result;
        fortuneImage.src = selected.image;
        fortuneImage.style.display = 'block';

        // アニメーション適用
        fortuneImage.classList.remove('fade-in');
        void fortuneImage.offsetWidth; // リフロー（再再生のためのまじない）
        fortuneImage.classList.add('fade-in');

        // ボタンを戻す
        drawBtn.disabled = false;
    }, 1000);
});