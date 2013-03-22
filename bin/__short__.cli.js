#!/usr/bin/env node

var __module__ = require("../lib/__short__");
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

var arg = program.args.shift();

// call JavaScript API
var __short__ = new __module__(program);
__short__.on("complete", complete);
__short__.on("error", error);
__short__.on("progress", progress);
__short__.__method__(arg, callback);

// callback function
function callback(err, res) {
    if (err) {
        console.log("failure:", err);
    } else {
        console.log("success:", res);
    }
}

// success handler
function complete(res) {
    console.log("complete:", res);
}

// failure handler
function error(err) {
    console.error("error:", err);
    process.exit(1);
}

// progress handler
function progress(info) {
    if (program.quiet) return;
    console.log("progress:", info);
}
