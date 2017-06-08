////////////////////////////////////////////////
//  Conditionals, Arrays, Functions and Objects
////////////////////////////////////////////////

// We are forming a game studio (Redwood Game Studio)!
// Our first game will be a JavaScript based role playing game.
// We are going to create a dungeon, some monsters and ways to fight them.

console.log("\n ** Monster Monster **");
// 1.   Create an array of three objects, each holding a 'monster' object.
//      Each monster should contain the information for its name(string), health (number), and strength (number)
//      Go ahead and choose values that you think are good for each of these.
//      Using a loop print out the name, strength and health of each monster to the console.

var monsters = [];

monsters[0] = {
    name : "Bad Dude",
    health: 10,
    strength: 10
}

monsters[1] = {
    name : "Really Bad Dude",
    health: 5,
    strength: 10
}

monsters[2] = {
    name : "REALLY Bad Dude",
    health: 100,
    strength: 1000
}

var printMonsters = function() {
  for(var i = 0; i < monsters.length; i++) {
    console.log(monsters[i].name + " has " + monsters[i].health + " health and " + monsters[i].strength + " strength!");
  }
}
printMonsters()

console.log("\n ** My Hero! **");
// 2. Create a Hero object with our Hero's stats.
//    Our hero will have a name(string), strength (number), and health (number)
//    Print out the name, strength and health of our hero to the console.

var hero = {
    name: "Good Dude",
    strength: 50,
    health: 3000
}

console.log(hero.name + " has " + hero.health + " health and " + hero.strength + " strength!");

console.log("\n ** Attack of The Hero **");
// 3.   Create a function that allows the hero to attack a monster.
//      The function should take in two objects, the hero and the monster you are attacking.
//      The function should reduce the monster's health by the hero's strength.
//      Using this function, have the hero attack our first monster.
//      Print out all the monster's name and new health to the console.

function heroAttackMonster(theHero, theMonster) {
    theMonster.health -= theHero.strength;
}

heroAttackMonster(hero, monsters[0]);
printMonsters()

console.log("\n ** Monster - Dead or Alive **");
// 4.   Add a function to the monster objects that tells us if the monster is alive or not.
//      The monster is alive if the health is greater than 0 and dead if not.
//      Print out all of our monsters' names and alive status to the console.

for (var i = 0; i < monsters.length; i++) {
    monsters[i].isAlive = function() {
        return this.health > 0;
    }
}

for (var i = 0; i < monsters.length; i++) {
    console.log("Monster Name: " + monsters[i].name);
    console.log("IsAlive: " + monsters[i].isAlive());
}

console.log("\n ** We still ok? **");
// 5.   Add another function to our hero object to tell us if the hero is alive or not.
//      Our hero is alive if his or her health is over 0 and dead if not.
//      Print our hero's name and alive status to the console.

hero.isAlive = function(){
    return this.health > 0;
}

console.log("Hero Name: " + hero.name);
console.log("Hero IsAlive: " + hero.isAlive());

console.log("\n ** Revenge of The Monster **");
// 6.   Now the monsters fight back!
//      Create another function that makes a monster attack our hero.
//      It should take in two parameters, monster and hero that the monster is attacking.
//      The function should reduce the hero's health by the amount of the monster's attack
//      Have the first monster attack our hero and then print out our hero's name, health and alive status.

var monsterAttackHero = function(theHero, theMonster) {
    theHero.health -= theMonster.strength;
}

monsterAttackHero(hero, monsters[0]);

console.log("Hero Name: " + hero.name);
console.log("Hero Health: " + hero.health);
console.log("Hero IsAlive: " + hero.isAlive());

console.log("\n ** Let's Do This **");
// 7.   Let's take em on!'
//      For each monster in our array, have our hero attack the monster, then have the monster attack our hero.
//      Keep repeating attacks until either the hero or the monster is dead.
//      If our hero dies, then print to the console "GAME OVER"
//      If our hero defeats all three monsters, print to the console "WINNER WINNER"
//      If we won, modify our parameters to make us lose the next one.
//      If we lost, modify our parameters to make us win the next one.

for (var i = 0; i < monsters.length; i++) {

    while(monsters[i].isAlive() && hero.isAlive()) {
        heroAttackMonster(hero, monsters[i]);
        if(monsters[i].isAlive()){
          monsterAttackHero(hero, monsters[i]);
        }
    }

    if (hero.isAlive() == false) {
        console.log("GAME OVER");
    }
}

if (hero.isAlive()) {
    console.log("WINNER WINNER");
}
