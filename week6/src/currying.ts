// #1 Convert this javascript function to a curried function
export function curryMe(string1: string, string2: string, string3: string ): string {
  return string1 + ' ' + string2 + ' ' + string3;
}

// source code here
export function exampleOne(string1: string) {
  return (string2: string) => {
    return (string3: string) => {
      return string1 + ' ' + string2 + ' ' + string3;
    }
  }
}

// #2 Hoist and convert nested functions to curried functions
export function doMath(a: number) {
  return function add(b: number) {
    return function subtract(c: number) {
      return a + b - c;
    };
  };
}

// source code here
export const subtract = (a: number) => (b: number) => (c: number) => a + b - c;


export const add = (a: number) => (b:number) => (c:number) =>
  subtract(a)(b)(c);

export const doMath2 = (a:number) => (b:number) => (c: number) => add(a)(b)(c);

// #3 Write a curried function that returns an array containing the ninjas who have a black belt
interface Ninja {
  name: string;
  belt: string;
}
export const ninjasOne: Ninja[] = [
  { name: 'Michelangelo', belt: 'white' },
  { name: 'Donatello', belt: 'green' },
  { name: 'Raphael', belt: 'black' },
  { name: 'Leonardo', belt: 'black' },
  { name: 'Mr. Miyagi', belt: 'black' },
  { name: 'Rocky', belt: 'black' },
  { name: 'Colt', belt: 'green' },
  { name: 'Tum Tum', belt: 'white' },
  { name: 'Haru', belt: 'white' },
  { name: 'The Bride', belt: 'black' },
  { name: 'Cammy', belt: 'black' },
  { name: 'Wong Fei-hung', belt: 'green' }
];

export const ninjasTwo: Ninja[]  = [
  { name: 'Michelangelo', belt: 'white' },
  { name: 'Donatello', belt: 'green' },
  { name: 'Raphael', belt: 'black' },
  { name: 'Jim', belt: 'black' },
  { name: 'The Rat', belt: 'black' }
];

// source code here
export function blackBeltsNinjas(arrOne: Array<any>) {
  return (arrTwo: Array<any>) => {
    const arrThree = [...arrOne, ...arrTwo];
    return arrThree.filter(ninja => ninja.belt === 'black');
  }

} 

/**
 * #4 Write a curried function that returns a new array of ninja objects with "status" added to each object.
 * The status should be the value of whatever key in the status object matches the ninja's belt.
 *
 * @example { name: 'Colt', belt: 'green', status: 'warrior' }
 */

type GenericObject = { [key: string]: string};

export interface NinjaWarrior extends Ninja {
  status: string;
}

export const statusTypes: GenericObject = {
  white: 'grasshopper',
  green: 'warrior',
  black: 'sensei'
};

export const gamerStatusTypes: GenericObject = {
  white: 'Noob',
  green: 'Choob',
  black: 'Legend'
};

const mapper = (arr: Ninja[]) => (status: GenericObject) =>
arr.map((ninja: Ninja) => {
  return {
    ...ninja,
    status: status[ninja.belt]
  };
});

// source code here
export const ninjaWarriosOne: NinjaWarrior[] = mapper(ninjasOne)(statusTypes);

export const ninjaWarriosTwo: NinjaWarrior[] = mapper(ninjasTwo)(gamerStatusTypes);

