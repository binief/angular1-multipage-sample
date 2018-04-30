"use strict";

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/components/login/incl.html"
        })
        .when("/logout", {
            templateUrl: "app/components/logout/logout.html"
        })
        .when("/green", {
            templateUrl: "green.htm"
        })
        .when("/blue", {
            templateUrl: "blue.htm"
        });
});
