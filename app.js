(function () {
    'use strict';

    angular
            .module('plunker', ['ngRoute','ngCookies'])
            .config(moduleConfig);

    moduleConfig.$inject = ['$routeProvider', '$httpProvider'];

    function moduleConfig($routeProvider, $httpProvider) {

        $routeProvider
                .when('/home', {
                    templateUrl: 'home.html',
                    
                })
                .when('/aboutus', {
                    templateUrl: 'aboutus.html',
                })
                .when('/industryInfo', {
                    templateUrl: 'industryInfo.html',
                  
                })
                .when('/EnergyRecovery', {
                    templateUrl: 'energyRecovery.html',
                })
                .when('/ProductLine', {
                    templateUrl: 'ProductLine.html',
                    
                })
                .when('/contactus', {
                    templateUrl: 'contactus.html',
              
                })

                .otherwise({
                    redirectTo: '/home'
                });

    }


})();