angular
  .module("ticketApp")
  .controller("ticketController", function($scope) {

    var Ticket = function(name, date, price, section, row, seat) {
      this.artistName = name;
      this.date = date;
      this.price = price;
      this.section = section;
      this.row = row;
      this.seat = seat;
    }

    $scope.tickets = []

    $scope.artistName = "";
    $scope.date = "";
    $scope.price = "";
    $scope.sSection = "";
    $scope.sRow = "";
    $scope.sNumber = "";

    $scope.submitTicket = function() {
      $scope.tickets.unshift(new Ticket($scope.artistName, $scope.date, $scope.price, $scope.sSection, $scope.sRow, $scope.sNumber))

      // reseting scoped variables
      $scope.artistName = "";
      $scope.date = "";
      $scope.price = "";
      $scope.sSection = "";
      $scope.sRow = "";
      $scope.sNumber = "";

      console.log($scope.tickets);
    }

    $scope.tickets.push(new Ticket("Justin Timberlake", new Date("5/10/2017"), 35, 307, "C", 1))
    $scope.tickets.push(new Ticket("Justin Timberlake", new Date("5/10/2017"), 35, 307, "C", 2))
    $scope.tickets.push(new Ticket("Justin Timberlake", new Date("5/10/2017"), 25, 506, "H", 27))
    $scope.tickets.push(new Ticket("Justin Timberlake", new Date("5/10/2017"), 25, 506, "H", 28))
    $scope.tickets.push(new Ticket("Justin Timberlake", new Date("5/10/2017"), 50, 102, "D", 12))
    $scope.tickets.push(new Ticket("Justin Timberlake", new Date("5/10/2017"), 50, 102, "D", 11))

    var currentTicketIndex = null;
    $scope.submitButton = true;
    $scope.saveButton = false;

    // Update Ticket fills the fields with the existing data and changes the button from Submit to Save
    $scope.updateTicket = function(ticket) {
      for (var i = 0; i < $scope.tickets.length; i++) {
        if($scope.tickets[i] ==  ticket) {
          // setting a var equal to current artists index so when the user saves, we know which artist to update
          currentTicketIndex = i

          $scope.artistName = ticket.artistName;
          $scope.date = ticket.date;
          $scope.price = ticket.price;
          $scope.sSection = ticket.section;
          $scope.sRow = ticket.row;
          $scope.sNumber = ticket.seat;
        }
      }
      // hiding submit, showing save
      $scope.submitButton = false;
      $scope.saveButton = true;
    }

    // Save Ticket updates the changes that were made to the ticket inside of the user input fields.
    $scope.saveTicket = function() {
      $scope.tickets.splice(currentTicketIndex, 1, new Ticket($scope.artistName, $scope.date, $scope.price, $scope.sSection, $scope.sRow, $scope.sNumber))

      // hiding save, showing submit
      $scope.submitButton = true;
      $scope.saveButton = false;

      // reseting scoped variables
      $scope.artistName = "";
      $scope.date = "";
      $scope.price = "";
      $scope.sSection = "";
      $scope.sRow = "";
      $scope.sNumber = "";
    }

    // Delete Ticket removes the ticket from the array entirely
    $scope.deleteTicket = function(ticket) {
      for (var i = 0; i < $scope.tickets.length; i++) {
        if($scope.tickets[i] ==  ticket) {
          $scope.tickets.splice(i,1)
        }
      }
    }

  })
