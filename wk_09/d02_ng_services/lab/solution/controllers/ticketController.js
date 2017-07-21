angular
  .module("ticketApp")
  .controller("ticketController", function($scope, ticketService) {

    $scope.tickets = ticketService.getTickets()

    $scope.artistName = "";
    $scope.date = "";
    $scope.price = "";
    $scope.sSection = "";
    $scope.sRow = "";
    $scope.sNumber = "";

    $scope.addTicket = function() {
      ticketService.addTicket($scope.artistName, $scope.date, $scope.price, $scope.sSection, $scope.sRow, $scope.sNumber)

      // reseting scoped variables
      $scope.artistName = "";
      $scope.date = "";
      $scope.price = "";
      $scope.sSection = "";
      $scope.sRow = "";
      $scope.sNumber = "";
    }

    var currentTicketIndex = null;
    var currentTicketId = null;
    $scope.submitButton = true;
    $scope.saveButton = false;

    // Update Ticket fills the fields with the existing data and changes the button from Submit to Save
    $scope.updateTicket = function(ticket) {
      for (var i = 0; i < $scope.tickets.length; i++) {
        if($scope.tickets[i] ==  ticket) {
          // setting a var equal to current artists index so when the user saves, we know which artist to update
          currentTicketIndex = i
          currentTicketId = ticket.id

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
      ticketService.updateTicket(currentTicketIndex, currentTicketId, $scope.artistName, $scope.date, $scope.price, $scope.sSection, $scope.sRow, $scope.sNumber)

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
      ticketService.deleteTicket(ticket)
    }

  })
