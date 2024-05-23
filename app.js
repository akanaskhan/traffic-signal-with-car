var startBtn = document.getElementById("start")
var carDiv = document.getElementById("carDiv")
var car = document.getElementById("car")
var carPosition = 300;
var count = true

// function Start(){
//     console.log("test")
//     carDiv.innerHTML = '<dotlottie-player  src="https://lottie.host/7adc21f7-71be-433a-ac21-13549d6ab96f/22aqHrq8qM.json" background="transparent" speed="1" loop autoplay></dotlottie-player>'
//     carDiv.setAttribute("class","carDiv, carAnimation");
//     carDiv.innerHTML = '<dotlottie-player class = ""  src="https://lottie.host/7adc21f7-71be-433a-ac21-13549d6ab96f/22aqHrq8qM.json" background="transparent" speed="1" loop ></dotlottie-player>'
//     carDiv.style.left = -200 + "px";
// }

// GETTING ELEMENTS FROM HTML
// var car = document.querySelector(".car");
// var redLight = document.querySelector(".redLight");
// var signalTwoRed = document.querySelector(".signalTwoRed");
// var greenLight = document.querySelector(".greenLight");
// var signalTwoGreen = document.querySelector(".signalTwoGreen");
// var yellowLight = document.querySelector(".yellowLight");
var startBtn = document.getElementById("startBtn");
var stopBtn = document.getElementById("stopBtn");
var count = -12;
var refId = "";
function Start(event) {
  var ref = setInterval(() => {
    // carDiv.innerHTML = '<dotlottie-player  src="https://lottie.host/7adc21f7-71be-433a-ac21-13549d6ab96f/22aqHrq8qM.json" background="transparent" speed="1" loop autoplay></dotlottie-player>'
    carDiv.style.left = count + "%";
    // redLight.style.backgroundColor = "rgb(255, 255, 255, 0.3)";
    setTimeout(() => {
      if (count <= 75) {
        count += 1;
      }
      if (count >= 65) {
        Stop();
      }
      if (count >= 55) {
        signalTwoRed.style.backgroundColor = "red";
        signalTwoGreen.style.backgroundColor = "rgb(255, 255, 255, 0.3)";
      }
    }, 1000);
  }, 100);
  startBtn.style.backgroundColor = "rgb(2, 92, 2)";
//   greenLight.style.backgroundColor = "green";
  stopBtn.style.backgroundColor = "red";
  refId = ref;
  carDiv.style.left = -200 + "px";
}

function Stop() {
  stopBtn.style.backgroundColor = "rgb(182, 3, 3";
  startBtn.style.backgroundColor = "green";
  clearInterval(refId);
}
