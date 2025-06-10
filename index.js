// format the battle with colors:
const colors = {
  Reset: "\x1b[0m",
  Red: "\x1b[31m",
  Green: "\x1b[32m",
  Yellow: "\x1b[33m",
  Blue: "\x1b[34m",
  Magenta: "\x1b[35m",
};

// added function to make pokemons type have colors.
// better than adding it to each string of the array. (problem by reading)
// returns that type wrapped in color.
function getColor(type) {
  switch (type) {
    case "Fire":
      return colors.Red + type + colors.Reset;
    case "Water":
      return colors.Blue + type + colors.Reset;
    case "Grass":
      return colors.Green + type + colors.Reset;
    case "Lightning":
      return colors.Yellow + type + colors.Reset;
    case "Fighting":
      return colors.Reset + type;
    case "Psychic":
      return colors.Magenta + type + colors.Reset;
    default: // when type doesnt match anything, text color reset.
      return type;
  }
}

// Valid Pokémon types
const validTypes = [
  "Fire",
  "Water",
  "Grass",
  "Lightning",
  "Fighting",
  "Psychic",
];

// grab the argument from the command line
const args = process.argv.slice(2);
let chosenType = args[0]; // is a let, to be transformed into Capitalized text form.

// CHATGPT did this: avoid mistakes at writting
if (chosenType) {
  chosenType =
    chosenType.charAt(0).toUpperCase() + chosenType.slice(1).toLowerCase();
  // to convert any writting style to Capizalized text form.
}

// if no type is provided
if (!chosenType) {
  console.log(colors.Yellow + "Please choose a Pokémon type." + colors.Reset);
  console.log("Available types: " + validTypes.join(", "));
  process.exit(1);
}

// chosen type
console.log(`You chose: ${getColor(chosenType)} type Pokémon!`);

// if the type is invalid
if (!validTypes.includes(chosenType)) {
  console.log(
    colors.Red +
      "That Pokemon Type does not exist in this Node Game!" +
      colors.Reset
  );
  console.log("The available types are: " + validTypes.join(", "));
  process.exit(1);
}

// computer choses a random one too
const randomIndex = Math.floor(Math.random() * validTypes.length); // Math.random() generates a random decimal between 0 and 1.
const computerChoice = validTypes[randomIndex]; // the computerChoice will be the # position of the array validTypes.
console.log("Computer chose: " + getColor(computerChoice));

// set rules of winning
// happy to not have to write specific If for each
const winningRules = {
  Fire: ["Grass", "Psychic"],
  Water: ["Fire", "Lightning"],
  Grass: ["Water", "Fighting"],
  Lightning: ["Water", "Grass"],
  Fighting: ["Lightning", "Psychic"],
  Psychic: ["Fighting", "Grass"],
};

console.log(); //space

// battle happens (basic version)
if (chosenType === computerChoice) {
  // if is it completely the same.
  console.log("It's a tie!");
} else if (winningRules[chosenType].includes(computerChoice)) {
  // if the use wins
  console.log("What a battle. You win!");
} else {
  console.log("Computer wins!");
}

console.log(); //space

// battle results expanded.
// results have type text with the color.
if (chosenType === computerChoice) {
  console.log(
    colors.Yellow +
      "It's a tie! Both Pokemon types are equally strong" +
      colors.Reset
  );
} else if (winningRules[chosenType].includes(computerChoice)) {
  console.log(
    colors.Green +
      `What a battle! You win! ${getColor(
        chosenType
      )}  type doubles the damage to ${getColor(
        computerChoice
      )}  type. You totally win!` +
      colors.Reset
  );
} else {
  console.log(
    colors.Red +
      `Ouch! You lose. ${getColor(
        computerChoice
      )} type deals double damage to your ${getColor(
        chosenType
      )} type. Your Pokémon faints!` +
      colors.Reset
  );
}
