import { expect } from 'chai';
import 'mocha';
import { a, b, others, statement } from './array-destructuring';

describe('Array destructuring tests', () => {
  it('#1 should have a variable for every element in the given array', () => {
    expect(a).to.eql('apple');
    expect(b).to.eql('banana');
  });

  it('#2 should have a variable for the first 2 elements then spread the rest', () => {
    expect(a).to.eql('apple');
    expect(b).to.eql('banana');
    expect(others).to.eql(['chocolate', 'pears', 'oats', 'pizza'])
  });

  it('#3 should construct a statement from the given objarrayect', () => {});
  expect(statement).to.eql('hello, taylor!');
});
