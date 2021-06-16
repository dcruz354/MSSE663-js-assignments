/**
 * #1 Higher order things.
 *
 * - Map the values to produce the result:
 *
 * [{ id: 1, name 'thing' }, { id: 2, name 'thing' }]
 *
 * - Then Hoist the callback function.
 *
 */
const things = ['thing1', 'thing2'];

// create callback here
const  callback = (thing: string, i: number) => ({
    id: i + 1,
    name: thing
});

// create map here
export const produceResult = things.map(callback);


/**
 * #2 Higher order then curry.
 *
 * - Write a function that accepts a key as a string.
 * - Filter the results from #1 to return a single `thing` object.
 * - Hoist that filter callback and curry all functions.
 */

// create function here
interface Thing {
    id: number;
    name: string;
}

const filter = (comparitor: string) => (thing: Thing) => thing.name === comparitor;

export const filteredThing = (comparitor: string) => produceResult.filter(filter(comparitor));

