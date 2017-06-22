

var app = angular.module("app", ['ngRoute']);


app.config(function($routeProvider) {


    $routeProvider
        .when("/", {
            templateUrl: "partials/title.html",
            controller: "controller"
        })
        .when("/about", {
            templateUrl: "partials/about.html",
            controller: "controller"
        })
        .when("/portfolio", {
            templateUrl: "partials/html",
            controller: "controller"
        })
        .when("/contact", {
            templateUrl: "contact.html",
            controller: "controller"
        });
        //
        // $routeProvider.otherwise({redirectTo: '/'});


});





app.controller('mainCtrl', ['$scope', function($scope){






//end controller brackets
}]);
