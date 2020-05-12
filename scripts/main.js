/**
 * main.js
 * Ce fichier sert à démarrer l'application.
 */
var routes = [
    {
        path: 'Monprofil',// index#Monprofil
        view: 'monprofil', // La vue sans extension = /views/monprofil.html
        viewModel: MonprofilViewModel, //  /view-models/monprofil-view-models.js
        isDefault: true
    },

    {
        path: 'Discussion',// index#Monprofil
        view: 'discussion', // La vue sans extension = /views/monprofil.html
        viewModel: DiscussionViewModel, //  /view-models/monprofil-view-models.js
        isDefault: false
    },
    {
        path: 'Participants',// index#Monprofil
        view: 'listedesparticipants', // La vue sans extension = /views/monprofil.html
        viewModel: listedesparticipantsViewModel, //  /view-models/monprofil-view-models.js
        isDefault: false
    }
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
