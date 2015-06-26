'use strict';

//////////////////////////////////////////////////////////////

//////////////////// WELCOME TO BATTLE.JS ////////////////////

//////////////////////////////////////////////////////////////

var infantry;
/* Create an object to represent an infantry unit, and store it in 'infantry'. */
infantry = {
  health: 2,
  speed: 2,
  attack: function(character) {
    var strength = 1;
    console.log('HIT');
    return character.health -= strength;
  }
};

var artillery;
/* Create an object to represent an artillery unit, and store it in 'artillery'. */
artillery = {
  health: 2,
  speed: 1,
  attack: function(character) {
    var strength = 3;
    console.log('HIT');
    return character.health -= strength;
  }
 };

var cavalry;
/* Create an object to represent a cavalry unit, and store it in 'cavalry'. */
cavalry = {
  health: 1,
  speed: 3,
  attack: function(character) {
    var strength = 2;
    console.log('HIT');
    return character.health -= strength;
  }
 };


// console.log(infantry.attack(artillery));



var battle = function(character1, character2 ) {
  console.log('HIT');
  // var survivor;
  while (character1.health > 0 && character2.health >0) {
    if (character1.speed > character2.speed) {
      // faster character goes first
      return character1.attack(character2);
    } else {
      return character2.attack(character1);
    }
  }
  // } return survivor;
}

console.log(battle(cavalry, infantry));

///////////////////////////BONUS////////////////////////////

/* Write a standalone function (or a method on an object - up to you) called 'battle' which takes two units as arguments. 'battle' should pit the two characters against each other until one of them dies ('health' falls to 0 or below). The character with the higher 'speed' value goes first, but each unit has only a 50% chance of successfully attacking the other. Once one of the units dies, the function should return the surviving unit.*/
/* If you attempt this, please put the name of your method as the value for 'bonus', below, instead of null.*/
/* Your code begins here. */

/* Your code ends here. */

module.exports = {
  infantry: infantry,
  artillery: artillery,
  cavalry: cavalry,
  battle: battle
};
