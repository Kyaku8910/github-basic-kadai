/**
 * エラトステネスの篩（ふるい）アルゴリズムを使用して、
 * 1からmaxNumまでの範囲に含まれる素数を求める関数
 * @param {number} maxNum - 探索する最大値
 * @returns {number[]} 見つかった素数の配列
 */
function findPrimes(maxNum) {
  // 0からmaxNumまでの各数が素数かどうかを管理する配列を作成
  // 初期値は全てtrue（素数と仮定）
  const isPrime = Array(maxNum + 1).fill(true);
  // 0と1は素数ではないので、falseに設定
  isPrime[0] = isPrime[1] = false;

  // 2からmaxNumの平方根までの数について処理
  // 平方根までで十分な理由：ある数の約数は必ず平方根以下と平方根以上に分かれるため
  for (let i = 2; i <= Math.sqrt(maxNum); i++) {
    // iが素数（isPrime[i]がtrue）の場合のみ処理
    if (isPrime[i]) {
      // iの倍数を全て素数ではないとマーク
      // i*iから始める理由：2*i, 3*i, ... (i-1)*i は既に小さい素数の倍数として処理済み
      for (let j = i * i; j <= maxNum; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // 素数と判定された数（isPrime[i]がtrue）を配列に格納
  const primes = [];
  for (let i = 2; i <= maxNum; i++) {
    if (isPrime[i]) {
      primes.push(i);
    }
  }

  return primes;
}

// 1から100までの素数を求めて出力
const primes = findPrimes(100);
console.log(primes); 