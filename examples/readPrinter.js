var printer = require("../lib");
console.log(printer.getPrinters());
// console.log(printer.readPrinter("GP-58MB Series"));

var buf = printer.readPrinter("GP-58MB Series");
console.log(buf);