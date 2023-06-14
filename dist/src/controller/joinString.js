function joinString(m, n) {
    var result = m + n;
    console.log(result.toUpperCase());
}
function sumNumbers(a, b) {
    var result = a + b;
    console.log(result);
}
function arr(a) {
    var b = [];
    for (var i = 0; i < a.length; i++) {
        if (a[i] % 2 === 0) {
            b.push(a[i]);
        }
    }
    return b;
}
