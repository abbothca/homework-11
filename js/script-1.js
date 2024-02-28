"use strict";

const movies = [
    {
        movieName: "The Thing",
        releaseYear: 1982,
        directedBy: "Carpenter",
        runningTimeInMinutes: 109,
    },
    {
        movieName: "Aliens",
        releaseYear: 1986,
        directedBy: "Cameron",
        runningTimeInMinutes: 137,
    },
    {
        movieName: "Men in Black",
        releaseYear: 1997,
        directedBy: "Sonnenfeld",
        runningTimeInMinutes: 98,
    },
    {
        movieName: "Predator",
        releaseYear: 1987,
        directedBy: "McTiernan",
        runningTimeInMinutes: 107,
    },
];

//Сортувати ми будемо клони, а не вихідний масив (бо оскільки тут один за одним йдуть кілька сортування, які мутують оригінальний масив)
let clone1 = [...movies];
let clone2 = [...movies];
let clone3 = [...movies];
let clone4 = [...movies];

console.log("releaseYear", ">")
console.log(clone1.sort(byProperty("releaseYear", ">")));
// ------------------------------
console.log("runningTimeInMinutes", "<")
console.log(clone2.sort(byProperty("runningTimeInMinutes", "<")));
//---------------------------------
console.log("movieName", ">");
console.log(clone3.sort(byProperty("movieName", "<")));
//----------------------------------
console.log("movieName", "<");
console.log(clone3.sort(byProperty("movieName", "<")));
//----------------------------------
console.log("runningTimeInMinutes", ">");
console.log(clone4.sort(byProperty("runningTimeInMinutes", ">")));
// --------------------------------

function byProperty(property, direction) {
    return (a, b) => {
        //запам"ятаємо результат порівняння, щоб повторно не порівнювати
        let isBBiggerA = a[property] < b[property];
        //врахуємо напрямок сортування і переііримо чи виконується умова сортування
        let isConditionFulfilled = (direction === "<") ? isBBiggerA : !isBBiggerA;
        //повертаємо функцію сортування
        return isConditionFulfilled ? 1 : -1;
    }

}