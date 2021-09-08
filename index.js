const randomColor = require('randomcolor'); /*var that's calling a library, this var is a function*/
const createColor = require('my-colors'); /*var that's calling a library that's coloring strings in the console*/

const color = randomColor({
  luminosity: 'random',
  hue: 'random'
}) /*this var is calling the function which returns a random color in hex(string representing a color)*/

const colorInLines = createColor(color); /*createColor is a function htat needs a color and returns a function that colors the string | everythign i call with this function, will calla color that is colored from line 1 via line 4 */

const endResult = colorInLines(`################################
################################
################################
#####                      #####
#####        ${color}       #####
#####                      #####
################################
################################
################################`) /* colorInLines = function that's returned; color = only if I write 'color' will it output the actual color it describes*/

/*if(process.argv[2]){
  console.log(endResult);
}*/
const userInput = process.argv[2];
console.log(userInput);


//console.log(endResult);

/*
What could be the next steps?!
*/
