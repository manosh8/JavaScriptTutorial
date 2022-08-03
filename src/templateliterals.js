"use strict"

let name = "john"

let template = `<h1>Hai,${name}</h1><p>This is a simple template</p>`;

document.getElementById('template').innerHTML = template;