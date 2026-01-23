//Q1.
//HTML Q1 の id="message" の中に
// JSを使って「完了しました」と表示させてください


const msg = document.querySelector(".msg-area");
msg.innerHTML = '完了しました';


//Q2.
//HTML Q2 のbuttonをクリックした時
// 「赤になるボタン」を押したとき#cc3300
// 「青になるボタン」を押したとき#0099cc
//「元に戻るボタン」を押したとき最初の色
//　にそれぞれ切り替わる様にJSを記述してください

const redBtn = document.getElementById("red");
const blueBtn = document.getElementById("blue");
const resetBtn = document.getElementById("reset");
const bgArea = document.getElementById("colorArea");

redBtn.addEventListener('click', ()=> {
    bgArea.style.backgroundColor = "#cc3300";
});

blueBtn.addEventListener('click', ()=> {
    bgArea.style.backgroundColor = "#0099cc";
});

resetBtn.addEventListener('click', ()=> {
    bgArea.style.backgroundColor = "#ccc";
});


//Q3.
//HTML Q3 の ul要素の子要素へ　liを3つ追加
//liには「卵」「砂糖」「醤油」と表示させてください

const material = ["卵","砂糖","醤油"];
const materialList = document.getElementById("material-list");

material.forEach((item)=>{
    const li = document.createElement("li");
    li.innerText = item;
    materialList.appendChild(li);
});


// Q4.
//categoryが"トップス"の商品だけを抜き出して
//nameを ulの中に li として表示させてください

const  chairs= [
    { id: 1, name: "LC2", category: "イス", price: 605000 },
    { id: 2, name: "マシュマロソファ", category: "ソファ", price: 1199000 },
    { id: 3, name: "ラ・シェーズ", category: "イス", price: 1161600 },
    { id: 4, name: "ボールチェア", category: "イス", price: 1225400 }
];

const result = chairs.filter((item)=>{
    return item.category === "イス";
});
const chairList = document.querySelector(".chair-list");

result.forEach(item => {
    const liChair = document.createElement("li");
    liChair.innerText = item.name;
    chairList.appendChild(liChair);

});



//Q5.
// スコアが80点以上の生徒だけ抜き出して
// HTML 05 のclass="over"内にカンマ区切りで表示させてください
const students = [
    { name: "早川", score: 85 },
    { name: "吉田", score: 72 },
    { name: "姫野", score: 90 },
    { name: "東山", score: 65 }
];

const scoreOver = students.filter(student => student.score >= 80);

const studentOverList = document.getElementById("overSL");

scoreOver.forEach((student)=>{
        const innerList = document.createElement("li");
        innerList.innerText = student.name;
        studentOverList.appendChild(innerList);
    });



//Q6.
// HTML Q6　の見出し順で、以下配列をテーブルで表示してください
const Jsweets = [
    { id: 1, name: "豆大福", price: 200 },
    { id: 2, name: "桜餅", price: 280 },
    { id: 3, name: "おはぎ", price: 250 }
];

const tableBody = document.getElementById("japaneseSweet");
Jsweets.forEach((Jsweet) => {
    
    const tr = document.createElement("tr");
    tableBody.appendChild(tr);
    tr.innerHTML = `
    <td>${Jsweet.id}</td><td>${Jsweet.name}</td><td>${Jsweet.price}円</td>
    `;
    
});


