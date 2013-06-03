/*! __name__.js */

module.exports = __module__;

var util = require("util");
var events = require("events");

function __module__(opts) {
  if (!(this instanceof __module__)) return new __module__(opts);
  events.EventEmitter.call(this);
  this.opts = opts;
}

util.inherits(__module__, events.EventEmitter);

__module__.prototype.progress = function(info) {
  this.emit("progress", info);
};

__module__.__method__ = function() {
  var shares = new __module__();
  shares.__method__.apply(shares, arguments);
};

__module__.prototype.__method__ = function(input, callback) {
  var self = this;
  this.___method__(input, function(err, res) {
    if (err) {
      if ("string" == typeof err) err = new Error(err);
      self.emit("error", err);
    } else {
      self.emit("__method__", res);
    }
    if (callback) {
      callback.apply(null, arguments);
    }
  });
};

__module__.prototype.___method__ = function(input, callback) {
  if ("undefined" === typeof input || null === input) {
    callback(new Error("empty input"));
    return;
  }
  this.progress("__method__: " + input);

  /**** ENTER YOUR CODE HERE ****/

  var result = {
    "foo": this.opts.foo,
    "bar": this.opts.bar,
    "input": input
  };

  callback(null, result);
};