(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'myStore';
    }
    ngOnInit() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 24, vars: 0, consts: [[1, "navbar", "navbar-fixed-top", "navbar-expand-lg", "navbar-light", "bg-dark"], [1, "container"], ["routerLink", "/", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], ["role", "presentation", 1, "nav-item", "active"], ["routerLink", "/", 1, "nav-link"], [1, "sr-only"], [1, "nav-item", "active"], ["href", "#", 1, "nav-link"], ["routerLink", "/cart", 1, "nav-link"], [1, "fa", "fa-shopping-cart"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Online store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".navbar-brand[_ngcontent-%COMP%] {\r\n    font-family: 'PT Sans', sans-serif;\r\n    color: #46514B;\r\n    text-transform: uppercase;\r\n    font-size: 21px;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n    min-height: 6vh;\r\n}\r\n\r\n.bg-dark[_ngcontent-%COMP%] {\r\n    background-color: #7a767b26!important;\r\n}\r\n\r\na.nav-link[_ngcontent-%COMP%] {\r\n    color: #46514B;\r\n    letter-spacing: 1.2px;\r\n    font-size: 17px;\r\n}\r\n\r\n.badge[_ngcontent-%COMP%] {\r\n    background-color: #6394F8;\r\n    position: absolute;\r\n    top: 11%;\r\n    left: 78.3%;\r\n    border-radius: 10px;\r\n    color: white;\r\n    display: inline-block;\r\n    font-size: 12px;\r\n    line-height: 1;\r\n    padding: 3px 7px;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    white-space: nowrap;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    display: block;\r\n    width: 0;\r\n    height: 1px;\r\n    background: rgb(34, 29, 29);\r\n    transition: width .3s;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%]:hover::after{\r\n    width: 100%;\r\n    transition: width .3s;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQ0FBa0M7SUFDbEMsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsUUFBUTtJQUNSLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1icmFuZCB7XHJcbiAgICBmb250LWZhbWlseTogJ1BUIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICM0NjUxNEI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDZ2aDtcclxufVxyXG5cclxuLmJnLWRhcmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdhNzY3YjI2IWltcG9ydGFudDtcclxufVxyXG5cclxuYS5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogIzQ2NTE0QjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxLjJweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLmJhZGdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2Mzk0Rjg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDExJTtcclxuICAgIGxlZnQ6IDc4LjMlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgcGFkZGluZzogM3B4IDdweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4ubmF2LWxpbms6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDM0LCAyOSwgMjkpO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggLjNzO1xyXG59XHJcblxyXG4ubmF2LWxpbms6aG92ZXI6OmFmdGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAuM3M7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");










const appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'product/:id', component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_7__["CartComponent"] }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(appRoutes),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailComponent"],
        _cart_cart_component__WEBPACK_IMPORTED_MODULE_7__["CartComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                    _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailComponent"],
                    _cart_cart_component__WEBPACK_IMPORTED_MODULE_7__["CartComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(appRoutes),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products.service */ "./src/app/products.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function CartComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_tr_13_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const prod_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.deleteProduct(prod_r1.id, prod_r1.price); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prod_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 3, prod_r1.title, 0, 20));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](prod_r1.price);
} }
const _c0 = function () { return ["/"]; };
class CartComponent {
    constructor(router, route, productService) {
        this.router = router;
        this.route = route;
        this.productService = productService;
        this.products = [];
        this.total_cost = 0;
    }
    ngOnInit() {
        this.products = this.productService.getCart();
        this.products.forEach(prod => {
            this.total_cost += prod.price;
            console.log(this.total_cost);
        });
    }
    deleteProduct(id, cost) {
        this.productService.deleteProd(id);
        this.products = this.productService.cartList;
        this.total_cost -= cost;
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 23, vars: 4, consts: [[1, "container"], [1, "table", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "addCart", "btn", "btn-light", 3, "routerLink"], ["scope", "row"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "far", "fa-trash-alt"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CartComponent_tr_13_Template, 11, 7, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Total:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Shop More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.total_cost.toFixed(2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"]], styles: [".table[_ngcontent-%COMP%] {\r\n    margin-top: 135px;\r\n}\r\n\r\n.btn-light[_ngcontent-%COMP%] {\r\n    background: #dea7a7 ;\r\n    border: none ;\r\n    box-shadow: none ;\r\n    padding: 0.375rem 1.75rem ;\r\n    border-radius: 1.25rem ;\r\n    margin-top: 64px;\r\n    text-transform: uppercase;\r\n    box-shadow: none;\r\n    margin-left: 500px;\r\n}\r\n\r\n.btn-light[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n    color: rgb(117, 25, 25);\r\n    font-weight: 500;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUge1xyXG4gICAgbWFyZ2luLXRvcDogMTM1cHg7XHJcbn1cclxuXHJcbi5idG4tbGlnaHQge1xyXG4gICAgYmFja2dyb3VuZDogI2RlYTdhNyA7XHJcbiAgICBib3JkZXI6IG5vbmUgO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSA7XHJcbiAgICBwYWRkaW5nOiAwLjM3NXJlbSAxLjc1cmVtIDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEuMjVyZW0gO1xyXG4gICAgbWFyZ2luLXRvcDogNjRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwMHB4O1xyXG59XHJcblxyXG4uYnRuLWxpZ2h0OmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoMTE3LCAyNSwgMjUpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart',
                templateUrl: './cart.component.html',
                styleUrls: ['./cart.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products.service */ "./src/app/products.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






function HomeComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/product", a1]; };
function HomeComponent_div_57_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Quick View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prod_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", prod_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", prod_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, prod_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 5, prod_r4.title, 0, 20), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", prod_r4.price, "");
} }
function HomeComponent_div_57_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_57_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.loadMore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "load more...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r3.hidden_type);
} }
function HomeComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_57_div_2_Template, 12, 11, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_57_a_3_Template, 2, 1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.productsList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.limit <= 15);
} }
class HomeComponent {
    constructor(http, productService) {
        this.http = http;
        this.productService = productService;
        this.limit = 5;
        this.productsList = [];
        this.hidden_type = true;
        this.isLoader = false;
    }
    ngOnInit() {
        this.isLoader = true;
        this.limit = 5;
        this.productService.getLimitedProducts(this.limit).subscribe(response => {
            let len = Object.keys(response).length;
            for (var i = 0; i < len; i++) {
                this.productsList.push(response[i]);
            }
            this.hidden_type = false;
            this.isLoader = false;
        });
    }
    loadMore() {
        this.isLoader = true;
        this.hidden_type = true;
        this.limit += 5;
        this.productsList = [];
        this.productService.getLimitedProducts(this.limit).subscribe(response => {
            let len = Object.keys(response).length;
            for (var i = 0; i < len; i++) {
                this.productsList.push(response[i]);
            }
            this.hidden_type = false;
            this.isLoader = false;
        });
    }
    getCategoryProducts(category) {
        this.isLoader = true;
        this.hidden_type = true;
        this.productsList = [];
        this.productService.getCategoryProducts(category).subscribe(response => {
            let len = Object.keys(response).length;
            for (var i = 0; i < len; i++) {
                this.productsList.push(response[i]);
            }
            this.isLoader = false;
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 59, vars: 2, consts: [["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "2"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "3"], [1, "carousel-inner"], [1, "carousel-item", "active"], [1, "carousel-text"], [1, "carousel-item"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "container"], [1, "nav", "panel"], [1, "nav-item", "active"], ["href", "#", 1, "nav-link", 3, "click"], ["class", "lds-default", 4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "bottom"], [1, "lds-default"], [1, "row"], ["class", "col-md-3 img_content", 4, "ngFor", "ngForOf"], ["type", "button", "class", "loadmore", 3, "hidden", "click", 4, "ngIf"], [1, "col-md-3", "img_content"], [1, "product-top"], [3, "src", "alt"], [1, "overlay"], ["type", "button", 1, "btn", "btn-light", 3, "routerLink"], [1, "product-bottom"], ["type", "button", 1, "loadmore", 3, "hidden", "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "First slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nostrum consequuntur vel recusandae commodi, voluptates quis, repellendus veritatis minima labore itaque officiis laborum, atque sequi adipisci iure nemo dolore ab.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Second slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nostrum consequuntur vel recusandae commodi, voluptates quis, repellendus veritatis minima labore itaque officiis laborum, atque sequi adipisci iure nemo dolore ab.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Third slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nostrum consequuntur vel recusandae commodi, voluptates quis, repellendus veritatis minima labore itaque officiis laborum, atque sequi adipisci iure nemo dolore ab.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Fourth slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nostrum consequuntur vel recusandae commodi, voluptates quis, repellendus veritatis minima labore itaque officiis laborum, atque sequi adipisci iure nemo dolore ab.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "nav", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_42_listener() { return ctx.loadMore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "All Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_45_listener() { return ctx.getCategoryProducts("women clothing"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Women");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_48_listener() { return ctx.getCategoryProducts("men clothing"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Men");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_51_listener() { return ctx.getCategoryProducts("jewelery"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Jewelery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_54_listener() { return ctx.getCategoryProducts("electronics"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Electronics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, HomeComponent_div_56_Template, 13, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, HomeComponent_div_57_Template, 4, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "div", 21);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoader);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"]], styles: ["a.nav-link[_ngcontent-%COMP%] {\r\n    color: #46514B;\r\n    letter-spacing: 1.2px;\r\n    font-size: 17px;\r\n}\r\n\r\n.carousel-text[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    padding: 172px;\r\n    margin-right: 297px;\r\n    margin-left: 26px;\r\n}\r\n\r\n.carousel-item[_ngcontent-%COMP%] {\r\n    height: 32rem;\r\n    background: rgb(155, 94, 94);\r\n    color: white;\r\n    \r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    display: block;\r\n    width: 0;\r\n    height: 1px;\r\n    background: rgb(34, 29, 29);\r\n    transition: width .3s;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%]:hover::after {\r\n    width: 100%;\r\n    transition: width .3s;\r\n}\r\n\r\n.panel[_ngcontent-%COMP%] {\r\n    margin: 13px;\r\n    margin-bottom: 22px;\r\n}\r\n\r\n.img-cont[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    border:2px blueviolet  !important;\r\n}\r\n\r\n.img_content[_ngcontent-%COMP%] {\r\n    \r\n    border:rgb(34, 29, 29)\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    height: 295px;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    \r\n    width: 200px;\r\n    font-size: 24px;\r\n    padding: 5px;\r\n    height:   40px;\r\n}\r\n\r\n.product-bottom[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    \r\n}\r\n\r\n.product-bottom[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]  {\r\n    margin-left: 17px;\r\n    font-size: 18px;\r\n    font-family: 'Poppins-Regular';\r\n    font-weight: lighter;\r\n    color: #AB6681;\r\n    line-height: 1.466667;\r\n}\r\n\r\n.product-bottom[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    font-family: 'Poppins-Regular';\r\n    font-size: 14px;\r\n    line-height: 1.466667;\r\n    letter-spacing: 1px;\r\n    margin-left: 17px;\r\n}\r\n\r\n.overlay[_ngcontent-%COMP%] {\r\n    display: block;\r\n    opacity: 0;\r\n    position: absolute;\r\n    top: 65%;\r\n    margin-left: 60px;\r\n    width: 70px;\r\n    transition: 0.6s;\r\n}\r\n\r\n.product-top[_ngcontent-%COMP%] {\r\n    width: 278px;\r\n    text-align: center;\r\n}\r\n\r\n.product-top[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    top: 55%;\r\n    transition: 0.6s;\r\n}\r\n\r\n.overlay[_ngcontent-%COMP%]   .btn-light[_ngcontent-%COMP%]:hover {\r\n\r\n    background-color: #dea7a7  !important;\r\n    border-color: #dea7a7  !important;\r\n    color: rgb(117, 25, 25) !important;\r\n    font-weight: 500;\r\n    \r\n\r\n}\r\n\r\n.overlay[_ngcontent-%COMP%]   .btn-light[_ngcontent-%COMP%] {\r\n    background: #dea7a7 !important;\r\n    border: none !important;\r\n    box-shadow: none !important;\r\n    padding: 0.375rem 1.75rem !important;\r\n    border-radius: 1.25rem !important;\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n    margin-top: 47px;\r\n}\r\n\r\n.loadmore[_ngcontent-%COMP%] {\r\n    background: #dea7a7 ;\r\n    border: none ;\r\n    box-shadow: none ;\r\n    padding: 0.375rem 1.75rem ;\r\n    border-radius: 1.25rem ;\r\n}\r\n\r\n.loadmore[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n    color: rgb(117, 25, 25);\r\n    font-weight: 500;\r\n}\r\n\r\n.bottom[_ngcontent-%COMP%] {\r\n    margin-bottom: 80px\r\n}\r\n\r\n.lds-default[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    position: relative;\r\n    margin-left: 919px;\r\n    margin-top: 50px;\r\n    width: 80px;\r\n    height: 80px;\r\n  }\r\n\r\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 6px;\r\n    height: 6px;\r\n    background: #B0455F;\r\n    border-radius: 50%;\r\n    -webkit-animation: lds-default 1.2s linear infinite;\r\n            animation: lds-default 1.2s linear infinite;\r\n  }\r\n\r\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\r\n    -webkit-animation-delay: 0s;\r\n            animation-delay: 0s;\r\n    top: 37px;\r\n    left: 66px;\r\n  }\r\n\r\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\r\n    -webkit-animation-delay: -0.1s;\r\n            animation-delay: -0.1s;\r\n    top: 22px;\r\n    left: 62px;\r\n  }\r\n\r\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\r\n    -webkit-animation-delay: -0.2s;\r\n            animation-delay: -0.2s;\r\n    top: 11px;\r\n    left: 52px;\r\n  }\r\n\r\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\r\n    -webkit-animation-delay: -0.3s;\r\n            animation-delay: -0.3s;\r\n    top: 7px;\r\n    left: 37px;\r\n  }\r\n\r\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5) {\r\n    -webkit-animation-delay: -0.4s;\r\n            animation-delay: -0.4s;\r\n    top: 11px;\r\n    left: 22px;\r\n  }\r\n\r\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6) {\r\n    -webkit-animation-delay: -0.5s;\r\n            animation-delay: -0.5s;\r\n    top: 22px;\r\n    left: 11px;\r\n  }\r\n\r\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7) {\r\n    -webkit-animation-delay: -0.6s;\r\n            animation-delay: -0.6s;\r\n    top: 37px;\r\n    left: 7px;\r\n  }\r\n\r\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8) {\r\n    -webkit-animation-delay: -0.7s;\r\n            animation-delay: -0.7s;\r\n    top: 52px;\r\n    left: 11px;\r\n  }\r\n\r\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(9) {\r\n    -webkit-animation-delay: -0.8s;\r\n            animation-delay: -0.8s;\r\n    top: 62px;\r\n    left: 22px;\r\n  }\r\n\r\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(10) {\r\n    -webkit-animation-delay: -0.9s;\r\n            animation-delay: -0.9s;\r\n    top: 66px;\r\n    left: 37px;\r\n  }\r\n\r\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(11) {\r\n    -webkit-animation-delay: -1s;\r\n            animation-delay: -1s;\r\n    top: 62px;\r\n    left: 52px;\r\n  }\r\n\r\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(12) {\r\n    -webkit-animation-delay: -1.1s;\r\n            animation-delay: -1.1s;\r\n    top: 52px;\r\n    left: 62px;\r\n  }\r\n\r\n@-webkit-keyframes lds-default {\r\n    0%, 20%, 80%, 100% {\r\n      transform: scale(1);\r\n    }\r\n    50% {\r\n      transform: scale(1.5);\r\n    }\r\n  }\r\n\r\n@keyframes lds-default {\r\n    0%, 20%, 80%, 100% {\r\n      transform: scale(1);\r\n    }\r\n    50% {\r\n      transform: scale(1.5);\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7R0FhRzs7QUFFSDtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFJQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQztJQUNHLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsUUFBUTtJQUNSLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtBQUN6Qjs7QUFJQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCO0FBQ0o7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsUUFBUTtJQUNSLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxxQ0FBcUM7SUFDckMsaUNBQWlDO0lBQ2pDLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsdUJBQXVCOztBQUUzQjs7QUFDQTtJQUNJLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLG9DQUFvQztJQUNwQyxpQ0FBaUM7QUFDckM7O0FBR0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtBQUNKOztBQUdBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1EQUEyQztZQUEzQywyQ0FBMkM7RUFDN0M7O0FBQ0E7SUFDRSwyQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxVQUFVO0VBQ1o7O0FBQ0E7SUFDRSw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0VBQ1o7O0FBQ0E7SUFDRSw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0VBQ1o7O0FBQ0E7SUFDRSw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixVQUFVO0VBQ1o7O0FBQ0E7SUFDRSw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0VBQ1o7O0FBQ0E7SUFDRSw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0VBQ1o7O0FBQ0E7SUFDRSw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxTQUFTO0VBQ1g7O0FBQ0E7SUFDRSw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0VBQ1o7O0FBQ0E7SUFDRSw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0VBQ1o7O0FBQ0E7SUFDRSw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0VBQ1o7O0FBQ0E7SUFDRSw0QkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLFNBQVM7SUFDVCxVQUFVO0VBQ1o7O0FBQ0E7SUFDRSw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0VBQ1o7O0FBQ0E7SUFDRTtNQUNFLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UscUJBQXFCO0lBQ3ZCO0VBQ0Y7O0FBUEE7SUFDRTtNQUNFLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UscUJBQXFCO0lBQ3ZCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5uYXZiYXItYnJhbmQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdQVCBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjNDY1MTRCO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgICBtaW4taGVpZ2h0OiA2dmg7XHJcbn1cclxuXHJcbi5iZy1kYXJrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3YTc2N2IyNiFpbXBvcnRhbnQ7XHJcbn0gKi9cclxuXHJcbmEubmF2LWxpbmsge1xyXG4gICAgY29sb3I6ICM0NjUxNEI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmNhcm91c2VsLXRleHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgcGFkZGluZzogMTcycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI5N3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI2cHg7XHJcbn1cclxuXHJcbiAuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICBoZWlnaHQ6IDMycmVtO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE1NSwgOTQsIDk0KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxufVxyXG5cclxuLm5hdi1saW5rOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigzNCwgMjksIDI5KTtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIC4zcztcclxufVxyXG5cclxuLm5hdi1saW5rOmhvdmVyOjphZnRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIC4zcztcclxufVxyXG5cclxuXHJcblxyXG4ucGFuZWwge1xyXG4gICAgbWFyZ2luOiAxM3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjJweDtcclxufVxyXG5cclxuLmltZy1jb250IHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGJvcmRlcjoycHggYmx1ZXZpb2xldCAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmltZ19jb250ZW50IHtcclxuICAgIC8qIGJhY2tncm91bmQ6IHJlZDsgKi9cclxuICAgIGJvcmRlcjpyZ2IoMzQsIDI5LCAyOSlcclxufVxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogMjk1cHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIgaDIge1xyXG4gICAgLyogY29sb3I6IHJnYig4MiwgMzMsIDMzKTsgKi9cclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGhlaWdodDogICA0MHB4O1xyXG59XHJcbi5wcm9kdWN0LWJvdHRvbSB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgLyogcGFkZGluZy10b3A6IDBweCAqL1xyXG59XHJcblxyXG4ucHJvZHVjdC1ib3R0b20gaDMgIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxN3B4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zLVJlZ3VsYXInO1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBjb2xvcjogI0FCNjY4MTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ2NjY2NztcclxufVxyXG5cclxuLnByb2R1Y3QtYm90dG9tIGg1IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucy1SZWd1bGFyJztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ2NjY2NztcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTdweDtcclxufSBcclxuLm92ZXJsYXkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA2NSU7XHJcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC42cztcclxufVxyXG5cclxuLnByb2R1Y3QtdG9wIHtcclxuICAgIHdpZHRoOiAyNzhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2R1Y3QtdG9wOmhvdmVyIC5vdmVybGF5IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0b3A6IDU1JTtcclxuICAgIHRyYW5zaXRpb246IDAuNnM7XHJcbn1cclxuXHJcbi5vdmVybGF5IC5idG4tbGlnaHQ6aG92ZXIge1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWE3YTcgICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNkZWE3YTcgICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogcmdiKDExNywgMjUsIDI1KSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xyXG5cclxufVxyXG4ub3ZlcmxheSAuYnRuLWxpZ2h0IHtcclxuICAgIGJhY2tncm91bmQ6ICNkZWE3YTcgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMC4zNzVyZW0gMS43NXJlbSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMS4yNXJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLnJvdyB7XHJcbiAgICBtYXJnaW4tdG9wOiA0N3B4O1xyXG59XHJcblxyXG4ubG9hZG1vcmUge1xyXG4gICAgYmFja2dyb3VuZDogI2RlYTdhNyA7XHJcbiAgICBib3JkZXI6IG5vbmUgO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSA7XHJcbiAgICBwYWRkaW5nOiAwLjM3NXJlbSAxLjc1cmVtIDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEuMjVyZW0gO1xyXG59XHJcblxyXG4ubG9hZG1vcmU6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IHJnYigxMTcsIDI1LCAyNSk7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uYm90dG9tIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDgwcHhcclxufVxyXG5cclxuXHJcbi5sZHMtZGVmYXVsdCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tbGVmdDogOTE5cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgfVxyXG4gIC5sZHMtZGVmYXVsdCBkaXYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDZweDtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0IwNDU1RjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGFuaW1hdGlvbjogbGRzLWRlZmF1bHQgMS4ycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG4gIC5sZHMtZGVmYXVsdCBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMHM7XHJcbiAgICB0b3A6IDM3cHg7XHJcbiAgICBsZWZ0OiA2NnB4O1xyXG4gIH1cclxuICAubGRzLWRlZmF1bHQgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjFzO1xyXG4gICAgdG9wOiAyMnB4O1xyXG4gICAgbGVmdDogNjJweDtcclxuICB9XHJcbiAgLmxkcy1kZWZhdWx0IGRpdjpudGgtY2hpbGQoMykge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4ycztcclxuICAgIHRvcDogMTFweDtcclxuICAgIGxlZnQ6IDUycHg7XHJcbiAgfVxyXG4gIC5sZHMtZGVmYXVsdCBkaXY6bnRoLWNoaWxkKDQpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuM3M7XHJcbiAgICB0b3A6IDdweDtcclxuICAgIGxlZnQ6IDM3cHg7XHJcbiAgfVxyXG4gIC5sZHMtZGVmYXVsdCBkaXY6bnRoLWNoaWxkKDUpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNHM7XHJcbiAgICB0b3A6IDExcHg7XHJcbiAgICBsZWZ0OiAyMnB4O1xyXG4gIH1cclxuICAubGRzLWRlZmF1bHQgZGl2Om50aC1jaGlsZCg2KSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xyXG4gICAgdG9wOiAyMnB4O1xyXG4gICAgbGVmdDogMTFweDtcclxuICB9XHJcbiAgLmxkcy1kZWZhdWx0IGRpdjpudGgtY2hpbGQoNykge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC42cztcclxuICAgIHRvcDogMzdweDtcclxuICAgIGxlZnQ6IDdweDtcclxuICB9XHJcbiAgLmxkcy1kZWZhdWx0IGRpdjpudGgtY2hpbGQoOCkge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC43cztcclxuICAgIHRvcDogNTJweDtcclxuICAgIGxlZnQ6IDExcHg7XHJcbiAgfVxyXG4gIC5sZHMtZGVmYXVsdCBkaXY6bnRoLWNoaWxkKDkpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7XHJcbiAgICB0b3A6IDYycHg7XHJcbiAgICBsZWZ0OiAyMnB4O1xyXG4gIH1cclxuICAubGRzLWRlZmF1bHQgZGl2Om50aC1jaGlsZCgxMCkge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcclxuICAgIHRvcDogNjZweDtcclxuICAgIGxlZnQ6IDM3cHg7XHJcbiAgfVxyXG4gIC5sZHMtZGVmYXVsdCBkaXY6bnRoLWNoaWxkKDExKSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xcztcclxuICAgIHRvcDogNjJweDtcclxuICAgIGxlZnQ6IDUycHg7XHJcbiAgfVxyXG4gIC5sZHMtZGVmYXVsdCBkaXY6bnRoLWNoaWxkKDEyKSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xLjFzO1xyXG4gICAgdG9wOiA1MnB4O1xyXG4gICAgbGVmdDogNjJweDtcclxuICB9XHJcbiAgQGtleWZyYW1lcyBsZHMtZGVmYXVsdCB7XHJcbiAgICAwJSwgMjAlLCA4MCUsIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/product-detail/product-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products.service */ "./src/app/products.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ProductDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailComponent_div_1_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.sendTocart(ctx_r2.product.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.product.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r1.product.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](7, 5, ctx_r1.product.title, 0, 20));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.product.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx_r1.product.price, "");
} }
class ProductDetailComponent {
    constructor(router, route, productService) {
        this.router = router;
        this.route = route;
        this.productService = productService;
        this.isLoader = false;
    }
    ngOnInit() {
        this.isLoader = true;
        this.id = +this.route.snapshot.params['id'];
        this.route.params.subscribe((params) => {
            this.id = +params['id'];
        });
        this.productService.getProduct(this.id).subscribe(response => {
            this.product = response;
            this.isLoader = false;
        });
    }
    sendTocart(id) {
        this.productService.addToCart(id);
    }
}
ProductDetailComponent.ɵfac = function ProductDetailComponent_Factory(t) { return new (t || ProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"])); };
ProductDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDetailComponent, selectors: [["app-product-detail"]], decls: 2, vars: 2, consts: [["class", "lds-default", 4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "lds-default"], [1, "container"], [1, "row"], [1, "col-md-5"], [3, "src", "alt"], [1, "col-md-7"], ["type", "button", 1, "addCart", "btn", "btn-light", 3, "click"]], template: function ProductDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductDetailComponent_div_0_Template, 13, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductDetailComponent_div_1_Template, 14, 9, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoader);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"]], styles: ["img[_ngcontent-%COMP%] {\r\n    width: 71%;\r\n    height: 406px;\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n    margin-top: 89px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    font-size: 29px;\r\n    font-family: 'Poppins-regular';\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n    font-size: 17px;\r\n    font-weight: 350;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    margin-top: 21px;\r\n    font-size: 26px;\r\n}\r\n\r\n.btn-light[_ngcontent-%COMP%] {\r\n    background: #dea7a7 ;\r\n    border: none ;\r\n    box-shadow: none ;\r\n    padding: 0.375rem 1.75rem ;\r\n    border-radius: 1.25rem ;\r\n    margin-top: 64px;\r\n    text-transform: uppercase;\r\n    box-shadow: none;\r\n}\r\n\r\n.btn-light[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n    color: rgb(117, 25, 25);\r\n    font-weight: 500;\r\n}\r\n\r\n.lds-default[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    position: relative;\r\n    margin-left: 919px;\r\n    margin-top: 50px;\r\n    width: 80px;\r\n    height: 80px;\r\n  }\r\n\r\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 6px;\r\n    height: 6px;\r\n    background: #B0455F;\r\n    border-radius: 50%;\r\n    -webkit-animation: lds-default 1.2s linear infinite;\r\n            animation: lds-default 1.2s linear infinite;\r\n  }\r\n\r\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\r\n    -webkit-animation-delay: 0s;\r\n            animation-delay: 0s;\r\n    top: 37px;\r\n    left: 66px;\r\n  }\r\n\r\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\r\n    -webkit-animation-delay: -0.1s;\r\n            animation-delay: -0.1s;\r\n    top: 22px;\r\n    left: 62px;\r\n  }\r\n\r\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\r\n    -webkit-animation-delay: -0.2s;\r\n            animation-delay: -0.2s;\r\n    top: 11px;\r\n    left: 52px;\r\n  }\r\n\r\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\r\n    -webkit-animation-delay: -0.3s;\r\n            animation-delay: -0.3s;\r\n    top: 7px;\r\n    left: 37px;\r\n  }\r\n\r\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5) {\r\n    -webkit-animation-delay: -0.4s;\r\n            animation-delay: -0.4s;\r\n    top: 11px;\r\n    left: 22px;\r\n  }\r\n\r\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6) {\r\n    -webkit-animation-delay: -0.5s;\r\n            animation-delay: -0.5s;\r\n    top: 22px;\r\n    left: 11px;\r\n  }\r\n\r\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7) {\r\n    -webkit-animation-delay: -0.6s;\r\n            animation-delay: -0.6s;\r\n    top: 37px;\r\n    left: 7px;\r\n  }\r\n\r\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8) {\r\n    -webkit-animation-delay: -0.7s;\r\n            animation-delay: -0.7s;\r\n    top: 52px;\r\n    left: 11px;\r\n  }\r\n\r\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(9) {\r\n    -webkit-animation-delay: -0.8s;\r\n            animation-delay: -0.8s;\r\n    top: 62px;\r\n    left: 22px;\r\n  }\r\n\r\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(10) {\r\n    -webkit-animation-delay: -0.9s;\r\n            animation-delay: -0.9s;\r\n    top: 66px;\r\n    left: 37px;\r\n  }\r\n\r\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(11) {\r\n    -webkit-animation-delay: -1s;\r\n            animation-delay: -1s;\r\n    top: 62px;\r\n    left: 52px;\r\n  }\r\n\r\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(12) {\r\n    -webkit-animation-delay: -1.1s;\r\n            animation-delay: -1.1s;\r\n    top: 52px;\r\n    left: 62px;\r\n  }\r\n\r\n@-webkit-keyframes lds-default {\r\n    0%, 20%, 80%, 100% {\r\n      transform: scale(1);\r\n    }\r\n    50% {\r\n      transform: scale(1.5);\r\n    }\r\n  }\r\n\r\n@keyframes lds-default {\r\n    0%, 20%, 80%, 100% {\r\n      transform: scale(1);\r\n    }\r\n    50% {\r\n      transform: scale(1.5);\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFHQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtFQUNkOztBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtREFBMkM7WUFBM0MsMkNBQTJDO0VBQzdDOztBQUNBO0lBQ0UsMkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtFQUNaOztBQUNBO0lBQ0UsOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtFQUNaOztBQUNBO0lBQ0UsOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtFQUNaOztBQUNBO0lBQ0UsOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IsVUFBVTtFQUNaOztBQUNBO0lBQ0UsOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtFQUNaOztBQUNBO0lBQ0UsOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtFQUNaOztBQUNBO0lBQ0UsOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsU0FBUztFQUNYOztBQUNBO0lBQ0UsOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtFQUNaOztBQUNBO0lBQ0UsOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtFQUNaOztBQUNBO0lBQ0UsOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtFQUNaOztBQUNBO0lBQ0UsNEJBQW9CO1lBQXBCLG9CQUFvQjtJQUNwQixTQUFTO0lBQ1QsVUFBVTtFQUNaOztBQUNBO0lBQ0UsOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtFQUNaOztBQUNBO0lBQ0U7TUFDRSxtQkFBbUI7SUFDckI7SUFDQTtNQUNFLHFCQUFxQjtJQUN2QjtFQUNGOztBQVBBO0lBQ0U7TUFDRSxtQkFBbUI7SUFDckI7SUFDQTtNQUNFLHFCQUFxQjtJQUN2QjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICB3aWR0aDogNzElO1xyXG4gICAgaGVpZ2h0OiA0MDZweDtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgICBtYXJnaW4tdG9wOiA4OXB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBmb250LXNpemU6IDI5cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMtcmVndWxhcic7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzNTA7XHJcbn1cclxuXHJcblxyXG5oMiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMXB4O1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG59XHJcblxyXG4uYnRuLWxpZ2h0IHtcclxuICAgIGJhY2tncm91bmQ6ICNkZWE3YTcgO1xyXG4gICAgYm9yZGVyOiBub25lIDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgO1xyXG4gICAgcGFkZGluZzogMC4zNzVyZW0gMS43NXJlbSA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxLjI1cmVtIDtcclxuICAgIG1hcmdpbi10b3A6IDY0cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmJ0bi1saWdodDpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogcmdiKDExNywgMjUsIDI1KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcblxyXG4ubGRzLWRlZmF1bHQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDkxOXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gIH1cclxuICAubGRzLWRlZmF1bHQgZGl2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA2cHg7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIGJhY2tncm91bmQ6ICNCMDQ1NUY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBhbmltYXRpb246IGxkcy1kZWZhdWx0IDEuMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIH1cclxuICAubGRzLWRlZmF1bHQgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xyXG4gICAgdG9wOiAzN3B4O1xyXG4gICAgbGVmdDogNjZweDtcclxuICB9XHJcbiAgLmxkcy1kZWZhdWx0IGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xcztcclxuICAgIHRvcDogMjJweDtcclxuICAgIGxlZnQ6IDYycHg7XHJcbiAgfVxyXG4gIC5sZHMtZGVmYXVsdCBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMnM7XHJcbiAgICB0b3A6IDExcHg7XHJcbiAgICBsZWZ0OiA1MnB4O1xyXG4gIH1cclxuICAubGRzLWRlZmF1bHQgZGl2Om50aC1jaGlsZCg0KSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjNzO1xyXG4gICAgdG9wOiA3cHg7XHJcbiAgICBsZWZ0OiAzN3B4O1xyXG4gIH1cclxuICAubGRzLWRlZmF1bHQgZGl2Om50aC1jaGlsZCg1KSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjRzO1xyXG4gICAgdG9wOiAxMXB4O1xyXG4gICAgbGVmdDogMjJweDtcclxuICB9XHJcbiAgLmxkcy1kZWZhdWx0IGRpdjpudGgtY2hpbGQoNikge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcclxuICAgIHRvcDogMjJweDtcclxuICAgIGxlZnQ6IDExcHg7XHJcbiAgfVxyXG4gIC5sZHMtZGVmYXVsdCBkaXY6bnRoLWNoaWxkKDcpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNnM7XHJcbiAgICB0b3A6IDM3cHg7XHJcbiAgICBsZWZ0OiA3cHg7XHJcbiAgfVxyXG4gIC5sZHMtZGVmYXVsdCBkaXY6bnRoLWNoaWxkKDgpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuN3M7XHJcbiAgICB0b3A6IDUycHg7XHJcbiAgICBsZWZ0OiAxMXB4O1xyXG4gIH1cclxuICAubGRzLWRlZmF1bHQgZGl2Om50aC1jaGlsZCg5KSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjhzO1xyXG4gICAgdG9wOiA2MnB4O1xyXG4gICAgbGVmdDogMjJweDtcclxuICB9XHJcbiAgLmxkcy1kZWZhdWx0IGRpdjpudGgtY2hpbGQoMTApIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7XHJcbiAgICB0b3A6IDY2cHg7XHJcbiAgICBsZWZ0OiAzN3B4O1xyXG4gIH1cclxuICAubGRzLWRlZmF1bHQgZGl2Om50aC1jaGlsZCgxMSkge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7XHJcbiAgICB0b3A6IDYycHg7XHJcbiAgICBsZWZ0OiA1MnB4O1xyXG4gIH1cclxuICAubGRzLWRlZmF1bHQgZGl2Om50aC1jaGlsZCgxMikge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcclxuICAgIHRvcDogNTJweDtcclxuICAgIGxlZnQ6IDYycHg7XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgbGRzLWRlZmF1bHQge1xyXG4gICAgMCUsIDIwJSwgODAlLCAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxuICAgIH1cclxuICB9XHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-detail',
                templateUrl: './product-detail.component.html',
                styleUrls: ['./product-detail.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/products.service.ts":
/*!*************************************!*\
  !*** ./src/app/products.service.ts ***!
  \*************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class ProductsService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.productsList = [];
        this.cartList = [];
    }
    getCategoryProducts(category) {
        return this.http.get(`https://fakestoreapi.com/products/category/${category}`);
    }
    getLimitedProducts(limit) {
        return this.http.get(`https://fakestoreapi.com/products?limit=${limit}`);
    }
    getProduct(id) {
        return this.http.get(`https://fakestoreapi.com/products/${id}`);
    }
    addToCart(id) {
        this.getProduct(id).subscribe(response => {
            this.product = response;
            this.cartList.push(this.product);
            this.router.navigate(['/cart']);
        });
    }
    getCart() {
        return this.cartList;
    }
    deleteProd(id) {
        var len = this.cartList.length;
        for (var i = 0; i < len; i++) {
            if (this.cartList[i].id == id) {
                this.cartList.splice(i, 1);
                break;
            }
        }
    }
}
ProductsService.ɵfac = function ProductsService_Factory(t) { return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductsService, factory: ProductsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\myStore\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map