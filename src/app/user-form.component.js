"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_1 = require("./user");
var user_service_1 = require("./user.service");
var UserFormComponent = (function () {
    function UserFormComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.submitted = false;
        this.model = new user_1.User('modelo', 'senha_modelo', 2);
        this.valid_username = true;
    }
    UserFormComponent.prototype.onSubmit = function (username, password) {
        this.submitted = true;
        username = username.trim();
        password = password.trim();
        if (!username || !password) {
            return;
        }
        this.userService.create(username, password);
        this.router.navigate(['/users']);
    };
    UserFormComponent.prototype.unique_username = function (username) {
        var _this = this;
        this.userService.getUsers().then(function (users) { return _this.users = users; });
        var index;
        for (index = 0; index < this.users.length; ++index) {
            if (this.users[index].username === username) {
                return false;
            }
        }
        return true;
    };
    return UserFormComponent;
}());
UserFormComponent = __decorate([
    core_1.Component({
        selector: 'user-form',
        templateUrl: './view/user-form.component.html',
        styleUrls: ['./view/css/user-form.component.css']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.Router])
], UserFormComponent);
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=user-form.component.js.map