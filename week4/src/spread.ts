import { resolveModuleName } from "typescript";

// #1 Array copying
export const numbers = [1, 2, 3, 4, 5];

export const originalNumbers = numbers.map(number => number);
console.log(originalNumbers);

// refactor here
export const updatedNumbers = [...numbers];


console.log(updatedNumbers);

// #2 Combining arrays
export const winners = ['first'];
export const runnerUps = ['second', 'third', 'fourth', 'fifth'];

// refactor here

export const allParticipants = [...winners, ...runnerUps];


console.log(allParticipants);

// #3 Combining objects
export const bob = {
  man: 'Bob'
};

export const kyle = {
  boy: 'Kyle'
};

export const originalPersons = Object.assign(bob, kyle);

console.log(originalPersons);

// refactor here
export const updatedPersons = {...bob, ...kyle};
console.log(updatedPersons);

// #4 Modifying values in arrays of objects
export const data = [
  {
    id: 0,
    task: 'Do the thing'
  },
  {
    id: 1,
    task: 'Do the other thing'
  },
  {
    id: 2,
    task: 'Do the last thing'
  }
];

export const update = {
  id: 1,
  task: 'Do the other thing... again'
};

export const originalUpdates = data.map(task => {
  if (task.id === update.id) {
    return Object.assign(task, update);
  }
  return task;
});


// refactor here
export const updateObject = (args: Array<any> ) => {
  for(let arg of args ){
    if(arg.id === update.id)
    {

      Object.assign(arg, update);
    }
  }
  return args;
}

updateObject(data);
