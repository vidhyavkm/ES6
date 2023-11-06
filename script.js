//hoisting:

//let /const
// var a;
// console.log(a);

// b;
// console.log(b);

// c=10;
// console.log(c);

// const d;
// console.log(d);

//arrow functions:

// let val = (u,v) => u+v
// console.log(val(3,2));

// let result = (i,j) => {
//     let res = 10;
//     let total = res+i+j
//     return total;
// }
// console.log(result(10,10));

//spread and rest
// syntax: (...)

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];

//[1,2,3,4,5,6]

// var r = [...arr1,...arr2];
// console.log(r);

// var arr3 = [10,20,30];
// var arr4 = [40,...arr3,60];
// console.log(arr4);

// function add(b,...args){
//     console.log(a,b)
//     var sum = 0;
//     sum = a+b;
//     console.log(args)// gives an array
// }
// add(3,4,5,6,7,8,9);

let obj = {
    name: "guvi",
    age: 13
}
console.log(obj);

// const obj2 = obj;

const obj2 ={...obj};

console.log(obj2);

//for of / for in/ for each

//for in => objects

let obj1 = {
    name: "guvi",
    age: 13
}

for (var key in obj)
console.log(key);

console.log(obj1.name,obj1.age);

//for of => arrays

var cars = ["BMW","volvo","Mini"];

// for (var index of cars)
// console.log(index);
// console.log(cars[index])

for (var key in cars)
// console.log(key);
console.log(cars[key]);

//foreach => arrays

let arr = [1,2,3,4,5];

arr.forEach((elem)=> console.log(elem*2));

//set

const abc = [1,2,2,3,6,4,1,5,6];

var array = [...new Set(abc)];

console.log(array);

//destructuring:

let arra = ["hi","hello","guvi"]// traditional method

console.log(arra[0]);

let [fname, lname, mname] = arr// destructing

console.log(fname);

//obj des

// let obj5 = {
//     name: "guvi",
//     age: 13
// }
// console.log(obj5.name);

// let {name1,age} = obj5

// console.log(name1);

//shorthand:

//normal

// let obj4 = {
//     name: "guvi",
//     age: 13
// }
// console.log(obj4);


//without shorthand:

let name = "guvi"
let place = "chennai"

const user = {
    name:name1,
    place: place
}
console.log(user);


let name1 = "guvi1"
let place1 = "chennai1"

const user1 = {
    name1,
    place1
}
console.log(user1);