// Write your JavaScript code here!



window.addEventListener("load", function() { 
    
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const pilot = document.querySelector('input[name="pilotName"]').value;
    const copilot = document.querySelector('input[name="copilotName"]').value;
    const fuelLevel = document.querySelector('input[name="fuelLevel"]').value;
    const cargoMass = document.querySelector('input[name="cargoMass"]').value; 
    const list = document.getElementById("faultyItems")
    formSubmission(document , list ,pilot ,copilot, fuelLevel , cargoMass);
});
    let listedPlanets;
    let listedPlanetsResponse = myFetch(); 
    listedPlanetsResponse.then(function (result) { 
        listedPlanets = result; 
    
    }).then(function () {
        
       
         let planets = pickPlanet(listedPlanets); 
         let name = planets.name;  
         let diameter = planets.diameter;   
         let star = planets.star;
         let distance = planets.distance 
         let moons = planets.moons 
         let imageUrl = planets.image 

        console.log(name) 
        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) 
    })
    
 });