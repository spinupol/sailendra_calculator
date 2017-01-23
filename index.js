module.exports = function(a, b, sym) {
    if (sym == "*") {
        return a * b;
    } else if (sym == "+") {
        return a + b;
    } else if (sym == "-") {
        return a - b;
    } else if (sym == "/") {
        return a / b;
    } else if (sym == "%") {
        return a % b;
    }
};
