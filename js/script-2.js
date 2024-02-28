"use strict";

function someFunction(a, b) {
    if (a < b) {
        console.log("\\|   ~~~~   |/ ");
        console.log(" @  / o ~ \\  @");       
        console.log("/__( \\___/ )__\\");       
        console.log("    \\_____/");  
    }
    else {
        console.log(`${a} is bigger`);
    }
}

function slower(func, seconds) {
    console.log(`Chill out, you will get you result in ${seconds} seconds`);
    //повертаємо функцію, яка прийме аргументи для someFunction
    return (...args) => {
        //встановимо setTimeout
        // setTimeout(func, seconds*1000, ...args);
        // або з прив'язкою до контексту
        // setTimeout(func.bind(this, ...args), seconds * 1000);
        //або замість null замість this (стрілкова функція все одно не може мати this)
        setTimeout(func.bind(null, ...args), seconds * 1000);
    }
}

let slowedSomeFunction = slower(someFunction, 5);
// обгортаєте свою довільну функцію 'someFunction' в декоратор і задає значення вповільнення

slowedSomeFunction(3, 5);
// викликаєте декоратор  