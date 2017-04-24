(function() {
    'use strict';

    angular
        .module('instagram', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider, $locationProvider) {


            $stateProvider
                .state('home', {
                    url: '/',
                    views: {
                        'content': {
                            templateUrl: '../partials/home.html',
                            controller: 'TableController',
                            controllerAs: 'vm',
                        },

                    }
                })

            $stateProvider
	            .state('user', {
	                url: '/user',
	                views: {
	                    'content': {
	                        templateUrl: '../partials/user.html',
	                        controller: 'TableController',
	                        controllerAs: 'vm',
	                    },

	                }
	            })

        })

})();
