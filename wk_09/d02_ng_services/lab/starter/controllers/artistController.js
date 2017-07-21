angular
  .module("ticketApp")
  .controller("artistController", function($scope) {

    $scope.artists = [];
    $scope.shows = [];

    var artistId = 0;
    var showId = 0;

    function Artist(id, firstName, lastName, genre, tourName) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName || null;
      this.genre = genre;
      this.tourName = tourName;
    }

    function Show(id, artistId, artistTour, showLocation, showDate, ticketCount, ticketPrice) {
      this.id = id;
      this.artistId = artistId;
      this.artistTour = artistTour;
      this.showLocation = showLocation;
      this.showDate = showDate;
      this.ticketCount = ticketCount;
      this.ticketPrice = ticketPrice;
    }

    $scope.artists.push(new Artist(artistId++, "Justin", "Timberlake", "Pop", "20/20 Experience"))
      $scope.shows.push(new Show(showId++, 0, "20/20 Experience", "New York", new Date('5/15/2018'), 20000, 100))
      $scope.shows.push(new Show(showId++, 0, "20/20 Experience", "Baltimore", new Date('5/16/2018'), 25000, 100))
      $scope.shows.push(new Show(showId++, 0, "20/20 Experience", "Kansas City", new Date('5/17/2018'), 15000, 110))
      $scope.shows.push(new Show(showId++, 0, "20/20 Experience", "Dallas", new Date('5/18/2018'), 30000, 100))

    $scope.artists.push(new Artist(artistId++, "Beyonce", "", "Pop", "Formation Tour"))
      $scope.shows.push(new Show(showId++, 1, "Formation Tour", "Los Angeles", new Date('6/15/2018'), 40000, 200))
      $scope.shows.push(new Show(showId++, 1, "Formation Tour", "Sacramento", new Date('6/16/2018'), 45000, 200))
      $scope.shows.push(new Show(showId++, 1, "Formation Tour", "Portland", new Date('6/17/2018'), 35000, 210))
      $scope.shows.push(new Show(showId++, 1, "Formation Tour", "Seattle", new Date('6/18/2018'), 40000, 200))

    $scope.artists.push(new Artist(artistId++, "Adel", "", "Pop", "Hello"))
      $scope.shows.push(new Show(showId++, 2, "Hello", "London", new Date('7/15/2018'), 30000, 300))
      $scope.shows.push(new Show(showId++, 2, "Hello", "London", new Date('7/16/2018'), 35000, 300))
      $scope.shows.push(new Show(showId++, 2, "Hello", "London", new Date('7/17/2018'), 25000, 310))
      $scope.shows.push(new Show(showId++, 2, "Hello", "London", new Date('7/18/2018'), 30000, 300))

    $scope.artists.push(new Artist(artistId++, "U2", "", "Rock", "The Joshua Tree Tour"))
      $scope.shows.push(new Show(showId++, 3, "The Joshua Tree Tour", "Pasadena", new Date('8/15/2018'), 40000, 300))
      $scope.shows.push(new Show(showId++, 3, "The Joshua Tree Tour", "Seattle", new Date('8/16/2018'), 45000, 300))
      $scope.shows.push(new Show(showId++, 3, "The Joshua Tree Tour", "Vancouver", new Date('8/17/2018'), 45000, 310))
      $scope.shows.push(new Show(showId++, 3, "The Joshua Tree Tour", "Portland", new Date('8/18/2018'), 40000, 300))

    $scope.artists.push(new Artist(artistId++, "Coldplay", "", "Alternative", "A Head Full Of Dreams"))
      $scope.shows.push(new Show(showId++, 4, "A Head Full Of Dreams", "Montreal", new Date('9/15/2018'), 50000, 300))
      $scope.shows.push(new Show(showId++, 4, "A Head Full Of Dreams", "Minneapolis", new Date('9/16/2018'), 55000, 300))
      $scope.shows.push(new Show(showId++, 4, "A Head Full Of Dreams", "Omaha", new Date('9/17/2018'), 55000, 310))
      $scope.shows.push(new Show(showId++, 4, "A Head Full Of Dreams", "Kansas City", new Date('9/18/2018'), 50000, 300))

    $scope.firstName = ""
    $scope.lastName = ""
    $scope.genre = ""
    $scope.tourName = ""

    $scope.tourName = ""
    $scope.showDate = ""
    $scope.showLocation = ""
    $scope.ticketCount = ""
    $scope.ticketPrice = ""


console.log($scope.shows);
    /////////////////////////////////////////////////////
    /////////////////////// ARTISTS /////////////////////
    /////////////////////////////////////////////////////

    $scope.addArtist = function() {
      console.log($scope.genre);
      $scope.artists.unshift(new Artist(artistId++, $scope.firstName, $scope.lastName, $scope.genre, $scope.tourName))
      console.log($scope.artists);
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
      $scope.artists.splice(currentArtistIndex, 1, new Artist(currentArtistId, $scope.firstName, $scope.lastName, $scope.genre, $scope.tourName))

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
      for (var i = 0; i < $scope.artists.length; i++) {
        if($scope.artists[i] ==  artist) {
          $scope.artists.splice(i,1)
        }
      }
    }

    /////////////////////////////////////////////////////
    /////////////////////// SHOWS ///////////////////////
    /////////////////////////////////////////////////////

    $scope.showSection = false;

    $scope.addArtistShow = function(artist) {
      $scope.artistName = artist.firstName
      $scope.artistId = artist.id
      $scope.currentArtistId = artist.id
      $scope.showSection = true;
      $scope.artistTour = artist.tourName
    }

    $scope.addShow = function() {
      $scope.shows.unshift(new Show(showId++, $scope.artistId, $scope.artistTour, $scope.showLocation, $scope.showDate, $scope.ticketCount, $scope.ticketPrice))
      console.log($scope.shows);
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
          $scope.artistTour = show.artistTour;
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
      $scope.shows.splice(currentShowIndex, 1, new Show(currentShowId, $scope.artistId, $scope.artistTour, $scope.showLocation, $scope.showDate, $scope.ticketCount, $scope.ticketPrice))

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
      for (var i = 0; i < $scope.shows.length; i++) {
        if($scope.shows[i] ==  show) {
          $scope.shows.splice(i,1)
        }
      }
    }

    $scope.collapseShow = function() {
      $scope.showSection = false;
    }
})
