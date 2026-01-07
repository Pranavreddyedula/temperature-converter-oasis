function convertTemp() {
    const input = document.getElementById("tempInput").value;
    const unit = document.getElementById("unit").value;
    const result = document.getElementById("result");

    if (input === "") {
        result.innerHTML = "❌ Please enter a temperature value.";
        return;
    }

    let temp = parseFloat(input);
    let output = "";

    if (unit === "celsius") {
        let f = (temp * 9/5) + 32;
        let k = temp + 273.15;
        output = `${f.toFixed(2)} °F | ${k.toFixed(2)} K`;
    }
    else if (unit === "fahrenheit") {
        let c = (temp - 32) * 5/9;
        let k = c + 273.15;
        output = `${c.toFixed(2)} °C | ${k.toFixed(2)} K`;
    }
    else if (unit === "kelvin") {
        let c = temp - 273.15;
        let f = (c * 9/5) + 32;
        output = `${c.toFixed(2)} °C | ${f.toFixed(2)} °F`;
    }

    result.innerHTML = `✅ Converted Temperature:<br>${output}`;
}
