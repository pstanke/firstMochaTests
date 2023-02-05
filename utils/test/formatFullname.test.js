const expect = require('chai').expect;
const formatFullname = require('../formatFullname.js');

describe('formatFullname', () => {
  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function () {})).to.equal('Error');
  });

  it('should return an error if "fullName" arg length is 0', () => {
    expect(formatFullname('')).to.equal('Error');
  });
  it('should return an error if "fullName" form is different than <firstname> <lastname>', () => {
    expect(formatFullname('John Doe Test')).to.equal('Error');
    expect(formatFullname('John')).to.equal('Error');
    expect(formatFullname('Doe')).to.equal('Error');
  });

  it('should return good "fullName" if proper args', () => {
    expect(formatFullname('John Doe')).to.equal('John Doe');
    expect(formatFullname('JOHN DOE')).to.equal('John Doe');
    expect(formatFullname('jOHn dOE')).to.equal('John Doe');
    expect(formatFullname('john doe')).to.equal('John Doe');
  });
});
