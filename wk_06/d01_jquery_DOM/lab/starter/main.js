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

// code...
