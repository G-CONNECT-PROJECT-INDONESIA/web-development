var mqtt = require("mqtt");
var client = mqtt.connect("mqtt:broker.hivemq.com"); // connect to free public mqtt broker
var topic = "test123l";
// var message = "780";
// let message = "6";
const char = "0123456789";
const charLength = char.length;

// var message = {hum:5.8, tds:740, water_level:96};
var wind;
var hum;
var temp;
var soil;
var lat;
var long;
var acx;
var acy;
var acz;

// var text = JSON.stringify(message);

function getRandom() {
	var msg = {wind:5.8+Math.random()*0.02, hum:540+Math.random()*10, temp:540+Math.random()*10, soil:540+Math.random()*10, lat:5.8+Math.random()*0.02, long:5.8+Math.random()*0.02, acx:5.8+Math.random()*0.02, acy:5.8+Math.random()*0.1, acz:5.8+Math.random()*0.02};
	var text = JSON.stringify(msg);
	return text;
}

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

// function randstr() {
//   while (true) {
//     for (let i = 0; i < 2; i++) {
//       message += char.charAt(Math.floor(Math.random() * charLength));
//     }
//   }
// }

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
