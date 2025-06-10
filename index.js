// Valid Pokémon types
const validTypes = ["Fire", "Water", "Grass", "Poison", "Psychic", "Metal"];

// grab the argument from the command line
const args = process.argv.slice(2);
const chosenType = args[0];

// if no type is provided
if (!chosenType) {
  console.log("\x1b[32m%s\x1b[0m", "Please choose a Pokémon type.");
  console.log("Available types: " + validTypes.join(", "));
  process.exit(1);
}

// chosen type
console.log(`You chose: ${chosenType} type Pokémon!`);

// have to write the type and console has to acknowledge it.

// computer choses a random one too

// battle happens

// many if then.

// obtain result of the fight.
