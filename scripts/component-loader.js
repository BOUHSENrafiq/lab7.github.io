/**
 * Module ComponentLoader
 * Est appellé par ApplicationRouter (voir /scripts/application-router.js)
 * Ne fait que créer une requête AJAX pour obtenir le code
 * source HTML d'une  vue à charger, puis l'injecte dans le DOM.
 */
var ComponentLoader = (function () {
    var _xhr = new XMLHttpRequest();

    /**
     * Charge le source de la vue et l'injecte dans le DOM.
     * Le fichier doit se trouver dans le répertoire views.
     *
     * @param viewName  Le nom du fichier HTML de la vue sans l'extension
     */
    var _load = function (viewName) {
        console.log('ComponentLoader::load()');
        _fetchViewSource(viewName, function (viewSource) {
            document.getElementById('maincontent').innerHTML = viewSource;
        });
    };

    /**
     * Fait la requête pour charger le fichier HTML.
     *
     * @param viewName Nom du fichier HTML à charger sans l'extension
     * @param callback  Fonction qui sera appellée au retour de la requête AJAX
     * @private
     */
    var _fetchViewSource = function (viewName, callback) {
        _xhr.open('GET', 'views/' + viewName + '.html', true);

        _xhr.onload = function () {
            callback(_xhr.response.toString());
        };

        _xhr.send();
    };

    /**
     * Exposition des membres publiques
     */
    return {
        load: _load
    };
})();