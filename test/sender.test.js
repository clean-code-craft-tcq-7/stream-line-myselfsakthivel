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
        expect(minValue).to.be.at.most(0)
        expect(maxValue).to.be.at.least(10)
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
        expect(minValue).to.be.at.most(0)
        expect(maxValue).to.be.at.least(125)
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
        expect(minValue).to.be.at.most(20)
        expect(maxValue).to.be.at.least(50)
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
    
    it('Should return correct objects with keys', () => {
        let singleObj = listToTest[0];
        expect(singleObj).to.have.property('temperature');
        expect(singleObj).to.have.property('voltage');
    });
});
