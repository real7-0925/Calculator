// 計算click次數 且初始顯示0
var isClick = 0
// 將算式暫存為結果做準備
var everyClick = ""
// 按鍵的功能
function add(clickNum) {
// 如果是第一次按按鍵則清空原本的0
if (isClick == 0) {
document.getElementsByClassName("result")[0].value = ''
}
// click次數累加
isClick++;
// 如果按鍵class是數字 則顯示於結果列
var btn = clickNum.getAttribute("class");
if (btn == "number_0" || btn == "number") {
document.getElementsByClassName("result")[0].value += clickNum.value;
}
// 計算符號除了％外 輸入時要抓畫面的數值與計算符號 一起記錄到everyclick 且畫面清空
if (btn == "formula" && clickNum.value != "%") {
everyClick = everyClick + document.getElementsByClassName("result")[0].value + clickNum.value;
document.getElementsByClassName("result")[0].value = ""
// alert(everyClick)
}
// 輸入％時 將畫面數字/100
if (clickNum.value == "%"){
document.getElementsByClassName("result")[0].value = Math.round (document.getElementsByClassName("result")[0].value)/100;
}
}
// 點選等於的輸入計算結果 eval計算everyclick中的資料
function eva() {
everyClick = everyClick + document.getElementsByClassName("result")[0].value;
document.getElementsByClassName("result")[0].value = eval(everyClick);
isClick = 0;
everyClick = "";
// alert(everyClick)
}
// 點選AC清除輸入框 且將everyclick清空計算
function clearNum() {
document.getElementsByClassName("result")[0].value = "";
everyClick = "";
}