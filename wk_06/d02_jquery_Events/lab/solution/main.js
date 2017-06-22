var users = [];
var index = null;

// Finish the user Contructor to take all of the values provided by the user.
var User = function(firstName, lastName, address, city, state, zip, cardNum, expiration, security) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.cardNum = cardNum;
  this.expiration = expiration;
  this.security = security
}

// Seed our users array with 4 default users
users.push(new User("Bobby", "Smith", "123 Main Street", "Los Angeles", "CA", 91919, "1234123412341234", "2018-03-29", 101))
users.push(new User("Susy", "Doe", "345 Boston Street", "New York", "NY", 01012, "1234123412341234", "2019-03-29", 202))
users.push(new User("Eric", "Billbert", "567 Second Street", "San Diego", "CA", 92929, "1234123412341234", "2020-03-29", 303))
users.push(new User("Martha", "Dion", "789 Primary Street", "Camden", "NJ", 02024, "1234123412341234", "2021-03-29", 404))

//// Hiding the messages as the page loads only to reveal if needed.
$("#firstNameMessage").hide()
$("#lastNameMessage").hide()

// Hiding update button as the page loads
$(".updateButton").hide()

// Add a Click event to our submit button that creates a new user and puts them into our users array.

// First and Last name need to be required fields.  If the user doesn't input any data into those fields please present them with appropriate error messages under the input fields that are missing content.

// Submit New User
$(".submitButton").click(function() {
  // Checking both first and last name for a valid input.
  if($("#firstName").val() == '' || $("#lastName").val() == ''){
    // Checking first name to see if it has a value. If it doesn't then showing error message.
    if ($("#firstName").val() == '') {
      $("#firstNameMessage").show()
    }

    // Checking last name to see if it has a value. If it doesn't then showing error message.
    if ($("#lastName").val() == '') {
      $("#lastNameMessage").show()
    }
  }
  else{
    // Want to make sure to re-hide the messages incanse they were visible
    $("#firstNameMessage").hide()
    $("#lastNameMessage").hide()

    // Creating a new user and pushing into our users array.
    users.push(new User(
      $("#firstName").val(),
      $("#lastName").val(),
      $("#address").val(),
      $("#city").val(),
      $("#state").val(),
      $("#zip").val(),
      $("#ccnumber").val(),
      $("#expiration").val(),
      $("#security").val()
    ))

    // Resetting values of inputs
    $("#firstName").val('')
    $("#lastName").val('')
    $("#address").val('')
    $("#city").val('')
    $("#state").val('')
    $("#zip").val('')
    $("#ccnumber").val('')
    $("#expiration").val('')
    $("#security").val('')

    printUsers()
  }
})

// Update existing users
$(".updateButton").click(function() {
  console.log(index);
  // Checking both first and last name for a valid input.
  if($("#firstName").val() == '' || $("#lastName").val() == ''){
    // Checking first name to see if it has a value. If it doesn't then showing error message.
    if ($("#firstName").val() == '') {
      $("#firstNameMessage").show()
    }

    // Checking last name to see if it has a value. If it doesn't then showing error message.
    if ($("#lastName").val() == '') {
      $("#lastNameMessage").show()
    }
  }
  else{
    // Want to make sure to re-hide the messages incanse they were visible
    $("#firstNameMessage").hide()
    $("#lastNameMessage").hide()

    // Updating a user
    users.splice(index, 1, new User(
      $("#firstName").val(),
      $("#lastName").val(),
      $("#address").val(),
      $("#city").val(),
      $("#state").val(),
      $("#zip").val(),
      $("#ccnumber").val(),
      $("#expiration").val(),
      $("#security").val()
    ))
    // Hiding Update and Showing Submit
    $(".updateButton").hide()
    $(".submitButton").show()

    // Resetting values of inputs
    $("#firstName").val('')
    $("#lastName").val('')
    $("#address").val('')
    $("#city").val('')
    $("#state").val('')
    $("#zip").val('')
    $("#ccnumber").val('')
    $("#expiration").val('')
    $("#security").val('')

    printUsers()
  }
})

// Create a function called "printUsers" whose job it is is to print our users into the "usersContent" div.

var printUsers = function() {
  $('.usersContent').html('')
  var $userContent = $('.usersContent')
  for (var i = 0; i < users.length; i++) {
    // Creating the Elements
    var $userCard = $("<div class='col-md-4 userCard'></div>")
    var $userHeader = $("<div class='userHeader'></div>")
    var $userHeading = $("<h1 class='text-center'>" + users[i].firstName + " " + users[i].lastName + "</h1>")
    var $userBody = $("<div class='userBody'></div>")
    var $address = $("<p><strong>Addres: </strong>" + users[i].address + "</p>")
    var $city = $("<p><strong>City: </strong>" + users[i].city + "</p>")
    var $state = $("<p><strong>State: </strong>" + users[i].state + "</p>")
    var $zip = $("<p><strong>Zip: </strong>" + users[i].zip + "</p>")

    var $update = $("<button class='btn btn-info btn-sm' data=" + i + ">Update</button>")
    var $delete = $("<button class='btn btn-danger btn-sm' data=" + i + ">X</button>")

    // Assembling the elements
    $userHeader.append($userHeading)

    $userBody.append($address)
    $userBody.append($city)
    $userBody.append($state)
    $userBody.append($zip)
    $userBody.append($update)
    $userBody.append($delete)

    $userCard.append($userHeader)
    $userCard.append($userBody)

    $userContent.append($userCard)
  }

  // Update Prep
  $('.btn-info').click(function() {
    $(".updateButton").show()
    $(".submitButton").hide()
    index = $(this).attr("data")
    $("#firstName").val(users[index].firstName)
    $("#lastName").val(users[index].lastName)
    $("#address").val(users[index].address)
    $("#city").val(users[index].city)
    $("#state").val(users[index].state)
    $("#zip").val(users[index].zip)
    $("#ccnumber").val(users[index].cardNum)
    $("#expiration").val(users[index].expiration)
    $("#security").val(users[index].security)
  })

  // Delete Function
  $(".btn-danger").click(function() {
    users.splice($(this).attr("data"), 1)
    printUsers()
  })

}
printUsers()


// Add a button on each user card called "update".  When a user clicks that button the form should be populated with their information. Hide the submit Button and show a new button called "update".  Update should have a click event that updates that users data in our users array.

// Add a button on each user card called "delete".  When that button is clicked, remove that user from our users array.
