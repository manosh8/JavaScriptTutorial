"use strict"

function Prefixer(prefix){
    this.prefix = prefix;
}

/*Prefixer.prototype.prefixArray = function(arr){
    let that = this;
    return arr.map(function(x){
        console.log(that.prefix + x);
    });
}*/

Prefixer.prototype.prefixArray = function(arr){
    return arr.map((x) => {
        console.log(this.prefix + x);
    });
}

let pre = new Prefixer("hai ");
pre.prefixArray(["kiran" , "rohan" , "dnesh"]);

/*let add = function(a,b){
    let sum = a+b;
    console.log(sum);
    return false;
}*/

let add = (a,b) =>{
    let sum = a+b;
    console.log(sum);
    return false;
}

add(5,7);
