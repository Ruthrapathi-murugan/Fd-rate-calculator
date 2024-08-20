function start() {
    const month = Number(document.getElementById("input").value);

    let result1 = document.querySelector("#result");

    if (isNaN(month) || month < 1) {
        result1.innerHTML = "Please enter a valid month number between 1 and 12.";
        return;
    }

    let rate = 0;

    if (month < 3) {
        rate = 5.8;
    } else if (month >= 3 && month <= 6) {
        rate = 6.5;
    } else if (month >= 7 && month <= 9) {
        rate = 6.8;
    } else {
        rate = 7;
    }

    result1.innerHTML = `Your interest rate is ${rate}%`;
}
