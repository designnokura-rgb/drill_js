//Q1.
//HTML Q1 の id="message" の中に
// JSを使って「完了しました」と表示させてください



//Q2.
//HTML Q2 のbuttonをクリックした時
// 「赤になるボタン」を押したとき#cc3300
// 「青になるボタン」を押したとき#0099cc
//「元に戻るボタン」を押したとき最初の色
//　にそれぞれ切り替わる様にJSを記述してください




//Q3.
//HTML Q3 の ul要素の子要素へ　liを3つ追加
//liには「卵」「砂糖」「醤油」と表示させてください

const material = ["卵","砂糖","醤油"];


// Q4.
//categoryが"トップス"の商品だけを抜き出して
//nameを ulの中に li として表示させてください

const  chairs= [
    { id: 1, name: "LC2", category: "イス", price: 605000 },
    { id: 2, name: "マシュマロソファ", category: "ソファ", price: 1199000 },
    { id: 3, name: "ラ・シェーズ", category: "イス", price: 1161600 },
    { id: 4, name: "ボールチェア", category: "イス", price: 1225400 }
];



//Q5.
// スコアが80点以上の生徒だけ抜き出して
// HTML 05 のclass="over"内にカンマ区切りで表示させてください
const students = [
    { name: "早川", score: 85 },
    { name: "吉田", score: 72 },
    { name: "姫野", score: 90 },
    { name: "東山", score: 65 }
];



//Q6.
// HTML Q6　の見出し順で、以下配列をテーブルで表示してください
const Jsweets = [
    { id: 1, name: "豆大福", price: 200 },
    { id: 2, name: "桜餅", price: 280 },
    { id: 3, name: "おはぎ", price: 250 }
];



// Q7.
//2倍した結果を HTMLのclass="double-result" に表示する関数を作成してください
//作った関数には25を渡してください




// Q8.
// selectで選択された値を取得して class="selected" に表示させてください



// Q9.
// 生年月日（文字列）birthdayを引数として受け取り現在の年齢を算出してください
// 帰ってきた年齢を class="age"に表示してください

//Dateが認識できる書き方
const birthday = "1995-05-16";
        



// Q10.
// チェックボックスをクリックしたとき
// weight が500未満の生き物だけを
// ul に li として表示させてください
// チェックが外れた場合は、すべての生き物を表示してください

const animals = [
    { name: "シャチ", weight: 3000 ,live: "知床半島"},
    { name: "イルカ", weight: 150 ,live: "熊本天草"},
    { name: "クジラ", weight: 25000 ,live: "小笠原諸島"},
    { name: "スナメリ", weight: 40 ,live: "瀬戸内海"}
];

