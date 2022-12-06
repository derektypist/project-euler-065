// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if input is valid
    if (isNaN(num) || num.length == 0 || num<2 || num>100 || (num.length>1 && num[0] == "0") || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 2 and 100.  Do not include leading zeros.`;
    } else {
        txt += `You have entered the number ${num}. <p>`;
        txt += `Sum of Digits in Numerator is ${convergentsOfE(num)} for the continued fraction of e.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

/*
    Function to return the sum of the digits of the nth convergent of
    the continued fraction for e

    convergentsOfE(10)  returns 17
    convergentsOfE(30)  returns 53
    convergentsOfE(50)  returns 91
    convergentsOfE(70)  returns 169
    convergentsOfE(100) returns 272
*/
function convergentsOfE(n) {
    function sumDigits(num) {
        let sum = 0n;
        while (num > 0) {
            sum += num % 10n;
            num = num / 10n;
        }
        return parseInt(sum);
    }

    let convergents = [[2n,1n], [3n,1n]];
    const multipliers = [1n,1n,2n];
    for (let i=2;i<n;i++) {
        const [secondLastConvergent, lastConvergent] = convergents;
        const [secondLastNumerator, secondLastDenominator] = secondLastConvergent;
        const [lastNumerator, lastDenominator] = lastConvergent;
        const curMultiplier = multipliers[i%3];
        const numerator = secondLastNumerator + curMultiplier * lastNumerator;
        const denominator = secondLastDenominator + curMultiplier * lastDenominator;
        convergents = [lastConvergent, [numerator, denominator]];
        if (i%3===2) multipliers[2] += 2n;
    }
    return sumDigits(convergents[1][0]);
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("numinfo").innerHTML = txt;
}