let expect = require("chai").expect;
let mathEnforcer = require("../math-enforcer").mathEnforcer;

describe("mathEnforcer", function() {
    describe("addFive", function() {
        it("should return correct value with a positive int parameter", function () {
            let result = mathEnforcer.addFive(5);
            expect(result).to.be.equal(10);
        });
        it("should return correct value with a negative int parameter", function () {
            let result = mathEnforcer.addFive(-15);
            expect(result).to.be.equal(-10);
        });
        it("should return correct value with a positive float parameter", function () {
            let result = mathEnforcer.addFive(3.999);
            expect(result).to.be.closeTo(8.999, 0.01);
        });
        it("should return correct value with a negative float parameter", function () {
            let result = mathEnforcer.addFive(-10.888);
            expect(result).to.be.closeTo(-5.888, 0.01);
        });
        it("should return undefined with a NaN parameter", function () {
            let result = mathEnforcer.addFive('hello');
            expect(result).to.be.equal(undefined);
        });
        it("should return undefined with an empty parameter", function () {
            let result = mathEnforcer.addFive();
            expect(result).to.be.equal(undefined);
        });
    });
    describe("subtractTen", function() {
        it("should return correct value with a positive int parameter", function () {
            let result = mathEnforcer.subtractTen(5);
            expect(result).to.be.equal(-5);
        });
        it("should return correct value with a negative int parameter", function () {
            let result = mathEnforcer.subtractTen(-5);
            expect(result).to.be.equal(-15);
        });
        it("should return correct value with a positive float parameter", function () {
            let result = mathEnforcer.subtractTen(3.999);
            expect(result).to.be.closeTo(-5.999, 0.01);
        });
        it("should return correct value with a negative float parameter", function () {
            let result = mathEnforcer.subtractTen(-3.999);
            expect(result).to.be.closeTo(-13.999, 0.01);
        });
        it("should return undefined with a NaN parameter", function () {
            let result = mathEnforcer.subtractTen('hello');
            expect(result).to.be.equal(undefined);
        });
        it("should return undefined with an empty parameter", function () {
            let result = mathEnforcer.subtractTen();
            expect(result).to.be.equal(undefined);
        });
    });
    describe("sum", function() {
        it("should return correct value with 2 positive int parameters", function () {
            let result = mathEnforcer.sum(2, 3);
            expect(result).to.be.equal(5);
        });
        it("should return correct value with 2 negative int parameters", function () {
            let result = mathEnforcer.sum(-2, -3);
            expect(result).to.be.equal(-5);
        });
        it("should return correct value with a positive & negative int parameters", function () {
            let result = mathEnforcer.sum(2, -3);
            expect(result).to.be.equal(-1);
        });
        it("should return correct value with positive float & int parameters", function () {
            let result = mathEnforcer.sum(2.99999, 3);
            expect(result).to.be.closeTo(5.99999, 0.01);
        });
        it("should return correct value with negative float & int parameters", function () {
            let result = mathEnforcer.sum(-2.99999, -3);
            expect(result).to.be.closeTo(-5.99999, 0.01);
        });
        it("should return correct value with positive & negative float parameters", function () {
            let result = mathEnforcer.sum(2.999, -3.999);
            expect(result).to.be.closeTo(-1, 0.01);
        });
        it("should return undefined with a NaN first parameter", function () {
            let result = mathEnforcer.sum('hello', 3);
            expect(result).to.be.equal(undefined);
        });
        it("should return undefined with a NaN second parameter", function () {
            let result = mathEnforcer.sum(3, 'hello');
            expect(result).to.be.equal(undefined);
        });
        it("should return undefined with an empty parameter", function () {
            let result = mathEnforcer.sum(1);
            expect(result).to.be.equal(undefined);
        });
        it("should return undefined with 2 empty parameters", function () {
            let result = mathEnforcer.sum();
            expect(result).to.be.equal(undefined);
        });
    });
});