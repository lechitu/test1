var tu = {
    firstName: "Tu",
    lastName: "Le",
    eyeColor: "black"
}

alert(tu.firstName + " " + tu.lastName);

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
    document.getElementById("time").innerHTML = Date();
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

var arr4 = [3, 51, 34, 9, 25];
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
