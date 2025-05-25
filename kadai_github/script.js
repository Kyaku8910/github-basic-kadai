// 曜日の定数定義
const WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const WEEKENDS = ['Saturday', 'Sunday'];

// 曜日チェック関数
const getDayMessage = (day) => {
    if (WEEKDAYS.includes(day)) {
        return '今日は平日です。仕事を頑張りましょう！';
    }
    
    if (WEEKENDS.includes(day)) {
        return '今日は休日です。ゆっくり休みましょう！';
    }
    
    return '正しい曜日を入力してください。';
};

// 使用例
const day = 'Sunday';
console.log(getDayMessage(day)); 