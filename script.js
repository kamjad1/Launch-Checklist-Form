// Write your JavaScript code here!
window.addEventListener("load", function () {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      response.json().then(function (json) {
         let index = Math.floor(Math.random() * json.length);
         console.log(json[index].name)
         let missionTarget = document.getElementById("missionTarget");
         missionTarget.innerHTML = `
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

   let form = document.getElementById("launchform");
   form.addEventListener("submit", function (event) {
      event.preventDefault();

      let pilotNameInput = document.querySelector('input[name=pilotName]');
      let copilotNameInput = document.querySelector('input[name=copilotName]');
      let fuelLevelInput = document.querySelector('input[name=fuelLevel]');
      let cargoMassInput = document.querySelector('input[name=cargoMass]');

      document.getElementById('launchStatus').innerText = "Awaiting Information Before Launch"
      document.getElementById('launchStatus').style.color = "black";
      document.getElementById('pilotStatus').innerText = `Pilot ${pilotNameInput.value} Ready`;
      document.getElementById('copilotStatus').innerText = `Co-Pilot ${copilotNameInput.value} Ready`;
      document.getElementById('fuelStatus').innerText = "fuel level is high enough for launch";
      document.getElementById('cargoStatus').innerText = "Cargo Mass is low enogh for launch";


      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All field are required!");
      } else if (typeof String(pilotNameInput.value) !== "string") {
         alert("Pilot name required");
      } else if (!isNaN(Number(pilotNameInput.value))) {
         alert("Invalid Input: Please enter a valid Pilot Name")
      } else if (typeof String(copilotNameInput.value) !== "string") {
         alert("Co Pilot name required");
      } else if (!isNaN(Number(copilotNameInput.value))) {
         alert("Invalid Input: Please enter a valid Co-Pilot Name")
         //typeof Number(fuelLevelInput.value) !== "number" ||
      } else if (isNaN(Number(fuelLevelInput.value))) {
         alert("Invalid Input: Please enter a valid Number  in Fuel Level Input")
         //typeof Number(cargoMassInput.value) !== "number" ||
      } else if (isNan(Number(cargoMassInput.value))) {
         alert("Invalid Input: Please enter a valid Number in Cargo Mass Input")
      } else {
         faultyItems.style.visibility = 'visible';
         if (Number(fuelLevelInput.value) < 10000) {
            document.getElementById('launchStatus').innerText = "Fuel is not enough for the journey!";
            document.getElementById('launchStatus').innerText = "Shuttle not ready for launch!";
            document.getElementById('launchStatus').style.color = "red";
         }
         if (Number(cargoMassInput.value) > 10000) {
            document.getElementById('cargoStatus').innerText = "Cargo mass is too high for launch!";
            document.getElementById('launchStatus').innerText = "Shuttle not ready for launch!";
            document.getElementById('launchStatus').style.color = "red";
         }
         if (fuelLevelInput.value >= 10000 && cargoMassInput.value <= 10000) {
            launchStatus.innerText = "Shuttle is ready for launch";
            launchStatus.style.color = 'green';
            pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
            copilotStatus.innerHTML = `Co-Pilot ${copilotNameInput.value} is ready for launch`;
            fuelStatus.innerText = "Cargo mass low enough for launch";
            cargoStatus.innerText = "Cargo mass low enough for launch"
         }
         if (fuelLevelInput.value >= 10000) {
            fuelStatus.innerText = `Cargo mass low enough for launch`;
         }
         if (cargoMassInput.value <= 10000) {
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
         }
      }
   })
})
