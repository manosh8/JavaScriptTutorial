"use strict"

/*function greet($greeting = "dai venna")
{
    console.log($greeting);
}

greet();*/

let args = [1,2,3];

function test()
{
    console.log(args);
}

test(...args);