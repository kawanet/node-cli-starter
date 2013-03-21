// __short__.test.js

var expect = require('chai').expect;
var __module__ = require("../lib/__short__");

describe('__module__', function() {

    describe('#__method__', function() {
        var __short__;
        var opts = {};
        var ok_input = "something";
        var ng_input = "";

        beforeEach(function() {
            __short__ = new __module__(opts);
        });

        it('emit "complete" on success', function(done) {
            __short__.on("complete", function(result) {
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

        it('emit "info" on progress', function(done) {
            var buf = [];
            __short__.on("info", function(info) {
                // console.warn(info);
                buf.push(info);
            });
            __short__.on("complete", function(result) {
                // console.warn(result);
                expect(buf).to.not.be.empty;
                done();
            });
            __short__.__method__(ok_input);
        });
    });
});
