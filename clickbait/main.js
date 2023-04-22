"use strict";
(self["webpackChunkjackboxLocal"] = self["webpackChunkjackboxLocal"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/webSocket */ 2227);
/* harmony import */ var emoji_picker_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emoji-picker-element */ 7038);
/* harmony import */ var country_flag_emoji_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! country-flag-emoji-polyfill */ 8114);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var angular_star_rating__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-star-rating */ 4351);
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post/post.component */ 3837);
/* harmony import */ var _player_card_player_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player-card/player-card.component */ 1039);
/* harmony import */ var _in_progress_screen_in_progress_screen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./in-progress-screen/in-progress-screen.component */ 5135);


















const _c0 = ["emojiPicker"];
function AppComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", ctx_r3.playerColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r3.playerProfile, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.playerName);
} }
function AppComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 10);
} }
function AppComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "A game is already in progress. You'll have to wait for the next one!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function AppComponent_div_0_ng_container_4_ng_container_1_emoji_picker_24_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "emoji-picker", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("emoji-click", function AppComponent_div_0_ng_container_4_ng_container_1_emoji_picker_24_Template_emoji_picker_emoji_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.setEmoji($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["name"]; };
const _c2 = function (a0) { return { "warning": a0 }; };
const _c3 = function () { return ["tagline"]; };
function AppComponent_div_0_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 12)(2, "form", 13)(3, "div", 14)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-form-field", 16)(9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function AppComponent_div_0_ng_container_4_ng_container_1_Template_input_keyup_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.suppressText(ctx_r15.loginForm.get(["name"]), ctx_r15.playerNameMaxLength)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 14)(13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Tagline");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 18)(18, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_div_0_ng_container_4_ng_container_1_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.openEmojiSelector()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-form-field", 20)(21, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Tagline");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function AppComponent_div_0_ng_container_4_ng_container_1_Template_input_keyup_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r18.suppressText(ctx_r18.loginForm.get(["tagline"]), ctx_r18.taglineMaxLength)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, AppComponent_div_0_ng_container_4_ng_container_1_emoji_picker_24_Template, 2, 0, "emoji-picker", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_div_0_ng_container_4_ng_container_1_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.submitName()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, " Play ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    let tmp_1_0;
    let tmp_2_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_9_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r8.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](11, _c2, ctx_r8.playerNameMaxLength - ((tmp_1_0 = ctx_r8.loginForm.get(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](10, _c1))) == null ? null : tmp_1_0.value == null ? null : tmp_1_0.value.length) <= 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((tmp_2_0 = ctx_r8.playerNameMaxLength - ((tmp_2_0 = ctx_r8.loginForm.get(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](13, _c1))) == null ? null : tmp_2_0.value == null ? null : tmp_2_0.value.length)) !== null && tmp_2_0 !== undefined ? tmp_2_0 : ctx_r8.playerNameMaxLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("maxlength", ctx_r8.playerNameMaxLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](15, _c2, ctx_r8.taglineMaxLength - ((tmp_4_0 = ctx_r8.loginForm.get(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](14, _c3))) == null ? null : tmp_4_0.value == null ? null : tmp_4_0.value.length) <= 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((tmp_5_0 = ctx_r8.taglineMaxLength - ((tmp_5_0 = ctx_r8.loginForm.get(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](17, _c3))) == null ? null : tmp_5_0.value == null ? null : tmp_5_0.value.length)) !== null && tmp_5_0 !== undefined ? tmp_5_0 : ctx_r8.taglineMaxLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r8.emoji);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("maxlength", ctx_r8.taglineMaxLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.showEmojiSelector);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r8.gameStarted || ctx_r8.numPlayers === ctx_r8.maxPlayers || ((tmp_9_0 = ctx_r8.loginForm.get(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](18, _c1))) == null ? null : tmp_9_0.value == null ? null : tmp_9_0.value.length) === 0 || ((tmp_9_0 = ctx_r8.loginForm.get(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](19, _c3))) == null ? null : tmp_9_0.value == null ? null : tmp_9_0.value.length) === 0);
} }
function AppComponent_div_0_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h2", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function AppComponent_div_0_ng_container_4_ng_container_3_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_div_0_ng_container_4_ng_container_3_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r21.startGame()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Everybody's In");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AppComponent_div_0_ng_container_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h2", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Waiting for players!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AppComponent_div_0_ng_container_4_ng_container_3_button_4_Template, 2, 0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r10.inControl);
} }
function AppComponent_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AppComponent_div_0_ng_container_4_ng_container_1_Template, 27, 20, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AppComponent_div_0_ng_container_4_ng_container_2_Template, 3, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AppComponent_div_0_ng_container_4_ng_container_3_Template, 5, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r6.waiting && !ctx_r6.gameStarted);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r6.waiting && ctx_r6.gameStarted);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.waiting);
} }
function AppComponent_div_0_ng_container_5_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Read the instructions on the big screen");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 27)(4, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_div_0_ng_container_5_ng_container_1_div_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r32.confirmInstructions()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "I understand what's happening!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} }
function AppComponent_div_0_ng_container_5_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Waiting for other players to finish reading the rules");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function AppComponent_div_0_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AppComponent_div_0_ng_container_5_ng_container_1_div_1_Template, 6, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AppComponent_div_0_ng_container_5_ng_container_1_div_2_Template, 3, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r23.waiting);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r23.waiting);
} }
function AppComponent_div_0_ng_container_5_ng_container_2_div_1_img_5_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_div_0_ng_container_5_ng_container_2_div_1_img_5_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r38.submitImage(0)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r36.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function AppComponent_div_0_ng_container_5_ng_container_2_div_1_img_6_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_div_0_ng_container_5_ng_container_2_div_1_img_6_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r40.submitImage(1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r37.images[1], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function AppComponent_div_0_ng_container_5_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 30)(2, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Choose an image for someone else to use");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AppComponent_div_0_ng_container_5_ng_container_2_div_1_img_5_Template, 1, 1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AppComponent_div_0_ng_container_5_ng_container_2_div_1_img_6_Template, 1, 1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r34.images != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r34.images != null);
} }
function AppComponent_div_0_ng_container_5_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Waiting for other players to choose an image");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function AppComponent_div_0_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AppComponent_div_0_ng_container_5_ng_container_2_div_1_Template, 7, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AppComponent_div_0_ng_container_5_ng_container_2_div_2_Template, 3, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r24.waiting);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r24.waiting);
} }
function AppComponent_div_0_ng_container_5_ng_container_3_div_1_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Write a title for a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "clickbait article");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " that uses this image");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AppComponent_div_0_ng_container_5_ng_container_3_div_1_h2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Write a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "social media post");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " that uses this image");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AppComponent_div_0_ng_container_5_ng_container_3_div_1_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Write a title for a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "video");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " that uses this image");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AppComponent_div_0_ng_container_5_ng_container_3_div_1_h2_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Write a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "review");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " that uses this image");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AppComponent_div_0_ng_container_5_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AppComponent_div_0_ng_container_5_ng_container_3_div_1_h2_1_Template, 5, 0, "h2", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AppComponent_div_0_ng_container_5_ng_container_3_div_1_h2_2_Template, 5, 0, "h2", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AppComponent_div_0_ng_container_5_ng_container_3_div_1_h2_3_Template, 5, 0, "h2", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AppComponent_div_0_ng_container_5_ng_container_3_div_1_h2_4_Template, 5, 0, "h2", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r42.round === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r42.round === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r42.round === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r42.round === 4);
} }
function AppComponent_div_0_ng_container_5_ng_container_3_ng_container_3_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " What are you reviewing? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-form-field", 49)(3, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function AppComponent_div_0_ng_container_5_ng_container_3_ng_container_3_div_6_Template_input_keyup_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r58.suppressText(ctx_r58.captionForm.get(["review", "title"]), ctx_r58.websiteMaxLength)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} }
function AppComponent_div_0_ng_container_5_ng_container_3_ng_container_3_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Clickbait title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AppComponent_div_0_ng_container_5_ng_container_3_ng_container_3_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Social media post");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AppComponent_div_0_ng_container_5_ng_container_3_ng_container_3_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Video title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AppComponent_div_0_ng_container_5_ng_container_3_ng_container_3_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Review");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c4 = function () { return ["clickbait", "website"]; };
function AppComponent_div_0_ng_container_5_ng_container_3_ng_container_3_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 51)(1, "div", 14)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "What website is the clickbait article from?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-form-field", 20)(7, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function AppComponent_div_0_ng_container_5_ng_container_3_ng_container_3_div_19_Template_input_keyup_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r60.suppressText(ctx_r60.captionForm.get(["clickbait", "website"]), ctx_r60.websiteMaxLength)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c2, ctx_r54.websiteMaxLength - ((tmp_0_0 = ctx_r54.captionForm.get(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](2, _c4))) == null ? null : tmp_0_0.value == null ? null : tmp_0_0.value.length) <= 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((tmp_1_0 = ctx_r54.websiteMaxLength - ((tmp_1_0 = ctx_r54.captionForm.get(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](5, _c4))) == null ? null : tmp_1_0.value == null ? null : tmp_1_0.value.length)) !== null && tmp_1_0 !== undefined ? tmp_1_0 : ctx_r54.websiteMaxLength);
} }
const _c5 = function () { return ["social", "username"]; };
function AppComponent_div_0_ng_container_5_ng_container_3_ng_container_3_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 53)(1, "div", 54)(2, "div", 14)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Who made this post?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-form-field", 20)(8, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function AppComponent_div_0_ng_container_5_ng_container_3_ng_container_3_div_20_Template_input_keyup_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r63.suppressText(ctx_r63.captionForm.get(["social", "username"]), ctx_r63.uploaderMaxLength)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 54)(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "When was this post made?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-error", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Incorrect date format");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "mat-datepicker-toggle", 58)(17, "mat-datepicker", null, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](18);
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c2, ctx_r55.uploaderMaxLength - ((tmp_0_0 = ctx_r55.captionForm.get(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](4, _c5))) == null ? null : tmp_0_0.value == null ? null : tmp_0_0.value.length) <= 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((tmp_1_0 = ctx_r55.uploaderMaxLength - ((tmp_1_0 = ctx_r55.captionForm.get(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](7, _c5))) == null ? null : tmp_1_0.value == null ? null : tmp_1_0.value.length)) !== null && tmp_1_0 !== undefined ? tmp_1_0 : ctx_r55.uploaderMaxLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatepicker", _r62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r62);
} }
const _c6 = function () { return ["video", "uploader"]; };
function AppComponent_div_0_ng_container_5_ng_container_3_ng_container_3_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 60)(1, "div", 54)(2, "div", 14)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Who uploaded the video?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-form-field", 20)(8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function AppComponent_div_0_ng_container_5_ng_container_3_ng_container_3_div_21_Template_input_keyup_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r66); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r65.suppressText(ctx_r65.captionForm.get(["video", "uploader"]), ctx_r65.uploaderMaxLength)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " How long is the video? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 62)(14, "mat-form-field", 63)(15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Minutes (0-59)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-error", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Must be between 0 and 59");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "mat-form-field", 63)(22, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Seconds (0-59)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "mat-error", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Must be between 0 and 59");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " How many views does the video have? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 66)(30, "mat-form-field", 63)(31, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Base (0-999)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "mat-error", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Select a suffix for values greater than 999");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "mat-form-field", 63)(37, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "mat-select", 68)(40, "mat-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "mat-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Thousand (K)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "mat-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Million (M)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, " How long ago was the video posted? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 72)(49, "mat-form-field", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](50, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "mat-form-field", 63)(52, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "mat-select", 68)(55, "mat-option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Minute(s) ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "mat-option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Hour(s) ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "mat-option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Day(s) ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "mat-option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "Month(s) ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "mat-option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "Year(s) ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c2, ctx_r56.uploaderMaxLength - ((tmp_0_0 = ctx_r56.captionForm.get(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](3, _c6))) == null ? null : tmp_0_0.value == null ? null : tmp_0_0.value.length) <= 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((tmp_1_0 = ctx_r56.uploaderMaxLength - ((tmp_1_0 = ctx_r56.captionForm.get(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](6, _c6))) == null ? null : tmp_1_0.value == null ? null : tmp_1_0.value.length)) !== null && tmp_1_0 !== undefined ? tmp_1_0 : ctx_r56.uploaderMaxLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("maxlength", ctx_r56.uploaderMaxLength);
} }
function AppComponent_div_0_ng_container_5_ng_container_3_ng_container_3_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " What is the star rating for this review? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 80)(3, "star-rating", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ratingChange", function AppComponent_div_0_ng_container_5_ng_container_3_ng_container_3_div_22_Template_star_rating_ratingChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r68); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r67.onRatingChange($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rating", ctx_r57.starRating);
} }
const _c7 = function () { return ["caption"]; };
function AppComponent_div_0_ng_container_5_ng_container_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "form", 13)(2, "div", 36)(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AppComponent_div_0_ng_container_5_ng_container_3_ng_container_3_div_6_Template, 4, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AppComponent_div_0_ng_container_5_ng_container_3_ng_container_3_span_8_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AppComponent_div_0_ng_container_5_ng_container_3_ng_container_3_span_9_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, AppComponent_div_0_ng_container_5_ng_container_3_ng_container_3_span_10_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, AppComponent_div_0_ng_container_5_ng_container_3_ng_container_3_span_11_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-form-field", 39)(15, "textarea", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function AppComponent_div_0_ng_container_5_ng_container_3_ng_container_3_Template_textarea_keyup_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r70); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r69.suppressText(ctx_r69.captionForm.get(["caption"]), ctx_r69.captionMaxLength)); })("keydown.enter", function AppComponent_div_0_ng_container_5_ng_container_3_ng_container_3_Template_textarea_keydown_enter_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r70); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r71.suppressNewline($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "- Additional Info -");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, AppComponent_div_0_ng_container_5_ng_container_3_ng_container_3_div_19_Template, 8, 6, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, AppComponent_div_0_ng_container_5_ng_container_3_ng_container_3_div_20_Template, 19, 8, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, AppComponent_div_0_ng_container_5_ng_container_3_ng_container_3_div_21_Template, 65, 7, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, AppComponent_div_0_ng_container_5_ng_container_3_ng_container_3_div_22_Template, 4, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div")(24, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_div_0_ng_container_5_ng_container_3_ng_container_3_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r70); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r72.submitCaption()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    let tmp_7_0;
    let tmp_8_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r43.captionForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r43.assignedImage, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r43.round === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r43.round === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r43.round === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r43.round === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r43.round === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](17, _c2, ctx_r43.captionMaxLength - ((tmp_7_0 = ctx_r43.captionForm.get(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](16, _c7))) == null ? null : tmp_7_0.value == null ? null : tmp_7_0.value.length) <= 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((tmp_8_0 = ctx_r43.captionMaxLength - ((tmp_8_0 = ctx_r43.captionForm.get(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](19, _c7))) == null ? null : tmp_8_0.value == null ? null : tmp_8_0.value.length)) !== null && tmp_8_0 !== undefined ? tmp_8_0 : ctx_r43.captionMaxLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("maxlength", ctx_r43.captionMaxLength)("placeholder", ctx_r43.placeholderText[ctx_r43.round - 1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r43.round === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r43.round === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r43.round === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r43.round === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r43.formValid());
} }
function AppComponent_div_0_ng_container_5_ng_container_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Waiting for other players to submit captions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function AppComponent_div_0_ng_container_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AppComponent_div_0_ng_container_5_ng_container_3_div_1_Template, 5, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AppComponent_div_0_ng_container_5_ng_container_3_ng_container_3_Template, 26, 20, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AppComponent_div_0_ng_container_5_ng_container_3_ng_container_4_Template, 3, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r25.waiting);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r25.waiting);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r25.waiting);
} }
function AppComponent_div_0_ng_container_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Submissions are being shown, look at the main screen!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function AppComponent_div_0_ng_container_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Votes are being counted, look at the main screen!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function AppComponent_div_0_ng_container_5_ng_container_6_ng_container_1_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Select a post to award a ", ctx_r75.voteTypes[ctx_r75.voteIndex], " medal to");
} }
function AppComponent_div_0_ng_container_5_ng_container_6_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 84)(1, "h2", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Confirm votes?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_div_0_ng_container_5_ng_container_6_ng_container_1_div_2_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r79); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r78.submitVotes()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_div_0_ng_container_5_ng_container_6_ng_container_1_div_2_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r79); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r80.resetVotes()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function AppComponent_div_0_ng_container_5_ng_container_6_ng_container_1_div_3_ng_container_1_app_post_1_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-post", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_div_0_ng_container_5_ng_container_6_ng_container_1_div_3_ng_container_1_app_post_1_Template_app_post_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r87); const i_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](6); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r85.vote(i_r83, ctx_r85.voteIndex)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const submission_r82 = ctx_r88.$implicit;
    const i_r83 = ctx_r88.index;
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx_r84.roundNames[ctx_r84.round - 1])("submitter", submission_r82.submittingPlayer)("sacrifice", submission_r82.assignedPlayer)("small", ctx_r84.browserWidth < 910)("image", submission_r82.image)("caption", submission_r82.caption)("medal", ctx_r84.getMedalFromIndex(i_r83));
} }
function AppComponent_div_0_ng_container_5_ng_container_6_ng_container_1_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AppComponent_div_0_ng_container_5_ng_container_6_ng_container_1_div_3_ng_container_1_app_post_1_Template, 1, 7, "app-post", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const submission_r82 = ctx.$implicit;
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", submission_r82.submittingPlayer.id !== ctx_r81.id);
} }
const _c8 = function (a0, a1) { return { "small-flex-a": a0, "small-flex-b": a1 }; };
function AppComponent_div_0_ng_container_5_ng_container_6_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AppComponent_div_0_ng_container_5_ng_container_6_ng_container_1_div_3_ng_container_1_Template, 2, 1, "ng-container", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](2, _c8, ctx_r77.browserWidth < 910 && (ctx_r77.round === 1 || ctx_r77.round === 3), ctx_r77.browserWidth < 910 && (ctx_r77.round === 2 || ctx_r77.round === 4)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r77.submissions);
} }
function AppComponent_div_0_ng_container_5_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AppComponent_div_0_ng_container_5_ng_container_6_ng_container_1_h2_1_Template, 2, 1, "h2", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AppComponent_div_0_ng_container_5_ng_container_6_ng_container_1_div_2_Template, 7, 0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AppComponent_div_0_ng_container_5_ng_container_6_ng_container_1_div_3_Template, 2, 5, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r73.showConfirmVotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r73.showConfirmVotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r73.submissions != null);
} }
function AppComponent_div_0_ng_container_5_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h2", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Waiting for other players to submit votes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function AppComponent_div_0_ng_container_5_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AppComponent_div_0_ng_container_5_ng_container_6_ng_container_1_Template, 4, 3, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AppComponent_div_0_ng_container_5_ng_container_6_ng_container_2_Template, 3, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r28.waiting);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r28.waiting);
} }
function AppComponent_div_0_ng_container_5_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 79)(1, "h2", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Play again?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_div_0_ng_container_5_ng_container_7_div_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r92); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r91.newGame(false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Same players");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_div_0_ng_container_5_ng_container_7_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r92); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r93.newGame(true)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Different players");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function AppComponent_div_0_ng_container_5_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Waiting for host");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function AppComponent_div_0_ng_container_5_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AppComponent_div_0_ng_container_5_ng_container_7_div_1_Template, 7, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AppComponent_div_0_ng_container_5_ng_container_7_ng_container_2_Template, 3, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r29.inControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r29.inControl);
} }
function AppComponent_div_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AppComponent_div_0_ng_container_5_ng_container_1_Template, 3, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AppComponent_div_0_ng_container_5_ng_container_2_Template, 3, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AppComponent_div_0_ng_container_5_ng_container_3_Template, 5, 3, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AppComponent_div_0_ng_container_5_ng_container_4_Template, 3, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AppComponent_div_0_ng_container_5_ng_container_5_Template, 3, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AppComponent_div_0_ng_container_5_ng_container_6_Template, 3, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, AppComponent_div_0_ng_container_5_ng_container_7_Template, 3, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.gamePhase === "instructions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.gamePhase === "images");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.gamePhase === "captions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.gamePhase === "reveal");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.gamePhase === "votingReveal");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.gamePhase === "voting");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.gamePhase === "end");
} }
function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AppComponent_div_0_div_1_Template, 4, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AppComponent_div_0_div_2_Template, 1, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AppComponent_div_0_ng_container_3_Template, 3, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AppComponent_div_0_ng_container_4_Template, 4, 3, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AppComponent_div_0_ng_container_5_Template, 8, 7, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.playerName != "" && ctx_r0.enableBanner);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.playerName != "" && ctx_r0.enableBanner);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.inGame && ctx_r0.gameStarted);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.gamePhase === "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.inGame && ctx_r0.gameStarted);
} }
function AppComponent_div_1_ng_container_2_app_player_card_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-player-card", 100);
} if (rf & 2) {
    const player_r103 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tagline", player_r103.tagline)("playerName", player_r103.name)("profilePic", player_r103.profile)("color", player_r103.color)("emoji", player_r103.emoji)("inControl", player_r103.inControl);
} }
const _c9 = function (a0, a1) { return { "animate__animated": a0, "animate__bounceOut": a1 }; };
function AppComponent_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AppComponent_div_1_ng_container_2_app_player_card_2_Template, 1, 6, "app-player-card", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](2, _c9, ctx_r94.loginCardExit, ctx_r94.loginCardExit));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r94.playerCards);
} }
function AppComponent_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-in-progress-screen", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("players", ctx_r95.playerList)("playersSubmitted", ctx_r95.playersSubmitted);
} }
function AppComponent_div_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-in-progress-screen", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("players", ctx_r96.playerList)("playersSubmitted", ctx_r96.playersSubmitted)("timer", ctx_r96.timeRemaining);
} }
function AppComponent_div_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-in-progress-screen", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("players", ctx_r97.playerList)("playersSubmitted", ctx_r97.playersSubmitted)("timer", ctx_r97.timeRemaining);
} }
function AppComponent_div_1_ng_container_6_ng_container_1_app_post_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-post", 106);
} if (rf & 2) {
    const submission_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx_r107.roundNames[ctx_r107.round - 1])("submitter", submission_r105.submittingPlayer)("sacrifice", submission_r105.assignedPlayer)("image", submission_r105.image)("caption", submission_r105.caption)("animate", true);
} }
function AppComponent_div_1_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AppComponent_div_1_ng_container_6_ng_container_1_app_post_2_Template, 1, 6, "app-post", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r106 = ctx.index;
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r104.currentSubIndex === i_r106);
} }
function AppComponent_div_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AppComponent_div_1_ng_container_6_ng_container_1_Template, 3, 1, "ng-container", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r98.submissions);
} }
const _c10 = function (a0, a1) { return { "animate__animated": a0, "animate__fadeOut": a1 }; };
function AppComponent_div_1_ng_container_7_h1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Vote for the best post on your device");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](1, _c10, ctx_r109.timeRemaining != null && ctx_r109.timeRemaining < 0, ctx_r109.timeRemaining != null && ctx_r109.timeRemaining < 0));
} }
function AppComponent_div_1_ng_container_7_h1_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Counting up the votes!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AppComponent_div_1_ng_container_7_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-post", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const submission_r113 = ctx.$implicit;
    const i_r114 = ctx.index;
    const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx_r112.roundNames[ctx_r112.round - 1])("submitter", submission_r113.submittingPlayer)("sacrifice", submission_r113.assignedPlayer)("votes", submission_r113.votes)("showVotes", ctx_r112.gamePhase === "votingReveal")("image", submission_r113.image)("caption", submission_r113.caption)("animate", ctx_r112.gamePhase === "votingReveal")("maxVotes", ctx_r112.maxVotes)("sound", submission_r113.votes.length === ctx_r112.maxVotes && (ctx_r112.maxDupeIndex === -1 || ctx_r112.maxDupeIndex === i_r114));
} }
function AppComponent_div_1_ng_container_7_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AppComponent_div_1_ng_container_7_div_6_ng_container_1_Template, 2, 10, "ng-container", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("reduced", ctx_r111.submissions.length > 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r111.submissions);
} }
function AppComponent_div_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AppComponent_div_1_ng_container_7_h1_2_Template, 2, 4, "h1", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AppComponent_div_1_ng_container_7_h1_3_Template, 2, 0, "h1", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AppComponent_div_1_ng_container_7_div_6_Template, 2, 3, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r99.gamePhase === "voting");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r99.gamePhase === "votingReveal");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](5, _c10, ctx_r99.timeRemaining != null && ctx_r99.timeRemaining < 0, ctx_r99.timeRemaining != null && ctx_r99.timeRemaining < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r99.timeRemaining && ctx_r99.timeRemaining > 0 ? ctx_r99.timeRemaining : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r99.submissions != null);
} }
function AppComponent_div_1_ng_container_8_ng_container_1_app_player_card_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-player-card", 118);
} if (rf & 2) {
    const player_r117 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tagline", player_r117.tagline)("playerName", player_r117.name)("profilePic", player_r117.profile)("color", player_r117.color)("emoji", player_r117.emoji)("inControl", player_r117.inControl)("score", player_r117.score);
} }
function AppComponent_div_1_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AppComponent_div_1_ng_container_8_ng_container_1_app_player_card_2_Template, 1, 7, "app-player-card", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r115.playersByScore);
} }
function AppComponent_div_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AppComponent_div_1_ng_container_8_ng_container_1_Template, 3, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r100.scores.length > 0);
} }
function AppComponent_div_1_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h2", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "WINNER");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-player-card", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tagline", ctx_r101.winner.tagline)("playerName", ctx_r101.winner.name)("profilePic", ctx_r101.winner.profile)("color", ctx_r101.winner.color)("emoji", ctx_r101.winner.emoji)("inControl", ctx_r101.winner.inControl)("score", ctx_r101.winner.score);
} }
function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 96)(1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AppComponent_div_1_ng_container_2_Template, 3, 5, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AppComponent_div_1_ng_container_3_Template, 2, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AppComponent_div_1_ng_container_4_Template, 2, 3, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AppComponent_div_1_ng_container_5_Template, 2, 3, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AppComponent_div_1_ng_container_6_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, AppComponent_div_1_ng_container_7_Template, 7, 8, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AppComponent_div_1_ng_container_8_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AppComponent_div_1_ng_container_9_Template, 4, 7, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.gamePhase === "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.gamePhase === "instructions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.gamePhase === "images");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.gamePhase === "captions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.gamePhase === "reveal");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.gamePhase === "voting" || ctx_r1.gamePhase === "votingReveal");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.gamePhase === "score");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.gamePhase === "end");
} }
function AppComponent_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor() {
        this.server = (0,rxjs_webSocket__WEBPACK_IMPORTED_MODULE_6__.webSocket)('wss://serene-shelf-12168.herokuapp.com/');
        // server = webSocket<any>('ws://192.168.50.133:9898/');
        this.id = null;
        this.isHost = null;
        this.gamePhase = 'title';
        this.minimumPlayers = 2;
        // gamePhase = 'test4';
        this.round = 0;
        // host vars
        this.playerCards = new Array(8).fill({
            name: null,
            tagline: null,
            profile: null,
            color: null,
            emoji: null,
            inControl: null
        });
        this.maxPlayers = 8;
        this.playerList = [];
        this.playersByScore = [];
        this.playersSubmitted = [];
        this.submissions = [];
        this.currentSubIndex = 0;
        this.showSubmissions = true;
        this.scores = [];
        // client vars
        // TODO: create player object for client
        this.playerProfile = '';
        this.playerName = '';
        this.playerColor = '';
        this.playerTagline = '';
        // TODO: add color/ profile pic
        this.assignedPlayer = {
            id: '',
            name: ''
        };
        this.inControl = false;
        this.inGame = false;
        this.waiting = false;
        this.images = [];
        this.assignedImage = '';
        this.debug = true;
        this.showConfirmVotes = false;
        this.enableBanner = false;
        this.instructions = '';
        this.lastMessage = '';
        // caption
        this.caption = '';
        // clickbait
        this.website = '';
        // video
        this.duration = {
            minutes: null,
            seconds: null,
        };
        this.uploader = '';
        this.timeUploaded = {
            base: 0,
            suffix: ''
        };
        this.views = {
            base: 0,
            suffix: ''
        };
        this.voteObj = {};
        this.voteIndex = 0;
        this.voteTypes = ['gold', 'silver', 'bronze'];
        this.showEmojiSelector = false;
        this.emoji = '😀';
        // ANIMATION/TIMING STUFF
        this.revealTime = 14000;
        this.votingRevealExitTime = 11000;
        this.votingRevealExit = false;
        this.loginCardExitTime = 2000;
        this.loginCardExit = false;
        this.instructionsExitTime = 2000;
        this.scoreDisplayTime = 4000;
        // review
        this.starRating = 3;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            tagline: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('')
        });
        this.captionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormGroup({
            caption: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            clickbait: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormGroup({
                website: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            }),
            social: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormGroup({
                username: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
                date: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl()
            }),
            video: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormGroup({
                uploader: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
                duration: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormGroup({
                    minutes: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null),
                    seconds: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null)
                }),
                views: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormGroup({
                    base: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null),
                    suffix: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('K')
                }),
                timeUploaded: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormGroup({
                    base: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null),
                    suffix: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('day')
                })
            }),
            review: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormGroup({
                title: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('')
            })
        });
        this.captionMaxLength = 100;
        this.uploaderMaxLength = 20;
        this.websiteMaxLength = 15;
        this.playerNameMaxLength = 20;
        this.taglineMaxLength = 20;
        this.test = '';
        this.roundNames = ['clickbait', 'social', 'video', 'review'];
        this.placeholderText = [
            'How to become the best at everything in 10 easy steps!',
            'This was the best summer vacation ever! I love my friends.',
            'Top 10 anime battles you HAVE to see this year',
            'This item has absolutely changed my life... for the worse!'
        ];
        this.nextPhase = {
            'images': 'captions',
            'captions': 'reveal',
            'reveal': 'voting',
            'voting': 'votingReveal',
            'votingReveal': 'score',
            'score': 'images'
        };
        this.browserWidth = document.documentElement.clientWidth;
        (0,country_flag_emoji_polyfill__WEBPACK_IMPORTED_MODULE_1__.polyfillCountryFlagEmojis)('Twemoji Mozilla');
    }
    openEmojiSelector() {
        setTimeout(() => this.showEmojiSelector = !this.showEmojiSelector, 0);
    }
    setEmoji(event) {
        this.showEmojiSelector = false;
        this.emoji = event.detail.unicode;
    }
    stopMusic() {
        if (this.bgMusic == null) {
            return;
        }
        let stopSound = new Audio('assets/audio/sfx/music_stop.wav');
        stopSound.volume = 0.1;
        stopSound.play();
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }
    startMusic(music, volume = 0.1) {
        this.bgMusic = new Audio(music);
        this.bgMusic.volume = volume;
        this.bgMusic.loop = true;
        this.bgMusic.play();
    }
    playSFX(file, volume = 0.5) {
        const sfx = new Audio(file);
        sfx.volume = volume;
        sfx.play();
    }
    removeClass(element, className) {
        const node = document.querySelector(element);
        node?.classList.remove(className);
    }
    animateCSS(element, animation, prefix = 'animate__') {
        // We create a Promise and return it
        return new Promise((resolve, reject) => {
            const animationName = `${prefix}${animation}`;
            const node = document.querySelector(element);
            if (node != null) {
                node.classList.add(`${prefix}animated`, animationName);
                // When the animation ends, we clean the classes and resolve the Promise
                function handleAnimationEnd(event) {
                    event.stopPropagation();
                    if (node != null) {
                        node.classList.remove(`${prefix}animated`, animationName);
                    }
                    resolve(node);
                }
                node.addEventListener('animationend', handleAnimationEnd, { once: true });
            }
        });
    }
    ngOnInit() {
        window.addEventListener('click', (e) => {
            if (this.isHost || this.gamePhase != 'title' || this.emojiPicker == null) {
                return;
            }
            if (!(this.emojiPicker.nativeElement.contains(e.target)) && this.showEmojiSelector) {
                this.showEmojiSelector = false;
            }
        });
        const ratioSmall = (window.innerWidth - 100) / 600;
        const ratioLarge = (window.innerWidth - 100) / 940;
        document.documentElement.style.setProperty('--vw-scale-small', `${ratioSmall}`);
        document.documentElement.style.setProperty('--vw-scale-large', `${ratioLarge}`);
        this.server.subscribe(message => {
            this.lastMessage = this.objToString(message);
            switch (message.type) {
                case 'idRequest':
                    const existingId = sessionStorage.getItem('id');
                    this.sendMessage('idResponse', {
                        id: existingId
                    });
                    break;
                case 'idAssign':
                    const id = message.body.id;
                    sessionStorage.setItem('id', id);
                    this.sendMessage('newClient', {
                        id: id
                    });
                    break;
                case 'init':
                    this.id = message.body.id;
                    this.isHost = message.body.isHost;
                    this.numPlayers = message.body.numPlayers;
                    this.gameStarted = message.body.gameStarted;
                    if (this.isHost && (this.gamePhase === 'title' || this.gamePhase === 'instructions')) {
                        this.startMusic('assets/audio/music/login.mp3', 0.2);
                    }
                    break;
                case 'clearPlayer':
                    sessionStorage.clear();
                    this.waiting = false;
                    this.gamePhase = 'title';
                    this.gameStarted = false;
                    break;
                case 'resetHost':
                    this.stopMusic();
                    this.loginCardExit = false;
                    this.waiting = false;
                    this.gamePhase = 'title';
                    this.gameStarted = false;
                    this.playerCards = new Array(8).fill({
                        name: null,
                        tagline: null,
                        profile: null,
                        color: null,
                        emoji: null,
                        inControl: null
                    });
                    break;
                case 'resume':
                    this.id = message.body.id;
                    this.gamePhase = message.body.phase;
                    this.numPlayers = message.body.numPlayers;
                    this.gameStarted = message.body.gameStarted;
                    this.round = message.body.round;
                    this.playerName = message.body.playerName;
                    this.playerColor = message.body.playerColor;
                    this.playerProfile = message.body.playerProfile;
                    this.isHost = message.body.isHost;
                    if (this.isHost && (this.gamePhase === 'title' || this.gamePhase === 'instructions')) {
                        this.startMusic('assets/audio/music/login.mp3', 0.2);
                    }
                    this.inGame = message.body.inGame;
                    this.inControl = message.body.inControl;
                    this.playerList = this.isHost ? message.body.playerList : [];
                    Object.values(this.playerList).forEach((player) => {
                        this.scores.push({
                            name: player.name,
                            score: player.score
                        });
                    });
                    this.enableBanner = this.playerName != '';
                    if (this.isHost) {
                    }
                    for (let i = 0; i < this.playerList.length; i++) {
                        this.playerCards[i] = {
                            name: this.playerList[i].name,
                            tagline: this.playerList[i].tagline,
                            profile: this.playerList[i].profile,
                            color: this.playerList[i].color,
                            emoji: this.playerList[i].emoji,
                            inControl: this.playerList[i].inControl
                        };
                    }
                    this.images = message.body.images;
                    this.waiting = message.body.waiting;
                    this.assignedPlayer.id = message.body.assignedPlayer?.id;
                    this.assignedPlayer.name = message.body.assignedPlayer?.name;
                    this.assignedImage = message.body.assignedImage;
                    this.playersSubmitted = message.body.playersSubmitted;
                    this.submissions = message.body.submissions;
                    const v = this.submissions != null ? this.submissions.map(submission => submission.votes.length) : [0];
                    this.maxVotes = Math.max(...v);
                    this.votingRevealExitTime += (this.maxVotes * 500);
                    if (message.body.timeRemaining > 0 && this.isHost) {
                        this.startTimer(message.body.timeRemaining);
                    }
                    break;
                case 'playerJoin':
                    this.playSFX('assets/audio/sfx/submit.wav', 0.3);
                    const player = this.getPlayerFromId(message.body.id);
                    if (player == null) { // if player doesn't exist, add them
                        this.playerCards[this.playerList.length] = {
                            name: message.body.playerName,
                            tagline: message.body.tagline,
                            profile: message.body.profile,
                            color: message.body.color,
                            emoji: message.body.emoji,
                            inControl: message.body.inControl
                        };
                        this.playerList.push({
                            id: message.body.id,
                            name: message.body.playerName,
                            tagline: message.body.tagline,
                            profile: message.body.profile,
                            color: message.body.color,
                            emoji: message.body.emoji,
                            inControl: message.body.inControl
                        });
                    }
                    else { // if player does exist, update their name (this may be an unneeded edge case if room gets cleared each game)
                        player.name = message.body.playerName;
                    }
                    break;
                case 'takeControl':
                    this.inControl = true;
                    break;
                case 'setColor':
                    this.setColor(message.body.playerColor, message.body.profile);
                    break;
                case 'setWaiting':
                    this.waiting = message.body.waiting;
                    break;
                case 'instructions':
                    this.gameStarted = true;
                    this.loginCardExit = true;
                    setTimeout(() => {
                        this.gamePhase = 'instructions';
                        this.waiting = false;
                    }, this.loginCardExitTime);
                    break;
                case 'triggerTransition':
                    switch (message.body.transition) {
                        case 'instructionsExit':
                            this.removeClass('.instructions-progress', 'animate__fadeIn');
                            this.animateCSS('.instructions-progress', 'bounceOut').then((element) => {
                                element.classList.add('hide');
                            });
                            this.stopMusic();
                            break;
                    }
                    break;
                case 'images':
                    this.playersSubmitted = [];
                    this.gamePhase = 'images';
                    this.waiting = false;
                    this.images = message.body.images;
                    break;
                case 'captions':
                    this.gamePhase = 'captions';
                    this.waiting = false;
                    this.starRating = 3;
                    this.captionForm.reset({
                        caption: '',
                        clickbait: {
                            website: ''
                        },
                        social: {
                            username: '',
                            date: null
                        },
                        video: {
                            uploader: '',
                            duration: {
                                minutes: null,
                                seconds: null
                            },
                            views: {
                                base: null,
                                suffix: 'K'
                            },
                            timeUploaded: {
                                base: null,
                                suffix: 'day'
                            }
                        },
                        review: {
                            title: ''
                        }
                    });
                    // this.captionForm.controls['caption'].setValue('');
                    this.assignedImage = message.body.player.assignedImage;
                    this.assignedPlayer.id = message.body.player.id;
                    this.assignedPlayer.name = message.body.player.name;
                    this.round = message.body.round;
                    break;
                case 'timer':
                    this.playersSubmitted = [];
                    this.gamePhase = message.body.gamePhase;
                    if (this.gamePhase === 'images') {
                        this.startMusic('assets/audio/music/elevator.mp3', 0.2);
                    }
                    else if (this.gamePhase === 'captions') {
                        this.startMusic('assets/audio/music/jazz1.mp3', 0.15);
                    }
                    this.round = message.body.round;
                    this.waiting = true;
                    this.startTimer(message.body.timerLength);
                    // start timer, display players who have/haven't finished
                    break;
                case 'voteCandidates':
                    this.waiting = false;
                    this.gamePhase = 'voting';
                    this.voteObj = {};
                    this.voteIndex = 0;
                    this.showConfirmVotes = false;
                    this.submissions = message.body.submissions;
                    break;
                case 'forceSubmit':
                    this.gamePhase = message.body.gamePhase;
                    if (this.gamePhase === 'images') {
                        this.sendMessage('imageSubmit', {
                            imageIndex: 0,
                            force: true
                        });
                    }
                    else if (this.gamePhase === 'captions') {
                        this.sendMessage('captionSubmit', {
                            caption: this.getPostData(),
                            force: true
                        });
                    }
                    else if (this.gamePhase === 'voting') {
                        this.sendMessage('voteSubmit', {
                            force: true
                        });
                    }
                    break;
                case 'playerSubmitted':
                    // add to list of submitted players, update host screen
                    this.playSFX('assets/audio/sfx/submit.wav', 0.3);
                    this.playersSubmitted.push(message.body.player);
                    break;
                case 'allSubmitted':
                    this.stopTimer();
                    if (!this.bgMusic?.paused) {
                        this.stopMusic();
                    }
                    // do end of phase audio stuff
                    // send message to server to start next phase
                    setTimeout(() => {
                        this.sendMessage('nextPhase', {
                            phase: this.nextPhase[message.body.phase]
                        });
                        this.playersSubmitted = [];
                    }, 3000);
                    break;
                case 'setPhase':
                    this.gamePhase = message.body.gamePhase;
                    break;
                case 'showVotes':
                    // set submissions
                    this.submissions = message.body.submissions;
                    const votes = this.submissions.map(submission => submission.votes.length);
                    this.maxVotes = Math.max(...votes);
                    // find post with longest vote count,it will control sound
                    let findDuplicates = (arr) => arr.filter((item, index) => arr.indexOf(item) != index);
                    const dupes = findDuplicates(votes);
                    this.maxDupeIndex = dupes.findIndex(value => value === this.maxVotes);
                    this.gamePhase = 'votingReveal';
                    this.startMusic('assets/audio/music/groove2.mp3', 0.1);
                    this.votingRevealExitTime += (this.maxVotes * 500);
                    // disable moving on from voting here
                    setTimeout(() => {
                        this.removeClass('.host-submissions', 'animate__fadeIn');
                        this.animateCSS('.host-submissions', 'bounceOut').then((element) => {
                            element.classList.add('hide');
                            setTimeout(() => {
                                this.sendMessage('nextPhase', {
                                    phase: this.nextPhase['votingReveal']
                                });
                            }, 2000);
                        });
                    }, this.votingRevealExitTime);
                    break;
                case 'showScores':
                    this.scores = [];
                    this.playerList = message.body.players;
                    this.playersByScore = [...message.body.players];
                    this.playersByScore.sort((a, b) => b.score - a.score);
                    this.gamePhase = 'score';
                    Object.values(this.playerList).forEach((player) => {
                        this.scores.push({
                            name: player.name,
                            score: player.score
                        });
                    });
                    setTimeout(() => {
                        this.removeClass('.login-cards', 'animate__fadeIn');
                        this.removeClass('.login-cards', 'animate__animated');
                        this.animateCSS('.login-cards', 'bounceOut').then((element) => {
                            element.classList.add('hide');
                            this.stopMusic();
                            setTimeout(() => {
                                this.sendMessage('nextPhase', {
                                    phase: this.round === 4 ? 'end' : this.nextPhase['score']
                                });
                            }, 2000);
                        });
                    }, this.scoreDisplayTime);
                    break;
                case 'submissions':
                    this.showSubmissions = true;
                    this.gamePhase = 'reveal';
                    this.startMusic('assets/audio/music/groove.mp3', 0.1);
                    this.submissions = message.body.submissions;
                    this.revealTimer = setInterval(() => {
                        this.currentSubIndex++;
                        if (this.currentSubIndex >= this.playerList.length) {
                            clearInterval(this.revealTimer);
                            setTimeout(() => {
                                this.currentSubIndex = 0;
                            }, 100);
                            this.showSubmissions = false;
                            // transition to voting phase
                            this.sendMessage('nextPhase', {
                                phase: this.nextPhase['reveal']
                            });
                        }
                    }, this.revealTime);
                    break;
                case 'end':
                    this.gamePhase = 'end';
                    this.winner = message.body.winner;
                    if (this.isHost) {
                        this.playSFX('assets/audio/sfx/hooray.mp3', 0.3);
                        this.startMusic('assets/audio/music/birthday.mp3', 0.10);
                    }
                    break;
                default:
                    console.log('unrecognized message type');
                    break;
            }
        });
    }
    formValid() {
        if (this.captionForm.get(['caption'])?.value.length === 0) {
            return false;
        }
        switch (this.round) {
            case 1:
                return this.captionForm.get(['clickbait', 'website'])?.value?.length > 0;
            case 2:
                return this.captionForm.get(['social', 'username'])?.value?.length > 0 &&
                    this.captionForm.get(['social', 'date'])?.valid &&
                    this.captionForm.get(['social', 'date'])?.value != null;
            case 3:
                return this.captionForm.get(['video', 'uploader'])?.value?.length > 0 &&
                    this.captionForm.get(['video', 'duration', 'minutes'])?.value > 0 &&
                    this.captionForm.get(['video', 'duration', 'seconds'])?.value > 0 &&
                    this.captionForm.get(['video', 'duration'])?.valid &&
                    this.captionForm.get(['video', 'views'])?.valid &&
                    this.captionForm.get(['video', 'views', 'base'])?.value > 0 &&
                    this.captionForm.get(['video', 'timeUploaded'])?.valid &&
                    this.captionForm.get(['video', 'timeUploaded', 'base'])?.value > 0;
            case 4:
                return this.captionForm.get(['review', 'title'])?.value?.length > 0;
            default: return false;
        }
    }
    getPostData() {
        switch (this.round) {
            case 1:
                const cbTitle = this.captionForm.get(['caption'])?.value;
                const website = this.captionForm.get(['clickbait', 'website'])?.value;
                return {
                    title: cbTitle?.length > 0 ? cbTitle : 'Some boring news',
                    website: website?.length > 0 ? website : 'news.com'
                };
            case 2:
                const socialTitle = this.captionForm.get(['caption'])?.value;
                const socialName = this.captionForm.get(['social', 'username'])?.value;
                const date = this.captionForm.get(['social', 'date'])?.value;
                return {
                    title: socialTitle?.length > 0 ? socialTitle : 'I had a baby!',
                    username: socialName?.length > 0 ? socialName : 'nothingButKids',
                    date: date != null && this.captionForm.get(['social', 'date'])?.valid ? date : new Date()
                };
            case 3:
                const videoTitle = this.captionForm.get(['caption'])?.value;
                const minutes = this.captionForm.get(['video', 'duration', 'minutes'])?.value;
                const seconds = this.captionForm.get(['video', 'duration', 'seconds'])?.value;
                const uploadBase = this.captionForm.get(['video', 'timeUploaded', 'base'])?.value;
                const uploadSuffix = this.captionForm.get(['video', 'timeUploaded', 'suffix'])?.value;
                const viewsBase = this.captionForm.get(['video', 'views', 'base'])?.value;
                const viewsSuffix = this.captionForm.get(['video', 'views', 'suffix'])?.value;
                const uploader = this.captionForm.get(['video', 'uploader'])?.value;
                return {
                    title: videoTitle.length > 0 ? videoTitle : '7 SEXY Game Show Hosts',
                    duration: {
                        minutes: minutes != null && this.captionForm.get(['video', 'duration', 'minutes'])?.valid ? minutes : 3,
                        seconds: seconds != null && this.captionForm.get(['video', 'duration', 'seconds'])?.valid ? seconds : 20
                    },
                    timeUploaded: {
                        base: uploadBase != null && this.captionForm.get(['video', 'timeUploaded', 'base'])?.valid ? uploadBase : 2,
                        suffix: uploadSuffix ?? 'minutes',
                    },
                    views: {
                        base: viewsBase != null && this.captionForm.get(['video', 'views', 'base'])?.valid ? viewsBase : 3,
                        suffix: viewsSuffix ?? 'K',
                    },
                    uploader: uploader?.length > 0 ? uploader : 'bigfootMommy'
                };
            case 4:
                const reviewItem = this.captionForm.get(['review', 'title'])?.value;
                const reviewTitle = this.captionForm.get(['caption'])?.value;
                return {
                    what: reviewItem?.length > 0 ? reviewItem : 'Gigantic waste of space',
                    title: reviewTitle?.length > 0 ? reviewTitle : 'I wish I could return this, but I already... used it.',
                    rating: this.starRating
                };
            default:
                return null;
        }
    }
    sendMessage(type, body) {
        this.server.next({
            id: this.id,
            type: type,
            body: body
        });
    }
    startTimer(duration) {
        this.timeRemaining = duration;
        this.timer = setInterval(() => {
            this.timeRemaining--;
            if (this.timeRemaining === 30) {
                this.playSFX('assets/audio/sfx/30_seconds_left.wav', 0.8);
            }
            if (this.timeRemaining <= 10) {
                this.playSFX('assets/audio/sfx/counttimer.wav');
            }
            if (this.timeRemaining <= 0) {
                this.stopTimer();
            }
        }, 1000);
    }
    stopTimer() {
        clearInterval(this.timer);
        this.timeRemaining = -1;
    }
    getPlayerFromId(id) {
        const playerIndex = this.playerList.findIndex(player => player.id === id);
        if (playerIndex === -1) {
            return null;
        }
        else {
            return this.playerList[playerIndex];
        }
    }
    objToString(obj) {
        return JSON.stringify(obj);
    }
    suppressNewline(event) {
        event.preventDefault();
        return false;
    }
    onRatingChange(event) {
        this.starRating = event.rating;
    }
    suppressText(control, maxLength) {
        if (control == null) {
            return;
        }
        if (control.value.length > maxLength) {
            control.setValue(control.value.substr(0, maxLength));
        }
    }
    startGame() {
        this.waiting = false;
        this.gameStarted = true;
        this.sendMessage('start', {});
    }
    newGame(newPlayers) {
        this.sendMessage('newGame', {
            newPlayers: newPlayers
        });
    }
    confirmInstructions() {
        this.waiting = true;
        this.sendMessage('confirmInstructions', {});
    }
    vote(index, typeIndex) {
        const type = this.voteTypes[typeIndex];
        if (Object.values(this.voteObj).includes(index)) {
            return;
        }
        this.voteObj[type] = index;
        this.voteIndex++;
        console.log(type);
        if (type === 'bronze') {
            this.showConfirmVotes = true;
        }
    }
    submitVotes() {
        this.waiting = true;
        this.sendMessage('voteSubmit', {
            votes: this.voteObj
        });
    }
    resetVotes() {
        this.voteIndex = 0;
        this.voteObj = {};
        this.showConfirmVotes = false;
    }
    getMedalFromIndex(i) {
        return Object.keys(this.voteObj).find(medal => this.voteObj[medal] === i);
    }
    submitImage(index) {
        this.waiting = true;
        this.sendMessage('imageSubmit', {
            imageIndex: index
        });
    }
    setColor(color, profilePic) {
        this.playerColor = color;
        this.playerProfile = profilePic;
    }
    submitCaption() {
        this.waiting = true;
        this.sendMessage('captionSubmit', {
            caption: this.getPostData()
        });
    }
    submitName() {
        this.playerName = this.loginForm.get(['name'])?.value;
        this.waiting = true;
        this.inGame = true;
        this.enableBanner = true;
        this.sendMessage('name', {
            playerName: this.loginForm.get(['name'])?.value,
            playerTagline: this.loginForm.get(['tagline'])?.value,
            playerEmoji: this.emoji
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.emojiPicker = _t.first);
    } }, decls: 3, vars: 3, consts: [["class", "background-client", 4, "ngIf"], ["class", "background-host", 4, "ngIf"], ["class", "white-text", 4, "ngIf"], [1, "background-client"], ["class", "banner", 3, "background-color", 4, "ngIf"], ["class", "sticky-spacer", 4, "ngIf"], [4, "ngIf"], [1, "banner"], [1, "banner-profile-pic", 3, "src"], [1, "banner-name"], [1, "sticky-spacer"], [1, "instructions-box", "white-text", "center-text"], [1, "content-container"], [1, "example-form", 3, "formGroup"], [1, "title-label"], [3, "ngClass"], ["appearance", "outline", 1, "login-inputs", "example-full-width"], ["name", "playerName", "formControlName", "name", "matInput", "", "placeholder", "Enter your name", 3, "maxlength", "keyup"], [1, "details"], ["mat-mini-fab", "", "color", "primary", 1, "emoji-button", 3, "click"], ["appearance", "outline", 1, "example-full-width"], ["name", "playerTagline", "matInput", "", "formControlName", "tagline", "placeholder", "'Ungodly Monster' or 'Just hanging out'", 3, "maxlength", "keyup"], [3, "emoji-click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "play-button", 3, "disabled", "click"], [3, "emoji-click"], ["emojiPicker", ""], [1, "instructions-box", "white-text", "center"], [1, "center"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "image-vote"], [1, "image-vote-container"], ["class", "image-vote-image", 3, "src", "click", 4, "ngIf"], [1, "image-vote-image", 3, "src", "click"], [1, "caption-form"], ["class", "instructions-box white-text center-text", 4, "ngIf"], [1, "input-container"], [1, "caption-input-img", 3, "src"], ["formGroupName", "review", 4, "ngIf"], ["appearance", "outline", 1, "text-form-area"], ["formControlName", "caption", "name", "caption", "matInput", "", 1, "caption-input", 3, "maxlength", "placeholder", "keyup", "keydown.enter"], [1, "extra-info"], [1, "text-form-area"], ["formGroupName", "clickbait", 4, "ngIf"], ["formGroupName", "social", 4, "ngIf"], ["formGroupName", "video", 4, "ngIf"], ["class", "center-text", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "space", 3, "disabled", "click"], ["formGroupName", "review"], ["appearance", "outline", 1, "example-full-width", "review-title"], ["matInput", "", "name", "title", "placeholder", "The worst coffee maker ever", "formControlName", "title", 3, "keyup"], ["formGroupName", "clickbait"], ["matInput", "", "name", "website", "placeholder", "'BuzzFeed' or 'Gawker'", "formControlName", "website", 3, "keyup"], ["formGroupName", "social"], [1, "input-spacer"], ["matInput", "", "name", "username", "placeholder", "'Jack Jones' or 'LemonEater55'", "formControlName", "username", 3, "keyup"], ["placeholder", "Date posted (MM/DD/YYYY)", "matInput", "", "formControlName", "date", 3, "matDatepicker"], [1, "error"], ["matSuffix", "", 3, "for"], ["picker", ""], ["formGroupName", "video"], ["matInput", "", "name", "uploader", "placeholder", "'making_cool_stuff' or 'DemonSam85'", "formControlName", "uploader", 3, "maxlength", "keyup"], ["formGroupName", "duration", 1, "video-duration"], ["appearance", "outline", 1, "example-full-width2"], ["placeholder", "5", "step", "1", "type", "number", "min", "0", "max", "59", "matInput", "", "name", "minutes", "formControlName", "minutes"], ["placeholder", "23", "type", "number", "min", "0", "max", "59", "step", "1", "matInput", "", "name", "seconds", "formControlName", "seconds"], ["formGroupName", "views", 1, "views"], ["placeholder", "15", "type", "number", "min", "1", "max", "999", "matInput", "", "name", "viewsbase", "formControlName", "base"], ["formControlName", "suffix"], ["value", ""], ["value", "K"], ["value", "M"], ["formGroupName", "timeUploaded", 1, "posted"], ["placeholder", "3", "type", "number", "step", "1", "matInput", "", "name", "viewsbase", "formControlName", "base"], ["value", "minute"], ["value", "hour"], ["value", "day"], ["value", "month"], ["value", "year"], [1, "center-text"], [1, "star-rating"], ["starType", "svg", "size", "large", "staticColor", "ok", "speed", "immediately", 3, "rating", "ratingChange"], ["class", "instructions-box vote-confirm", 4, "ngIf"], ["class", "vote-flex", 3, "ngClass", 4, "ngIf"], [1, "instructions-box", "vote-confirm"], [1, "white-text", "no-margin-bottom"], ["mat-raised-button", "", "color", "confirm", 3, "click"], ["mat-raised-button", "", "color", "deny", 3, "click"], [1, "vote-flex", 3, "ngClass"], [4, "ngFor", "ngForOf"], ["class", "small-scale", 3, "type", "submitter", "sacrifice", "small", "image", "caption", "medal", "click", 4, "ngIf"], [1, "small-scale", 3, "type", "submitter", "sacrifice", "small", "image", "caption", "medal", "click"], [1, "instructions-box", "instructions-box", "white-text", "center-text"], [1, "instructions-box", "white-text", "play-again-text"], ["mat-raised-button", "", "color", "primary", 1, "new-game-button", 3, "click"], ["disabled", "", "mat-raised-button", "", "color", "primary", 1, "new-game-button", 3, "click"], [1, "background-host"], [1, "flexy"], [1, "login-cards", 3, "ngClass"], [3, "tagline", "playerName", "profilePic", "color", "emoji", "inControl", 4, "ngFor", "ngForOf"], [3, "tagline", "playerName", "profilePic", "color", "emoji", "inControl"], [1, "instructions-progress", "animate__animated", "animate__fadeIn", 3, "players", "playersSubmitted"], ["instructions", "Choose one of the pictures provided on your device.", 1, "instructions-progress", "animate__animated", "animate__fadeIn", 3, "players", "playersSubmitted", "timer"], ["instructions", "Answer the prompt provided on your device", 1, "instructions-progress", "animate__animated", "animate__fadeIn", 3, "players", "playersSubmitted", "timer"], [1, "large-test"], ["class", "animate__animated animate__fadeIn", 3, "type", "submitter", "sacrifice", "image", "caption", "animate", 4, "ngIf"], [1, "animate__animated", "animate__fadeIn", 3, "type", "submitter", "sacrifice", "image", "caption", "animate"], [1, "vote-text"], ["class", "white-text", 3, "ngClass", 4, "ngIf"], ["class", "white-text animate__animated animate__fadeIn", 4, "ngIf"], [1, "timer", 3, "ngClass"], ["class", "host-submissions animate__animated animate__fadeIn", 3, "reduced", 4, "ngIf"], [1, "white-text", 3, "ngClass"], [1, "white-text", "animate__animated", "animate__fadeIn"], [1, "host-submissions", "animate__animated", "animate__fadeIn"], [3, "type", "submitter", "sacrifice", "votes", "showVotes", "image", "caption", "animate", "maxVotes", "sound"], [1, "login-cards", "animate__animated", "animate__fadeIn"], [3, "tagline", "playerName", "profilePic", "color", "emoji", "inControl", "score", 4, "ngFor", "ngForOf"], [3, "tagline", "playerName", "profilePic", "color", "emoji", "inControl", "score"], [1, "white-text"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AppComponent_div_0_Template, 6, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AppComponent_div_1_Template, 10, 8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AppComponent_p_2_Template, 2, 0, "p", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isHost != null && !ctx.isHost);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isHost != null && ctx.isHost);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isHost == null);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxValidator, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupName, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, angular_star_rating__WEBPACK_IMPORTED_MODULE_15__.StarRatingComponent, _post_post_component__WEBPACK_IMPORTED_MODULE_2__.PostComponent, _player_card_player_card_component__WEBPACK_IMPORTED_MODULE_3__.PlayerCardComponent, _in_progress_screen_in_progress_screen_component__WEBPACK_IMPORTED_MODULE_4__.InProgressScreenComponent], styles: [".hide[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.invisible[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.background-host[_ngcontent-%COMP%] {\n  height: 100%;\n  animation: scrolling 20s linear infinite;\n  background-image: url('bg_test1.png') !important;\n  background-repeat: repeat;\n}\n\n.background-client[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #232323;\n}\n\n@keyframes scrolling {\n  from {\n    background-position: 0 0;\n  }\n  to {\n    background-position: 1118px 1118px;\n  }\n}\n\n.wtest1[_ngcontent-%COMP%] {\n  width: 338px;\n  height: 375px;\n}\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n\n.center-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.caption-input[_ngcontent-%COMP%] {\n  resize: none;\n  width: 100%;\n  background-color: rgb(44, 44, 44);\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  background-color: rgb(44, 44, 44);\n}\n\n  mat-form-field.text-form-area .mat-form-field-wrapper {\n  margin: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.input-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  width: 100%;\n}\n\n.banner[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  background-color: #6235b8;\n  height: 65px;\n  width: 100%;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n}\n\n.login-cards[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.banner-name[_ngcontent-%COMP%] {\n  text-shadow: 2px 2px black;\n  margin-top: 20px;\n}\n\n.banner-profile-pic[_ngcontent-%COMP%] {\n  height: 100%;\n  margin-right: 5px;\n}\n\n.text-form-area[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  width: 80vw;\n  max-width: 500px;\n}\n\n.caption-input-img[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  width: 100%;\n  max-width: 500px;\n  object-fit: cover;\n}\n\n.image-vote[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.image-vote-container[_ngcontent-%COMP%] {\n  width: 80vw;\n  gap: 10px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.image-vote-image[_ngcontent-%COMP%] {\n  width: 100%;\n  object-fit: cover;\n  max-width: 500px;\n}\n\n.test3[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 15px;\n}\n\n.white-text[_ngcontent-%COMP%], .player-name[_ngcontent-%COMP%], .timebox[_ngcontent-%COMP%], .timer[_ngcontent-%COMP%], .instructions[_ngcontent-%COMP%], .banner-name[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.instructions[_ngcontent-%COMP%] {\n  text-shadow: 4px 2px black;\n  text-align: center;\n  margin-top: 100px;\n  font-size: 2em;\n}\n\n.timer[_ngcontent-%COMP%] {\n  text-shadow: 4px 2px black;\n  text-align: center;\n  font-size: 6em;\n  margin-top: 30px;\n}\n\n.vote-text[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 10px;\n}\n\n.post-container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.timebox[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 16px;\n  right: 22px;\n  font-size: 30px;\n}\n\n.timebox-text[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  padding: 0 5px;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.post-subtext[_ngcontent-%COMP%] {\n  color: gray;\n  font-weight: 400;\n  margin-top: -20px;\n  margin-left: 15px;\n}\n\n.post-image[_ngcontent-%COMP%] {\n  width: 93%;\n  height: 100%;\n}\n\n.mat-divider[_ngcontent-%COMP%] {\n  border-top-color: red !important;\n  color: green !important;\n}\n\n.profile-pic[_ngcontent-%COMP%] {\n  background-color: #6235b8;\n  border-radius: 30%;\n  margin: 10px;\n  width: 120px;\n  height: 120px;\n}\n\n.rating[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  width: 50%;\n}\n\n.post-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n}\n\n.profile-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.profile-name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-top: 5px;\n  margin-bottom: 10px;\n}\n\n.profile-tag[_ngcontent-%COMP%] {\n  color: gray;\n  font-weight: 400;\n  margin-top: 6px;\n  margin-left: 5px;\n  font-size: 15px;\n}\n\n.rating-box[_ngcontent-%COMP%] {\n  flex: 3;\n}\n\n.post-text[_ngcontent-%COMP%] {\n  flex: 3;\n  align-self: center;\n  font-weight: 550;\n  margin: 20px 15px;\n  font-size: 2.5em;\n  line-height: 150%;\n}\n\n.large-post-image[_ngcontent-%COMP%] {\n  flex: 2;\n  width: 45%;\n}\n\n.small-post-bg[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 450px;\n  height: 500px;\n}\n\n.large-post-bg[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: white;\n  width: 950px;\n  height: 300px;\n}\n\n.caption-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.player[_ngcontent-%COMP%] {\n  margin-top: auto;\n}\n\n.flexy[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.player-area[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  gap: 10px;\n}\n\n.player-area-box[_ngcontent-%COMP%] {\n  margin-top: auto;\n  display: flex;\n  flex-direction: column;\n}\n\n.player-image[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  background-color: white;\n}\n\n.player-name[_ngcontent-%COMP%] {\n  text-shadow: 4px 2px black;\n  text-align: center;\n  font-size: 1.5em;\n}\n\n.content-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 10px;\n}\n\n.play-button[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 100%;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  max-width: 500px;\n  width: 100%;\n  color: white;\n  margin-top: 20px;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: transparent;\n}\n\n.center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.list[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.space[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.vote-flex[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 10px;\n}\n\n.vote-flex2[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 10px;\n}\n\n.host-submissions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  margin-top: 80px;\n}\n\n.video-duration[_ngcontent-%COMP%], .posted[_ngcontent-%COMP%], .views[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  gap: 5px;\n}\n\n.example-full-width2[_ngcontent-%COMP%] {\n  width: 45%;\n  background-color: transparent;\n}\n\n.extra-info[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.time-suffix[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  position: relative;\n  bottom: 3px;\n}\n\n.title-label[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 2px;\n}\n\n.warning[_ngcontent-%COMP%] {\n  color: red;\n}\n\n  .mat-form-field-wrapper {\n  padding-bottom: 0;\n}\n\n.input-spacer[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.star-rating[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.new-game-button[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.play-again-text[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.review-title[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.large-test[_ngcontent-%COMP%] {\n  transform: scale(1.5);\n}\n\n.small-flex-a[_ngcontent-%COMP%] {\n  height: calc(100px * var(--vw-scale-small));\n  transform: scale(var(--vw-scale-small));\n}\n\n.small-flex-b[_ngcontent-%COMP%] {\n  height: calc(100px * var(--vw-scale-large));\n  transform: scale(var(--vw-scale-large));\n}\n\n.error[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.instructions-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  top: 65px;\n  height: 50px;\n  z-index: 1;\n  margin-top: 0px;\n  background-color: #444;\n  width: 100%;\n}\n\n.sticky-spacer[_ngcontent-%COMP%] {\n  height: 125px;\n}\n\n.vote-confirm[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n\n.no-margin-bottom[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.mat-confirm[_ngcontent-%COMP%] {\n  background-color: rgb(29, 168, 29);\n}\n\n.mat-deny[_ngcontent-%COMP%] {\n  background-color: rgb(211, 34, 34);\n}\n\n.instructions-progress[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\nemoji-picker[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  z-index: 1;\n}\n\n.details[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n.emoji-button[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n\n.reduced[_ngcontent-%COMP%] {\n  transform: scale(0.82);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLHdCQUFBO0FBTEY7O0FBUUE7RUFDRSxrQkFBQTtBQUxGOztBQVFBO0VBQ0UsWUFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0RBQUE7RUFDQSx5QkFBQTtBQUxGOztBQVFBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FBTEY7O0FBUUE7RUFDRTtJQUNJLHdCQUFBO0VBTEo7RUFPQTtJQUNJLGtDQUFBO0VBTEo7QUFDRjs7QUFZQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBVkY7O0FBYUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQVZGOztBQWFBO0VBQ0Usa0JBQUE7QUFWRjs7QUFhQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7QUFWRjs7QUFhQTtFQUNFLGlDQUFBO0FBVkY7O0FBYUE7RUFDRSxvQkFBQTtFQUNBLDRCQUFBO0FBVkY7O0FBYUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFWRjs7QUFhQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBWEY7O0FBY0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQVhGOztBQWNBO0VBRUUsMEJBQUE7RUFDQSxnQkFBQTtBQVpGOztBQWVBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBWkY7O0FBZUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQVpGOztBQWVBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVpGOztBQWVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVpGOztBQWVBO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFaRjs7QUFlQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBWkY7O0FBZUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBWkY7O0FBZUE7RUFDRSxZQUFBO0FBWkY7O0FBZUE7RUF0SEUsMEJBQUE7RUF5SEEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFiRjs7QUFnQkE7RUE5SEUsMEJBQUE7RUFpSUEsa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFkRjs7QUFpQkE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtBQWRGOztBQWlCQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBZEY7O0FBaUJBO0VBRUUsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFmRjs7QUFrQkE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxvQ0FBQTtBQWZGOztBQWtCQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFmRjs7QUFrQkE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQWZGOztBQWtCQTtFQUNFLGdDQUFBO0VBQ0EsdUJBQUE7QUFmRjs7QUFrQkE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBZkY7O0FBa0JBO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0FBZkY7O0FBa0JBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFmRjs7QUFrQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFmRjs7QUFrQkE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBZkY7O0FBa0JBO0VBRUUsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQWhCRjs7QUFtQkE7RUFDRSxPQUFBO0FBaEJGOztBQW1CQTtFQUVFLE9BQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBakJGOztBQW9CQTtFQUNFLE9BQUE7RUFDQSxVQUFBO0FBakJGOztBQW9CQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFqQkY7O0FBb0JBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFqQkY7O0FBb0JBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFqQkY7O0FBb0JBO0VBQ0UsZ0JBQUE7QUFqQkY7O0FBb0JBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFqQkY7O0FBb0JBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsU0FBQTtBQWpCRjs7QUFvQkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQWpCRjs7QUFvQkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBakJGOztBQW9CQTtFQTdSRSwwQkFBQTtFQWdTQSxrQkFBQTtFQUNBLGdCQUFBO0FBbEJGOztBQXFCQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQWxCRjs7QUFxQkE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFsQkY7O0FBcUJBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBbEJKOztBQXFCQTtFQUNFLFdBQUE7RUFDQSw2QkFBQTtBQWxCRjs7QUFxQkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsY0FBQTtBQWxCRjs7QUFxQkE7RUFDRSxZQUFBO0FBbEJGOztBQXFCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQWxCRjs7QUFxQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQWxCRjs7QUFxQkE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFFBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsVUFBQTtFQUNBLDZCQUFBO0FBbEJGOztBQXFCQTtFQUNFLGdCQUFBO0FBbEJGOztBQXFCQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBbEJGOztBQTZCQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBMUJGOztBQTZCQTtFQUNFLFVBQUE7QUExQkY7O0FBNkJBO0VBQ0UsaUJBQUE7QUExQkY7O0FBNkJBO0VBQ0UsbUJBQUE7QUExQkY7O0FBNkJBO0VBQ0UsZ0JBQUE7QUExQkY7O0FBNkJBO0VBQ0UsWUFBQTtBQTFCRjs7QUE2QkE7RUFDRSxnQkFBQTtBQTFCRjs7QUE2QkE7RUFDRSxtQkFBQTtBQTFCRjs7QUE2QkE7RUFDRSxxQkFBQTtBQTFCRjs7QUE2QkE7RUFDRSwyQ0FBQTtFQUNBLHVDQUFBO0FBMUJGOztBQTZCQTtFQUNFLDJDQUFBO0VBQ0EsdUNBQUE7QUExQkY7O0FBNkJBO0VBQ0UsZ0JBQUE7QUExQkY7O0FBNkJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUVBLHNCQUFBO0VBQ0EsV0FBQTtBQTNCRjs7QUE4QkE7RUFDRSxhQUFBO0FBM0JGOztBQThCQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQTNCRjs7QUE4QkE7RUFDRSxnQkFBQTtBQTNCRjs7QUE4QkE7RUFDRSxrQ0FBQTtBQTNCRjs7QUE4QkE7RUFDRSxrQ0FBQTtBQTNCRjs7QUE4QkE7RUFDRSxnQkFBQTtBQTNCRjs7QUE4QkE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBM0JGOztBQThCQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUEzQkY7O0FBOEJBO0VBQ0UsZUFBQTtBQTNCRjs7QUE4QkE7RUFDRSxzQkFBQTtBQTNCRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuaHRtbCB7XHJcbi8vICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuLy8gfVxyXG5cclxuJGJyZWFrcG9pbnQtbW9iaWxlOiA3NzVweDtcclxuXHJcbi5oaWRlIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbnZpc2libGUge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLmJhY2tncm91bmQtaG9zdCB7IFxyXG4gIGhlaWdodDoxMDAlO1xyXG4gIGFuaW1hdGlvbjogc2Nyb2xsaW5nIDIwcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL2ltYWdlcy9iZ190ZXN0MS5wbmdcIikgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xyXG59XHJcblxyXG4uYmFja2dyb3VuZC1jbGllbnQgeyBcclxuICBoZWlnaHQ6MTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMzIzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNjcm9sbGluZyB7XHJcbiAgZnJvbXtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xyXG4gIH1cclxuICB0b3tcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTExOHB4IDExMThweDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0ZXh0LXNoYWRvdyB7XHJcbiAgdGV4dC1zaGFkb3c6IDRweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbi53dGVzdDEge1xyXG4gIHdpZHRoOiAzMzhweDtcclxuICBoZWlnaHQ6IDM3NXB4O1xyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY2VudGVyLXRleHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcHRpb24taW5wdXQge1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ0LCA0NCwgNDQsIDEpO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NCwgNDQsIDQ0LCAxKTtcclxufVxyXG5cclxuOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkLnRleHQtZm9ybS1hcmVhIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5wdXQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5iYW5uZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYyMzViODtcclxuICBoZWlnaHQ6IDY1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMTtcclxuICAvLyBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4ubG9naW4tY2FyZHMge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4uYmFubmVyLW5hbWUge1xyXG4gIEBleHRlbmQgLndoaXRlLXRleHQ7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggYmxhY2s7XHJcbiAgbWFyZ2luLXRvcDogMjBweDsgIFxyXG59XHJcblxyXG4uYmFubmVyLXByb2ZpbGUtcGljIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi50ZXh0LWZvcm0tYXJlYSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB3aWR0aDogODB2dztcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG4uY2FwdGlvbi1pbnB1dC1pbWcge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLmltYWdlLXZvdGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaW1hZ2Utdm90ZS1jb250YWluZXIge1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIGdhcDogMTBweDtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbWFnZS12b3RlLWltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG4udGVzdDMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4ud2hpdGUtdGV4dCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaW5zdHJ1Y3Rpb25zIHtcclxuICBAZXh0ZW5kIC53aGl0ZS10ZXh0O1xyXG4gIEBpbmNsdWRlIHRleHQtc2hhZG93O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICBmb250LXNpemU6IDJlbTtcclxufVxyXG5cclxuLnRpbWVyIHtcclxuICBAZXh0ZW5kIC53aGl0ZS10ZXh0O1xyXG4gIEBpbmNsdWRlIHRleHQtc2hhZG93O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDZlbTtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4udm90ZS10ZXh0IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ucG9zdC1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnRpbWVib3gge1xyXG4gIEBleHRlbmQgLndoaXRlLXRleHQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMTZweDtcclxuICByaWdodDogMjJweDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi50aW1lYm94LXRleHQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAwIDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbn1cclxuXHJcbi5wb3N0LXN1YnRleHQge1xyXG4gIGNvbG9yOmdyYXk7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG4vLyBUT0RPOiBhZGp1c3QgdG8gcGl4ZWwgdmFsdWVzXHJcbi5wb3N0LWltYWdlIHtcclxuICB3aWR0aDogOTMlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1kaXZpZGVyIHtcclxuICBib3JkZXItdG9wLWNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuICBjb2xvcjogZ3JlZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnByb2ZpbGUtcGljIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjIzNWI4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwJTtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbn1cclxuXHJcbi5yYXRpbmcge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5wb3N0LWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuLnByb2ZpbGUtaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4ucHJvZmlsZS1uYW1lIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLXRhZyB7XHJcbiAgLy8gZmxleDogMTtcclxuICBjb2xvcjpncmF5O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4ucmF0aW5nLWJveCB7XHJcbiAgZmxleDogM1xyXG59XHJcblxyXG4ucG9zdC10ZXh0IHtcclxuICAvLyBmb250LXNpemU6IDJlbTtcclxuICBmbGV4OiAzO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNTUwO1xyXG4gIG1hcmdpbjogMjBweCAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XHJcbn1cclxuXHJcbi5sYXJnZS1wb3N0LWltYWdlIHtcclxuICBmbGV4OiAyO1xyXG4gIHdpZHRoOiA0NSU7XHJcbn1cclxuXHJcbi5zbWFsbC1wb3N0LWJnIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogNDUwcHg7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuLmxhcmdlLXBvc3QtYmcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDk1MHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi5jYXB0aW9uLWZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnBsYXllciB7XHJcbiAgbWFyZ2luLXRvcDogYXV0b1xyXG59XHJcblxyXG4uZmxleHkge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnBsYXllci1hcmVhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuLnBsYXllci1hcmVhLWJveCB7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5wbGF5ZXItaW1hZ2Uge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucGxheWVyLW5hbWUge1xyXG4gIEBleHRlbmQgLndoaXRlLXRleHQ7XHJcbiAgQGluY2x1ZGUgdGV4dC1zaGFkb3c7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbi5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLnBsYXktYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mb3JtIHtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4OyAgXHJcbiAgfVxyXG4gIFxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmxpc3Qge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uc3BhY2Uge1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLnZvdGUtZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi52b3RlLWZsZXgyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuLmhvc3Qtc3VibWlzc2lvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBtYXJnaW4tdG9wOiA4MHB4O1xyXG59XHJcblxyXG4udmlkZW8tZHVyYXRpb24ge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiA1cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgyIHtcclxuICB3aWR0aDogNDUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZXh0cmEtaW5mbyB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnRpbWUtc3VmZml4IHtcclxuICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3R0b206IDNweDtcclxufVxyXG5cclxuLnZpZXdzIHtcclxuICBAZXh0ZW5kIC52aWRlby1kdXJhdGlvbjtcclxufVxyXG5cclxuLnBvc3RlZCB7XHJcbiAgQGV4dGVuZCAudmlkZW8tZHVyYXRpb247XHJcbn1cclxuXHJcbi50aXRsZS1sYWJlbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG59XHJcblxyXG4ud2FybmluZyB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcblxyXG4uaW5wdXQtc3BhY2VyIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uc3Rhci1yYXRpbmcge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5uZXctZ2FtZS1idXR0b24ge1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLnBsYXktYWdhaW4tdGV4dCB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnJldmlldy10aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmxhcmdlLXRlc3Qge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxufVxyXG5cclxuLnNtYWxsLWZsZXgtYSB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHB4ICogdmFyKC0tdnctc2NhbGUtc21hbGwpKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKHZhcigtLXZ3LXNjYWxlLXNtYWxsKSk7XHJcbn1cclxuXHJcbi5zbWFsbC1mbGV4LWIge1xyXG4gIGhlaWdodDogY2FsYygxMDBweCAqIHZhcigtLXZ3LXNjYWxlLWxhcmdlKSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSh2YXIoLS12dy1zY2FsZS1sYXJnZSkpO1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5pbnN0cnVjdGlvbnMtYm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNjVweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgei1pbmRleDogMTtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgLy8gbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc3RpY2t5LXNwYWNlciB7XHJcbiAgaGVpZ2h0OiAxMjVweDtcclxufVxyXG5cclxuLnZvdGUtY29uZmlybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuLm5vLW1hcmdpbi1ib3R0b20ge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5tYXQtY29uZmlybSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxNjgsIDI5KTtcclxufVxyXG5cclxuLm1hdC1kZW55IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjExLCAzNCwgMzQpO1xyXG59XHJcblxyXG4uaW5zdHJ1Y3Rpb25zLXByb2dyZXNzIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5lbW9qaS1waWNrZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmRldGFpbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lbW9qaS1idXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLnJlZHVjZWQge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC44Mik7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _debounce_click_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./debounce-click.directive */ 2874);
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post/post.component */ 3837);
/* harmony import */ var _player_card_player_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player-card/player-card.component */ 1039);
/* harmony import */ var _in_progress_screen_in_progress_screen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./in-progress-screen/in-progress-screen.component */ 5135);
/* harmony import */ var angular_star_rating__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular-star-rating */ 4351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);






















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_12__.MatListModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDividerModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatNativeDateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule,
        angular_star_rating__WEBPACK_IMPORTED_MODULE_19__.StarRatingModule.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _debounce_click_directive__WEBPACK_IMPORTED_MODULE_2__.DebounceClickDirective,
        _post_post_component__WEBPACK_IMPORTED_MODULE_3__.PostComponent,
        _player_card_player_card_component__WEBPACK_IMPORTED_MODULE_4__.PlayerCardComponent,
        _in_progress_screen_in_progress_screen_component__WEBPACK_IMPORTED_MODULE_5__.InProgressScreenComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_12__.MatListModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDividerModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatNativeDateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, angular_star_rating__WEBPACK_IMPORTED_MODULE_19__.StarRatingModule] }); })();


/***/ }),

/***/ 2874:
/*!*********************************************!*\
  !*** ./src/app/debounce-click.directive.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DebounceClickDirective": () => (/* binding */ DebounceClickDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1989);




class DebounceClickDirective {
    constructor() {
        this.debounceTime = 500;
        this.debounceClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.clicks = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    ngOnInit() {
        this.subscription = this.clicks.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.debounceTime)(this.debounceTime)).subscribe(e => this.debounceClick.emit(e));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    clickEvent(event) {
        event.preventDefault();
        event.stopPropagation();
        this.clicks.next(event);
    }
}
DebounceClickDirective.ɵfac = function DebounceClickDirective_Factory(t) { return new (t || DebounceClickDirective)(); };
DebounceClickDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DebounceClickDirective, selectors: [["", "appDebounceClick", ""]], hostBindings: function DebounceClickDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DebounceClickDirective_click_HostBindingHandler($event) { return ctx.clickEvent($event); });
    } }, inputs: { debounceTime: "debounceTime" }, outputs: { debounceClick: "debounceClick" } });


/***/ }),

/***/ 5135:
/*!********************************************************************!*\
  !*** ./src/app/in-progress-screen/in-progress-screen.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InProgressScreenComponent": () => (/* binding */ InProgressScreenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


const _c0 = function (a0, a1) { return { "animate__animated": a0, "animate__fadeOut": a1 }; };
function InProgressScreenComponent_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx_r0.timer < 0, ctx_r0.timer < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.timer > 0 ? ctx_r0.timer : 0);
} }
function InProgressScreenComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx_r1.timer != null && ctx_r1.timer < 0, ctx_r1.timer != null && ctx_r1.timer < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.instructions);
} }
function InProgressScreenComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8)(1, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Read the game instructions below, then click the button on your device");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 11)(5, "img", 12)(6, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function InProgressScreenComponent_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 20)(2, "div", 20)(3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InProgressScreenComponent_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u2713 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InProgressScreenComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InProgressScreenComponent_div_5_div_2_Template, 4, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InProgressScreenComponent_div_5_div_3_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const player_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", player_r4.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", player_r4.profile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.playersSubmitted.includes(player_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.playersSubmitted.includes(player_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r4.name);
} }
class InProgressScreenComponent {
    constructor() { }
    ngOnInit() {
    }
    removeClass(element, className) {
        const node = document.querySelector(element);
        node?.classList.remove(className);
    }
}
InProgressScreenComponent.ɵfac = function InProgressScreenComponent_Factory(t) { return new (t || InProgressScreenComponent)(); };
InProgressScreenComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InProgressScreenComponent, selectors: [["app-in-progress-screen"]], inputs: { players: "players", playersSubmitted: "playersSubmitted", timer: "timer", instructions: "instructions" }, decls: 6, vars: 8, consts: [["class", "timer", 3, "ngClass", 4, "ngIf"], ["class", "instructions", 3, "ngClass", 4, "ngIf"], ["class", "title-flex", 4, "ngIf"], [1, "player-area-box", 3, "ngClass"], [1, "player-area"], ["class", "player", 4, "ngFor", "ngForOf"], [1, "timer", 3, "ngClass"], [1, "instructions", 3, "ngClass"], [1, "title-flex"], [1, "instructions-title"], [1, "how-to-play"], ["src", "../../assets/images/instructions_1.png", 1, "instruction-image"], ["src", "../../assets/images/instructions_2.png", 1, "instruction-image"], ["src", "../../assets/images/instructions_3.png", 1, "instruction-image"], [1, "player"], [1, "player-image", 3, "src"], ["class", "dots", 4, "ngIf"], ["class", "checkmark", 4, "ngIf"], [1, "player-name"], [1, "dots"], [1, "dot"], [1, "checkmark"]], template: function InProgressScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InProgressScreenComponent_p_0_Template, 2, 5, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InProgressScreenComponent_p_1_Template, 2, 5, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InProgressScreenComponent_div_2_Template, 7, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InProgressScreenComponent_div_5_Template, 6, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.timer != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.instructions != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.instructions == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, ctx.timer != null && ctx.timer < 0, ctx.timer != null && ctx.timer < 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.players);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [".white-text[_ngcontent-%COMP%], .player-name[_ngcontent-%COMP%], .timer[_ngcontent-%COMP%], .instructions[_ngcontent-%COMP%] {\n  color: white;\n}\n\n[_nghost-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.instructions-title[_ngcontent-%COMP%] {\n  font-size: 2em;\n  color: white;\n  margin-top: 5px;\n}\n\n.title-flex[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.how-to-play[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin: 0 25px;\n  background-color: #353535;\n  padding: 20px;\n  border-radius: 25px;\n}\n\n.instruction-image[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\n.instructions[_ngcontent-%COMP%] {\n  text-shadow: 4px 2px black;\n  text-align: center;\n  line-height: 1.5em;\n  margin-top: 100px;\n  font-size: 2em;\n}\n\n.timer[_ngcontent-%COMP%] {\n  text-shadow: 4px 2px black;\n  text-align: center;\n  margin-top: 80px;\n  font-size: 10em;\n}\n\n.player[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.player-area[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  gap: 10px;\n}\n\n.player-area-box[_ngcontent-%COMP%] {\n  margin-top: auto;\n  display: flex;\n  flex-direction: column;\n}\n\n.player-image[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border-radius: 30%;\n}\n\n.player-name[_ngcontent-%COMP%] {\n  text-shadow: 4px 2px black;\n  text-align: center;\n  font-size: 1.5em;\n}\n\n.checkmark[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 20px;\n  border-radius: 10px;\n  background-color: #61E318;\n  color: #023905;\n  font-weight: 900;\n  text-align: center;\n  margin: 10px;\n  margin-top: -10px;\n}\n\n.dots[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 20px;\n  border-radius: 10px;\n  background-color: #CCC;\n  margin: 10px;\n  margin-top: -10px;\n}\n\n.dot[_ngcontent-%COMP%] {\n  animation-timing-function: ease-in;\n  animation-iteration-count: infinite;\n  animation-name: dot-scale;\n  animation-duration: 1s;\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin: 5px 0px;\n  border-radius: 10px;\n  background-color: #444;\n  transform: scale(0.65);\n}\n\n.dot[_ngcontent-%COMP%]:first-of-type {\n  margin-left: 6px;\n}\n\n.dot[_ngcontent-%COMP%]:nth-of-type(2) {\n  animation-delay: 0.15s;\n}\n\n.dot[_ngcontent-%COMP%]:nth-of-type(3) {\n  animation-delay: 0.3s;\n}\n\n@keyframes dot-scale {\n  0%, 70% {\n    transform: scale(0.65);\n  }\n  35% {\n    transform: scale(1);\n  }\n}\n\n@keyframes overall-scale {\n  0%, 95% {\n    transform: scale(0);\n  }\n  5%, 90% {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluLXByb2dyZXNzLXNjcmVlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLFlBQUE7QUFISjs7QUFNQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBSEo7O0FBTUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFIRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBSkY7O0FBT0E7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7RUFDQSx5QkFBQTtFQUdBLGFBQUE7RUFDQSxtQkFBQTtBQVBGOztBQVdBO0VBQ0UsVUFBQTtBQVJGOztBQVdBO0VBN0NJLDBCQUFBO0VBZ0RBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFUSjs7QUFZQTtFQXRESSwwQkFBQTtFQXlEQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQVZKOztBQWFFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFWSjs7QUFhRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFNBQUE7QUFWSjs7QUFhRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBVko7O0FBYUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBVko7O0FBYUU7RUF0RkUsMEJBQUE7RUF5RkEsa0JBQUE7RUFDQSxnQkFBQTtBQVhKOztBQWlCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBZEo7O0FBaUJFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBZEo7O0FBaUJFO0VBQ0Usa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFFQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQWZKOztBQWlCSTtFQUNFLGdCQUFBO0FBZk47O0FBaUJJO0VBQ0Usc0JBQUE7QUFmTjs7QUFpQkk7RUFDRSxxQkFBQTtBQWZOOztBQW1CRTtFQUNFO0lBQVUsc0JBQUE7RUFmWjtFQWdCRTtJQUFNLG1CQUFBO0VBYlI7QUFDRjs7QUFlRTtFQUNFO0lBQVUsbUJBQUE7RUFaWjtFQWFFO0lBQVUsbUJBQUE7RUFWWjtBQUNGIiwiZmlsZSI6ImluLXByb2dyZXNzLXNjcmVlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiB0ZXh0LXNoYWRvdyB7XHJcbiAgICB0ZXh0LXNoYWRvdzogNHB4IDJweCBibGFjaztcclxuICB9XHJcblxyXG4ud2hpdGUtdGV4dCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbnN0cnVjdGlvbnMtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuXHJcbn1cclxuXHJcbi50aXRsZS1mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmhvdy10by1wbGF5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLy8gcGFkZGluZzogNTVweDtcclxuICBtYXJnaW46IDAgMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzNTM1O1xyXG4gIC8vIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICAvLyBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAvLyBmb250LXNpemU6IDJlbTtcclxufVxyXG5cclxuLmluc3RydWN0aW9uLWltYWdlIHtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4uaW5zdHJ1Y3Rpb25zIHtcclxuICAgIEBleHRlbmQgLndoaXRlLXRleHQ7XHJcbiAgICBAaW5jbHVkZSB0ZXh0LXNoYWRvdztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgfVxyXG5cclxuLnRpbWVyIHtcclxuICAgIEBleHRlbmQgLndoaXRlLXRleHQ7XHJcbiAgICBAaW5jbHVkZSB0ZXh0LXNoYWRvdztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICBmb250LXNpemU6IDEwZW07XHJcbiAgfVxyXG5cclxuICAucGxheWVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5wbGF5ZXItYXJlYSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wbGF5ZXItYXJlYS1ib3gge1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICBcclxuICAucGxheWVyLWltYWdlIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wbGF5ZXItbmFtZSB7XHJcbiAgICBAZXh0ZW5kIC53aGl0ZS10ZXh0O1xyXG4gICAgQGluY2x1ZGUgdGV4dC1zaGFkb3c7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gIH1cclxuXHJcbiAgLy8gZG90cyBhbmltYXRpb25cclxuICAvLyBodHRwczovL2NvZGVwZW4uaW8vYWRtdngvcGVuL1hwamJPZFxyXG5cclxuICAuY2hlY2ttYXJrIHtcclxuICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MUUzMTg7XHJcbiAgICBjb2xvcjogIzAyMzkwNTtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweFxyXG4gIH1cclxuXHJcbiAgLmRvdHMge1xyXG4gICAgd2lkdGg6IDQycHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NDQztcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4XHJcbiAgfVxyXG4gIFxyXG4gIC5kb3Qge1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGRvdC1zY2FsZTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICBcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luOiA1cHggMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNjUpO1xyXG4gICAgXHJcbiAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICBtYXJnaW4tbGVmdDogNnB4XHJcbiAgICB9XHJcbiAgICAmOm50aC1vZi10eXBlKDIpIHtcclxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjE1cztcclxuICAgIH1cclxuICAgICY6bnRoLW9mLXR5cGUoMykge1xyXG4gICAgICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgZG90LXNjYWxlIHtcclxuICAgIDAlLCA3MCUgeyB0cmFuc2Zvcm06IHNjYWxlKDAuNjUpOyB9XHJcbiAgICAzNSUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgb3ZlcmFsbC1zY2FsZSB7XHJcbiAgICAwJSwgOTUlIHsgdHJhbnNmb3JtOiBzY2FsZSgwKTsgfVxyXG4gICAgNSUsIDkwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cclxuICB9XHJcbiAgIl19 */"] });


/***/ }),

/***/ 1039:
/*!******************************************************!*\
  !*** ./src/app/player-card/player-card.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerCardComponent": () => (/* binding */ PlayerCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function PlayerCardComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 9);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r0.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.profilePic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PlayerCardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2022\u2022\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlayerCardComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.score, " ");
} }
class PlayerCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
PlayerCardComponent.ɵfac = function PlayerCardComponent_Factory(t) { return new (t || PlayerCardComponent)(); };
PlayerCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerCardComponent, selectors: [["app-player-card"]], inputs: { playerName: "playerName", profilePic: "profilePic", color: "color", tagline: "tagline", score: "score", winner: "winner", inControl: "inControl", emoji: "emoji" }, decls: 11, vars: 7, consts: [[1, "player-card-background"], [1, "pfp-box"], ["class", "pfp-image", 3, "background-color", "src", 4, "ngIf"], ["class", "pfp-image-gray", 4, "ngIf"], [1, "content-box"], [1, "player-info"], [1, "player-card-name"], [1, "player-card-subtext"], ["class", "score-box", 4, "ngIf"], [1, "pfp-image", 3, "src"], [1, "pfp-image-gray"], [1, "score-box"]], template: function PlayerCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlayerCardComponent_img_2_Template, 1, 3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlayerCardComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PlayerCardComponent_div_10_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profilePic != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profilePic == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((tmp_2_0 = ctx.playerName) !== null && tmp_2_0 !== undefined ? tmp_2_0 : "Waiting for player");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx.winner ? "\uD83D\uDC51 Winner \u2022" : "", " ", ctx.inControl ? "\u2B50 Host \u2022 " : "", "", ctx.tagline != null ? ctx.emoji + " " + ctx.tagline : "Login at slaton.info/clickbait", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.score != null);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [".player-card-background[_ngcontent-%COMP%] {\n  background-color: white;\n  display: flex;\n  width: 600px;\n  height: 100px;\n}\n\n.pfp-box[_ngcontent-%COMP%] {\n  flex: 1;\n  align-self: center;\n}\n\n.pfp-image[_ngcontent-%COMP%], .pfp-image-gray[_ngcontent-%COMP%] {\n  background-color: #6235b8;\n  border-radius: 30%;\n  margin-top: 5px;\n  margin-left: 10px;\n  width: 85px;\n  height: 85px;\n}\n\n.pfp-image-gray[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #747474;\n  border-color: #494949;\n  border-style: solid;\n  border-width: 3px;\n  margin-top: 0;\n  color: #494949;\n  font-size: 3em;\n  width: 79px;\n  height: 79px;\n}\n\n.score-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-right: 10px;\n  font-size: 2em;\n}\n\n.content-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex: 4;\n}\n\n.content-box-score[_ngcontent-%COMP%] {\n  flex: 3.5;\n}\n\n.player-card-name[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  font-size: 2em;\n}\n\n.player-card-subtext[_ngcontent-%COMP%] {\n  color: gray;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllci1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDSjs7QUFDRTtFQUNFLE9BQUE7RUFDQSxrQkFBQTtBQUVKOztBQUNFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQ0U7RUFFRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxPQUFBO0FBQ0o7O0FBRUU7RUFDRSxTQUFBO0FBQ0o7O0FBRUU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6InBsYXllci1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYXllci1jYXJkLWJhY2tncm91bmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICB9XHJcbiAgLnBmcC1ib3gge1xyXG4gICAgZmxleDogMTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5wZnAtaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYyMzViODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDg1cHg7XHJcbiAgICBoZWlnaHQ6IDg1cHg7XHJcbiAgfVxyXG5cclxuICAucGZwLWltYWdlLWdyYXkge1xyXG4gICAgQGV4dGVuZCAucGZwLWltYWdlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NDc0NzQ7XHJcbiAgICBib3JkZXItY29sb3I6ICM0OTQ5NDk7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgY29sb3I6ICM0OTQ5NDk7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxuICAgIHdpZHRoOiA3OXB4O1xyXG4gICAgaGVpZ2h0OiA3OXB4O1xyXG4gIH1cclxuXHJcbiAgLnNjb3JlLWJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQtYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleDogNDtcclxuICB9XHJcblxyXG4gIC5jb250ZW50LWJveC1zY29yZSB7XHJcbiAgICBmbGV4OiAzLjU7XHJcbiAgfVxyXG5cclxuICAucGxheWVyLWNhcmQtbmFtZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgfVxyXG5cclxuICAucGxheWVyLWNhcmQtc3VidGV4dCB7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ 3837:
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostComponent": () => (/* binding */ PostComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var angular_star_rating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-star-rating */ 4351);




const _c0 = ["postContainerSmall"];
const _c1 = ["postTextSmall"];
const _c2 = ["postContainerLarge"];
const _c3 = ["postTextLarge"];
function PostComponent_ng_container_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "../assets/images/" + ctx_r4.medal + "_blank.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c4 = function (a0, a1, a2) { return { "invisible": a0, "animate__animated": a1, "animate__fadeIn": a2 }; };
function PostComponent_ng_container_0_ng_container_5_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const vote_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c4, !ctx_r8.animationSequence[i_r10], ctx_r8.animationSequence[i_r10], ctx_r8.animationSequence[i_r10]))("src", "../assets/images/" + vote_r9 + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c5 = function (a0, a1, a2, a3) { return { "animate__animated": a0, "animate__fadeInUp": a1, "invisible": a2, "animate__fadeOut": a3 }; };
function PostComponent_ng_container_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PostComponent_ng_container_0_ng_container_5_ng_container_8_Template, 2, 6, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](7, _c5, ctx_r5.triggerPoints, ctx_r5.triggerPoints, !ctx_r5.triggerPoints || ctx_r5.votes.length === 0, ctx_r5.exitPoints));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+", ctx_r5.voteTotal, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r5.submitter.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r5.submitter.profile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Created by ", ctx_r5.submitter.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.votes);
} }
const _c6 = function (a0, a1, a2) { return { "hide-overflow": a0, "animate__animated": a1, "animate__bounceOut": a2 }; };
const _c7 = function (a0, a1, a2, a3) { return { "animate__animated": a0, "animate__fadeInRight": a1, "animate__faster": a2, "hide": a3 }; };
const _c8 = function (a0, a1, a2, a3) { return { "animate__animated": a0, "animate__faster": a1, "animate__fadeInRight": a2, "hide": a3 }; };
function PostComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostComponent_ng_container_0_div_2_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PostComponent_ng_container_0_ng_container_5_Template, 9, 12, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5, 6)(8, "h1", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](8, _c6, ctx_r0.animate && ctx_r0.triggerText, ctx_r0.animate && ctx_r0.triggerExit, ctx_r0.animate && ctx_r0.triggerExit));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.medal != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showVotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](12, _c7, ctx_r0.animate && ctx_r0.triggerText, ctx_r0.animate && ctx_r0.triggerText, ctx_r0.animate && ctx_r0.triggerText, ctx_r0.animate && ctx_r0.votes == null && !ctx_r0.triggerText));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.caption.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](17, _c8, ctx_r0.animate && ctx_r0.triggerText, ctx_r0.animate && ctx_r0.triggerText, ctx_r0.animate && ctx_r0.triggerText, ctx_r0.animate && ctx_r0.votes == null && !ctx_r0.triggerText));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.caption.website, " ");
} }
function PostComponent_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "../assets/images/" + ctx_r11.medal + "_blank.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PostComponent_ng_container_1_ng_container_15_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const vote_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c4, !ctx_r15.animationSequence[i_r17], ctx_r15.animationSequence[i_r17], ctx_r15.animationSequence[i_r17]))("src", "../assets/images/" + vote_r16 + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PostComponent_ng_container_1_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PostComponent_ng_container_1_ng_container_15_ng_container_8_Template, 2, 6, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](7, _c5, ctx_r12.triggerPoints, ctx_r12.triggerPoints, !ctx_r12.triggerPoints || ctx_r12.votes.length === 0, ctx_r12.exitPoints));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+", ctx_r12.voteTotal, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r12.submitter.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r12.submitter.profile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Created by ", ctx_r12.submitter.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.votes);
} }
function PostComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostComponent_ng_container_1_div_2_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 22)(6, "div", 23)(7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 26)(13, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PostComponent_ng_container_1_ng_container_15_Template, 9, 12, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 29, 30)(18, "h1", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](13, _c6, ctx_r1.animate && ctx_r1.triggerText, ctx_r1.animate && ctx_r1.triggerExit, ctx_r1.animate && ctx_r1.triggerExit));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.medal != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", "#686868");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.caption.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 10, ctx_r1.caption.date, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showVotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](17, _c7, ctx_r1.animate && ctx_r1.triggerText, ctx_r1.animate && ctx_r1.triggerText, ctx_r1.animate && ctx_r1.triggerText, ctx_r1.animate && ctx_r1.votes == null && !ctx_r1.triggerText));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.caption.title);
} }
function PostComponent_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "../assets/images/" + ctx_r18.medal + "_blank.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PostComponent_ng_container_2_ng_container_8_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const vote_r23 = ctx.$implicit;
    const i_r24 = ctx.index;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c4, !ctx_r22.animationSequence[i_r24], ctx_r22.animationSequence[i_r24], ctx_r22.animationSequence[i_r24]))("src", "../assets/images/" + vote_r23 + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PostComponent_ng_container_2_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PostComponent_ng_container_2_ng_container_8_ng_container_8_Template, 2, 6, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](7, _c5, ctx_r19.triggerPoints, ctx_r19.triggerPoints, !ctx_r19.triggerPoints || ctx_r19.votes.length === 0, ctx_r19.exitPoints));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+", ctx_r19.voteTotal, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r19.submitter.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r19.submitter.profile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Created by ", ctx_r19.submitter.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r19.votes);
} }
function PostComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostComponent_ng_container_2_div_2_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 37)(4, "div", 38)(5, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PostComponent_ng_container_2_ng_container_8_Template, 9, 12, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5, 6)(11, "h1", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](16, _c6, ctx_r2.animate && ctx_r2.triggerText, ctx_r2.animate && ctx_r2.triggerExit, ctx_r2.animate && ctx_r2.triggerExit));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.medal != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r2.padLeadingZeros(ctx_r2.caption.duration.minutes, 2), ":", ctx_r2.padLeadingZeros(ctx_r2.caption.duration.seconds, 2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.showVotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](20, _c7, ctx_r2.animate && ctx_r2.triggerText, ctx_r2.animate && ctx_r2.triggerText, ctx_r2.animate && ctx_r2.triggerText, ctx_r2.animate && ctx_r2.votes == null && !ctx_r2.triggerText));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.caption.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](25, _c7, ctx_r2.animate && ctx_r2.triggerText, ctx_r2.animate && ctx_r2.triggerText, ctx_r2.animate && ctx_r2.triggerText, ctx_r2.animate && ctx_r2.votes == null && !ctx_r2.triggerText));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.caption.uploader);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](30, _c7, ctx_r2.animate && ctx_r2.triggerText, ctx_r2.animate && ctx_r2.triggerText, ctx_r2.animate && ctx_r2.triggerText, ctx_r2.animate && ctx_r2.votes && !ctx_r2.triggerText));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate5"]("", ctx_r2.caption.views.base, "", ctx_r2.caption.views.suffix, " views - ", ctx_r2.caption.timeUploaded.base, " ", ctx_r2.caption.timeUploaded.suffix, "", ctx_r2.caption.timeUploaded.base > 1 ? "s" : "", " ago");
} }
function PostComponent_ng_container_3_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "../assets/images/" + ctx_r26.medal + "_blank.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PostComponent_ng_container_3_ng_container_8_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const vote_r31 = ctx.$implicit;
    const i_r32 = ctx.index;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c4, !ctx_r30.animationSequence[i_r32], ctx_r30.animationSequence[i_r32], ctx_r30.animationSequence[i_r32]))("src", "../assets/images/" + vote_r31 + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PostComponent_ng_container_3_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PostComponent_ng_container_3_ng_container_8_ng_container_8_Template, 2, 6, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](7, _c5, ctx_r27.triggerPoints, ctx_r27.triggerPoints, !ctx_r27.triggerPoints || ctx_r27.votes.length === 0, ctx_r27.exitPoints));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+", ctx_r27.voteTotal, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r27.submitter.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r27.submitter.profile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Created by ", ctx_r27.submitter.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r27.votes);
} }
const _c9 = function (a0, a1, a2, a3) { return { "hide-overflow": a0, "small-scale": a1, "animate__animated": a2, "animate__bounceOut": a3 }; };
function PostComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostComponent_ng_container_3_div_3_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 43)(5, "div", 26)(6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PostComponent_ng_container_3_ng_container_8_Template, 9, 12, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 44)(10, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "star-rating", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 48, 30)(16, "h1", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](11, _c9, ctx_r3.animate && ctx_r3.triggerText, ctx_r3.small, ctx_r3.animate && ctx_r3.triggerExit, ctx_r3.animate && ctx_r3.triggerExit));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.medal != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.showVotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](16, _c8, ctx_r3.animate && ctx_r3.triggerText, ctx_r3.animate && ctx_r3.triggerText, ctx_r3.animate && ctx_r3.triggerText, ctx_r3.animate && ctx_r3.votes == null && !ctx_r3.triggerText));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.caption.what, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](21, _c8, ctx_r3.animate && ctx_r3.triggerText, ctx_r3.animate && ctx_r3.triggerText, ctx_r3.animate && ctx_r3.triggerText, ctx_r3.animate && ctx_r3.votes == null && !ctx_r3.triggerText))("readOnly", true)("rating", ctx_r3.caption.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](26, _c8, ctx_r3.animate && ctx_r3.triggerText, ctx_r3.animate && ctx_r3.triggerText, ctx_r3.animate && ctx_r3.triggerText, ctx_r3.animate && ctx_r3.votes == null && !ctx_r3.triggerText));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.caption.title);
} }
class PostComponent {
    constructor() {
        this.showVotes = false;
        this.animate = false;
        this.maxVotes = 0;
        this.sound = false;
        this.triggerText = false;
        this.triggerExit = false;
        this.triggerPoints = false;
        this.exitPoints = false;
        this.postDisplayDuration = 12000;
        this.textDisplayDelay = 2000;
        this.voteRevealDuration = 500;
        this.animationSequence = [];
        this.voteTotal = 0;
        this.goldPoints = 100;
        this.silverPoints = 50;
        this.bronzePoints = 25;
    }
    // resize text to fit in certain number of lines
    resizeToFit(container, textElement, fontSize, targetLines) {
        let width = container.offsetWidth;
        if (width === 0) {
            width = this.small ? 160 : 450;
        }
        let divHeight = container.offsetHeight;
        if (divHeight === 0) {
            divHeight = this.small ? 67 : 168;
        }
        const lineHeight = parseInt(window.getComputedStyle(textElement, null).getPropertyValue('line-height'));
        if (lineHeight < 1) {
            return;
        }
        const lines = Math.floor(divHeight / lineHeight);
        if (lines > targetLines) {
            textElement.style.fontSize = (fontSize - 1) + 'px';
            this.resizeToFit(container, textElement, fontSize - 1, targetLines);
        }
    }
    playSFX(file, volume = 0.5) {
        const sfx = new Audio(file);
        sfx.volume = volume;
        sfx.play();
    }
    padLeadingZeros(num, size) {
        var s = num + "";
        while (s.length < size)
            s = "0" + s;
        return s;
    }
    doResize() {
        if (this.postContainerSmall != null && this.postTextSmall != null) {
            const titleContainerSmall = this.postContainerSmall.nativeElement;
            const titleTextSmall = this.postTextSmall.nativeElement;
            const titleSizeSmall = parseInt(window.getComputedStyle(titleTextSmall, null).getPropertyValue('font-size'));
            this.resizeToFit(titleContainerSmall, titleTextSmall, titleSizeSmall, 2);
        }
        if (this.postContainerLarge != null && this.postTextLarge != null) {
            const titleContainerLarge = this.postContainerLarge.nativeElement;
            const titleTextLarge = this.postTextLarge.nativeElement;
            const titleSizeLarge = parseInt(window.getComputedStyle(titleTextLarge, null).getPropertyValue('font-size'));
            this.resizeToFit(titleTextLarge, titleTextLarge, titleSizeLarge, 3);
        }
    }
    ngAfterViewInit() {
        if (this.animate === false || this.showVotes === true) {
            this.doResize();
        }
    }
    doExit() {
        setTimeout(() => {
            this.triggerPoints = true;
            if (this.sound) {
                this.playSFX('assets/audio/sfx/cash.mp3');
            }
        }, 1000);
        setTimeout(() => {
            this.exitPoints = true;
        }, 2500);
    }
    ngOnInit() {
        if (this.votes != null) {
            this.numVotes = this.votes.length;
            const bronzeVotes = this.votes.filter((vote) => vote === 'bronze').length;
            const silverVotes = this.votes.filter((vote) => vote === 'silver').length;
            const goldVotes = this.votes.filter((vote) => vote === 'gold').length;
            this.voteTotal += bronzeVotes * this.bronzePoints;
            this.voteTotal += silverVotes * this.silverPoints;
            this.voteTotal += goldVotes * this.goldPoints;
            for (let i = 0; i < this.maxVotes; i++) {
                this.animationSequence.push(false);
            }
        }
        else {
            this.numVotes = 0;
        }
        if (this.animate) {
            if (this.votes == null) {
                setTimeout(() => {
                    if (!this.voting) {
                        this.playSFX('assets/audio/sfx/woosh.wav', 0.4);
                    }
                    this.triggerText = true;
                    setTimeout(() => {
                        this.doResize();
                    }, 0);
                }, this.textDisplayDelay);
                setTimeout(() => {
                    this.triggerExit = true;
                }, this.postDisplayDuration);
            }
            else {
                setTimeout(() => {
                    if (this.votes != null) {
                        this.voteIndex = this.numVotes - 1;
                        this.voteTimer = setInterval(() => {
                            if (this.voteIndex < 0) {
                                clearInterval(this.voteTimer);
                                setTimeout(() => {
                                    this.doExit();
                                }, this.voteRevealDuration * (this.maxVotes - this.numVotes));
                            }
                            else {
                                if (this.animationSequence[this.voteIndex] != null) {
                                    if (this.sound) {
                                        const pointIndex = this.maxVotes - this.voteIndex;
                                        this.playSFX('assets/audio/sfx/point' + pointIndex + '.wav');
                                    }
                                    this.animationSequence[this.voteIndex] = true;
                                }
                                this.voteIndex--;
                            }
                        }, this.voteRevealDuration);
                    }
                }, 1000);
            }
        }
    }
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(); };
PostComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-post"]], viewQuery: function PostComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.postContainerSmall = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.postTextSmall = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.postContainerLarge = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.postTextLarge = _t.first);
    } }, inputs: { submitter: "submitter", sacrifice: "sacrifice", votes: "votes", image: "image", caption: "caption", type: "type", small: "small", showVotes: "showVotes", animate: "animate", maxVotes: "maxVotes", voting: "voting", sound: "sound", medal: "medal" }, decls: 4, vars: 4, consts: [[4, "ngIf"], [1, "small-post-bg", 3, "ngClass"], ["class", "medal-box", 4, "ngIf"], [1, "post-image-box"], [1, "post-image", 3, "src"], [1, "text-area", 3, "ngClass"], ["postContainerSmall", ""], [1, "post-text"], ["postTextSmall", ""], [1, "post-subtext", 3, "ngClass"], [1, "medal-box"], [1, "medal-small", 3, "src"], [1, "points-text", 3, "ngClass"], [1, "creator-name", "animate__animated", "animate__fadeIn"], [1, "test-pfp2", 3, "src"], [1, "vote-name"], [1, "vote-icons", "animate__animated", "animate__fadeIn"], [4, "ngFor", "ngForOf"], [1, "medals", 3, "ngClass", "src"], [1, "large-post-bg", 3, "ngClass"], [1, "profile-box"], ["src", "../../assets/images/blank_pfp.png", 1, "profile-pic"], [1, "post-box"], [1, "profile-info"], [1, "profile-name"], [1, "profile-tag"], [1, "post-content"], [1, "large-post-image-div"], [1, "large-post-image", 3, "src"], [1, "large-post-text-div", "large-post-line-spacing"], ["postContainerLarge", ""], [1, "post-text-large", 3, "ngClass"], ["postTextLarge", ""], [1, "medal-large", 3, "src"], [1, "points-text-large", 3, "ngClass"], [1, "creator-name-large", "animate__animated", "animate__fadeIn"], [1, "vote-icons-large", "animate__animated", "animate__fadeIn"], [1, "post-image-box", "test3"], [1, "timebox"], [1, "timebox-text"], [1, "creator-name"], [1, "vote-icons"], ["test", ""], [1, "review-box", "post-box"], [1, "large-post-text-div"], [1, "review-title", 3, "ngClass"], [1, "rating-box"], ["labelPosition", "right", "starType", "svg", "size", "large", "staticColor", "ok", 3, "ngClass", "readOnly", "rating"], [1, "large-post-line-spacing"], [1, "points-text-review", 3, "ngClass"], [1, "creator-name-review"], [1, "vote-icons-review"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PostComponent_ng_container_0_Template, 13, 22, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostComponent_ng_container_1_Template, 21, 22, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostComponent_ng_container_2_Template, 18, 35, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostComponent_ng_container_3_Template, 19, 31, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "clickbait");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "social" && ctx.sacrifice != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "review" && ctx.sacrifice != null);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, angular_star_rating__WEBPACK_IMPORTED_MODULE_2__.StarRatingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe], styles: [".center-text[_ngcontent-%COMP%] {\n  height: 50%;\n  text-align: center;\n}\n\n.post-image-box[_ngcontent-%COMP%] {\n  height: 60%;\n  text-align: center;\n}\n\n.test3[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.invisible[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.white-text[_ngcontent-%COMP%], .timebox[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.timebox[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 5%;\n  font-size: 30px;\n}\n\n.timebox-text[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  padding: 0 5px;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.post-text[_ngcontent-%COMP%], .post-text-large[_ngcontent-%COMP%] {\n  font-size: 2em;\n  align-self: center;\n  word-break: break-word;\n  font-weight: 550;\n  margin: 20px 15px;\n  line-height: 150%;\n}\n\n.post-text-large[_ngcontent-%COMP%] {\n  margin: 0px 0px;\n  padding-right: 5px;\n}\n\n.large-post-text-div[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.large-post-line-spacing[_ngcontent-%COMP%] {\n  line-height: 50px;\n}\n\n.vote-icons[_ngcontent-%COMP%], .vote-icons-review[_ngcontent-%COMP%], .vote-icons-large[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  position: relative;\n  justify-content: flex-end;\n  bottom: 11px;\n  right: 6px;\n  gap: 4px;\n}\n\n.vote-icons-large[_ngcontent-%COMP%] {\n  bottom: 137px;\n  right: -549px;\n}\n\n.vote-icons-review[_ngcontent-%COMP%] {\n  bottom: 117px;\n  right: -654px;\n}\n\n.test-pfp2[_ngcontent-%COMP%] {\n  width: 64px !important;\n  height: 64px !important;\n  margin: 0 !important;\n  filter: drop-shadow(2px 2px 1px #333);\n}\n\n.points-text[_ngcontent-%COMP%], .points-text-review[_ngcontent-%COMP%], .points-text-large[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 268px;\n  right: 190px;\n  z-index: 1;\n  font-size: 1.5em;\n  font-weight: 500;\n  color: white;\n  text-shadow: -2px -2px 0 black, -2px -1px 0 black, -2px 0px 0 black, -2px 1px 0 black, -2px 2px 0 black, -1px -2px 0 black, -1px -1px 0 black, -1px 0px 0 black, -1px 1px 0 black, -1px 2px 0 black, 0px -2px 0 black, 0px -1px 0 black, 0px 0px 0 black, 0px 1px 0 black, 0px 2px 0 black, 1px -2px 0 black, 1px -1px 0 black, 1px 0px 0 black, 1px 1px 0 black, 1px 2px 0 black, 2px -2px 0 black, 2px -1px 0 black, 2px 0px 0 black, 2px 1px 0 black, 2px 2px 0 black;\n}\n\n.points-text-large[_ngcontent-%COMP%] {\n  bottom: 69px;\n  right: 118px;\n}\n\n.points-text-review[_ngcontent-%COMP%] {\n  bottom: 52px;\n  right: 11px;\n}\n\n.creator-name[_ngcontent-%COMP%], .creator-name-review[_ngcontent-%COMP%], .creator-name-large[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 288px;\n  right: 188px;\n}\n\n.creator-name-large[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 88px;\n  right: 126px;\n}\n\n.creator-name-review[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 69px;\n  right: 19px;\n}\n\n.vote-name[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  font-weight: 500;\n  color: white;\n  text-shadow: -2px -2px 0 black, -2px -1px 0 black, -2px 0px 0 black, -2px 1px 0 black, -2px 2px 0 black, -1px -2px 0 black, -1px -1px 0 black, -1px 0px 0 black, -1px 1px 0 black, -1px 2px 0 black, 0px -2px 0 black, 0px -1px 0 black, 0px 0px 0 black, 0px 1px 0 black, 0px 2px 0 black, 1px -2px 0 black, 1px -1px 0 black, 1px 0px 0 black, 1px 1px 0 black, 1px 2px 0 black, 2px -2px 0 black, 2px -1px 0 black, 2px 0px 0 black, 2px 1px 0 black, 2px 2px 0 black;\n  filter: drop-shadow(2px 2px 1px #333);\n}\n\n.vote-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.post-subtext[_ngcontent-%COMP%] {\n  color: gray;\n  font-weight: 500;\n  font-size: 1em;\n  line-height: 22px;\n  margin-top: -20px;\n  margin-left: 15px;\n}\n\n.post-image[_ngcontent-%COMP%] {\n  object-fit: cover;\n  margin-top: 15px;\n  width: 93%;\n  height: 100%;\n}\n\n.profile-box[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.profile-pic[_ngcontent-%COMP%], .test-pfp2[_ngcontent-%COMP%] {\n  background-color: #6235b8;\n  border-radius: 30%;\n  margin: 10px;\n  width: 100px;\n  height: 100px;\n}\n\n.rating[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.profile-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.profile-name[_ngcontent-%COMP%], .review-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-top: 5px;\n  margin-bottom: 10px;\n}\n\n.review-title[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.profile-tag[_ngcontent-%COMP%] {\n  color: gray;\n  font-weight: 400;\n  margin-top: 6px;\n  margin-left: 16px;\n  font-size: 15px;\n}\n\n.rating-box[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  font-weight: 500;\n  font-size: 1.3em;\n}\n\n.post-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 5px;\n  flex: 6;\n}\n\n.review-box[_ngcontent-%COMP%] {\n  padding: 15px 30px;\n}\n\n.large-post-image[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 250px;\n  height: 175px;\n}\n\n.post-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  gap: 20px;\n}\n\n.small-post-bg[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 100%;\n  height: 100%;\n  width: 450px;\n  height: 400px;\n}\n\n.large-post-bg[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: white;\n  width: 940px;\n  height: 236px;\n}\n\n.hide-overflow[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.medals[_ngcontent-%COMP%] {\n  filter: drop-shadow(3px 3px 1px #333);\n  width: 45px;\n}\n\n.medal-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.medal-small[_ngcontent-%COMP%] {\n  z-index: 1;\n  margin-top: 386px;\n  position: absolute;\n  width: 282px;\n}\n\n.medal-large[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  margin-left: 1658px;\n  position: absolute;\n  width: 185px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUE0QkE7RUFDRSxhQUFBO0FBekJGOztBQTRCQTtFQUNFLGtCQUFBO0FBekJGOztBQTRCQTtFQUNFLFlBQUE7QUF6QkY7O0FBNEJBO0VBRUUsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUExQkY7O0FBNkJBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0NBQUE7QUExQkY7O0FBNkJBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUExQkY7O0FBNkJBO0VBRUUsZUFBQTtFQUNBLGtCQUFBO0FBM0JGOztBQThCQTtFQUNFLFdBQUE7QUEzQkY7O0FBOEJBO0VBQ0UsaUJBQUE7QUEzQkY7O0FBOEJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBM0JGOztBQThCQTtFQUVFLGFBQUE7RUFDQSxhQUFBO0FBNUJGOztBQStCQTtFQUVFLGFBQUE7RUFDQSxhQUFBO0FBN0JGOztBQWdDQTtFQUVFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFDQUFBO0FBOUJGOztBQWlDQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUExRkEsd2NBQUE7QUE2REY7O0FBaUNBO0VBRUUsWUFBQTtFQUNBLFlBQUE7QUEvQkY7O0FBa0NBO0VBRUUsWUFBQTtFQUNBLFdBQUE7QUFoQ0Y7O0FBbUNBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQWhDRjs7QUFtQ0E7RUFFRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBakNGOztBQW9DQTtFQUVFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFsQ0Y7O0FBcUNBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQXBJQSx3Y0FBQTtFQXNJQSxxQ0FBQTtBQWxDRjs7QUFzQ0E7RUFDRSxnQkFBQTtBQW5DRjs7QUFzQ0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBbkNGOztBQXNDQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQW5DRjs7QUFzQ0E7RUFDRSxPQUFBO0FBbkNGOztBQXNDQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFuQ0Y7O0FBc0NBO0VBQ0UsVUFBQTtBQW5DRjs7QUFzQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFuQ0Y7O0FBc0NBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQW5DRjs7QUFzQ0E7RUFFRSxhQUFBO0FBcENGOztBQXVDQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFwQ0Y7O0FBdUNBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFwQ0Y7O0FBdUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7QUFwQ0Y7O0FBdUNBO0VBQ0Usa0JBQUE7QUFwQ0Y7O0FBdUNBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQXBDRjs7QUF1Q0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUFwQ0Y7O0FBdUNBO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBcENGOztBQXVDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBcENGOztBQXVDQTtFQUNFLGdCQUFBO0FBcENGOztBQXVDQTtFQUNFLHFDQUFBO0VBQ0EsV0FBQTtBQXBDRjs7QUF1Q0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQXBDRjs7QUF1Q0E7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFwQ0Y7O0FBdUNBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBcENGIiwiZmlsZSI6InBvc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyLXRleHQge1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBvc3QtaW1hZ2UtYm94IHtcclxuICBoZWlnaHQ6IDYwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50ZXN0MyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5AbWl4aW4gdGV4dC1zaGFkb3cge1xyXG4gIHRleHQtc2hhZG93OiA0cHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG4vLy8gU3Ryb2tlIGZvbnQtY2hhcmFjdGVyXHJcbi8vLyBAcGFyYW0gIHtJbnRlZ2VyfSAkc3Ryb2tlIC0gU3Ryb2tlIHdpZHRoXHJcbi8vLyBAcGFyYW0gIHtDb2xvcn0gICAkY29sb3IgIC0gU3Ryb2tlIGNvbG9yXHJcbi8vLyBAcmV0dXJuIHtMaXN0fSAgICAgICAgICAgIC0gdGV4dC1zaGFkb3cgbGlzdFxyXG5AZnVuY3Rpb24gc3Ryb2tlKCRzdHJva2UsICRjb2xvcikge1xyXG4gICRzaGFkb3c6ICgpO1xyXG4gICRmcm9tOiAkc3Ryb2tlKi0xO1xyXG4gIEBmb3IgJGkgZnJvbSAkZnJvbSB0aHJvdWdoICRzdHJva2Uge1xyXG4gICBAZm9yICRqIGZyb20gJGZyb20gdGhyb3VnaCAkc3Ryb2tlIHtcclxuICAgICAgJHNoYWRvdzogYXBwZW5kKCRzaGFkb3csICRpKjFweCAkaioxcHggMCAkY29sb3IsIGNvbW1hKTtcclxuICAgIH1cclxuICB9XHJcbiAgQHJldHVybiAkc2hhZG93O1xyXG59XHJcbi8vLyBTdHJva2UgZm9udC1jaGFyYWN0ZXJcclxuLy8vIEBwYXJhbSAge0ludGVnZXJ9ICRzdHJva2UgLSBTdHJva2Ugd2lkdGhcclxuLy8vIEBwYXJhbSAge0NvbG9yfSAgICRjb2xvciAgLSBTdHJva2UgY29sb3JcclxuLy8vIEByZXR1cm4ge1N0eWxlfSAgICAgICAgICAgLSB0ZXh0LXNoYWRvd1xyXG5AbWl4aW4gc3Ryb2tlKCRzdHJva2UsICRjb2xvcikge1xyXG4gIHRleHQtc2hhZG93OiBzdHJva2UoJHN0cm9rZSwgJGNvbG9yKTtcclxufVxyXG5cclxuLmhpZGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5pbnZpc2libGUge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLndoaXRlLXRleHQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRpbWVib3gge1xyXG4gIEBleHRlbmQgLndoaXRlLXRleHQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogNSU7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4udGltZWJveC10ZXh0IHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG59XHJcblxyXG4ucG9zdC10ZXh0IHtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICBmb250LXdlaWdodDogNTUwO1xyXG4gIG1hcmdpbjogMjBweCAxNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xyXG59XHJcblxyXG4ucG9zdC10ZXh0LWxhcmdlIHtcclxuICBAZXh0ZW5kIC5wb3N0LXRleHQ7XHJcbiAgbWFyZ2luOiAwcHggMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmxhcmdlLXBvc3QtdGV4dC1kaXYge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4ubGFyZ2UtcG9zdC1saW5lLXNwYWNpbmcge1xyXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4udm90ZS1pY29ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBib3R0b206IDExcHg7XHJcbiAgcmlnaHQ6IDZweDtcclxuICBnYXA6IDRweDtcclxufVxyXG5cclxuLnZvdGUtaWNvbnMtbGFyZ2Uge1xyXG4gIEBleHRlbmQgLnZvdGUtaWNvbnM7XHJcbiAgYm90dG9tOiAxMzdweDtcclxuICByaWdodDogLTU0OXB4O1xyXG59XHJcblxyXG4udm90ZS1pY29ucy1yZXZpZXcge1xyXG4gIEBleHRlbmQgLnZvdGUtaWNvbnM7XHJcbiAgYm90dG9tOiAxMTdweDtcclxuICByaWdodDogLTY1NHB4O1xyXG59XHJcblxyXG4udGVzdC1wZnAyIHtcclxuICBAZXh0ZW5kIC5wcm9maWxlLXBpYztcclxuICB3aWR0aDogNjRweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNjRweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCAxcHggIzMzMyk7XHJcbn1cclxuXHJcbi5wb2ludHMtdGV4dCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvdHRvbTogMjY4cHg7XHJcbiAgcmlnaHQ6IDE5MHB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIEBpbmNsdWRlIHN0cm9rZSgyLCBibGFjayk7XHJcbn1cclxuXHJcbi5wb2ludHMtdGV4dC1sYXJnZSB7XHJcbiAgQGV4dGVuZCAucG9pbnRzLXRleHQ7XHJcbiAgYm90dG9tOiA2OXB4O1xyXG4gIHJpZ2h0OiAxMThweDtcclxufVxyXG5cclxuLnBvaW50cy10ZXh0LXJldmlldyB7XHJcbiAgQGV4dGVuZCAucG9pbnRzLXRleHQ7XHJcbiAgYm90dG9tOiA1MnB4O1xyXG4gIHJpZ2h0OiAxMXB4O1xyXG59XHJcblxyXG4uY3JlYXRvci1uYW1lIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm90dG9tOiAyODhweDtcclxuICByaWdodDogMTg4cHg7XHJcbn1cclxuXHJcbi5jcmVhdG9yLW5hbWUtbGFyZ2Uge1xyXG4gIEBleHRlbmQgLmNyZWF0b3ItbmFtZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm90dG9tOiA4OHB4O1xyXG4gIHJpZ2h0OiAxMjZweDtcclxufVxyXG5cclxuLmNyZWF0b3ItbmFtZS1yZXZpZXcge1xyXG4gIEBleHRlbmQgLmNyZWF0b3ItbmFtZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm90dG9tOiA2OXB4O1xyXG4gIHJpZ2h0OiAxOXB4O1xyXG59XHJcblxyXG4udm90ZS1uYW1lIHtcclxuICBtYXJnaW4tbGVmdDogMTJweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgQGluY2x1ZGUgc3Ryb2tlKDIsIGJsYWNrKTtcclxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAycHggMXB4ICMzMzMpO1xyXG5cclxufVxyXG5cclxuLnZvdGUtdGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5wb3N0LXN1YnRleHQge1xyXG4gIGNvbG9yOmdyYXk7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuLnBvc3QtaW1hZ2Uge1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgd2lkdGg6IDkzJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5wcm9maWxlLWJveCB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLnByb2ZpbGUtcGljIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjIzNWI4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwJTtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5yYXRpbmcge1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi5wcm9maWxlLWluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLnByb2ZpbGUtbmFtZSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ucmV2aWV3LXRpdGxlIHtcclxuICBAZXh0ZW5kIC5wcm9maWxlLW5hbWU7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLnByb2ZpbGUtdGFnIHtcclxuICBjb2xvcjpncmF5O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLnJhdGluZy1ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDEuM2VtO1xyXG59XHJcblxyXG4ucG9zdC1ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgZmxleDogNjtcclxufVxyXG5cclxuLnJldmlldy1ib3gge1xyXG4gIHBhZGRpbmc6IDE1cHggMzBweDtcclxufVxyXG5cclxuLmxhcmdlLXBvc3QtaW1hZ2Uge1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IDE3NXB4O1xyXG59XHJcblxyXG4ucG9zdC1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4uc21hbGwtcG9zdC1iZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiA0NTBweDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG4ubGFyZ2UtcG9zdC1iZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogOTQwcHg7XHJcbiAgaGVpZ2h0OiAyMzZweDtcclxufVxyXG5cclxuLmhpZGUtb3ZlcmZsb3cge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5tZWRhbHMge1xyXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coM3B4IDNweCAxcHggIzMzMyk7XHJcbiAgd2lkdGg6IDQ1cHg7XHJcbn1cclxuXHJcbi5tZWRhbC1ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1lZGFsLXNtYWxsIHtcclxuICB6LWluZGV4OiAxO1xyXG4gIG1hcmdpbi10b3A6IDM4NnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMjgycHg7XHJcbn1cclxuXHJcbi5tZWRhbC1sYXJnZSB7XHJcbiAgbWFyZ2luLXRvcDogN3B4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNjU4cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxODVweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map