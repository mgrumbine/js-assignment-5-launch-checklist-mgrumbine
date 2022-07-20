window.addEventListener("load", function() {;
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
        if (pilotInput.value !== "" && copilotInput.value !== "" && fuelLevelInput.value !== "" && cargoLevelInput.value !== "" ){
            if (formSubmission(document, list, pilotInput, copilotInput, fuelLevelInput, cargoLevelInput) === true){
                if (fuelLevelInput.value >= 10000 && cargoLevelInput.value <= 10000){
                    event.preventDefault(); 
                    document.getElementById("launchStatus").innerHTML = "Shuttle ready for launch";
                    document.getElementById("launchStatus").style.color = "green";
                } else {
                    event.preventDefault();
                    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotInput.value} is ready for launch`;
                    document.getElementById("copilotStatus").innerHTML = `Copilot ${copilotInput.value} is ready for launch`;
                    document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
                    document.getElementById("launchStatus").style.color = "red";
                    document.getElementById("faultyItems").style.visibility = "visible";
                    if (fuelLevelInput.value < 10000) {
                        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
                    }
                    if (cargoLevelInput.value > 10000) {
                        document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
                    }
                }
            } else {
                event.preventDefault(); 
                alert("Make sure to enter valid information for each field!");
            }
        } else { 
            event.preventDefault(); 
            alert("All fields are required!");
        }
    })
});