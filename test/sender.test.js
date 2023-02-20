const { expect } = require('chai');
const sender = require('../sender');

commonChecks('randomDataGenerator', 0, 10, 5);

function commonChecks(nameOfTheFunction, min, max, range) {
    describe(nameOfTheFunction, () => {
        it('Should exists', () => {
            expect(sender[nameOfTheFunction]).to.exist;
        });

        let listToTest = sender[nameOfTheFunction](min, max, range);

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

describe('simulateTemperatureSensor', () => {
    it('Should exists', () => {
        expect(sender.simulateTemperatureSensor).to.exist;
    });
    
    let listToTest = sender.simulateTemperatureSensor(20);
    
    it('Should return correct range', () => {
        testRange(listToTest, 20);
    });
    
    it('Should return correct values inside given min max values', () => {
        let minValue = Math.min(...listToTest);
        let maxValue = Math.max(...listToTest);
        expect(minValue).to.be.at.least(0)
        expect(maxValue).to.be.at.most(125)
    });
});

describe('simulateSocSensor', () => {
    it('Should exists', () => {
        expect(sender.simulateSocSensor).to.exist;
    });
    
    let listToTest = sender.simulateSocSensor(30);
    
    it('Should return correct range', () => {
        testRange(listToTest, 30);
    });
    
    it('Should return correct values inside given min max values', () => {
        let minValue = Math.min(...listToTest);
        let maxValue = Math.max(...listToTest);
        expect(minValue).to.be.at.least(20)
        expect(maxValue).to.be.at.most(50)
    });
});

describe('prepareStreamData', () => {
    it('Should exists', () => {
        expect(sender.prepareStreamData).to.exist;
    });
    
    let listToTest = sender.prepareStreamData(10);
    
    it('Should return correct range', () => {
        testRange(listToTest, 10);
    });
    
    it('Should return correct objects with keys', () => {
        let singleObj = listToTest[0];
        expect(singleObj).to.have.property('temperature');
        expect(singleObj).to.have.property('voltage');
    });
});

function testRange(listToTest, value) {
    return expect(listToTest.length).to.deep.equals(value);
}
