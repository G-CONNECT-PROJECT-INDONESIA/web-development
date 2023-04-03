const mqtt = require('mqtt');
const config = require('../config');

const client = mqtt.connect(`mqtt://${config.mqtt.host}:${config.mqtt.port}`);

// basic mqtt subscribe
client.on('connect', () => {
  console.log('MQTT client connected');
  client.subscribe(config.mqtt.topic);
});

let data = null;

// change received data to string on each receive
client.on('message', (topic, message) => {
  console.log(`Topic : "${topic}", Data : ${message.toString()}`);
  data = message.toString();
});

module.exports = {
  client,
  update_data: () => data
};
