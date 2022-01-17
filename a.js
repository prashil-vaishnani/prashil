
/*hoisting exemples */
/*--------rearrange the code--memory alocated at lexical analysis phase----*/

let p = a(1);
function a(foo) {
    if (foo > 20) {
        console.log("in a" + foo)
        return foo;

    }
    return b(foo + 2);
}
function b(foo) {
    console.log("in b" + foo)
    return c(foo) + 1;

}
function c(foo) {
    console.log("in c" + foo)
    return a(foo * 2);

}
console.log(p)

/* clouser */
/*---------problem(don't iterate scope over every iteration of loop ------------*/
for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log("i: " + i);
    }, i * 1000);
}
/* -------solution---it run at time of they define--------*/
for (var i = 1; i <= 5; i++) {
    (function (i) { //iife
        setTimeout(function () {
            console.log("i: " + i);
        }, i * 1000);
    })(i);
}
/*--------solution2---it follow scope highjacking technique----*/
for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log("i: " + i);
    }, i * 1000);
}
/* --------increment after the printing the value----------*/
function foo() {
    var bar = 0;
    setTimeout(function () {
        var baz = 1;
        console.log(bar++)
        console.log(++bar)
        setTimeout(function () {
            console.log(bar + baz)
        }, 100);
    }, 200);
}
foo();
/*---------magic property like python program-----------*/
function makeFunc() {
    var name = 'Mozilla';
    function displayName() {
        alert(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();
/*-------prototype( accessing the parent prototype's property-------------*/

let a = {
    name: "prashil",
    std: 12,
    b() {
        return "i am prashil";
    }

}
let A = {
    name: "prem",
    std: 11,
    c() {
        return this.std + std;
    }
}
let B = {
    name: "ngsn",
}
A.__proto__ = a;
B.__proto__ = A;
B.b();