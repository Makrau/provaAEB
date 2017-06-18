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
var common_1 = require("@angular/common");
var user_1 = require("./user");
var user_service_1 = require("./user.service");
require("rxjs/add/operator/switchMap");
var UserDetailComponent = (function () {
    function UserDetailComponent(userService, route, router, location) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.location = location;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.userService.getUser(+params['id']); })
            .subscribe(function (user) { return _this.user = user; });
    };
    UserDetailComponent.prototype.goBack = function () {
        this.router.navigate(['/users']);
    };
    UserDetailComponent.prototype.save = function () {
        var _this = this;
        this.userService.update(this.user).then(function () { return _this.goBack(); });
    };
    UserDetailComponent.prototype.delete = function (user) {
        this.userService.delete(user.id);
        this.goBack();
    };
    return UserDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", user_1.User)
], UserDetailComponent.prototype, "user", void 0);
UserDetailComponent = __decorate([
    core_1.Component({
        selector: 'user-detail',
        templateUrl: './view/user-detail.component.html',
        styleUrls: ['./view/css/user-detail.component.css']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.ActivatedRoute,
        router_1.Router,
        common_1.Location])
], UserDetailComponent);
exports.UserDetailComponent = UserDetailComponent;
//# sourceMappingURL=user-detail.component.js.map