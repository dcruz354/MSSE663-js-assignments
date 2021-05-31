import { assert, expect } from 'chai';
import 'mocha';
import { data, updateObject, originalUpdates,originalPersons, updatedPersons, updatedNumbers, winners, runnerUps, allParticipants, numbers} from './spread'

describe('Test for spread.ts', () => {

    it('Should Array copying', () => {
        expect(numbers).to.eql(updatedNumbers);
    })

    it('Should Combining arrays', () => {
        const original = winners.concat(runnerUps);
        expect(original).to.eql(allParticipants);
    })

    it('Should Combining objects', () => {
        expect(originalPersons).to.eql(updatedPersons);
    })

    it('Should Modifying values in arrays of objects', () => {
        const update = updateObject(data);
        expect(originalUpdates).to.eql(update);
    })
});