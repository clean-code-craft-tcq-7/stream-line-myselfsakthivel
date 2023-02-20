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
    
    let listToTest = sender.simulateTemperatureSensor(20);
    
    it('Should return correct range', () => {
        expect(listToTest.length).to.deep.equals(20);
    });
    
    it('Should return correct values inside given min max values', () => {
        let minValue = Math.min(...listToTest);
        let maxValue = Math.max(...listToTest);
        expect(minValue).to.be.above(0)
        expect(maxValue).to.be.below(125)
    });
});

describe('simulateSocSensor', () => {
    it('Should exists', () => {
        expect(sender.simulateSocSensor).to.exist;
    });
    
    let listToTest = sender.simulateSocSensor(30);
    
    it('Should return correct range', () => {
        expect(listToTest.length).to.deep.equals(30);
    });
    
    it('Should return correct values inside given min max values', () => {
        let minValue = Math.min(...listToTest);
        let maxValue = Math.max(...listToTest);
        expect(minValue).to.be.above(20)
        expect(maxValue).to.be.below(50)
    });
});

describe('prepareStreamData', () => {
    it('Should exists', () => {
        expect(sender.prepareStreamData).to.exist;
    });
    
    let listToTest = sender.prepareStreamData(10);
    
    it('Should return correct range', () => {
        expect(listToTest.length).to.deep.equals(10);
    });
});
