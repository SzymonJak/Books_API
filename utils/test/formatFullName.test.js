const formatFullName = require('../formatFullName');
const expect = require('chai').expect;

describe('FormatFullName', () => {

    it('should return an error if arg is not given', () => {
        expect(formatFullName('')).to.equal('Error');
    });

    it('should return an error if arg is not a string', () => {
        expect(formatFullName(undefined)).to.equal('Error');
        expect(formatFullName(12)).to.equal('Error');
        expect(formatFullName({})).to.equal('Error');
        expect(formatFullName([])).to.equal('Error');
        expect(formatFullName(function() {})).to.equal('Error');
    });

    it('should return an error if number of words in arg is different than 2', () => {
        expect(formatFullName('Jovi')).to.equal('Error');
        expect(formatFullName('Jon Bon Jovi')).to.equal('Error');
    });

});