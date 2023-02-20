const { expect } = require('chai');
const sender = require('../sender');

describe('randomDataGenerator', () => {
    it('Should exists', () => {
        expect(sender.randomDataGenerator).to.exist;
    });
    
    let listToTest = sender.randomDataGenerator(1, 10, 5);
    
    it('Should return correct range', () => {
        expect(listToTest.length).to.deep.equals(5);
    });
    
    it('Should return correct values inside given min max values', () => {
        let minValue = Math.min(...listToTest);
        let maxValue = Math.max(...listToTest);
        expect(minValue).to.be.above(0)
        expect(maxValue).to.be.below(10)
    });
});

describe('simulateTemperatureSensor', () => {
    it('Should exists', () => {
        expect(sender.simulateTemperatureSensor).to.exist;
    });
});

describe('simulateSocSensor', () => {
    it('Should exists', () => {
        expect(sender.simulateSocSensor).to.exist;
    });
});

describe('prepareStreamData', () => {
    it('Should exists', () => {
        expect(sender.prepareStreamData).to.exist;
    });
});
