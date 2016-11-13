let expect = require('chai').expect;
let createList = require('../list').createList;

describe('List', function () {
    let list = {};
    beforeEach(function () {
        list = createList();
    });
    describe('initialization', function () {
        it("should generates an empty list on initialization", function () {
            expect(list.toString()).to.equal('');
        });
        it("should have an add method", function () {
            expect(list.hasOwnProperty('add'));
            expect(typeof list.add).to.equal('function');
        });
        it("should have a shiftLeft method", function () {
            expect(list.hasOwnProperty('shiftLeft'));
            expect(typeof list.shiftLeft).to.equal('function');
        });
        it("should have a shiftRight method", function () {
            expect(list.hasOwnProperty('shiftRight'));
            expect(typeof list.shiftRight).to.equal('function');
        });
        it("should have a swap method", function () {
            expect(list.hasOwnProperty('swap'));
            expect(typeof list.swap).to.equal('function');
        });
        it("should have a toString method", function () {
            expect(list.hasOwnProperty('toString'));
            expect(typeof list.toString).to.equal('function');
        });
    });
    describe('add', function () {
        it("should add a new item (string) to list", function () {
            list.add('test');
            expect(list.toString()).to.equal('test');
        });
        it("should add a new item (number) to list", function () {
            list.add(100);
            expect(list.toString()).to.equal('100');
        });
        it("should add several new items", function () {
            list.add(1);
            list.add('two');
            list.add(3);
            expect(list.toString()).to.equal('1, two, 3');
        });
    });
    describe('toString', function () {
        it("should return the correct output", function () {
            list.add('one');
            list.add('two');
            list.add('three');
            expect(list.toString()).to.equal('one, two, three');
        });
        it("should return the correct output with mixed input", function () {
            list.add(1);
            list.add('two');
            list.add(3);
            expect(list.toString()).to.equal('1, two, 3');
        });
        it("should return an empty string with an empty list", function () {
            expect(list.toString()).to.equal('');
        });
    });
    describe('shiftLeft', function () {
        it("should not change the list if list.length = 0 or 1", function () {
            list.shiftLeft();
            expect(list.toString()).to.equal('');

            list.add(1);
            list.shiftLeft();
            expect(list.toString()).to.equal('1');
        });
        it("should shift correctly to the left once", function () {
            list.add(1);
            list.add('two');
            list.add(3);
            list.shiftLeft();
            expect(list.toString()).to.equal('two, 3, 1');
        });
        it("should shift correctly to the left multiple times", function () {
            list.add(1);
            list.add('two');
            list.add(3);
            list.shiftLeft();
            list.shiftLeft();
            expect(list.toString()).to.equal('3, 1, two');
            list.shiftLeft();
            expect(list.toString()).to.equal('1, two, 3');
        });
    });
    describe('shiftRight', function () {
        it("should not change the list if list.length = 0 or 1", function () {
            list.shiftRight();
            expect(list.toString()).to.equal('');
            list.add(1);
            list.shiftRight();
            expect(list.toString()).to.equal('1');
        });
        it("should shift correctly to the left once", function () {
            list.add(1);
            list.add('two');
            list.add(3);
            list.shiftRight();
            expect(list.toString()).to.equal('3, 1, two');
        });
        it("should shift correctly to the left multiple times", function () {
            list.add(1);
            list.add('two');
            list.add(3);
            list.shiftRight();
            list.shiftRight();
            expect(list.toString()).to.equal('two, 3, 1');
            list.shiftRight();
            expect(list.toString()).to.equal('1, two, 3');
        });
    });
    describe('swap', function () {
        it("should return false on invalid input (no params)", function () {
            list.add(1);
            list.add('two');
            list.add(3);
            expect(list.swap()).to.equal(false);
        });
        it("should return false on invalid input (NaN param)", function () {
            list.add(1);
            list.add('two');
            list.add(3);
            expect(list.swap('one', 2)).to.equal(false);
            expect(list.swap(1, 'two')).to.equal(false);
        });
        it("should return false on invalid input (non-integer param)", function () {
            list.add(1);
            list.add('two');
            list.add(3);
            expect(list.swap(1.5, 2)).to.equal(false);
            expect(list.swap(1, 1.5)).to.equal(false);
        });
        it("should return false on invalid input (negative param)", function () {
            list.add(1);
            list.add('two');
            list.add(3);
            expect(list.swap(-10, 2)).to.equal(false);
            expect(list.swap(1, -10)).to.equal(false);
        });
        it("should return false on invalid input (index = list.length)", function () {
            list.add(1);
            list.add('two');
            list.add(3);
            expect(list.swap(1, 3)).to.equal(false);
            expect(list.swap(3, 1)).to.equal(false);
        });
        it("should return false on invalid input (index > list.length)", function () {
            list.add(1);
            list.add('two');
            list.add(3);
            expect(list.swap(1, 300)).to.equal(false);
            expect(list.swap(300, 1)).to.equal(false);
        });
        it("should return false on invalid input (index1 == index2)", function () {
            list.add(1);
            list.add('two');
            list.add(3);
            expect(list.swap(0, 0)).to.equal(false);
            expect(list.swap(1, 1)).to.equal(false);
            expect(list.swap(2, 2)).to.equal(false);
        });
        it("should swap correctly elements with valid indices", function () {
            list.add(1);
            list.add('two');
            list.add(3);
            expect(list.swap(0, 2)).to.equal(true);
            expect(list.toString()).to.equal('3, two, 1');
            expect(list.swap(1, 2)).to.equal(true);
            expect(list.toString()).to.equal('3, 1, two');
            expect(list.swap(1, 0)).to.equal(true);
            expect(list.toString()).to.equal('1, 3, two');
        });
    });
});