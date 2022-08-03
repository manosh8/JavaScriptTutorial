"use strict"
/*
let myArray = [22,55,433,21,22,34];

let mySet = new Set(myArray);

mySet.add('100');
mySet.add({a:2,b:3});
mySet.delete('100');
//mySet.clear();

console.log(mySet);
console.log(mySet.size);

mySet.forEach(function(val){
console.log(val);
});

*/

/*let myMap = new Map([["a",'kiran'],["b","manosh"]]);

myMap.set("c" ,"rohan");
myMap.delete("a");

console.log(myMap)*/

/*let myWeakset = new WeakSet()

let set1 ={
    'a' :"manosh",
    'b':"kingkan"
}
let set2 ={
    'a' :"monish",
    'b':"kiran"
}

myWeakset.add(set1);
myWeakset.add(set2);
console.log(myWeakset);*/

let myWeakMap = new WeakMap()

let map1 = {
    id : 7
}
let map1_val ={
    "name" : "rohan",
    "age" : 25
}

myWeakMap.set(map1,map1_val);
console.log(myWeakMap);


