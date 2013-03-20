// __short__.js

module.exports = __module__;

var util = require("util");
var events = require("events");

function __module__(opts) {
    events.EventEmitter.call(this);
    this.opts = opts;
}

util.inherits(__module__, events.EventEmitter);

__module__.prototype.error = function(err) {
    if ("string" == typeof err) err = new Error(err);
    this.emit("error", err);
};

__module__.prototype.__method__ = function(input) {
    if (input == null || input === "") {
        this.error("empty input");
        return;
    }
    this.emit("info", "__method__: " + input);
    var result = {
        "foo": this.opts.foo,
        "bar": this.opts.bar,
        "input": input
    };
    this.emit("done", result);
};
