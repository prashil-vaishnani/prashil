
var resolvedPromisesArray = [Promise.resolve(1), Promise.resolve(2)];
var p = Promise.all(resolvedPromisesArray);
console.log(p);
setTimeout(function () {
    console.log('the stack is now empty');
    console.log(p);
});