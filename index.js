// require gets a package from node_modules (unless something else is specified), for example:
// const utils = require('./utils');

// variable (that's a function) that's calling a library to assign a random color
const randomColor = require('randomcolor');

// variable that's calling a library that's coloring strings in the console
const createColor = require('my-colors');

// Variant 1
// this variable is calling the function which returns a random color in hex (=string representing a color)
// const askForColor = randomColor({
//   luminosity: process.argv[2],
//   hue: process.argv[3],
// });

// Variant 2
// Refactoring of my code: changing my code around without changing what it's going! = Make it Tchibo!
// Golden Rule of Refactoring: Straight after refactoring: run code again to see if it still works!
// const userChoice = {
//   luminosity: process.argv[2],
//   hue: process.argv[3],
// };
// const askForColor = randomColor(userChoice);

// Variant 3
// another refactoring:
const userChoiceLuminosity = process.argv[2];
let userChoiceHue = process.argv[3];
// console.log('You asked for luminosity...' + userChoiceLuminosity);
if (
  userChoiceLuminosity === 'bright' ||
  userChoiceLuminosity === 'light' ||
  userChoiceLuminosity === 'dark'
) {
  console.log('You asked for luminosity, so... I added a color!');
} else {
  userChoiceHue = process.argv[2];
  console.log('This ain`t no luminosity, but it`s ' + userChoiceHue + '!');
}
const userChoice = {
  luminosity: userChoiceLuminosity,
  hue: userChoiceHue,
};
const askForColor = randomColor(userChoice);

// if (askForColor === userChoiceLuminosity + userChoiceHue)

// createColor is a function that needs a color and returns a function that colors the string | everything I call with this function, will call a color that is colored from line 2 via line 11
const colorInLines = createColor(askForColor);

// colorInLines = function that's returned
// color = only if I write 'color' will it output the actual color it describes
const endResult = colorInLines(`################################
################################
################################
#####                      #####
#####        ${askForColor}       #####
#####                      #####
################################
################################
################################`);

console.log(endResult);

// It should be able to not only accept the command itself, but also the request for:
// hue (e.g. green or red or blue)
// luminosity (e.g. light or dark)
// ...and then generate random colors that match those choices.
// What could be the next steps?!

// if(process.argv[2]){}
// const userInput = process.argv[2];
// console.log(userInput);
// console.log(endResult);
