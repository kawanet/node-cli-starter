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

// create an instance
var __short__ = new __module__(program);

// call JavaScript API
var __short__ = new __module__(program);
__short__.on("complete", complete);
__short__.on("error", error);
__short__.on("info", info);
__short__.fetch(url, callback);

// callback function
function callback(err, res) {
    if (err) {
        console.log("failure:", err);
    } else {
        console.log("success:", res.length);
    }
}

// success handler
function complete(res) {
    console.log("complete:");
    if (program.json) {
        var json = JSON.stringify(res);
        util.print(json);
    }
    if (program.text || !program.json) {
        res.forEach(function(url) {
            util.print(url + "\n");
        });
    }
}

// failure handler
function error(err) {
    console.error("error:", err);
    process.exit(1);
}

// progress handler
function info(str) {
    if (program.quiet) return;
    console.log("info:", str);
}
