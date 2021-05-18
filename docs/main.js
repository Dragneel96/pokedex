(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dragn\Documents\GitHub\pokedex\src\main.ts */"zUnb");


/***/ }),

/***/ "5Z9B":
/*!*******************************************************!*\
  !*** ./src/app/plantillas/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "AytR":
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

/***/ "J75/":
/*!*******************************************************!*\
  !*** ./src/app/vistas/catalogo/catalogo.component.ts ***!
  \*******************************************************/
/*! exports provided: CatalogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogoComponent", function() { return CatalogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _servicios_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servicios/api/api.service */ "f76o");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = function () { return ["/detalle"]; };
const _c1 = function (a0) { return { id: a0 }; };
const _c2 = function (a0) { return { "background-color": a0 }; };
function CatalogoComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const catalogo_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx_r0.idPokemon(catalogo_r1.url)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c2, ctx_r0.colorPokemons()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.imgPokemon(catalogo_r1.url), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 6, catalogo_r1.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](catalogo_r1.url);
} }
class CatalogoComponent {
    constructor(api) {
        this.api = api;
    }
    ngOnInit() {
        this.api.catalogoPokedex()
            .subscribe(data => {
            console.log(data);
            this.catalogPokedex = data;
            console.log('this', this.catalogPokedex);
        });
    }
    imgPokemon(url) {
        const urlOriginal = url;
        let urlRemplazo = urlOriginal.replace('https://pokeapi.co/api/v2/pokemon/', 'https://pokeres.bastionbot.org/images/pokemon/');
        urlRemplazo = urlRemplazo.substring(0, urlRemplazo.length - 1);
        return urlRemplazo + '.png';
    }
    idPokemon(url) {
        const urlOriginal = url;
        let urlRemplazo = urlOriginal.replace('https://pokeapi.co/api/v2/pokemon/', '');
        urlRemplazo = urlRemplazo.substring(0, urlRemplazo.length - 1);
        return +urlRemplazo;
    }
    colorPokemons() {
        const color = Math.floor(0x1000000 * Math.random()).toString(16);
        return '#' + ('000000' + color).slice(-6);
    }
}
CatalogoComponent.ɵfac = function CatalogoComponent_Factory(t) { return new (t || CatalogoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
CatalogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CatalogoComponent, selectors: [["app-catalogo"]], decls: 8, vars: 1, consts: [[1, "text-center"], [1, "col-12"], [1, "row"], ["class", "col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2", 4, "ngFor", "ngForOf"], [1, "col-xs-12", "col-sm-6", "col-md-4", "col-lg-4", "col-xl-3", "col-xxl-2"], [3, "routerLink", "queryParams"], [1, "profile-card-6", 3, "ngStyle"], ["width", "120rem", "height", "120rem", 1, "img", "img-responsive", 3, "src"], [1, "profile-overview"], [1, "row", "text-center"], [1, "col-xs-4"]], template: function CatalogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cat\u00E1logo de Pok\u00E9mon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CatalogoComponent_div_7_Template, 12, 13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.catalogPokedex.results);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"]], styles: [".card-container[_ngcontent-%COMP%] {\r\n    padding: 100px 0px;\r\n    perspective: 1000;\r\n}\r\n\r\n.profile-card-4[_ngcontent-%COMP%] {\r\n    max-width: 300px;\r\n    background-color: #FFF;\r\n    border-radius: 5px;\r\n    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);\r\n    overflow: hidden;\r\n    position: relative;\r\n    margin: 10px auto;\r\n    cursor: pointer;\r\n}\r\n\r\n.profile-card-4[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    transition: all 0.25s linear;\r\n}\r\n\r\n.profile-card-4[_ngcontent-%COMP%]   .profile-content[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    padding: 15px;\r\n    background-color: #FFF;\r\n}\r\n\r\n.profile-card-4[_ngcontent-%COMP%]   .profile-name[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    position: absolute;\r\n    left: 0px;\r\n    right: 0px;\r\n    top: -70px;\r\n    color: #FFF;\r\n    font-size: 17px;\r\n}\r\n\r\n.profile-card-4[_ngcontent-%COMP%]   .profile-overview[_ngcontent-%COMP%] {\r\n    padding: 15px 0px;\r\n}\r\n\r\n.profile-card-4[_ngcontent-%COMP%]   .profile-overview[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 10px;\r\n    font-weight: 600;\r\n    color: #777;\r\n}\r\n\r\n.profile-card-4[_ngcontent-%COMP%]   .profile-overview[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    color: #273751;\r\n    font-weight: bold;\r\n}\r\n\r\n.profile-card-4[_ngcontent-%COMP%]   .profile-content[_ngcontent-%COMP%]::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    height: 20px;\r\n    top: -10px;\r\n    left: 0px;\r\n    right: 0px;\r\n    background-color: #FFF;\r\n    z-index: 0;\r\n    transform: skewY(3deg);\r\n}\r\n\r\n.profile-card-4[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\r\n    transform: rotate(5deg) scale(1.1, 1.1);\r\n    filter: brightness(110%);\r\n}\r\n\r\n.profile-card-6[_ngcontent-%COMP%] {\r\n    max-width: 300px;\r\n    background-color: #FFF;\r\n    border-radius: 5px;\r\n    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);\r\n    overflow: hidden;\r\n    position: relative;\r\n    margin: 10px auto;\r\n    cursor: pointer;\r\n}\r\n\r\n.profile-card-6[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    transition: all 0.15s linear;\r\n}\r\n\r\n.profile-card-6[_ngcontent-%COMP%]   .profile-name[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 10px;\r\n    font-size: 25px;\r\n    font-weight: bold;\r\n    color: #FFF;\r\n    padding: 15px 20px;\r\n    background: linear-gradient(140deg, rgba(0, 0, 0, 0.4) 50%, rgba(255, 255, 0, 0) 50%);\r\n    transition: all 0.15s linear;\r\n}\r\n\r\n.profile-card-6[_ngcontent-%COMP%]   .profile-position[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    color: rgba(255, 255, 255, 0.4);\r\n    left: 30px;\r\n    top: 100px;\r\n    transition: all 0.15s linear;\r\n}\r\n\r\n.profile-card-6[_ngcontent-%COMP%]   .profile-overview[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0px;\r\n    left: 0px;\r\n    right: 0px;\r\n    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 50%, rgba(255, 255, 0, 0));\r\n    color: #FFF;\r\n    padding: 50px 0px 20px 0px;\r\n    transition: all 0.15s linear;\r\n}\r\n\r\n.profile-card-6[_ngcontent-%COMP%]   .profile-overview[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n}\r\n\r\n.profile-card-6[_ngcontent-%COMP%]   .profile-overview[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: rgba(255, 255, 255, 0.7);\r\n}\r\n\r\n.profile-card-6[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\r\n    filter: brightness(80%);\r\n}\r\n\r\n.profile-card-6[_ngcontent-%COMP%]:hover   .profile-name[_ngcontent-%COMP%] {\r\n    padding-left: 25px;\r\n    padding-top: 20px;\r\n}\r\n\r\n.profile-card-6[_ngcontent-%COMP%]:hover   .profile-position[_ngcontent-%COMP%] {\r\n    left: 40px;\r\n}\r\n\r\n.profile-card-6[_ngcontent-%COMP%]:hover   .profile-overview[_ngcontent-%COMP%] {\r\n    padding-bottom: 25px;\r\n}\r\n\r\n.profile-card-7[_ngcontent-%COMP%] {\r\n    background-color: #FFF;\r\n    border-radius: 5px;\r\n    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);\r\n    overflow: hidden;\r\n    position: relative;\r\n    margin: 10px auto;\r\n    cursor: pointer;\r\n}\r\n\r\n.example-card[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    overflow: hidden;\r\n}\r\n\r\n.pokeImg[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 70%;\r\n}\r\n\r\n.pokeName[_ngcontent-%COMP%] {\r\n    text-anchor: middle;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGFsb2dvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFFbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsMkNBQTJDO0lBQzNDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixVQUFVO0lBQ1YsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0lBQ1YsU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2Qyx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQiwyQ0FBMkM7SUFDM0MsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixxRkFBcUY7SUFDckYsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixVQUFVO0lBQ1YsVUFBVTtJQUNWLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULFVBQVU7SUFDViwrRUFBK0U7SUFDL0UsV0FBVztJQUNYLDBCQUEwQjtJQUMxQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQiwyQ0FBMkM7SUFDM0MsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoiY2F0YWxvZ28uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxMDBweCAwcHg7XHJcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMDAwO1xyXG4gICAgcGVyc3BlY3RpdmU6IDEwMDA7XHJcbn1cclxuXHJcbi5wcm9maWxlLWNhcmQtNCB7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wcm9maWxlLWNhcmQtNCBpbWcge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGxpbmVhcjtcclxufVxyXG5cclxuLnByb2ZpbGUtY2FyZC00IC5wcm9maWxlLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbn1cclxuXHJcbi5wcm9maWxlLWNhcmQtNCAucHJvZmlsZS1uYW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHRvcDogLTcwcHg7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLnByb2ZpbGUtY2FyZC00IC5wcm9maWxlLW92ZXJ2aWV3IHtcclxuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xyXG59XHJcblxyXG4ucHJvZmlsZS1jYXJkLTQgLnByb2ZpbGUtb3ZlcnZpZXcgcCB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbn1cclxuXHJcbi5wcm9maWxlLWNhcmQtNCAucHJvZmlsZS1vdmVydmlldyBoNCB7XHJcbiAgICBjb2xvcjogIzI3Mzc1MTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucHJvZmlsZS1jYXJkLTQgLnByb2ZpbGUtY29udGVudDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB0b3A6IC0xMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WSgzZGVnKTtcclxufVxyXG5cclxuLnByb2ZpbGUtY2FyZC00OmhvdmVyIGltZyB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKSBzY2FsZSgxLjEsIDEuMSk7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTEwJSk7XHJcbn1cclxuXHJcbi5wcm9maWxlLWNhcmQtNiB7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wcm9maWxlLWNhcmQtNiBpbWcge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGxpbmVhcjtcclxufVxyXG5cclxuLnByb2ZpbGUtY2FyZC02IC5wcm9maWxlLW5hbWUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCByZ2JhKDAsIDAsIDAsIDAuNCkgNTAlLCByZ2JhKDI1NSwgMjU1LCAwLCAwKSA1MCUpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGxpbmVhcjtcclxufVxyXG5cclxuLnByb2ZpbGUtY2FyZC02IC5wcm9maWxlLXBvc2l0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XHJcbiAgICBsZWZ0OiAzMHB4O1xyXG4gICAgdG9wOiAxMDBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBsaW5lYXI7XHJcbn1cclxuXHJcbi5wcm9maWxlLWNhcmQtNiAucHJvZmlsZS1vdmVydmlldyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAwLjQpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMCwgMCkpO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDBweCAyMHB4IDBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBsaW5lYXI7XHJcbn1cclxuXHJcbi5wcm9maWxlLWNhcmQtNiAucHJvZmlsZS1vdmVydmlldyBoMyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnByb2ZpbGUtY2FyZC02IC5wcm9maWxlLW92ZXJ2aWV3IHAge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxufVxyXG5cclxuLnByb2ZpbGUtY2FyZC02OmhvdmVyIGltZyB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODAlKTtcclxufVxyXG5cclxuLnByb2ZpbGUtY2FyZC02OmhvdmVyIC5wcm9maWxlLW5hbWUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLWNhcmQtNjpob3ZlciAucHJvZmlsZS1wb3NpdGlvbiB7XHJcbiAgICBsZWZ0OiA0MHB4O1xyXG59XHJcblxyXG4ucHJvZmlsZS1jYXJkLTY6aG92ZXIgLnByb2ZpbGUtb3ZlcnZpZXcge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLWNhcmQtNyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmV4YW1wbGUtY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnBva2VJbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi5wb2tlTmFtZSB7XHJcbiAgICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "JvVW":
/*!*****************************************************!*\
  !*** ./src/app/vistas/detalle/detalle.component.ts ***!
  \*****************************************************/
/*! exports provided: DetalleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleComponent", function() { return DetalleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _servicios_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servicios/api/api.service */ "f76o");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");







function DetalleComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const habilidad_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](habilidad_r2.ability.name);
} }
function DetalleComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const move_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](move_r3.move.name);
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
class DetalleComponent {
    constructor(api, route) {
        this.api = api;
        this.route = route;
        this.generation = [];
        this.effectentries = [];
        this.global = [];
    }
    ngOnInit() {
        this.id = this.route.snapshot.queryParams.id;
        console.log('ID: ', this.id);
        this.api.getPokemonDetalle(this.id).subscribe(data => {
            console.log('Detalle POKEDEX', data);
            this.datallePokemon = data;
            console.log('This detalle POKEDEX', this.datallePokemon);
        });
        this.api.detallePokedex(this.id).subscribe(data => {
            console.log('Detalle POKEDEX', data);
            this.datalleHabilidad = data;
            console.log('This detalle POKEDEX', this.datalleHabilidad);
        });
    }
    colorPokemons() {
        const color = Math.floor(0x1000000 * Math.random()).toString(16);
        return '#' + ('000000' + color).slice(-6);
    }
    imgPokemon(id) {
        return 'https://pokeres.bastionbot.org/images/pokemon/' + id + '.png';
    }
}
DetalleComponent.ɵfac = function DetalleComponent_Factory(t) { return new (t || DetalleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
DetalleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetalleComponent, selectors: [["app-detalle"]], decls: 51, vars: 14, consts: [[1, "row"], [1, "col", "col-md-6", 3, "ngStyle"], [1, "profile-card-4", "text-center"], ["width", "50%", 1, "img", "img-responsive", 3, "src"], [1, "profile-content"], [1, "profile-name"], [1, "profile-description"], [1, "col-xs-12", "col-sm-12", "col-md-6"], [2, "font-size", "2rem", "color", "red"], ["class", "col", 4, "ngFor", "ngForOf"], [2, "font-size", "2rem"], [1, "col"], [1, "text-center", 2, "font-size", "1.5rem"], [1, "badge", "rounded-pill", "bg-danger", 2, "font-size", "1.5rem"], [1, "col-xs-4"], [1, "profile-overview"], ["min", "0", "max", "100", "step", "0.5", 3, "value"], [1, "example-button-row"], [1, "example-flex-container"], [1, "example-button-container"], ["href", "../catalogo", "mat-fab", "", "color", "warn", "aria-label", "Example icon button with a home icon"], [1, "badge", "rounded-pill", "bg-success", 2, "font-size", "1.5rem"], [1, "badge", "rounded-pill", "bg-dark", 2, "font-weight", "normal", "font-size", "0.8rem"]], template: function DetalleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Habilidades:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DetalleComponent_div_18_Template, 3, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Tama\u00F1o:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Alto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Ancho");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Movimientos:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, DetalleComponent_div_38_Template, 3, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "mat-slider", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.colorPokemons()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imgPokemon(ctx.datallePokemon.id), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 10, ctx.datallePokemon.name), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.datalleHabilidad.effect_entries[0].effect, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.datallePokemon.abilities);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.datallePokemon.height);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.datallePokemon.weight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.datallePokemon.moves);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("EXPERIENCIA BASE: ", ctx.datallePokemon.base_experience, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.datallePokemon.base_experience);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MatSlider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"]], styles: [".card-container[_ngcontent-%COMP%] {\r\n    padding: 100px 0px;\r\n    perspective: 1000;\r\n}\r\n\r\n.profile-card-4[_ngcontent-%COMP%] {\r\n    border-radius: 5px;\r\n    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);\r\n    overflow: hidden;\r\n    position: relative;\r\n    margin: 10px auto;\r\n    cursor: pointer;\r\n}\r\n\r\n.profile-card-4[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    transition: all 0.25s linear;\r\n}\r\n\r\n.profile-card-4[_ngcontent-%COMP%]   .profile-content[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    padding: 15px;\r\n    background-color: #FFF;\r\n}\r\n\r\n.profile-card-4[_ngcontent-%COMP%]   .profile-name[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    position: absolute;\r\n    left: 0px;\r\n    right: 0px;\r\n    top: -70px;\r\n    color: #FFF;\r\n    font-size: 1.7rem;\r\n}\r\n\r\n.profile-card-4[_ngcontent-%COMP%]   .profile-overview[_ngcontent-%COMP%] {\r\n    padding: 15px 0px;\r\n}\r\n\r\n.profile-card-4[_ngcontent-%COMP%]   .profile-overview[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 10px;\r\n    font-weight: 600;\r\n    color: #777;\r\n}\r\n\r\n.profile-card-4[_ngcontent-%COMP%]   .profile-overview[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    color: #273751;\r\n    font-weight: bold;\r\n}\r\n\r\n.profile-card-4[_ngcontent-%COMP%]   .profile-content[_ngcontent-%COMP%]::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    height: 20px;\r\n    top: -10px;\r\n    left: 0px;\r\n    right: 0px;\r\n    background-color: #FFF;\r\n    z-index: 0;\r\n    transform: skewY(3deg);\r\n}\r\n\r\n.profile-card-4[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\r\n    transform: rotate(5deg) scale(1.1, 1.1);\r\n    filter: brightness(110%);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFsbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUVsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsMkNBQTJDO0lBQzNDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixVQUFVO0lBQ1YsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7SUFDVixTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJkZXRhbGxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTAwcHggMHB4O1xyXG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTAwMDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMDAwO1xyXG59XHJcblxyXG4ucHJvZmlsZS1jYXJkLTQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnByb2ZpbGUtY2FyZC00IGltZyB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgbGluZWFyO1xyXG59XHJcblxyXG4ucHJvZmlsZS1jYXJkLTQgLnByb2ZpbGUtY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxufVxyXG5cclxuLnByb2ZpbGUtY2FyZC00IC5wcm9maWxlLW5hbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgdG9wOiAtNzBweDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC1zaXplOiAxLjdyZW07XHJcbn1cclxuXHJcbi5wcm9maWxlLWNhcmQtNCAucHJvZmlsZS1vdmVydmlldyB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcclxufVxyXG5cclxuLnByb2ZpbGUtY2FyZC00IC5wcm9maWxlLW92ZXJ2aWV3IHAge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjNzc3O1xyXG59XHJcblxyXG4ucHJvZmlsZS1jYXJkLTQgLnByb2ZpbGUtb3ZlcnZpZXcgaDQge1xyXG4gICAgY29sb3I6ICMyNzM3NTE7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnByb2ZpbGUtY2FyZC00IC5wcm9maWxlLWNvbnRlbnQ6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgdG9wOiAtMTBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgei1pbmRleDogMDtcclxuICAgIHRyYW5zZm9ybTogc2tld1koM2RlZyk7XHJcbn1cclxuXHJcbi5wcm9maWxlLWNhcmQtNDpob3ZlciBpbWcge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNWRlZykgc2NhbGUoMS4xLCAxLjEpO1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDExMCUpO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _plantillas_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plantillas/header/header.component */ "gBJ/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'pokedex';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_plantillas_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _plantillas_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plantillas/header/header.component */ "gBJ/");
/* harmony import */ var _plantillas_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plantillas/footer/footer.component */ "5Z9B");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _vistas_catalogo_catalogo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./vistas/catalogo/catalogo.component */ "J75/");
/* harmony import */ var _vistas_detalle_detalle_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./vistas/detalle/detalle.component */ "JvVW");
/* harmony import */ var _vistas_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./vistas/perfil/perfil.component */ "yg3h");






//Componentes de angular material













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _plantillas_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _plantillas_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _vistas_catalogo_catalogo_component__WEBPACK_IMPORTED_MODULE_16__["CatalogoComponent"], _vistas_detalle_detalle_component__WEBPACK_IMPORTED_MODULE_17__["DetalleComponent"], _vistas_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_18__["PerfilComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "f76o":
/*!**********************************************!*\
  !*** ./src/app/servicios/api/api.service.ts ***!
  \**********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class ApiService {
    constructor(http) {
        this.http = http;
        // URL API
        this.url = 'https://pokeapi.co/api/v2';
    }
    catalogoPokedex() {
        const direccion = this.url + '/pokemon?offset=20&limit=20';
        return this.http.get(direccion);
    }
    detallePokedex(id) {
        const direccion = this.url + '/ability/' + id + '/';
        console.log('DIRECCION', direccion);
        return this.http.get(direccion);
    }
    getPokemonDetalle(id) {
        const direccion = this.url + '/pokemon/' + id + '/';
        return this.http.get(direccion);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "gBJ/":
/*!*******************************************************!*\
  !*** ./src/app/plantillas/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");





const _c0 = function () { return ["catalogo"]; };
class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 16, vars: 3, consts: [[1, "navbar", "navbar-light", "bg-ligth"], [1, "navbar-brand", 2, "font-size", "2rem", 3, "routerLink"], ["src", "data:image/png;base64,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", "width", "30", "height", "30", "alt", "", 1, "d-inline-block", "align-top"], ["type", "button", "mat-icon-button", "", "aria-label", "Menu con Icono", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["href", "../perfil"], ["mat-menu-item", ""]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Pokedex ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-menu", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "perm_identity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _vistas_catalogo_catalogo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vistas/catalogo/catalogo.component */ "J75/");
/* harmony import */ var _vistas_detalle_detalle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vistas/detalle/detalle.component */ "JvVW");
/* harmony import */ var _vistas_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vistas/perfil/perfil.component */ "yg3h");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '', redirectTo: 'catalogo', pathMatch: 'full' },
    { path: 'catalogo', component: _vistas_catalogo_catalogo_component__WEBPACK_IMPORTED_MODULE_1__["CatalogoComponent"] },
    { path: 'detalle', component: _vistas_detalle_detalle_component__WEBPACK_IMPORTED_MODULE_2__["DetalleComponent"] },
    { path: 'perfil', component: _vistas_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_3__["PerfilComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
const routingComponents = [_vistas_catalogo_catalogo_component__WEBPACK_IMPORTED_MODULE_1__["CatalogoComponent"], _vistas_detalle_detalle_component__WEBPACK_IMPORTED_MODULE_2__["DetalleComponent"], _vistas_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_3__["PerfilComponent"]];


/***/ }),

/***/ "yg3h":
/*!***************************************************!*\
  !*** ./src/app/vistas/perfil/perfil.component.ts ***!
  \***************************************************/
/*! exports provided: PerfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilComponent", function() { return PerfilComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



class PerfilComponent {
    constructor() { }
    ngOnInit() {
    }
}
PerfilComponent.ɵfac = function PerfilComponent_Factory(t) { return new (t || PerfilComponent)(); };
PerfilComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PerfilComponent, selectors: [["app-perfil"]], decls: 104, vars: 0, consts: [[1, "example-card"], ["mat-card-avatar", "", 1, "example-header-image"], [1, "bg-dark", "m-0", "text-white", "text-center"], [1, "m-0", "text-center"], ["mat-button", ""]], template: function PerfilComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Daniel de Jes\u00FAs de Jes\u00FAs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Desarrollador Web | dragneel.960229@gmail.com | 5562258310");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "SOBRE MI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Alumno de Tecnolog\u00EDas y Sistemas de la Informaci\u00F3n, de la Universidad Aut\u00F3noma Metropolitana - Cuajimalpa. Desarrollador con al menos a\u00F1o y medio de experiencia generando c\u00F3digo para microempresas. Cree un API para timbrado masivos contemplado las reglas del SAT, del mismo modo que mi tesis est\u00E1 enfocada en un sistema web proped\u00E9utico basado en lecciones intuitivas realizadas en una investigaci\u00F3n de campo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "EXPERIENCIA PROFESIONAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Desarrollador Full Stack | Freelance, CDMX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Febr. 2019 - Presente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " He realizado al menos 10 proyectos de los cuales destacan: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Sistema de facturaci\u00F3n masiva (10/2020)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Se analizo el modelo de negocio de una empresa de aseguradora, de modo que, el sistema fuera capaz de timbrar de manera masiva sus facturas, utilizando una base de datos en Oracle, asimismo, toda la arquitectura de negocio fue realizada en C# utilizando m\u00E9todos as\u00EDncronos con la finalidad de que fuese distribuido, cabe mencionar que el sistema aproximadamente se demora en timbrar 5000 facturas en menos de 5 minutos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "GesContrato (6/2020)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Se creo una plataforma web, encargada para gestionar contratos de la constructora ICA, el cual se encarga de notificar el vencimiento de los contratos, asimismo se incorpor\u00F3 un algoritmo basado en caso, el cual se encarga de comparar los problemas de los contratos con el fin de prevenir los siniestros, fue realizado en capas como lo es el de datos, utiler\u00EDas, negocio y web (MVC), incorporando m\u00E9todos as\u00EDncronos para ser distribuido. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Control de Ventas e Inventarios (3/2020)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Es un completo sistema web empresarial para la administraci\u00F3n y gesti\u00F3n de inventario (stock), compras, ventas, clientes, proveedores, y gesti\u00F3n de usuarios (alta, baja, eliminar, modificar). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Analista de Sistemas| Monitorista \u2013 CDMX, Coyuya.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Analista de Sistemas \u2013 Grupo Diniz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " - Encargado de realizar soporte t\u00E9cnico (mantenimiento preventivo de equipos de c\u00F3mputo, soporte de operaci\u00F3n) en las oficinas de Recorcholis y a su vez en las 44 sucursales de la misma familia, implementaci\u00F3n de servidores (Windows y Linux) para el control de la base de datos, configuraci\u00F3n de correos electr\u00F3nicos, instalaci\u00F3n de software. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Monitorista \u2013 Grupo Diniz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " - Encargado de dirigir, desarrollar acciones de monitoreo y evaluaci\u00F3n, en coordinaci\u00F3n con miembros del \u00E1rea de contralor\u00EDa para el cumplimiento y medici\u00F3n. Recolectar y analizar datos para generar informes en relaci\u00F3n a resultados y aprendizaje. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "FORMACI\u00D3N ACADEMICA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Universidad Aut\u00F3noma Metropolitana - Cuajimalpa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "2015 \u2013 Presente (Abr. 2021) - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Licenciatura en Tecnolog\u00EDas y Sistemas de la Informaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, ", Gesti\u00F3n de Proyectos y Pensamiento Estrat\u00E9gico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Colegio de Bachilleres Plantel 23 (Estado de Guerrero, Suljaa\u2019)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "2011 - 2014 - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "T\u00E9cnico en Informatica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "HABILIDADES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Web (HTML, CSS, JS)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "BD(SQL Server, MySQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "GIT (GitLab y Git Hub)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "UI | UX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "C#, .NET, .NET Core y ,Net 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Visual Studio, Postman.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "SCRUM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Trabajo en equipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Capacidad de Adaptaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Organizado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Comunicativo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Liderazgo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "IDIOMAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Ingl\u00E9s: Nivel A1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Espa\u00F1ol: Nativo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: [".example-card[_ngcontent-%COMP%] {}\r\n\r\n.example-header-image[_ngcontent-%COMP%] {\r\n    background-image: url('YOK.png');\r\n    background-size: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQWU7O0FBRWY7SUFDSSxnQ0FBZ0Q7SUFDaEQsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InBlcmZpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7fVxyXG5cclxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL1lPSy5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map