// Write your JavaScript code here!
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      response.json().then(function(json) {
         let index = Math.floor(Math.random() * json.length);
         console.log(json[index].name)
         let missionTarget = document.getElementById("missionTarget");
         missionTarget.innerHTML += `
         <h2>Mission Destination</h2>
         <ol>
         <li>Name: ${json[index].name}</li>
         <li>Diameter: ${json[index].diameter}</li>
         <li>Star: ${json[index].star}</li>
         <li>Distance from Earth: ${json[index].distance}</li>
         <l1>Number of Moons: ${json[index].moons}</li>
         </ol>
         <img src="${json[index].image}">`
      });
   });

   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function(event) {
      event.preventDefault();

      let pilotNameInput = document.querySelector('input[name=pilotName]');
      let copilotNameInput = document.querySelector('input[name=copilotName]');
      let fuelLevelInput = document.querySelector('input[name=fuelLevel]');
      let cargoMassInput = document.querySelector('input[name=cargoMass]');
      let faultyItems = document.getElementById('faultyItems');      
      let launchStatus = document.getElementById('launchStatus');
      let pilotStatus = document.getElementById('pilotStatus');
      let copilotStatus = document.getElementById('copilotStatus');
      let fuelStatus = document.getElementById('fuelStatus');
      let cargoStatus = document.getElementById('cargoStatus');
      document.getElementById('launchStatus').innerHTML = "Awaiting Information Before Launch"
      document.getElementById('launchStatus').style.color = "black";
      document.getElementById('pilotStatus').innerHTML = `Pilot ${pilotNameInput.value} Ready`;
      document.getElementById('copilotStatus').innerHTML = `Co-Pilot ${copilotNameInput.value} Ready`;
      document.getElementById('fuelStatus').innerHTML = "fuel level is high enough for launch";
      document.getElementById('cargoStatus').innerHTML = "Cargo Mass is low enough for launch";


      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!");
      } else if (!isNaN(Number(pilotNameInput.value))) {
         alert("Invalid Input: Please enter a valid Pilot Name")
      } else if (!isNaN(Number(copilotNameInput.value))) {
         alert("Invalid Input: Please enter a valid Co-Pilot Name")
      } else if (typeof Number(fuelLevelInput.value) !== "number" || isNaN(Number(fuelLevelInput.value))) {
         alert("Invalid Input: Please enter a valid number in Fuel Level")
      } else if (typeof Number(cargoMassInput.value) !== "number" || isNan(Number(cargoMassInput.value))) {
         alert("Invalid Input: Please enter a valid number in Cargo Mass")
      } else {
         faultyItems.style.visibility = 'visible';
         if (fuelLevelInput.value < 10000) {
            document.getElementById('fuelStatus').innerHTML = "Fuel level low for the launch";
            document.getElementById('launchStatus').innerHTML = "Shuttle not ready for launch";
            document.getElementById('launchStatus').style.color = "red";
         }
         if (cargoMassInput.value > 10000) {
            document.getElementById('cargoStatus').innerHTML = "Cargo mass high for launch!";
            document.getElementById('launchStatus').innerHTML = "Shuttle not ready for launch";
            document.getElementById('launchStatus').style.color = "red";
         }
         if (fuelLevelInput.value >= 10000 && cargoMassInput.value <= 10000) {
            launchStatus.innerHTML = "Shuttle ready for launch";
            launchStatus.style.color = 'green';
            pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} Ready`;
            copilotStatus.innerHTML = `Co-Pilot ${copilotNameInput.value} Ready`;
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
         }
         if (fuelLevelInput.value >= 10000) {
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
         }
         if (cargoMassInput.value <= 10000) {
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
         
         }
      }
   });
});
