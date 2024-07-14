document.getElementById("bmiform").addEventListener("submit", function (e) {
    e.preventDefault();
    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const heightfeet = parseFloat(document.getElementById("height-feet").value);
    const heightinch = parseInt(document.getElementById("height-inch").value);
    const weight = parseFloat(document.getElementById("weight").value);

    if (gender && age && heightfeet && heightinch && weight) {
        const heightinmeter = ((heightfeet * 12) + heightinch) * 0.0254;
        const bmi = weight / (heightinmeter * heightinmeter);
        const resultele = document.getElementById('result');

        let category = '';
        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal';
        } else {
            category = 'Overweight';
        }
        let resultmsg = 'Your BMI is ' + bmi.toFixed(2) + "<br>";
        resultmsg += "Category: " + category;
        resultele.innerHTML = resultmsg;
    }
});
