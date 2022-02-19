/*
  Do not change the line below. If you'd like to run code from this file, you may use the `examplePokemon` variable below to gain access to an array of Pokemon.
  Keep in mind that your functions must still have and use a parameter for accepting all Pokemon.
*/
const examplePokemon = require("../data/poke");
// Do not change the line above.

/**
 * getAllPokemonNames()
 * -----------------------------
 * Returns all Pokemon names from an array of Pokemon. If the inputted `pokemon` array is empty, return `[]`.
 * @param {Object[]} pokemon - An array of Pokemon. See the `poke.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are Pokemon names.
 *
 * EXAMPLE:
 *  getAllPokemonNames(pokemon);
 *  //> [
  'Bulbasaur',  'Ivysaur',    'Venusaur',   'Charmander', 'Charmeleon',
  'Charizard',  'Squirtle',   'Wartortle',  'Blastoise',  'Caterpie',
  'Weedle',     'Pidgey',     'Pidgeotto',  'Pidgeot',    'Spearow',
  'Fearow',     'Arbok',      'Pikachu',    'Raichu',     'Sandshrew',
  'Sandslash',  'Clefairy',   'Clefable',   'Vulpix',     'Ninetales',
  'Jigglypuff', 'Wigglytuff', 'Paras',      'Parasect',   'Venonat',
  'Venomoth',   'Diglett',    'Dugtrio',    'Meowth',     'Persian',
  'Psyduck',    'Golduck',    'Mankey',     'Primeape',   'Growlithe',
  'Arcanine',   'Poliwag',    'Poliwhirl',  'Poliwrath',  'Abra',
  'Kadabra',    'Alakazam',   'Bellsprout', 'Weepinbell', 'Victreebel',
  'Geodude',    'Graveler',   'Golem',      'Slowpoke',   'Slowbro',
  'Shellder',   'Cloyster',   'Gastly',     'Haunter',    'Onix',
  'Drowzee',    'Hypno',      'Krabby',     'Kingler',    'Voltorb',
  'Electrode',  'Exeggcute',  'Exeggutor',  'Cubone',     'Marowak',
  'Hitmonlee',  'Hitmonchan', 'Koffing',    'Weezing',    'Chansey',
  'Tangela',    'Horsea',     'Goldeen',    'Seaking',    'Staryu',
  'Starmie',    'Mr. Mime',   'Scyther',    'Jynx',       'Pinsir',
  'Tauros',     'Magikarp',   'Gyarados',   'Lapras',     'Ditto',
  'Porygon',    'Snorlax',    'Articuno',   'Zapdos',     'Moltres',
  'Dratini',    'Dragonair',  'Dragonite',  'Mewtwo'
];
 */
function getAllPokemonNames(examplePokemon) {

  //create a variable to store pokemon names
  let pokemonNames = [];

  //loop through the array and pull out the name
   for(let pokemon of examplePokemon){
    pokemonNames.push(pokemon.name)
  }

  return pokemonNames;
};

/**
 * getHighestAttackStatScore()
 * -----------------------------
 * Returns the highest `attack` stat score among all Pokemon. If the inputted `pokemon` array is empty, return `0`.
 * @param {Object[]} pokemon - An array of Pokemon. See the `poke.js` file for an example of this array.
 * @returns {number} The highest `attack` stat of all Pokemon.
 *
 * EXAMPLE:
 *  getHighestAttackStatScore(pokemon);
 *  //> 134
 */
function getHighestAttackStatScore(examplePokemon) {
  //create variable to hold pokemon stats value
 
  let highestAttack = 0;

  //loop through the pokemon array and then loop through the stats array to compare attack stats to temp var
  //replace temp var with new highest
  for(let i = 0; i < examplePokemon.length; i++){

    for(let j = 0; j < examplePokemon[i].stats.length; j++){

      if(examplePokemon[i].stats[j].category === 'attack'){
        
        if(examplePokemon[i].stats[j].value > highestAttack){
          highestAttack = examplePokemon[i].stats[j].value;
        } 
      }
    }
  }
   return highestAttack;
};

/**
 * getAverageTotalStatScore()
 * -----------------------------
 * Averages all of the `total` stat scores from all Pokemon and returns it, as a number. If the inputted `pokemon` array is empty, return `0`.
 * @param {Object[]} pokemon - An array of Pokemon. See the `poke.js` file for an example of this array.
 * @returns {number} The average `total` stat across all Pokemon.
 *
 * EXAMPLE:
 *  getAverageTotalStatScore(pokemon);
 *  //> 407.22
 */
function getAverageTotalStatScore(examplePokemon) {
  if(examplePokemon.length === 0){
    return 0;
  }

  //loop through the pokemon array, pull out the 'total' stat value and push into new array
  //to get the average - add all of the numbers in the new array and divide by .length
  let totalStatValues = [];

  for(let i = 0; i < examplePokemon.length; i++){
    for(let j = 0; j < examplePokemon[i].stats.length; j++){
      if(examplePokemon[i].stats[j].category === 'total'){
        totalStatValues.push(examplePokemon[i].stats[j].value)
      }
    }
  }

  //create sum variable
  let statSum = 0;

  for(let i = 0; i < totalStatValues.length; i++){
    statSum += totalStatValues[i]
  }

  return statSum / totalStatValues.length
}

//Kalilah's example
// if (!pokemon.length) {
//   return 0;
// }
// let total = 0;
// for (let i = 0; i < pokemon.length; i++) {
//   total += pokemon[i].stats[0].value;
// }
// return total / pokemon.length;
// }


module.exports = {
    getAllPokemonNames,
    getHighestAttackStatScore,
    getAverageTotalStatScore
};