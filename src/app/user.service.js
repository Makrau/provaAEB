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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var user_1 = require("./user");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.aebUrl = 'http://csf.aeb.gov.br/user';
        this.mockUrl = 'api/users';
        this.serviceUrl = this.mockUrl; // TODO: make aebUrl works 
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.model = new user_1.User('modelo', 'senha_modelo', 2);
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.serviceUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    UserService.prototype.getUser = function (id) {
        var url = this.serviceUrl + "/" + id;
        return this.http.get(url).toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    UserService.prototype.update = function (user) {
        var url = this.serviceUrl + "/" + user.id;
        return this.http.put(url, JSON.stringify(user), { headers: this.headers })
            .toPromise().then(function () { return user; }).catch(this.handleError);
    };
    UserService.prototype.update_default = function () {
        return this.update(this.model);
    };
    UserService.prototype.create = function (username, password) {
        return this.http.post(this.serviceUrl, JSON.stringify({ username: username, password: password }), { headers: this.headers }).toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    UserService.prototype.delete = function (id) {
        var url = this.serviceUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers }).toPromise()
            .then(function () { return null; }).catch(this.handleError);
    };
    UserService.prototype.delete_default = function () {
        return this.delete(this.model.id);
    };
    UserService.prototype.handleError = function (error) {
        console.error('An error ocurred on userService!', error);
        return Promise.reject(error.message || error);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map