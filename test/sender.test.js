const { expect } = require('chai');
const sender = require('../sender');

commonChecks('randomDataGenerator', 0, 10, 5);
commonChecks('simulateTemperatureSensor', 0, 125, 10);
commonChecks('simulateSocSensor', 20, 50, 15);

function commonChecks(nameOfTheFunction, min, max, range) {
    describe(nameOfTheFunction, () => {
        it('Should exists', () => {
            expect(sender[nameOfTheFunction]).to.exist;
        });

        let listToTest = sender[nameOfTheFunction](range, min, max);

        it('Should return correct range', () => {
            expect(listToTest.length).to.deep.equals(range);
        });

        it('Should return correct values inside given min max values', () => {
            let minValue = Math.min(...listToTest);
            let maxValue = Math.max(...listToTest);
            expect(minValue).to.be.at.least(min);
            expect(maxValue).to.be.at.most(max);
        });
    });
}

describe('prepareStreamData', () => {
    it('Should exists', () => {
        expect(sender.prepareStreamData).to.exist;
    });
    
    let listToTest = sender.prepareStreamData(10);
    
    it('Should return correct range', () => {
        expect(listToTest.length).to.deep.equals(10);
    });
    
    it('Should return correct objects with keys', () => {
        let singleObj = listToTest[0];
        expect(singleObj).to.have.property('temperature');
        expect(singleObj).to.have.property('voltage');
    });
});
