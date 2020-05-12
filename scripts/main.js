import DiscussionModelView from 'view-models/Discussion-view-model.js';
/**
 * main.js
 * Ce fichier sert à démarrer l'application.
 */
var routes = [
    {
        path: 'Monprofil',// index#monprofil
        view: 'monprofil', // Vue = /views/monprofil.html
        viewModel: MonprofilViewModel, // Voir /view-models/monprofil-view-models.js
        isDefault: false
    },
    {
        path: 'Discussion',
        view: 'discussion',
        viewModel: DiscussionViewModel,

    },

];

/**
 * Module Application
 * Démarre l'application en initialisant le routeur
 */
var Application = (function (router, routes) {
    router.initializeRoutes(routes);

    /**
     * Exposition des membres publiques
     */
    return {

    };
})(ApplicationRouter, routes);
