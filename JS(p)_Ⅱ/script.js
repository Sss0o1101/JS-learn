// (P) Ⅱ

/*
while文 --------------------------------------------------------------------------------------------
*/
    //100までの数字が順に出力される

    let number = 1;

    while (number <= 100) {
        console.log(number);
       number += 1;
    }

/*
for文 --------------------------------------------------------------------------------------------
*/
    // for文を用いて、1から100までの数字を出力してください

    for (let number = 1; number <= 100; number++) {
         console.log(number);
    }

/*
for文 if else 1 --------------------------------------------------------------------------------------------
*/
    //1から100の数字を出力してください。ただし、3の倍数の時は「3の倍数です」と出力してください。

    for (let number =1; number <=100; number++) {
        if (number %3 === 0) {
            console.log("3の倍数です");
        } else {
            console.log(number);
        }
    }

    // 1から100までの数字を出力してください。ただし、3の倍数のときは「3の倍数です」、5の倍数のときは「5の倍数です」、3と5の倍数のときは「3と5の倍数です」と出力してください。

    for (let number = 1; number <= 100; number++) {
        if (number % 3 === 0 && number % 5 === 0) {
            console.log("3と5の倍数です");
        } else if (number % 3 === 0) {
            console.log("3の倍数です");
        } else if (number % 5 === 0) {
            console.log("5の倍数です");
        } else {
            console.log(number);
        }
    }

/*
配列 --------------------------------------------------------------------------------------------
*/
    const animals = ["dog","cat","sheep"];

    console.log(animals); // ["dog","cat","sheep"]

/*
配列 インデックス番号 --------------------------------------------------------------------------------------------
*/
    const animal = ["dog","cat","sheep"];

    console.log(animal[0]); // dog
    console.log(animal[1]); // cat
    console.log(animal[2]); // sheep

    // 配列のインデックス番号を用いて、"dog"を出力してください

    console.log(animal[0]); // dog

/*
配列  配列の要素を更新 --------------------------------------------------------------------------------------------
*/
    const Animals = ["dog","cat","sheep"];

    // 配列のインデックス番号を用いて、"dog"を"monkey"に更新してください

    Animals[0] = "monkey";
    console.log(Animals); // ["monkey","cat","sheep"]
    console.log(Animals[0]); // monkey

/*
配列  配列とfor文 --------------------------------------------------------------------------------------------
*/
    const Animal = ["dog", "cat", "sheep"];

    // for文を用いて、配列の値を順にコンソールに出力してください
    for (let i = 0; i < 3; i++) {
        console.log(Animal[i]); // dog cat sheep
    }

/*
配列  length --------------------------------------------------------------------------------------------
*/
    const aNimals = ["dog", "cat", "sheep", "rabbit", "monkey", "tiger", "bear", "elephant"];

    // lengthを用いて配列の要素の数を出力してください
    console.log(aNimals.length); // 8

    // lengthを用いて条件式を書き換えてください
    for (let i = 0; i < aNimals.length; i++) {
        console.log(aNimals[i]); // dog cat sheep rabbit monkey tiger bear elephant
    }

/*
配列  配列とオブジェクト--------------------------------------------------------------------------------------------
*/
    const item = {weapon: "剣", price: 500};

    console.log(item); // {weapon: "剣", price: 500}

    // オブジェクトの武器の値を出力してください
    console.log(item.weapon); // 剣

    // オブジェクトの武器の値を"ナイフ"に更新してください
    item.weapon = "ナイフ";
    console.log(item.weapon); // ナイフ

/*
配列  オブジェクトを要素に持つ配列 --------------------------------------------------------------------------------------------
*/
    const items = [
        {weapon: "剣", price: 500},
        {weapon: "ナイフ", price: 300},
        {weapon: "ハンマー", price: 1000},
    ];

    console.log(items); // [{weapon: "剣", price: 500}, {weapon: "ナイフ", price: 300}, {weapon: "ハンマー", price: 1000}]

    // 配列のインデックス番号を用いて、"剣"を出力してください
    console.log(items[0]); // {weapon: "剣", price: 500}
    console.log(items[0].weapon); // 剣
    console.log(items[1].price); // 300

/*
配列  配列{オブジェクト}と繰り返し処理 --------------------------------------------------------------------------------------------
*/
    const Item = [
        {weapon: "剣", price: 500},
        {weapon: "ナイフ", price: 300},
        {weapon: "ハンマー", price: 1000},
    ];

    // for文を用いて、配列の値を順にコンソールに出力してください
    for (let i = 0; i < Item.length; i++) {
        console.log(Item[i]); // {weapon: "剣", price: 500} {weapon: "ナイフ", price: 300} {weapon: "ハンマー", price: 1000}
    }

    // for文を用いて、配列の値を順にコンソールに出力してください
    for (let i = 0; i < Item.length; i++) {
        console.log(Item[i].weapon); // 剣 ナイフ ハンマー
    }

    // for文を用いて、配列の値を順にコンソールに出力してください
    for (let i = 0; i < Item.length; i++) {
        console.log(Item[i].price); // 500 300 1000
    }

/*
配列  配列{オブジェクト}と繰り返し処理 2 --------------------------------------------------------------------------------------------
*/
    const Items = [
        {weapon: "剣", price: 500},
        {weapon: "ナイフ", price: 300},
        {weapon: "ハンマー", price: 1000},
    ];

    // for文を用いて、配列の値を順にコンソールに出力してください
    for (let i = 0; i < Items.length; i++) {
        console.log(Items[i]); // {weapon: "剣", price: 500} {weapon: "ナイフ", price: 300} {weapon: "ハンマー", price: 1000}
    }

    // for文を用いて、配列の値を順にコンソールに出力してください
    for (let i = 0; i < Items.length; i++) {
        console.log(Items[i].weapon); // 剣 ナイフ ハンマー
    }

    // for文を用いて、配列の値を順にコンソールに出力してください
    for (let i = 0; i < Items.length; i++) {
        console.log(Items[i].price); // 500 300 1000
    }
