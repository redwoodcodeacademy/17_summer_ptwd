var app = angular.module("ticketApp", ["ui.router"])

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./views/home.html",
      controller: "homeController"
    })
    .state("users", {
      url: '/users',
      templateUrl: "./views/users.html",
      controller: "userController"
    })
    .state("tickets", {
      url: "/tickets",
      templateUrl: "./views/tickets.html",
      controller: "ticketController"
    })
    .state("artists", {
      url: "/artists",
      templateUrl: "./views/artists.html",
      controller: "artistController"
    })
})


// https://docs.angularjs.org/guide/providers
// Create a userService.js and build an angular service
// Refactor the controller to work with the service.
