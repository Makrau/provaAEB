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
var user_service_1 = require("./user.service");
var UserComponent = (function () {
    function UserComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    UserComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().then(function (users) { return _this.users = users; });
    };
    UserComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserComponent.prototype.onSelect = function (user) {
        this.selectedUser = user;
    };
    UserComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/user', this.selectedUser.id]);
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'my-users',
        templateUrl: './view/user.component.html',
        styleUrls: ['./view/css/user.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        user_service_1.UserService])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map