webpackJsonp([0],{

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageCatModule", function() { return ProfilePageCatModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profilecat__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_search_searchcat__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfilePageCatModule = (function () {
    function ProfilePageCatModule() {
    }
    return ProfilePageCatModule;
}());
ProfilePageCatModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__profilecat__["a" /* ProfilePageCat */],
            __WEBPACK_IMPORTED_MODULE_3__pipes_search_searchcat__["a" /* SearchCatPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profilecat__["a" /* ProfilePageCat */]),
        ],
    })
], ProfilePageCatModule);

//# sourceMappingURL=profilecat.module.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchCatPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SearchCatPipe = (function () {
    function SearchCatPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SearchCatPipe.prototype.transform = function (list, searchTerm) {
        if (searchTerm) {
            searchTerm = searchTerm.toUpperCase();
            return list.filter(function (item) {
                return item.merchantName.toUpperCase().indexOf(searchTerm) !== -1;
            });
        }
        else {
            return list;
        }
    };
    return SearchCatPipe;
}());
SearchCatPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'search',
        pure: true
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], SearchCatPipe);

//# sourceMappingURL=searchcat.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePageCat; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_biller_biller__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_remote_service_remote_service__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { Pipe, PipeTransform } from '@angular/core';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//profile page
var ProfilePageCat = (function () {
    function ProfilePageCat(loadingCtrl, remoteService, storage, toastCtrl, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.remoteService = remoteService;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = [];
        this.data2 = [];
        this.term = '';
        this.snip = true;
        this.snip2 = false;
        this.data = JSON.parse(this.navParams.get("data"));
    }
    ProfilePageCat.prototype.ga = function () {
    };
    ProfilePageCat.prototype.passdata = function (val) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var url = "http://34.242.75.122/api/v1/billers/" + val.merchantId.toString() + "/" + val.ova.toString();
        //alert(this.url);
        var body = {};
        this.remoteService.getPosts(url).subscribe(function (data) {
            console.log(data);
            loading.dismiss();
            // this.udata = data;
            _this.storage.set('ovat', val.ova);
            _this.storage.set('ovat', val.ova);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_biller_biller__["a" /* BillerPage */], { data: data });
            //console.log(data);
        });
        //console.log(val)
        // alert(val.phonenumber);
        // this.sparam = val.phonenumber;
        //console.log("Happy");
    };
    ProfilePageCat.prototype.searchFn = function (ev) {
        this.term = ev.target.value;
    };
    ProfilePageCat.prototype.searchchanged = function (ch) {
        if (ch.length > 0) {
            this.snip = false;
            this.snip2 = !this.snip;
            console.log(this.snip);
            console.log(this.snip2);
            console.log("Search Active");
        }
        else {
            this.snip = true;
            this.snip2 = !this.snip;
            console.log(this.snip);
            console.log(this.snip2);
            console.log("Now Empty");
        }
        console.log(ch);
    };
    return ProfilePageCat;
}());
ProfilePageCat = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/Users/DarkLord/genpay/src/pages/profilecat/profilecat.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n    <ion-title>BILLERS</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="topbar" padding>\n\n \n\n    <ion-item>\n\n       \n\n        <ion-searchbar class="low" [(ngModel)]= "sparam" placeholder="Search Billers" type="text" value=""></ion-searchbar>\n\n      </ion-item>\n\n      <div >\n\n<ion-item detail-push class="listh" *ngFor="let d of data | search: sparam "  (click)="passdata(d)">\n\n<font color="#23aadb"  text-wrap >\n\n   \n\n    <ion-icon style="padding-right: 10px" name="logo-buffer"></ion-icon> <font text-wrap><b>{{d.merchantName}}</b></font>\n\n</font>\n\n\n\n</ion-item>\n\n</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/DarkLord/genpay/src/pages/profilecat/profilecat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ProfilePageCat);

//# sourceMappingURL=profilecat.js.map

/***/ })

});
//# sourceMappingURL=0.js.map