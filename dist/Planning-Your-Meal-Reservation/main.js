(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dishes/dishes.module.ngfactory": [
		"./src/app/dishes/dishes.module.ngfactory.js",
		"dishes-dishes-module-ngfactory"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
/* harmony import */ var _preparation_list_preparation_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preparation-list/preparation-list.component */ "./src/app/preparation-list/preparation-list.component.ts");
/* harmony import */ var _core_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/home/home.component */ "./src/app/core/home/home.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");





var appRoutes = [
    { path: '', component: _core_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'dishes', loadChildren: './dishes/dishes.module#DishesModule' },
    { path: 'preparation-list', component: _preparation_list_preparation_list_component__WEBPACK_IMPORTED_MODULE_2__["PreparationListComponent"] },
    { path: 'contact-us', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__["ContactUsComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.scss.shim.ngstyle */ "./src/app/app.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/header/header.component.ngfactory */ "./src/app/core/header/header.component.ngfactory.js");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/data-storage.service */ "./src/app/shared/data-storage.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["id", "background"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["src", "./assets/background.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "app-header", [], null, null, null, _core_header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_HeaderComponent_0"], _core_header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_HeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _core_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], [_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 3, 0); _ck(_v, 5, 0); }, null); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.scss.shim.ngstyle.js":
/*!****************************************************!*\
  !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
  \****************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"];



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Planning-Your-Meal-Reservation';
    }
    AppComponent.prototype.ngOnInit = function () {
        firebase__WEBPACK_IMPORTED_MODULE_1__["initializeApp"]({
            apiKey: 'AIzaSyBfZmIa23t_amiXsdilDSVcGHWYHj8UgVw'
        });
    };
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ngfactory.js":
/*!*****************************************!*\
  !*** ./src/app/app.module.ngfactory.js ***!
  \*****************************************/
/*! exports provided: AppModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function() { return AppModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/material/dialog/typings/index.ngfactory */ "./node_modules/@angular/material/dialog/typings/index.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_datepicker_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@angular/material/datepicker/typings/index.ngfactory */ "./node_modules/@angular/material/datepicker/typings/index.ngfactory.js");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _core_home_home_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/home/home.component.ngfactory */ "./src/app/core/home/home.component.ngfactory.js");
/* harmony import */ var _preparation_list_preparation_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./preparation-list/preparation-list.component.ngfactory */ "./src/app/preparation-list/preparation-list.component.ngfactory.js");
/* harmony import */ var _contact_us_contact_us_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact-us/contact-us.component.ngfactory */ "./src/app/contact-us/contact-us.component.ngfactory.js");
/* harmony import */ var _auth_signup_signup_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/signup/signup.component.ngfactory */ "./src/app/auth/signup/signup.component.ngfactory.js");
/* harmony import */ var _auth_signin_signin_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/signin/signin.component.ngfactory */ "./src/app/auth/signin/signin.component.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/animations/browser */ "./node_modules/@angular/animations/fesm5/browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
/* harmony import */ var _preparation_list_preparation_list_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./preparation-list/preparation-list.service */ "./src/app/preparation-list/preparation-list.service.ts");
/* harmony import */ var _dishes_dish_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./dishes/dish.service */ "./src/app/dishes/dish.service.ts");
/* harmony import */ var _contact_us_contact_us_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./contact-us/contact-us.service */ "./src/app/contact-us/contact-us.service.ts");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./shared/data-storage.service */ "./src/app/shared/data-storage.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _core_home_home_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./core/home/home.component */ "./src/app/core/home/home.component.ts");
/* harmony import */ var _preparation_list_preparation_list_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./preparation-list/preparation-list.component */ "./src/app/preparation-list/preparation-list.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _preparation_list_preparation_list_module__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./preparation-list/preparation-list.module */ "./src/app/preparation-list/preparation-list.module.ts");
/* harmony import */ var _auth_auth_routing_module__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./auth/auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _contact_us_contact_us_module__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./contact-us/contact-us.module */ "./src/app/contact-us/contact-us.module.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


























































var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MatDialogContainerNgFactory"], _node_modules_angular_material_datepicker_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerContentNgFactory"], _node_modules_angular_material_datepicker_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["MatCalendarHeaderNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_5__["ɵEmptyOutletComponentNgFactory"], _core_home_home_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["HomeComponentNgFactory"], _preparation_list_preparation_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["PreparationListComponentNgFactory"], _contact_us_contact_us_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["ContactUsComponentNgFactory"], _auth_signup_signup_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["SignupComponentNgFactory"], _auth_signin_signin_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["SigninComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4352, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], "zh-Hans", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_h"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_15__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_15__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_15__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_15__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_15__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_15__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_17__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_18__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_18__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["ɵc"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["ɵd"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MAT_MENU_SCROLL_STRATEGY"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["ɵd20"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerIntl"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerIntl"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MAT_DATEPICKER_SCROLL_STRATEGY"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["DateAdapter"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["NativeDateAdapter"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MAT_DATE_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_25__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_forms_forms_j"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_forms_forms_j"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_27__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_27__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_27__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_27__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_27__["PreloadAllModules"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_27__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_27__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_n"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_27__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_27__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_27__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _auth_auth_service__WEBPACK_IMPORTED_MODULE_28__["AuthService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_28__["AuthService"], [_angular_router__WEBPACK_IMPORTED_MODULE_27__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_29__["AuthGuard"], _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_29__["AuthGuard"], [_auth_auth_service__WEBPACK_IMPORTED_MODULE_28__["AuthService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _preparation_list_preparation_list_service__WEBPACK_IMPORTED_MODULE_30__["PreparationListService"], _preparation_list_preparation_list_service__WEBPACK_IMPORTED_MODULE_30__["PreparationListService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _dishes_dish_service__WEBPACK_IMPORTED_MODULE_31__["DishService"], _dishes_dish_service__WEBPACK_IMPORTED_MODULE_31__["DishService"], [_preparation_list_preparation_list_service__WEBPACK_IMPORTED_MODULE_30__["PreparationListService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _contact_us_contact_us_service__WEBPACK_IMPORTED_MODULE_32__["ContactUsService"], _contact_us_contact_us_service__WEBPACK_IMPORTED_MODULE_32__["ContactUsService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_33__["DataStorageService"], _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_33__["DataStorageService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"], _dishes_dish_service__WEBPACK_IMPORTED_MODULE_31__["DishService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_28__["AuthService"], _contact_us_contact_us_service__WEBPACK_IMPORTED_MODULE_32__["ContactUsService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_i"](p1_0)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatCommonModule"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MATERIAL_SANITY_CHECKS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_25__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_25__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_34__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_34__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_18__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_18__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_35__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_35__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_36__["MatGridListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_36__["MatGridListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_37__["MatToolbarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_37__["MatToolbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_divider__WEBPACK_IMPORTED_MODULE_38__["MatDividerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_38__["MatDividerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_list__WEBPACK_IMPORTED_MODULE_39__["MatListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_39__["MatListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_40__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_40__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_41__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_41__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_19__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_42__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_42__["A11yModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_43__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_43__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["NativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["NativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_44__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_44__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_45__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_45__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_material_module__WEBPACK_IMPORTED_MODULE_46__["MaterialModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_46__["MaterialModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_forms_forms_bc"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_forms_forms_bc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_27__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_27__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_27__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_27__["ROUTER_CONFIGURATION"], { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_27__["PreloadAllModules"] }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_13__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_13__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_13__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_13__["LocationStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_27__["ROUTES"], function () { return [[{ path: "", component: _core_home_home_component__WEBPACK_IMPORTED_MODULE_47__["HomeComponent"] }, { path: "dishes", loadChildren: "./dishes/dishes.module#DishesModule" }, { path: "preparation-list", component: _preparation_list_preparation_list_component__WEBPACK_IMPORTED_MODULE_48__["PreparationListComponent"] }, { path: "contact-us", component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_49__["ContactUsComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_29__["AuthGuard"]] }], [{ path: "signup", component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_50__["SignupComponent"] }, { path: "signin", component: _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_51__["SigninComponent"] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_27__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_27__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_27__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_52__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_52__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _core_core_module__WEBPACK_IMPORTED_MODULE_53__["CoreModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_53__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _preparation_list_preparation_list_module__WEBPACK_IMPORTED_MODULE_54__["PreparationListModule"], _preparation_list_preparation_list_module__WEBPACK_IMPORTED_MODULE_54__["PreparationListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _auth_auth_routing_module__WEBPACK_IMPORTED_MODULE_55__["AuthRoutingModule"], _auth_auth_routing_module__WEBPACK_IMPORTED_MODULE_55__["AuthRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _auth_auth_module__WEBPACK_IMPORTED_MODULE_56__["AuthModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_56__["AuthModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _contact_us_contact_us_module__WEBPACK_IMPORTED_MODULE_57__["ContactUsModule"], _contact_us_contact_us_module__WEBPACK_IMPORTED_MODULE_57__["ContactUsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MAT_DATE_FORMATS"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MAT_NATIVE_DATE_FORMATS"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TRANSLATIONS_FORMAT"], "xlf", [])]); });



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-guard.service.ts":
/*!********************************************!*\
  !*** ./src/app/auth/auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");

var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.authService.isAuthenticated();
    };
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");



var authRoutes = [
    { path: 'signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_1__["SignupComponent"] },
    { path: 'signin', component: _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"] }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
    }
    AuthService.prototype.signupUser = function (email, password) {
        firebase__WEBPACK_IMPORTED_MODULE_0__["auth"]().createUserWithEmailAndPassword(email, password)
            .catch(function (error) {
            console.log(error);
            alert(error);
        });
    };
    AuthService.prototype.signinUser = function (email, password) {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_0__["auth"]().signInWithEmailAndPassword(email, password)
            .then(function (response) {
            _this.router.navigate(['/']);
            // get token when signin
            firebase__WEBPACK_IMPORTED_MODULE_0__["auth"]().currentUser.getIdToken()
                .then(function (token) { return _this.token = token; });
        }).catch(function (error) {
            console.log(error);
            alert(error);
        });
    };
    AuthService.prototype.getToken = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_0__["auth"]().currentUser.getIdToken()
            .then(function (token) { return _this.token = token; });
        return this.token;
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.token != null;
    };
    AuthService.prototype.logout = function () {
        firebase__WEBPACK_IMPORTED_MODULE_0__["auth"]().signOut();
        this.token = null;
    };
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/signin/signin.component.ngfactory.js":
/*!***********************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ngfactory.js ***!
  \***********************************************************/
/*! exports provided: RenderType_SigninComponent, View_SigninComponent_0, View_SigninComponent_Host_0, SigninComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SigninComponent", function() { return RenderType_SigninComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SigninComponent_0", function() { return View_SigninComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SigninComponent_Host_0", function() { return View_SigninComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponentNgFactory", function() { return SigninComponentNgFactory; });
/* harmony import */ var _signin_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin.component.scss.shim.ngstyle */ "./src/app/auth/signin/signin.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _signin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 











var styles_SigninComponent = [_signin_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_SigninComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_SigninComponent, data: {} });

function View_SigninComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \u90AE\u4EF6\u662F\u5FC5\u987B\u7684 "]))], null, null); }
function View_SigninComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \u90AE\u4EF6\u5FC5\u987B\u6709\u6B63\u786E\u7684\u5F62\u5F0F "]))], null, null); }
function View_SigninComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["style", "color:red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SigninComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SigninComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 14).errors.required; _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 14).errors.email; _ck(_v, 4, 0, currVal_1); }, null); }
function View_SigninComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \u5BC6\u7801\u662F\u5FC5\u987B\u7684 "]))], null, null); }
function View_SigninComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \u5BC6\u7801\u81F3\u5C11\u67096\u4F4D\u6570\u957F "]))], null, null); }
function View_SigninComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["style", "color:red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SigninComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SigninComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 28).errors.required; _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 28).errors.minlength; _ck(_v, 4, 0, currVal_1); }, null); }
function View_SigninComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 36, "form", [["class", "sign-form"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSignin(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_bh"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4210688, [["f", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "label", [["for", "email"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u90AE\u4EF6"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 8, "input", [["class", "form-control"], ["email", ""], ["name", "email"], ["ngModel", ""], ["required", ""], ["type", "email"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["EmailValidator"], [], { email: [0, "email"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["EmailValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 671744, [["email", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SigninComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "label", [["for", "password"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u5BC6\u7801"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 8, "input", [["minlength", "6"], ["name", "password"], ["ngModel", ""], ["required", ""], ["type", "password"]], [[1, "required", 0], [1, "minlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], [], { minlength: [0, "minlength"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 671744, [["password", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SigninComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 3, "div", [["class", "sign-button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 2, "button", [["color", "accent"], ["mat-flat-button", ""], ["type", "submit"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], { disabled: [0, "disabled"], color: [1, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u767B\u5F55"]))], function (_ck, _v) { var currVal_15 = ""; _ck(_v, 10, 0, currVal_15); var currVal_16 = ""; _ck(_v, 11, 0, currVal_16); var currVal_17 = "email"; var currVal_18 = ""; _ck(_v, 14, 0, currVal_17, currVal_18); var currVal_19 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).errors && ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).dirty || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).touched) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).submitted)); _ck(_v, 18, 0, currVal_19); var currVal_29 = ""; _ck(_v, 24, 0, currVal_29); var currVal_30 = "6"; _ck(_v, 25, 0, currVal_30); var currVal_31 = "password"; var currVal_32 = ""; _ck(_v, 28, 0, currVal_31, currVal_32); var currVal_33 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).errors && ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).dirty || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).touched) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).submitted)); _ck(_v, 32, 0, currVal_33); var currVal_36 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).valid; var currVal_37 = "accent"; _ck(_v, 35, 0, currVal_36, currVal_37); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).required ? "" : null); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassUntouched; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassTouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassPristine; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassDirty; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassValid; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassInvalid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassPending; _ck(_v, 8, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_20 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).required ? "" : null); var currVal_21 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).minlength ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).minlength : null); var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassUntouched; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassTouched; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassPristine; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassDirty; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassValid; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassInvalid; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassPending; _ck(_v, 22, 0, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28); var currVal_34 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).disabled || null); var currVal_35 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._animationMode === "NoopAnimations"); _ck(_v, 34, 0, currVal_34, currVal_35); }); }
function View_SigninComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-signin", [], null, null, null, View_SigninComponent_0, RenderType_SigninComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _signin_component__WEBPACK_IMPORTED_MODULE_9__["SigninComponent"], [_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SigninComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-signin", _signin_component__WEBPACK_IMPORTED_MODULE_9__["SigninComponent"], View_SigninComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/auth/signin/signin.component.scss.shim.ngstyle.js":
/*!*******************************************************************!*\
  !*** ./src/app/auth/signin/signin.component.scss.shim.ngstyle.js ***!
  \*******************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".sign-form[_ngcontent-%COMP%] {\n  margin-top: 30px; }\n\n.sign-button[_ngcontent-%COMP%] {\n  margin-top: 10px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9KaW5ndGluZy9Eb2N1bWVudHMvVWRlbXkvQW5ndWxhciBQcm9qZWN0IDIwMTkvUGxhbm5pbmctWW91ci1NZWFsL3NyYy9hcHAvYXV0aC9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbi1mb3JtICB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5zaWduLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */"];



/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");


var SigninComponent = /** @class */ (function () {
    function SigninComponent(authService) {
        this.authService = authService;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.onSignin = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this.authService.signinUser(email, password);
    };
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.ngfactory.js":
/*!***********************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ngfactory.js ***!
  \***********************************************************/
/*! exports provided: RenderType_SignupComponent, View_SignupComponent_0, View_SignupComponent_Host_0, SignupComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SignupComponent", function() { return RenderType_SignupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SignupComponent_0", function() { return View_SignupComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SignupComponent_Host_0", function() { return View_SignupComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponentNgFactory", function() { return SignupComponentNgFactory; });
/* harmony import */ var _signup_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.component.scss.shim.ngstyle */ "./src/app/auth/signup/signup.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 











var styles_SignupComponent = [_signup_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_SignupComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_SignupComponent, data: {} });

function View_SignupComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \u7535\u5B50\u90AE\u4EF6\u662F\u5FC5\u9700\u7684 "]))], null, null); }
function View_SignupComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \u90AE\u4EF6\u5FC5\u987B\u6709\u6B63\u786E\u7684\u5F62\u5F0F "]))], null, null); }
function View_SignupComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["style", "color:red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SignupComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SignupComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 14).errors.required; _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 14).errors.email; _ck(_v, 4, 0, currVal_1); }, null); }
function View_SignupComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \u5BC6\u7801\u662F\u5FC5\u987B\u7684 "]))], null, null); }
function View_SignupComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \u5BC6\u7801\u81F3\u5C11\u67096\u4F4D\u6570\u957F "]))], null, null); }
function View_SignupComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["style", "color:red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SignupComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SignupComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 28).errors.required; _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 28).errors.minlength; _ck(_v, 4, 0, currVal_1); }, null); }
function View_SignupComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 36, "form", [["class", "sign-form"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSignup(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_bh"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4210688, [["f", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "label", [["for", "email"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u90AE\u4EF6"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 8, "input", [["email", ""], ["name", "email"], ["ngModel", ""], ["required", ""], ["type", "email"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["EmailValidator"], [], { email: [0, "email"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["EmailValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 671744, [["email", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SignupComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "label", [["for", "password"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u5BC6\u7801"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 8, "input", [["minlength", "6"], ["name", "password"], ["ngModel", ""], ["required", ""], ["type", "password"]], [[1, "required", 0], [1, "minlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], [], { minlength: [0, "minlength"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 671744, [["password", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SignupComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 3, "div", [["class", "sign-button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 2, "button", [["color", "accent"], ["mat-flat-button", ""], ["type", "submit"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], { disabled: [0, "disabled"], color: [1, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u6CE8\u518C"]))], function (_ck, _v) { var currVal_15 = ""; _ck(_v, 10, 0, currVal_15); var currVal_16 = ""; _ck(_v, 11, 0, currVal_16); var currVal_17 = "email"; var currVal_18 = ""; _ck(_v, 14, 0, currVal_17, currVal_18); var currVal_19 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).errors && ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).dirty || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).touched) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).submitted)); _ck(_v, 18, 0, currVal_19); var currVal_29 = ""; _ck(_v, 24, 0, currVal_29); var currVal_30 = "6"; _ck(_v, 25, 0, currVal_30); var currVal_31 = "password"; var currVal_32 = ""; _ck(_v, 28, 0, currVal_31, currVal_32); var currVal_33 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).errors && ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).dirty || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).touched) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).submitted)); _ck(_v, 32, 0, currVal_33); var currVal_36 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).valid; var currVal_37 = "accent"; _ck(_v, 35, 0, currVal_36, currVal_37); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).required ? "" : null); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassUntouched; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassTouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassPristine; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassDirty; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassValid; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassInvalid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassPending; _ck(_v, 8, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_20 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).required ? "" : null); var currVal_21 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).minlength ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).minlength : null); var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassUntouched; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassTouched; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassPristine; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassDirty; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassValid; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassInvalid; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassPending; _ck(_v, 22, 0, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28); var currVal_34 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).disabled || null); var currVal_35 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._animationMode === "NoopAnimations"); _ck(_v, 34, 0, currVal_34, currVal_35); }); }
function View_SignupComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-signup", [], null, null, null, View_SignupComponent_0, RenderType_SignupComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"], [_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SignupComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-signup", _signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"], View_SignupComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/auth/signup/signup.component.scss.shim.ngstyle.js":
/*!*******************************************************************!*\
  !*** ./src/app/auth/signup/signup.component.scss.shim.ngstyle.js ***!
  \*******************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".sign-form[_ngcontent-%COMP%] {\n  margin-top: 30px; }\n\n.sign-button[_ngcontent-%COMP%] {\n  margin-top: 10px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9KaW5ndGluZy9Eb2N1bWVudHMvVWRlbXkvQW5ndWxhciBQcm9qZWN0IDIwMTkvUGxhbm5pbmctWW91ci1NZWFsL3NyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbi1mb3JtICB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5zaWduLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */"];



/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");


var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService) {
        this.authService = authService;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSignup = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this.authService.signupUser(email, password);
    };
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.css.shim.ngstyle.js":
/*!*********************************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.css.shim.ngstyle.js ***!
  \*********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".contact-us[_ngcontent-%COMP%] {\n  margin: 15px;\n  text-align: center;\n}\n\n.textarea-style[_ngcontent-%COMP%] {\n  padding: 15px; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdC11cyB7XG4gIG1hcmdpbjogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGV4dGFyZWEtc3R5bGUge1xuICBwYWRkaW5nOiAxNXB4OyBcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ngfactory.js":
/*!**************************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ngfactory.js ***!
  \**************************************************************/
/*! exports provided: RenderType_ContactUsComponent, View_ContactUsComponent_0, View_ContactUsComponent_Host_0, ContactUsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ContactUsComponent", function() { return RenderType_ContactUsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ContactUsComponent_0", function() { return View_ContactUsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ContactUsComponent_Host_0", function() { return View_ContactUsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponentNgFactory", function() { return ContactUsComponentNgFactory; });
/* harmony import */ var _contact_us_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us.component.css.shim.ngstyle */ "./src/app/contact-us/contact-us.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _contact_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contact_us_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact-us.service */ "./src/app/contact-us/contact-us.service.ts");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/data-storage.service */ "./src/app/shared/data-storage.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 












var styles_ContactUsComponent = [_contact_us_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ContactUsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ContactUsComponent, data: {} });

function View_ContactUsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { contactForm: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 23, "form", [["class", "contact-us"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSubmit(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_bh"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4210688, [[1, 4], ["f", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 9, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "button", [["color", "primary"], ["mat-fab", ""], ["type", "submit"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], { color: [0, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u4FDD\u5B58"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "button", [["color", "warn"], ["mat-fab", ""], ["type", "button"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onFetch() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], { color: [0, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u83B7\u53D6"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "button", [["color", "accent"], ["mat-fab", ""], ["type", "button"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onCancel() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], { color: [0, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u53D6\u6D88"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 8, "div", [["class", "textarea-style"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 7, "textarea", [["cols", "50"], ["name", "contact"], ["placeholder", "\u8BA2\u9910\u65F6\u95F4\u6216\u8005\u5404\u4EBA\u53E3\u5473\u504F\u597D\u7B49\u7B49"], ["required", ""], ["rows", "20"], ["type", "text"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_9 = "primary"; _ck(_v, 8, 0, currVal_9); var currVal_12 = "warn"; _ck(_v, 11, 0, currVal_12); var currVal_15 = "accent"; _ck(_v, 14, 0, currVal_15); var currVal_24 = ""; _ck(_v, 19, 0, currVal_24); var currVal_25 = "contact"; var currVal_26 = _co.contactInfo; _ck(_v, 22, 0, currVal_25, currVal_26); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassPending; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).disabled || null); var currVal_8 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._animationMode === "NoopAnimations"); _ck(_v, 7, 0, currVal_7, currVal_8); var currVal_10 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).disabled || null); var currVal_11 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._animationMode === "NoopAnimations"); _ck(_v, 10, 0, currVal_10, currVal_11); var currVal_13 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).disabled || null); var currVal_14 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._animationMode === "NoopAnimations"); _ck(_v, 13, 0, currVal_13, currVal_14); var currVal_16 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).required ? "" : null); var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassUntouched; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassTouched; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassPristine; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassDirty; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassValid; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassInvalid; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassPending; _ck(_v, 17, 0, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23); }); }
function View_ContactUsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-date", [], null, null, null, View_ContactUsComponent_0, RenderType_ContactUsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _contact_us_component__WEBPACK_IMPORTED_MODULE_8__["ContactUsComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _contact_us_service__WEBPACK_IMPORTED_MODULE_10__["ContactUsService"], _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_11__["DataStorageService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ContactUsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-date", _contact_us_component__WEBPACK_IMPORTED_MODULE_8__["ContactUsComponent"], View_ContactUsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contact_us_contact_us_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contact-us/contact-us.service */ "./src/app/contact-us/contact-us.service.ts");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/data-storage.service */ "./src/app/shared/data-storage.service.ts");





var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent(route, router, cService, dataStorageService) {
        this.route = route;
        this.router = router;
        this.cService = cService;
        this.dataStorageService = dataStorageService;
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent.prototype.onCancel = function () {
        this.contactForm.reset();
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    ContactUsComponent.prototype.onFetch = function () {
        var _this = this;
        this.contactInfo = '';
        this.dataStorageService.fetchContactInfo();
        this.subscription = this.cService.getContactUsChanged().subscribe(function (mes) {
            _this.contactInfo = mes;
        });
    };
    ContactUsComponent.prototype.onSubmit = function (form) {
        this.contactInfo = form.value.contact;
        this.cService.addContactInfo(this.contactInfo);
        this.dataStorageService.storeContactInfo().subscribe(function (response) {
            console.log(response);
        });
    };
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.module.ts":
/*!*************************************************!*\
  !*** ./src/app/contact-us/contact-us.module.ts ***!
  \*************************************************/
/*! exports provided: ContactUsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsModule", function() { return ContactUsModule; });
var ContactUsModule = /** @class */ (function () {
    function ContactUsModule() {
    }
    return ContactUsModule;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.service.ts":
/*!**************************************************!*\
  !*** ./src/app/contact-us/contact-us.service.ts ***!
  \**************************************************/
/*! exports provided: ContactUsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsService", function() { return ContactUsService; });
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");

var ContactUsService = /** @class */ (function () {
    function ContactUsService() {
        this.contactusChanged = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    ContactUsService.prototype.getContactInfo = function () {
        return this.contactinformation;
    };
    ContactUsService.prototype.addContactInfo = function (contactinformation) {
        this.contactinformation = contactinformation;
        this.contactusChanged.next(this.contactinformation.slice());
    };
    ContactUsService.prototype.getContactUsChanged = function () {
        return this.contactusChanged;
    };
    return ContactUsService;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.ngfactory.js":
/*!***********************************************************!*\
  !*** ./src/app/core/header/header.component.ngfactory.js ***!
  \***********************************************************/
/*! exports provided: RenderType_HeaderComponent, View_HeaderComponent_0, View_HeaderComponent_Host_0, HeaderComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HeaderComponent", function() { return RenderType_HeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HeaderComponent_0", function() { return View_HeaderComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HeaderComponent_Host_0", function() { return View_HeaderComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponentNgFactory", function() { return HeaderComponentNgFactory; });
/* harmony import */ var _header_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component.scss.shim.ngstyle */ "./src/app/core/header/header.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/menu/typings/index.ngfactory */ "./node_modules/@angular/material/menu/typings/index.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/toolbar/typings/index.ngfactory */ "./node_modules/@angular/material/toolbar/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/data-storage.service */ "./src/app/shared/data-storage.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


















var styles_HeaderComponent = [_header_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_HeaderComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_HeaderComponent, data: {} });

function View_HeaderComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 17, "span", [["class", "menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 16777216, null, null, 3, "button", [["aria-haspopup", "true"], ["class", "manage"], ["mat-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-expanded", 0]], [[null, "mousedown"], [null, "keydown"], [null, "click"]], function (_v, en, $event) { var ad = true; if (("mousedown" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._handleMousedown($event) !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._handleClick($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 1196032, null, 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MAT_MENU_SCROLL_STRATEGY"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenu"]], [8, null], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"]], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"]], { menu: [0, "menu"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u7BA1\u7406"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 10, "mat-menu", [], null, null, null, _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatMenu_0"], _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatMenu"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 1294336, [["manage", 4]], 2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenu"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MAT_MENU_DEFAULT_OPTIONS"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, { items: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 11, { lazyContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["ɵf20"], null, [_angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenu"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 0, 2, "button", [["class", "manage mat-menu-item"], ["mat-menu-item", ""]], [[1, "role", 0], [2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._checkDisabled($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseenter" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._handleMouseEnter() !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_co.onFetchData() !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatMenuItem_0"], _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 180224, [[10, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["ɵf20"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u83B7\u53D6\u6570\u636E"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, 0, 2, "button", [["class", "manage mat-menu-item"], ["mat-menu-item", ""]], [[1, "role", 0], [2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._checkDisabled($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseenter" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._handleMouseEnter() !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_co.onSaveData() !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatMenuItem_0"], _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 180224, [[10, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["ɵf20"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u5B58\u50A8\u6570\u636E"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "span", [["class", "register"], ["style", "cursor: pointer;"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onLogout() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u9000\u51FA"]))], function (_ck, _v) { var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6); _ck(_v, 3, 0, currVal_3); _ck(_v, 6, 0); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._animationMode === "NoopAnimations"); var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).menuOpen || null); _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).role; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._highlighted; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._triggersSubmenu; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._getTabIndex(); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).disabled.toString(); var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).disabled || null); _ck(_v, 10, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).role; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._highlighted; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._triggersSubmenu; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._getTabIndex(); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).disabled.toString(); var currVal_15 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).disabled || null); _ck(_v, 13, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); }); }
function View_HeaderComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "span", [["class", "manage-button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "span", [["class", "register"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "a", [["routerLink", "/signup"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u6CE8\u518C"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 3, "span", [["class", "register"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "a", [["routerLink", "/signin"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u767B\u5F55"]))], function (_ck, _v) { var currVal_2 = "/signup"; _ck(_v, 3, 0, currVal_2); var currVal_5 = "/signin"; _ck(_v, 7, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).target; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).href; _ck(_v, 6, 0, currVal_3, currVal_4); }); }
function View_HeaderComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 34, "mat-toolbar", [["class", "mat-toolbar"], ["color", "primary"]], [[2, "mat-toolbar-multiple-rows", null], [2, "mat-toolbar-single-row", null]], null, null, _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_MatToolbar_0"], _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_MatToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 1, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]], { color: [0, "color"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { _toolbarRows: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 6, "span", [["class", "mean-plan"], ["routerLinkActive", "active"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "a", [["routerLink", "/"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 671744, [[3, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u81B3\u98DF\u8BA1\u5212"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 0, 6, "span", [["class", "header"], ["routerLinkActive", "active"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 2, "a", [["routerLink", "/dishes"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 671744, [[5, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u83DC\u80B4"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, 0, 6, "span", [["class", "header"], ["routerLinkActive", "active"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 2, "a", [["routerLink", "/preparation-list"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 671744, [[7, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u51C6\u5907\u5217\u8868"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, 0, 6, "span", [["class", "navigation"], ["routerLinkActive", "active"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 2, "a", [["routerLink", "/contact-us"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 671744, [[9, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u8054\u7CFB\u6211\u4EEC"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_HeaderComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_HeaderComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = "primary"; _ck(_v, 1, 0, currVal_2); var currVal_3 = "active"; _ck(_v, 4, 0, currVal_3); var currVal_6 = "/"; _ck(_v, 8, 0, currVal_6); var currVal_7 = "active"; _ck(_v, 11, 0, currVal_7); var currVal_10 = "/dishes"; _ck(_v, 15, 0, currVal_10); var currVal_11 = "active"; _ck(_v, 18, 0, currVal_11); var currVal_14 = "/preparation-list"; _ck(_v, 22, 0, currVal_14); var currVal_15 = "active"; _ck(_v, 25, 0, currVal_15); var currVal_18 = "/contact-us"; _ck(_v, 29, 0, currVal_18); var currVal_19 = _co.isAuthenticated(); _ck(_v, 32, 0, currVal_19); var currVal_20 = !_co.isAuthenticated(); _ck(_v, 34, 0, currVal_20); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._toolbarRows.length > 0); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._toolbarRows.length === 0); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).target; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).href; _ck(_v, 7, 0, currVal_4, currVal_5); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).target; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).href; _ck(_v, 14, 0, currVal_8, currVal_9); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).target; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).href; _ck(_v, 21, 0, currVal_12, currVal_13); var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).target; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).href; _ck(_v, 28, 0, currVal_16, currVal_17); }); }
function View_HeaderComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-header", [], null, null, null, View_HeaderComponent_0, RenderType_HeaderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"], [_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_16__["DataStorageService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HeaderComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-header", _header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"], View_HeaderComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/core/header/header.component.scss.shim.ngstyle.js":
/*!*******************************************************************!*\
  !*** ./src/app/core/header/header.component.scss.shim.ngstyle.js ***!
  \*******************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".mean-plan[_ngcontent-%COMP%] {\n  font-family: 'Times New Roman';\n  font-size: 20px; }\n\n.header[_ngcontent-%COMP%] {\n  padding-left: 5%;\n  font-family: 'Times New Roman';\n  font-size: 20px; }\n\n.menu[_ngcontent-%COMP%] {\n  padding: 200px; }\n\n.manage[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-family: 'Times New Roman'; }\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white; }\n\n.manage-button[_ngcontent-%COMP%] {\n  padding-left: 200px; }\n\n.register[_ngcontent-%COMP%] {\n  font-family: 'Times New Roman';\n  font-size: 20px;\n  padding: 50px; }\n\n.navigation[_ngcontent-%COMP%] {\n  font-family: 'Times New Roman';\n  font-size: 20px;\n  padding-left: 5%; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9KaW5ndGluZy9Eb2N1bWVudHMvVWRlbXkvQW5ndWxhciBQcm9qZWN0IDIwMTkvUGxhbm5pbmctWW91ci1NZWFsL3NyYy9hcHAvY29yZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQThCO0VBQzlCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsZUFBZTtFQUNmLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLHFCQUFvQjtFQUNwQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGFBQWEsRUFBQTs7QUFHZjtFQUNFLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVhbi1wbGFuIHtcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5oZWFkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbic7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLm1lbnUge1xuICBwYWRkaW5nOiAyMDBweDtcbn1cblxuLm1hbmFnZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1hbmFnZS1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDIwMHB4O1xufVxuXG4ucmVnaXN0ZXIge1xuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbic7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogNTBweDtcbn1cblxuLm5hdmlnYXRpb24ge1xuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbic7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/data-storage.service */ "./src/app/shared/data-storage.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(dataStorageService, authService) {
        this.dataStorageService = dataStorageService;
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.isAuthenticated = function () {
        return this.authService.isAuthenticated();
    };
    HeaderComponent.prototype.onSaveData = function () {
        this.dataStorageService.storeDishes().subscribe(function (response) {
            console.log(response);
        });
    };
    HeaderComponent.prototype.onFetchData = function () {
        this.dataStorageService.getDishes();
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/home/home.component.ngfactory.js":
/*!*******************************************************!*\
  !*** ./src/app/core/home/home.component.ngfactory.js ***!
  \*******************************************************/
/*! exports provided: RenderType_HomeComponent, View_HomeComponent_0, View_HomeComponent_Host_0, HomeComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HomeComponent", function() { return RenderType_HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HomeComponent_0", function() { return View_HomeComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HomeComponent_Host_0", function() { return View_HomeComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponentNgFactory", function() { return HomeComponentNgFactory; });
/* harmony import */ var _home_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component.scss.shim.ngstyle */ "./src/app/core/home/home.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/core/home/home.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_HomeComponent = [_home_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_HomeComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_HomeComponent, data: { "animation": [{ type: 7, name: "home", definitions: [{ type: 1, expr: "void => *", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { transform: "translateX(-100px)", opacity: 0, offset: 0 }, offset: null }, { type: 6, styles: { transform: "translateX(-50px)", opacity: 0.5, offset: 0.3 }, offset: null }, { type: 6, styles: { transform: "translateX(-20px)", opacity: 0.7, offset: 0.8 }, offset: null }, { type: 6, styles: { transform: "translateX(0px)", opacity: 1, offset: 1 }, offset: null }] }, timings: 1500 }], options: null }], options: {} }] } });

function View_HomeComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "h2", [], [[24, "@home", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u6B22\u8FCE\u6765\u5230\u81B3\u98DF\u8BA1\u5212"]))], null, function (_ck, _v) { var currVal_0 = undefined; _ck(_v, 0, 0, currVal_0); }); }
function View_HomeComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-home", [], null, null, null, View_HomeComponent_0, RenderType_HomeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HomeComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-home", _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], View_HomeComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/core/home/home.component.scss.shim.ngstyle.js":
/*!***************************************************************!*\
  !*** ./src/app/core/home/home.component.scss.shim.ngstyle.js ***!
  \***************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"];



/***/ }),

/***/ "./src/app/core/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/core/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/dishes/dish.model.ts":
/*!**************************************!*\
  !*** ./src/app/dishes/dish.model.ts ***!
  \**************************************/
/*! exports provided: Dish */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dish", function() { return Dish; });
var Dish = /** @class */ (function () {
    function Dish(name, description, imagePath, ingredient) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredient;
    }
    return Dish;
}());



/***/ }),

/***/ "./src/app/dishes/dish.service.ts":
/*!****************************************!*\
  !*** ./src/app/dishes/dish.service.ts ***!
  \****************************************/
/*! exports provided: DishService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishService", function() { return DishService; });
/* harmony import */ var _dishes_dish_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dishes/dish.model */ "./src/app/dishes/dish.model.ts");
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");
/* harmony import */ var _preparation_list_preparation_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../preparation-list/preparation-list.service */ "./src/app/preparation-list/preparation-list.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var DishService = /** @class */ (function () {
    function DishService(plService) {
        this.plService = plService;
        this.dishesChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dishes = [
            new _dishes_dish_model__WEBPACK_IMPORTED_MODULE_0__["Dish"]('Gongbao Chicken', 'Chinese Food', 'http://farm7.static.flickr.com/6127/5949832181_d73a87f299_z.jpg', [
                new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_1__["Ingredient"]('Chicken', 1),
                new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_1__["Ingredient"]('Cucumber', 2)
            ]),
            new _dishes_dish_model__WEBPACK_IMPORTED_MODULE_0__["Dish"]('Hot dry noodles', 'Great Noodles', 'http://www.globaltimes.cn/Portals/0/attachment/2011/5997c21f-a92a-4850-b5a9-bd0e598fd354.jpeg', [
                new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_1__["Ingredient"]('Noodles', 2),
                new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_1__["Ingredient"]('Hot Pepper', 1)
            ]),
        ];
    }
    DishService.prototype.setDishes = function (dishes) {
        this.dishes = dishes;
        this.dishesChanged.next(this.dishes.slice());
    };
    DishService.prototype.getDishes = function () {
        return this.dishes.slice();
    };
    DishService.prototype.addIngredientsToShoppingList = function (dish) {
        this.plService.addIngredients(dish.ingredients.slice());
    };
    DishService.prototype.getDish = function (index) {
        return this.dishes[index];
    };
    DishService.prototype.addDish = function (dish) {
        this.dishes.push(dish);
        this.dishesChanged.next(this.dishes.slice());
    };
    DishService.prototype.updateDish = function (index, dish) {
        this.dishes[index] = dish;
        this.dishesChanged.next(this.dishes.slice());
    };
    DishService.prototype.deleteDish = function (index) {
        this.dishes.splice(index, 1);
        this.dishesChanged.next(this.dishes.slice());
    };
    return DishService;
}());



/***/ }),

/***/ "./src/app/preparation-list/preparation-edit/preparation-edit.component.ngfactory.js":
/*!*******************************************************************************************!*\
  !*** ./src/app/preparation-list/preparation-edit/preparation-edit.component.ngfactory.js ***!
  \*******************************************************************************************/
/*! exports provided: RenderType_PreparationEditComponent, View_PreparationEditComponent_0, View_PreparationEditComponent_Host_0, PreparationEditComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_PreparationEditComponent", function() { return RenderType_PreparationEditComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PreparationEditComponent_0", function() { return View_PreparationEditComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PreparationEditComponent_Host_0", function() { return View_PreparationEditComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreparationEditComponentNgFactory", function() { return PreparationEditComponentNgFactory; });
/* harmony import */ var _preparation_edit_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preparation-edit.component.scss.shim.ngstyle */ "./src/app/preparation-list/preparation-edit/preparation-edit.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _preparation_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./preparation-edit.component */ "./src/app/preparation-list/preparation-edit/preparation-edit.component.ts");
/* harmony import */ var _preparation_list_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../preparation-list.service */ "./src/app/preparation-list/preparation-list.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 











var styles_PreparationEditComponent = [_preparation_edit_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_PreparationEditComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_PreparationEditComponent, data: {} });

function View_PreparationEditComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["id", "delete-button"], ["mat-fab", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onDelete() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u5220\u9664"]))], null, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_PreparationEditComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { plForm: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 35, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSubmit(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_bh"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4210688, [[1, 4], ["f", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "label", [["for", "name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u539F\u6599\u540D"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 7, "input", [["class", "input"], ["name", "name"], ["ngModel", ""], ["required", ""], ["type", "text"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "label", [["for", "weight"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u91CD\u91CF"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 9, "input", [["name", "weight"], ["ngModel", ""], ["pattern", "^[1-9]+[0-9]*$"], ["required", ""], ["type", "number"]], [[1, "required", 0], [1, "pattern", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).onChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).onChange($event.target.value) !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).onTouched() !== false);
        ad = (pd_6 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_be"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["PatternValidator"], [], { pattern: [0, "pattern"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALIDATORS"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["PatternValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_be"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 8, "div", [["id", "preparation-button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 2, "button", [["color", "warn"], ["mat-fab", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], { disabled: [0, "disabled"], color: [1, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u66F4\u65B0"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PreparationEditComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 2, "button", [["color", "accent"], ["id", "clear-button"], ["mat-fab", ""], ["type", "button"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onClear() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], { color: [0, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u6E05\u9664"]))], function (_ck, _v) { var _co = _v.component; var currVal_15 = ""; _ck(_v, 10, 0, currVal_15); var currVal_16 = "name"; var currVal_17 = ""; _ck(_v, 13, 0, currVal_16, currVal_17); var currVal_27 = ""; _ck(_v, 21, 0, currVal_27); var currVal_28 = "^[1-9]+[0-9]*$"; _ck(_v, 22, 0, currVal_28); var currVal_29 = "weight"; var currVal_30 = ""; _ck(_v, 25, 0, currVal_29, currVal_30); var currVal_33 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).valid; var currVal_34 = "warn"; _ck(_v, 30, 0, currVal_33, currVal_34); var currVal_35 = _co.editMode; _ck(_v, 33, 0, currVal_35); var currVal_38 = "accent"; _ck(_v, 35, 0, currVal_38); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassPending; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).required ? "" : null); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassUntouched; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassTouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPristine; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassDirty; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassValid; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassInvalid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPending; _ck(_v, 8, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_18 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).required ? "" : null); var currVal_19 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).pattern ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).pattern : null); var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassUntouched; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassTouched; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassPristine; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassDirty; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassValid; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassInvalid; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassPending; _ck(_v, 18, 0, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26); var currVal_31 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).disabled || null); var currVal_32 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._animationMode === "NoopAnimations"); _ck(_v, 29, 0, currVal_31, currVal_32); var currVal_36 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).disabled || null); var currVal_37 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35)._animationMode === "NoopAnimations"); _ck(_v, 34, 0, currVal_36, currVal_37); }); }
function View_PreparationEditComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-preparation-edit", [], null, null, null, View_PreparationEditComponent_0, RenderType_PreparationEditComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _preparation_edit_component__WEBPACK_IMPORTED_MODULE_9__["PreparationEditComponent"], [_preparation_list_service__WEBPACK_IMPORTED_MODULE_10__["PreparationListService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PreparationEditComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-preparation-edit", _preparation_edit_component__WEBPACK_IMPORTED_MODULE_9__["PreparationEditComponent"], View_PreparationEditComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/preparation-list/preparation-edit/preparation-edit.component.scss.shim.ngstyle.js":
/*!***************************************************************************************************!*\
  !*** ./src/app/preparation-list/preparation-edit/preparation-edit.component.scss.shim.ngstyle.js ***!
  \***************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["#preparation-button[_ngcontent-%COMP%] {\n  margin: 10px; }\n\n.input[_ngcontent-%COMP%] {\n  border-style: groove; }\n\n#clear-button[_ngcontent-%COMP%] {\n  background-color: #0c8b28;\n  color: white; }\n\n#delete-button[_ngcontent-%COMP%] {\n  background-color: orange;\n  color: white; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9KaW5ndGluZy9Eb2N1bWVudHMvVWRlbXkvQW5ndWxhciBQcm9qZWN0IDIwMTkvUGxhbm5pbmctWW91ci1NZWFsL3NyYy9hcHAvcHJlcGFyYXRpb24tbGlzdC9wcmVwYXJhdGlvbi1lZGl0L3ByZXBhcmF0aW9uLWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSx5QkFBa0M7RUFDbEMsWUFBWSxFQUFBOztBQUdkO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ByZXBhcmF0aW9uLWxpc3QvcHJlcGFyYXRpb24tZWRpdC9wcmVwYXJhdGlvbi1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3ByZXBhcmF0aW9uLWJ1dHRvbiB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyLXN0eWxlOiBncm9vdmU7XG59XG5cbiNjbGVhci1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIsIDEzOSwgNDApO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbiNkZWxldGUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"];



/***/ }),

/***/ "./src/app/preparation-list/preparation-edit/preparation-edit.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/preparation-list/preparation-edit/preparation-edit.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PreparationEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreparationEditComponent", function() { return PreparationEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");
/* harmony import */ var _preparation_list_preparation_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../preparation-list/preparation-list.service */ "./src/app/preparation-list/preparation-list.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var PreparationEditComponent = /** @class */ (function () {
    function PreparationEditComponent(plService) {
        this.plService = plService;
        this.editMode = false;
    }
    PreparationEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.plService.startedEditing
            .subscribe(function (index) {
            _this.editNumber = index;
            _this.editMode = true;
            _this.editedItem = _this.plService.getIngredient(index);
            _this.plForm.setValue({
                name: _this.editedItem.name,
                weight: _this.editedItem.weight
            });
        });
    };
    PreparationEditComponent.prototype.onSubmit = function (form) {
        var value = form.value;
        var newIngredient = new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_1__["Ingredient"](value.name, value.weight);
        if (this.editMode === true) {
            this.plService.updateIngredient(this.editNumber, newIngredient);
        }
        else {
            this.plService.addIngredient(newIngredient);
        }
        this.editMode = false;
        this.plForm.reset();
    };
    PreparationEditComponent.prototype.onClear = function () {
        this.plForm.reset();
        this.editMode = false;
    };
    PreparationEditComponent.prototype.onDelete = function () {
        this.plService.deleteIngredient(this.editNumber);
        this.onClear();
    };
    PreparationEditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return PreparationEditComponent;
}());



/***/ }),

/***/ "./src/app/preparation-list/preparation-list.component.ngfactory.js":
/*!**************************************************************************!*\
  !*** ./src/app/preparation-list/preparation-list.component.ngfactory.js ***!
  \**************************************************************************/
/*! exports provided: RenderType_PreparationListComponent, View_PreparationListComponent_0, View_PreparationListComponent_Host_0, PreparationListComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_PreparationListComponent", function() { return RenderType_PreparationListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PreparationListComponent_0", function() { return View_PreparationListComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PreparationListComponent_Host_0", function() { return View_PreparationListComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreparationListComponentNgFactory", function() { return PreparationListComponentNgFactory; });
/* harmony import */ var _preparation_list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preparation-list.component.scss.shim.ngstyle */ "./src/app/preparation-list/preparation-list.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/material/list/typings/index.ngfactory */ "./node_modules/@angular/material/list/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _preparation_edit_preparation_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preparation-edit/preparation-edit.component.ngfactory */ "./src/app/preparation-list/preparation-edit/preparation-edit.component.ngfactory.js");
/* harmony import */ var _preparation_edit_preparation_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./preparation-edit/preparation-edit.component */ "./src/app/preparation-list/preparation-edit/preparation-edit.component.ts");
/* harmony import */ var _preparation_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preparation-list.service */ "./src/app/preparation-list/preparation-list.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _preparation_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preparation-list.component */ "./src/app/preparation-list/preparation-list.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_PreparationListComponent = [_preparation_list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_PreparationListComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_PreparationListComponent, data: {} });

function View_PreparationListComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "mat-list-item", [["class", "mat-list-item"], ["id", "list-item-style"]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onEditItem(_v.context.index) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatListItem_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatListItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 1228800, null, 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatNavList"]], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatList"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { _lines: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, { _avatar: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 3, { _icon: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, 2, [" ", " (", ") "]))], null, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._icon); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._icon); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _v.context.$implicit.name; var currVal_3 = _v.context.$implicit.weight; _ck(_v, 5, 0, currVal_2, currVal_3); }); }
function View_PreparationListComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["id", "preparation-list-style"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-preparation-edit", [], null, null, null, _preparation_edit_preparation_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_PreparationEditComponent_0"], _preparation_edit_preparation_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_PreparationEditComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 245760, null, 0, _preparation_edit_preparation_edit_component__WEBPACK_IMPORTED_MODULE_5__["PreparationEditComponent"], [_preparation_list_service__WEBPACK_IMPORTED_MODULE_6__["PreparationListService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 3, "mat-nav-list", [["class", "mat-nav-list mat-list-base"], ["role", "navigation"]], null, null, null, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatNavList_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatNavList"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 704512, null, 0, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatNavList"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_PreparationListComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; _ck(_v, 2, 0); var currVal_0 = _co.ingredients; _ck(_v, 6, 0, currVal_0); }, null); }
function View_PreparationListComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-preparation-list", [], null, null, null, View_PreparationListComponent_0, RenderType_PreparationListComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _preparation_list_component__WEBPACK_IMPORTED_MODULE_8__["PreparationListComponent"], [_preparation_list_service__WEBPACK_IMPORTED_MODULE_6__["PreparationListService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PreparationListComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-preparation-list", _preparation_list_component__WEBPACK_IMPORTED_MODULE_8__["PreparationListComponent"], View_PreparationListComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/preparation-list/preparation-list.component.scss.shim.ngstyle.js":
/*!**********************************************************************************!*\
  !*** ./src/app/preparation-list/preparation-list.component.scss.shim.ngstyle.js ***!
  \**********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["#list-item-style[_ngcontent-%COMP%] {\n  width: 150px;\n  background-color: rgba(202, 143, 17, 0.32);\n  border-style: ridge; }\n\n#preparation-list-style[_ngcontent-%COMP%] {\n  padding-top: 50px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9KaW5ndGluZy9Eb2N1bWVudHMvVWRlbXkvQW5ndWxhciBQcm9qZWN0IDIwMTkvUGxhbm5pbmctWW91ci1NZWFsL3NyYy9hcHAvcHJlcGFyYXRpb24tbGlzdC9wcmVwYXJhdGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLDBDQUF5QztFQUN6QyxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ByZXBhcmF0aW9uLWxpc3QvcHJlcGFyYXRpb24tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsaXN0LWl0ZW0tc3R5bGUge1xuICB3aWR0aDogMTUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgyMDIsIDE0MywgMTcsIDAuMzIpO1xuICBib3JkZXItc3R5bGU6IHJpZGdlO1xufVxuXG4jcHJlcGFyYXRpb24tbGlzdC1zdHlsZSB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufSJdfQ== */"];



/***/ }),

/***/ "./src/app/preparation-list/preparation-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/preparation-list/preparation-list.component.ts ***!
  \****************************************************************/
/*! exports provided: PreparationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreparationListComponent", function() { return PreparationListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _preparation_list_preparation_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../preparation-list/preparation-list.service */ "./src/app/preparation-list/preparation-list.service.ts");


var PreparationListComponent = /** @class */ (function () {
    function PreparationListComponent(plService) {
        this.plService = plService;
    }
    PreparationListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ingredients = this.plService.getIngredients();
        this.subscription = this.plService.ingredientsChanged
            .subscribe(function (ingredients) {
            _this.ingredients = ingredients;
        });
    };
    PreparationListComponent.prototype.onEditItem = function (index) {
        this.plService.startedEditing.next(index);
    };
    PreparationListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return PreparationListComponent;
}());



/***/ }),

/***/ "./src/app/preparation-list/preparation-list.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/preparation-list/preparation-list.module.ts ***!
  \*************************************************************/
/*! exports provided: PreparationListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreparationListModule", function() { return PreparationListModule; });
var PreparationListModule = /** @class */ (function () {
    function PreparationListModule() {
    }
    return PreparationListModule;
}());



/***/ }),

/***/ "./src/app/preparation-list/preparation-list.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/preparation-list/preparation-list.service.ts ***!
  \**************************************************************/
/*! exports provided: PreparationListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreparationListService", function() { return PreparationListService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");


var PreparationListService = /** @class */ (function () {
    function PreparationListService() {
        this.ingredientsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.startedEditing = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.ingredients = [
            new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_1__["Ingredient"]('Apple', 5),
            new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_1__["Ingredient"]('Banana', 3),
        ];
    }
    PreparationListService.prototype.getIngredient = function (index) {
        return this.ingredients[index];
    };
    PreparationListService.prototype.getIngredients = function () {
        return this.ingredients.slice();
    };
    PreparationListService.prototype.addIngredient = function (ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    PreparationListService.prototype.addIngredients = function (ingredients) {
        var _a;
        (_a = this.ingredients).push.apply(_a, ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    PreparationListService.prototype.updateIngredient = function (index, newIngredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    PreparationListService.prototype.deleteIngredient = function (index) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    return PreparationListService;
}());



/***/ }),

/***/ "./src/app/shared/data-storage.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/data-storage.service.ts ***!
  \************************************************/
/*! exports provided: DataStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStorageService", function() { return DataStorageService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _dishes_dish_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dishes/dish.service */ "./src/app/dishes/dish.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _contact_us_contact_us_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contact-us/contact-us.service */ "./src/app/contact-us/contact-us.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");





var DataStorageService = /** @class */ (function () {
    function DataStorageService(httpClient, dishService, authService, cService) {
        this.httpClient = httpClient;
        this.dishService = dishService;
        this.authService = authService;
        this.cService = cService;
    }
    DataStorageService.prototype.storeDishes = function () {
        var token = this.authService.getToken();
        return this.httpClient.put('https://meal-plan-application.firebaseio.com/dishes.json?auth=' + token, this.dishService.getDishes());
    };
    DataStorageService.prototype.getDishes = function () {
        var _this = this;
        var token = this.authService.getToken();
        this.httpClient.get('https://meal-plan-application.firebaseio.com/dishes.json?auth=' + token).map(function (dishes) {
            for (var _i = 0, dishes_1 = dishes; _i < dishes_1.length; _i++) {
                var dish = dishes_1[_i];
                if (!dish.ingredients) {
                    dish.ingredients = [];
                }
            }
            return dishes;
        }).subscribe(function (dishes) {
            _this.dishService.setDishes(dishes);
        });
    };
    DataStorageService.prototype.storeContactInfo = function () {
        var token = this.authService.getToken();
        return this.httpClient.put('https://meal-plan-application.firebaseio.com/messages.json?auth=' + token, JSON.stringify(this.cService.getContactInfo()));
    };
    DataStorageService.prototype.fetchContactInfo = function () {
        var _this = this;
        var token = this.authService.getToken();
        this.authService.getToken();
        this.httpClient.get('https://meal-plan-application.firebaseio.com/messages.json?auth=' + token, {
            observe: 'body',
            responseType: 'json',
        }).subscribe(function (contact) {
            _this.cService.addContactInfo(contact);
        });
    };
    return DataStorageService;
}());



/***/ }),

/***/ "./src/app/shared/ingredient.model.ts":
/*!********************************************!*\
  !*** ./src/app/shared/ingredient.model.ts ***!
  \********************************************/
/*! exports provided: Ingredient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ingredient", function() { return Ingredient; });
var Ingredient = /** @class */ (function () {
    function Ingredient(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    return Ingredient;
}());



/***/ }),

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    return MaterialModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_common_locales_zh_Hans__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/locales/zh-Hans */ "./node_modules/@angular/common/locales/zh-Hans.js");
/* harmony import */ var _angular_common_locales_zh_Hans__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh_Hans__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module.ngfactory */ "./src/app/app.module.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");


_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"](_angular_common_locales_zh_Hans__WEBPACK_IMPORTED_MODULE_0___default.a);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_4__["AppModuleNgFactory"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Jingting/Documents/Udemy/Angular Project 2019/Planning-Your-Meal/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map