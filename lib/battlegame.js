'use strict';

//////////////////////////////////////////////////////////////

//////////////////// WELCOME TO BATTLE.JS ////////////////////

//////////////////////////////////////////////////////////////


/* Create an object to represent an infantry unit, and store it in 'infantry'. */
var infantry = {
  health: 2,
  speed: 2,
  attack: function(defender) {
    console.log('HIT');
    defender.health -= 1;
  }
};

var artillery = {};
/* Create an object to represent an artillery unit, and store it in 'artillery'. written in a different way, but the same logic as the 'infantry' and 'cavalry'.*/
artillery.health = 2;
artillery.speed = 1;
artillery.attack = function(defender) {
  console.log('HIT');
  defender.health -= 3
};

/* Create an object to represent a cavalry unit, and store it in 'cavalry'. */
var cavalry = {
  health: 1,
  speed: 3,
  attack: function(defender) {
    console.log('HIT');
    defender.health -= 2;
  }
 };


///////////////////////////BONUS////////////////////////////

/* Write a standalone function (or a method on an object - up to you) called 'battle' which takes two units as arguments. 'battle' should pit the two characters against each other until one of them dies ('health' falls to 0 or below). The character with the higher 'speed' value goes first, but each unit has only a 50% chance of successfully attacking the other. Once one of the units dies, the function should return the surviving unit.*/
/* If you attempt this, please put the name of your method as the value for 'bonus', below, instead of null.*/
var fiftyChance = function() {
  var r = Math.random();
  return r < 0.5 ? true : false;
};

var battle = function(character1, character2 ) {
  var survivor;
  while (character1.health > 0 && character2.health >0) {
    if (character1.speed > character2.speed) {
    // faster character goes first
      if (fiftyChance() === true) {
        character1.attack(character2);
      } else {
        console.log("no attack");
      }
    }
    else {
    //character2 is faster and goes first
      if (fiftyChance() === true) {
        character2.attack(character1);
      } else {
        console.log("no attack");
      }
    }
  }
  if (character1.health === 0 && character2.health > 0) {
    survivor = character2;
  }
  if (character2.health === 0 && character1.health > 0) {
    survivor = character1;
  }
  return survivor;
}

console.log(battle(infantry, cavalry));

//for testing

module.exports = {
  infantry: infantry,
  artillery: artillery,
  cavalry: cavalry,
  battle: battle
};
