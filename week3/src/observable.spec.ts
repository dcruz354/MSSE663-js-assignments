import { expect } from 'chai';
import 'mocha';
import { classification, classificationStream, classificationToUpper } from './observable'


describe('Test for observable.ts', () => {
    it('Should map over the values in the array and output values to the console', () => {
        const expectedResult = classification;
        const classificationOriginal = classificationStream;
        const resultToUpperClassificationStream = classificationToUpper(classificationOriginal);
        let count  =  0;
        resultToUpperClassificationStream.subscribe(item => {
            expect(item).to.equal(expectedResult[count]);
            count++;
        });
        
    })

    it('Should map over the values in the array and output values to the console', () => {
        const expectedResult = classification;
        const classificationOriginal = classificationStream;
        const resultToUpperClassificationStream = classificationToUpper(classificationOriginal);
        let count  =  0;
        resultToUpperClassificationStream.subscribe(item => {
            expect(item).to.equal(expectedResult[count]);
            count++;
        });
        
    })

    it('Should map over the values in the array and output values to the console', () => {
        const expectedResult = classification;
        const classificationOriginal = classificationStream;
        const resultToUpperClassificationStream = classificationToUpper(classificationOriginal);
        let count  =  0;
        resultToUpperClassificationStream.subscribe(item => {
            expect(item).to.equal(expectedResult[count]);
            count++;
        });
        
    })
})