let expect = require('chai').expect;
// let list = require('../add-delete-in-list').list;

describe('Add/ Delete in List', function () {
    // // NB! use for local testing, do not submit in Judge
    // let list = {};
    // beforeEach(function () {
    //     list = require('../add-delete-in-list').list();
    // });
    // // NB! use for local testing, do not submit in Judge

    describe('initialization', function () {
        it("should generates an empty list on initialization", function () {
            expect(list.toString()).to.equal('');
        });
        it("should have an add method", function () {
            expect(list.hasOwnProperty('add'));
            expect(typeof list.add).to.equal('function');
        });
        it("should have a delete method", function () {
            expect(list.hasOwnProperty('delete'));
            expect(typeof list.delete).to.equal('function');
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
            list.add('three');
            expect(list.toString()).to.equal('1, two, three');
        });
    });
    describe('delete', function () {
        it("should delete an item with a valid index (index = 0)", function () {
            list.add(100);
            list.add(200);
            list.add(300);
            list.add(400);
            expect(list.delete(0)).to.equal(100);
            expect(list.toString()).to.equal('200, 300, 400');
        });
        it("should delete a single item with a valid mid index", function () {
            list.add(100);
            list.add(200);
            list.add(300);
            expect(list.delete(2)).to.equal(300);
            expect(list.toString()).to.equal('100, 200');
        });
        it("should delete all items with valid indices", function () {
            list.add(100);
            list.add(200);
            list.add(300);
            expect(list.delete(1)).to.equal(200);
            expect(list.toString()).to.equal('100, 300');
            expect(list.delete(0)).to.equal(100);
            expect(list.toString()).to.equal('300');
        });
        it("should do nothing with an invalid index (index < 0)", function () {
            list.add(100);
            list.add(200);
            list.add(300);
            expect(list.delete(-1)).to.equal(undefined);
            expect(list.toString()).to.equal('100, 200, 300');
        });
        it("should do nothing with an invalid index (index = arr.length)", function () {
            list.add(100);
            list.add(200);
            list.add(300);
            expect(list.delete(3)).to.equal(undefined);
            expect(list.toString()).to.equal('100, 200, 300');
        });
        it("should do nothing with an invalid index (index > arr.length)", function () {
            list.add(100);
            list.add(200);
            list.add(300);
            expect(list.delete(100)).to.equal(undefined);
            expect(list.toString()).to.equal('100, 200, 300');
        });
        it("should do nothing with an invalid index (index = positive float)", function () {
            list.add(100);
            list.add(200);
            list.add(300);
            expect(list.delete(1.14)).to.equal(undefined); // 1.14 inside range ! :))
            expect(list.toString()).to.equal('100, 200, 300');
        });
        it("should do nothing with an invalid index (index = negative float)", function () {
            list.add(100);
            list.add(200);
            list.add(300);
            expect(list.delete(-1.14)).to.equal(undefined); // 1.14 inside range ! :))
            expect(list.toString()).to.equal('100, 200, 300');
        });
        it("should do nothing with an invalid index (index = NaN)", function () {
            list.add(100);
            list.add(200);
            list.add(300);
            expect(list.delete('index')).to.equal(undefined);
            expect(list.toString()).to.equal('100, 200, 300');
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
            list.add(100);
            list.add('two hundred');
            list.add(300);
            expect(list.toString()).to.equal('100, two hundred, 300');
        });
        it("should return an empty string with an empty arr", function () {
            expect(list.toString()).to.equal('');
        });
    });
});