var greet = require("./greet");
greet();

var greet2 = require("./greet1").greet;
greet2();

var greet3 = require("./greet3");
greet3.greet();
greet3.greeting = "Hello Changed Three";

var greet3b = require("./greet3");
greet3b.greet();

var Greet4 = require("./greet4");
var grtr = new Greet4();
grtr.greet();

var greet5 = require("./greet5");
greet5.greet();