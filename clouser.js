var counter = (function () {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function () {
            changeBy(1);             //function hidden.
        },
        decrement: function () {
            changeBy(-1);            //function hidden. 
        },
        value: function () {
            return privateCounter;   //inner function access outer function's variable.
        }
    };
})();

alert(counter.value()); // default value output: 0
counter.increment();
counter.increment();
alert(counter.value()); // after two time increment output: 2
counter.decrement();
alert(counter.value()); // after one time decrement output: 1
