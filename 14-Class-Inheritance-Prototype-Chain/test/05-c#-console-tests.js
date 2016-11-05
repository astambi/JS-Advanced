let expect = require('chai').expect;

let Console = require('../05-c#-console').Console;

describe("Class C# Console", function () {
    describe("contains method writeLine", function () {
        it('should have method writeLine', function () {
            expect(typeof Console.writeLine).to.equal('function');
        });
    });
    describe("with single param & valid input", function () {
        it("should return String with a String param", function () {
            let param = 'test';
            let result = Console.writeLine('test');
            expect(result).to.equal(param);
        });
        it("should return JSON Obj with an Object param", function () {
            let param = {text: 'test', length: 4};
            let result = Console.writeLine(param);
            expect(result).to.equal(JSON.stringify(param));
        });
    });
    describe("with single param & invalid input", function () {
        it("should return undefined with an invalid param (number)", function () {
            let result = Console.writeLine(100);
            expect(result).to.be.equal(undefined);
        });
        it("should return TypeError with an empty param", function () {
            expect(() => Console.writeLine()).to.throw(TypeError);
        });
    });
    describe("with multiple params & valid input", function () {
        it("should return correct output with multiple valid String params", function () {
            let params = ['The sum of {0} and {1} is {2}', 'one', 'two', 'three'];
            let result = Console.writeLine(...params);
            expect(result).to.equal('The sum of one and two is three');
        });
        it("should return correct output with multiple valid String params", function () {
            let params = ['The sum of {2} and {1} is {0}', 'three', 'two', 'one'];
            let result = Console.writeLine(...params);
            expect(result).to.equal('The sum of one and two is three');
        });
        it("should return correct output with multiple valid String params", function () {
            let params = ['The sum is {0}', 'three'];
            let result = Console.writeLine(...params);
            expect(result).to.equal('The sum is three');
        });
    });
    describe("with multiple params & invalid input", function () {
        it("should return TypeError with a non-String 1st param (number)", function () {
            let params = [100, 'one', 'two', 'three'];
            expect(() => Console.writeLine(...params)).to.throw(TypeError);
        });
        it("should return RangeError with non-matching numbers of placeholders & params (placeholders > params)", function () {
            let params = ['The sum of {0} and {1} is {2}', 'one', 'two'];
            expect(() => Console.writeLine(...params)).to.throw(RangeError);
        });
        it("should return RangeError with non-matching numbers of placeholders & params (placeholders < params)", function () {
            let params = ['The sum of {0} and {1} is {2}', 'one', 'two', 'three', 'four'];
            expect(() => Console.writeLine(...params)).to.throw(RangeError);
        });
        it("should return RangeError with invalid placeholder index (index > upper boundary)", function () {
            let params = ['The sum of {100} and {1} is {2}', 'one', 'two', 'three'];
            expect(() => Console.writeLine(...params)).to.throw(RangeError);
        });
        // NB check input with a single param & placeholder
        it("should return RangeError with invalid placeholder index (index > upper boundary)", function () {
            let params = ['The sum is {100}', 'three'];
            expect(() => Console.writeLine(...params)).to.throw(RangeError);
        });
        // No need to test for negative placeholder indices, since regex /{\d+}/g guarantees a non-negative placeholder
    });
});