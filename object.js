/*-------------problem--when assigning value of object to another object it change original 
value of object if later modify---------*/


let a = {
    name: "prashil",//50
}
let b = a;//50
b.surname = "vaishnani";
console.log(a)
console.log(b)


/*--------------solution--it because it is not create separate object-----
instead of point to same object---so solution is create differant object-------*/
/*
let a = {
    name: "prashil",
}
let b = Object.assign({}, a);
b.surname = "vaishnani";
b.name = "hi";
console.log(b)
console.log(a)
a.name = "hello";
b = Object.assign({}, a);

console.log(a.surname)
console.log(b)
*/
/*---------solution 3 using spread---------


let a = {
    name: "prashil",//50
}
let b = {...a};//50
b.surname = "vaishnani";
console.log(a)
console.log(b)
*/

/*-------innovations---------*/
/*
let a = {
    name: "prashil",
}
let b = Object.assign({}, a);
b.surname = "vaishnani";
b.name = "hi";
console.log(b)
console.log(a) //print original value
a.name = "hello"; //replace both variable to name
b = Object.assign({}, a);
b.surname = "vaishnani";
console.log(a.surname) //not defined in upadated object
console.log(b)

*/