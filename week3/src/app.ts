// Source code here
// create an interface that has 3 properties and 2 methods
export interface Animal {
    name: string;
    age: number;
    zooLocation: Array<string>;


    isAnimalMature: () => boolean;
    getZooLocationOnly: () => Array<String>;
}

// create a class that implements that interface
export class Monkey1 implements Animal {
    constructor(public name: string, public age: number, public zooLocation: Array<string>) {
        this.name = name;
        this.age = age;
        this.zooLocation = zooLocation;
    }

    isAnimalMature(): boolean {
        if(this.age >= 0 && this.age <= 3)
            return false;
        else
            return true;
    }

    getZooLocationOnly(): Array<String> {
        const zooLocation = this.zooLocation.map(zoo => zoo.toString());
        return zooLocation;
    }

}

// Make a new instance of your  class that calls your methods and outputs a result;
const myMonkey = new Monkey1("test", 6, ["Phoenix", "Los Angeles", "Tucson", "Sacramento"]);
const mature = myMonkey.isAnimalMature();
const zooLoc = myMonkey.getZooLocationOnly();

if(mature)
    console.log("My monkey is an adult.")
else
    console.log("My monkey is not an adult.");


console.log("");

console.log("The following is a list of zoo locations: ");
for(let entry of zooLoc)
    console.log("* " + entry);
