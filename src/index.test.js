var expect = require('chai').expect;
var util = require('./index');

describe('getTitle', function() {

  var sanitizedTitle = "The Beatles - Come Together";

  it('should remove the Youtube suffix', function(){
    expect(sanitizedTitle).to.be.equal(util.getTitle('The Beatles - Come Together - Youtube'));
  });
});