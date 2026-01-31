//Q1.
//HTML Q1 の id="message" の中に
// JSを使って「完了しました」と表示させてください




//Q2.
//1.「指定した色に変更される」changiColor関数を定義
// 引数：color
// 戻り値：なし

//2.背景色を「デフォルトの色」にするための変数defaultColorを定義

//3.HTML Q2 のbuttonをクリックした時
// 「赤になるボタン」を押したとき#cc3300
// 「青になるボタン」を押したとき#0099cc
//「元に戻るボタン」を押したとき「デフォルトの色」
//　にそれぞれ切り替わる様にJSを記述してください



//Q3.
//HTML Q3 の ul要素の子要素へ　liを繰り返し処理で3つ追加
//liにはそれぞれ「卵」「砂糖」「醤油」と表示させてください



// Q4.
//配列chairs の category が"イス"の商品だけを抜き出して
//その商品のnameを ulの中に li として表示させてください
//liはjsで繰り返し処理を用いて追加してください

const chairs = [
    { id: 1, name: "LC2", category: "イス", price: 605000 },
    { id: 2, name: "マシュマロソファ", category: "ソファ", price: 1199000 },
    { id: 3, name: "ラ・シェーズ", category: "イス", price: 1161600 },
    { id: 4, name: "ボールチェア", category: "イス", price: 1225400 }
];



//Q5.
// スコアが80点以上の生徒だけ抜き出して
// HTML 05 のclass="over"内にリストで表示させてください
// liはjsで繰り返し処理を用いて追加してください

const students = [
    { name: "早川", score: 85 },
    { name: "吉田", score: 72 },
    { name: "姫野", score: 90 },
    { name: "東山", score: 65 }
];


//Q6.
// HTML Q6　見出し（th)の順番で、以下配列をテーブルにて表示してください
//テーブルはjsで繰り返し処理を用いて追加してください

const Jsweets = [
    { id: 1, name: "豆大福", price: 200 },
    { id: 2, name: "桜餅", price: 280 },
    { id: 3, name: "おはぎ", price: 250 }
];


// Q7.
//2倍した結果を HTMLのclass="double-result" に表示する
// showDouble関数を作成してください
// 引数:num
// 戻り値：なし
// 作った関数には25を渡してください



// Q8.
// selectで選択された値を取得して class="selected" に表示させてください




// Q9.
// 1.生年月日（文字列）birthdayを引数として受け取り現在の年齢を算出する関数calculateAgeを定義
// 引数：birthday
// 戻り値:age

// 2.関数を実行して返ってきた年齢を class="age"に表示してください

const birthday = "1995-05-16";

//年齢を算出する関数を定義





// Q10.
/*
1. animals配列を使って、全ての動物を<ul class="animal-list"></ul>内にリストで表示する
renderAnimals関数を定義してください。
引数: animals
戻り値: なし
※表示例はHTMLファイルのコメントアウトを参照

2. チェックボックスにチェックが入っている場合、weight が500未満の生き物だけが表示されるようにしてください。
チェックが外れたら、再度全ての生き物が表示されるようにしてください
*/

const animals = [
    { name: "シャチ", weight: 3000, live: "知床半島" },
    { name: "イルカ", weight: 150, live: "熊本天草" },
    { name: "クジラ", weight: 25000, live: "小笠原諸島" },
    { name: "スナメリ", weight: 40, live: "瀬戸内海" }
];

// 要素を取得


// 1.全てを表示する関数を定義


//2.チェックボックスにチェックが入っているとき、weightが500未満の生き物だけが表示されるイベントを記述
