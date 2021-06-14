import { expect } from 'chai';
import 'mocha';
import { curryMe, exampleOne, doMath, subtract, blackBeltsNinjas, ninjasOne, ninjasTwo, exampleFour } from './currying';

describe('Currying tests', () => {
  it('#1 should output the same result as the original function', () => {
    const originalResult = curryMe("Hello,", "World", "!");
    const exampleOneResult = exampleOne("Hello,")("World")("!");

    expect(originalResult).to.eq(exampleOneResult);
  });

  it('#2 should output the same result as the original function', () => {
    const originaResult = doMath(1)(2)(3);
    const exampleTwoResult = subtract(1, 2, 3);
    expect(originaResult).to.eq(exampleTwoResult);
  });

  it('#3 should return an array containing the ninjas who have a black belt', () => {
    expect(blackBeltsNinjas(ninjasOne)(ninjasTwo)).to.eql([  
      { name: 'Raphael', belt: 'black' },   
      { name: 'Leonardo', belt: 'black' },
      { name: 'Mr. Miyagi', belt: 'black' },
      { name: 'Rocky', belt: 'black' },
      { name: 'The Bride', belt: 'black' },
      { name: 'Cammy', belt: 'black' },
      { name: 'Raphael', belt: 'black' },
      { name: 'Jim', belt: 'black' },
      { name: 'The Rat', belt: 'black' }
    ]);
  });

  it('#4 should return a new array of ninja objects with "status" added to each object', () => {
    expect(exampleFour(ninjasOne)(ninjasTwo)).to.eql([
      { name: 'Michelangelo', belt: 'white', Status: 'grasshopper' },
      { name: 'Donatello', belt: 'green', Status: 'grasshopper' },
      { name: 'Raphael', belt: 'black', Status: 'grasshopper' },
      { name: 'Leonardo', belt: 'black', Status: 'grasshopper' },
      { name: 'Mr. Miyagi', belt: 'black', Status: 'grasshopper' },
      { name: 'Rocky', belt: 'black', Status: 'grasshopper' },
      { name: 'Colt', belt: 'green', Status: 'grasshopper' },
      { name: 'Tum Tum', belt: 'white', Status: 'grasshopper' },
      { name: 'Haru', belt: 'white', Status: 'grasshopper' },
      { name: 'The Bride', belt: 'black', Status: 'grasshopper' },
      { name: 'Cammy', belt: 'black', Status: 'grasshopper' },
      { name: 'Wong Fei-hung', belt: 'green', Status: 'grasshopper' },
      { name: 'Michelangelo', belt: 'white', Status: 'grasshopper' },
      { name: 'Donatello', belt: 'green', Status: 'grasshopper' },
      { name: 'Raphael', belt: 'black', Status: 'grasshopper' },
      { name: 'Jim', belt: 'black', Status: 'grasshopper' },
      { name: 'The Rat', belt: 'black', Status: 'grasshopper' }
    ]);
  });
});
