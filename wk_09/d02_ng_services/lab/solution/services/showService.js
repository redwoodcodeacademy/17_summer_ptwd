angular
  .module("ticketApp")
  .service("showService", function($http) {
    var _shows = []
    var _showId = 0;

    function Show(id, artistId, tourName, showLocation, showDate, ticketCount, ticketPrice) {
      this.id = id;
      this.artistId = artistId;
      this.tourName = tourName;
      this.showLocation = showLocation;
      this.showDate = showDate;
      this.ticketCount = ticketCount;
      this.ticketPrice = ticketPrice;
    }

    _shows.push(new Show(_showId++, 0, "20/20 Experience", "New York", new Date('5/15/2018'), 20000, 100))
    _shows.push(new Show(_showId++, 0, "20/20 Experience", "Baltimore", new Date('5/16/2018'), 25000, 100))
    _shows.push(new Show(_showId++, 0, "20/20 Experience", "Kansas City", new Date('5/17/2018'), 15000, 110))
    _shows.push(new Show(_showId++, 0, "20/20 Experience", "Dallas", new Date('5/18/2018'), 30000, 100))

    _shows.push(new Show(_showId++, 1, "Formation Tour", "Los Angeles", new Date('6/15/2018'), 40000, 200))
    _shows.push(new Show(_showId++, 1, "Formation Tour", "Sacramento", new Date('6/16/2018'), 45000, 200))
    _shows.push(new Show(_showId++, 1, "Formation Tour", "Portland", new Date('6/17/2018'), 35000, 210))
    _shows.push(new Show(_showId++, 1, "Formation Tour", "Seattle", new Date('6/18/2018'), 40000, 200))

    _shows.push(new Show(_showId++, 2, "Hello", "London", new Date('7/15/2018'), 30000, 300))
    _shows.push(new Show(_showId++, 2, "Hello", "London", new Date('7/16/2018'), 35000, 300))
    _shows.push(new Show(_showId++, 2, "Hello", "London", new Date('7/17/2018'), 25000, 310))
    _shows.push(new Show(_showId++, 2, "Hello", "London", new Date('7/18/2018'), 30000, 300))

    _shows.push(new Show(_showId++, 3, "The Joshua Tree Tour", "Pasadena", new Date('8/15/2018'), 40000, 300))
    _shows.push(new Show(_showId++, 3, "The Joshua Tree Tour", "Seattle", new Date('8/16/2018'), 45000, 300))
    _shows.push(new Show(_showId++, 3, "The Joshua Tree Tour", "Vancouver", new Date('8/17/2018'), 45000, 310))
    _shows.push(new Show(_showId++, 3, "The Joshua Tree Tour", "Portland", new Date('8/18/2018'), 40000, 300))

    _shows.push(new Show(_showId++, 4, "A Head Full Of Dreams", "Montreal", new Date('9/15/2018'), 50000, 300))
    _shows.push(new Show(_showId++, 4, "A Head Full Of Dreams", "Minneapolis", new Date('9/16/2018'), 55000, 300))
    _shows.push(new Show(_showId++, 4, "A Head Full Of Dreams", "Omaha", new Date('9/17/2018'), 55000, 310))
    _shows.push(new Show(_showId++, 4, "A Head Full Of Dreams", "Kansas City", new Date('9/18/2018'), 50000, 300))

    this.getShows = function() {
      return _shows
    }

    this.addShow = function(artistId, tourName, showLocation, showDate, ticketCount, ticketPrice) {
      _shows.unshift(new Show(_showId++, artistId, tourName, showLocation, showDate, ticketCount, ticketPrice))
    }

    this.updateShow = function(currentShowIndex, currentShowId, firstName, lastName, genre, tourName) {
      _shows.splice(currentShowIndex, 1, new Show(currentShowId, firstName, lastName, genre, tourName))
    }

    this.deleteShow = function(show) {
      for (var i = 0; i < _shows.length; i++) {
        if(_shows[i] ==  show) {
          _shows.splice(i,1)
        }
      }
    }

  })
