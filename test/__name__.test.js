/*! __name__.test.js */

var assert = require('chai').assert;
var __module__ = require("../lib/__name__");

describe('__module__', function() {

    describe('#__method__', function() {
        var __short__;
        var opts = {};
        var ok_input = "something";
        var ng_input = null;

        beforeEach(function() {
            __short__ = new __module__(opts);
        });

        it('should emit "__method__" event on success', function(done) {
            __short__.on("__method__", function(result) {
                // console.warn(result);
                assert(result, 'result should not be empty');
                done();
            });
            __short__.__method__(ok_input);
        });

        it('should emit "error" event on failure', function(done) {
            __short__.on("error", function(err) {
                assert(err, 'err should not be empty');
                done();
            });
            __short__.__method__(ng_input);
        });

        it('should emit "progress" event on progress', function(done) {
            var buf = [];
            __short__.on("progress", function(info) {
                // console.warn(info);
                buf.push(info);
            });
            __short__.on("__method__", function(result) {
                // console.warn(result);
                assert(buf.length, 'result should have some progresses');
                done();
            });
            __short__.__method__(ok_input);
        });
    });
});
