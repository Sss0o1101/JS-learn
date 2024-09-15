/*
配列--------------------------------------------
*/

const scores = [10, 20, 30, 40, 50];

console.log(scores[0]); //10
console.log(scores[1]); //20
console.log(scores[2]); //30
console.log(scores[3]); //40
console.log(scores[4]); //50
console.log(scores.length); //5 (要素数)

scores[1] = 11;  //値の変更
console.log(scores); //[10, 11, 30, 40, 50]

scores.push(60); //末尾に要素を追加
scores.pop(); //末尾の要素を削除
scores.unshift(70); //先頭に要素を追加
scores.shift(); //先頭の要素を削除



/*
配列とforの組み合わせ--------------------------------------------
*/

const scores = [10, 20, 30, 40, 50];

for (let i = 0; i <= scores.length; i++) {
    console.log(scores[i]);
}

/*
forEach()の動作--------------------------------------------
*/

const scores = [10, 20, 30, 40, 50];

scores.forEach((score) => {
    console.log(score);
});

const scores = [10, 20, 30, 40, 50];

/*
forEach()で配列を処理--------------------------------------------
*/

const scores = [10, 20, 30, 40, 50];

scores.forEach((score, index) => {
    // console.log(score);
    console.log(`${index}: ${score}`);
});
//0: 10
//1: 20
//2: 30
//3: 40
//4: 50

// このように、配列と反復処理を組み合わせるには forEach() と for() を使う事ができます。

/*
配列の値を集計(点数の合計と平均など)--------------------------------------------
*/

const scores = [10, 20, 30, 40, 50];

let sum = 0;

scores.forEach((score) => {
    // sum = sum + score;
    sum += score;
    console.log(`${index}: ${score}`);
});

console.log(sum); //150
console.log(sum / scores.length); //30
console.log(`Sum: ${sum}`);//Sum: 150
console.log(`Average: ${sum / scores.length}`); //Average: 30




/*
オブジェクトを作成してコンソールで表示。--------------------------------------------
*/

const scores = {math: 80, english: 90};

console.log(scores);
