// ------------------ FUNGSI UPDATE VAR --------------- //
// let variabelSuhu = document.getElementById("variabel-suhu");
// let updateVariabelSuhu = 0;
// let variabelPh = document.getElementById("variabel-ws");
// let updateVariabelPh = 0;
// let variabelCurahHujan = document.getElementById("variabel-hum");
// let updateVariabelCurahHujan = 0;

function updateVar(){
updateVariabelSuhu = Math.floor((Math.random() * 26) + 15);
variabelSuhu.innerText = updateVariabelSuhu;
updateVariabelPh = Math.floor((Math.random() * 14) + 1);
variabelPh.innerText = updateVariabelPh;
updateVariabelCurahHujan = Math.floor((Math.random() * 200) + 0);
variabelCurahHujan.innerText = updateVariabelCurahHujan;
}
window.setInterval(updateVar, 1000);

// ------------------ VARIABEL WARNA DASHBOARD --------------- //
let colorDb1 = document.getElementById("dashboard-1");
let hoverColorDb1 = document.getElementById("dashboard-1:hover");
let colorDb2 = document.getElementById("dashboard-2");
let hoverColorDb2 = document.getElementById("dashboard-2:hover");
let colorDb3 = document.getElementById("dashboard-3");
let hoverColorDb3 = document.getElementById("dashboard-3:hover");

// ------------------ FUNGSI GANTI WARNA SUHU --------------- //
function gantiWarnaSuhu(){
if (variabelSuhu.innerText > 35){
  colorDb1.style.backgroundColor = "red";
  hoverColorDb1.style.backgroundColor = "#2E94E3";
} else {
  colorDb1.style.backgroundColor = "#49FF39";
  hoverColorDb1.style.backgroundColor = "#2E94E3";
}
}
window.setInterval(gantiWarnaSuhu, 1000);

// ------------------ FUNGSI GANTI WARNA pH --------------- //
function gantiWarnaPh(){  
if (variabelPh.innerText > 7){
  colorDb2.style.backgroundColor = "red";
  hoverColorDb2.style.backgroundColor = "#2E94E3";
} else {
  colorDb2.style.backgroundColor = "#49FF39";
  hoverColorDb2.style.backgroundColor = "#2E94E3";
  }
}
window.setInterval(gantiWarnaPh, 1000);

// ------------------ FUNGSI GANTI WARNA CURAH HUJAN --------------- //
function gantiWarnaCurahHujan(){
if (variabelCurahHujan.innerText > 150){
  colorDb3.style.backgroundColor = "#8717ff";
  hoverColorDb3.style.backgroundColor = "#2E94E3";
} else if (variabelCurahHujan.innerText > 100 && variabelCurahHujan.innerText <= 150){
    colorDb3.style.backgroundColor = "#e22222";
    hoverColorDb3.style.backgroundColor = "#2E94E3";
  } else if (variabelCurahHujan.innerText > 50 && variabelCurahHujan.innerText <= 100){
      colorDb3.style.backgroundColor = "#ff8800";
      hoverColorDb3.style.backgroundColor = "#2E94E3";
    } else if (variabelCurahHujan.innerText > 20 && variabelCurahHujan.innerText <= 50){
        colorDb3.style.backgroundColor = "##fffb17";
        hoverColorDb3.style.backgroundColor = "#2E94E3";
      } else if (variabelCurahHujan.innerText > 0 && variabelCurahHujan.innerText <= 20){
          colorDb3.style.backgroundColor = "#49FF39";
          hoverColorDb3.style.backgroundColor = "#2E94E3";
        } else {
            colorDb3.style.backgroundColor = "#a3a3a3";
            hoverColorDb3.style.backgroundColor = "#2E94E3";
          }
}
window.setInterval(gantiWarnaCurahHujan, 1000);

// ------------------ BUAT JAM --------------- //
function updateClock(){
  var now = new Date();
  var dname = now.getDay(),
      mo = now.getMonth(),
      dnum = now.getDate(),
      yr = now.getFullYear(),
      hou = now.getHours(),
      min = now.getMinutes(),
      sec = now.getSeconds(),
      pe = "AM";

      if(hou >= 12){
        pe = "PM";
      }
      if(hou == 0){
        hou = 12;
      }
      if(hou > 12){
        hou = hou - 12;
      }

      Number.prototype.pad = function(digits){
        for(var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
      }

      var months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
      var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
      var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];
      for(var i = 0; i < ids.length; i++)
      document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}
function initClock(){
  updateClock();
  window.setInterval("updateClock()", 1);
}