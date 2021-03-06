"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var user_detail_component_1 = require("./user-detail.component");
var user_component_1 = require("./user.component");
var dashboard_component_1 = require("./dashboard.component");
var user_service_1 = require("./user.service");
var user_form_component_1 = require("./user-form.component");
var register_component_1 = require("./register.component");
var user_search_component_1 = require("./user-search.component");
var app_routing_module_1 = require("./app-routing.module");
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./in-memory-data.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService, { passThruUnknownUrl: true })
        ],
        declarations: [
            app_component_1.AppComponent,
            user_detail_component_1.UserDetailComponent,
            user_component_1.UserComponent,
            dashboard_component_1.DashboardComponent,
            user_form_component_1.UserFormComponent,
            register_component_1.RegisterComponent,
            user_search_component_1.UserSearchComponent
        ],
        bootstrap: [
            app_component_1.AppComponent
        ],
        providers: [user_service_1.UserService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map