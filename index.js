var bac = require('./bac');
var help = require('./help');
var argument = process.argv[2];
switch (argument) {
    case 'help':
        console.log(help());
        break;
    case 'bac':
        console.log(bac());
        break;
    default:
        console.log("Can't find command");
        break;
}
