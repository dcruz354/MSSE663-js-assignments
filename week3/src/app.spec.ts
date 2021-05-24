import { expect } from 'chai';
import 'mocha';
import { Monkey1 } from './app'

describe('Test for app.ts', () => {
    it('Should output true if the animal is older than 3 years old', () => {
        const myMonkey = new Monkey1("test", 6, ["Phoenix", "Los Angeles", "Tucson", "Sacramento"]);
        const mature = myMonkey.isAnimalMature();
        expect(mature).to.equal(true);
    })

    it('Should output false if the animal is between 0 and 3 years old', () => {
        const myMonkey = new Monkey1("test", 2, ["Phoenix", "Los Angeles", "Tucson", "Sacramento"]);
        const mature = myMonkey.isAnimalMature();
        expect(mature).to.equal(false);
    })

    it('Should output zoo location for the animal', () => {
        const myMonkey = new Monkey1("test", 2, ["Phoenix", "Los Angeles", "Tucson", "Sacramento"]);
        const zooLoc = myMonkey.getZooLocationOnly();
        expect(zooLoc[0]).to.equal("Phoenix");
        expect(zooLoc[1]).to.equal("Los Angeles");
        expect(zooLoc[2]).to.equal("Tucson");
        expect(zooLoc[3]).to.equal("Sacramento");
    })
})

