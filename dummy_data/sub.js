var mqtt = require("mqtt");
var client = mqtt.connect("mqtt:broker.hivemq.com"); //connect to free public mqtt broker
var topic = "asu123";

client.on("message", (topic, message) => {
  message = message.toString();
  //var obj = JSON.parse(message);
  //console.log("ph : " + obj.ph);
  console.log(message);
 // document.getElementById("val").innerHTML = message;
});

client.on("connect", () => {
  client.subscribe(topic);
});

