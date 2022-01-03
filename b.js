for (var i = 1; i <= 5; i++) {
    (function (i) { //iife
        setTimeout(function () {
            console.log("i: " + i);
        }, i * 1000);
    })(i);
}