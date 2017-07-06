angular
  .module("ticketApp")
  .controller("userController", function($scope) {

    $scope.users = [];

    function User(firstName, lastName, email, phone, dob, street1, street2, city, state, zip, cardNumber, cardType, security) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.phone = phone;
      this.dob = dob;
      this.street1 = street1;
      this.street2 = street2;
      this.city = city;
      this.state = state;
      this.zip = zip;
      this.cardNumber = cardNumber;
      this.cardType = cardType;
      this.securityCode = security;
    }

    $scope.users.push(new User("Mary", "Mara", "mary.mara@gmail.com", "444-444-4444", new Date('7/30/1987'), "104 Main Street", "104", "Costa Mesa", "TX", "94444", "1234-1234-1234-1223", "Visa", "001"))
    $scope.users.push(new User("Sherm", "Blank", "sherm.blank@gmail.com", "222-222-2222", new Date('2/28/1987'), "102 Main Street", "102", "Costa Mesa", "NY", "92222", "1234-1234-1234-1223", "Visa", "001"))
    $scope.users.push(new User("Billy", "Pruden", "billy.pruden@gmail.com", "111-111-1111", new Date('4/30/1987'), "101 Main Street", "101", "Costa Mesa", "CA", "91111", "1234-1234-1234-1223", "Visa", "001"))
    $scope.users.push(new User("Ford", "Gunner", "ford.gunner@gmail.com", "333-333-3333", new Date('3/30/1987'), "103 Main Street", "103", "Costa Mesa", "WA", "93333", "1234-1234-1234-1223", "Visa", "001"))
    $scope.users.push(new User("Fox", "Hoy", "fox.hoy@gmail.com", "555-555-5555", new Date('1/30/1987'), "105 Main Street", "105", "Costa Mesa", "FL", "95555", "1234-1234-1234-1223", "Visa", "001"))
    $scope.users.push(new User("Sally", "Fern", "sally.fern@gmail.com", "777-777-777", new Date('6/30/1987'), "106 Main Street", "106", "Costa Mesa", "TX", "96666", "1234-1234-1234-1223", "Visa", "001"))
    $scope.users.push(new User("Steve", "Aoki", "steve.aoki@gmail.com", "222-222-2222", new Date('8/30/1987'), "107 Main Street", "107", "Costa Mesa", "NY", "97777", "1234-1234-1234-1223", "Visa", "001"))
    $scope.users.push(new User("Kayli", "Nishime", "kayli.nishime@gmail.com", "111-111-1111", new Date('11/30/1987'), "109 Main Street", "109", "Costa Mesa", "CA", "99999", "1234-1234-1234-1223", "Visa", "001"))
    $scope.users.push(new User("Jenelle", "Smith", "jenelle.smith@gmail.com", "333-333-3333", new Date('12/30/1987'), "108 Main Street", "108", "Costa Mesa", "WA", "98888", "1234-1234-1234-1223", "Visa", "001"))
    $scope.users.push(new User("Sunni", "Hoy", "sunni.hoy@gmail.com", "555-555-5555", new Date('9/30/1987'), "110 Main Street", "110", "Costa Mesa", "FL", "90000", "1234-1234-1234-1223", "Visa", "001"))

    $scope.firstName = "";
    $scope.lastName = "";
    $scope.email = "";
    $scope.phone = "";
    $scope.dob = "";
    $scope.street1 = "";
    $scope.street2 = "";
    $scope.city = "";
    $scope.state = "";
    $scope.zip = "";
    $scope.cardNumber = "";
    $scope.cardType = "";
    $scope.security = "";

    $scope.addUser = function() {
      $scope.users.unshift(new User($scope.firstName, $scope.lastName, $scope.email, $scope.phone, $scope.dob, $scope.street1, $scope.street2, $scope.city, $scope.state, $scope.zip, $scope.cardNumber, $scope.cardType, $scope.security))

      console.log($scope.users);
    }

    var currentUserIndex = null;
    $scope.submitButton = true;
    $scope.saveButton = false;

    // Update User fills the fields with the existing data and changes the button from Submit to Save
    $scope.updateUser = function(user) {
      for (var i = 0; i < $scope.users.length; i++) {
        if($scope.users[i] ==  user) {
          // setting a var equal to current users index so when the user saves, we know which user we are updating
          currentUserIndex = i

          $scope.firstName = user.firstName;
          $scope.lastName = user.lastName;
          $scope.email = user.email;
          $scope.phone = user.phone;
          $scope.dob = user.dob;
          $scope.street1 = user.streetOne;
          $scope.street2 = user.streetTwo;
          $scope.city = user.city;
          $scope.state = user.state;
          $scope.zip = user.zip;
          $scope.cardNumber = user.cardNumber;
          $scope.cardType = user.cardType;
          $scope.security = user.securityCode;

        }
      }
      // hiding submit, showing save
      $scope.submitButton = false;
      $scope.saveButton = true;
    }

    // Save User updates the changes that were made to the user inside of the user input fields.
    $scope.saveUser = function() {
      $scope.users.splice(currentUserIndex, 1, new User($scope.firstName, $scope.lastName, $scope.email, $scope.phone, $scope.dob, $scope.street1, $scope.street2, $scope.city, $scope.state, $scope.zip, $scope.cardNumber, $scope.cardType, $scope.security))

      // hiding save, showing submit
      $scope.submitButton = true;
      $scope.saveButton = false;

      // reseting scoped variables
      $scope.firstName = "";
      $scope.lastName = "";
      $scope.email = "";
      $scope.phone = "";
      $scope.dob = "";
      $scope.street1 = "";
      $scope.street2 = "";
      $scope.city = "";
      $scope.state = "";
      $scope.zip = "";
      $scope.cardNumber = "";
      $scope.cardType = "";
      $scope.security = "";
    }

    // Delete User removes the user from the array entirely
    $scope.deleteUser = function(user) {
      for (var i = 0; i < $scope.users.length; i++) {
        if($scope.users[i] ==  user) {
          $scope.users.splice(i,1)
        }
      }
    }

})
