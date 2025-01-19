var _a, _b, _c;
var Counter = /** @class */ (function () {
    function Counter(counter) {
        this.counter = counter;
    }
    Counter.prototype.increase = function () {
        return (this.counter += 1);
    };
    Counter.prototype.decrease = function () {
        return (this.counter -= 1);
    };
    Counter.prototype.reset = function () {
        return (this.counter = 0);
    };
    return Counter;
}());
var counter1 = new Counter(0);
var para = document.getElementById("counterVlaue");
if (para)
    para.textContent = counter1.counter.toString();
(_a = document.getElementById("inc")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var value = counter1.increase();
    if (para) {
        para.textContent = value.toString();
    }
});
(_b = document.getElementById("dec")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    var value = counter1.decrease();
    if (para) {
        para.textContent = value.toString();
    }
});
(_c = document.getElementById("res")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    var value = counter1.reset();
    if (para) {
        para.textContent = value.toString();
    }
});
