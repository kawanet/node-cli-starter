#!/usr/bin/env node

var __module__ = require("./__short__");
var program = require('commander');
var pkg = require(__dirname + "/../package.json");

program.version(pkg.version);
program.usage('[options] <args ...>');
program.option('-q, --quiet', 'suppress messages');
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
__short__.on("complete", function(result) {
    console.log("complete:", result);
});

// failure
__short__.on("error", function(err) {
    console.error("error:", err);
    process.exit(1);
});

// progress
__short__.on("info", function(info) {
    if (program.quiet) return;
    console.log("info:", info);
});

// run the method with arguments
__short__.__method__(program.args);
