const { expect } = require('chai');
const sender = require('../sender');

describe('randomValueGenerator', () => {
    it('should exists', () => {
        expect(sender.randomValueGenerator).to.exist;
    });
});

describe('temperatureSensor', () => {
    it('should exists', () => {
        expect(sender.temperatureSensor).to.exist;
    });
});

describe('socSensor', () => {
    it('should exists', () => {
        expect(sender.socSensor).to.exist;
    });
});

describe('sensorStatistics', () => {
    it('should exists', () => {
        expect(sender.sensorStatistics).to.exist;
    });
});
