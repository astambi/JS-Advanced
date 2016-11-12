let expect = require('chai').expect;
let SortedList = require('../sorted-list').SortedList;

describe('SortedList', function () {
    let myList = {};
    beforeEach(function () {
        myList = new SortedList();
    });
    describe('constructor & methods', function () {
        it("should have a constructor & methods", function () {
            expect(typeof SortedList).to.equal('function');
            // expect(typeof myList).to.equal('object');

            expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true);
            expect(SortedList.prototype.hasOwnProperty('remove')).to.equal(true);
            expect(SortedList.prototype.hasOwnProperty('get')).to.equal(true);
            expect(SortedList.prototype.hasOwnProperty('sort')).to.equal(true);
            expect(SortedList.prototype.hasOwnProperty('vrfyRange')).to.equal(true);
            // alternative
            expect(SortedList.prototype).to.haveOwnProperty('add');
            expect(SortedList.prototype).to.haveOwnProperty('remove');
            expect(SortedList.prototype).to.haveOwnProperty('get');
            expect(SortedList.prototype).to.haveOwnProperty('sort');
            expect(SortedList.prototype).to.haveOwnProperty('vrfyRange');

            expect(typeof SortedList.prototype.add).to.equal('function');
            expect(typeof SortedList.prototype.remove).to.equal('function');
            expect(typeof SortedList.prototype.get).to.equal('function');
            expect(typeof SortedList.prototype.sort).to.equal('function');
            expect(typeof SortedList.prototype.vrfyRange).to.equal('function');

            expect(myList.hasOwnProperty('add'));
            expect(myList.hasOwnProperty('remove'));
            expect(myList.hasOwnProperty('get'));
            expect(myList.hasOwnProperty('sort'));
            expect(myList.hasOwnProperty('vrfyRange'));

            expect(typeof myList.add).to.equal('function');
            expect(typeof myList.remove).to.equal('function');
            expect(typeof myList.get).to.equal('function');
            expect(typeof myList.sort).to.equal('function');
            expect(typeof myList.vrfyRange).to.equal('function');
        });
        it("should have size prop", function () {
            expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true);
            expect(SortedList.prototype).to.haveOwnProperty('size');
            expect(myList.size).to.equal(0);
        });
    });
    describe('add & sort', function () {
        it("should add a single element (integer)", function () {
            myList.add(100);
            expect(myList.size).to.equal(1);
            expect(() => myList.vrfyRange(0)).to.not.throw(Error);
            expect(myList.get(0)).to.equal(100);
        });
        it("should add a single element (float)", function () {
            myList.add(25.5);
            expect(myList.size).to.equal(1);
            expect(() => myList.vrfyRange(0)).to.not.throw(Error);
            expect(myList.get(0)).to.equal(25.5);
        });
        it("should add multiple elements & sort them", function () {
            myList.add(300);
            myList.add(200.5);
            myList.add(-100.5);
            myList.sort();
            expect(myList.size).to.equal(3);
            expect(() => myList.vrfyRange(0)).to.not.throw(Error);
            expect(() => myList.vrfyRange(1)).to.not.throw(Error);
            expect(() => myList.vrfyRange(2)).to.not.throw(Error);
            expect(myList.get(0)).to.equal(-100.5);
            expect(myList.get(1)).to.equal(200.5);
            expect(myList.get(2)).to.equal(300);
        });
    });
    describe('verify range & remove', function () {
        it("should remove element at index 0", function () {
            myList.add(300);
            myList.add(200);
            myList.add(-100.5);
            myList.remove(0);
            expect(myList.size).to.equal(2);
            expect(() => myList.vrfyRange(0)).to.not.throw(Error);
            expect(() => myList.vrfyRange(1)).to.not.throw(Error);
            expect(myList.get(0)).to.equal(200);
            expect(myList.get(1)).to.equal(300);
        });
        it("should remove element at middle index", function () {
            myList.add(300);
            myList.add(200);
            myList.add(-100);
            myList.remove(1);
            expect(myList.size).to.equal(2);
            expect(myList.get(0)).to.equal(-100);
            expect(myList.get(1)).to.equal(300);
        });
        it("should remove element at index = array.length - 1", function () {
            myList.add(300);
            myList.add(200);
            myList.add(-100);
            myList.remove(2);
            expect(myList.size).to.equal(2);
            expect(myList.get(0)).to.equal(-100);
            expect(myList.get(1)).to.equal(200);
        });
        it("should throw error with index = array.length", function () {
            myList.add(300);
            myList.add(200);
            myList.add(-100);
            expect(() => myList.remove(3)).to.throw(Error);
            expect(myList.size).to.equal(3);
            expect(myList.get(0)).to.equal(-100);
            expect(myList.get(1)).to.equal(200);
            expect(myList.get(2)).to.equal(300);
        });
        it("should throw error with index < 0", function () {
            myList.add(300);
            myList.add(200);
            myList.add(-100);
            expect(() => myList.remove(-30)).to.throw(Error);
            expect(myList.size).to.equal(3);
            expect(myList.get(0)).to.equal(-100);
            expect(myList.get(1)).to.equal(200);
            expect(myList.get(2)).to.equal(300);
        });
        it("should remove all elems at valid indices", function () {
            myList.add(300);
            myList.add(200);
            myList.add(-100);
            myList.remove(0);
            myList.remove(0);
            myList.remove(0);
            expect(myList.size).to.equal(0);
        });
        it("should throw error at invalid indices", function () {
            expect(() => myList.vrfyRange(0)).to.throw(Error);
            expect(() => myList.get(0)).to.throw(Error);
            expect(() => myList.remove(0)).to.throw(Error);
        });
    });
    describe('verify range & get', function () {
        it("should throw error at index < 0", function () {
            myList.add(300);
            myList.add(200);
            myList.add(-100);
            expect(() => myList.vrfyRange(-10)).to.throw(Error);
            expect(() => myList.get(-10)).to.throw(Error);
        });
        it("should not throw error at index = 0", function () {
            myList.add(300);
            myList.add(200);
            myList.add(-100);
            expect(() => myList.vrfyRange(0)).to.not.throw(Error);
            expect(myList.get(0)).to.equal(-100);
        });
        it("should not throw error at middle index", function () {
            myList.add(300);
            myList.add(200);
            myList.add(-100);
            expect(() => myList.vrfyRange(1)).to.not.throw(Error);
            expect(myList.get(1)).to.equal(200);
        });
        it("should throw error at index = arr.length", function () {
            myList.add(300);
            myList.add(200);
            myList.add(-100);
            expect(() => myList.vrfyRange(3)).to.throw(Error);
            expect(() => myList.get(3)).to.throw(Error);
        });
        it("should throw error at index > arr.length", function () {
            myList.add(300);
            myList.add(200);
            myList.add(-100);
            expect(() => myList.vrfyRange(10)).to.throw(Error);
            expect(() => myList.get(10)).to.throw(Error);
        });
        it("should NOT throw error & return undefined if index is not-integer", function () {
            myList.add(300);
            myList.add(200);
            myList.add(-100);
            expect(() => myList.vrfyRange(1.5)).to.not.throw(Error);
            expect(myList.get(1.5)).to.equal(undefined);
            expect(myList.remove(1.5)).to.equal(undefined);
        });

        it("should throw error if list is empty", function () {
            expect(() => myList.vrfyRange(0)).to.throw(Error);
            expect(() => myList.get(0)).to.throw(Error);
        });
    });
    describe('sort', function () {
        it("should sort correctly", function () {
            myList.add(300);
            myList.add(200.222);
            myList.add(-100);
            myList.sort();
            expect(myList.get(0)).to.equal(-100);
            expect(myList.get(1)).to.equal(200.222);
            expect(myList.get(2)).to.equal(300);
        });
        it("should sort correctly", function () {
            let sortedNums = [-100.5, -200, 0, 100.555, 200.666, 300.5, 400];
            for (let i = sortedNums.length - 1; i >= 0; i--)
                myList.add(sortedNums[i]);
            myList.sort();
            for (let i = 0; i < myList.length; i++)
                expect(myList.get(i)).to.equal(sortedNums[i]);
        });
        it("should add & automatically sort correctly", function () {
            let sortedNums = [-100.5, -200, 0, 100.555, 200.666, 300.5, 400];
            for (let i = sortedNums.length - 1; i >= 0; i--)
                myList.add(sortedNums[i]);
            for (let i = 0; i < myList.length; i++)
                expect(myList.get(i)).to.equal(sortedNums[i]);
        });
    });
});