// var tu = {
//     firstName: "Tu",
//     lastName: "Le",
//     eyeColor: "black"
// }

// alert(tu.firstName + " " + tu.lastName);

var d = new Date();
var t = "Good evening!";
if (d.getHours() < 18){
    t = "Good day!";
}
alert(t); 

function sum(a, b) {
    document.getElementById("answer").innerHTML = a+b;
}

function light(a) {
    if (a == 0) {
        document.getElementById("article").style.backgroundColor='white';
    }
    else {
        document.getElementById("article").style.backgroundColor='blanchedalmond';
    }
}

function time() {
    var d = new Date();
    document.getElementById("time").innerHTML = d.toDateString();
}

function concat() {
    var text1 = "Hello";
    var text2 = "World";
    var text3 = text1.concat(" ", text2);
    document.getElementById("concat").innerHTML = text3;
}

var inf = 2;
var txt = "";
while (inf != Infinity) {
    inf *= inf;
    txt = txt + inf + "<br>"; 
}
document.getElementById("infinity").innerHTML = txt;

var arr = ["Creat array", "use for", "ul"];
text4 = "<ul>";
for (var i=0; i<arr.length; i++){
    text4 += "<li>" + arr[i] + "</li>";
}
text4 += "</ul>";
document.getElementById("list").innerHTML = text4;

var arr2 = ["Name", "Age"];
document.getElementById("push").innerHTML = arr2;
function push(){
    arr2.push("Address");
    document.getElementById("push").innerHTML = arr2;
}
function pop(){
    arr2.pop();
    document.getElementById("push").innerHTML = arr2;
}
function shift(){
    arr2.shift();
    document.getElementById("push").innerHTML = arr2;
}
function unshift(){
    arr2.unshift("Number");
    document.getElementById("push").innerHTML = arr2;
}
function splice(){
    arr2.splice(2, 0, "splice1", "splice2");
    document.getElementById("push").innerHTML = arr2;
}
function sort(){
    arr2.sort();
    document.getElementById("push").innerHTML = arr2;
}
function reverse(){
    arr2.reverse();
    document.getElementById("push").innerHTML = arr2;
}

var arr3 = [4, 1, 19, 100, 50, 25];
document.getElementById("sort").innerHTML = arr3;
function sortNumber(){
    arr3.sort(function(a, b) {return a - b});
    document.getElementById("sort").innerHTML = arr3;
}
function reverseNumber(){
    arr3.sort(function(a, b){return b - a});
    document.getElementById("sort").innerHTML = arr3;
}
function random(){
    arr3.sort(function(a, b){return 0.5 - Math.random()});
    document.getElementById("sort").innerHTML = arr3;
}
// function highest(arr3){
//     return Math.max.apply(null, arr3);
// }
function lowest(arr3){
    return Math.min.apply(null, arr3);
}
function highest(arr3){
    var max = -Infinity;
    var i = 0;
    var len = arr3.length;
    for (i; i < len; i++){
        if (max < arr3[i]){
            max = arr3[i];
        }
    }
    return max;
}
document.getElementById("highest").innerHTML = highest(arr3);
document.getElementById("lowest").innerHTML = lowest(arr3);

var beer = [
    {type: "Tiger", year: "1990"},
    {type: "Huda", year: "1930"},
    {type: "Larue", year: "1960"}
];
displayBeer();
function displayBeer(){
    document.getElementById("sortArray").innerHTML =
    beer[0].type + ": " + beer[0].year + "<br>" +
    beer[1].type + ": " + beer[1].year + "<br>" +
    beer[2].type + ": " + beer[2].year;
}
function sortYear(){
    beer.sort(function(a, b){return a.year - b.year});
    displayBeer();
}
function sortType(){
    beer.sort(function(a, b){
        var x = a.type.toLocaleLowerCase();
        var y = b.type.toLocaleLowerCase();
        if (x < y) return -1;
        if (x > y) return 1;
        return 0;
    });
    displayBeer();
}

var arr4 = [3, 51, 9, 34, 9, 25];
document.getElementById("arr4").innerHTML = arr4;

var txt2 = "";
function forEach(value){
    txt2 = txt2 + value + "<br>";
}
arr4.forEach(forEach);
document.getElementById("forEach").innerHTML = txt2;
function map(value){
    return value*2;
}
var arr5 = arr4.map(map);
document.getElementById("map").innerHTML = arr5;
function filter(value){
    return value > 20;
}
var arr6 = arr4.filter(filter);
document.getElementById("filter").innerHTML = arr6;
function reduce(total, value){
    return total + value;
}
var temp = arr4.reduce(reduce);
document.getElementById("reduce").innerHTML = temp;
function every(total, value){
    return value > 20;
}
var temp1 = arr4.every(every);
document.getElementById("every").innerHTML = temp1;
function some(value){
    return value > 20;
}
var temp2 = arr4.some(some);
document.getElementById("some").innerHTML = temp2;
var temp3 = arr4.indexOf(9);
document.getElementById("indexOf").innerHTML = temp3;
var temp4 = arr4.lastIndexOf(9);
document.getElementById("lastIndexOf").innerHTML = temp4;
function find(value){
    return value > 20;
}
var temp5 = arr4.find(find);
document.getElementById("find").innerHTML = temp5;
function findIndex(value){
    return value > 20;
}
var temp6 = arr4.findIndex(findIndex);
document.getElementById("findIndex").innerHTML = temp6;

function date(){
    var toDay = new Date();
    var someDay = new Date();
    someDay.setFullYear(2020, 1, 1);
    if (toDay < someDay){
        document.getElementById("date").innerHTML = "bây giờ chưa tới năm 2020";
    }
    else{
        document.getElementById("date").innerHTML = "qua khỏi năm 2020";
    }
}

var a = 4.6;
document.getElementById("math").innerHTML = a;
function round(){
    a = Math.round(a);
    document.getElementById("math").innerHTML = a;
}
function pow(){
    a = Math.pow(a, 2);
    document.getElementById("math").innerHTML = a;
}
function sqrt(){
    a = Math.sqrt(a);
    document.getElementById("math").innerHTML = a;
}
function ceil(){
    a = Math.ceil(a);
    document.getElementById("math").innerHTML = a;
}
function floor(){
    a = Math.floor(a);
    document.getElementById("math").innerHTML = a;
}
function returna(){
    document.getElementById("math").innerHTML = 4.6;
}

var b = Math.random();
document.getElementById("random").innerHTML = b;
function random(){
    document.getElementById("random").innerHTML = Math.random();
}
document.getElementById("random10").innerHTML = Math.floor(Math.random() * 10);
function random10(){
    document.getElementById("random10").innerHTML = Math.floor(Math.random() * 10);
} 

function age(){
    var age;
    var voteAge;
    age = document.getElementById("age").value;
    voteAge = (age < 18) ? "Too young":"Old enough";
    document.getElementById("textAge").innerHTML = voteAge;
}

var dayCase;
switch (new Date().getDay()){
    case 0:
        dayCase = "Sunday";
        break;
    case 1:
        dayCase = "Monday";
        break;
    case 2:
        dayCase = "TuesDay";
        break;
    case 3:
        dayCase = "Wednesday";
        break;
    case 4:
        dayCase = "Thursday";
        break;
    case 5:
        dayCase = "Friday";
        break;
    case 6:
        dayCase = "Saturday";
}
document.getElementById("dayCase").innerHTML = "Today is" + dayCase;
var Weekend;
switch (new Date().getDay()){
    case 0:
    case 6:
        Weekend = "Today is weekend :)";
        break;
    default:
        Weekend = "Looking forward to the Weekend :(";
}
document.getElementById("default").innerHTML = Weekend;

var person1 = {name1: "tu", age1: "21"};
var person2 = ["tu", "beo", "tym"];
var x;
var txt3 = "";
for (x in person1){
    txt3 += person1[x] + " ";
}
document.getElementById("forIn").innerHTML = txt3;
var y;
var txt4 = "";
for (y of person2){
    txt4 += y + " ";
}
document.getElementById("forOf").innerHTML = txt4;

var temp7 = "I go to school";
document.getElementById("text").innerHTML = temp7;
function searchTxt(){
    var temp8 = document.getElementById("search1").value;
    var temp9 = temp7.search(temp8);
    document.getElementById("search2").innerHTML = temp9;
    try{
        if (temp9 < 0) throw "element is not in the string";
    }
    catch(err){
        document.getElementById("search2").innerHTML = err;
    }
}


