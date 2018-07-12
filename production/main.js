(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footbar></app-footbar>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'app works!';
        auth.handleAuthentication();
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])("auth")),
        __metadata("design:paramtypes", [Object])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_problem_list_problem_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/problem-list/problem-list.component */ "./src/app/components/problem-list/problem-list.component.ts");
/* harmony import */ var _components_problem_detail_problem_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/problem-detail/problem-detail.component */ "./src/app/components/problem-detail/problem-detail.component.ts");
/* harmony import */ var _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/editor/editor.component */ "./src/app/components/editor/editor.component.ts");
/* harmony import */ var _components_new_problem_new_problem_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/new-problem/new-problem.component */ "./src/app/components/new-problem/new-problem.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/footbar/footbar.component */ "./src/app/components/footbar/footbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/search.pipe */ "./src/app/pipes/search.pipe.ts");
/* harmony import */ var app_services_data_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var app_services_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _services_collaboration_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/collaboration.service */ "./src/app/services/collaboration.service.ts");
/* harmony import */ var _services_input_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/input.service */ "./src/app/services/input.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_problem_list_problem_list_component__WEBPACK_IMPORTED_MODULE_7__["ProblemListComponent"],
                _components_problem_detail_problem_detail_component__WEBPACK_IMPORTED_MODULE_8__["ProblemDetailComponent"],
                _components_new_problem_new_problem_component__WEBPACK_IMPORTED_MODULE_10__["NewProblemComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_9__["EditorComponent"],
                _components_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_13__["FootbarComponent"],
                _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_15__["SearchPipe"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                app_app_routes__WEBPACK_IMPORTED_MODULE_5__["routing"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ],
            providers: [
                {
                    provide: 'data',
                    useClass: app_services_data_service__WEBPACK_IMPORTED_MODULE_16__["DataService"]
                },
                {
                    provide: 'auth',
                    useClass: app_services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"]
                },
                {
                    provide: 'authGuard',
                    useClass: _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_18__["AuthGuardService"]
                },
                {
                    provide: 'collaboration',
                    useClass: _services_collaboration_service__WEBPACK_IMPORTED_MODULE_19__["CollaborationService"]
                },
                {
                    provide: "input",
                    useClass: _services_input_service__WEBPACK_IMPORTED_MODULE_20__["InputService"]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_problem_list_problem_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/problem-list/problem-list.component */ "./src/app/components/problem-list/problem-list.component.ts");
/* harmony import */ var _components_problem_detail_problem_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/problem-detail/problem-detail.component */ "./src/app/components/problem-detail/problem-detail.component.ts");
/* harmony import */ var _components_new_problem_new_problem_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/new-problem/new-problem.component */ "./src/app/components/new-problem/new-problem.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");






var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    },
    {
        path: 'problems',
        component: _components_problem_list_problem_list_component__WEBPACK_IMPORTED_MODULE_1__["ProblemListComponent"]
    },
    {
        path: 'problems/:id',
        component: _components_problem_detail_problem_detail_component__WEBPACK_IMPORTED_MODULE_2__["ProblemDetailComponent"],
    },
    {
        path: 'newproblems',
        component: _components_new_problem_new_problem_component__WEBPACK_IMPORTED_MODULE_3__["NewProblemComponent"],
    },
    {
        path: 'profile',
        component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
    },
    {
        path: '**',
        redirectTo: 'problems'
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/components/editor/editor.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/editor/editor.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen {\n #editor {\n   height: 600px;\n }\n .lang-select {\n   width: 100px;\n   margin-right: 10px;\n }\n header .btn {\n   margin: 0 5px;\n }\n footer .btn {\n   margin: 0 5px;\n }\n .editor-footer, .editor-header {\n   margin: 10px 0;\n }\n .cursor {\n   /*position:absolute;*/\n   background: rgba(0, 250, 0, 0.5);\n   z-index: 40;\n   width: 2px!important\n }\n}\n"

/***/ }),

/***/ "./src/app/components/editor/editor.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/editor/editor.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <header>\n    <select class=\"form-control pull-left lang-select\" id=\"language\"\n        name=\"language\"\n        [(ngModel)]=\"language\"\n        (change)=\"setLanguage(language)\">\n       <option *ngFor=\"let language of languages\"\n       [value]=\"language\">\n         {{language}}\n       </option>\n    </select>\n\n    <button type=\"button\" class=\"btn btn-default\" data-toggle=\"modal\" data-target=\"#myModal\">\n      <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span>\n    </button>\n\n\n\n\n    <div *ngIf=\"auth.isAuthenticated()\" class=\"col-sm-7 pull-right\">\n      <div class=\"btn-group  pull-right\">\n      <button type=\"button\" class=\"btn btn-default\" data-toggle=\"modal\" data-target=\"#join\">\n        <span class=\"glyphicon glyphicon-plus\"></span>Join\n      </button>\n      <button id=\"invite\" type=\"button\" class=\"btn btn-default\" data-toggle=\"modal\" data-target=\"#invitepop\">\n        <span class=\"glyphicon glyphicon-envelope\"></span> Invite\n      </button>\n      <button type=\"button\" class=\"btn btn-default\" *ngIf=\"numUsers=='1'\">\n      <span class=\"glyphicon glyphicon-user\"></span> {{numUsers}}\n      </button>\n      <button type=\"button\" class=\"btn btn-default\" *ngIf=\"numUsers!='1'\">\n      <span class=\"glyphicon glyphicon-user\" style=\"color: #ffaa00\"></span> {{numUsers}}\n      </button>\n      </div>\n    </div>\n\n    <!-- Modal -->\n          <div id=\"invitepop\" class=\"modal fade\" role=\"dialog\">\n            <div class=\"modal-dialog\">\n\n              <!-- Modal content-->\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                  <h4 class=\"modal-title\">Invite your friend with this code</h4>\n                </div>\n                <div class=\"modal-body\">\n\n                  <div class=\"alert alert-success\" role=\"success\">\n                    <span class=\"glyphicon glyphicon-ok pull-right\" aria-hidden=\"true\"></span>{{randomSID}}\n                  </div>\n\n\n                </div>\n                <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n                </div>\n              </div>\n\n            </div>\n          </div>\n\n\n          <!-- Modal -->\n          <div id=\"join\" class=\"modal fade\" role=\"dialog\">\n            <div class=\"modal-dialog\">\n              <!-- Modal content-->\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                  <h4 class=\"modal-title\">Enter Invited Code</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"form-group\">\n                      <label for=\"usr\">Invited Code</label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"joinSID\" (ngModelChange)=\"checkJoinSID()\">\n                    </div>\n                    <div class=\"alert alert-warning\" *ngIf=\"redirectProblemMsg\">\n                      You are not doing the same problem with your friend(s).\n                      <span class=\"glyphicon glyphicon-info-sign pull-right\"></span>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"joinRoom()\" [disabled]=\"!validJoinSID\">Join</button>\n                  <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n\n\n\n\n    <!-- Modal -->\n    <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h1 class=\"modal-title\" id=\"exampleModalLabel\">Reset?</h1>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n              You will lose current code in the window, are you sure?\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\"\n              (click)=\"resetEditor()\">Reset</button>\n            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Cancel</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>\n<br>\n  <div class=\"row\">\n    <div id=\"editor\"></div>\n    <div>\n      <div>\n        <div class=\"alert alert-success\" *ngIf=\"output && output.build && output.build=='Compiled successfully'\">\n            <strong>Build:</strong> {{output.build}}\n        </div>\n        <div class=\"alert alert-danger\" *ngIf=\"output && output.build && output.build!='Compiled successfully'\">\n            <strong>Build:</strong> {{output.build}}\n        </div>\n        <div class=\"panel panel-default\" *ngIf=\"output && output.build && output.build=='Compiled successfully'\">\n            <div class=\"panel-heading\">Your Results</div>\n            <div class=\"panel-body\">\n            Console output: <br>\n            <div class=\"well\">{{output.run}}</div>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br>\n  <footer class=\"editor-footer\">\n    <button type=\"button\" id=\"submitBtn\" data-loading-text=\"<i class='fa fa-spinner fa-spin'></i> Compiling\" class=\"btn btn-success pull-right\" (click)=\"submit()\">\n      Submit Solution\n    </button>\n  <br>\n  </footer>\n  <br>\n</section>\n"

/***/ }),

/***/ "./src/app/components/editor/editor.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/editor/editor.component.ts ***!
  \*******************************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EditorComponent = /** @class */ (function () {
    function EditorComponent(collaboration, dataService, auth, route) {
        this.collaboration = collaboration;
        this.dataService = dataService;
        this.auth = auth;
        this.route = route;
        this.randomSID = "1";
        this.joinSID = "";
        this.validJoinSID = false;
        this.redirectProblemMsg = false;
        this.numUsers = "1";
        this.language = 'Java';
        this.languages = ['Java', 'Python', 'C++'];
        this.defaultContent = {
            'Java': "public class Example {\n    public static void main(String[] args) {\n    // Type your Java code here\n    }\n}",
            'Python': "class Solution:\n   def example():\n      print('Hello World!')",
            'C++': "#include <iostream>\n  using namespace std;\n  int main() {\n    // Type your C++ code here\n    return 0;\n  }"
        };
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.collaboration.restoreBuffer();
        this.numUsersSub = this.collaboration.getRoomUserNum().subscribe(function (num) {
            console.log(num);
            _this.numUsers = num;
        });
        this.initEditor();
    };
    EditorComponent.prototype.initEditor = function () {
        var _this = this;
        this.editor = ace.edit('editor');
        this.editor.setTheme("ace/theme/dracula");
        document.getElementsByTagName('textarea')[0].focus();
        this.editor.setFontSize(18);
        this.resetEditor();
        this.generateRandomSessionId();
        this.sessionId = this.randomSID;
        this.editor.$blockScrolling = Infinity;
        this.collaboration.init(this.editor, this.sessionId);
        this.editor.lastAppliedChange = null;
        // registering change callback
        this.editor.on('change', function (e) {
            console.log('Editor Component: ' + JSON.stringify(e));
            if (_this.editor.lastAppliedChange != e) {
                _this.collaboration.change(JSON.stringify(e));
            }
        });
        // registering cursor change callback
        this.editor.getSession().getSelection().on('changeCursor', function () {
            var cursor = _this.editor.getSession().getSelection().getCursor();
            console.log('CLIENT! CURSOR' + JSON.stringify(cursor));
            _this.collaboration.cursorMove(JSON.stringify(cursor));
        });
        this.collaboration.restoreBuffer();
    };
    EditorComponent.prototype.resetEditor = function () {
        console.log('Resetting editor');
        this.editor.getSession().setMode("ace/mode/" + this.language.toLowerCase());
        this.editor.setValue(this.defaultContent[this.language]);
    };
    EditorComponent.prototype.setLanguage = function (language) {
        this.language = language;
        this.resetEditor();
    };
    EditorComponent.prototype.generateRandomSessionId = function () {
        var _this = this;
        this.route.params.subscribe(function (input) {
            var nickname = _this.auth.getProfile().nickname;
            _this.randomSID = input["id"] + '-' + nickname + Math.floor((Math.random() * 10000) + 10000);
            console.log(_this.randomSID);
        });
    };
    EditorComponent.prototype.joinRoom = function () {
        this.collaboration.disconnect();
        this.resetEditor();
        this.sessionId = this.joinSID;
        this.randomSID = this.joinSID;
        this.collaboration.init(this.editor, this.sessionId);
        this.editor.lastAppliedChange = null;
        this.collaboration.restoreBuffer();
    };
    EditorComponent.prototype.checkJoinSID = function () {
        var _this = this;
        console.log(this.joinSID.match(/\d+-\w+\d+/));
        this.route.params.subscribe(function (input) {
            if (_this.joinSID.match(/\d+-\w+\d+/g)) {
                var hidx = _this.joinSID.indexOf('-');
                var pid = _this.joinSID.substring(0, hidx);
                console.log(pid + ' ' + input["id"]);
                if (pid == input["id"]) {
                    _this.validJoinSID = true;
                    _this.redirectProblemMsg = false;
                }
                else {
                    _this.validJoinSID = false;
                    _this.redirectProblemMsg = true;
                }
            }
            else {
                _this.validJoinSID = false;
                _this.redirectProblemMsg = false;
            }
        });
    };
    EditorComponent.prototype.submit = function () {
        var _this = this;
        var userCodes = this.editor.getValue();
        console.log('submit....' + userCodes);
        var data = {
            userCodes: userCodes,
            lang: this.language.toLocaleLowerCase()
        };
        jQuery('#submitBtn').button('loading');
        this.dataService.buildAndRun(data)
            .then(function (res) {
            _this.output = res;
            console.log(res);
            jQuery('#submitBtn').button('reset');
        });
    };
    EditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editor',
            template: __webpack_require__(/*! ./editor.component.html */ "./src/app/components/editor/editor.component.html"),
            styles: [__webpack_require__(/*! ./editor.component.css */ "./src/app/components/editor/editor.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('collaboration')),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('data')),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('auth')),
        __metadata("design:paramtypes", [Object, Object, Object, _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "./src/app/components/footbar/footbar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/footbar/footbar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n .social {\n     -webkit-transform: translateX(-100%);\n     -moz-transform: translateX(-100%);\n     -o-transform: translateX(-100%);\n     -webkit-transition-duration: 0.5s;\n     -moz-transition-duration: 0.5s;\n     -o-transition-duration: 0.5s;\n     color: #71ae3e;\n }\n\n #social-fb:hover {\n     color: #3B5998;\n }\n\n #social-li:hover {\n     color: #0077B5;\n }\n\n #social-gh:hover {\n     color: #24292E;\n }\n"

/***/ }),

/***/ "./src/app/components/footbar/footbar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/footbar/footbar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n<link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha256-MfvZlkHCEqatNoGiOXveE8FIwMzZg4W85qfrfIFBfYc= sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==\" crossorigin=\"anonymous\">\n<div class=\"container\">\n  <div class=\"navbar navbar-default \">\n    <div class=\"container\">\n      <p class=\"hidden-xs navbar-text text-center\">© 2018 - Project built by Jiaming(Horis) Hu\n      </p>\n\n      <p class=\"visible-xs navbar-text text-center\">© 2018 - Project built by Jiaming(Horis) Hu\n        <a href=\"https://www.facebook.com/jiaming.hu.714\" class=\"fa fa-facebook-square\"></a>\n        <a href=\"https://github.com/horis233\" class=\"fa fa-github-square\"></a>\n        <a href=\"http://www.linkedin.com/in/horis-hu\" class=\"fa fa-linkedin-square\"></a>\n      </p>\n      <div class=\"btn-container-right\">\n        <a href=\"https://www.facebook.com/jiaming.hu.714\"><i id=\"social-fb\" class=\"hidden-xs navbar-btn pull-right fa fa-facebook-square fa-3x social\"></i></a>\n        <a href=\"https://github.com/horis233\"><i id=\"social-gh\" class=\"hidden-xs navbar-btn  pull-right fa fa-github-square fa-3x social\"></i></a>\n        <a href=\"http://www.linkedin.com/in/horis-hu\"><i id=\"social-li\" class=\"hidden-xs navbar-btn pull-right fa fa-linkedin-square fa-3x social\"></i></a>\n      <div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/footbar/footbar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/footbar/footbar.component.ts ***!
  \*********************************************************/
/*! exports provided: FootbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootbarComponent", function() { return FootbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FootbarComponent = /** @class */ (function () {
    function FootbarComponent() {
    }
    FootbarComponent.prototype.ngOnInit = function () {
    };
    FootbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footbar',
            template: __webpack_require__(/*! ./footbar.component.html */ "./src/app/components/footbar/footbar.component.html"),
            styles: [__webpack_require__(/*! ./footbar.component.css */ "./src/app/components/footbar/footbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FootbarComponent);
    return FootbarComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n\twidth:100%;\n}\n\n.jumbotron {\n\tcolor:white;\n\tbackground-color: #d86a5f;\n}\n\n.btn{\n  background-color: #81C7D4;\n  color: white;\n}\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t<div class=\"col-xs-12 col-md-10 col-md-offset-1\">\n\t\t<div class=\"jumbotron\">\n\t\t  <div class=\"container\">\n\t\t\t  <div class=\"row\">\n\t\t\t\t  <div class=\"col-xs-12\">\n\t\t\t\t  <h2>Code with Your Friends!</h2>\n\n\t\t\t\t  <h3>Project: Collaborative Online Code Judge System</h3>\n\t\t\t\t  <div class=\"row\">\n\t\t\t\t\t  <div class=\"col-xs-1\">\n\t\t\t\t\t  <p> <span class=\"glyphicon glyphicon-ok\"></span></p>\n\t\t\t\t\t  </div>\n\n\t\t\t\t\t  <div class=\"col-xs-11\">\n\t\t\t\t\t  <p>Code, build, and excute source codes here.</p>\n\t\t\t\t\t  </div>\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"row\">\n\t\t\t\t\t  <div class=\"col-xs-1\">\n\t\t\t\t\t  <p> <span class=\"glyphicon glyphicon-ok\"></span></p>\n\t\t\t\t\t  </div>\n\n\t\t\t\t\t  <div class=\"col-xs-11\">\n\t\t\t\t\t  <p>Practice and take coding challange.</p>\n\t\t\t\t\t  </div>\n\t\t\t\t  </div>\n\n\t\t\t\t  <div class=\"row\">\n\t\t\t\t\t  <div class=\"col-xs-1\">\n\t\t\t\t\t  <p> <span class=\"glyphicon glyphicon-ok\"></span></p>\n\t\t\t\t\t  </div>\n\n\t\t\t\t\t  <div class=\"col-xs-11\">\n\t\t\t\t\t  <p>Invite your friend or join your friends' room to code together.</p>\n\t\t\t\t\t  </div>\n\t\t\t\t  </div>\n\t\t\t\t  <h3>Implementation</h3>\n\t\t\t\t  <pre>\nFrontend:\n - Angular 4, Bootstrap 3\nBackend:\n - Framework: ExpressJS, Socket.io, Flask\n - Node.js, NginX, Docker\nDatabase: MongoDB, Redis\n\nBuilt on AWS EC2 (Ubuntu16.04 with Docker)</pre>\n\t\t\t\t  <a class=\"btn btn-lg\" href=\"/problems\" role=\"button\">Try it</a>\n\t\t\t\t  </div>\n\n\t\t\t  </div>\n\t\t   </div>\n\t\t</div>\n\t</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#username {\n  color: white;\n}\n.btn{\n  background-color: #81C7D4;\n  color: white;\n}\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n        <a class=\"navbar-brand\" href=\"/problems\">{{title}}</a>\n      </div>\n\n\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n\n        <form class=\"navbar-form navbar-left\" *ngIf = \"router.url === '/problems'\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search Problem\" [formControl]=\"searchBox\">\n          </div>\n        </form>\n\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li *ngIf=\"!auth.isAuthenticated()\">\n            <form class=\"navbar-form navbar-right\" >\n              <button type = \"button\" class=\"btn\"  (click)=\"login()\">Sign in</button>\n            </form>\n          </li>\n          <li class=\"dropdown\" *ngIf=\"auth.isAuthenticated()\">\n            <!-- <li class=\"main-logo\"><img ng-src=\"{{profile?.picture}}\"></li> -->\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">{{profile?.nickname}} <span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n              <li><a routerLink=\"/profile\">My Profile</a></li>\n              <li role=\"separator\" class=\"divider\"></li>\n              <li><a href=\"#\" (click)='logout()'>Log Out</a></li>\n              <li *ngIf=\"authGuard.isAdmin()\" role=\"separator\" class=\"divider\"></li>\n              <li *ngIf=\"authGuard.isAdmin()\"><a routerLink=\"/newproblems\">Add New Problems</a></li>\n            </ul>\n          </li>\n        </ul>\n\n      </div>\n      <!-- /.navbar-collapse -->\n    </div>\n    <!-- /.container-fluid -->\n  </nav>\n</div>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




//import { AuthService } from '../../services/auth.service';
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth, input, authGuard, router) {
        var _this = this;
        this.auth = auth;
        this.input = input;
        this.authGuard = authGuard;
        this.router = router;
        this.title = "Lets Code Togather!";
        this.sessionId = "";
        this.username = "";
        this.searchBox = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.auth.userProfile.subscribe(function (profile) { return _this.profile = profile; });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.isAuthenticated()) {
            this.username = this.auth.getProfile().nickname;
        }
        this.subscription = this.searchBox
            .valueChanges
            .debounceTime(200)
            .subscribe(function (term) { _this.input.changeInput(term); });
    };
    NavbarComponent.prototype.login = function () {
        this.auth.login();
    };
    NavbarComponent.prototype.logout = function () {
        this.auth.logout();
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])("auth")),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('input')),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('authGuard')),
        __metadata("design:paramtypes", [Object, Object, Object, _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/new-problem/new-problem.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#addform {\n\tmargin-bottom: 20px;\n}\n\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n\n.col-center-block {\n    float: none;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n"

/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/new-problem/new-problem.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"addform\" *ngIf=\"authGuard.isAdmin()\">\n  <form #formRef=\"ngForm\">\n    <div class=\"form-group col-md-8 col-center-block\">\n      <label for=\"problemName\">Problem Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"problemName\"\n             name=\"problemName\" required placeholder=\"Enter Problem Name\" [(ngModel)]=\"newProblem.name\">\n    </div>\n    <div class=\"form-group col-md-8 col-center-block\">\n      <label for=\"problemDesc\">Problem Description</label>\n      <textarea type=\"text\" row=\"3\" class=\"form-control\" id=\"problemDesc\"\n                name=\"problemDesc\" required placeholder=\"Enter Problem Description\" [(ngModel)]=\"newProblem.desc\"></textarea>\n    </div>\n    <div class=\"form-group col-md-8 col-center-block\">\n      <label for=\"difficulty\">Difficulty</label>\n      <select class=\"form-control\" id=\"difficulty\"\n              name=\"difficulty\" [(ngModel)]=\"newProblem.difficulty\">\n        <option *ngFor=\"let difficulty of difficulties\" [value]=\"difficulty\">\n          {{ difficulty }}\n        </option>\n      </select>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-10\">\n        <button type=\"submit\" class=\"btn btn-primary pull-right\" (click)=\"addProblem()\">Add Problem</button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/new-problem/new-problem.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewProblemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProblemComponent", function() { return NewProblemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var DEFAULT_PROBLEM = Object.freeze({
    id: 0,
    name: '',
    desc: '',
    difficulty: 'Easy'
});
var NewProblemComponent = /** @class */ (function () {
    function NewProblemComponent(dataService, auth, authGuard) {
        this.dataService = dataService;
        this.auth = auth;
        this.authGuard = authGuard;
        this.difficulties = ['Easy', 'Medium', 'Hard', 'Super'];
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
    }
    NewProblemComponent.prototype.addProblem = function () {
        this.dataService.addProblem(this.newProblem)
            .catch(function (error) { return console.log(error); });
        // to make the form empty after add a new problem
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
    };
    NewProblemComponent.prototype.ngOnInit = function () {
    };
    NewProblemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-problem',
            template: __webpack_require__(/*! ./new-problem.component.html */ "./src/app/components/new-problem/new-problem.component.html"),
            styles: [__webpack_require__(/*! ./new-problem.component.css */ "./src/app/components/new-problem/new-problem.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('data')),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('auth')),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('authGuard')),
        __metadata("design:paramtypes", [Object, Object, Object])
    ], NewProblemComponent);
    return NewProblemComponent;
}());



/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/problem-detail/problem-detail.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/problem-detail/problem-detail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf='problem'>\n  <div class=row>\n    <div class=\"col-xs-12 col-md-4\">\n    <div class=\"panel panel-primary\">\n\t\t  <div class=\"panel-heading\"><h4>{{problem.id}}. {{problem.name}}</h4></div>\n\t\t  <div class=\"panel-body\">{{problem.desc}}</div>\n\t\t</div>\n  </div>\n    <div class=\"hidden-xs col-sm-12 col-md-8\">\n      <app-editor></app-editor>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/problem-detail/problem-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProblemDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemDetailComponent", function() { return ProblemDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ProblemDetailComponent = /** @class */ (function () {
    function ProblemDetailComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
    }
    ProblemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.dataService.getProblem(+params['id'])
                .then(function (problem) { return _this.problem = problem; });
        });
    };
    ProblemDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-problem-detail',
            template: __webpack_require__(/*! ./problem-detail.component.html */ "./src/app/components/problem-detail/problem-detail.component.html"),
            styles: [__webpack_require__(/*! ./problem-detail.component.css */ "./src/app/components/problem-detail/problem-detail.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('data')),
        __metadata("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ProblemDetailComponent);
    return ProblemDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/problem-list/problem-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 5rem;\n}\n\n.starter-template {\n  padding: 3rem 1.5rem;\n  text-align: center;\n}\n\n.difficulty {\n  min-width: 65px;\n  margin-right: 10px;\n  /*text-transform: capitalize;*/\n}\n\n.label.difficulty {\n  padding-top: 0.6em;\n  color: #fbfdfa;\n  font-size: 12px;\n}\n\n.title {\n  font-size: 1.2em;\n  /*text-transform: capitalize;*/\n}\n\n.diff-easy {\n  background-color: #b2cfc8;\n}\n\n.diff-medium {\n  background-color: #bbbdb9;\n}\n\n.diff-hard {\n  background-color: #a6b3b0;\n}\n\n.diff-super {\n  background-color: #5b6663;\n}\n"

/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/problem-list/problem-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"starter-template\">\n    <h1>Collaborative Online Judge System</h1>\n    <p class=\"lead\">\n      This is a collaborative online judge system.<br>\n      You could edit the same problem with your teammates together.\n    </p>\n  </div>\n  <!-- <app-new-problem></app-new-problem> -->\n  <div class=\"list-group\">\n    <a class=\"list-group-item\" *ngFor=\"let problem of problems | search:searchTerm\" [routerLink]=\"['/problems', problem.id]\"\n    [routerLink]=\"['/problems', problem.id]\">\n      <span class=\"{{'pull-left label difficulty diff-' + problem.difficulty.toLocaleLowerCase()}}\">\n        {{ toTitleCase(problem.difficulty) }}\n      </span>\n      <strong class=\"title\">\n        {{ problem.id }}. {{ toTitleCase(problem.name) }}\n      </strong>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/problem-list/problem-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProblemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemListComponent", function() { return ProblemListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var ProblemListComponent = /** @class */ (function () {
    function ProblemListComponent(dataService, input) {
        this.dataService = dataService;
        this.input = input;
        this.searchTerm = '';
    }
    ProblemListComponent.prototype.ngOnInit = function () {
        this.getProblems();
        this.getSearchTerm();
    };
    ProblemListComponent.prototype.getProblems = function () {
        var _this = this;
        this.problemsSubscription =
            this.dataService.getProblems().subscribe(function (problems) { return _this.problems = problems; });
    };
    ProblemListComponent.prototype.getSearchTerm = function () {
        var _this = this;
        this.subscriptionInput = this.input.getInput().subscribe(function (inputTerm) { _this.searchTerm = inputTerm; });
    };
    ProblemListComponent.prototype.ngOnDestroy = function () {
        this.problemsSubscription.unsubscribe();
    };
    ProblemListComponent.prototype.toTitleCase = function (str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toLocaleUpperCase() + txt.substr(1);
        });
    };
    ProblemListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-problem-list',
            template: __webpack_require__(/*! ./problem-list.component.html */ "./src/app/components/problem-list/problem-list.component.html"),
            styles: [__webpack_require__(/*! ./problem-list.component.css */ "./src/app/components/problem-list/problem-list.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('data')),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])("input")),
        __metadata("design:paramtypes", [Object, Object])
    ], ProblemListComponent);
    return ProblemListComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".portrait {\n  height : 150px;\n}\n\n.profile-username {\n  text-transform: capitalize;\n}\n\n@media (max-width: 991px) {\n  .profile-align {\n    text-align: center;\n  }\n\n  .img-align {\n    display: block;\n    margin: 0 auto;\n  }\n}\n\n@media (min-width: 992px) {\n  .profile-align {\n    text-align: left;\n  }\n  \n  .img-align {\n    float: right\n  }\n}\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ul class=\"nav nav-tabs\">\n    <li class=\"active\"><a data-toggle=\"tab\" href=\"#profile\">Profile</a></li>\n    <li><a data-toggle=\"tab\" href=\"#password\">Change Password</a></li>\n  </ul>\n\n  <hr>\n\n  <div class=\"tab-content\">\n    <div id=\"profile\" class=\"tab-pane fade in active\">\n      <h3>Profile</h3>\n\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\"\n        disabled value={{username}}>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\"\n        disabled value={{email}}>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"login\">Last Login</label>\n        <input type=\"text\" class=\"form-control\" id=\"login\" name=\"login\"\n        disabled value={{login_time}}>\n      </div>\n\n    </div>\n\n    <div id=\"password\" class=\"tab-pane fade\">\n      <h3>Change Password</h3>\n      <div class=\"nav-form\">\n        <button type=\"button\" class=\"btn btn-large btn-success\" (click)=\"resetPassword()\">Reset password via email</button>\n      </div>\n    </div>\n    <br>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

//import { AuthService } from '../../services/auth.service';
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(auth) {
        this.auth = auth;
        this.email = '';
        this.username = '';
        this.login_time = '';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.profile = this.auth.getProfile();
        this.email = this.profile.email;
        this.username = this.profile.nickname;
        this.login_time = this.profile.updated_at;
    };
    ProfileComponent.prototype.resetPassword = function () {
        this.auth.resetPassword();
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])("auth")),
        __metadata("design:paramtypes", [Object])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/pipes/search.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/search.pipe.ts ***!
  \**************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (problems, term) {
        console.log(problems);
        return problems.filter(function (problem) { return problem.name.toLowerCase().includes(term); });
    };
    SearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (this.auth.isAuthenticated()) {
            return true;
        }
        else {
            this.router.navigate(['/problems']);
            return false;
        }
    };
    AuthGuardService.prototype.isAdmin = function () {
        if (this.auth.isAuthenticated()
            && this.auth.getProfile() != null
            && this.auth.getProfile()['http://getRoles/roles'] != null) {
            if (this.auth.getProfile()['http://getRoles/roles'].includes('Admin')) {
                return true;
            }
        }
        else {
            return false;
        }
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('auth')),
        __metadata("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! auth0-js */ "./node_modules/auth0-js/src/index.js");
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(auth0_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






window.global = window;
var AuthService = /** @class */ (function () {
    function AuthService(router, http) {
        this.router = router;
        this.http = http;
        this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_2__["WebAuth"]({
            clientID: '8ISBVQwZmgTAz_FaNa_yT19ufKDN7bU4',
            domain: 'horis.auth0.com',
            responseType: 'token id_token',
            audience: 'https://horis.auth0.com/userinfo',
            // redirectUri: 'http://18.217.220.41:3000/callback',
            redirectUri: 'http://localhost:3000',
            scope: 'openid profile email roles'
        });
        this.userProfile = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](undefined);
        this.usernameSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.userProfile.next(JSON.parse(localStorage.getItem('profile')));
    }
    AuthService.prototype.ngOnInit = function () {
    };
    AuthService.prototype.login = function () {
        this.auth0.authorize();
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (error, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                _this.auth0.client.userInfo(authResult.accessToken, function (err, user) {
                    localStorage.setItem('profile', JSON.stringify(user));
                });
                window.location.hash = '';
                _this.setSession(authResult);
            }
            else if (error) {
                _this.router.navigate(['/home']);
                console.log(error);
            }
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the Access Token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('profile');
        // Go back to the home route
        this.router.navigate(['/']);
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // Access Token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
        return new Date().getTime() < expiresAt;
    };
    AuthService.prototype.getProfile = function () {
        this.userProfile.next(JSON.parse(localStorage.getItem('profile')));
        return JSON.parse(localStorage.getItem('profile'));
    };
    AuthService.prototype.resetPassword = function () {
        var profile = this.getProfile();
        var url = 'https://horis.auth0.com/dbconnections/change_password';
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        var body = {
            client_id: '8ISBVQwZmgTAz_FaNa_yT19ufKDN7bU4',
            email: profile.email,
            connection: 'Username-Password-Authentication'
        };
        this.http.post(url, body, httpOptions)
            .toPromise()
            .then(function (res) {
            console.log(JSON.parse(JSON.stringify(res)));
        })
            .catch(this.handleError);
    };
    AuthService.prototype.handleError = function (error) {
        console.error('Error occurred', error);
        return Promise.reject(error.message || error);
    };
    AuthService.prototype.changeUserName = function (term) {
        console.log(term);
        this.usernameSubject.next(term);
    };
    AuthService.prototype.getUserName = function () {
        return this.stream;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/collaboration.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/collaboration.service.ts ***!
  \***************************************************/
/*! exports provided: CollaborationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollaborationService", function() { return CollaborationService; });
/* harmony import */ var _assets_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/colors */ "./src/assets/colors.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CollaborationService = /** @class */ (function () {
    function CollaborationService() {
        this.clientsInfo = {};
        this.clientNum = 0;
        this.roomUserNum = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("1");
    }
    CollaborationService.prototype.init = function (editor, sessionId) {
        var _this = this;
        // Build socket
        this.collaborationSocket = io(window.location.origin, { query: "sessionId=" + sessionId });
        // Listen changes
        this.collaborationSocket.on("change", function (delta) {
            console.log('collaboration: editor changes by' + delta);
            delta = JSON.parse(delta);
            editor.lastAppliedChange = delta;
            editor.getSession().getDocument().applyDeltas([delta]);
        });
        // Listen cursor move
        this.collaborationSocket.on("cursorMove", function (cursor) {
            console.log("cursor move:" + cursor);
            var session = editor.getSession();
            cursor = JSON.parse(cursor);
            var x = cursor['row'];
            var y = cursor['column'];
            var changeClientId = cursor['socketId'];
            console.log(x + "," + y + " " + changeClientId);
            if (changeClientId in _this.clientsInfo) {
                session.removeMarker(_this.clientsInfo[changeClientId]['marker']);
            }
            else {
                _this.clientsInfo[changeClientId] = {};
                var css = document.createElement("style");
                css.type = "text/css";
                css.innerHTML = ".editor_cursor_" + changeClientId
                    + " { position:absolute; background:" + _assets_colors__WEBPACK_IMPORTED_MODULE_0__["COLORS"][_this.clientNum] + ";"
                    + " z-index: 100; width:3px !important; }";
                document.body.appendChild(css);
                _this.clientNum++;
            }
            var Range = ace.require('ace/range').Range;
            var newMarker = session.addMarker(new Range(x, y, x, y + 2), 'editor_cursor_' + changeClientId, true);
            _this.clientsInfo[changeClientId]['marker'] = newMarker;
        });
        this.collaborationSocket.on('userNum', function (num) {
            _this.roomUserNum.next(num);
            console.log(num + ' user(s) in the room');
        });
        this.collaborationSocket.on('message', function (message) {
            console.log('received ' + message);
        });
    };
    CollaborationService.prototype.change = function (delta) {
        this.collaborationSocket.emit("change", delta);
    };
    CollaborationService.prototype.cursorMove = function (cursor) {
        this.collaborationSocket.emit("cursorMove", cursor);
    };
    CollaborationService.prototype.restoreBuffer = function () {
        this.collaborationSocket.emit("restoreBuffer");
    };
    CollaborationService.prototype.getRoomUserNum = function () {
        return this.roomUserNum.asObservable();
    };
    CollaborationService.prototype.disconnect = function () {
        this.collaborationSocket.disconnect();
    };
    CollaborationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CollaborationService);
    return CollaborationService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this._problemSource = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
    }
    DataService.prototype.getProblems = function () {
        var _this = this;
        this.http.get('api/v1/problems')
            .toPromise()
            .then(function (res) {
            _this._problemSource.next(JSON.parse(JSON.stringify(res)));
        })
            .catch(this.handleError);
        return this._problemSource.asObservable();
    };
    DataService.prototype.getProblem = function (id) {
        return this.http.get("api/v1/problems/" + id)
            .toPromise()
            .then(function (res) { return JSON.parse(JSON.stringify(res)); })
            .catch(this.handleError);
    };
    DataService.prototype.addProblem = function (newProblem) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post('api/v1/problems', newProblem, httpOptions)
            .toPromise()
            .then(function (res) {
            // call 'getProblems' to let the new problem display
            _this.getProblems();
            JSON.parse(JSON.stringify(res));
        })
            .catch(this.handleError);
    };
    DataService.prototype.buildAndRun = function (data) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post("/api/v1/build_and_run", data, httpOptions)
            .toPromise()
            .then(function (res) {
            console.log(res);
            return (res);
        })
            .catch(function (error) {
            return JSON.stringify(error);
        });
    };
    DataService.prototype.handleError = function (error) {
        console.error('An error happened', error);
        return Promise.reject(error.body || error);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/input.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/input.service.ts ***!
  \*******************************************/
/*! exports provided: InputService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputService", function() { return InputService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputService = /** @class */ (function () {
    function InputService() {
        this.inputSubjects$ = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
    }
    InputService.prototype.changeInput = function (term) {
        this.inputSubjects$.next(term);
    };
    InputService.prototype.getInput = function () {
        return this.inputSubjects$.asObservable();
    };
    InputService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], InputService);
    return InputService;
}());



/***/ }),

/***/ "./src/assets/colors.ts":
/*!******************************!*\
  !*** ./src/assets/colors.ts ***!
  \******************************/
/*! exports provided: COLORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORS", function() { return COLORS; });
var COLORS = [
    "#0000ff",
    "#a52a2a",
    "#00ffff",
    "#00008b",
    "#008b8b",
    "#a9a9a9",
    "#006400",
    "#bdb76b",
    "#8b008b",
    "#556b2f",
    "#ff8c00",
    "#9932cc",
    "#8b0000",
    "#e9967a",
    "#9400d3",
    "#ff00ff",
    "#ffd700",
    "#008000",
    "#4b0082",
    "#f0e68c",
    "#add8e6",
    "#e0ffff",
    "#90ee90",
    "#d3d3d3",
    "#ffb6c1",
    "#ffffe0",
    "#00ff00",
    "#ff00ff",
    "#800000",
    "#000080",
    "#808000",
    "#ffa500",
    "#ffc0cb",
    "#800080",
    "#800080",
    "#ff0000",
    "#c0c0c0",
    "#ffffff",
    "#ffff00"
];


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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/horis/Documents/Online-Judge-Website/oj-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map