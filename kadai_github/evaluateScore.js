/**
 * テストの点数に応じて評価を返す関数
 * @param {number} score - テストの点数
 * @returns {string} 評価（'A'、'B'、'C'、'不明'のいずれか）
 */
function evaluateScore(score) {
    // 数値でない場合は'不明'を返す
    if (typeof score !== 'number' || isNaN(score)) {
        return '不明';
    }

    // 点数に応じて評価を返す
    if (score >= 80) {
        return 'A';
    } else if (score >= 60) {
        return 'B';
    } else {
        return 'C';
    }
}

// 使用例
console.log(evaluateScore(85));  // 'A'
console.log(evaluateScore(70));  // 'B'
console.log(evaluateScore(45));  // 'C'
console.log(evaluateScore('90')); // '不明'
console.log(evaluateScore(null)); // '不明' 