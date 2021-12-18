var Arrays = /** @class */ (function () {
    function Arrays() {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        this.length = 0;
        this.data = {};
        for (var index = 0; index < items.length; index++) {
            this.data[this.length] = items[index];
            this.length++;
        }
    }
    Arrays.prototype.push = function (element) {
        this.data[this.length] = element;
        this.length++;
        return this.length;
    };
    Arrays.prototype.pop = function () {
        delete this.data[this.length - 1];
        this.length--;
        return this.data;
    };
    Arrays.prototype.shift = function () {
        delete this.data[0];
        this.length--;
        var obj = {};
        for (var key in this.data) {
            obj[+key - 1] = this.data[key];
        }
        return (this.data = obj);
    };
    Arrays.prototype.unshift = function (element) {
        var obj = {};
        obj[0] = element;
        this.length++;
        for (var key in this.data) {
            obj[+key + 1] = this.data[key];
        }
        return (this.data = obj);
    };
    Arrays.prototype.insertAt = function (item, index) {
        for (var i = this.length; i >= index; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[index] = item;
        this.length++;
        return this.data;
    };
    return Arrays;
}());
var arr = new Arrays(5, 5, 8, 9, 1);
arr.push(1);
arr.pop();
arr.shift();
arr.unshift(8);
console.log(arr);
