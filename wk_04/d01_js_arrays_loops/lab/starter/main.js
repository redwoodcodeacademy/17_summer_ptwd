console.log("Lab Loaded");

//////////// ARRAYS ////////////
console.log("[Hip!, Hip!]");

// 1. Angie's Colors

// CREATING AN ARRAY
// Create an empty array named Colors
// Add three colors to (the end of) the array
// Add another color to the front of the array
// Add one more color to the front of the array

// PRINTING ITEMS
// Print the length of the array
// Print the item at index 1. What do you expect to print? What printed?
// Remember arrays are 0 indexed. Meaning the first item in the array is at index 0
// Print the item at index 0
// Print the last color in your array
// Now try printing the last color in your array using colors.length-1
// Passing in [colors.length -1] as the index is useful when we do not know the length of the array
// This will always be the last item

// OVERRIDING ITEMS
// Replace the color at index 0 with a new color and print the new color
// Replace the color at index 2 with a new color and print the new color
// Replace the last color in your array with a new color and print it to the console
// Now try doing it again but this time use colors.length-1

// REMOVING ITEMS
// Print the array length to console
// Delete the color at the last index of your array
// Re-print the array length to console
// Print the color at index 0 to console
// Delete the color at the first index of your array
// Re-print the color at index 0
// Delete the color at index 2
// Delete the color at index 1 and store it in a variable called 'storedColor'
// Print 'storedColor' in to the console
// Print the length of our colors array
// Print the last item in our colors array


// 2. Gotta Catch 'Em Al

// Create an array called myPokemon with 5 Pokemon inside of it.
// Create another array called friendsPokemon with 5 different Pokemon inside of it.
// The first Pokemon in your array ran away into the wild.
// Your friend caught a brand new "Snorlax".  Add it to the back of his array.
// You caught a new "Jiggly Puff".  Add it to the back of your array.
// Your friend lost the 3rd pokemon in their array in a battle.
// Trade your first Pokemon with your friends last Pokemon.
//    - Hint: Console.log(myPokemon.shift()).
//    - What was printed into your console?
//    - How would you hold onto that value in order to trade?
// Trade your 2nd and 3rd Pokemon with your friends 3rd and 4th Pokemon.

// 3. Shop Till You Drop!

// Create an array called shoppingCart.
// Programatically add the names of 5 products you wish to purchase to the array.  Try to do it in one line.
// It looks like your cart is too full. You need to remove the 2nd and 3rd item from your cart.
// Sale! You can add 3 new items to your cart.  Add one to the front, one to the back, and one in the middle.
// Look up a new built in method called .indexOf() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// Use .indexOf() on a few of your items until it works.
// What happens when you type .indexOf("Ferris Bueller's Day Off DVD")? I'm assuming that wasn't already in your cart which is a shame by the way...
// Go ahead and add "Ferris Buller's Day Off" to the end of your cart array.  Feel better?  I think so.  Now try the same method above and see what happens.
// Time to check out.  Programatically remove all the items from your cart.

//////////// LOOPS ////////////
console.log("Loops and Loops and Loops and Loops and Loops and well you get the idea...");

// 1. Got 'Em!

// Write a loop to print off the names of your Pokemon.
// Write another loop to print off the names of your friends Pokemon.

// 2. Moving on up!

// Create an array called random1 that has 5 random numbers inside of it.
// Write a for loop that loops through each item in the array and adds 3 to each item.
// console.log() your array at the end of your loop to make sure the values have all gone up by 3.
// Create an array called random2 with 6 random numbers in it.
// Write a for loop that loops through each item in the array.
//    - For every number with an even index, increment the number by 5.
//    - For every number with an odd index, decrement the number by 5.

// 3. Buzz-feed

// Print out the numbers 1-100 in your console.
// If the number is perfectly divisible by 3 then print "Fizz" instead
// If the number is perfectly divisible by 5 then print "Buzz" instead
// If the number is perfectly divisible by both 3 and 5 then print "Fizz-Buzz" instead

// 4. Poker Face

// Create a variable called "deck" and set it equal to an empty array.
// Write 4 seperate for loops to create the different suites of cards and push them into the deck.
// Print your deck to the console to make sure its working.
// Write a new loop that is designed to grab 2 cards at random and swap them so we can shuffle our deck.
// Print the results of 1 shuffle to ensure it works.
// Now run that loop 10,000 times and reprint the shuffled deck.
// Print the position of the Ace of Spades to the page.

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
