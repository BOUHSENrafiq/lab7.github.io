var DiscussionViewModel = (function () {
    var _onInit = function () {
        console.log('DiscussionViewModel::onInit()');
    };
    var _onDestroy = function () {
        console.log('DiscussionViewModel::onDestroy()');
    };
    return {
        onInit: _onInit,
        onDestroy: _onDestroy
    };
})();