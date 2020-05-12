/**
 * Module monprofilViewModel
 * Objet permettant de stocker l'état de la vue monprofil.html
 * et de réagir au comportement de l'utilisateur.
 */
var MonprofilViewModel = (function () {
    var _onInit = function () {
        console.log('MonprofilViewModel::onInit()');
    };
    var _onDestroy = function () {
        console.log('MonprofilViewModel::onDestroy()');
    };
    return {
        onInit: _onInit,
        onDestroy: _onDestroy
    };
})();