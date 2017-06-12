"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var USERS = [
    { id: 11, password: 'senha_usuario11' },
    { id: 12, password: 'senha_usuario12' },
    { id: 13, password: 'senha_usuario13' },
    { id: 14, password: 'senha_usuario14' },
    { id: 15, password: 'senha_usuario15' },
    { id: 16, password: 'senha_usuario16' },
    { id: 17, password: 'senha_usuario17' },
    { id: 18, password: 'senha_usuario18' },
    { id: 19, password: 'senha_usuario19' },
    { id: 20, password: 'senha_usuario20' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Prova AEB';
        this.users = USERS;
    }
    AppComponent.prototype.onSelect = function (user) {
        this.selectedUser = user;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  \t<h1>{{title}}</h1>\n  \t<h2> Lista de Usu\u00E1rios </h2>\n  \t<ul class=\"users\">\n  \t\t<li *ngFor=\"let user of users\" [class.selected]=\"user === selectedUser\" \n  \t\t\t(click)=\"onSelect(user)\">\n  \t\t\t\t<span class=\"badge\">{{user.id}}</span> {{user.password}}\n  \t</li>\n  </ul>\n  <user-detail [user]=\"selectedUser\"></user-detail>\n\n  ",
        styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .users {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .users li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .users li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .users li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .users .text {\n    position: relative;\n    top: -3px;\n  }\n  .users .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map