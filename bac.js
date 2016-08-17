//Project 1
var colors = require('colors');
var clear = require('clear');
var prompt = require('prompt-sync')();

 function bac(){
   clear();
   var name = String(prompt('What is your name? '));
   var A = Number(prompt('How many ounces of Medalla did you had? '));
   var W = Number(prompt('Enter your weight? '));
   var H = Number(prompt('How many hours has passed since your last Medalla? '));
   var r = Number(prompt('Gender: insert 0 for male or 1 for female. '));
   if (r === 0) {
       r = 0.73
   } else {
       r = 0.66;
   }
   var result = (A * 5.14 / W * r) - .015 * H;
   var decimal = result.toPrecision(2);
   console.log(name + ' your BAC is ' + decimal);
   if (result < 0.8) {
       console.log('You can drive'.green);
   } else {
       console.log('You cannot drive'.red);
   }
 }

module.exports = bac;
