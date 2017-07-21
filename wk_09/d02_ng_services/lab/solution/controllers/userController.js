angular
  .module("ticketApp")
  .controller("userController", function($scope, userService) {

    $scope.users = userService.getUsers()

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
      userService.addUser($scope.firstName, $scope.lastName, $scope.email, $scope.phone, $scope.dob, $scope.street1, $scope.street2, $scope.city, $scope.state, $scope.zip, $scope.cardNumber, $scope.cardType, $scope.security)

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

    var currentUserIndex = null;
    var currentUserId = null;
    $scope.submitButton = true;
    $scope.saveButton = false;

    // Update User fills the fields with the existing data and changes the button from Submit to Save
    $scope.updateUser = function(user) {
      for (var i = 0; i < $scope.users.length; i++) {
        if($scope.users[i] ==  user) {
          // setting a var equal to current users index so when the user saves, we know which user we are updating
          currentUserIndex = i
          currentUserId = user.id

          $scope.firstName = user.firstName;
          $scope.lastName = user.lastName;
          $scope.email = user.email;
          $scope.phone = user.phone;
          $scope.dob = user.dob;
          $scope.street1 = user.street1;
          $scope.street2 = user.street2;
          $scope.city = user.city;
          $scope.state = user.state;
          $scope.zip = user.zip;
          $scope.cardNumber = user.cardNumber;
          $scope.cardType = user.cardType;
          $scope.security = user.security;

        }
      }
      // hiding submit, showing save
      $scope.submitButton = false;
      $scope.saveButton = true;
    }

    // Save User updates the changes that were made to the user inside of the user input fields.
    $scope.saveUser = function() {
      userService.updateUser(currentUserIndex, currentUserId, $scope.firstName, $scope.lastName, $scope.email, $scope.phone, $scope.dob, $scope.street1, $scope.street2, $scope.city, $scope.state, $scope.zip, $scope.cardNumber, $scope.cardType, $scope.security)

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
      userService.deleteUser(user)
    }

})
