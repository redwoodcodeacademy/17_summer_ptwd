angular
  .module("ticketApp")
  .service("userService", function($http) {

    var _users = []
    var _userId = 0

    function User(id, firstName, lastName, email, phone, dob, street1, streer2, city, state, zip, cardNumber, cardType, security) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.phone = phone;
      this.dob = dob;
      this.street1 = street1;
      this.streer2 = streer2;
      this.city = city;
      this.state = state;
      this.zip = zip;
      this.cardNumber = cardNumber;
      this.cardType = cardType;
      this.security = security;
    }

    _users.push(new User(_userId++, "Mary", "Mara", "mary.mara@gmail.com", "444-444-4444", new Date('7/30/1987'), "104 Main Street", "104", "Costa Mesa", "TX", "94444", "1234-1234-1234-1223", "Visa", "001"))
    _users.push(new User(_userId++, "Sherm", "Blank", "sherm.blank@gmail.com", "222-222-2222", new Date('2/28/1987'), "102 Main Street", "102", "Costa Mesa", "NY", "92222", "1234-1234-1234-1223", "Visa", "001"))
    _users.push(new User(_userId++, "Billy", "Pruden", "billy.pruden@gmail.com", "111-111-1111", new Date('4/30/1987'), "101 Main Street", "101", "Costa Mesa", "CA", "91111", "1234-1234-1234-1223", "Visa", "001"))
    _users.push(new User(_userId++, "Ford", "Gunner", "ford.gunner@gmail.com", "333-333-3333", new Date('3/30/1987'), "103 Main Street", "103", "Costa Mesa", "WA", "93333", "1234-1234-1234-1223", "Visa", "001"))
    _users.push(new User(_userId++, "Fox", "Hoy", "fox.hoy@gmail.com", "555-555-5555", new Date('1/30/1987'), "105 Main Street", "105", "Costa Mesa", "FL", "95555", "1234-1234-1234-1223", "Visa", "001"))
    _users.push(new User(_userId++, "Sally", "Fern", "sally.fern@gmail.com", "777-777-777", new Date('6/30/1987'), "106 Main Street", "106", "Costa Mesa", "TX", "96666", "1234-1234-1234-1223", "Visa", "001"))
    _users.push(new User(_userId++, "Steve", "Aoki", "steve.aoki@gmail.com", "222-222-2222", new Date('8/30/1987'), "107 Main Street", "107", "Costa Mesa", "NY", "97777", "1234-1234-1234-1223", "Visa", "001"))
    _users.push(new User(_userId++, "Kayli", "Nishime", "kayli.nishime@gmail.com", "111-111-1111", new Date('11/30/1987'), "109 Main Street", "109", "Costa Mesa", "CA", "99999", "1234-1234-1234-1223", "Visa", "001"))
    _users.push(new User(_userId++, "Jenelle", "Smith", "jenelle.smith@gmail.com", "333-333-3333", new Date('12/30/1987'), "108 Main Street", "108", "Costa Mesa", "WA", "98888", "1234-1234-1234-1223", "Visa", "001"))
    _users.push(new User(_userId++, "Sunni", "Hoy", "sunni.hoy@gmail.com", "555-555-5555", new Date('9/30/1987'), "110 Main Street", "110", "Costa Mesa", "FL", "90000", "1234-1234-1234-1223", "Visa", "001"))

    console.log(_users);

    this.getUsers = function() {
      return _users
    }

    this.addUser = function(firstName, lastName, email, phone, dob, street1, streer2, city, state, zip, cardNumber, cardType, security) {
      _users.unshift(new User(_userId++, firstName, lastName, email, phone, dob, street1, streer2, city, state, zip, cardNumber, cardType, security))
    }

    this.updateUser = function(currentUserIndex, currentUserId, firstName, lastName, email, phone, dob, street1, streer2, city, state, zip, cardNumber, cardType, security) {
      _users.splice(currentUserIndex, 1, new User(currentUserId, firstName, lastName, email, phone, dob, street1, streer2, city, state, zip, cardNumber, cardType, security))
    }

    this.deleteUser = function(user) {
      for (var i = 0; i < _users.length; i++) {
        if(_users[i] ==  user) {
          _users.splice(i,1)
        }
      }
    }

  })
