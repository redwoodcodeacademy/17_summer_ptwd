////////////////////////////
//  Extended RPG - BONUS
////////////////////////////

var currentLevel = 0
var currentMonsterIndex = 0;

// Weapon Constructor
var Weapon = function(name, min, max, cost) {
  this.name = name;
  this.minDamage = min;
  this.maxDamage = max;
  this.cost = cost || 50;
  this.type = "Weapon"
  this.print = function () {
    console.log('Weapon: ' + this.name + " costs " + this.cost + " gold.");
    console.log('Damage Range: ' + this.minDamage + '-' + this.maxDamage);
    console.log('\n');
  }
}

// Armor Constructor
var Armor = function(name, absorb, cost){
  this.name = name;
  this.absorb = absorb;
  this.cost = cost || 50;
  this.type = "Armor"
  this.print = function () {
    console.log('Armor: ' + this.name + " costs " + this.cost + " gold.");
    console.log('Absorption: ' + Math.floor(this.absorb * 100) + "%");
    console.log('\n');
  }
}

// Heal Potion Constructor
var Heal = function(name, health, cost){
  this.name = name;
  this.health = health;
  this.cost = cost;
  this.type = "Heal"
  this.print = function () {
    console.log('Health Potion: ' + this.name + " costs " + this.cost + " gold.");
    console.log('Heals for: ' + this.health);
    console.log('\n');
  }
}

// Monster Constructor
var Monster = function(name, health, strength, gold, weaponName, weaponMin, weaponMax, armorName, armorAbsorb) {
  this.name = name;
  this.health = health;
  this.strength = strength;
  this.gold = gold;
  this.weapon = new Weapon(weaponName, weaponMin, weaponMax)
  this.armor = new Armor (armorName, armorAbsorb)
  this.isAlive = function() {
      return this.health > 0;
  }
  this.print = function () {
    console.log('Name: ' + this.name);
    console.log('Health: ' + this.health);
    console.log('Strength: ' + this.strength);
    console.log('Gold: ' + this.gold);
    console.log('Weapon: ' + this.weapon.name + ' (' + this.weapon.minDamage + '-' + this.weapon.maxDamage + ')');
    console.log('Armor: ' + this.armor.name + ' has a ' + Math.floor((this.armor.absorb * 100)) + '% absorption.');
  }
}

// Hero Constructor
var Hero = function(name, health, strength, gold, weaponName, weaponMin, weaponMax, armorName, armorAbsorb) {
  this.name = name;
  this.health = health;
  this.strength = strength;
  this.gold = gold;
  this.weapon = new Weapon(weaponName, weaponMin, weaponMax)
  this.armor = new Armor (armorName, armorAbsorb)
  this.isAlive = function() {
      return this.health > 0;
  }
  this.print = function () {
    console.log('Name: ' + this.name);
    console.log('Health: ' + this.health);
    console.log('Strength: ' + this.strength);
    console.log('Gold: ' + this.gold);
    console.log('Weapon: ' + this.weapon.name + ' (' + this.weapon.minDamage + '-' + this.weapon.maxDamage + ')');
    console.log('Armor: ' + this.armor.name + ' has a ' + Math.floor((this.armor.absorb * 100)) + '% absorption.');
  }
}

// Create our heros
var heros = []
heros.push(new Hero("Good Dude", 450, 10, randomInRange(300, 750), "Hero Long Sword", randomInRange(2, 4), randomInRange(6, 8), "Cloth Rags", .07))
heros.push(new Hero("Sucha Good Dude", 350, 20, randomInRange(400, 850), "Hero Short Sword", randomInRange(3, 5), randomInRange(7, 9), "Cloth Rags", .08))
heros.push(new Hero("Epicly Good Dude", 250, 30, randomInRange(500, 950), "Hero Mace", randomInRange(4, 6), randomInRange(8, 10), "Hero Cloth Rags", .09))

// Create our game
var game = [];
var level1 = [];
var level2 = [];
var level3 = [];

level1.push(new Monster("Bad Dude", 50, 20, randomInRange(10, 50), "Jagged Dagger", randomInRange(1, 3), randomInRange(4, 5), "Cloth Rags", .05))
level1.push(new Monster("Really Bad Dude", 75, 35, randomInRange(20, 60), "Sharp Dagger", randomInRange(2, 4), randomInRange(5, 7), "Cloth Rags", .06))
level1.push(new Monster("REALLY Bad Dude", 100, 55, randomInRange(50, 80), "Piercing Dagger", randomInRange(3, 5), randomInRange(6, 8), "Cloth Rags", .07))
level1.push(new Monster("BOSS of Bad Dudes", 150, 70, 125, "Piercing Dagger", randomInRange(6, 8), randomInRange(9, 11), "Cloth Rags", .1))

level2.push(new Monster("Stanky Dude", 75, 30, randomInRange(20, 60), "Jagged Dagger", randomInRange(5, 10), randomInRange(12, 17), "Cloth Rags", .1))
level2.push(new Monster("Really Stanky Dude", 100, 45, randomInRange(30, 70), "Sharp Dagger", randomInRange(7, 12), randomInRange(14, 19), "Cloth Rags", .12))
level2.push(new Monster("REALLY Stanky Dude", 125, 65, randomInRange(30, 80), "Piercing Dagger", randomInRange(9, 14), randomInRange(16, 21), "Cloth Rags", .14))
level2.push(new Monster("BOSS of Stanky Dudes", 175, 80, 200, "Piercing Dagger", randomInRange(13, 18), randomInRange(20, 25), "Cloth Rags", .16))

level3.push(new Monster("Mean Dude", 100, 40, randomInRange(30, 70), "Jagged Dagger", randomInRange(9, 14), randomInRange(16, 21), "Cloth Rags", .16))
level3.push(new Monster("Really Mean Dude", 125, 55, randomInRange(40, 80), "Sharp Dagger", randomInRange(11, 16), randomInRange(18, 23), "Cloth Rags", .18))
level3.push(new Monster("REALLY Mean Dude", 150, 75, randomInRange(50, 100), "Piercing Dagger", randomInRange(13, 18), randomInRange(20, 25), "Cloth Rags", .20))
level3.push(new Monster("BOSS of Mean Dudes", 250, 150, 300, "Piercing Dagger", randomInRange(17, 22), randomInRange(24, 30), "Cloth Rags", .25))

game.push(level1)
game.push(level2)
game.push(level3)

function resetGame() {
  // Create our heros
  var heros = []
  heros.push(new Hero("Good Dude", 350, 10, randomInRange(300, 750), "Hero Long Sword", randomInRange(2, 4), randomInRange(6, 8), "Cloth Rags", .05))
  heros.push(new Hero("Sucha Good Dude", 250, 20, randomInRange(300, 750), "Hero Short Sword", randomInRange(2, 4), randomInRange(6, 8), "Cloth Rags", .05))
  heros.push(new Hero("Epicly Good Dude", 150, 30, randomInRange(300, 750), "Hero Mace", randomInRange(2, 4), randomInRange(6, 8), "Hero Cloth Rags", .07))

  // Create our game
  var game = [];
  var level1 = [];
  var level2 = [];
  var level3 = [];

  level1.push(new Monster("Bad Dude", 50, 20, randomInRange(10, 50), "Jagged Dagger", randomInRange(1, 3), randomInRange(4, 5), "Cloth Rags", .05))
  level1.push(new Monster("Really Bad Dude", 75, 35, randomInRange(20, 60), "Sharp Dagger", randomInRange(2, 4), randomInRange(5, 7), "Cloth Rags", .06))
  level1.push(new Monster("REALLY Bad Dude", 100, 55, randomInRange(50, 80), "Piercing Dagger", randomInRange(3, 5), randomInRange(6, 8), "Cloth Rags", .07))
  level1.push(new Monster("BOSS of Bad Dudes", 150, 70, 125, "Piercing Dagger", randomInRange(6, 8), randomInRange(9, 11), "Cloth Rags", .1))

  level2.push(new Monster("Stanky Dude", 75, 30, randomInRange(20, 60), "Jagged Dagger", randomInRange(5, 10), randomInRange(12, 17), "Cloth Rags", .1))
  level2.push(new Monster("Really Stanky Dude", 100, 45, randomInRange(30, 70), "Sharp Dagger", randomInRange(7, 12), randomInRange(14, 19), "Cloth Rags", .12))
  level2.push(new Monster("REALLY Stanky Dude", 125, 65, randomInRange(30, 80), "Piercing Dagger", randomInRange(9, 14), randomInRange(16, 21), "Cloth Rags", .14))
  level2.push(new Monster("BOSS of Stanky Dudes", 175, 80, 200, "Piercing Dagger", randomInRange(13, 18), randomInRange(20, 25), "Cloth Rags", .16))

  level3.push(new Monster("Mean Dude", 100, 40, randomInRange(30, 70), "Jagged Dagger", randomInRange(9, 14), randomInRange(16, 21), "Cloth Rags", .16))
  level3.push(new Monster("Really Mean Dude", 125, 55, randomInRange(40, 80), "Sharp Dagger", randomInRange(11, 16), randomInRange(18, 23), "Cloth Rags", .18))
  level3.push(new Monster("REALLY Mean Dude", 150, 75, randomInRange(50, 100), "Piercing Dagger", randomInRange(13, 18), randomInRange(20, 25), "Cloth Rags", .20))
  level3.push(new Monster("BOSS of Mean Dudes", 250, 150, 300, "Piercing Dagger", randomInRange(17, 22), randomInRange(24, 30), "Cloth Rags", .25))

  game.push(level1)
  game.push(level2)
  game.push(level3)
}

// Attack functions
function heroAttackMonster(theHero, theMonster) {
  if(theHero.isAlive()){

    var attackAmount = Math.floor((theHero.strength + randomInRange(theHero.weapon.minDamage, theHero.weapon.maxDamage)) * (1 - theMonster.armor.absorb));

    theMonster.health -= attackAmount;
    console.log("\n");
    console.log("The " + theHero.name + " attacks " + theMonster.name + " for " + attackAmount + " damage." );

    if (!theMonster.isAlive()) {
      theHero.gold += theMonster.gold;
    }
  }
  else {
    console.log("\n");
    console.log("The Hero is Dead");
  }
}

var monsterAttackHero = function(theHero, theMonster) {
  if (theMonster.isAlive()) {
    var attackAmount = Math.floor((theMonster.strength + randomInRange(theMonster.weapon.minDamage, theMonster.weapon.maxDamage)) * (1 - theHero.armor.absorb));

    theHero.health -= attackAmount;
    console.log("\n");
    console.log("The " + theMonster.name + " attacks " + theHero.name + " for " + attackAmount + " damage." );
    theHero.gold -= attackAmount;
    theMonster.gold += attackAmount;
  }
  else {
    console.log("\n");
    console.log("The Monster is Dead");
  }
}

// Use this function to get a random number within a range.
function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Printing Hero Stats
function printHeros() {
  for (var i = 0; i < heros.length; i++) {
    console.log('\n');
    console.log('----------');
    console.log('Hero Stats #' + i);
    console.log('----------');
    heros[i].print();
  }
}
printHeros()

// Printing Monster Stats
function printMonsters() {
  for (var i = 0; i < game[currentLevel].length; i++) {
    console.log('\n');
    console.log('----------');
    console.log('Monster Stats #' + i);
    console.log('----------');
    game[currentLevel][i].print();
  }
}
printMonsters()

// Create shop item is our Weapon, Armor, and Heal Constructors up top
// Print item is print method within those Constructors

function updateShopItem(index, name, min, max, cost) {
  shop.splice(index, 1, createWeapon(name, min, max, cost))
}

function deleteShopItem(index){
  shop.splice(index, 1)
}

// Creating and populating our shop with Weapons, Armor, and Heal Potions
var shop = [];
shop.push(new Weapon("Shimmering Short Sword", 6, 12, 50))
shop.push(new Weapon("Pristine Short Sword", 6, 15, 80))
shop.push(new Weapon("Dull Long Sword", 12, 30, 150))
shop.push(new Weapon("Pristine Long Sword", 20, 40, 250))
shop.push(new Weapon("Fortified Claymor", 40, 60, 500))

shop.push(new Armor("Sturdy Leather", .14, 200))
shop.push(new Armor("Worn Studded", .24, 300))
shop.push(new Armor("Fortified Chain", .32, 450))
shop.push(new Armor("Shimmering Plate", .45, 600))

shop.push(new Heal("Small Heals", 20, 10))
shop.push(new Heal("Medium Heals", 50, 25))
shop.push(new Heal("Large Heals", 100, 50))
shop.push(new Heal("Huge Heals", 250, 125))
shop.push(new Heal("Full Heals", 500, 250))

// Printing the shop
var printShop = function(){
  console.log('-------------');
  console.log('Shop Items');
  console.log('-------------');
  for (var i = 0; i < shop.length; i++) {
    console.log('Item #' + i);
    shop[i].print()
  }
}

// How to purchase an item from the shop.
function buyItem(itemIndex) {
  var shopItem = shop[itemIndex];

  if(shopItem.type == "Weapon") {
    if (heros[currentHeroIndex].gold >= shopItem.cost) {
      heros[currentHeroIndex].weapon = shopItem;
      heros[currentHeroIndex].gold -= shopItem.cost;
      shop.splice(itemIndex, 1);
      console.log('Thank you for your busines. You have no equipped the ' + shopItem.name);
    }
    else {
      console.log('You are too poor!');
    }
  }
  else if (shopItem.type == "Armor") {
    if (heros[currentHeroIndex].gold >= shopItem.cost) {
      heros[currentHeroIndex].armor = shopItem;
      heros[currentHeroIndex].gold -= shopItem.cost;
      shop.splice(itemIndex, 1);
      console.log('Thank you for your busines. You have no equipped the ' + shopItem.name);
    }
    else {
      console.log('You are too poor!');
    }
  }
  else {
    if (heros[currentHeroIndex].gold >= shopItem.cost) {
      heros[currentHeroIndex].health += shopItem.health;
      heros[currentHeroIndex].gold -= shopItem.cost;
      console.log('You have been healed for ' + shopItem.health);
    }
    else {
      console.log('You are too poor!');
    }
  }
}

// Attack or Shop prompt for the user.
function attackOrShop(heroIndex, monsterIndex, level) {
  var attackOrShop = prompt('(A)ttack or (S)hop');
  if (attackOrShop == 'A') {
    heroAttackMonster(heros[heroIndex], game[level][monsterIndex]);
    monsterAttackHero(heros[heroIndex], game[level][monsterIndex]);
  }
  if (attackOrShop == 'S') {
    printShop();
    var itemOrExit = prompt('Select an item# or type E to exit');
    if (itemOrExit == 'E') {
      console.log('Exited');
    }
    else {
      buyItem(itemOrExit);
    }
  }
}

// Resetting the Game before we play.
resetGame()

var currentHeroIndex = parseInt(prompt("Which Hero would you like to use?"))

while(heros[currentHeroIndex].health > 0 && currentLevel < game.length) {
  console.log('\n');
  console.log('----------');
  console.log('Monster Stats');
  console.log('----------');
  game[currentLevel][currentMonsterIndex].print();

  console.log('\n');
  console.log('----------');
  console.log('Hero Stats');
  console.log('----------');
  heros[currentHeroIndex].print();

  attackOrShop(currentHeroIndex, currentMonsterIndex, currentLevel);

  if (game[currentLevel][currentMonsterIndex].isAlive() == false) {
      currentMonsterIndex++;
  }

  if (currentMonsterIndex >= game[currentLevel].length){
    currentMonsterIndex = 0
    currentLevel++
    heros[currentHeroIndex].strength += (2 * currentLevel)
    heros[currentHeroIndex].health += (30 * currentLevel)
    console.log("You have gained " + (2 * currentLevel) + " stregth!");
    console.log("You have gained " + (30 * currentLevel) + " health!");
  }

  if (currentLevel > game.length - 1) {
    console.log('\n');
    console.log('----------');
    console.log('Hero Stats');
    console.log('----------');
    heros[currentHeroIndex].print();
    console.log('WINNER');
  }

  if (heros[currentHeroIndex].health <= 0) {
    console.log('\n');
    console.log('----------');
    console.log('Hero Stats');
    console.log('----------');
    heros[currentHeroIndex].print();
    console.log('LOSER');
  }
}
