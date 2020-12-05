// Write your JavaScript code here!
window.addEventListener("load", function () {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      response.json().then(function (json) {
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
   //let form = document.getElementById("formSubmit");
   let form = document.querySelector("form");
   form.addEventListener("submit", function (event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let faultyItems = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus");
      if ((pilotNameInput.value === '') || (copilotNameInput.value === '') || (fuelLevelInput.value === '') || (cargoMassInput.value === '')) {
         alert("Please enter all information");
      } else if (isNaN(pilotNameInput.value) === false || isNaN(copilotNameInput.value) === false) {
         alert("Please enter valid name for Pilot Name or Co-pilot Name (or both)");
      } else if (isNaN(fuelLevelInput.value) === true || isNaN(cargoMassInput.value) === true) {
         alert("Please enter valid number for Fuel Level or Cargo Mass (or both)");
      
      } else {
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput.value} Ready`;
         document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotNameInput.value} Ready`;
         if (fuelLevelInput.value < 10000) {
            document.getElementById("faultyItems").style.visibility = `visible`;
            document.getElementById("fuelStatus").innerHTML = `Fuel level low for the launch`;
            document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`;
            document.getElementById("launchStatus").style.color = `red`;
         } else {
            document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`;
         }
         if (cargoMassInput.value > 10000) {
            document.getElementById("faultyItems").style.visibility = `visible`;
            document.getElementById("cargoStatus").innerHTML = `Cargo mass too high for launch`;
            document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`;
            document.getElementById("launchStatus").style.color = `red`;
         } else {
            document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`;
         }
         if (fuelLevelInput.value >= 10000 && cargoMassInput.value <= 10000) {
            document.getElementById("launchStatus").innerHTML = `Shuttle Ready for Launch`;
            document.getElementById("launchStatus").style.color = `green`;
            document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`;
            document.getElementById("faultyItems").style.visibility = `visible`;
         }
         event.preventDefault();
      }

   });
});


