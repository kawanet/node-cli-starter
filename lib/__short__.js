/*! __short__.js */

module.exports = __module__;

var util = require("util");
var events = require("events");

function __module__(opts) {
    if (!(this instanceof __module__)) return new __module__(opts);
    events.EventEmitter.call(this);
    this.opts = opts;
}

util.inherits(__module__, events.EventEmitter);

__module__.prototype.error = function(err) {
    if ("string" == typeof err) err = new Error(err);
    this.emit("error", err);
};

__module__.__method__ = function() {
    var __short__ = new __module__();
    __short__.__method__.apply(__short__, arguments);
};

__module__.prototype.__method__ = function(input, callback) {
    if (callback instanceof Function) {
        this.once("complete", function(res) {
            if (callback) callback(null, res);
            callback = null;
        });
        this.once("error", function(err) {
            if (callback) callback(err);
            callback = null;
        });
    }
    if (input == null || input === "") {
        this.error("empty input");
        return;
    }
    this.emit("progress", "__method__: " + input);

    /**** ENTER YOUR CODE HERE ****/

    var result = {
        "foo": this.opts.foo,
        "bar": this.opts.bar,
        "input": input
    };

    this.emit("complete", result);
};
