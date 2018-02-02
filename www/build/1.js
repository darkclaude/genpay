webpackJsonp([1],{

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_search_search__ = __webpack_require__(325);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    return ProfilePageModule;
}());
ProfilePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_3__pipes_search_search__["a" /* SearchPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
        ],
    })
], ProfilePageModule);

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
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
var ProfilePage = (function () {
    function ProfilePage(loadingCtrl, remoteService, storage, toastCtrl, navCtrl, navParams) {
        var _this = this;
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
        try {
            this.storage.get('billerlist').then(function (val) {
                //  console.log(val)
                _this.data = JSON.parse(val).data;
                console.log(_this.data);
                // console.log(this.gdata);
            });
            //this.gdata= JSON.parse(this.navParams.get("data"));
            //this.data = this.gdata.data;
        }
        catch (error) {
        }
    }
    ProfilePage.prototype.ga = function () {
        var _this = this;
        this.storage.get('governlist').then(function (val) {
            //  console.log(val)
            //  this.data JSON.parse(val);
            if (val == null || !(val.length > 0)) {
                alert("No Merchants available at the moment");
            }
            else {
                _this.navCtrl.push("ProfilePageCat", { data: val });
            }
            // console.log(this.gdata);
        });
    };
    ProfilePage.prototype.sl = function () {
        var _this = this;
        this.storage.get('schoollist').then(function (val) {
            //  console.log(val)
            if (val == null || !(val.length > 0)) {
                alert("No Merchants available at the moment");
            }
            else {
                _this.navCtrl.push("ProfilePageCat", { data: val });
            }
            // console.log(this.gdata);
        });
    };
    ProfilePage.prototype.fn = function () {
        var _this = this;
        this.storage.get('financelist').then(function (val) {
            //  console.log(val)
            if (val == null || !(val.length > 0)) {
                alert("No Merchants available at the moment");
            }
            else {
                _this.navCtrl.push("ProfilePageCat", { data: val });
                // console.log(this.gdata);
            }
        });
    };
    ProfilePage.prototype.bng = function () {
        var _this = this;
        this.storage.get('bettinggameslist').then(function (val) {
            //  console.log(val)
            if (val == null || !(val.length > 0)) {
                alert("No Merchants available at the moment");
            }
            else {
                _this.navCtrl.push("ProfilePageCat", { data: val });
            }
            // console.log(this.gdata);
        });
    };
    ProfilePage.prototype.ut = function () {
        var _this = this;
        this.storage.get('utilitylist').then(function (val) {
            //  console.log(val)
            if (val == null || !(val.length > 0)) {
                alert("No Merchants available at the moment");
            }
            else {
                _this.navCtrl.push("ProfilePageCat", { data: val });
            }
            // console.log(this.gdata);
        });
    };
    ProfilePage.prototype.pt = function () {
        var _this = this;
        this.storage.get('paytv').then(function (val) {
            //  console.log(val)
            if (val == null || !(val.length > 0)) {
                alert("No Merchants available at the moment");
            }
            else {
                _this.navCtrl.push("ProfilePageCat", { data: val });
            }
        });
    };
    ProfilePage.prototype.hc = function () {
        var _this = this;
        this.storage.get('healthcare').then(function (val) {
            //  console.log(val)
            if (val == null || !(val.length > 0)) {
                alert("No Merchants available at the moment");
            }
            else {
                _this.navCtrl.push("ProfilePageCat", { data: val });
            }
            // console.log(this.gdata);
        });
    };
    ProfilePage.prototype.it = function () {
        var _this = this;
        this.storage.get('internet').then(function (val) {
            //  console.log(val)
            if (val == null || !(val.length > 0)) {
                alert("No Merchants available at the moment");
            }
            else {
                _this.navCtrl.push("ProfilePageCat", { data: val });
            }
            // console.log(this.gdata);
        });
    };
    ProfilePage.prototype.air = function () {
        var _this = this;
        this.storage.get('airline').then(function (val) {
            //  console.log(val)
            if (val == null || !(val.length > 0)) {
                alert("No Merchants available at the moment");
            }
            else {
                _this.navCtrl.push("ProfilePageCat", { data: val });
            }
            // console.log(this.gdata);
        });
    };
    ProfilePage.prototype.at = function () {
        var _this = this;
        this.storage.get('airtime').then(function (val) {
            //alert(val)//console.log(val)
            if (val == null || !(val.length > 0)) {
                alert("No Merchants available at the moment");
            }
            else {
                _this.navCtrl.push("ProfilePageCat", { data: val });
                // console.log(this.gdata);
            }
        });
    };
    ProfilePage.prototype.ins = function () {
        var _this = this;
        this.storage.get('insurance').then(function (val) {
            //  console.log(val)
            if (val == null || !(val.length > 0)) {
                alert("No Merchants available at the moment");
            }
            else {
                _this.navCtrl.push("ProfilePageCat", { data: val });
                // console.log(this.gdata);
            }
        });
    };
    ProfilePage.prototype.ong = function () {
        var _this = this;
        this.storage.get('oilgas').then(function (val) {
            //  console.log(val)
            if (val == null || !(val.length > 0)) {
                alert("No Merchants available at the moment");
            }
            else {
                _this.navCtrl.push("ProfilePageCat", { data: val });
                // console.log(this.gdata);
            }
            // console.log(this.gdata);
        });
    };
    ProfilePage.prototype.ngo = function () {
        var _this = this;
        this.storage.get('ngof').then(function (val) {
            //  console.log(val)
            if (val == null || !(val.length > 0)) {
                alert("No Merchants available at the moment");
            }
            else {
                _this.navCtrl.push("ProfilePageCat", { data: val });
                // console.log(this.gdata);
            }
            // console.log(this.gdata);
        });
    };
    ProfilePage.prototype.ch = function () {
        var _this = this;
        this.storage.get('church').then(function (val) {
            //  console.log(val)
            if (val == null || !(val.length > 0)) {
                alert("No Merchants available at the moment");
            }
            else {
                _this.navCtrl.push("ProfilePageCat", { data: val });
                // console.log(this.gdata);
            }
            // console.log(this.gdata);
        });
    };
    ProfilePage.prototype.mcn = function () {
        var _this = this;
        this.storage.get('merchants').then(function (val) {
            //  console.log(val)
            if (val == null || !(val.length > 0)) {
                alert("No Merchants available at the moment");
            }
            else {
                _this.navCtrl.push("ProfilePageCat", { data: val });
                // console.log(this.gdata);
            }
            // console.log(this.gdata);
        });
    };
    ProfilePage.prototype.od = function () {
        var _this = this;
        this.storage.get('others').then(function (val) {
            //  console.log(val)
            if (val == null || !(val.length > 0)) {
                alert("No Merchants available at the moment");
            }
            else {
                _this.navCtrl.push("ProfilePageCat", { data: val });
                // console.log(this.gdata);
            }
            // console.log(this.gdata);
        });
    };
    ProfilePage.prototype.logdata = function (val) {
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
    ProfilePage.prototype.searchFn = function (ev) {
        this.term = ev.target.value;
    };
    ProfilePage.prototype.searchchanged = function (ch) {
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
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/Users/DarkLord/genpay/src/pages/profile/profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n    <ion-title>BILLERS </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="topbar72s7" padding>\n\n\n\n    <ion-item>\n\n     \n\n        <ion-searchbar class="low" [(ngModel)]= "sparam" (ngModelChange)="searchchanged($event)" type="text" value=""></ion-searchbar>\n\n      </ion-item>\n\n      <div *ngIf="snip2">\n\n<ion-item  detail-push text-wrap class="listh" *ngFor="let d of data | search: sparam "  (click)="logdata(d)">\n\n<font color="#23aadb" >\n\n   \n\n<b>{{d.merchantName}}</b></font>\n\n\n\n</ion-item>\n\n</div>\n\n\n\n<div *ngIf="snip">\n\n    <ion-item detail-push class="listh" (click)="ga()">\n\n    <font color="#23aadb"  >\n\n        <ion-icon   color="#23aadb"  style="padding-right: 10px" name="list"></ion-icon><font color="#23aadb"  class="bil"><b>Government Agencies</b></font>\n\n        \n\n    </font>\n\n    \n\n    </ion-item>\n\n    <ion-item detail-push class="listh" (click)="ut()">\n\n        <font  color="#23aadb" >\n\n            <ion-icon style="padding-right: 10px" name="list"></ion-icon><font color="#23aadb" class="bil"><b>Utilities</b></font>\n\n            \n\n        </font>\n\n        \n\n        </ion-item>\n\n        <ion-item detail-push class="listh" (click)="bng()" >\n\n            <font color="#23aadb"  >\n\n                <ion-icon  color="#23aadb"  style="padding-right: 10px" name="list"></ion-icon><font  color="#23aadb"  class="bil"><b>Betting & Gaming</b></font>\n\n                \n\n            </font>\n\n            \n\n            </ion-item>\n\n            <ion-item detail-push class="listh" (click)="fn()">\n\n                <font color="#23aadb"  >\n\n                    <ion-icon style="padding-right: 10px" name="list"></ion-icon><font color="#23aadb"  class="bil"><b>Finance</b></font>\n\n                    \n\n                </font>\n\n\n\n                \n\n                </ion-item>\n\n    <ion-item detail-push class="listh" (click)="pt()">\n\n        <font color="#23aadb"  >\n\n            <ion-icon style="padding-right: 10px" name="list"></ion-icon><font color="#23aadb" class="bil"><b>PayTv</b></font>\n\n            \n\n        </font>\n\n        \n\n        </ion-item>\n\n        <ion-item detail-push class="listh" (click)="sl()">\n\n            <font color="#23aadb"  >\n\n                <ion-icon style="padding-right: 10px" name="list"></ion-icon><font color="#23aadb" class="bil" ><b>Schools</b></font>\n\n                \n\n            </font>\n\n            \n\n            </ion-item>\n\n            <ion-item detail-push class="listh" (click)="hc()">\n\n                <font color="#23aadb"  >\n\n                    <ion-icon color="#23aadb"  style="padding-right: 10px" name="list"></ion-icon><font color="#23aadb" class="bil"><b>Healthcare</b></font>\n\n                    \n\n                </font>\n\n                \n\n                </ion-item>\n\n                <ion-item detail-push class="listh" (click)="it()">\n\n                    <font color="#23aadb"  >\n\n                        <ion-icon color="#23aadb"  style="padding-right: 10px" name="list"></ion-icon><font olor="#23aadb" class="bil"><b>Internet</b></font>\n\n                        \n\n                    </font>\n\n                    \n\n                    </ion-item>\n\n                    <ion-item detail-push class="listh" (click)="air()">\n\n                        <font color="#23aadb" >\n\n                            <ion-icon color="#23aadb"  style="padding-right: 10px" name="list"></ion-icon><font color="#23aadb"  class="bil"><b>Airline</b></font>\n\n                            \n\n                        </font>\n\n                        \n\n                        </ion-item>\n\n                        <!--\n\n                        <ion-item detail-push class="listh" (click)="at()">\n\n                            <font color="#23aadb" >\n\n                                <ion-icon color="#23aadb"  style="padding-right: 10px" name="list"></ion-icon><font color="#23aadb"  class="bil"><b>Airtime</b></font>\n\n                                \n\n                            </font>\n\n                            \n\n                            </ion-item>\n\n                        -->\n\n                        <ion-item detail-push class="listh" (click)="ins()">\n\n                            <font color="#23aadb" >\n\n                                <ion-icon style="padding-right: 10px" name="list"></ion-icon><font color="#23aadb"  class="bil"><b>Insurance</b></font>\n\n                                \n\n                            </font>\n\n                            \n\n                            </ion-item>\n\n                            <ion-item detail-push class="listh" (click)="ong()">\n\n                                <font color="#23aadb" >\n\n                                    <ion-icon color="#23aadb"   style="padding-right: 10px" name="list"></ion-icon><font color="#23aadb"  class="bil"><b>Oil and Gas</b></font>\n\n                                    \n\n                                </font>\n\n                                \n\n                                </ion-item>\n\n                                <ion-item  detail-push class="listh" (click)="ngo()">\n\n                                    <font color="#23aadb" >\n\n                                        <ion-icon style="padding-right: 10px" name="list"></ion-icon><font class="bil"><b>NGO Foundations</b></font>\n\n                                        \n\n                                    </font>\n\n                                    \n\n                                    </ion-item>\n\n                                    <ion-item detail-push  class="listh" (click)="ch()">\n\n                                        <font color="#23aadb" >\n\n                                            <ion-icon style="padding-right: 10px" name="list"></ion-icon><font class="bil"><b>Church</b></font>\n\n                                            \n\n                                        </font>\n\n                                        \n\n                                        </ion-item>\n\n                                        <ion-item detail-push class="listh" (click)="mcn()">\n\n                                            <font color="#23aadb"  >\n\n                                                <ion-icon style="padding-right: 10px" name="list"></ion-icon><font class="bil"><b>General Merchants</b></font>\n\n                                                \n\n                                            </font>\n\n                                            \n\n                                            </ion-item>\n\n                                    <ion-item detail-push class="listh" (click)="od()">\n\n                                        <font color="#23aadb" >\n\n                                            <ion-icon style="padding-right: 10px" name="list"></ion-icon><font class="bil"><b>Other</b> </font>\n\n                                            \n\n                                        </font>\n\n                                    \n\n                                        </ion-item>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/DarkLord/genpay/src/pages/profile/profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
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
var SearchPipe = (function () {
    function SearchPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SearchPipe.prototype.transform = function (list, searchTerm) {
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
    return SearchPipe;
}());
SearchPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'search',
        pure: true
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], SearchPipe);

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=1.js.map