alert("Hello World");

console.log(100);
console.log(-10);
console.log(2.5);

console.log(1.2e4);  // 1.2に10の4条 = 12000
console.log(1.2e-4);  // 1.2に10の-4条 = 0.00012

/*
演算子--------------------------------------------
*/

console.log(10 + 3);
console.log(10 - 3); // 7
console.log(10 * 3); // 30
console.log(10 ** 3); // 1000
console.log(10 / 3); // 3.3333....
console.log(10 % 3); // 1
console.log(10 + 2 * 3); // 16
console.log((10 + 2) * 3); // 36

/*
定数--------------------------------------------
*/

console.log(150 * 120 * 1.1);
console.log(150 * 130 * 1.1);
console.log(150 * 140 * 1.1);

// 定数
const price = 150;
const rate = 1.1;

console.log(price * 120 * rate);
console.log(price * 130 * rate);
console.log(price * 140 * rate);



/*
変数--------------------------------------------
*/

// 変数
let price;
// 定数
const rate = 1.1;

price = 150;
console.log(price * 120 * rate);
console.log(price * 130 * rate);
console.log(price * 140 * rate);

price = 151;
console.log(price * 120 * rate);
console.log(price * 130 * rate);
console.log(price * 140 * rate);

price = 151;
price = price + 1;
price += 1;
price *= 1.5;
price++;
console.log(price * 120 * rate);
console.log(price * 130 * rate);
console.log(price * 140 * rate);


/*
文字列--------------------------------------------
*/

console.log('It is a pen.');
console.log('It\'s a pen.');
console.log("It's a pen.");
console.log("It's \na \npen."); // 　\nは改行　\は「Option」キーを押しながら「￥」キーを押す。


/*
文字列の操作--------------------------------------------
*/

// 「　My name is Taro Yamada, call me Taro!　」 のケース

const fname = 'Taro';
const lname = 'Yamada';

console.log('My name is' + fname  + ' ' + lname + ', call me'  + fname )  //これでも良いが、テンプレートリテラルをつかうべきである。
console.log(`My name is ${fname} ${lname}, call me ${fname}`)  //テンプレートリテラル (` を付け　${})


