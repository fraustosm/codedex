document.getElementById("checkButton").addEventListener("click", function () {
    var year = parseInt(document.getElementById("year").value);
    var resultElement = document.getElementById("result");

    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                resultElement.textContent = year + " is a leap year.";
            } else {
                resultElement.textContent = year + " is NOT a leap year.";
            }
        } else {
            resultElement.textContent = year + " is a leap year.";
        }
    } else {
        resultElement.textContent = year + " is NOT a leap year.";
    }
});
