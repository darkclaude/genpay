webpackJsonp([19],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoteServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Http } from '@angular/http';









/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RemoteServiceProvider = (function () {
    function RemoteServiceProvider(http) {
        this.http = http;
        console.log('Hello RemoteServiceProvider Provider');
    }
    RemoteServiceProvider.prototype.getPosts = function (apiUrl) {
        var _this = this;
        return this.http.get(apiUrl)
            .do(function (res) { return console.log(res.json); })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return _this.handleError(error); });
        ;
    };
    RemoteServiceProvider.prototype.getPosts2 = function (apiUrl, body) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        //  return this.http.post(this.url, book, options)
        return this.http.post(apiUrl, body, options)
            .do(function (res) { return console.log(res.json); })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return _this.handleError(error); });
        ;
    };
    RemoteServiceProvider.prototype.handleError = function (error) {
        // Could dig deeper into the error to get a better message or use a remote logging infrastructure
        var errMsg = (error.message) ? error.message : error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return RemoteServiceProvider;
}());
RemoteServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], RemoteServiceProvider);

//# sourceMappingURL=remote-service.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_billeref_billeref__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_billerlookup_billerlookup__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_remote_service_remote_service__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the BillerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BillerPage = (function () {
    function BillerPage(loadingCtrl, remoteService, storage, toastCtrl, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.remoteService = remoteService;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.billername = '';
        this.data = this.navParams.get("data");
        console.log(this.data.data[0].merchantName);
        //console.log(this.data.data);
    }
    BillerPage.prototype.changepass = function () {
        var _this = this;
        var body = {};
        //this.url = 
        this.url = "http://172.18.12.212:8000/api/verifyCode";
        this.remoteService.getPosts2(this.url, body).subscribe(function (data) {
            console.log(data);
            _this.udata = data;
            if (data.responseCode == 1) {
                _this.class = "toast-success";
                console.log(data);
                _this.presentToast("Welcome " + data.data.fullName);
            }
            else if (data.responseCode == 0) {
                _this.class = "toast-failure";
                _this.presentToast("Account not found!");
                // this.class="str";
            }
            else if (data.responseCode == 2) {
                _this.class = "toast-failure";
                _this.presentToast("Invalid Password!");
                //  this.class="str";
            }
            else { }
        });
    };
    BillerPage.prototype.presentToast = function (msg) {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000,
            cssClass: this.class,
            position: 'middle'
        });
        toast.onDidDismiss(function () {
            // alert(this.)
            if (_this.class == "toast-success") {
                //alert("moving to Authen");
                _this.storage.set('billeracc', _this.accountno);
                _this.storage.set('billeracc', _this.accountno);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_billerlookup_billerlookup__["a" /* BillerLookupPage */], { data: _this.data });
                // this.navCtrl.setRoot(MainPage,{data: JSON.stringify(this.udata)});
            }
            //  this.navCtrl.setRoot("ProfilePage",{data : JSON.stringify(this.udata)});
        });
        toast.present();
    };
    BillerPage.prototype.ionViewDidLoad = function () {
        try {
            this.billername = this.data.data[0].merchantName;
        }
        catch (error) {
            this.billername = 'None';
        }
    };
    BillerPage.prototype.continue = function () {
        var _this = this;
        if (this.data.data[0].lookupRequired == "true") {
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading_1.present();
            var body = { 'accountRef': this.accountno, 'user_id': '', 'productId': '', 'merchantId': '', 'serviceCode': '', 'apiIndex': '' };
            //this.url = 
            this.storage.get('id').then(function (val) {
                body.user_id = val;
                body.productId = _this.data.data[0].productId;
                body.apiIndex = _this.data.data[0].apiIndex;
                body.merchantId = _this.data.data[0].merchantId;
                body.serviceCode = _this.data.data[0].serviceCode;
                _this.url = "http://34.242.75.122/api/v1/billers/lookup";
                _this.remoteService.getPosts2(_this.url, body).subscribe(function (data) {
                    console.log(data);
                    loading_1.dismiss();
                    _this.udata = data;
                    if (data.responseCode == "200") {
                        _this.class = "toast-success";
                        _this.storage.set('holder', data.data.name);
                        _this.storage.set('holder', data.data.name);
                        _this.storage.set('billeracc', _this.accountno);
                        _this.storage.set('billeracc', _this.accountno);
                        //this.presentToast("Lookup Successful");
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_billerlookup_billerlookup__["a" /* BillerLookupPage */], { data: _this.data });
                    }
                    else {
                        _this.class = "toast-failure";
                        _this.presentToast("Lookup Failed");
                    }
                });
            });
        }
        else {
            if (!this.accountno) {
                this.class = "toast-failure";
                this.presentToast("Empty fields");
            }
            else {
                this.storage.set('billeracc', this.accountno);
                this.storage.set('billeracc', this.accountno);
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_billeref_billeref__["a" /* BillerRefPage */], { data: this.data || "" });
            }
        }
    };
    return BillerPage;
}());
BillerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-biller',template:/*ion-inline-start:"/Users/DarkLord/genpay/src/pages/biller/biller.html"*/'<!--\n\n  Generated template for the BillerPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>BILLER PAYMENT</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="topbar" padding>\n\n   \n\n        <br>\n\n        <img>\n\n      <div class="topbar2">\n\n        <br>\n\n         <h1 text-center ><font color="#FFFFFF" class="app-font"><b>{{billername}}</b></font></h1>\n\n         <hr/>\n\n         <hr/>\n\n        \n\n         <br>\n\n         <br>\n\n         <br>\n\n       <ion-label text-center  ><font color="#FFFFFF"><b>Enter Account Number</b></font></ion-label>\n\n      \n\n       <ion-item transparent>\n\n       \n\n       <ion-input class="oi"  type="text"  class="btnp" [(ngModel)]="accountno" name="title"></ion-input>\n\n       \n\n       </ion-item>\n\n       <br>\n\n       <button   class="logb" [disabled]="isd" ion-button  (click)="continue()">Continue</button>\n\n       <br>\n\n      </div>\n\n     \n\n     \n\n</ion-content>\n\n'/*ion-inline-end:"/Users/DarkLord/genpay/src/pages/biller/biller.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], BillerPage);

//# sourceMappingURL=biller.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_main_main__ = __webpack_require__(32);
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







/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangepasswordPage = (function () {
    function ChangepasswordPage(loadingCtrl, remoteService, storage, toastCtrl, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.remoteService = remoteService;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.oldpass = '';
        this.newpass = '';
        this.newpassc = '';
    }
    ChangepasswordPage.prototype.changepass = function () {
        var _this = this;
        if (this.newpass.length < 1 || this.oldpass.length < 1 || this.newpassc.length < 1) {
            this.class = "toast-failure";
            this.presentToast("Empty Fields!");
        }
        else if (this.newpass != this.newpassc) {
            this.class = "toast-failure";
            this.presentToast("Passwords do not match");
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading_1.present();
            this.storage.get('id').then(function (val) {
                var body = { 'userId': val, 'oldPassword': _this.oldpass, 'newPassword': _this.newpass };
                //this.url = 
                console.log(body);
                _this.url = "http://34.242.75.122/api/v1/password/change";
                _this.remoteService.getPosts2(_this.url, body).subscribe(function (data) {
                    loading_1.dismiss();
                    console.log(data);
                    _this.udata = data;
                    if (data.responseCode == "200") {
                        _this.class = "toast-success";
                        console.log(data);
                        _this.presentToast("Password changed successfully!");
                    }
                    else if (data.responseCode == "46") {
                        _this.class = "toast-failure";
                        _this.presentToast("Old password Incorrect!");
                        // this.class="str";
                    }
                    else { }
                });
            });
        }
    };
    ChangepasswordPage.prototype.presentToast = function (msg) {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 500,
            cssClass: this.class,
            position: 'button'
        });
        toast.onDidDismiss(function () {
            // alert(this.)
            if (_this.class == "toast-success") {
                //alert("moving to Authen");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_main_main__["a" /* MainPage */]);
            }
            //  this.navCtrl.setRoot("ProfilePage",{data : JSON.stringify(this.udata)});
        });
        toast.present();
    };
    ChangepasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangepasswordPage');
    };
    return ChangepasswordPage;
}());
ChangepasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-changepassword',template:/*ion-inline-start:"/Users/DarkLord/genpay/src/pages/changepassword/changepassword.html"*/'<!--\n\n  Generated template for the ChangepasswordPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Change Password</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="topbar" padding>\n\n\n\n    <div ion-fixed >\n\n  <ion-item  transparent padding-top>\n\n     \n\n     <ion-label  floating><font color="FFFFFF"><b>Enter Old Password</b></font></ion-label>\n\n  <ion-input type="password"  class="btnp" [(ngModel)]="oldpass"  name="title"></ion-input>\n\n  </ion-item>\n\n  <ion-item  transparent >\n\n   \n\n    <ion-label   floating ><font color="FFFFFF"><b>Enter New Password</b></font> </ion-label>\n\n <ion-input type="password"  class="btnp" [(ngModel)]="newpass" name="title"></ion-input>\n\n </ion-item>\n\n <ion-item transparent >\n\n  \n\n   <ion-label   floating ><font color="FFFFFF" ><b>Confirm New Password</b> </font></ion-label>\n\n<ion-input type="password"  class="btnp" [(ngModel)]="newpassc" name="title"></ion-input>\n\n</ion-item>\n\n  <br>\n\n  <br>\n\n  <!--\n\n  <ion-item>\n\n  <ion-label floating >Enter your Password </ion-label>\n\n  <ion-input type="password" [(ngModel)]="pass" name="title"></ion-input>\n\n  </ion-item>\n\n -->\n\n  <br>\n\n  \n\n  <div >\n\n     <button   class="logb" [disabled]="isd" ion-button large (click)="changepass()">Change Password</button>\n\n      \n\n </div>\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/DarkLord/genpay/src/pages/changepassword/changepassword.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ChangepasswordPage);

//# sourceMappingURL=changepassword.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_main_main__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_settings_settings__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_remote_service_remote_service__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditprofilePage = (function () {
    function EditprofilePage(loadingCtrl, remoteService, storage, toastCtrl, navCtrl, navParams) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.remoteService = remoteService;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage.get('fullname').then(function (val) {
            //  console.log(val)
            _this.name = val;
        });
        this.storage.get('phone').then(function (val) {
            _this.phone = val;
        });
        this.storage.get('email').then(function (val) {
            //  console.log(val)
            _this.email = val;
        });
    }
    EditprofilePage.prototype.addemail = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        // http://0.0.0.0:8000/api/user/{user_id}/payHistory/{month}
        this.storage.get('id').then(function (val) {
            _this.url = "http://34.242.75.122/api/v1/user/" + val + "/email";
            //alert(this.url);
            var body = { 'email': _this.newemail };
            console.log(body);
            _this.remoteService.getPosts2(_this.url, body).subscribe(function (data) {
                console.log(data);
                loading.dismiss();
                _this.udata = data;
                //this.isd = false;
                if (data.responseCode == "200") {
                    alert("Your email has been added Succesfully");
                    _this.email = _this.udata.data.email;
                    _this.storage.set('email', _this.udata.data.email);
                    _this.storage.set('email', _this.udata.data.email);
                    _this.newemail = "";
                }
                else {
                    alert("An Error Occured Try again");
                }
                //console.log(data);
            });
        });
    };
    EditprofilePage.prototype.presentToast = function (msg) {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 500,
            cssClass: this.class,
            position: 'button'
        });
        toast.onDidDismiss(function () {
            // alert(this.)
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_main_main__["a" /* MainPage */]);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_settings_settings__["a" /* SettingsPage */]);
            if (_this.class == "toast-success") {
                //alert("moving to Authen");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_main_main__["a" /* MainPage */], { data: JSON.stringify(_this.udata) });
            }
            //  this.navCtrl.setRoot("ProfilePage",{data : JSON.stringify(this.udata)});
        });
        toast.present();
    };
    EditprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditprofilePage');
    };
    return EditprofilePage;
}());
EditprofilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-editprofile',template:/*ion-inline-start:"/Users/DarkLord/genpay/src/pages/editprofile/editprofile.html"*/'<!--\n\n  Generated template for the EditprofilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>EDIT PROFILE</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content  class="topbar" padding>\n\n\n\n <br>\n\n  <h1 text-center ><font color="#FFFFFF"class="app-font"><b>GENPAY</b></font></h1>\n\n  <br>\n\n  <div class="topbar">\n\n    <ion-item text-wrap >\n\n   <font color="#23aadb"><b>Name:</b></font>&nbsp;&nbsp;<font color="#23aadb"><b>{{name}}</b></font>\n\n    </ion-item>\n\n    <ion-item text-wrap >\n\n        <font color="#23aadb"><b>Phone No:</b></font>&nbsp;&nbsp;<font color="#23aadb"><b>{{phone}}</b></font>\n\n         </ion-item  >\n\n         <ion-item text-wrap >\n\n            <font color="#23aadb"><b>Email:</b></font>&nbsp;&nbsp;<font color="#23aadb"><b>{{email}}</b></font>\n\n             </ion-item>\n\n   \n\n</div>\n\n<ion-item transparent >\n\n\n\n\n\n<ion-input   type="email"  class="btnp" [(ngModel)]="newemail" name="title"></ion-input>\n\n\n\n</ion-item>\n\n<br>\n\n<button   class="logb" [disabled]="isd" ion-button  (click)="addemail()">Add Email address</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/DarkLord/genpay/src/pages/editprofile/editprofile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], EditprofilePage);

//# sourceMappingURL=editprofile.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_remote_service_remote_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__statement_statement__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__historydata_historydata__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoryPage = (function () {
    function HistoryPage(loadingCtrl, navParams, storage, toastCtrl, navCtrl, remoteService) {
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.remoteService = remoteService;
        // placeholderDate: null;
        this.billername = '';
        this.options = {
            message: '',
            duration: 1000,
            cssClass: this.class,
            position: 'middle'
        };
    }
    HistoryPage.prototype.today = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        // http://0.0.0.0:8000/api/user/{user_id}/payHistory/{month}
        this.storage.get('id').then(function (val) {
            _this.url = "http://34.242.75.122/api/v1/user/" + val + "/payHistory/today";
            //alert(this.url);
            var body = {};
            _this.remoteService.getPosts(_this.url).subscribe(function (data) {
                console.log(data);
                loading.dismiss();
                _this.udata = data;
                //this.isd = false;
                if (data.responseCode == "200") {
                    _this.class = "toast-success";
                    _this.options.duration = 1;
                    _this.presentToast("");
                }
                else {
                    _this.class = "toast-failure";
                    alert("No History Data Available");
                    //  this.presentToast("No History Data Available");
                }
                //console.log(data);
            });
        });
    };
    HistoryPage.prototype.week = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        // http://0.0.0.0:8000/api/user/{user_id}/payHistory/{month}
        this.storage.get('id').then(function (val) {
            _this.url = "http://34.242.75.122/api/v1/user/" + val + "/payHistory/week";
            //alert(this.url);
            var body = {};
            _this.remoteService.getPosts(_this.url).subscribe(function (data) {
                console.log(data);
                loading.dismiss();
                _this.udata = data;
                //this.isd = false;
                if (data.responseCode == "200") {
                    _this.class = "toast-success";
                    _this.options.duration = 1;
                    _this.presentToast("");
                }
                else {
                    _this.class = "toast-failure";
                    alert("No History Data Available");
                    //  this.presentToast("No History Data Available");
                }
                //console.log(data);
            });
        });
    };
    HistoryPage.prototype.month = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        // http://0.0.0.0:8000/api/user/{user_id}/payHistory/{month}
        this.storage.get('id').then(function (val) {
            _this.url = "http://34.242.75.122/api/v1/user/" + val + "/payHistory/month";
            //alert(this.url);
            var body = {};
            _this.remoteService.getPosts(_this.url).subscribe(function (data) {
                console.log(data);
                loading.dismiss();
                _this.udata = data;
                //this.isd = false;
                if (data.responseCode == "200") {
                    _this.class = "toast-success";
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__historydata_historydata__["a" /* HistoryDataPage */], { data: _this.udata });
                    //this.options.duration= 1;
                    //this.presentToast("");
                }
                else {
                    _this.class = "toast-failure";
                    alert("No History Data Available");
                    //this.presentToast("No History Data Available");
                }
                //console.log(data);
            });
        });
    };
    HistoryPage.prototype.statement = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__statement_statement__["a" /* StatementPage */]);
    };
    HistoryPage.prototype.presentToast = function (msg) {
        var _this = this;
        this.options.message = msg;
        var toast = this.toastCtrl.create(this.options);
        var s = 2;
        toast.onDidDismiss(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__historydata_historydata__["a" /* HistoryDataPage */], { data: _this.udata });
        });
        toast.present();
    };
    HistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoryPage');
    };
    return HistoryPage;
}());
HistoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/DarkLord/genpay/src/pages/history/history.html"*/'<!--\n\n  Generated template for the SettingsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Payment History</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="topbar"padding>\n\n  <br><br>\n\n  <ion-item-divider class="bilh" color="#003e70">  <font color="#23aadb"><b>History</b></font></ion-item-divider>\n\n  <ion-item  detail-push  class="listh" (click)="today()">\n\n    <font color="#23aadb" >\n\n       <font class="bil">Today</font>\n\n        \n\n    </font>\n\n    <br>\n\n    </ion-item>\n\n  <ion-item  detail-push  class="listh" (click)="week()">\n\n    <font color="#23aadb" >\n\n       <font class="bil">This Week</font>\n\n        \n\n    </font>\n\n    <br>\n\n    </ion-item>\n\n    <ion-item  detail-push  class="listh" (click)="month()">\n\n        <font color="#23aadb">\n\n           <font class="bil">This Month</font>\n\n            \n\n        </font>\n\n        <br>\n\n        </ion-item>\n\n        <div></div>\n\n    <br>\n\n    <ion-item-divider class="bilh" color="#003e70">  <font color="#23aadb"><b>Statement</b></font></ion-item-divider>\n\n  \n\n    <ion-item  detail-push  class="listh" (click)="statement()">\n\n      <font color="#23aadb">\n\n         <font class="bil">Email Statement</font>\n\n          \n\n      </font>\n\n      <br>\n\n      </ion-item>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/DarkLord/genpay/src/pages/history/history.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */]])
], HistoryPage);

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_remote_service_remote_service__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StatementPage = (function () {
    function StatementPage(loadingCtrl, navParams, storage, toastCtrl, navCtrl, remoteService) {
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.remoteService = remoteService;
        this.billername = '';
    }
    StatementPage.prototype.setDate = function (event) {
        this.from = new Date(event);
    };
    StatementPage.prototype.setDateT = function (event) {
        this.to = new Date(event);
    };
    StatementPage.prototype.statement = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        // http://0.0.0.0:8000/api/user/{user_id}/payHistory/{month}
        this.storage.get('id').then(function (val) {
            _this.url = "http://34.242.75.122/api/v1/user/" + val + "/statement";
            //alert(this.url);
            var body = { 'user_id': val, 'from': _this.from, 'to': _this.to };
            console.log(body);
            _this.remoteService.getPosts2(_this.url, body).subscribe(function (data) {
                console.log(data);
                setTimeout(function () {
                    loading.dismiss();
                }, 6000);
                loading.dismiss();
                _this.udata = data;
                //this.isd = false;
                if (data.responseCode == "200") {
                    alert("Success! Statement has been sent your email");
                }
                else if (data.responseCode == "400") {
                    alert("Please Add an Email First in Settings");
                }
                else if (data.responseCode == "401") {
                    alert("Kindly Verify your email the Link has been sent");
                }
                else if (data.responseCode == "44") {
                    alert("No Transaction History Available");
                }
                else {
                }
                //console.log(data);
            });
        });
    };
    StatementPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 1000,
            cssClass: this.class,
            position: 'button'
        });
        var s = 2;
        toast.onDidDismiss(function () {
        });
        toast.present();
    };
    StatementPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoryPage');
    };
    return StatementPage;
}());
StatementPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/DarkLord/genpay/src/pages/statement/statement.html"*/'<!--\n\n  Generated template for the SettingsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Email Statement</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="topbar" padding>\n\n\n\n  \n\n  <ion-item-divider color="#003e70"class="bil" > <font color="#23aadb"> <b>Transactions Statement</b></font></ion-item-divider>\n\n\n\n  <ion-item>\n\n    <span ion-datepicker (ionChanged)="setDate($event);" ([value])="from"  clear class="ScheduleDate">\n\n      <span><font color="#23aadb">From:<ion-icon name="clipboard" item-left ></ion-icon></font><font color="#23aadb">{{from | date}}</font></span>\n\n      <div></div>\n\n    </span>\n\n  \n\n  </ion-item>\n\n  <ion-item>\n\n    <span ion-datepicker (ionChanged)="setDateT($event);" ([value])="to"  clear class="ScheduleDate">\n\n      <span><font color="#23aadb">To: &nbsp;&nbsp;&nbsp; <ion-icon name="clipboard" item-left ></ion-icon></font><font color="#23aadb">{{to | date}}</font></span>\n\n    </span>\n\n   </ion-item>\n\n\n\n  <br>\n\n   <button ion-button (click)="statement()"large right>Send Statement</button>\n\n\n\n   \n\n    <br><br>\n\n  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/DarkLord/genpay/src/pages/statement/statement.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */]])
], StatementPage);

//# sourceMappingURL=statement.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryDataPage; });
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
var HistoryDataPage = (function () {
    function HistoryDataPage(loadingCtrl, remoteService, storage, toastCtrl, navCtrl, navParams) {
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
        this.data = this.navParams.get("data").data;
    }
    HistoryDataPage.prototype.ga = function () {
    };
    HistoryDataPage.prototype.passdata = function (val) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var url = "http://172.18.12.212:8000/api/billers/" + val.merchantId.toString() + "/" + val.ova.toString();
        //alert(this.url);
        var body = {};
        this.remoteService.getPosts(url).subscribe(function (data) {
            console.log(data);
            loading.dismiss();
            // this.udata = data;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_biller_biller__["a" /* BillerPage */], { data: data });
            //console.log(data);
        });
        //console.log(val)
        // alert(val.phonenumber);
        // this.sparam = val.phonenumber;
        //console.log("Happy");
    };
    HistoryDataPage.prototype.searchFn = function (ev) {
        this.term = ev.target.value;
    };
    HistoryDataPage.prototype.searchchanged = function (ch) {
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
    return HistoryDataPage;
}());
HistoryDataPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/DarkLord/genpay/src/pages/historydata/historydata.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n    <ion-title>History</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="topbar"padding>\n\n\n\n<ion-item color="#23aadb" text-wrap class="listh" *ngFor="let d of data" >\n\n\n\n  <font color=#23aadb><b>{{d.merchantName}}</b></font> <font color="#23aadb"float-right><b>GHS {{d.amount}}</b></font><br>\n\n\n\n   <br>\n\n\n\n    <font color="#23aadb" float-left>{{d.created_at}}</font>\n\n\n\n\n\n</ion-item>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/DarkLord/genpay/src/pages/historydata/historydata.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], HistoryDataPage);

//# sourceMappingURL=historydata.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillerPayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_main_main__ = __webpack_require__(32);
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







/**
 * Generated class for the BillerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BillerPayPage = (function () {
    function BillerPayPage(loadingCtrl, remoteService, storage, toastCtrl, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.remoteService = remoteService;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.billername = '';
        this.data = this.navParams.get("data");
        console.log(this.data);
    }
    BillerPayPage.prototype.changepass = function () {
        var _this = this;
        var body = {};
        //this.url = 
        this.url = "/api/verifyCode";
        this.remoteService.getPosts2(this.url, body).subscribe(function (data) {
            console.log(data);
            _this.udata = data;
            if (data.responseCode == 1) {
                _this.class = "toast-success";
                console.log(data);
                _this.presentToast("Welcome " + data.data.fullName);
            }
            else if (data.responseCode == 0) {
                _this.class = "toast-failure";
                _this.presentToast("Account not found!");
                // this.class="str";
            }
            else if (data.responseCode == 2) {
                _this.class = "toast-failure";
                _this.presentToast("Invalid Password!");
                //  this.class="str";
            }
            else { }
        });
    };
    BillerPayPage.prototype.presentToast = function (msg) {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000,
            cssClass: this.class,
            position: 'middle'
        });
        toast.onDidDismiss(function () {
            // alert(this.)
            if (_this.class == "toast-success") {
                //alert("moving to Authen");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_main_main__["a" /* MainPage */]);
            }
            //  this.navCtrl.setRoot("ProfilePage",{data : JSON.stringify(this.udata)});
        });
        toast.present();
    };
    BillerPayPage.prototype.ionViewDidLoad = function () {
        try {
            this.billername = this.data.data[0].merchantName;
        }
        catch (error) {
            this.billername = 'None';
        }
    };
    BillerPayPage.prototype.pay2 = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var body = { 'ova': '', 'user_accountRef': '', 'amount': this.amount, 'paymentRef': '', 'user_id': '', 'product_id': '', 'merchant_id': '', 'merchant_name': '' };
        //this.url = 
        this.url = "http://34.242.75.122/api/v1/payment/pay";
        //var body = {'accountRef':this.accountno,'user_id':'','productId':'','merchantId':'','serviceCode':'','apiIndex':''   };
        //this.url = 
        this.storage.get('ovat').then(function (valova) {
            body.ova = valova;
            _this.storage.get('id').then(function (val) {
                body.user_id = val;
                _this.storage.get('payref').then(function (val2) {
                    body.paymentRef = val2;
                    _this.storage.get('billeracc').then(function (val3) {
                        body.user_accountRef = val3;
                        body.merchant_id = _this.data.data[0].merchantId;
                        body.merchant_name = _this.data.data[0].merchantName;
                        body.product_id = _this.data.data[0].productId;
                        console.log(body);
                        _this.remoteService.getPosts2(_this.url, body).subscribe(function (data) {
                            console.log(data);
                            loading.dismiss();
                            _this.udata = data;
                            if (data.responseCode == "200") {
                                _this.class = "toast-success";
                                console.log(data);
                                alert("A Bill prompt has been sent to you");
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_main_main__["a" /* MainPage */]);
                                //   this.presentToast("Success, A bill prompt has been sent");
                            }
                            else {
                                _this.class = "toast-failure";
                                console.log(data);
                                _this.presentToast("An Error Occured");
                            }
                        });
                    });
                });
            });
        });
    };
    BillerPayPage.prototype.pay = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
            _this.class = "toast-failure";
            _this.presentToast("No Further Data");
        }, 2000);
    };
    return BillerPayPage;
}());
BillerPayPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-biller',template:/*ion-inline-start:"/Users/DarkLord/genpay/src/pages/billerpay/billerpay.html"*/'<!--\n\n  Generated template for the BillerPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>BILLER PAYMENT</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="topbar" padding>\n\n \n\n        <br>\n\n        <img>\n\n        <div class="topbar2">\n\n         <h1 text-center ><font color="#FFFFFF" lass="app-font"><b>{{billername}}</b></font></h1>\n\n         <br>\n\n         <br>\n\n         <br>\n\n         <br>\n\n       <ion-label text-center><font color="#FFFFFF"><b>Enter Amount</b></font></ion-label>\n\n       <ion-item transparent>\n\n       \n\n       <ion-input type="text"  class="btnp" [(ngModel)]="amount" name="title"></ion-input>\n\n       \n\n       </ion-item>\n\n       <br>\n\n       <button   class="logb" [disabled]="isd" ion-button large (click)="pay2()">Pay</button>\n\n       <br>\n\n       \n\n      </div>\n\n     \n\n      \n\n</ion-content>\n\n'/*ion-inline-end:"/Users/DarkLord/genpay/src/pages/billerpay/billerpay.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], BillerPayPage);

//# sourceMappingURL=billerpay.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillerLookupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_remote_service_remote_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_billeref_billeref__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the BillerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BillerLookupPage = (function () {
    function BillerLookupPage(loadingCtrl, remoteService, storage, toastCtrl, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.remoteService = remoteService;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.billername = '';
        this.data = this.navParams.get("data");
        console.log(this.data);
    }
    BillerLookupPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        try {
            this.billername = this.data.data[0].merchantName;
            this.storage.get('holder').then(function (val) {
                _this.holder = val;
            });
        }
        catch (error) {
            this.billername = 'None';
        }
    };
    BillerLookupPage.prototype.continue = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_billeref_billeref__["a" /* BillerRefPage */], { data: this.data });
    };
    return BillerLookupPage;
}());
BillerLookupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-biller',template:/*ion-inline-start:"/Users/DarkLord/genpay/src/pages/billerlookup/billerlookup.html"*/'<!--\n\n  Generated template for the BillerPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>BILLER PAYMENT</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="topbar" padding>\n\n  \n\n        <br>\n\n        <img>\n\n        <div class="topbar2">\n\n         <h1 text-center ><font color="#FFFFFF"   class="app-font"><b>{{billername}}</b></font></h1>\n\n         <br>\n\n         <br>\n\n         <br>\n\n         <br>\n\n       <ion-label text-center><font color="#FFFFFF"><b>Account Holder Name</b></font></ion-label>\n\n       <ion-item transparent>\n\n       \n\n     <ion-label text-center><font color="FFFFFF">{{holder}}</font></ion-label>\n\n       </ion-item>\n\n       <br>\n\n       <button   class="logb" [disabled]="isd" ion-button  (click)="continue()">Continue</button>\n\n       <br>\n\n      </div>\n\n     \n\n      \n\n</ion-content>\n\n'/*ion-inline-end:"/Users/DarkLord/genpay/src/pages/billerlookup/billerlookup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], BillerLookupPage);

//# sourceMappingURL=billerlookup.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecentBillersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_recentbillers2_recentbillers2__ = __webpack_require__(120);
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
var RecentBillersPage = (function () {
    function RecentBillersPage(loadingCtrl, remoteService, storage, toastCtrl, navCtrl, navParams) {
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
        this.data = this.navParams.get("data").data;
    }
    RecentBillersPage.prototype.ga = function () {
    };
    RecentBillersPage.prototype.recentacc = function (biller) {
        var _this = this;
        console.log(biller);
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        // http://0.0.0.0:8000/api/user/{user_id}/payHistory/{month}
        this.storage.get('id').then(function (val) {
            var url = "http://34.242.75.122/api/v1/recent/" + val + "/accounts";
            //alert(this.url);
            var body = { 'merchant_id': biller.merchant_id };
            _this.remoteService.getPosts2(url, body).subscribe(function (data) {
                console.log(data);
                loading.dismiss();
                //this.udata = data;
                //this.isd = false;
                if (data.responseCode == "200") {
                    // this.class ="toast-success";
                    //alert()
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_recentbillers2_recentbillers2__["a" /* RecentBillers2Page */], { data: data });
                }
                else {
                    alert("Sorry an Error occured try again ");
                }
                //console.log(data);
            });
        });
    };
    return RecentBillersPage;
}());
RecentBillersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/DarkLord/genpay/src/pages/recentbillers/recentbillers.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n    <ion-title>Recent Billers</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="topbar"padding>\n\n\n\n<ion-item detail-push  color="#23aadb" text-wrap class="listh"  (click)="recentacc(d)" *ngFor="let d of data" >\n\n\n\n  <font color=#23aadb><b>{{d.merchantName}}</b></font>  <font color="#23aadb" float-right></font>\n\n\n\n\n\n</ion-item>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/DarkLord/genpay/src/pages/recentbillers/recentbillers.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], RecentBillersPage);

//# sourceMappingURL=recentbillers.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecentBillers2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_remote_service_remote_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__billeref_billeref__ = __webpack_require__(45);
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
var RecentBillers2Page = (function () {
    function RecentBillers2Page(loadingCtrl, remoteService, storage, toastCtrl, navCtrl, navParams) {
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
        this.data = this.navParams.get("data");
        this.data2 = this.data.data;
    }
    RecentBillers2Page.prototype.ga = function () {
    };
    RecentBillers2Page.prototype.recentacc2 = function (account) {
        this.storage.set('billeracc', account.accountRef);
        this.storage.set('ovat', account.ova);
        //alert(account.merchantName);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__billeref_billeref__["a" /* BillerRefPage */], { data: this.data });
    };
    return RecentBillers2Page;
}());
RecentBillers2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/DarkLord/genpay/src/pages/recentbillers2/recentbillers2.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n    <ion-title>Recent Billers</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="topbar"padding>\n\n\n\n<ion-item detail-push  color="#23aadb" text-wrap class="listh"  (click)="recentacc2(d)" *ngFor="let d of data2" >\n\n\n\n  <font color=#23aadb><b>{{d.accountRef}}</b></font>  <font color="#23aadb" float-right></font>\n\n\n\n\n\n</ion-item>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/DarkLord/genpay/src/pages/recentbillers2/recentbillers2.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], RecentBillers2Page);

//# sourceMappingURL=recentbillers2.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_authenticate_authenticate__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_remote_service_remote_service__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(storage, loadingCtrl, toastCtrl, navCtrl, remoteService) {
        // storage.set('test2', 'Max');
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.remoteService = remoteService;
        this.postList = [];
        this.itclogo = "itclogo.png";
        this.btnt = "Continue";
        this.isd = false;
        this.url = "";
        this.getApiUrl = "https://jsonplaceholder.typicode.com/posts/1";
        // Or to get a key/value pair
    }
    RegisterPage.prototype.register = function () {
        //alert(this.url);
        if (!this.firstname) {
            this.class = "toast-failure";
            this.presentToast("Firstname required!");
        }
        else if (!this.lastname) {
            this.class = "toast-failure";
            this.presentToast("Lastname required!");
        }
        else if (!this.password) {
            this.class = "toast-failure";
            this.presentToast("Password required!");
        }
        else if (this.password.length < 8) {
            this.class = "toast-failure";
            this.presentToast("Too Short password Mininum length is 8!");
        }
        else if (!this.passwordc) {
            this.class = "toast-failure";
            this.presentToast("Password required!");
        }
        else if (!this.phone || this.phone.length < 10 || this.phone.length > 10) {
            this.class = "toast-failure";
            this.presentToast("Invalid Phone Number!");
        }
        else {
            this.isd = true;
            this.btnt = "Please wait.....";
            // this.url="http://gyara.herokuapp.com/logintest/"+this.user.toString()+"/"+this.pass.toString();
            this.url = "http://34.242.75.122/api/v1/register";
            var body = { 'phoneNumber': this.phone.toString() || '', 'firstName': this.firstname.toString() || '', 'lastName': this.lastname.toString() || '', 'password': this.password.toString() || '', 'password_confirmation': this.passwordc.toString() || '' };
            console.log(body);
            this.getPost2(this.url, body);
        }
    };
    RegisterPage.prototype.getPost2 = function (url, body) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.remoteService.getPosts2(url, body).subscribe(function (data) {
            loading.dismiss();
            console.log(data);
            _this.udata = _this.phone.toString();
            _this.btnt = "Continue";
            _this.isd = false;
            if (data.responseCode == "200") {
                _this.class = "toast-success";
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_authenticate_authenticate__["a" /* AuthenticatePage */], { data: JSON.stringify(_this.udata) });
                // this.presentToast("Registration succesfull");
                // this.class ="str";
            }
            else if (data.responseCode == "203") {
                _this.class = "toast-failure";
                //  this.presentToast);
                alert("Account Already Exists, Login!");
                _this.class = "str";
            }
            else if (data.responseCode == "400") {
                _this.class = "toast-failure";
                //this.presentToast("Validation failed");
                _this.class = "str";
                alert("Validation faiiled!");
            }
            else if (data.responseCode == "34") {
                _this.class = "toast-failure";
                //this.presentToast("Invalid Phone Number");
                alert("Invalid Phone Number");
                _this.class = "str";
            }
        });
    };
    RegisterPage.prototype.presentToast = function (msg) {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000,
            cssClass: this.class,
            position: 'middle'
        });
        toast.onDidDismiss(function () {
            // alert(this.)
            if (_this.class == "toast-success") {
                //alert("moving to Authen");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_authenticate_authenticate__["a" /* AuthenticatePage */], { data: JSON.stringify(_this.udata) });
            }
            //  this.navCtrl.setRoot("ProfilePage",{data : JSON.stringify(this.udata)});
        });
        toast.present();
    };
    RegisterPage.prototype.goback = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        /*
        this.storage.ready().then(() => {
          this.storage.get('test2').then((val) => {
                console.log(val);
              });
              
            
        
              });
              */
        this.btnt = "Continue";
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/Users/DarkLord/genpay/src/pages/register/register.html"*/'\n\n<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>\n\n     Register\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content text-center class="getstart">\n\n    <div style="margin: 0 auto; display: block;" >\n\n      <img     height="80"  src="assets/images/itclogo.png" />\n\n    </div>\n\n       \n\n  \n\n          <ion-item no-padding transparent  >\n\n              <ion-label floating >\n\n            <font color="#FFFFFF">\n\n              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;<ion-icon color="#23aadb"  name="person"></ion-icon>\n\n          \n\n      \n\n              &nbsp;&nbsp; <b>First Name</b>\n\n          </font>\n\n        </ion-label>\n\n            <ion-input required type="text" [(ngModel)]="firstname"></ion-input>\n\n          </ion-item>\n\n          <ion-item no-padding transparent>\n\n               <ion-label floating>\n\n       <font color="#FFFFFF">\n\n        &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; <ion-icon color="#23aadb" item-left name="person"></ion-icon>\n\n           \n\n         <b>Last Name</b>\n\n       </font>\n\n       </ion-label>\n\n            <ion-input required type="text" [(ngModel)]="lastname"></ion-input>\n\n          </ion-item>\n\n          <ion-item no-padding transparent>\n\n              <ion-label floating>\n\n              <font color="#FFFFFF">\n\n                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;     <ion-icon color="#23aadb"  item-left name="call"></ion-icon>\n\n       \n\n      <b>Phone Number</b>\n\n      </font>\n\n    </ion-label>\n\n  \n\n            <ion-input required type="number" [(ngModel)]="phone"></ion-input>\n\n          </ion-item>\n\n          <ion-item no-padding transparent>\n\n              <ion-label floating>\n\n              <font color="#FFFFFF">\n\n                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  <ion-icon color="#23aadb"  item-left name="key"></ion-icon>\n\n  \n\n           <b>Password</b>\n\n            </font>\n\n          </ion-label>\n\n            <ion-input required type="password" [(ngModel)]="password"></ion-input>\n\n          </ion-item>\n\n          <ion-item no-padding transparent>\n\n              <ion-label floating>\n\n              <font color="#FFFFFF">\n\n          \n\n                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  <ion-icon  color="#23aadb"  item-left name="key"></ion-icon>\n\n          <b>Confirm Password</b>\n\n            </font>\n\n          </ion-label>\n\n            <ion-input required type="password" [(ngModel)]="passwordc"></ion-input>\n\n          </ion-item>\n\n         \n\n        \n\n          <br>\n\n          <button ion-button   left [strong]="true" (click)="goback()">Go  Back</button>\n\n          <button ion-button  right [strong]="true" (click)="register()">{{btnt}}</button>\n\n        \n\n  \n\n  </ion-content>'/*ion-inline-end:"/Users/DarkLord/genpay/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_remote_service_remote_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forgot2_forgot2__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the BillerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPage = (function () {
    function ForgotPage(loadingCtrl, remoteService, storage, toastCtrl, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.remoteService = remoteService;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.billername = '';
        this.pt = '';
    }
    ForgotPage.prototype.forgot = function () {
        var _this = this;
        var body = { 'phoneNumber': this.phone };
        this.pt = this.phone;
        //this.url = 
        this.url = "http://34.242.75.122/api/v1/password/verify";
        //  this.url="http://172.18.12.212:8000/api/v1/password/verify"
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.remoteService.getPosts2(this.url, body).subscribe(function (data) {
            loading.dismiss();
            console.log(data);
            _this.udata = data;
            if (data.responseCode == "200") {
                _this.class = "toast-success";
                console.log(data);
                _this.presentToast("Verification SMS has been sent to you");
            }
            else if (data.responseCode == "44") {
                _this.class = "toast-failure";
                console.log(data);
                _this.presentToast("This Account does not exist");
            }
            else {
                _this.class = "toast-failure";
                _this.presentToast("An Error Occured!");
            }
        });
    };
    ForgotPage.prototype.changepass = function () {
    };
    ForgotPage.prototype.presentToast = function (msg) {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            cssClass: this.class,
            position: 'middle'
        });
        toast.onDidDismiss(function () {
            // alert(this.)
            if (_this.class == "toast-success") {
                //alert("moving to Authen");
                // this.navCtrl.push(Forgot2Page);
                console.log(_this.phone);
                console.log(_this.pt);
                console.log(".................");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__forgot2_forgot2__["a" /* Forgot2Page */], { data: _this.pt });
            }
            //  this.navCtrl.setRoot("ProfilePage",{data : JSON.stringify(this.udata)});
        });
        toast.present();
    };
    ForgotPage.prototype.ionViewDidLoad = function () {
    };
    return ForgotPage;
}());
ForgotPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/DarkLord/genpay/src/pages/forgot/forgot.html"*/'<!--\n\n  Generated template for the BillerPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Forgot Password</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="getstart">\n\n  \n\n      <br><br>\n\n\n\n       <ion-item transparent>\n\n        <ion-label  floating><font color="white">Enter Phone Number</font>\n\n        </ion-label>\n\n       <ion-input type="text"  class="btnp" [(ngModel)]="phone" name="title"></ion-input>\n\n       \n\n       </ion-item>\n\n       <br>\n\n       <button   class="logb" [disabled]="isd" ion-button  (click)="forgot()">Continue</button>\n\n       \n\n      \n\n</ion-content>\n\n'/*ion-inline-end:"/Users/DarkLord/genpay/src/pages/forgot/forgot.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ForgotPage);

//# sourceMappingURL=forgot.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Forgot2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_remote_service_remote_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the BillerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Forgot2Page = (function () {
    function Forgot2Page(loadingCtrl, remoteService, storage, toastCtrl, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.remoteService = remoteService;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.billername = '';
        this.data = this.navParams.get("data");
        console.log(this.data);
    }
    Forgot2Page.prototype.forgot = function () {
        var _this = this;
        var body = { 'phoneNumber': this.data, 'code': this.code };
        console.log(body);
        //this.url = 
        this.url = "http://34.242.75.122/api/v1/password/reset";
        //this.url="http://172.18.12.212:8000/api/v1/password/reset"
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.remoteService.getPosts2(this.url, body).subscribe(function (data) {
            loading.dismiss();
            console.log(data);
            _this.udata = data;
            if (data.responseCode == "200") {
                _this.class = "toast-success";
                console.log(data);
                _this.presentToast("New Temp Password Sent Via SMS Please Login and Change to Desired Password");
            }
            else if (data.responseCode == "400") {
                _this.class = "toast-failure";
                console.log(data);
                _this.presentToast("Verification Code is Not Correct!");
            }
            else {
                _this.class = "toast-failure";
                _this.presentToast("An Error Occuered!");
            }
        });
    };
    Forgot2Page.prototype.changepass = function () {
    };
    Forgot2Page.prototype.presentToast = function (msg) {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            cssClass: this.class,
            position: 'middle'
        });
        toast.onDidDismiss(function () {
            // alert(this.)
            if (_this.class == "toast-success") {
                //alert("moving to Authen");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            }
            //  this.navCtrl.setRoot("ProfilePage",{data : JSON.stringify(this.udata)});
        });
        toast.present();
    };
    Forgot2Page.prototype.ionViewDidLoad = function () {
    };
    return Forgot2Page;
}());
Forgot2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/DarkLord/genpay/src/pages/forgot2/forgot2.html"*/'<!--\n\n  Generated template for the BillerPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Forgot Password</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="getstart">\n\n  \n\n      <br><br>\n\n\n\n       <ion-item transparent>\n\n        <ion-label floating><font color="white">Enter Confirmation Code</font></ion-label>\n\n       <ion-input type="text"  class="btnp" [(ngModel)]="code" name="title"></ion-input>\n\n       \n\n       </ion-item>\n\n       <br>\n\n       <button   class="logb" [disabled]="isd" ion-button  (click)="forgot()">Recover</button>\n\n       \n\n      \n\n</ion-content>\n\n'/*ion-inline-end:"/Users/DarkLord/genpay/src/pages/forgot2/forgot2.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], Forgot2Page);

//# sourceMappingURL=forgot2.js.map

/***/ }),

/***/ 132:
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
webpackEmptyAsyncContext.id = 132;

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/authenticate/authenticate.module": [
		302,
		18
	],
	"../pages/biller/biller.module": [
		303,
		17
	],
	"../pages/billeref/billeref.module": [
		304,
		16
	],
	"../pages/billerlookup/billerlookup.module": [
		305,
		15
	],
	"../pages/billerpay/billerpay.module": [
		306,
		14
	],
	"../pages/changepassword/changepassword.module": [
		307,
		13
	],
	"../pages/editprofile/editprofile.module": [
		308,
		12
	],
	"../pages/forgot/forgot.module": [
		309,
		11
	],
	"../pages/forgot2/forgot2.module": [
		310,
		10
	],
	"../pages/history/history.module": [
		312,
		9
	],
	"../pages/historydata/historydata.module": [
		311,
		4
	],
	"../pages/main/main.module": [
		314,
		8
	],
	"../pages/profile/profile.module": [
		313,
		1
	],
	"../pages/profilecat/profilecat.module": [
		315,
		0
	],
	"../pages/recentbillers/recentbillers.module": [
		316,
		3
	],
	"../pages/recentbillers2/recentbillers2.module": [
		317,
		2
	],
	"../pages/register/register.module": [
		318,
		7
	],
	"../pages/settings/settings.module": [
		319,
		6
	],
	"../pages/statement/statement.module": [
		320,
		5
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 174;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(243);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic3_datepicker__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_remote_service_remote_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_onesignal__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_authenticate_authenticate__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_register_register__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_main_main__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_changepassword_changepassword__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_editprofile_editprofile__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_biller_biller__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_historydata_historydata__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_billeref_billeref__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_billerpay_billerpay__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_billerlookup_billerlookup__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_history_history__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_statement_statement__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_forgot_forgot__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_recentbillers_recentbillers__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_recentbillers2_recentbillers2__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_forgot2_forgot2__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_vibration__ = __webpack_require__(180);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//import { RemoteServiceProvider } from '../providers/remote-service/remote-service';
























//mport { SearchPipe } from '../pipes/search/search';
//import { SearchBarLayout3 } from '../components/search-bar/layout-3/search-bar-layout-3';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_billeref_billeref__["a" /* BillerRefPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_main_main__["a" /* MainPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_forgot2_forgot2__["a" /* Forgot2Page */],
            __WEBPACK_IMPORTED_MODULE_19__pages_historydata_historydata__["a" /* HistoryDataPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_history_history__["a" /* HistoryPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_statement_statement__["a" /* StatementPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_forgot_forgot__["a" /* ForgotPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_recentbillers_recentbillers__["a" /* RecentBillersPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_billerpay_billerpay__["a" /* BillerPayPage */],
            //ProfilePage2,
            __WEBPACK_IMPORTED_MODULE_27__pages_recentbillers2_recentbillers2__["a" /* RecentBillers2Page */],
            __WEBPACK_IMPORTED_MODULE_22__pages_billerlookup_billerlookup__["a" /* BillerLookupPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_biller_biller__["a" /* BillerPage */],
            //SearchPipe,
            __WEBPACK_IMPORTED_MODULE_17__pages_editprofile_editprofile__["a" /* EditprofilePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_authenticate_authenticate__["a" /* AuthenticatePage */]
            //  SearchPipe
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5_ionic3_datepicker__["a" /* DatePickerModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/authenticate/authenticate.module#AuthenticatePageModule', name: 'AuthenticatePage', segment: 'authenticate', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/biller/biller.module#BillerPageModule', name: 'BillerPage', segment: 'biller', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/billeref/billeref.module#BillerRefPageModule', name: 'BillerRefPage', segment: 'billeref', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/billerlookup/billerlookup.module#BillerLookupPageModule', name: 'BillerLookupPage', segment: 'billerlookup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/billerpay/billerpay.module#BillerPayPageModule', name: 'BillerPayPage', segment: 'billerpay', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/changepassword/changepassword.module#ChangepasswordPageModule', name: 'ChangepasswordPage', segment: 'changepassword', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/editprofile/editprofile.module#EditprofilePageModule', name: 'EditprofilePage', segment: 'editprofile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/forgot/forgot.module#ForgotPageModule', name: 'ForgotPage', segment: 'forgot', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/forgot2/forgot2.module#ForgotPage2Module', name: 'Forgot2Page', segment: 'forgot2', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/historydata/historydata.module#HistoryDataPageModule', name: 'HistoryDataPage', segment: 'historydata', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profilecat/profilecat.module#ProfilePageCatModule', name: 'ProfilePageCat', segment: 'profilecat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/recentbillers/recentbillers.module#RecentBillersPageModule', name: 'RecentBillersPage', segment: 'recentbillers', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/recentbillers2/recentbillers2.module#RecentBillers2PageModule', name: 'RecentBillers2Page', segment: 'recentbillers2', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/statement/statement.module#StatementPageModule', name: 'StatementPage', segment: 'statement', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                name: '__mydb',
                driverOrder: ['sqlite', 'websql', 'indexeddb']
            }),
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* HttpModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_main_main__["a" /* MainPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_historydata_historydata__["a" /* HistoryDataPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_billerpay_billerpay__["a" /* BillerPayPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_forgot_forgot__["a" /* ForgotPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_forgot2_forgot2__["a" /* Forgot2Page */],
            __WEBPACK_IMPORTED_MODULE_26__pages_recentbillers_recentbillers__["a" /* RecentBillersPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_recentbillers2_recentbillers2__["a" /* RecentBillers2Page */],
            // ProfilePage2,
            __WEBPACK_IMPORTED_MODULE_22__pages_billerlookup_billerlookup__["a" /* BillerLookupPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_authenticate_authenticate__["a" /* AuthenticatePage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_history_history__["a" /* HistoryPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_biller_biller__["a" /* BillerPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_billeref_billeref__["a" /* BillerRefPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_statement_statement__["a" /* StatementPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_editprofile_editprofile__["a" /* EditprofilePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__["a" /* SettingsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_29__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_8__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import {  ItemDetailsPageRegister  } from '../pages/item-details-register/item-details-register';
var MyApp = (function () {
    function MyApp(oneSignal, platform, statusBar, splashScreen) {
        var _this = this;
        this.oneSignal = oneSignal;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.notificationOpenedCallback = function (jsonData) {
            console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
        };
        this.getApiUrl = "https://jsonplaceholder.typicode.com/posts";
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            //  this.oss.startInit("4975cd1d-9d10-41c8-9cda-c5852513ab7f", "347536568651")
            //  .handleNotificationOpened(this.notificationOpenedCallback)
            //  .endInit();
            try {
                //this.oneSignal.startInit('4975cd1d-9d10-41c8-9cda-c5852513ab7f', '347536568651');
                _this.oneSignal.startInit('82928709-50f8-4861-830f-a57f718bb3f7', '813645120142');
                _this.oneSignal.inFocusDisplaying(_this.oneSignal.OSInFocusDisplayOption.Notification);
                _this.oneSignal.handleNotificationReceived().subscribe(function () {
                    // do something when notification is received
                });
                _this.oneSignal.handleNotificationOpened().subscribe(function () {
                    // do something when a notification is opened
                });
                //this.oneSignal.enableVibrate(true);
                _this.oneSignal.endInit();
            }
            catch (error) {
            }
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/DarkLord/genpay/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"/Users/DarkLord/genpay/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_onesignal__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_remote_service_remote_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_history_history__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_recentbillers_recentbillers__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MainPage = (function () {
    function MainPage(oneSignal, loadingCtrl, navParams, storage, toastCtrl, navCtrl, remoteService) {
        var _this = this;
        this.oneSignal = oneSignal;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.remoteService = remoteService;
        this.name = '';
        this.sl = [];
        this.ga = [];
        this.ut = [];
        this.bng = [];
        this.rt = [];
        this.pt = [];
        this.options = {
            message: '',
            duration: 1000,
            cssClass: this.class,
            position: 'middle'
        };
        this.it = [];
        this.fn = [];
        this.at = [];
        this.ngof = [];
        this.od = [];
        this.ch = [];
        this.mch = [];
        this.ins = [];
        this.ong = [];
        this.air = [];
        this.hc = [];
        this.phone = '';
        try {
            this.storage.get('id').then(function (val) {
                _this.url = "http://34.242.75.122/api/v1/pushToken";
                //alert(this.url);
                //  alert(val);
                _this.oneSignal.getIds().then(function (ids) {
                    // alert(ids.userId);
                    var body = { 'userId': val, 'notificationToken': ids.userId };
                    //alert(body.userId+"()"+body.notificationToken);
                    _this.getPost2(_this.url, body);
                });
            });
        }
        catch (error) {
        }
        try {
            this.data = JSON.parse(this.navParams.get("data"));
            //this.oneSignal.sendTag("tokenid",this.data.data.phoneNumber);
        }
        catch (error) {
        }
    }
    MainPage.prototype.getPost2 = function (url, body) {
        this.remoteService.getPosts2(url, body).subscribe(function (result) {
            console.log(result);
            //alert(result);
        });
    };
    MainPage.prototype.activate = function () {
        //this.isd = true;
        this.btnt = "Please wait.....";
        this.url = "http://172.18.12.212:8000/api/verifyCode";
        //alert(this.url);
        var body = {};
        console.log(body);
        this.getPost(this.url, body);
        //this.getPost(this.url);
    };
    MainPage.prototype.getPost = function (url, body) {
        var _this = this;
        this.remoteService.getPosts2(url, body).subscribe(function (data) {
            console.log(data);
            _this.udata = data;
            _this.btnt = "Continue";
            //this.isd = false;
            if (data.responseCode == 0) {
                _this.class = "toast-failure";
                _this.presentToast("Invalid Code!");
            }
            else if (data.responseCode == 1) {
                _this.class = "toast-success";
                _this.presentToast("Account Activated!");
            }
            else if (data.status == "02") {
                _this.class = "toast-failure";
                _this.presentToast("Access Denied!");
            }
            else {
                _this.class = "toast-success";
                _this.presentToast("Access Granted!");
            }
            //console.log(data);
        });
    };
    MainPage.prototype.presentToast = function (msg) {
        var _this = this;
        this.options.message = msg;
        var toast = this.toastCtrl.create(this.options);
        var s = 2;
        toast.onDidDismiss(function () {
            if (_this.class == "allbillers") {
                _this.sl = [];
                _this.ga = [];
                _this.ut = [];
                _this.bng = [];
                _this.rt = [];
                _this.pt = [];
                _this.hc = [];
                _this.it = [];
                _this.ong = [];
                _this.air = [];
                _this.ngof = [];
                _this.mch = [];
                _this.ch = [];
                _this.at = [];
                _this.od = [];
                for (var i in _this.udata.data) {
                    //  console.log(this.udata.data[i]);
                    if (_this.udata.data[i].category == "school") {
                        _this.sl.push(_this.udata.data[i]);
                    }
                    else if (_this.udata.data[i].category == "utilities") {
                        _this.ut.push(_this.udata.data[i]);
                    }
                    else if (_this.udata.data[i].category == "government") {
                        _this.ga.push(_this.udata.data[i]);
                    }
                    else if (_this.udata.data[i].category == "gaming") {
                        _this.bng.push(_this.udata.data[i]);
                    }
                    else if (_this.udata.data[i].category == "finance") {
                        _this.fn.push(_this.udata.data[i]);
                    }
                    else if (_this.udata.data[i].category == "paytv") {
                        _this.pt.push(_this.udata.data[i]);
                    }
                    else if (_this.udata.data[i].category == "healthcare") {
                        _this.hc.push(_this.udata.data[i]);
                        console.log(_this.hc);
                    }
                    else if (_this.udata.data[i].category == "internet") {
                        _this.it.push(_this.udata.data[i]);
                    }
                    else if (_this.udata.data[i].category = "oil_and_gas") {
                        _this.ong.push(_this.udata.data[i]);
                    }
                    else if (_this.udata.data[i].category == "airline") {
                        _this.air.push(_this.udata.data[i]);
                    }
                    else if (_this.udata.data[i].category == "ngos_and_foundations") {
                        _this.ngof.push(_this.udata.data[i]);
                    }
                    else if (_this.udata.data[i].category == "merchants") {
                        _this.mch.push(_this.udata.data[i]);
                    }
                    else if (_this.udata.data[i].category == "church") {
                        _this.ch.push(_this.udata.data[i]);
                    }
                    else if (_this.udata.data[i].category == "airtime") {
                        _this.at.push(_this.udata.data[i]);
                    }
                    else if (_this.udata.data[i].category == "other" || _this.udata.data[i].category == "dummyCategory") {
                        _this.od.push(_this.udata.data[i]);
                    }
                    else { }
                }
                _this.storage.set('schoollist', JSON.stringify(_this.sl));
                _this.storage.set('financelist', JSON.stringify(_this.fn));
                _this.storage.set('governlist', JSON.stringify(_this.ga));
                _this.storage.set('bettinggameslist', JSON.stringify(_this.bng));
                _this.storage.set('utilitylist', JSON.stringify(_this.ut));
                _this.storage.set('paytv', JSON.stringify(_this.pt));
                _this.storage.set('healthcare', JSON.stringify(_this.hc));
                _this.storage.set('internet', JSON.stringify(_this.it));
                _this.storage.set('oilgas', JSON.stringify(_this.ong));
                _this.storage.set('airline', JSON.stringify(_this.air));
                _this.storage.set('ngof', JSON.stringify(_this.ngof));
                _this.storage.set('merchants', JSON.stringify(_this.mch));
                _this.storage.set('church', JSON.stringify(_this.ch));
                _this.storage.set('airtime', JSON.stringify(_this.at));
                _this.storage.set('others', JSON.stringify(_this.od));
                _this.storage.set('billerlist', JSON.stringify(_this.udata));
                _this.navCtrl.push("ProfilePage", { data: JSON.stringify(_this.udata) });
            }
        });
        toast.present();
    };
    MainPage.prototype.logout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    MainPage.prototype.torecentbillers = function () {
        var _this = this;
        /*
        
        
        let loading = this.loadingCtrl.create({
          content: 'Please wait...'
        });
      
        loading.present();
      
        setTimeout(() => {
          loading.dismiss();
          this.class ="toast-failure";
          this.presentToast("No Recent billers found!");
        }, 5000);
       
        */
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        // http://0.0.0.0:8000/api/user/{user_id}/payHistory/{month}
        this.storage.get('id').then(function (val) {
            _this.url = "http://34.242.75.122/api/v1/recent/" + val;
            //alert(this.url);
            var body = {};
            _this.remoteService.getPosts(_this.url).subscribe(function (data) {
                console.log(data);
                loading.dismiss();
                _this.udata = data;
                //this.isd = false;
                if (data.responseCode == "200") {
                    // this.class ="toast-success";
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_recentbillers_recentbillers__["a" /* RecentBillersPage */], { data: _this.udata });
                }
                else {
                    alert("Sorry you dont have any Recent billers");
                }
                //console.log(data);
            });
        });
    };
    MainPage.prototype.topaymenthistory = function () {
        /*
          let loading = this.loadingCtrl.create({
            content: 'Please wait...'
          });
        
          loading.present();
        
          setTimeout(() => {
            loading.dismiss();
            this.class ="toast-failure";
            this.presentToast("No Payment history found!");
          }, 5000);
         */
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_history_history__["a" /* HistoryPage */]);
    };
    MainPage.prototype.tosettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */]);
    };
    MainPage.prototype.tobillers = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.url = "http://34.242.75.122/api/v1/billers";
        //alert(this.url);
        var body = {};
        this.remoteService.getPosts(this.url).subscribe(function (data) {
            console.log(data);
            loading.dismiss();
            _this.udata = data;
            //this.isd = false;
            if (data.responseCode == "200") {
                _this.class = "toast-success";
                _this.storage.set('billerlist', JSON.stringify(_this.udata));
                _this.options.duration = 1;
                _this.presentToast("");
                _this.class = "allbillers";
            }
            //console.log(data);
        });
    };
    MainPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad MainPage');
        try {
            this.storage.get('firstname').then(function (val) {
                //   alert(val);
                _this.name = " " + val;
            });
            this.storage.get('phone').then(function (val) {
                _this.phone = " " + val;
            });
        }
        catch (error) {
        }
    };
    return MainPage;
}());
MainPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-main',template:/*ion-inline-start:"/Users/DarkLord/genpay/src/pages/main/main.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n      <ion-navbar>\n\n      <ion-title>Main Menu</ion-title >\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content class="topbar"  padding>\n\n    <div class="topbarr">\n\n  <h1 text-center ><font text-center class="app-font"  color="#FFFFFF"><b text-center>GENPAY</b></font></h1>\n\n    \n\n  <br>\n\n  <div text-center><font  color="#003e70" class="app-font2"><b>Welcome</b></font><font class="app-font2"  color="#003e70"><b>{{name}}</b></font> </div>\n\n <!-- <div class=\'container\'><div class="align-left"></div><div class="align-right"><font><b>{{phone}}</b></font></div></div> -->\n\n<br>\n\n <div text-center><font color="#003e70"><b  text-center>{{phone}}</b></font></div>\n\n</div>\n\n\n\n<br>\n\n<br>\n\n<ion-item-divider text-center class="bilh" color="#1fb8ffea">  <font text-center color="#ffffff" class="app-font"><b text-center>MENU</b></font></ion-item-divider>\n\n  \n\n  <div class="topbar2"  >\n\n   \n\n      <ion-item  transparent class="listh" (click)="torecentbillers()" >\n\n        \n\n      <font color="#FFFFF"  style="size: 20px">\n\n          <ion-icon  style="padding-right: 10px" name="clipboard"></ion-icon><font    class="bil"><b>Recent Billers</b></font>\n\n    \n\n          \n\n      </font>\n\n   \n\n      </ion-item>\n\n      <ion-item  transparent class="listh" (click)="tobillers()">\n\n          <font color="#FFFFFF"  style="size:30px">\n\n              <ion-icon style="padding-right: 10px" name="clipboard" ></ion-icon><font  color="#FFFFFF" class="bil"><b>Billers</b></font>\n\n              \n\n          </font>\n\n          <br>\n\n          </ion-item>\n\n          <ion-item  transparent class="listh" (click)="topaymenthistory()">\n\n              <font color="#FFFFF" >\n\n                  <ion-icon style="padding-right: 10px" name="clock"></ion-icon><font  color="#FFFFFF"class="bil" ><b>Payments History</b></font>\n\n                  \n\n              </font>\n\n              <br>\n\n              </ion-item>\n\n              <ion-item transparent class="listh" (click)="tosettings()">\n\n                <font color="#FFFFFFF" >\n\n                    <ion-icon style="padding-right: 10px" name="settings"></ion-icon><font color="#FFFFFF" class="bil"><b>Settings</b></font>\n\n                    \n\n                </font>\n\n                <br>\n\n                </ion-item>\n\n            \n\n              \n\n      </div>\n\n      <br>\n\n      <br>\n\n      <br>\n\n      <br>\n\n      <div padding-top ></div>\n\n      <div padding-top >\n\n            <button  class="logb" [disabled]="isd" [strong]="true" ion-button large (click)="logout()">Log Out\n\n              </button>\n\n        </div>\n\n  </ion-content>\n\n  '/*ion-inline-end:"/Users/DarkLord/genpay/src/pages/main/main.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */]])
], MainPage);

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_main_main__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_register_register__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_remote_service_remote_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_forgot_forgot__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_authenticate_authenticate__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_vibration__ = __webpack_require__(180);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var HomePage = (function () {
    function HomePage(storage, vibration, loadingCtrl, toastCtrl, navCtrl, remoteService) {
        // storage.set('test2', 'Max');
        this.storage = storage;
        this.vibration = vibration;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.remoteService = remoteService;
        this.postList = [];
        this.f1 = "Enter Phone Number";
        this.f2 = "Enter Password";
        this.options = {
            message: '',
            duration: 1000,
            cssClass: this.class,
            position: 'middle'
        };
        this.btnt = "Continue";
        this.isd = false;
        this.url = "";
        this.getApiUrl = "https://jsonplaceholder.typicode.com/posts/1";
        // Or to get a key/value pair
    }
    HomePage.prototype.forgot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_forgot_forgot__["a" /* ForgotPage */]);
    };
    HomePage.prototype.login = function () {
        // this.url="http://gyara.herokuapp.com/logintest/"+this.user.toString()+"/"+this.pass.toString();
        //this.url="http://172.18.12.212:8000/api/login";
        this.url = "http://34.242.75.122/api/v1/login";
        //alert(this.url);
        if (!this.phone) {
            this.class = "toast-failure";
            this.presentToast("Phone Number Required");
        }
        else if (!this.password) {
            this.class = "toast-failure";
            this.presentToast("Password Required");
        }
        else {
            this.isd = true;
            this.btnt = "Please wait.....";
            var body = { 'phoneNumber': this.phone.toString(), 'password': this.password.toString() };
            this.getPost2(this.url, body);
        }
    };
    HomePage.prototype.getPost2 = function (url, body) {
        var _this = this;
        console.log("ENTERD HTTP");
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.remoteService.getPosts2(url, body).subscribe(function (data) {
            loading.dismiss();
            console.log(data);
            _this.udata = data;
            _this.btnt = "Login";
            _this.isd = false;
            if (data.responseCode == "200") {
                _this.class = "toast-success";
                console.log(data);
                _this.storage.set('provider', _this.udata.data.network);
                _this.storage.set('phone', _this.udata.data.phoneNumber);
                _this.storage.set('firstname', _this.udata.data.firstName);
                _this.storage.set('fullname', _this.udata.data.fullName);
                _this.storage.set('lastname', _this.udata.data.lastName);
                _this.storage.set('email', _this.udata.data.email);
                _this.storage.set('id', _this.udata.data.id);
                _this.storage.set('apikey', _this.udata.data.api_token);
                _this.options.duration = 1;
                _this.options.cssClass = _this.class;
                _this.presentToast('');
            }
            else if (data.responseCode == "44") {
                _this.class = "toast-failure";
                _this.options.duration = 1000;
                _this.options.cssClass = _this.class;
                _this.vibration.vibrate(500);
                _this.presentToast("This Account not exist!");
                // this.class="str";
            }
            else if (data.responseCode == "43") {
                _this.class = "toast-failure";
                _this.options.duration = 1000;
                _this.options.cssClass = _this.class;
                _this.vibration.vibrate(500);
                _this.presentToast("Account Not Activated!");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_authenticate_authenticate__["a" /* AuthenticatePage */], { data: _this.phone.toString() });
                // this.class="str";
            }
            else if (data.responseCode == "46") {
                _this.class = "toast-failure";
                _this.options.duration = 1000;
                _this.options.cssClass = _this.class;
                _this.vibration.vibrate(500);
                _this.presentToast("Wrong password, Try again!");
                //  this.class="str";
            }
            else { }
        });
    };
    HomePage.prototype.searchchanged1 = function (ch) {
        if (ch.length > 0) {
            //this.f1 ="";
        }
        else {
            this.f1 = "Enter Phone Number";
        }
        console.log(ch);
    };
    HomePage.prototype.searchchanged2 = function (ch) {
        if (ch.length > 0) {
            // this.f2= "";
        }
        else {
            this.f2 = "Enter Password";
        }
        console.log(ch);
    };
    HomePage.prototype.presentToast = function (msg) {
        var _this = this;
        this.options.message = msg;
        var toast = this.toastCtrl.create(this.options);
        toast.onDidDismiss(function () {
            // alert(this.)
            if (_this.class == "toast-success") {
                //alert("moving to Authen");
                _this.storage.set('phone', _this.udata.data.phoneNumber);
                _this.storage.set('firstname', _this.udata.data.firstName);
                _this.storage.set('fullname', _this.udata.data.fullName);
                _this.storage.set('lastname', _this.udata.data.lastName);
                _this.storage.set('id', _this.udata.data.id);
                _this.storage.set('apikey', _this.udata.data.api_token);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_main_main__["a" /* MainPage */], { data: JSON.stringify(_this.udata) });
            }
            //  this.navCtrl.setRoot("ProfilePage",{data : JSON.stringify(this.udata)});
        });
        toast.present();
    };
    HomePage.prototype.openregister = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_register_register__["a" /* RegisterPage */]);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        /*
        this.storage.ready().then(() => {
          this.storage.get('test2').then((val) => {
                console.log(val);
              });
              
            
        
              });
              */
        this.btnt = "Log in";
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/DarkLord/genpay/src/pages/home/home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n   LOGIN\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content  text-center padding class="getstart">\n\n\n\n  <br>\n\n\n\n    <h1 text-center >   <div style="margin: 0 auto; display: block;" >\n\n        <img     height="80"  src="assets/images/itclogo.png" />\n\n      </div>\n\n         <font class="app-font" color="#FFFFFF"><b>GENPAY</b></font></h1>\n\n    <br>\n\n  <ion-item  padding-top transparent  >\n\n   \n\n    <ion-label text-center floating><font color="#FFFFFF"><ion-icon   color="#FFFFFF" item-left name="person"></ion-icon>\n\n      <b>{{f1}}</b></font></ion-label>\n\n <ion-input type="number"  class="btnp"  [(ngModel)]="phone" (ngModelChange)="searchchanged1($event)" name="title"></ion-input>\n\n </ion-item>\n\n <ion-item   padding-top transparent>\n\n  \n\n   <ion-label  text-center floating ><font color="#FFFFFF                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           " ><ion-icon color="#ffff"  item-left name="key"></ion-icon>\n\n    <b>{{f2}}</b></font></ion-label>\n\n<ion-input type="password"  class="btnp" [(ngModel)]="password" (ngModelChange)="searchchanged2($event)"name="title"></ion-input>\n\n</ion-item>\n\n <br>\n\n \n\n <!--\n\n <ion-item>\n\n <ion-label floating >Enter your Password </ion-label>\n\n <ion-input type="password" [(ngModel)]="pass" name="title"></ion-input>\n\n </ion-item>\n\n-->\n\n \n\n \n\n <div class="ss">\n\n    <button  ion-button class="logb" [disabled]="isd"  [strong]="true"[block]="true" large (click)="login()">{{btnt}}\n\n      </button>\n\n</div>\n\n\n\n<br>\n\n<a (click)="forgot()" ><font color="lightblue">Forgot Password? Or Sign up Below</font></a>\n\n<br>\n\n<br>\n\n<br>\n\n<br>\n\n<br>\n\n<div class="ss">\n\n  <button   ion-button color="primary" ion-button large (click)="openregister()">Sign up</button>\n\n</div>\n\n<!--<div class=\'container\'><div class="align-left"><ion-label fixed><b>New User?</b></ion-label> </div><div class="align-right"><button   ion-button color="secondary" (click)="openregister()">Signup</button></div></div> -->\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/DarkLord/genpay/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillerRefPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_main_main__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_remote_service_remote_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_billerpay_billerpay__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the BillerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BillerRefPage = (function () {
    function BillerRefPage(loadingCtrl, remoteService, storage, toastCtrl, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.remoteService = remoteService;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.billername = '';
        this.data = this.navParams.get("data");
        console.log("Billerref HEE");
        console.log(this.data);
    }
    BillerRefPage.prototype.changepass = function () {
        var _this = this;
        var body = {};
        //this.url = 
        this.url = "http://172.18.12.212:8000/api/verifyCode";
        this.remoteService.getPosts2(this.url, body).subscribe(function (data) {
            console.log(data);
            _this.udata = data;
            if (data.responseCode == 1) {
                _this.class = "toast-success";
                console.log(data);
                _this.presentToast("Welcome " + data.data.fullName);
            }
            else if (data.responseCode == 0) {
                _this.class = "toast-failure";
                _this.presentToast("Account not found!");
                // this.class="str";
            }
            else if (data.responseCode == 2) {
                _this.class = "toast-failure";
                _this.presentToast("Invalid Password!");
                //  this.class="str";
            }
            else { }
        });
    };
    BillerRefPage.prototype.presentToast = function (msg) {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000,
            cssClass: this.class,
            position: 'middle'
        });
        toast.onDidDismiss(function () {
            // alert(this.)
            if (_this.class == "toast-success") {
                //alert("moving to Authen");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_main_main__["a" /* MainPage */], { data: JSON.stringify(_this.udata) });
            }
            //  this.navCtrl.setRoot("ProfilePage",{data : JSON.stringify(this.udata)});
        });
        toast.present();
    };
    BillerRefPage.prototype.ionViewDidLoad = function () {
        try {
            this.billername = this.data.data[0].merchantName;
        }
        catch (error) {
            this.billername = 'None';
        }
    };
    BillerRefPage.prototype.continue = function () {
        if (!this.payref) {
            this.class = "toast-failure";
            this.presentToast("Empty Fields");
        }
        else {
            try {
                this.storage.set('payref', this.payref);
                this.storage.set('payref', this.payref);
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_billerpay_billerpay__["a" /* BillerPayPage */], { data: this.data });
            }
            catch (error) {
            }
        }
    };
    return BillerRefPage;
}());
BillerRefPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-biller',template:/*ion-inline-start:"/Users/DarkLord/genpay/src/pages/billeref/billeref.html"*/'<!--\n\n  Generated template for the BillerPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>BILLER PAYMENT</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="topbar" padding>\n\n  \n\n        <br>\n\n        <img>\n\n        <div class="topbar2">\n\n         <h1 text-center ><font color="#FFFFFF"  class="app-font"><b>{{billername}}</b></font></h1>\n\n         <br>\n\n         <br>\n\n         <br>\n\n         <br>\n\n       <ion-label text-center><font color="#FFFFFF"><b>Enter Payment Reference</b></font></ion-label>\n\n       <ion-item transparent>\n\n       \n\n       <ion-input type="text"  class="btnp" [(ngModel)]="payref" name="title"></ion-input>\n\n       \n\n       </ion-item>\n\n       <br>\n\n       <button   class="logb" [disabled]="isd" ion-button  (click)="continue()">Continue</button>\n\n       \n\n      <br>\n\n      </div>\n\n     \n\n</ion-content>\n\n'/*ion-inline-end:"/Users/DarkLord/genpay/src/pages/billeref/billeref.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], BillerRefPage);

//# sourceMappingURL=billeref.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_remote_service_remote_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AuthenticatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AuthenticatePage = (function () {
    function AuthenticatePage(toastCtrl, remoteService, navCtrl, navParams) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.remoteService = remoteService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.udata = [];
        this.resd = true;
        this.isd = false;
        this.sfn = true;
        try {
            this.data = JSON.parse(this.navParams.get("data"));
        }
        catch (error) {
        }
        var TIME_IN_MS = 1000 * 60 * 1;
        var hideFooterTimeout = setTimeout(function () {
            _this.resd = false;
        }, TIME_IN_MS);
    }
    AuthenticatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AuthenticatePage');
        this.btnt = "Activate";
        this.phone = this.data;
        alert("Code Resend Will be Available after 1 minutes incase you dont receive any verification code");
    };
    AuthenticatePage.prototype.resend = function () {
        var _this = this;
        var body = { 'phoneNumber': this.data };
        this.url = "http://34.242.75.122/api/v1/sendCode";
        this.remoteService.getPosts2(this.url, body).subscribe(function (data) {
            console.log(data);
            _this.udata = data;
            if (data.responseCode == "200") {
                alert("Code has been Resent");
            }
            else {
                alert("An Error Occuered please check your details");
            }
            //console.log(data);
        });
    };
    AuthenticatePage.prototype.activate = function () {
        this.isd = true;
        this.btnt = "Please wait.....";
        this.url = "http://34.242.75.122/api/v1/verifyCode";
        //alert(this.url);
        var body = { 'code': this.code, 'phoneNumber': this.data.toString() };
        console.log(body);
        this.getPost(this.url, body);
        //this.getPost(this.url);
    };
    AuthenticatePage.prototype.getPost = function (url, body) {
        var _this = this;
        this.remoteService.getPosts2(url, body).subscribe(function (data) {
            console.log(data);
            _this.udata = data;
            _this.btnt = "Continue";
            _this.isd = false;
            if (data.responseCode == "49") {
                _this.class = "toast-failure";
                _this.presentToast("Invalid Code!");
            }
            else if (data.responseCode == "200") {
                // this.class ="toast-success";
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
                alert("Account Activated!");
            }
            else if (data.status == "02") {
                _this.class = "toast-failure";
                alert("Access Denied!");
            }
            else {
                _this.class = "toast-success";
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
                //this.presentToast("Access Granted!")
            }
            //console.log(data);
        });
    };
    AuthenticatePage.prototype.presentToast = function (msg) {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 1000,
            cssClass: this.class,
            position: 'button'
        });
        toast.onDidDismiss(function () {
            if (_this.class == "toast-success") {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
            }
        });
        toast.present();
    };
    return AuthenticatePage;
}());
AuthenticatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-authenticate',template:/*ion-inline-start:"/Users/DarkLord/genpay/src/pages/authenticate/authenticate.html"*/'<!--\n\n  Generated template for the AuthenticatePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Authenticate</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="topbar" text-center padding>\n\n  \n\n        <br>\n\n      \n\n          <h1 text-center ><font color="#FFFFFF" class="app-font">GENPAY</font></h1>\n\n          <br>\n\n          <img>\n\n          <ion-label fixed><font><b>{{phone}}</b></font></ion-label>\n\n<font color="#FFFFFF"><b>You will receive a txt message containing the code for verification shortly</b></font>\n\n        <ion-item  transparent *ngIf="sfn" padding-top  >\n\n         \n\n          <ion-label floating><font color="#FFFFFF" ><b>Enter Verification Code</b></font></ion-label>\n\n       <ion-input type="text"  class="btnp" [(ngModel)]="code" name="title"></ion-input>\n\n       </ion-item>\n\n       <br>\n\n       <br>\n\n      \n\n       <div class="ss">\n\n        <button   class="rb" [disabled]="resd" ion-button (click)="resend()"><font color="#FFFFFF"><b>Resend Code</b></font>\n\n          </button>\n\n    </div>\n\n       <br>\n\n       <br>\n\n       <font>By activating, you agree to our <b><a>Terms & Conditions</a></b> and <b><a>Privacy Policy</a></b> </font>\n\n       <br> <br> <br>\n\n       <div class="ss">\n\n          <button   class="logb" [disabled]="isd" ion-button large (click)="activate()">{{btnt}}\n\n            </button>\n\n      </div>\n\n      \n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/DarkLord/genpay/src/pages/authenticate/authenticate.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], AuthenticatePage);

//# sourceMappingURL=authenticate.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_changepassword_changepassword__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_editprofile_editprofile__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_remote_service_remote_service__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = (function () {
    function SettingsPage(loadingCtrl, navParams, storage, toastCtrl, navCtrl, remoteService) {
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.remoteService = remoteService;
    }
    SettingsPage.prototype.tochangepassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_changepassword_changepassword__["a" /* ChangepasswordPage */]);
    };
    SettingsPage.prototype.toeditprofile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_editprofile_editprofile__["a" /* EditprofilePage */]);
    };
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"/Users/DarkLord/genpay/src/pages/settings/settings.html"*/'<!--\n\n  Generated template for the SettingsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>SETTINGS</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="getstart">\n\n\n\n  <ion-item  detail-push  color="#23aadb" class="listh" (click)="tochangepassword()" >\n\n    <font  color="#23aadb" >\n\n       <font class="bil"><b>Change Password</b></font>\n\n        \n\n    </font>\n\n    <br>\n\n    </ion-item>\n\n    <ion-item   detail-push  color="#23aadb" class="listh" (click)="toeditprofile()">\n\n        <font color="#23aadb">\n\n           <font class="bil"><b>Edit Profile</b></font>\n\n            \n\n        </font>\n\n        <br>\n\n        </ion-item>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"/Users/DarkLord/genpay/src/pages/settings/settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ })

},[225]);
//# sourceMappingURL=main.js.map