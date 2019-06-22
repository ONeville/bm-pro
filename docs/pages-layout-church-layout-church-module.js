(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-layout-church-layout-church-module"],{

/***/ "./src/app/pages/layout-church/assemblee-history/assemblee-history.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/layout-church/assemblee-history/assemblee-history.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container sht-shell-1 my-4\">\n  <div class=\"ass-header my-2 py-2 h-50\">\n    <h1 class=\"font-weight-bold text-center\">Notre Histoire</h1>\n  </div>\n\n  <mdb-stepper #stepper [vertical]=\"true\">\n    <mdb-step name=\"2017\" label=\"Dedicace nouveau temple\">\n      <img [src]=\"image1\" alt=\"post img\" class=\"img-fluid postImg img-thumbnail mx-4 mb-3 rounded mx-auto d-block\">\n      <article>\n        <h2 class=\"text-center\">Temple Morijah : Le Nouveau Tabernacle</h2>\n        <p>\n          Quelques mois après l’acquisition d’un vaste terrain situé de l’autre côté du boulevard Lumumba par rapport\n          à\n          l’actuel Shekinah Tabernacle, par le Révérend Richard Diyoka, le nouveau Shekinah Tabernacle prend forme.\n          Une\n          belle ossature du Tabernacle surplombe aujourd’hui cette vaste étendue marécageuse que baignait un grand\n          étang il\n          y a de cela quelque temps.\n        </p>\n\n        <p class=\"text-justify\">Le site est dénommé MORIJAH en souvenir du Mont sacré sur lequel Abraham offrit Isaac\n          en\n          sacrifice et où Salomon bâtit le temple pour l’Eternel, le Dieu d’Israël.</p>\n        <p class=\"text-justify\">Rappelons que le plan du bâtiment ainsi que la fabrication des matériaux de l’ossature\n          ont\n          été réalisés en Europe. Le montage a été exécuté sous la direction des ingénieurs expatriés et locaux\n          membres de\n          Shekinah Tabernacle. La main-d’œuvre est constituée essentiellement des jeunes croyants de notre église\n          formés à\n          l’Institut National de Préparation Professionnelle (INPP) aux frais du Révérend Pasteur Richard Diyoka. </p>\n        <p class=\"text-justify\">Comme le montrent les images, il a fallu un travail de titan pour voir s’élever\n          aujourd’hui,\n          sur ce qui était naguère un terrain marécageux, ce splendide bâtiment initialement prévu de 70x70 mètres.\n          Toute\n          l’ossature métallique est bien posée </p>\n\n      </article>\n      <div class=\"step-actions\">\n        <button mdbBtn size=\"sm\" color=\"primary\" (click)=\"stepper.next()\">Precedent</button>\n      </div>\n    </mdb-step>\n    <mdb-step name=\"2015\">\n\n      <button mdbBtn size=\"sm\" color=\"primary\" (click)=\"stepper.next()\">Precedent</button>\n      <button mdbBtn size=\"sm\" color=\"secondary\" (click)=\"stepper.previous()\">Suivant</button>\n    </mdb-step>\n    <mdb-step name=\"2010\">\n\n      <button mdbBtn size=\"sm\" color=\"primary\" (click)=\"stepper.next()\">Precedent</button>\n      <button mdbBtn size=\"sm\" color=\"secondary\" (click)=\"stepper.previous()\">Suivant</button>\n    </mdb-step>\n    <mdb-step name=\"2007\">\n\n      <button mdbBtn size=\"sm\" color=\"primary\" (click)=\"stepper.next()\">Precedent</button>\n      <button mdbBtn size=\"sm\" color=\"secondary\" (click)=\"stepper.previous()\">Suivant</button>\n    </mdb-step>\n    <mdb-step name=\"2000\">\n      <img src=\"assets/images/Cloud1.jpg\" alt=\"post img\"\n        class=\"img-fluid postImg img-thumbnail mx-4 mb-3 rounded mx-auto d-block\">\n      <button mdbBtn size=\"sm\" color=\"primary\" (click)=\"stepper.next()\">Precedent</button>\n      <button mdbBtn size=\"sm\" color=\"secondary\" (click)=\"stepper.previous()\">Suivant</button>\n    </mdb-step>\n    <mdb-step name=\"1997\">\n\n      <button mdbBtn size=\"sm\" color=\"primary\" (click)=\"stepper.next()\">Precedent</button>\n      <button mdbBtn size=\"sm\" color=\"secondary\" (click)=\"stepper.previous()\">Suivant</button>\n    </mdb-step>\n    <mdb-step name=\"1994\">\n      <img src=\"assets/images/slide2.jpg\" alt=\"post img\"\n        class=\"img-fluid postImg img-thumbnail mx-4 mb-3 rounded mx-auto d-block\">\n      <button mdbBtn size=\"sm\" color=\"primary\" (click)=\"stepper.next()\">Precedent</button>\n      <button mdbBtn size=\"sm\" color=\"secondary\" (click)=\"stepper.previous()\">Suivant</button>\n    </mdb-step>\n    <mdb-step name=\"1992\">\n      <img src=\"assets/images/slide1.jpg\" alt=\"post img\"\n        class=\"img-fluid postImg img-thumbnail mx-4 mb-3 rounded mx-auto d-block\">\n      <button mdbBtn size=\"sm\" color=\"primary\" (click)=\"stepper.next()\">Precedent</button>\n      <button mdbBtn size=\"sm\" color=\"secondary\" (click)=\"stepper.previous()\">Suivant</button>\n    </mdb-step>\n    <mdb-step name=\"1990\">\n      <img src=\"assets/images/cloud4.jpg\" alt=\"post img\"\n        class=\"img-fluid postImg img-thumbnail mx-4 mb-3 rounded mx-auto d-block\">\n    </mdb-step>\n  </mdb-stepper>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/layout-church/assemblee-history/assemblee-history.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/layout-church/assemblee-history/assemblee-history.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xheW91dC1jaHVyY2gvYXNzZW1ibGVlLWhpc3RvcnkvYXNzZW1ibGVlLWhpc3RvcnkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/layout-church/assemblee-history/assemblee-history.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/layout-church/assemblee-history/assemblee-history.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AssembleeHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssembleeHistoryComponent", function() { return AssembleeHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AssembleeHistoryComponent = /** @class */ (function () {
    function AssembleeHistoryComponent() {
        this.image1 = 'assets/images/morijah.jpg';
    }
    AssembleeHistoryComponent.prototype.ngOnInit = function () { };
    AssembleeHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assemblee-history',
            template: __webpack_require__(/*! ./assemblee-history.component.html */ "./src/app/pages/layout-church/assemblee-history/assemblee-history.component.html"),
            styles: [__webpack_require__(/*! ./assemblee-history.component.scss */ "./src/app/pages/layout-church/assemblee-history/assemblee-history.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AssembleeHistoryComponent);
    return AssembleeHistoryComponent;
}());



/***/ }),

/***/ "./src/app/pages/layout-church/assemblee-pastor/assemblee-pastor.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/layout-church/assemblee-pastor/assemblee-pastor.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cite-b{\r\n    border-left: 6px solid #007bff;\r\n    padding-right: 10px;\r\n    margin-left: 37%;\r\n}\r\n\r\n.cite-bb{\r\n    margin-left: 13px;\r\n    font-size: 17px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGF5b3V0LWNodXJjaC9hc3NlbWJsZWUtcGFzdG9yL2Fzc2VtYmxlZS1wYXN0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYXlvdXQtY2h1cmNoL2Fzc2VtYmxlZS1wYXN0b3IvYXNzZW1ibGVlLXBhc3Rvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNpdGUtYntcclxuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgIzAwN2JmZjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzclO1xyXG59XHJcblxyXG4uY2l0ZS1iYntcclxuICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/layout-church/assemblee-pastor/assemblee-pastor.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/layout-church/assemblee-pastor/assemblee-pastor.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container sht-shell-1 my-4\">\n  <div class=\"row\">\n    <div class=\"col-12 d-flex flex-column justify-content-center align-items-center mb-5\">\n      <img src=\"https://via.placeholder.com/990x300\" alt=\"post img\" class=\"img-fluid mx-4\">\n      <h2 class=\"mt-5 font-weight-bold text-center\">Richard Diyoka N'sanguluja</h2>\n      <h4 class=\"text-center\">Pasteur</h4>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12 blogShort\">\n      <article>\n        <p>\n          Chers frères et sœurs, que la grâce et la paix vous soient accordés avec abondance de la part de Dieu et Père,\n          le Seigneur Jésus-Christ, notre Sauveur et Rédempteur. Nous vous saluons très cordialement en Son Nom par ces\n          paroles\n        </p>\n\n        <blockquote class=\"blockquote text-center cite-b\">\n          <p class=\"mb-0 cite-bb text-justify font-italic\">Mon peuple, écoute mes instructions! Prêtez l’oreille aux\n            paroles de ma bouche ! J’ouvre la bouche par des sentences, je publie la sagesse des temps anciens. Ce que\n            nous avons entendu, ce que nous savons, ce que nos pères nous ont raconté, nous ne le cacherons point à\n            leurs enfants ; nous dirons à la génération future les louanges de l’Eternel, et sa puissance, et les\n            prodiges qu’il a opérés. Il a établi un témoignage en Jacob, Il a mis une loi en Israël, et il a ordonné à\n            nos pères de l’enseigner à leurs enfants, afin qu’ils misent en Dieu leur confiance, qu’ils n’oubliassent\n            pas les œuvres de Dieu, et qu’ils observassent ses commandements, afin qu’ils ne fussent pas, comme leur\n            pères, une race dont le cœur n’était pas ferme, et dont l’esprit n’était pas fidèle à Dieu.</p>\n          <footer class=\"blockquote-footer\">Psaume <cite title=\"Source Title\">78.1-8</cite></footer>\n        </blockquote>\n        <p class=\"text-justify\">Depuis quelques années, le nombre de ceux qui reçoivent les sermons du <b>prophète\n            William Marrion Branham</b> traduits en français ainsi que dans d’autres langues et édités par <b>Shekinah\n            Publications</b>, ont exprimé le désir d’en savoir un peu plus sur cette œuvre missionnaire, notamment sur\n          son fondement, son fonctionnement, ses ressources et/ou ses moyens, etc. </p>\n        <p class=\"text-justify\">En outre, après ces seize années dans l’œuvre du Seigneur, nous avons senti dans le cœur\n          la nécessité de partager avec vous notre expérience dans ce domaine et d’apporter tant soit peu notre\n          réconfort à tous les ouvriers de la onzième heure qui sont dans le champ, pour l’exécution de la grande et\n          dernière commission du Seigneur à Son Eglise <small>(Marc 16.15-16)</small>.\n          Ainsi, aujourd’hui, le Seigneur notre Dieu a mis sur notre cœur de publier toutes ces œuvres dans ce site web,\n          qui nous pensons sera une bénédiction pour l’épouse de Christ. </p>\n        <p class=\"text-justify\">Or, le Seigneur, notre Dieu, a de nouveau manifesté Son amour envers Son peuple en\n          accomplissant en ce temps de la fin de grandes œuvres que nul autre âge n’a connues. Les mystères restés\n          cachés dans tous les âges ont été révélés aujourd’hui et doivent être portés à la connaissance du peuple de\n          Dieu pour qu’il soit blanchi, purifié et préparé pour l’enlèvement <small>(Daniel 12.4-12).</small> <br>\n          Ce site poursuit un double objectif, à savoir : partager d’une part avec vous sur l’œuvre que le Seigneur est\n          en train d’accomplir parmi nous, une œuvre certes difficile, mais si merveilleuse, et amener d’autre part le\n          croyant à faire du salut des âmes perdues sa préoccupation majeure. </p>\n        <p class=\"text-justify\"> Nous croyons que le même Saint-Esprit vous révélera votre part de responsabilité dans\n          ce grand et immense travail d’annoncer ce glorieux Evangile, le Message du temps de la fin, aux gens de notre\n          temps, sachant que c’est un âge très court et que le Seigneur est en train d’accomplir une œuvre rapide.</p>\n        <p class=\"text-justify\">Que le Seigneur vous accorde donc Sa parfaite grâce pour saisir cette vision afin que\n          tous ensemble, convaincus que le Message est la vérité, c’est le salut de l’humanité et la Lumière dans ce\n          temps des ténèbres, nous nous sentions concernés pour L’apporter à nos frères que l’ennemi tient encore\n          captifs à travers le monde, dans la superstition, dans l’ignorance et dans les ténèbres. Puissions-nous sentir\n          l’urgence d’unir nos efforts et nos talents pour apporter à ce monde mourant l’Evangile de notre Seigneur\n          Jésus-Christ et achever rapidement cette grande mission qu’Il a confiée à Son Eglise. Puisse le Seigneur vous\n          bénir richement. </p>\n        <p class=\"text-right\">Votre serviteur, <br>\n          ​<b>Richard Diyoka Nsanguluja</b> </p>\n\n      </article>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/layout-church/assemblee-pastor/assemblee-pastor.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/layout-church/assemblee-pastor/assemblee-pastor.component.ts ***!
  \************************************************************************************/
/*! exports provided: AssembleePastorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssembleePastorComponent", function() { return AssembleePastorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AssembleePastorComponent = /** @class */ (function () {
    function AssembleePastorComponent() {
    }
    AssembleePastorComponent.prototype.ngOnInit = function () {
    };
    AssembleePastorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assemblee-pastor',
            template: __webpack_require__(/*! ./assemblee-pastor.component.html */ "./src/app/pages/layout-church/assemblee-pastor/assemblee-pastor.component.html"),
            styles: [__webpack_require__(/*! ./assemblee-pastor.component.css */ "./src/app/pages/layout-church/assemblee-pastor/assemblee-pastor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AssembleePastorComponent);
    return AssembleePastorComponent;
}());



/***/ }),

/***/ "./src/app/pages/layout-church/assemblee-staff/assemblee-staff.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/layout-church/assemblee-staff/assemblee-staff.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xheW91dC1jaHVyY2gvYXNzZW1ibGVlLXN0YWZmL2Fzc2VtYmxlZS1zdGFmZi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/layout-church/assemblee-staff/assemblee-staff.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/pages/layout-church/assemblee-staff/assemblee-staff.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-4\">\n  Assent\n</div>"

/***/ }),

/***/ "./src/app/pages/layout-church/assemblee-staff/assemblee-staff.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/layout-church/assemblee-staff/assemblee-staff.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AssembleeStaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssembleeStaffComponent", function() { return AssembleeStaffComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AssembleeStaffComponent = /** @class */ (function () {
    function AssembleeStaffComponent() {
    }
    AssembleeStaffComponent.prototype.ngOnInit = function () {
    };
    AssembleeStaffComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assemblee-staff',
            template: __webpack_require__(/*! ./assemblee-staff.component.html */ "./src/app/pages/layout-church/assemblee-staff/assemblee-staff.component.html"),
            styles: [__webpack_require__(/*! ./assemblee-staff.component.css */ "./src/app/pages/layout-church/assemblee-staff/assemblee-staff.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AssembleeStaffComponent);
    return AssembleeStaffComponent;
}());



/***/ }),

/***/ "./src/app/pages/layout-church/assemblee/assemblee.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/pages/layout-church/assemblee/assemblee.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cite-b{\r\n    border-left: 6px solid #007bff;\r\n    padding-right: 10px;\r\n}\r\n\r\n.cite-bb{\r\n    margin-left: 13px;\r\n}\r\n\r\n.ass-header{\r\n    background-color:#e1f5fe;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGF5b3V0LWNodXJjaC9hc3NlbWJsZWUvYXNzZW1ibGVlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGF5b3V0LWNodXJjaC9hc3NlbWJsZWUvYXNzZW1ibGVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2l0ZS1ie1xyXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjMDA3YmZmO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmNpdGUtYmJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTNweDtcclxufVxyXG5cclxuLmFzcy1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlMWY1ZmU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/layout-church/assemblee/assemblee.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/layout-church/assemblee/assemblee.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container sht-shell-1 my-4\">\r\n  <div class=\"ass-header my-2 py-2 h-30\">\r\n    <p class=\"lead text-center\">Jésus-Christ est le même hier, aujourd'hui, et éternellement. </p>\r\n    <h1 class=\"font-weight-bold text-center\">Shekinah Tabernacle</h1>\r\n    <p class=\"lead text-center\">Interdenominationelle</p>\r\n  </div>\r\n  <img src=\"assets/images/shtab.jpg\" alt=\"\" class=\"img-fluid rounded mx-auto d-block\">\r\n  <article>\r\n    <p class=\"text-justify my-3\">La volonté de Dieu est que tous les hommes arrivent à la connaissance de la Vérité qui\r\n      est Sa Parole. Car c’est celle-ci qui les affranchit et les sanctifie. N’a-t-Il pas dit que Mon peuple meurt à\r\n      cause de l’ignorance ? Quand Dieu a donné la loi à Moïse, Il l’a écrite Lui-même sur des tables qu’Il a alors\r\n      confiées à Son prophète pour L’apporter au peuple. <b>Job</b> a dit :\r\n    </p>\r\n    <div class=\"cite-b m-4\">\r\n      <div class=\"cite-bb text-justify\">\r\n        <cite> « Oh ! Je voudrais que mes paroles fussent écrites, qu’elles fussent écrites dans un livre. Je voudrais\r\n          qu’avec un burin de fer et avec du plomb. Elles fussent pour toujours gravées dans le roc… »\r\n        </cite>\r\n      </div>\r\n    </div>\r\n    <p class=\"text-justify\"> Jérémie a reçu un message de la part de Dieu et Baruk, son secrétaire, l’a mis à l’écrit\r\n      afin qu’il soit lu au peuple. En son temps, le Seigneur Jésus a choisi douze apôtres pour répandre le message et\r\n      quelques-uns parmi eux et d’autres hommes appelés par Dieu ont mis à l’écrit Ses Paroles et Sa Vie pour qu’il soit\r\n      porté à toutes les générations futures. Après sa conversion et son appel au ministère, Paul a écrit lui-même sous\r\n      forme des lettres les commandements du Seigneur à l’intention de l’Eglise.</p>\r\n    <p class=\"text-justify\">Prophète majeur envoyé conformément aux promesses bibliques, frère <b>Branham</b> était\r\n      conscient que son Message devait parcourir le monde et atteindre les coins les plus reculés de notre planète. Sur\r\n      recommandation du Seigneur, il a manifesté un grand souci de voir le Message, évangile du temps de la fin, être\r\n      diffusé sous forme des bandes, des brochures et des livres pour servir de témoignage à toutes les nations.</p>\r\n  </article>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/layout-church/assemblee/assemblee.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/layout-church/assemblee/assemblee.component.ts ***!
  \**********************************************************************/
/*! exports provided: AssembleeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssembleeComponent", function() { return AssembleeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AssembleeComponent = /** @class */ (function () {
    function AssembleeComponent() {
    }
    AssembleeComponent.prototype.ngOnInit = function () {
    };
    AssembleeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assemblee',
            template: __webpack_require__(/*! ./assemblee.component.html */ "./src/app/pages/layout-church/assemblee/assemblee.component.html"),
            styles: [__webpack_require__(/*! ./assemblee.component.css */ "./src/app/pages/layout-church/assemblee/assemblee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AssembleeComponent);
    return AssembleeComponent;
}());



/***/ }),

/***/ "./src/app/pages/layout-church/layout-church.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/layout-church/layout-church.module.ts ***!
  \*************************************************************/
/*! exports provided: LayoutChurchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutChurchModule", function() { return LayoutChurchModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _assemblee_history_assemblee_history_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assemblee-history/assemblee-history.component */ "./src/app/pages/layout-church/assemblee-history/assemblee-history.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _assemblee_assemblee_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assemblee/assemblee.component */ "./src/app/pages/layout-church/assemblee/assemblee.component.ts");
/* harmony import */ var _assemblee_pastor_assemblee_pastor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assemblee-pastor/assemblee-pastor.component */ "./src/app/pages/layout-church/assemblee-pastor/assemblee-pastor.component.ts");
/* harmony import */ var _assemblee_staff_assemblee_staff_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assemblee-staff/assemblee-staff.component */ "./src/app/pages/layout-church/assemblee-staff/assemblee-staff.component.ts");
/* harmony import */ var _our_belief_our_belief_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./our-belief/our-belief.component */ "./src/app/pages/layout-church/our-belief/our-belief.component.ts");
/* harmony import */ var ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-uikit-pro-standard */ "./node_modules/ng-uikit-pro-standard/fesm5/ng-uikit-pro-standard.js");
/* harmony import */ var _shared_ui_ui_kit_asset__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/ui/ui-kit.asset */ "./src/app/shared/ui/ui-kit.asset.ts");











var routes = [
    {
        path: '',
        component: _assemblee_assemblee_component__WEBPACK_IMPORTED_MODULE_5__["AssembleeComponent"],
        data: { title: 'Shekinkah Tabernacle: Assemblee' }
    },
    {
        path: 'notre-croyance',
        component: _our_belief_our_belief_component__WEBPACK_IMPORTED_MODULE_8__["OurBeliefComponent"],
        data: { title: 'Shekinkah Tabernacle: Notre Croyance' }
    },
    {
        path: 'pastor',
        component: _assemblee_pastor_assemblee_pastor_component__WEBPACK_IMPORTED_MODULE_6__["AssembleePastorComponent"],
        data: { title: 'Shekinkah Tabernacle: Pastor' }
    },
    {
        path: 'assemblee-staff',
        component: _assemblee_staff_assemblee_staff_component__WEBPACK_IMPORTED_MODULE_7__["AssembleeStaffComponent"],
        data: { title: 'Shekinkah Tabernacle: Staff' }
    },
    {
        path: 'morijah',
        component: _assemblee_history_assemblee_history_component__WEBPACK_IMPORTED_MODULE_1__["AssembleeHistoryComponent"],
        data: { title: 'Shekinkah Tabernacle: Morijah' }
    }
];
var LayoutChurchModule = /** @class */ (function () {
    function LayoutChurchModule() {
    }
    LayoutChurchModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _assemblee_assemblee_component__WEBPACK_IMPORTED_MODULE_5__["AssembleeComponent"],
                _assemblee_pastor_assemblee_pastor_component__WEBPACK_IMPORTED_MODULE_6__["AssembleePastorComponent"],
                _assemblee_staff_assemblee_staff_component__WEBPACK_IMPORTED_MODULE_7__["AssembleeStaffComponent"],
                _assemblee_history_assemblee_history_component__WEBPACK_IMPORTED_MODULE_1__["AssembleeHistoryComponent"],
                _our_belief_our_belief_component__WEBPACK_IMPORTED_MODULE_8__["OurBeliefComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ].concat(_shared_ui_ui_kit_asset__WEBPACK_IMPORTED_MODULE_10__["UIKIT_BASE"], [
                ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_9__["StepperModule"]
            ]),
            providers: []
        })
    ], LayoutChurchModule);
    return LayoutChurchModule;
}());



/***/ }),

/***/ "./src/app/pages/layout-church/our-belief/our-belief.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/layout-church/our-belief/our-belief.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container sht-shell-1 my-4\">\r\n  <div class=\"ass-header my-2 py-2 h-50\">\r\n    <h2 class=\"text-center\">Ce Que Nous Croyons, Vision et Missions</h2>\r\n  </div>\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-12 my-4\">\r\n      <article>\r\n\r\n        <h2 class=\"font-weight-bold\">Lorem ipsum egestas hac tempor quam ultricies</h2>\r\n        <p class=\"text-justify mb-5\">Lorem ipsum dolor sit amet, iracundia reformidans ne mei, an gloriatur accommodare\r\n          quo. Te hinc consetetur nam, mei ei elit putant temporibus, nec tota lorem scripserit te. Cu viris principes\r\n          has. In sadipscing efficiantur philosophia cum. Eum cetero interpretaris no, ex ullum quando laoreet cum. An\r\n          ius elit diceret percipit. Augue accumsan consetetur sea no, duo discere saperet an.\r\n        </p>\r\n        <h2 class=\"font-weight-bold\">Lorem ipsum egestas</h2>\r\n        <p class=\"text-justify mb-5\"> Sea quot novum veritus ne. At harum detraxit intellegam eos, recusabo mediocrem\r\n          scriptorem vix te. Vero facer qui ut, ne labore euismod tincidunt mel, mel et fugit invenire. An vel adhuc\r\n          patrioque, id nec augue dicunt invenire. Bonorum legendos invenire sed et. Id altera deserunt mandamus quo.\r\n        </p>\r\n        <h2 class=\"font-weight-bold\">Wac tempor quam ultricies</h2>\r\n        <p class=\"text-justify mb-5\">In a professional context it often happens that private or corporate clients corder\r\n          a publication to be made and presented with the actual content still not being ready. Think of a news blog\r\n          that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by\r\n          comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on\r\n          the text, disregarding the layout and its elements. Besides, random text risks to be unintendedly humorous or\r\n          offensive, an unacceptable risk in corporate environments. Lorem ipsum and its many variants have been\r\n          employed since the early 1960ies, and quite likely since the sixteenth century\r\n        </p>\r\n      </article>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/layout-church/our-belief/our-belief.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/layout-church/our-belief/our-belief.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cite-b {\n  border-left: 6px solid #007bff;\n  padding-right: 10px; }\n\n.cite-bb {\n  margin-left: 13px; }\n\n.ass-header {\n  background-color: #e1f5fe; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGF5b3V0LWNodXJjaC9vdXItYmVsaWVmL0Q6XFxXb3Jrc3BhY2VcXERldk9wc1NoVGFiXFxTaGVraW5haFdlYlxcc2hla2luYWhQb3J0YWxBcHAvc3JjXFxhcHBcXHBhZ2VzXFxsYXlvdXQtY2h1cmNoXFxvdXItYmVsaWVmXFxvdXItYmVsaWVmLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQThCO0VBQzlCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLHlCQUF3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGF5b3V0LWNodXJjaC9vdXItYmVsaWVmL291ci1iZWxpZWYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2l0ZS1ie1xyXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjMDA3YmZmO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmNpdGUtYmJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTNweDtcclxufVxyXG5cclxuLmFzcy1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlMWY1ZmU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/layout-church/our-belief/our-belief.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/layout-church/our-belief/our-belief.component.ts ***!
  \************************************************************************/
/*! exports provided: OurBeliefComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurBeliefComponent", function() { return OurBeliefComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OurBeliefComponent = /** @class */ (function () {
    function OurBeliefComponent() {
    }
    OurBeliefComponent.prototype.ngOnInit = function () {
    };
    OurBeliefComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-our-belief',
            template: __webpack_require__(/*! ./our-belief.component.html */ "./src/app/pages/layout-church/our-belief/our-belief.component.html"),
            styles: [__webpack_require__(/*! ./our-belief.component.scss */ "./src/app/pages/layout-church/our-belief/our-belief.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OurBeliefComponent);
    return OurBeliefComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-layout-church-layout-church-module.js.map