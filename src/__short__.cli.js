#!/usr/bin/env node

var __module__ = require("./__short__");
var program = require('commander');
var pkg = require(__dirname + "/../package.json");

program.version(pkg.version);
program.usage('[options] <args ...>')
program.option('-v, --verbose', 'output verbose information');
program.option('-f, --foo', 'foo without argument');
program.option('-b, --bar <args>', 'bar with argument');
program.parse(process.argv);

// die when called without arguments
if (!program.args.length) {
    program.outputHelp();
    process.exit(1);
}

// create an instance
var __short__ = new __module__(program);

// success
__short__.on("done", function(result) {
    console.log("done:", result);
});

// failure
__short__.on("error", function(err) {
    console.error("error:", err);
    process.exit(1);
});

// progress
__short__.on("info", function(info) {
    if (!program.verbose) return;
    console.log("info:", info);
});

// run the method with arguments
program.args.forEach(function(arg) {
    __short__.__method__(arg);
});