var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persons = /** @class */ (function () {
    function Persons() {
        // public  公共的 允许在类的外面进行调用
        // protected 允许在类内及继承的子类中使用
        // private 只允许在类内使用
        this.name = 'to';
    }
    Persons.prototype.getName = function () {
        return this.name;
    };
    return Persons;
}());
var persons = new Persons();
var Persons1 = /** @class */ (function (_super) {
    __extends(Persons1, _super);
    function Persons1() {
        var _this = _super.call(this) || this;
        console.log(_super.prototype.getName);
        console.log(_this.getName);
        return _this;
    }
    Persons1.prototype.getName = function () {
        return 'form';
    };
    return Persons1;
}(Persons));
var FoodClass = /** @class */ (function () {
    function FoodClass(type) {
        this.type = type;
    }
    return FoodClass;
}());
// 类与类，接口与接口之间使用extends
// 类与接口，implements
var C = /** @class */ (function (_super) {
    __extends(C, _super);
    function C() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    C.prototype.getName = function () {
        return 'from' + 'to';
    };
    return C;
}(Persons));
