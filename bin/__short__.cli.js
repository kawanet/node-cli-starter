#!/usr/bin/env node

var __module__ = require("../lib/__short__");
var program = require('commander');
var colors = require("colors");
var pkg = require(__dirname + "/../package.json");

program.version(pkg.version);
program.usage('[options] <args ...>');
program.option('-v, --verbose', 'output verbose messages');
program.option('-f, --foo', 'option foo without arguments');
program.option('-b, --bar <arg>', 'option bar with an argument');
program.parse(process.argv);

// die when called without arguments
if (!program.args.length) {
    program.outputHelp();
    process.exit(1);
}

var arg = program.args.shift();

// call JavaScript API
var __short__ = new __module__(program);
__short__.on("__method__", complete);
__short__.on("error", error);
__short__.on("progress", progress);
__short__.__method__(arg, callback);

// callback function
function callback(err, res) {
    if (err) {
        // console.log("failure:", err);
    } else {
        // console.log("success:", res);
    }
}

// success handler
function complete(res) {
    console.log(res);
}

// failure handler
function error(err) {
    console.error(err.toString().inverse.red);
    process.exit(1);
}

// progress handler
function progress(info) {
    if (!program.verbose) return;
    console.log(info.toString().cyan);
}
