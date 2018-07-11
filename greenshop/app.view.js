angular.module("gsApp")
.config(function ($stateProvider, $urlRouterProvider) {
    var pages = [
        ["home", "HomeCtrl"],
    ];

    pages.forEach(function (v) {
        $stateProvider.state(v[0], {
            url: "/" + v[0],
            controller: v[1],
            templateUrl: "view/" + v[0] + ".html?" + Math.random()
        });
    });

    $urlRouterProvider.otherwise('/home');
})
.controller("HomeCtrl", function ($scope, $state, $window, $g) {
    $g.waiting=true;
})
;

