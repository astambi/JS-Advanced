let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');
global.$ = $;

let nuke = require('../armage-DOM').nuke;

describe('nuke(selector1, selector2)', function () {
    beforeEach('include HTML for testing', function () {
        document.body.innerHTML =
            `<div id="target">
				<div class="nested target">
					<p>This is some text</p>
				</div>
				<div class="target">
					<p>Empty div</p>
				</div>
				<div class="inside">
					<span class="nested">Some more text</span>
					<span class="target">Some more text</span>
				</div>
			</div>`;
    });
    describe('invalid input', function () {
        it('should do nothing with invalid 1st parameter', () => {
            let selector1 = 'invalidSelector';
            let selector2 = '#target';
            let initialState = $('body').html();
            nuke(selector1, selector2);
            let endState = $('body').html();
            expect(initialState).to.equal(endState);
        });
        it('should do nothing with invalid 2nd parameter', () => {
            let selector1 = '#target';
            let selector2 = 'invalidSelector';
            let initialState = $('body').html();
            nuke(selector1, selector2);
            let endState = $('body').html();
            expect(initialState).to.equal(endState);
        });
        it('should do nothing with empty 1st parameter', () => {
            let selector2 = '#target';
            let initialState = $('body').html();
            nuke('', selector2);
            let endState = $('body').html();
            expect(initialState).to.equal(endState);
        });
        it('should do nothing with empty 2nd parameter', () => {
            let selector1 = '#target';
            let initialState = $('body').html();
            nuke(selector1, '');
            let endState = $('body').html();
            expect(initialState).to.equal(endState);
        });
        it('should do nothing with omitted 2nd parameter', () => {
            let selector1 = '#target';
            let initialState = $('body').html();
            nuke(selector1);
            let endState = $('body').html();
            expect(initialState).to.equal(endState);
        });
        it('should do nothing with no parameters', () => {
            let initialState = $('body').html();
            nuke();
            let endState = $('body').html();
            expect(initialState).to.equal(endState);
        });
        it('should do nothing with equal parameters', () => {
            let selector = '#target';
            let initialState = $('body').html();
            nuke(selector, selector);
            let endState = $('body').html();
            expect(initialState).to.equal(endState);
        });
        it('should do nothing with non-matching selectors', () => { // NB!
            let selector1 = '.inside';
            let selector2 = '.target';
            let initialState = $('body').html();
            nuke(selector1, selector2);
            let endState = $('body').html();
            expect(initialState).to.equal(endState);
        });
    });
    describe('valid input', function () {
        it('should delete all nodes that match both selectors (.target .nested)', () => {
            let selector1 = '.target';
            let selector2 = '.nested';
            nuke(selector1, selector2);
            let match = $(selector1).filter(selector2);
            expect(match.length).to.equal(0);
        });
        it('should delete all nodes that match both selectors (.nested span)', () => {
            let selector1 = '.nested';
            let selector2 = 'span';
            nuke(selector1, selector2);
            let match = $(selector1).filter(selector2);
            expect(match.length).to.equal(0);
        });
    });
});