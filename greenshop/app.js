angular.module("gsApp", ["ui.router", "ui.bootstrap"])
.controller("MainCtrl", function ($scope, $state) {
})
.factory("$g", function ($state, $injector) {
    var g = {
        waiting: false,
    };
    return g;
})
.component("hourglass", {
    template: "<div class='hourglass gray' ng-show='g.waiting'></div>",
    controller: function ($scope, $g) {
        $scope.g = $g;
    }
})
;