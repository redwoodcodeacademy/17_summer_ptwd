angular
  .module("ticketApp")
  .controller("artistController", function($scope, artistService) {

    $scope.artists = artistService.getArtists()

    $scope.firstName = ""
    $scope.lastName = ""
    $scope.genre = ""
    $scope.tourName = ""

    $scope.addArtist = function() {
      artistService.addArtist($scope.firstName, $scope.lastName, $scope.genre, $scope.tourName)

      $scope.firstName = ""
      $scope.lastName = ""
      $scope.genre = ""
      $scope.tourName = ""
    }

    var currentArtistIndex = null;
    var currentArtistId = null;
    $scope.artistSubmitButton = true;
    $scope.artistSaveButton = false;

    // Update Artist fills the fields with the existing data and changes the button from Submit to Save
    $scope.updateArtist = function(artist) {
      for (var i = 0; i < $scope.artists.length; i++) {
        if($scope.artists[i] ==  artist) {
          // setting a var equal to current artists index so when the artist saves, we know which artist we are updating
          currentArtistIndex = i

          currentArtistId = artist.id
          $scope.firstName = artist.firstName;
          $scope.lastName = artist.lastName;
          $scope.genre = artist.genre;
          $scope.tourName = artist.tourName;

        }
      }
      // hiding submit, showing save
      $scope.artistSubmitButton = false;
      $scope.artistSaveButton = true;
    }

    // Save Artist updates the changes that were made to the artist inside of the artist input fields.
    $scope.saveArtist = function() {
      artistService.updateArtist(currentArtistIndex, currentArtistId, $scope.firstName, $scope.lastName, $scope.genre, $scope.tourName)

      // hiding save, showing submit
      $scope.artistSubmitButton = true;
      $scope.artistSaveButton = false;

      // reseting scoped variables
      $scope.firstName = ""
      $scope.lastName = ""
      $scope.genre = ""
      $scope.tourName = ""
    }

    // Delete Artist removes the artist from the array entirely
    $scope.deleteArtist = function(artist) {
      artistService.deleteArtist(artist)
    }

})
