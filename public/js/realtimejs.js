function scrollToElement() {
    const selectElem = document.getElementById("node-option");
    const selectedOption = selectElem.options[selectElem.selectedIndex];
    const targetId = selectedOption.value;
    const targetElem = document.querySelector(targetId);

    targetElem.scrollIntoView({ behavior: "smooth" });

}

// Battery 1
const batteryOutput = document.getElementById('btr1-percent');

function getBatteryData() {
    const batteryData = { battery: Math.floor(Math.random() * 45) + 50 };
    return batteryData;
}

function showBatteryData() {
    const batteryData = getBatteryData();
    batteryOutput.innerHTML = `${batteryData.battery} %`;
}
setInterval(showBatteryData, 1000);