import { expect } from 'chai';
import 'mocha';
import { produceResult, filterExampleOne }  from './higher-order-funcs'

describe('Higher Order Function tests', () => {
  it("#1 should produce the expected result `[{ id: 1, name 'thing' }, { id: 2, name 'thing' }]` after hoisting", () => {
    expect(produceResult).to.eql([{ id: 1, name: 'thing1' }, {id: 2, name: 'thing2'}]);
  });

  it('#2 should return a single thing from array of things objects after hoisting and currying', () => {
    const filterResult = filterExampleOne(produceResult);
    expect(filterResult(2)).to.eql({id: 2, name: 'thing2'})
  });
});
