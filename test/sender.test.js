const { expect } = require('chai');
const sender = require('../sender');

describe('randomValueGenerator', () => {
    it('Should exists', () => {
        expect(sender.randomValueGenerator).to.exist;
    });
    
    let list = sender.randomValueGenerator(1, 10, 5);
    
    it('Should return randomValue', () => {
        expect(list.length).to.deep.equals(5);
    });
    
    it('Should return temperature sensor exact value count', () => {
        expect(list.length).to.deep.equals(5);
    });
    
    it('Should return temperature sensor random value between the min and max value given', () => {
        let minValue = Math.min(...list);
        let maxValue = Math.max(...list);
        expect(minValue).to.be.above(0)
        expect(maxValue).to.be.below(10)
    });
});

describe('temperatureSensor', () => {
    it('Should exists', () => {
        expect(sender.temperatureSensor).to.exist;
    });
});

describe('socSensor', () => {
    it('Should exists', () => {
        expect(sender.socSensor).to.exist;
    });
});

describe('sensorStatistics', () => {
    it('Should exists', () => {
        expect(sender.sensorStatistics).to.exist;
    });
});
