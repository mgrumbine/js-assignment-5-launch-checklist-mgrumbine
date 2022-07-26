window.addEventListener("load", function() {
    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        let choosenPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, choosenPlanet.name, choosenPlanet.diameter, choosenPlanet.star, choosenPlanet.distance, choosenPlanet.moons, choosenPlanet.image);
    });
    let list;
    const form = document.querySelector("form");
    const pilotInput = document.querySelector("input[name=pilotName]");
    const copilotInput = document.querySelector("input[name=copilotName]");
    const fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    const cargoLevelInput = document.querySelector("input[name=cargoMass]");
    const button = document.getElementById("formSubmit");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        if (pilotInput.value === "" || copilotInput.value === "" || fuelLevelInput.value === "" || cargoLevelInput.value === "" ){
            alert("All fields are required!");
        } else if (formSubmission(document, list, pilotInput, copilotInput, fuelLevelInput, cargoLevelInput) === false){
            alert("Make sure to enter valid information for each field!");
        } else if (fuelLevelInput.value <= 10000 && cargoLevelInput.value >= 10000){
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotInput.value} is ready for launch`;
            document.getElementById("copilotStatus").innerHTML = `Copilot ${copilotInput.value} is ready for launch`;
            document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
        } else if (fuelLevelInput.value < 10000) {
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotInput.value} is ready for launch`;
            document.getElementById("copilotStatus").innerHTML = `Copilot ${copilotInput.value} is ready for launch`;
            document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
        } else if (cargoLevelInput.value > 10000) {
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotInput.value} is ready for launch`;
            document.getElementById("copilotStatus").innerHTML = `Copilot ${copilotInput.value} is ready for launch`;
            document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
        } else {
            document.getElementById("launchStatus").innerHTML = "Shuttle ready for launch";
            document.getElementById("launchStatus").style.color = "green";
            document.getElementById("faultyItems").style.visibility = "hidden";
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotInput.value} is ready for launch`;
            document.getElementById("copilotStatus").innerHTML = `Copilot ${copilotInput.value} is ready for launch`;
            document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
        }
    })
});