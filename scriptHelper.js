// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    document.getElementById("missionTarget").innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src=${imageUrl}>`
};

function validateInput(testInput) {
    if (testInput === ''){
        return "Empty"
    } else if (isNaN(testInput)){
        return "Not a Number"
    } else return "Is a Number"
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot.value) !== "Not a Number" || validateInput(copilot.value) !== "Not a Number"  || validateInput(fuelLevel.value) !== "Is a Number"  || validateInput(cargoLevel.value) !== "Is a Number"){
        return false
        } else { 
            return true
        }
};

async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        // response.json().then(function(json){
        // console.log(json);//this is an array of JSON objects
        return response.json();
        // });
    });
    // console.log(planetsReturned);//this is undefinied
    return planetsReturned;
};

function pickPlanet(planets) {
    return planets[Math.floor(Math.random() * planets.length)];
};

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;