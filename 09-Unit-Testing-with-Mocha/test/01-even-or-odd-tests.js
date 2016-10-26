let expect = require("chai").expect;
let isOddOrEven = require("../even-or-odd").isOddOrEven;

describe("isOddOrEven(str)", function() {
    describe("Nominal cases (valid input)", function() {
        it("should return even after a string of even length {4}", function () {
            let result = isOddOrEven('Anna');
            expect(result).to.be.equal('even');
        });
        it("should return odd after a string of odd length {5}", function () {
            let result = isOddOrEven('hello');
            expect(result).to.be.equal('odd');
        });
        it("should return correct values after multiple consecutive checks", function () {
            let result = isOddOrEven('cat');
            expect(result).to.be.equal('odd');
            result = isOddOrEven('Lisbon');
            expect(result).to.be.equal('even');
            result = isOddOrEven('Barcelona');
            expect(result).to.be.equal('odd');
        });
    });
    describe("Special cases (invalid input)", function() {
        it("should return undefined after a number parameter", function () {
            let result = isOddOrEven(13);
            expect(result).to.be.equal(undefined);
        });
        it("should return undefined after an array parameter", function () {
            let result = isOddOrEven([]);
            expect(result).to.be.equal(undefined);
        });
        it("should return undefined after a object parameter", function () {
            let result = isOddOrEven({});
            expect(result).to.be.equal(undefined);
        });
        it("should return undefined after an empty parameter", function () {
            let result = isOddOrEven();
            expect(result).to.be.equal(undefined);
        });
    });
});