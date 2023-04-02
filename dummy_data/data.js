var mqtt = require("mqtt");
var client = mqtt.connect("mqtt:broker.hivemq.com"); // connect to free public mqtt broker
var topic = "test123l";
// var message = "780";
// let message = "6";
const char = "0123456789";
const charLength = char.length;

var message = {hum:5.8, tds:740, water_level:96};
var phVal;
var tdsVal;
var waterVal;

var text = JSON.stringify(message);

function getRandom() {
	var msg = {hum:5.8+Math.random()*0.02, tds:540+Math.random()*10, water_level:94};
	var text = JSON.stringify(msg);
	return text;
}

// function randstr() {
//   while (true) {
//     for (let i = 0; i < 2; i++) {
//       message += char.charAt(Math.floor(Math.random() * charLength));
//     }
//   }
// }
let i = 0;
client.on("connect", () => {
  setInterval(() => {
    // client.publish(topic, "tas3");
    i = String(i);
    text = getRandom();
    client.publish(topic, text);
    console.log(text);
    i++;
  }, 500);
});

// client.on("connect", () => {
//   // setInterval(() => {
//   // client.publish(topic, message);

//   while (true) {
//     setInterval(() => {
//       for (let i = 0; i < 2; i++) {
//         message += characters.charAt(Math.floor(Math.random() * charactersLength));
//         client.publish(topic, message);
//         console.log("Message : ", message);
//       }
//     }, 1000);
//   }
//   // }, 1000);
// });
