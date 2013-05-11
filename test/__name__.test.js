// __short__.test.js

var expect = require('chai').expect;
var __module__ = require("../lib/__name__");

describe('__module__', function() {

    describe('#__method__', function() {
        var __short__;
        var opts = {};
        var ok_input = "something";
        var ng_input = "";

        beforeEach(function() {
            __short__ = new __module__(opts);
        });

        it('emit "__method__" on success', function(done) {
            __short__.on("__method__", function(result) {
                // console.warn(result);
                expect(result).to.not.be.empty;
                done();
            });
            __short__.__method__(ok_input);
        });

        it('emit "error" on failure', function(done) {
            __short__.on("error", function(err) {
                // console.warn(err);
                done();
            });
            __short__.__method__(ng_input);
        });

        it('emit "progress" on progress', function(done) {
            var buf = [];
            __short__.on("progress", function(info) {
                // console.warn(info);
                buf.push(info);
            });
            __short__.on("__method__", function(result) {
                // console.warn(result);
                expect(buf).to.not.be.empty;
                done();
            });
            __short__.__method__(ok_input);
        });
    });
});
