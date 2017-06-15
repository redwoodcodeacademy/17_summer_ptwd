////////////////////////////
//  Extended RPG
////////////////////////////

// Let's extend our RPG game we created earlier.
// We will add weapons, gold, a shop, user input and randomization
// The basics will already be created for you from our previous exercies, and it will be up to you to
// extend it.

// Feel free to use your code from the basic RPG exercise or use the starting point below.

// Create our monsters

var monsters = [];

function Monster(name, health, strength) {
  this.name = name;
  this.health = health;
  this.strength = strength;
  this.isAlive = function() {
    return this.health > 0;
  }
}

monsters.push(new Monster("Bad Dude", 10, 10));
monsters.push(new Monster("Really Bad Dude", 20, 15));
monsters.push(new Monster("REALLY Bad Dude", 30, 20));

// Create our hero
var heros = []

function Hero(name, health, strength) {
  this.name = name;
  this.health = health;
  this.strength = strength;
  this.isAlive = function() {
    return this.health > 0;
  }
}

heros.push(new Hero("Good Dude", 35, 15));

// Attack functions

function heroAttackMonster(theHero, theMonster) {
    theMonster.health = theMonster.health - theHero.strength;
}

function monsterAttackHero(theHero, theMonster) {
    theHero.health = theHero.health - theMonster.strength;
}

// Use this function to get a random number within a range.

function getRandomInRange(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

//////    NOTES
//////    If at any time our hero's health goes below 1, the game is over.
//////    If at any time all monsters are dead, then the game is won.
//////    When we say "print" or "print out", we mean to log to the console "console.log()".


console.log("\n ** Ooooo, shiny **");
// 1.     Add a "gold" property to each monster and hero.
//        Using our getRandomInRange function set the value of the gold property equal to a random number
//        Print out our monsters' stats and our hero's new stats to see if it worked.

console.log("\n ** Ooooo, sharp **");
// 2.   Create a new Weapon Constructor at the top of the page.
//      Weapons have 4 properties: name, minDamage, maxDamage, and cost.
//      Using our new constructor add a property called "weapon" to our heros and monsters
//      that is equal to a weapon object.
//      Equip our hero with a weapon that does between 3 and 8 damage.
//      Equip our monsters with various weapons that have various min and max values.
//      Print out the hero and monster's stats to check our work.

console.log("\n ** Nothing to see here. **");
// 3.   Create an empty array called "shop".
//      Fill the shop with 5 new weapons using the Weapon Constructor.
//      Create CRUD functions for weapons. (the Constructor is the C. we need
//      a printShopItem, updateShopItem, and deleteShopItem function)
//      Print out the shop using your new function.  Then update an item and delete one.
//      Print the shop again to verify that it worked.

console.log("\n ** So, what can I do for you? **");
// 4.   Create a function that lists out our available items to buy in the console.
//      Include the attack range and cost.
//      Call that function printShop.

console.log("\n ** Thank you for your business. **");
// 5.   Create a function that allows our hero to buy an item from the shop.
//      The function should take in one parameter, the index of the item that the hero wants to buy.
//      If the hero has enough gold to buy the item, then remove the item from the shop
//      and have our hero equip that item.
//      Print out appropriate messages for sold and denied conditions.

console.log("\n ** Mo' money, mo' problems **");
//  6.  In our hero attacks monster function, change the amount of health to remove from the monster
//      equal to the heros strength plus a random number between the equipped weapons minDamage and maxDamage.
//      If our hero kills the monster, add that monsters gold value to the total gold that the hero has
//      Kill a monster and print our our hero's new amount of gold.

console.log("\n ** Less money, less problems? **");
//  7.  In our monster attacks hero function, change the amount of health to remove from the hero
//      equal to the monsters strength plus a random number between the equipped weapons minDamage and maxDamage.
//      Also, our monsters are thieves!  Remove gold from the hero in the amount of their attack amount.
//      Have the monster attack our hero and print out our hero's new health and gold amounts.

console.log("\n ** You think this is a game!? **");
//  8.  Let's get some input from the user.
//      Prompt the user to either attack or shop.
//      If the user says "attack", then have our hero attack our monster. Then have our monster attack our hero.
//      If the user says "shop", then print out our shop items to the console and ask the user what
//      they want to buy or if they want to exit the shop.  If the user enters an index of an item
//      in the shop, then attempt to buy that item.

console.log("\n ** Yup, it's a game **");
// 9.   Before we start playing our game lets wrap the code we wrote to create monsters
//      and heros in a function called "resetGame".  Call "resetGame" before we play.
//      Continue to prompt the user to attack or shop until the game is won or lost.
//      Every time we encounter a new monster OR we exit the shop, print out the current monster and hero's stats.
//      Every time we attack or are attacked, print out the hero's and monster's stats to the console.
//      You win if you defeat all 3 monsters.
//      You lose if you die.

//////  BONUS

//  10. Create a party of heroes!  Enable your user to select which hero to attack with on any given attack.
//      Each hero will have their own gold and equipped weapon

//  11. Create Heal Potions that can be purchased in the Shop by Heros who need to heal up after battle.

//  12. Create armor equipment that you can buy to equip your hero with.  Armor reduces the monster's attack amount by it's
//      armor "absorb" value

//  13. Create 3 levels!  Each level will have a list of monster and culminate in a boss battle.  Once the stage is won,
//      your heroes should level up and have increased stats, plus gold
