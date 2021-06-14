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
function callback(id: number, name: string) {
    return { id, name}
}

// create map here
export const produceResult = things.map((name, id) => callback(id + 1, name));


/**
 * #2 Higher order then curry.
 *
 * - Write a function that accepts a key as a string.
 * - Filter the results from #1 to return a single `thing` object.
 * - Hoist that filter callback and curry all functions.
 */

// create function here
export function exampleTwo(key: any) {
    return (id: number) => {
        if(id === key.id) {
            return true;
        }

        return false;
    }
}

export function filterExampleOne(arrOne: Array<any>) {
    return (id: number) => {
        return arrOne.filter(element =>{ const result = exampleTwo(element);
            return result(id);
        } ) [0]
    }
}

