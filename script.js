var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var body = document.getElementById("body");
var color1 = document.getElementById("firstcolor");
var color2 = document.getElementById("secondcolor");

function createListElement() {
    var div = document.createElement("div");
    var li = document.createElement("li");
    var delButton = document.createElement("button");
    div.classList.add("wrapper");
    ul.appendChild(div);
    div.append(li, delButton);
    li.classList.add("taskClass");
    li.appendChild(document.createTextNode(input.value));
    input.value = "";
    delButton.classList.add("delClass");
    delButton.innerHTML = 'Del';
}

function inputLength() {
    return input.value.length;
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function doneTask(task) {
    if (task.target.tagName === "LI") {
        task.target.classList.toggle("done");
    }
}

function deleteListElement(element) {
    if (element.target.className === "delClass") {
        element.target.parentElement.remove();
    }
}

function handleUlClick(element) {
    doneTask(element);
    deleteListElement(element);
}

ul.addEventListener("click", handleUlClick)
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

function changebg() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

color1.value = "#ffff00";
color2.value = "#ffa500";

color1.addEventListener("input", changebg);
color2.addEventListener("input", changebg);

alert("WELCOME!!!");

//apart from these the following functions were practiced in browser console directly.


// For adding two numbers after taking user input
// var first = prompt("Enter first number");
// var second = prompt("Enter second number");
// var sum = Number(first) + Number(second);
// alert(sum);

// array functions
// var list = ["tiger", "cat", "bear"];
// list = list.concat(["bee", "deer"]);
// console.log(list);
// console.log(list.shift());
// console.log(list.pop());
// console.log(list.push("lion"));
// console.log(list.sort());

//objects
// var user = {
//     name: "john",
//     age: 34,
//     hobby: "football"
// };
// user.gender = "male";

//function declaration
// function newfunction() {}
//var newfunction = function() {};
//var newfunction = function functionname() {};

//for loop
// var todos = [1, 2, 3, 4];
// for (var i = 0; i < todos.length; i++){
//     console.log(todos[i]);
// }

//while loop
// var counter = 0;
// while (counter < 10); {
//     console.log(counter + 1);
//     counter++;
// }

//do while loop
// var counter = 10;
// do {
//     counter++;
//     console.log(counter);
// } while (counter < 10);

//foreach loop
// var todos = [1, 2, 3, 4, 5];
// todos.foreach(function (i) { console.log(i); })

//map
// const array = [1, 2, 3, 4, 5];
// const maparray = array.map(num => num * 2);
// console.log(maparray);

//filter
// const filterarray = array.filter(num => num > 5);
// console.log(filterarray);

//reduce
// const reducearray = array.reduce((accumulator, num) => {
//     return accumulator + num;
// }, 5);
// console.log(reducearray);

//includes
// "hello".includes('o');
// const pets = ['cat', 'dog', 'bat'];
// pets.includes('dog');

//exponential operator
// 5**2 means 5 to the power 2 that is 25
// 5**3 means 5 to the power 3 that is 125

//padstart() and padend()
// 'turtle'.padStart(10);
// 'turtle'.padEnd(10);

//keys, values and entries
// let obj = {
//     username0: 'Santa',
//     username1: 'Rudolf',
//     username2: 'Mr. Grinch'
// }

// Object.keys(obj).forEach((key, index) => {
//     console.log(key, obj[key]);
// })

// Object.values(obj).forEach(value => {
//     console.log(value);
// })

// Object.entries(objct).forEach(value => {
//     console.log(value);
// })

//flat
// const array = [1, [2, 3], [4, 5]];
// array.flat();
// const entries = ['bob', 'sally', , , , , 'cindy'];
// entries.flat();

//flatmap()
// const names = ['bob', 'sally', 'cindy'];
// const namemap = names.flatMap(name => name + '1');

//trimstart() and trimend()
// var useremail = "             akfjsbf@gmail.com";
// useremail.trimStart();
// useremail = "dsgvngfngfn@gmail.com          ";
// useremail.trimEnd();

//fromentries
// var userprofiles = [['ctom', 23], ['dzland', 40], ['honza', 18]];
// Object.fromEntries(userprofiles);
// we get an object as an output from array

//for of loop and for in loop
// const basket = ['apple', 'orange', ' grapes'];
// for (item of basket) {
//     console.log(item);
// }
// const detailedbasket = {
//     apple: 5,
//     oranges: 7,
//     grapes: 100
// }
// for (item in detailedbasket) {
//     console.log(item);;
// }

//bigint
// var i = 2n;
// 5n - 3n;

//optional chaining operator(?)
// let trainer = {
//     pikachu = {
//         Species: "mouse",
//         height: 0.8,
//         weight: 40
//     }
// }
// let weight = trainer?.pikachu?.weight;

//nullish coalesching operator(??)
// let trainer = {
//     pikachu = {
//         Species: "mouse",
//         height: 0.8,
//         weight: 40
//     }
// }
// let power = trainer?.pikachu?.power ?? 'no power'

//replaceAll()
// const str = "ztm is the best of the best";
// str.replaceAll('best', 'worst');

//at()
// const arr = [100, 200, 300, 400, 500, 600, 700];
// arr.at(0);  first element
// arr.at(2);  second element
// arr.at(-1);  last element
// arr.at(-3);  third last element