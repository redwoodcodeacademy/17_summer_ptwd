////////////////////////////////////////////////////////////////////////
/////////////////    HOMEWORK PROMPT AT THE BOTTOM    /////////////////
//////////////////////////////////////////////////////////////////////

var heros = []
var monsters = []
var shop = []

// Use this function to get a random number within a range.
function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Weapon Constructor
var Weapon = function(name, min, max, cost) {
  this.name = name;
  this.minDamage = min;
  this.maxDamage = max;
  this.cost = cost || 50;
  this.type = "Weapon"
}

// Armor Constructor
var Armor = function(name, absorb, cost){
  this.name = name;
  this.absorb = absorb;
  this.cost = cost || 50;
  this.type = "Armor"
}

// Heal Potion Constructor
var Heal = function(name, health, cost){
  this.name = name;
  this.health = health;
  this.cost = cost;
  this.type = "Heal"
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

// Create our hero
heros.push(new Hero("Good Dude", 450, 10, randomInRange(300, 750), "Hero Long Sword", randomInRange(2, 4), randomInRange(6, 8), "Cloth Rags", .07))
heros.push(new Hero("Sucha Good Dude", 350, 20, randomInRange(400, 850), "Hero Short Sword", randomInRange(3, 5), randomInRange(7, 9), "Cloth Rags", .08))
heros.push(new Hero("Epicly Good Dude", 250, 30, randomInRange(500, 950), "Hero Mace", randomInRange(4, 6), randomInRange(8, 10), "Hero Cloth Rags", .09))

// Create our monsters
monsters.push(new Monster("Bad Dude", 50, 20, randomInRange(10, 50), "Jagged Dagger", randomInRange(1, 3), randomInRange(4, 5), "Cloth Rags", .05))
monsters.push(new Monster("Really Bad Dude", 75, 35, randomInRange(20, 60), "Sharp Dagger", randomInRange(2, 4), randomInRange(5, 7), "Cloth Rags", .06))
monsters.push(new Monster("REALLY Bad Dude", 100, 55, randomInRange(50, 80), "Piercing Dagger", randomInRange(3, 5), randomInRange(6, 8), "Cloth Rags", .07))
monsters.push(new Monster("BOSS of Bad Dudes", 150, 70, 125, "Piercing Dagger", randomInRange(6, 8), randomInRange(9, 11), "Cloth Rags", .1))

// Create our Shop
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

// To check and make sure the code ran properly and so we can see what we have access to.
console.log(heros);
console.log(monsters);
console.log(shop);

// DOM MANIPULATION

var container = $('.container')
var herosContainer = $('.heros')
var monstersContainer = $('.monsters')
var shopContainer = $('.shop')

container.prepend("<h1 class='header blackText'>RPG - DAY OF THE DOM</h1>")
herosContainer.prepend("<h1 class='sectionHeading blackText'>HEROS</h1>")
monstersContainer.prepend("<h1 class='sectionHeading blackText'>MONSTERS</h1>")
shopContainer.prepend("<h1 class='sectionHeading blackText'>SHOP</h1>")


// Building HEROS

for (var i = 0; i < heros.length; i++) {
  var heroCol = $("<div class='col-md-3'></div>")
  var heroContent = $("<div class='contentCard greenBG'></div>")
  var heroHeader = $("<h3 class='header'> " + heros[i].name + "</h3>")
  var heroHealth = $("<p><strong>Health:</strong> " + heros[i].health + "</p>")
  var heroStrength = $("<p><strong>Strength:</strong> " + heros[i].strength + "</p>")
  var heroGold = $("<p><strong>Gold:</strong> " + heros[i].gold + "</p>")
  var heroWeapon = $("<p><strong>Weapon:</strong> " + heros[i].weapon.name + " ("+ heros[i].weapon.minDamage + " - " + heros[i].weapon.maxDamage + ")</p>")
  var heroArmor = $("<p><strong>Armor:</strong> " + heros[i].armor.name + " (" + Math.floor((heros[i].armor.absorb*100)) + "%) </p>")

  heroContent.append(heroHeader)
  heroContent.append(heroHealth)
  heroContent.append(heroStrength)
  heroContent.append(heroGold)
  heroContent.append(heroWeapon)
  heroContent.append(heroArmor)

  heroCol.append(heroContent)

  herosContainer.append(heroCol)
}

// Building MONSTERS

for (var i = 0; i < monsters.length; i++) {
  var monsterCol = $("<div class='col-md-3'></div>")
  var monsterContent = $("<div class='contentCard redBG col-md-3'></div>")
  var monsterHeader = $("<h3 class='header'> " + monsters[i].name + "</h3>")
  var monsterHealth = $("<p><strong>Health:</strong> " + monsters[i].health + "</p>")
  var monsterStrength = $("<p><strong>Strength:</strong> " + monsters[i].strength + "</p>")
  var monsterGold = $("<p><strong>Gold:</strong> " + monsters[i].gold + "</p>")
  var monsterWeapon = $("<p><strong>Weapon:</strong> " + monsters[i].weapon.name + " ("+ monsters[i].weapon.minDamage + " - " + monsters[i].weapon.maxDamage + ")</p>")
  var monsterArmor = $("<p><strong>Armor:</strong> " + monsters[i].armor.name + " (" + Math.floor((monsters[i].armor.absorb*100)) + "%) </p>")

  monsterContent.append(monsterHeader)
  monsterContent.append(monsterHealth)
  monsterContent.append(monsterStrength)
  monsterContent.append(monsterGold)
  monsterContent.append(monsterWeapon)
  monsterContent.append(monsterArmor)

  monsterCol.append(monsterContent)

  monstersContainer.append(monsterCol)
}

// Building SHOP

for (var i = 0; i < shop.length; i++) {
  var itemCol = $("<div class='col-md-3'></div>")
  var itemContent = $("<div class='contentCard col-md-3'></div>")
  var itemHeader = $("<h3 class='header'> " + shop[i].type + "</h3>")
  var itemName = $("<p><strong>Health:</strong> " + shop[i].name + "</p>")
  var itemCost = $("<p><strong>Gold:</strong> " + shop[i].cost + "</p>")

  itemContent.append(itemHeader)
  itemContent.append(itemName)

  if (shop[i].type == "Weapon"){
    var itemWeapon = $("<p><strong>Dmg:</strong> " + shop[i].name + " ("+ shop[i].minDamage + " - " + shop[i].maxDamage + ")</p>")
    itemContent.append(itemWeapon)
    itemContent.addClass("grayBG")
  }
  else if (shop[i].type == "Armor") {
    var itemArmor = $("<p><strong>Absorb:</strong> " + shop[i].name + " (" + Math.floor((shop[i].absorb*100)) + "%) </p>")
    itemContent.append(itemArmor)
    itemContent.addClass("lightGrayBG")

  }
  else {
    var itemHeal = $("<p><strong>Heals:</strong> " + shop[i].health + "</p>")
    itemContent.append(itemHeal)
    itemContent.addClass("lighterGrayBG")
  }

  itemContent.append(itemCost)

  itemCol.append(itemContent)

  shopContainer.append(itemCol)
}

/////////////////////////////////////////////////////////
/////////////////    HOMEWORK PROMPT   /////////////////
///////////////////////////////////////////////////////

// Add buttons of each of our heros with the text "Select Hero"
// Once a user selects a hero hide the other heros that they did not select and hide the button that they clicked on.

// Add buttons on each of our monsters with the text "Attack!"
// The user can not click these buttons until they have first selected a Hero.  Display error messages if they attempt.
// Once the user clicks the attack button have the hero attack that monster and if the monster is still alive have the monster fight back.
// If a Monster is dead remove the monster from the DOM.

// Add buttons on each of our shop items with the text "Buy!"
// The user can not click these buttons until they have first selected a Hero.  Display error messages if they attempt.
// Once the user clicks the buy button if the hero has enough money then make the successful purchase.
// If the Hero doesn't have enough money then display an appropriate error message.
// Once an item is purchased remove it from the DOM unless its a "Heal" item.  Those can be purchased infinitly.

// Hints
// You already wrote a lot of this code in previous labs.  Harvest that code and now impliment it in this assignment.
// You should have a function somewhere called "printPage" whose sole job is to print the hero section, monster section, and shop section.  That function should print the page based on the current state of our model.
