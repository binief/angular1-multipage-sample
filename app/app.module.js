"use strict";

var $modules = [

];

var $dependencies = [
    'ngRoute'
];

$dependencies = $dependencies.concat($modules);

var app = angular.module("angular1", $dependencies);

app.config(function($controllerProvider) {
    app.cp = $controllerProvider;
});
