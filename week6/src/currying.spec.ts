import { expect } from 'chai';
import 'mocha';
import { curryMe, exampleOne, doMath, subtract, blackBeltsNinjas, ninjasOne, ninjasTwo, doMath2, ninjaWarriosOne, ninjaWarriosTwo } from './currying';

describe('Currying tests', () => {
  it('#1 should output the same result as the original function', () => {
    const originalResult = curryMe("Hello,", "World", "!");
    const exampleOneResult = exampleOne("Hello,")("World")("!");

    expect(originalResult).to.eq(exampleOneResult);
  });

  it('#2 should output the same result as the original function', () => {
    const originaResult = doMath(1)(2)(3);
    const exampleTwoResult = doMath2(1) (2) (3);
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
    expect(ninjaWarriosOne).to.eql([
      { name: 'Michelangelo', belt: 'white', status: 'grasshopper' },
      { name: 'Donatello', belt: 'green', status: 'warrior' },
      { name: 'Raphael', belt: 'black', status: 'sensei' },
      { name: 'Leonardo', belt: 'black', status: 'sensei' },
      { name: 'Mr. Miyagi', belt: 'black', status: 'sensei' },
      { name: 'Rocky', belt: 'black', status: 'sensei' },
      { name: 'Colt', belt: 'green', status: 'warrior' },
      { name: 'Tum Tum', belt: 'white', status: 'grasshopper' },
      { name: 'Haru', belt: 'white', status: 'grasshopper' },
      { name: 'The Bride', belt: 'black', status: 'sensei' },
      { name: 'Cammy', belt: 'black', status: 'sensei' },
      { name: 'Wong Fei-hung', belt: 'green', status: 'warrior' }
    ]);
  });

  it('#5 should return a new array of ninja objects with "status" added to each object', () => {
    expect(ninjaWarriosTwo).to.eql([
      { name: 'Michelangelo', belt: 'white', status: 'Noob' },
      { name: 'Donatello', belt: 'green', status: 'Choob' },
      { name: 'Raphael', belt: 'black', status: 'Legend' },
      { name: 'Jim', belt: 'black', status: 'Legend' },
      { name: 'The Rat', belt: 'black', status: 'Legend' }
    ]);
  });
});
