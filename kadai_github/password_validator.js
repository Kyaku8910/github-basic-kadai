// パスワードのセキュリティチェックを行う関数
function validatePassword(password) {
    // エラーメッセージを格納する配列
    const errors = [];

    // 長さのチェック（8文字以上）
    if (password.length < 8) {
        errors.push("パスワードは8文字以上である必要があります");
    }

    // 英小文字のチェック
    if (!/[a-z]/.test(password)) {
        errors.push("英小文字を1文字以上含める必要があります");
    }

    // 英大文字のチェック
    if (!/[A-Z]/.test(password)) {
        errors.push("英大文字を1文字以上含める必要があります");
    }

    // 数字のチェック
    if (!/[0-9]/.test(password)) {
        errors.push("数字を1文字以上含める必要があります");
    }

    // 特殊文字のチェック（オプション）
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        errors.push("特殊文字を1文字以上含める必要があります");
    }

    // 連続した文字のチェック（3文字以上）
    if (/(.)\1{2,}/.test(password)) {
        errors.push("同じ文字が3回以上連続して使用されています");
    }

    // 結果を返す
    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

// テスト用の関数
function testPasswordValidation() {
    const testCases = [
        "password",           // 弱いパスワード
        "Password123",        // 特殊文字なし
        "Pass123!",          // 妥当なパスワード
        "abc",               // 短すぎる
        "12345678",          // 数字のみ
        "abcdefgh",          // 小文字のみ
        "ABCDEFGH",          // 大文字のみ
        "Pass123!",          // 妥当なパスワード
        "aaa12345",          // 連続した文字
    ];

    testCases.forEach(password => {
        const result = validatePassword(password);
        console.log(`パスワード: ${password}`);
        console.log(`妥当性: ${result.isValid ? "OK" : "NG"}`);
        if (!result.isValid) {
            console.log("エラー:");
            result.errors.forEach(error => console.log(`- ${error}`));
        }
        console.log("-------------------");
    });
}

// テストの実行
testPasswordValidation(); 