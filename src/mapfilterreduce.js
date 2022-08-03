"use strict"

const three = [1,2,3];

const double = three.map((element) => element*2);
console.log(double);

const numarr = [-23,77,83,11,22,1,0,9.1]

const sum = numarr.filter(item => Number.isInteger(item) && item>0).reduce((result,item) => {
        return result+item
      },0)

console.log(sum)


const mylist = [8,-7,66,5,-8,-21,-13,4,33,2,-41,-4,5.5,0,33]

const squareOfNumbers = (list)=> {
    return list.map((number) => number * number)
};


console.log(squareOfNumbers(mylist));

const evenNumbersInList = (list) =>{
    return list.filter((number => number%2==0 && number>0))
};

console.log(evenNumbersInList(mylist))

const sumOfNumbersInList = (list) =>{
    return list.reduce((result,number) => {
        return result+number
},0)
};

console.log(sumOfNumbersInList(mylist))

const printListWithIndex = (list) => {
    return list.forEach((number , index) => {
        console.log(number ,index) })
};
printListWithIndex(mylist)


const sumOfAllPositiveEvenNumbersInList = (list) =>{
    return list.filter((number) => number>0 && number%2==0).reduce((result,number) => {
    return result+number
    },0)
};

console.log(sumOfAllPositiveEvenNumbersInList(mylist))

const doubledSumOfAllNegativeOddNumbersInList = (list) => {
    return list.filter((number) => number<0 && number%2 != 0).map((number) => number*2).reduce((result,number) => {
    return result+number
    },0)
};

console.log(doubledSumOfAllNegativeOddNumbersInList(mylist))