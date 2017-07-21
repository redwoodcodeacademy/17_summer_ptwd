angular
  .module("ticketApp")
  .controller("showController", function($scope, showService, artistService) {

    $scope.shows = showService.getShows()
    $scope.artists = artistService.getArtists()
    $scope.showId = null

    $scope.artistId = ""
    $scope.tourName = ""
    $scope.showLocation = ""
    $scope.showDate = ""
    $scope.ticketCount = ""
    $scope.ticketPrice = ""

    $scope.addShow = function() {
      showService.addShow($scope.artistId, $scope.tourName, $scope.showLocation, $scope.showDate, $scope.ticketCount, $scope.ticketPrice)

      $scope.tourName = ""
      $scope.showDate = ""
      $scope.showLocation = ""
      $scope.ticketCount = ""
      $scope.ticketPrice = ""
    }

    var currentShowIndex = null;
    var currentShowId = null;
    $scope.showSubmitButton = true;
    $scope.showSaveButton = false;

    // Update Show fills the fields with the existing data and changes the button from Submit to Save
    $scope.updateShow = function(show) {
      for (var i = 0; i < $scope.shows.length; i++) {
        if($scope.shows[i] ==  show) {
          // setting a var equal to current shows index so when the show saves, we know which show we are updating
          currentShowIndex = i
          currentShowId = show.id

          $scope.artistId = show.artistId;
          $scope.tourName = show.tourName;
          $scope.showLocation = show.showLocation;
          $scope.showDate = show.showDate;
          $scope.ticketCount = show.ticketCount;
          $scope.ticketPrice = show.ticketPrice;
        }
      }
      // hiding submit, showing save
      $scope.showSubmitButton = false;
      $scope.showSaveButton = true;
    }

    // Save Show updates the changes that were made to the show inside of the show input fields.
    $scope.saveShow = function() {
      showService.updateShow(currentShowIndex, currentShowId, $scope.artistId, $scope.artistTour, $scope.showLocation, $scope.showDate, $scope.ticketCount, $scope.ticketPrice)

      // hiding save, showing submit
      $scope.showSubmitButton = true;
      $scope.showSaveButton = false;

      // reseting scoped variables
      $scope.artistTour = ""
      $scope.showDate = ""
      $scope.showLocation = ""
      $scope.ticketCount = ""
      $scope.ticketPrice = ""
    }

    // Delete Show removes the show from the array entirely
    $scope.deleteShow = function(show) {
      showService.deleteShow(show)
    }

  })
