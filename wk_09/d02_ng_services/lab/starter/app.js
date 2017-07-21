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

// Refactor each service so that the entire site works with services.
// Break Shows out into its own page
//    Create a new show.html
//    Create a show controller
//    Create a show service
//    Add "Shows" to your nav bar on index.html
//    Add a show route to app.js
