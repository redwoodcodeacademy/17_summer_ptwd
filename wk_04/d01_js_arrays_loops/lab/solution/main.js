console.log("Lab Loaded");

//////////// ARRAYS ////////////
console.log("[Hip!, Hip!]");

// 1. Angie's Colors

// CREATING AN ARRAY
// Create an empty array named Colors
var colors = [];

// Add three colors to (the end of) the array
colors.push('green');
colors.push('red');
colors.push('purple');

// Add another color to the front of the array
colors.unshift('blue');

// Add one more color to the front of the array
colors.unshift('yellow');

// PRINTING ITEMS
// Print the length of the array
console.log(colors.length);

// Print the item at index 1. What do you expect to print? What printed?
console.log(colors[1]);

// Remember arrays are 0 indexed. Meaning the first item in the array is at index 0
// Print the item at index 0
console.log(colors[0]);

// Print the last color in your array
console.log(colors[4]);

// Now try printing the last color in your array using colors.length-1
// Passing in [colors.length -1] as the index is useful when we do not know the length of the array
// This will always be the last item
console.log(colors[colors.length-1]);

// OVERRIDING ITEMS
// Replace the color at index 0 with a new color and print the new color
colors[0] = 'grey';
console.log(colors[0]);

// Replace the color at index 2 with a new color and print the new color
colors[2] = 'orange';
console.log(colors[2]);

// Replace the last color in your array with a new color and print it to the console
colors[4] = "magenta";

// Now try doing it again but this time use colors.length-1
colors[colors.length-1] = "magenta";
console.log(colors[colors.length-1]);

// REMOVING ITEMS
// Print the array length to console
console.log(colors.length);
// Delete the color at the last index of your array
colors.pop();
// Re-print the array length to console
console.log(colors.length);

// Print the color at index 0 to console
console.log(colors[0]);
// Delete the color at the first index of your array
colors.shift();
// Re-print the color at index 0
console.log(colors[0]);

// Delete the color at index 2
colors.splice(2, 1);

// Delete the color at index 1 and store it in a variable called 'storedColor'
var storedColor = colors.splice(1, 1);

// Print 'storedColor' in to the console
console.log(storedColor);

// Print the length of our colors array
console.log(colors.length);

// Print the last item in our colors array
console.log(colors[colors.length - 1]);



// 2. Gotta Catch 'Em All

// Create an array called myPokemon with 5 Pokemon inside of it.
var myPokemon = ["Pikachu", "Rattata", "Pidgey", "Charmander", "Weedle"]
// Create another array called friendsPokemon with 5 different Pokemon inside of it.
var friendsPokemon = ["Squirtle", "Bulbasaur", "Caterpie", "Ekans", "Sandshrew"]
// The first Pokemon in your array ran away into the wild.
myPokemon.shift()
// Your friend caught a brand new "Snorlax".  Add it to the back of his array.
friendsPokemon.push("Snorlax")
// You caught a new "Jiggly Puff".  Add it to the back of your array.
myPokemon.push("Jiggly Puff")
// Your friend lost the 3rd pokemon in their array in a battle.
friendsPokemon.splice(2, 1)
// Trade your first Pokemon with your friends last Pokemon.
//    - Hint: Console.log(myPokemon.shift()).
//    - What was printed into your console?
//    - How would you hold onto that value in order to trade?
var poke1 = myPokemon.shift()
var poke2 = friendsPokemon.pop()
myPokemon.unshift(poke2)
friendsPokemon.push(poke1)
// Trade your 2nd and 3rd Pokemon with your friends 3rd and 4th Pokemon.
var poke1 = myPokemon.splice(1, 2)
var poke2 = friendsPokemon.splice(2, 2)
myPokemon.push(poke2[0])
myPokemon.push(poke2[1])
friendsPokemon.push(poke1[0])
friendsPokemon.push(poke1[1])

// 3. Shop Till You Drop!

// Create an array called shoppingCart.
var shoppingCart = []
// Programatically add the names of 5 products you wish to purchase to the array.  Try to do it in one line.
shoppingCart.push("No Strings Attached by N'SYNC", "cake mix", "top ramen" "tickets to Jimmy Fallon", "Nintendo 64")
// It looks like your cart is too full. You need to remove the 2nd and 3rd item from your cart.
shoppingCart.splice(1,2)
// Sale! You can add 3 new items to your cart.  Add one to the front, one to the back, and one in the middle.
shoppingCart.unshift("Street Fighter")
shoppingCart.splice(2,0,"top ramen")
shoppingCart.push("Elf DvD")
// Look up a new built in method called .indexOf() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// Use .indexOf() on a few of your items until it works.
console.log(shoppingCart.indexOf("Elf DvD"));
// What happens when you type .indexOf("Ferris Bueller's Day Off DVD")? I'm assuming that wasn't already in your cart which is a shame by the way...
console.log(shoppingCart.indexOf("Ferris Bueller's Day Off DVD"));
// Go ahead and add "Ferris Buller's Day Off" to the end of your cart array.  Feel better?  I think so.  Now try the same method above and see what happens.
shoppingCart.push("Ferris Bueller's Day Off DVD")
console.log(shoppingCart.indexOf("Ferris Bueller's Day Off DVD"));
// Time to check out.  Programatically remove all the items from your cart.
shoppingCart = []

//////////// LOOPS ////////////
console.log("Loops and Loops and Loops and Loops and Loops and well you get the idea...");

// 1. Got 'Em!

// Write a loop to print off the names of your Pokemon.
for (var i = 0; i < myPokemon.length; i++) {
  console.log(myPokemon[i]);
}

// Write another loop to print off the names of your friends Pokemon.
for (var i = 0; i < friendsPokemon.length; i++) {
  console.log(friendsPokemon[i]);
}

// 2. Moving on up!

// Create an array called random1 that has 5 random numbers inside of it.
// Write a for loop that loops through each item in the array and adds 3 to each item.
// console.log() your array at the end of your loop to make sure the values have all gone up by 3.
// Create an array called random2 with 6 random numbers in it.
// Write a for loop that loops through each item in the array.
//    - For every number with an even index, increment the number by 5.
//    - For every number with an odd index, decrement the number by 5.

var random1 = [4,6,1,8,19]

for (var i = 0; i < random1.length; i++) {
  random1[i] += 3
}

console.log(random1);

var random2 = [1,2,3,4,5,6]
for (var i = 0; i < random2.length; i++) {
  if (i % 2 == 0) {
    random2[i] += 5
  }
  else {
    random2[i] -= 5
  }
}

console.log(random2);

// 3. Buzz-feed

// Print out the numbers 1-100 in your console.
// If the number is perfectly divisible by 3 then print "Fizz" instead
// If the number is perfectly divisible by 5 then print "Buzz" instead
// If the number is perfectly divisible by both 3 and 5 then print "Fizz-Buzz" instead

for (var i = 1; i < 101; i++) {
  if (i % 15 == 0){
    console.log("Fizz-Buzz");
  }
  else if (i % 5 == 0) {
    console.log("Buzz");
  }
  else if (i % 3 == 0) {
    console.log("Fizz");
  }
  else {
    console.log(i);
  }
}

// 4. Poker Face

// Create a variable called "deck" and set it equal to an empty array.
// Write 4 seperate for loops to create the different suites of cards and push them into the deck.
// Print your deck to the console to make sure its working.
// Write a new loop that is designed to grab 2 cards at random and swap them so we can shuffle our deck.
// Print the results of 1 shuffle to ensure it works.
// Now run that loop 10,000 times and reprint the shuffled deck.
// Print the position of the Ace of Spades to the page.
var deck = []

for (var i = 2; i < 15; i++) {
  if (i < 11) {
    deck.push(i + " of hearts")
  } else if (i == 11) {
    deck.push("Jack of hearts")
  } else if (i == 12) {
    deck.push("Queen of hearts")
  } else if (i == 13) {
  deck.push("King of hearts")
  } else if (i == 14) {
  deck.push("Ace of hearts")
  }
}
for (var i = 2; i < 15; i++) {
  if (i < 11) {
    deck.push(i + " of clubs")
  } else if (i == 11) {
    deck.push("Jack of clubs")
  } else if (i == 12) {
    deck.push("Queen of clubs")
  } else if (i == 13) {
  deck.push("King of clubs")
  } else if (i == 14) {
  deck.push("Ace of clubs")
  }
}
for (var i = 2; i < 15; i++) {
  if (i < 11) {
    deck.push(i + " of diamonds")
  } else if (i == 11) {
    deck.push("Jack of diamonds")
  } else if (i == 12) {
    deck.push("Queen of diamonds")
  } else if (i == 13) {
  deck.push("King of diamonds")
  } else if (i == 14) {
  deck.push("Ace of diamonds")
  }
}
for (var i = 2; i < 15; i++) {
  if (i < 11) {
    deck.push(i + " of spades")
  } else if (i == 11) {
    deck.push("Jack of spades")
  } else if (i == 12) {
    deck.push("Queen of spades")
  } else if (i == 13) {
  deck.push("King of spades")
  } else if (i == 14) {
  deck.push("Ace of spades")
  }
}
console.log(deck);

for (var i = 0; i < 10000; i++) {
  var random1 = Math.floor(Math.random() * (51 - 0 + 1)) + 0;
  var random2 = Math.floor(Math.random() * (51 - 0 + 1)) + 0;

  var card1 = deck[random1]
  var card2 = deck[random2]

  deck[random1] = card2
  deck[random2] = card1

}
console.log(deck);
console.log(deck.indexOf("Ace of spades"));

// 5. The Binge Watcher

// Netflix released the newest seasons of House Of Cards, Chef's Table, and Gilmore Girls
// which just so happen to be your three guilty pleasures.  Time is ticking and these shows won't watch themselves!
// To make sure you take breaks and don't melt into the couch we are going to create a program that won't let you
// watch more than 4 episodes at a time without reminding you to stand up.
// Prompt the user for which show they wish to watch.
// Prompt the user for how many episodes they wish to watch before being reminded to take a
// break (user can't enter a number greater than 4 AND they can't enter a number greater
// than the amount of episodes left for that show).
// Create a while loop that runs as long as there are unwatched episodes.
// At the start of each loop print out each series and how many episodes are left to watch in each.
// When all the episodes are done print out "Bed Time!"

var houseOfCards = 13;
var chefsTable = 6;
var gilmoreGirls = 22;

while ((houseOfCards + chefsTable + gilmoreGirls) > 0) {
  console.log("There are " + houseOfCards + " episodes left for House of Cards");
  console.log("There are " + chefsTable + " episodes left for Chef's Table");
  console.log("There are " + gilmoreGirls + " episodes left for Gilmore Girls");

  var show = prompt("What show do you want to watch? House Of Cards(h), Chef's Table(c), or Gilmore Girls(g)")
  var episodeCount = prompt("How many episodes do want to watch?")

  if (show == "h" && episodeCount <= houseOfCards && episodeCount < 5) {
    console.log("Time to take a break!");
    houseOfCards -= episodeCount
    if ((houseOfCards + chefsTable + gilmoreGirls) == 0) {
      console.log("Bed Time!");
      break
    }
  } else if (show == "c" && episodeCount <= chefsTable && episodeCount < 5) {
    console.log("Time to take a break!");
    chefsTable -= episodeCount
    if ((houseOfCards + chefsTable + gilmoreGirls) == 0) {
      console.log("Bed Time!");
      break
    }
  } else if (show == "g" && episodeCount <= gilmoreGirls && episodeCount < 5) {
    console.log("Time to take a break!");
    gilmoreGirls -= episodeCount
    if ((houseOfCards + chefsTable + gilmoreGirls) == 0) {
      console.log("Bed Time!");
      break
    }
  }
  else {
    console.log("Sorry it looks like something wen't wrong. Try again!");
  }
}
