// Chat gpt
function parseDataString(dataString) {
  var dataArray = dataString.split(/[$#?]/);
  return dataArray;
}

//mqtt
function mqttconnect() {
  clientID = "clientID-" + parseInt(Math.random() * 100);
  host = "broker.hivemq.com";
  port = 8000;

  client = new Paho.MQTT.Client(host, Number(port), clientID);
  //callback
  //   client.onConnectionLost = onConnectionLost;

  //connect
  setInterval(() => {
    client.connect({
      onSuccess: onConnect,
    });
  });
}

function onConnect() {
  topic = "asu123";
  client.subscribe(topic);
  client.onMessageArrived = onMessageArrived;
}

function onConnectionLost(responseObject) {
  //   console.log("onConnectionLost: connection!");
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost: " + responseObject.errorMessage);
  }
}

function onMessageArrived(message) {
  // var parameters = JSON.parse(message.payloadString);
  const parameters = parseDataString(message.payloadString);

  // console.log("onMessageArrived: " + message.payloadString);
  console.log("onMessageArrived : " + parameters.windspeed);
  //  document.getElementById("tds-value").innerHTML = parameters.tds;
  document.getElementById("variabel-ws").innerHTML = parameters[0];
  document.getElementById("variabel-hum").innerHTML = parameters[1];
  document.getElementById("variabel-temp").innerHTML = parameters[2];
  document.getElementById("variabel-soil").innerHTML = parameters[3];
  document.getElementById("variabel-lat").innerHTML = parameters[4];
  document.getElementById("variabel-long").innerHTML = parameters[5];
  document.getElementById("variabel-acx").innerHTML = parameters[6];
  document.getElementById("variabel-acy").innerHTML = parameters[7];
  document.getElementById("variabel-acz").innerHTML = parameters[8];
  updateScroll();
}

// Grafik
const data = [];
const data2 = [];
let prev = 100;
let prev2 = 80;
for (let i = 0; i < 1000; i++) {
  prev += 5 - Math.random() * 10;
  data.push({
    x: i,
    y: prev
  });
  prev2 += 5 - Math.random() * 10;
  data2.push({
    x: i,
    y: prev2
  });
}

const totalDuration = 10000;
const delayBetweenPoints = totalDuration / data.length;
const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    datasets: [{
      borderColor: 'yellow',
      borderWidth: 1,
      radius: 0,
      data: data,
    }, {
      borderColor: 'orange',
      borderWidth: 1,
      radius: 0,
      data: data2,
    }]
  },
  options: {
    animation: {
      x: {
        type: 'number',
        easing: 'linear',
        duration: delayBetweenPoints,
        from: NaN, // the point is initially skipped
        delay(ctx) {
          if (ctx.type !== 'data' || ctx.xStarted) {
            return 0;
          }
          ctx.xStarted = true;
          return ctx.index * delayBetweenPoints;
        }
      },
      y: {
        type: 'number',
        easing: 'linear',
        duration: delayBetweenPoints,
        from: previousY,
        delay(ctx) {
          if (ctx.type !== 'data' || ctx.yStarted) {
            return 0;
          }
          ctx.yStarted = true;
          return ctx.index * delayBetweenPoints;
        }
      }
    },
    interaction: {
      intersect: false
    },
    plugins: {
      legend: false
    },
    scales: {
      x: {
        type: 'linear'
      }
    }
  }
});