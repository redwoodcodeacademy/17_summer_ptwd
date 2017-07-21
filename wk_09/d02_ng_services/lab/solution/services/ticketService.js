angular
  .module("ticketApp")
  .service("ticketService", function($http) {

    var _tickets = []
    var _ticketId = 0

    var Ticket = function(id, artistName, date, price, section, row, seat) {
      this.id = id;
      this.artistName = artistName;
      this.date = date;
      this.price = price;
      this.section = section;
      this.row = row;
      this.seat = seat;
    }

    _tickets.push(new Ticket(_ticketId++, "Justin Timberlake", new Date("5/10/2017"), 35, 307, "C", 1))
    _tickets.push(new Ticket(_ticketId++, "Justin Timberlake", new Date("5/10/2017"), 35, 307, "C", 2))
    _tickets.push(new Ticket(_ticketId++, "Justin Timberlake", new Date("5/10/2017"), 25, 506, "H", 27))
    _tickets.push(new Ticket(_ticketId++, "Justin Timberlake", new Date("5/10/2017"), 25, 506, "H", 28))
    _tickets.push(new Ticket(_ticketId++, "Justin Timberlake", new Date("5/10/2017"), 50, 102, "D", 12))
    _tickets.push(new Ticket(_ticketId++, "Justin Timberlake", new Date("5/10/2017"), 50, 102, "D", 11))

    this.getTickets = function() {
      return _tickets
    }

    this.addTicket = function(artistName, date, price, section, row, seat) {
      _tickets.unshift(new Ticket(_ticketId++, artistName, date, price, section, row, seat))
    }

    this.updateTicket = function(currentTicketIndex, currentTicketId, artistName, date, price, section, row, seat) {
      _tickets.splice(currentTicketIndex, 1, new Ticket(currentTicketId, artistName, date, price, section, row, seat))
    }

    this.deleteTicket = function(ticket) {
      for (var i = 0; i < _tickets.length; i++) {
        if(_tickets[i] ==  ticket) {
          _tickets.splice(i,1)
        }
      }
    }

  })
