angular
  .module("ticketApp")
  .service("artistService", function($http) {
    var _artists = []
    var _artistId = 0;

    function Artist(id, firstName, lastName, genre, tourName) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName || null;
      this.genre = genre;
      this.tourName = tourName;
    }

    _artists.push(new Artist(_artistId++, "Justin", "Timberlake", "Pop", "20/20 Experience"))
    _artists.push(new Artist(_artistId++, "Beyonce", "", "Pop", "Formation Tour"))
    _artists.push(new Artist(_artistId++, "Adel", "", "Pop", "Hello"))
    _artists.push(new Artist(_artistId++, "U2", "", "Rock", "The Joshua Tree Tour"))
    _artists.push(new Artist(_artistId++, "Coldplay", "", "Alternative", "A Head Full Of Dreams"))

    this.getArtists = function() {
      return _artists
    }

    this.addArtist = function(firstName, lastName, genre, tourName) {
      _artists.unshift(new Artist(_artistId++, firstName, lastName, genre, tourName))
    }

    this.updateArtist = function(currentArtistIndex, currentArtistId, firstName, lastName, genre, tourName) {
      _artists.splice(currentArtistIndex, 1, new Artist(currentArtistId, firstName, lastName, genre, tourName))
    }

    this.deleteArtist = function(artist) {
      for (var i = 0; i < _artists.length; i++) {
        if(_artists[i] ==  artist) {
          _artists.splice(i,1)
        }
      }
    }

  })
