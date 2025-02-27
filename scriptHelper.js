// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    const missionTarget = document.getElementById('missionTarget');
    
    missionTarget.innerHTML  = ` <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter:  ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src="${imageUrl}"> `;
    
 }
 
 function validateInput(testInput) {
    if (testInput === '') {
        return 'Empty';
    } else if (isNaN(testInput)) {
        return 'Not a Number';
    } else {
        return 'Is a Number';
    }
}

function formSubmission(document , list ,pilot ,copilot, fuelLevel , cargoMass) {
    // const pilot = document.getElementById('pilotName').value;
    // const copilot = document.querySelector('input[name="copilotName"]').value;
    // const fuelLevel = document.querySelector('input[name="fuelLevel"]').value;
    // const cargoLevel = document.querySelector('input[name="cargoMass"]').value;

    const pilotValidation = validateInput(pilot);
    const copilotValidation = validateInput(copilot);
    const fuelLevelValidation = validateInput(fuelLevel);
    const cargoLevelValidation = validateInput(cargoMass);

    const launchStatus = document.getElementById('launchStatus');
    const pilotStatus = document.getElementById('pilotStatus');
    const copilotStatus = document.getElementById('copilotStatus');
    const fuelStatus = document.getElementById('fuelStatus');
    const cargoStatus = document.getElementById('cargoStatus');
    const faultyItems = document.getElementById('faultyItems');

    
    

    if (pilotValidation === 'Empty' || copilotValidation === 'Empty' || fuelLevelValidation === 'Empty' || cargoLevelValidation === 'Empty') {
        alert('All fields are required!');
        launchStatus.innerHTML = 'Awaiting Information Before Launch';
        faultyItems.style.visibility = 'hidden';
    } else if (fuelLevelValidation !== 'Is a Number') {
        alert('Fuel level must be a valid number!');
        launchStatus.innerHTML = 'Awaiting Information Before Launch';
        faultyItems.style.visibility = 'hidden';
    } else if (cargoLevelValidation !== 'Is a Number') {
        alert('Cargo mass must be a valid number!');
        launchStatus.innerHTML = 'Awaiting Information Before Launch';
        faultyItems.style.visibility = 'hidden';
    } else {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        
    }
    

   
    if (Number(fuelLevel) < 10000 || Number(cargoMass) > 10000) {
        faultyItems.style.visibility = 'visible';
        launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
        launchStatus.style.color = 'red';
    
        if (Number(fuelLevel) < 10000) {
            fuelStatus.textContent = 'Fuel level too low for launch!';
        } else {
            fuelStatus.innerHTML = 'Fuel level high enough for launch';
        }
    
        if (Number(cargoMass) > 10000) {
            cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
        } else {
            cargoStatus.textContent = 'Cargo mass low enough for launch';
        }
    } else {
        fuelStatus.innerHTML = 'Fuel level high enough for launch';
        cargoStatus.textContent = 'Cargo mass low enough for launch'; 
        launchStatus.style.color =  'green'; 
        launchStatus.innerHTML = 'Shuttle is Ready for Launch';
    }
    

    
    // if (launchStatus.innerHTML === 'Awaiting Information Before Launch') {
    //     launchStatus.innerHTML = 'Shuttle is Ready for Launch';
    //     launchStatus.style.color =  'green';
    //     faultyItems.style.visibility = 'hidden';
    // }
}



 
 async function myFetch() {
     let planetsReturned;  
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) { 
        return response.json()
         });
 
     return planetsReturned;  
 }
 
 function pickPlanet(planets) { 
    let random = Math.floor(Math.random() * planets.length);
    return planets[random];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch; 














//  if (Number(fuelLevel) < 10000) {
//     fuelStatus.textContent = 'Fuel level too low for launch!';
//     faultyItems.style.visibility = 'visible';
//     launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
//     launchStatus.style.color = 'red';
// } else {
//     fuelStatus.innerHTML = 'Fuel level high enough for launch';
// }

// if (Number(cargoMass) > 10000) {
//     cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
//     faultyItems.style.visibility = 'visible';
//     launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
//     launchStatus.style.color = 'red';
// } else {
//     cargoStatus.textContent = 'Cargo mass low enough for launch';
// }


// if (launchStatus.innerHTML === 'Awaiting Information Before Launch') {
//     launchStatus.innerHTML = 'Shuttle is ready for Launch';
//     launchStatus.style.color = 'green';
//     faultyItems.style.visibility = 'hidden';
// }