var assert = require("chai").assert;
var isogramChecker = require("./index.js").isogramChecker;
var scrabbleChecker = require("./index.js").scrabbleChecker;


describe('The isogram checker', function () {

  it('should check that isogramChecker returns true if a string is passed in', function () {
    var a = isogramChecker("test");
    assert.isTrue(a);
  });

  it('should check that isogramChecker returns true if the string "a" is passed in', function () {
    var a = isogramChecker("a");
    assert.isTrue(a);
  });

  it('should check that isogramChecker returns false if the string "aa" is passed in', function () {
    var a = isogramChecker("aa");
    assert.isFalse(a);
  });

  it('should check that isogramChecker returns false if the string "zoo" is passed in', function () {
    var a = isogramChecker("zoo");
    assert.isFalse(a);
  });

  it('should check that isogramChecker returns true if the string "qwerty" is passed in', function () {
    var a = isogramChecker("qwerty");
    assert.isTrue(a);
  });

  it('should check that isogramChecker returns false if the string "!!!" is passed in', function () {
    var a = isogramChecker("!!!");
    assert.isFalse(a);
  });

});

describe('Passing an array into scrabbleChecker', function () {

  it('should check that scrabbleChecker returns true if array passed in', function () {
    var b = scrabbleChecker(["aardvark", "beetle", "cat"]);
    assert.isTrue(b);
  });

  it('should check that scrabbleChecker returns the number of isograms in an array', function () {
    var b = scrabbleChecker(["aardvark", "beetle", "cat"]);
    assert.equal(b, 2);
  });
});