// Allowed Pokémon types (6 basic ones)
const validTypes = [
  "Fire",
  "Water",
  "Grass",
  "Lightning",
  "Psychic",
  "Fighting",
];

// grab the argument from the command line
const args = process.argv.slice(2);
const chosenType = args[0];

// if no type is provided
if (!chosenType) {
  console.log("Please choose a Pokémon type.");
  console.log("Available types: " + validTypes.join(", "));
  process.exit(1);
}

// Success!
console.log(`✅ You chose: ${chosenType} type Pokémon!`);
