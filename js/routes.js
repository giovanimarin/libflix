define(['./app'], function (app) {
    'use strict';
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'view/home.html',
            controller: 'HomeCtrl'
        });
		
		$routeProvider.when('/contratacao', {
            templateUrl: 'view/contratacao.html',
            controller: 'ContratacaoCtrl'
        });

        $routeProvider.when('/livro', {
            templateUrl: 'view/listaDeLivros.html',
            controller: 'LivroCtrl'
        });

        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }]);
});