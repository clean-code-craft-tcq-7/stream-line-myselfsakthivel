/*
Main sender file
Author: Sakthivel Karthikeyan
*/

// to generate the random data;
function randomDataGenerator(min, max, range) {
    var randomlist = [];
    for (let i = 0; i < range; i++) {
        var lowerLimit = Number(min);
        var upperLimit = Number(max);
        var randomData = Math.floor(Math.random() * (upperLimit - lowerLimit) + lowerLimit);
        randomlist.push(randomData);
    }
    return randomlist;
}

// to simulate the temperature changes; min = 0*c and max = 125*C;
function simulateTemperatureSensor(randomDataNeeded) {
    var min = 0;
    var max = 125;
    return randomDataGenerator(min, max, randomDataNeeded);
}

// to simulate the soc sensor changes; min = 20volt and max = 50volts;
function simulateSocSensor(randomDataNeeded) {
    var min = 20;
    var max = 50;
    return randomDataGenerator(min, max, randomDataNeeded);
}

// to combine the two params as one in JSON format
function prepareStreamData(dataNeeded) {
    var stream = [];
    var temperatureData = simulateTemperatureSensor(dataNeeded);
    var socData = simulateTemperatureSensor(dataNeeded);
    for (let i = 0; i < dataNeeded; i++) {
        stream.push({ temperature: temperatureData[i], voltage: socData[i] });
    }
    printToConsole(stream);
}

function printToConsole(parameters) {
    /* output format; its an array of objects;
    [{"temperature":66,"voltage":112}]
    */
    console.log(JSON.stringify(parameters));
}

prepareStreamData(50);

module.exports = {
    randomDataGenerator,
    simulateTemperatureSensor,
    simulateSocSensor,
    prepareStreamData,
    printToConsole
};
