import { expect } from 'chai';
import { getTitle } from './index';

describe('getTitle', () => {

  const sanitizedTitle = "The Beatles - Come Together";

  it('should remove the Youtube suffix', () => {
    expect(sanitizedTitle).to.be.equal(getTitle('The Beatles - Come Together - Youtube'));
  });
});