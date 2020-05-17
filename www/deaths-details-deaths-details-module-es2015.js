(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deaths-details-deaths-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deaths-details/deaths-details.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deaths-details/deaths-details.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar color=\"success\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaulthref=\"/tabs/deaths\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>Deaths Details</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n\t<ion-card *ngIf=\"death\">\n\n\t\t<ion-card-content>\n\t\t\t<h3>Death Count: {{ death.number_of_deaths}} </h3>\n\t\t</ion-card-content>\n\t</ion-card>\n\n\t<ion-card *ngIf=\"death\">\n\t\t<ion-card-content>\n\t\t\t<h3>Death Deceased: {{ death.death}} </h3>\n\t\t</ion-card-content>\n\t</ion-card>\n\n\t<ion-card *ngIf=\"death\">\n\t\t<ion-card-content>\n\t\t\t<h3>Death Cause: {{ death.cause}} </h3>\n\t\t</ion-card-content>\n\t</ion-card>\n\n\n\t<ion-card *ngIf=\"death\">\n\t\t<ion-card-content>\n\t\t\t<h3>Death season: {{ death.season}} </h3>\n\t\t</ion-card-content>\n\t</ion-card>\n\n\t<ion-card *ngIf=\"death\">\n\t\t<ion-card-content>\n\t\t\t<h3>Death Episode: {{ death.episode}} </h3>\n\t\t</ion-card-content>\n\t</ion-card>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/deaths-details/deaths-details-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/deaths-details/deaths-details-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: DeathsDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeathsDetailsPageRoutingModule", function() { return DeathsDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _deaths_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deaths-details.page */ "./src/app/pages/deaths-details/deaths-details.page.ts");




const routes = [
    {
        path: '',
        component: _deaths_details_page__WEBPACK_IMPORTED_MODULE_3__["DeathsDetailsPage"]
    }
];
let DeathsDetailsPageRoutingModule = class DeathsDetailsPageRoutingModule {
};
DeathsDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DeathsDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/deaths-details/deaths-details.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/deaths-details/deaths-details.module.ts ***!
  \***************************************************************/
/*! exports provided: DeathsDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeathsDetailsPageModule", function() { return DeathsDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _deaths_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deaths-details-routing.module */ "./src/app/pages/deaths-details/deaths-details-routing.module.ts");
/* harmony import */ var _deaths_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deaths-details.page */ "./src/app/pages/deaths-details/deaths-details.page.ts");







let DeathsDetailsPageModule = class DeathsDetailsPageModule {
};
DeathsDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _deaths_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeathsDetailsPageRoutingModule"]
        ],
        declarations: [_deaths_details_page__WEBPACK_IMPORTED_MODULE_6__["DeathsDetailsPage"]]
    })
], DeathsDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/deaths-details/deaths-details.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/deaths-details/deaths-details.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #78d49d;\n  --font-family: \"Times New Roman\", Times, serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvbW9iZGV2LWNhMy0yMDE5MzIzX2ZpbmFsXy9zcmMvYXBwL3BhZ2VzL2RlYXRocy1kZXRhaWxzL2RlYXRocy1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGVhdGhzLWRldGFpbHMvZGVhdGhzLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEscUJBQUE7RUFDQSw4Q0FBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGVhdGhzLWRldGFpbHMvZGVhdGhzLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgICAgICAgICBcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjNzhkNDlkO1xuICAgICAgICAtLWZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgICAgICB9IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICM3OGQ0OWQ7XG4gIC0tZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/deaths-details/deaths-details.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/deaths-details/deaths-details.page.ts ***!
  \*************************************************************/
/*! exports provided: DeathsDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeathsDetailsPage", function() { return DeathsDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_favourite_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/favourite.service */ "./src/app/services/favourite.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");





let DeathsDetailsPage = class DeathsDetailsPage {
    constructor(activatedRoute, api, favouriteService) {
        this.activatedRoute = activatedRoute;
        this.api = api;
        this.favouriteService = favouriteService;
        this.deathCount = null;
    }
    ngOnInit() {
        this.deathCount = this.activatedRoute.snapshot.paramMap.get('count');
        this.api.getDeath(this.deathCount).subscribe(res => {
            this.death = res[0];
        });
    }
};
DeathsDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _services_favourite_service__WEBPACK_IMPORTED_MODULE_1__["FavouriteService"] }
];
DeathsDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-deaths-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./deaths-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deaths-details/deaths-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./deaths-details.page.scss */ "./src/app/pages/deaths-details/deaths-details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _services_favourite_service__WEBPACK_IMPORTED_MODULE_1__["FavouriteService"]])
], DeathsDetailsPage);



/***/ })

}]);
//# sourceMappingURL=deaths-details-deaths-details-module-es2015.js.map