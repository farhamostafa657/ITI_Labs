"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name1, email) {
        this.name1 = name1;
        this.email = email;
    }
    User.prototype.getDetails = function () {
        return "user name1 is ".concat(this.name1, " and user email is ").concat(this.email);
    };
    User.prototype.updateEmail = function (newEmail) {
        this.email = newEmail;
        return this.email;
    };
    return User;
}());
exports.User = User;
var user1 = new User("farha", "farha@gmail.com");
console.log(user1.getDetails());
