var mqtt = require("mqtt");
var client = mqtt.connect("mqtt:broker.hivemq.com"); //connect to free public mqtt broker
var topic = "asu123";

  // Chat gpt
  function parseDataString(dataString) {
    var dataArray = dataString.split('#');
    return dataArray;
    }

client.on("message", (topic, message) => {
  message = message.toString();
  // var obj = JSON.parse(message);
  // console.log("ph : " + obj.ph);
  const parsedData = parseDataString(message);

  // console.log(message);
  console.log("data1 = " + parsedData[0] + " data2 =" + parsedData[1] + " data3 =" + parsedData[2]);
  // console.log("data1 = " + parsedData[0] + " data2 =" + parsedData[1] + " data3 =" + parsedData[2]);
  // console.log("data1 = " + parsedData[0] + " data2 =" + parsedData[1] + " data3 =" + parsedData[2]);
 // document.getElementById("val").innerHTML = message;
});

client.on("connect", () => {
  client.subscribe(topic);
});