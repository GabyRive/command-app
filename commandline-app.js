//Project 1
var argument = process.argv[2];
var colors = require('colors');
var clear = require('clear');
switch (argument) {
    case 'help':
        console.log("This is an BAC app that will give you a result.".yellow);
        break;
    case 'bac':
        clear();
        var prompt = require('prompt-sync')();
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
        var result = (A * 5.14/W * r) - .015 * H;
        var decimal = result.toPrecision(2);
        console.log(name + ' your BAC is ' + decimal);
        if (result < 0.8) {
            console.log('You can drive'.green);
        } else {
            console.log('You cannot drive'.red);
        }
        break;
    default:
        console.log("Can't find command");
        break;
}
