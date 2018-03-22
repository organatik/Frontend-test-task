webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-content></app-content>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__content_content_component__ = __webpack_require__("./src/app/content/content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__ = __webpack_require__("./node_modules/ngx-pagination/dist/ngx-pagination.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__content_content_component__["a" /* ContentComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/content/content.component.css":
/***/ (function(module, exports) {

module.exports = ".controls{\r\n  margin: 10px 0;\r\n}\r\nbutton {\r\n  outline: none!important;\r\n}\r\ntable tr td:nth-child(3){\r\n  text-align: center;\r\n}\r\ntable tr td:nth-child(4){\r\n  text-align: center;\r\n}\r\ntable tr {\r\n  cursor: pointer;\r\n}\r\n.form{\r\n  position: absolute;\r\n  top: 124px;\r\n  z-index: 10;\r\n  border: 1px solid;\r\n  background: ghostwhite;\r\n  padding: 20px;\r\n}\r\n.form i {\r\n  position: absolute;\r\n  right: 15px;\r\n  top: 10px;\r\n  cursor: pointer;\r\n}\r\n.error {\r\n  color: red;\r\n  display: inline-block;\r\n  padding-top: 3px;\r\n  padding-left: 5px;\r\n}\r\n.error-input{\r\n  border: 1px solid red!important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/content/content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"col-md-12 controls\">\r\n      <button class=\"btn btn-default\" (click)=\"createNewRow()\">Создать</button>\r\n      <button class=\"btn btn-default\" (click)=\"editRow()\">Редактировать</button>\r\n      <button class=\"btn btn-default\" (click)=\"deleteRow()\">Удалить</button>\r\n    </div>\r\n    <table class=\"table table-bordered\">\r\n      <tr>\r\n        <th>Заголовок</th>\r\n        <th>Превью фото </th>\r\n        <th>Идентификатор альбома</th>\r\n        <th>Идентификатор фото</th>\r\n      </tr>\r\n      <tr *ngFor=\"let photo of photosList | paginate: { itemsPerPage: 10, currentPage: p };let i = index\"\r\n          (click)=\"selectRow(i)\" [ngClass]=\"{ 'active': selectedRow == i }\" >\r\n        <td>{{ photo.title }}</td>\r\n        <td>\r\n          <a [href]=\"photo.url\" target=\"_blank\">\r\n            <img [src]=\"photo.thumbnailUrl\" alt=\"miniPhoto\">\r\n          </a>\r\n        </td>\r\n        <td>{{ photo.albumId }}</td>\r\n        <td>{{ photo.id }}</td>\r\n      </tr>\r\n    </table>\r\n    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n    <!--EDIT FORM-->\r\n    <div class=\"edit col-md-4 col-md-offset-4 form\" *ngIf=\"showEditForm\">\r\n      <form [formGroup]=\"MyFormEdit\">\r\n        <i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"closeEditRow()\"></i>\r\n        <div class=\"form-group\">\r\n          <label for=\"title\">Заголовок</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"title\"  formControlName=\"title\" >\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"thumbnailUrl\">Превью фото</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"thumbnailUrl\" formControlName=\"thumbnailUrl\" >\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"thumbnailUrl\">Фото</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"url\" formControlName=\"url\" >\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"albumId\">Идентификатор альбома</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"albumId\" formControlName=\"albumId\" >\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"id\">Идентификатор фото</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"id\" formControlName=\"id\">\r\n        </div>\r\n        <button type=\"submit\" (click)=\"saveEdit()\"  class=\"btn btn-default\">Сохранить</button>\r\n      </form>\r\n    </div>\r\n    <!--CREATE FORM-->\r\n    <div class=\"edit col-md-4 col-md-offset-4 form\" *ngIf=\"showCreateForm\">\r\n      <form [formGroup]=\"MyFormCreate\">\r\n        <i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"closeCreateRow()\"></i>\r\n        <div class=\"form-group\">\r\n          <label for=\"title\">Заголовок</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"title\"  formControlName=\"title\" required\r\n                 [ngClass]=\"{ 'error-input':  MyFormCreate.controls['title'].touched && !MyFormCreate.controls['title'].valid }\">\r\n          <span class=\"error\" *ngIf=\"!MyFormCreate.controls['title'].valid && MyFormCreate.controls['title'].touched \">Field required*</span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"thumbnailUrl\">Превью фото</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"thumbnailUrl\" formControlName=\"thumbnailUrl\" required\r\n                 [ngClass]=\"{ 'error-input':  MyFormCreate.controls['thumbnailUrl'].touched && !MyFormCreate.controls['thumbnailUrl'].valid }\" >\r\n          <span class=\"error\" *ngIf=\"!MyFormCreate.controls['thumbnailUrl'].valid && MyFormCreate.controls['thumbnailUrl'].touched \">Field required*</span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"url\">Фото</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"url\" formControlName=\"url\" required\r\n                 [ngClass]=\"{ 'error-input':  MyFormCreate.controls['url'].touched && !MyFormCreate.controls['url'].valid }\" >\r\n          <span class=\"error\" *ngIf=\"!MyFormCreate.controls['url'].valid && MyFormCreate.controls['url'].touched \">Field required*</span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"albumId\">Идентификатор альбома</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"albumId\" formControlName=\"albumId\" required\r\n                 [ngClass]=\"{ 'error-input':  MyFormCreate.controls['albumId'].touched && !MyFormCreate.controls['albumId'].valid }\" >\r\n          <span class=\"error\" *ngIf=\"!MyFormCreate.controls['albumId'].valid && MyFormCreate.controls['albumId'].touched \">Field required*</span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"id\">Идентификатор фото</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"id\" formControlName=\"id\" required\r\n                 [ngClass]=\"{ 'error-input':  MyFormCreate.controls['id'].touched && !MyFormCreate.controls['id'].valid }\">\r\n          <span class=\"error\" *ngIf=\"!MyFormCreate.controls['id'].valid && MyFormCreate.controls['id'].touched \">Field required*</span>\r\n        </div>\r\n        <button type=\"submit\" [disabled]=\"!MyFormCreate.valid\" (click)=\"saveNewRow()\"  class=\"btn btn-default\">Сохранить</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/content/content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContentComponent = /** @class */ (function () {
    function ContentComponent(http, fb) {
        this.http = http;
        this.fb = fb;
        this.currentAdress = 'https://jsonplaceholder.typicode.com/photos';
        this.selectedRow = -1;
        this.showEditForm = false;
        this.showCreateForm = false;
        this.createForm();
        this.createFormSave();
    }
    ContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.currentAdress).subscribe(function (data) {
            _this.photosList = data;
            console.log(_this.photosList);
        });
    };
    ContentComponent.prototype.createForm = function () {
        this.MyFormEdit = this.fb.group({
            albumId: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            id: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            title: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            url: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            thumbnailUrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
        });
    };
    ContentComponent.prototype.createFormSave = function () {
        this.MyFormCreate = this.fb.group({
            albumId: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            id: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            title: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            url: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            thumbnailUrl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
        });
    };
    ContentComponent.prototype.selectRow = function (index) {
        this.selectedRow = index;
    };
    // CREATE FUNCTIONALITY
    ContentComponent.prototype.createNewRow = function () {
        this.showCreateForm = true;
    };
    ContentComponent.prototype.saveNewRow = function () {
        this.photosList.unshift(this.MyFormCreate.value);
        this.showCreateForm = false;
    };
    ContentComponent.prototype.closeCreateRow = function () {
        this.showCreateForm = false;
    };
    // EDITABLE FUNCTIONALITY
    ContentComponent.prototype.editRow = function () {
        if (this.selectedRow === -1) {
            alert('Выберите строку в таблице для изменения');
        }
        else {
            this.showEditForm = true;
            this.MyFormEdit.setValue({
                albumId: this.photosList[this.selectedRow].albumId,
                id: this.photosList[this.selectedRow].id,
                title: this.photosList[this.selectedRow].title,
                url: this.photosList[this.selectedRow].url,
                thumbnailUrl: this.photosList[this.selectedRow].thumbnailUrl,
            });
        }
    };
    ContentComponent.prototype.saveEdit = function () {
        this.showEditForm = false;
        this.photosList[this.selectedRow].albumId = this.MyFormEdit.value.albumId;
        this.photosList[this.selectedRow].id = this.MyFormEdit.value.id;
        this.photosList[this.selectedRow].title = this.MyFormEdit.value.title;
        this.photosList[this.selectedRow].url = this.MyFormEdit.value.url;
        this.photosList[this.selectedRow].thumbnailUrl = this.MyFormEdit.value.thumbnailUrl;
    };
    ContentComponent.prototype.closeEditRow = function () {
        this.showEditForm = false;
    };
    ContentComponent.prototype.deleteRow = function () {
        this.photosList.splice(this.selectedRow, 1);
        this.selectedRow = undefined;
    };
    // VALIDATIONS FORM
    ContentComponent.prototype.isFieldValid = function (field) {
        return !this.MyFormCreate.get(field).valid && this.MyFormCreate.get(field).touched;
    };
    ContentComponent.prototype.displayFieldCss = function (field) {
        return {
            'has-error': this.isFieldValid(field),
            'has-feedback': this.isFieldValid(field)
        };
    };
    ContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-content',
            template: __webpack_require__("./src/app/content/content.component.html"),
            styles: [__webpack_require__("./src/app/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map