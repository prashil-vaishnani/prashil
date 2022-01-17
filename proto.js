let abc = {
    name: "prashil",

    b() {
        return this.name;
    }

}
let A = {
    /*name: "prem",*/
    std: 11,
    c() {
        return this.name
    }
}
let B = {

    D() {
        return this.name
    }
}
A.__proto__ = abc;
B.__proto__ = A;
console.log(A.b());
console.log(A.c());
console.log(B.b());
console.log(B.c());

