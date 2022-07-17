window.addEventListener("load", function() {
    const form = document.querySelector("form");
    const pilotInput = document.querySelector("input[name=pilotName]");
    const copilotInput = document.querySelector("input[name=copilotName]");
    const fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    const cargoLevelInput = document.querySelector("input[name=cargoMass]");
    const button = document.getElementById("formSubmit");
    form.addEventListener("submit", function(event) {
        if (pilotInput.value !== "" && copilotInput.value !== "" && fuelLevelInput.value !== "" && cargoLevelInput.value !== "" ){
            console.log("not blank");
            if (formSubmission(document, list, pilotInput, copilotInput, fuelLevelInput, cargoLevelInput) === true){
                console.log("Correct data types");
                if (fuelLevelInput.value >= 10000 && cargoLevelInput.value <= 10000){
                    event.preventDefault(); 
                    console.log("Shuttle ready");
                    document.getElementById("launchStatus").innerHTML = "Shuttle ready for launch";
                    document.getElementById("launchStatus").style.color = "green";
                } else if (fuelLevelInput.value < 10000 || cargoLevelInput.value > 10000){
                    event.preventDefault();
                    console.log("too little fuel or too much cargo");
                    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotInput.value} is ready for launch`;
                    document.getElementById("copilotStatus").innerHTML = `Copilot ${copilotInput.value} is ready for launch`;
                    document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
                    document.getElementById("launchStatus").style.color = "red";
                    document.getElementById("faultyItems").style.visibility = "visible";
                    if (fuelLevelInput.value < 10000) {
                        console.log("too little fuel");
                        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
                    }
                    if (cargoLevelInput.value > 10000) {
                        console.log("too much cargo");
                        document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
                    }
                } else {
                    console.log("we failed");
                }
            } else {
                event.preventDefault(); 
                alert("Make sure to enter valid information for each field!");
                console.log("atleast one data field incorrect");
            }
        } else { 
            event.preventDefault(); 
            alert("All fields are required!");
            console.log("atleast one blank");
        }
    })
});


//             if  {
        
        
//         (pilotInput.value === "" || copilotInput.value === "" || fuelLevelInput.value === "" || cargoLevelInput.value === "" ){
//             event.preventDefault(); 
//             alert("All fields are required!");
//             console.log("atleast one blank"); 
//         } else if (formSubmission(pilotInput, copilotInput, fuelLevelInput, cargoLevelInput) === false) {
//             event.preventDefault(); 
//             alert("Pilot name and co-pilot name must be text! Fuel level and cargo mass must be numbers!");
//             console.log("atleast one data form incorrect");
//         } else if (fuelLevelInput.value < 10000 || cargoLevelInput.value > 10000) {
//             console.log("too little fuel or too much cargo");
//             document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotInput.value} is ready for launch`;
//             document.getElementById("copilotStatus").innerHTML = `Copilot ${copilotInput.value} is ready for launch`;
//             document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
//             document.getElementById("launchStatus").style.color = "red";
//             document.getElementById("faultyItems").style.visibility = visible;
//                 if (fuelLevelInput < 10000) {
//                     document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
//                 }
//                 if (cargoLevelInput > 10000) {
//                     document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for launch";
//                 }
//         } else {
//                 document.getElementById("launchStatus").innerHTML = "Shuttle ready for launch";
//                 document.getElementById("launchStatus").style.color = "green";
//         }
//     })
// });


// window.addEventListener("load", function() {

//     let listedPlanets;
//     // Set listedPlanetsResponse equal to the value returned by calling myFetch()
//     let listedPlanetsResponse;
//     listedPlanetsResponse.then(function (result) {
//         listedPlanets = result;
//         console.log(listedPlanets);
//     }).then(function () {
//         console.log(listedPlanets);
//         // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
//     })
    
//  });