//CommonJS, every file is module by default
//Modules - Encapsulated Code (only share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils');
const uncleBobby = require('./6-alternative-flavor');
require('./7-mind-grenade')

sayHi('rachel');
sayHi(names.john);
sayHi(names.peter);