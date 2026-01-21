function benchQualityChecker(coatingThickness, isHighTraffic) {
    // Write code here

    if (coatingThickness < 50)
    return "Terrible - Replace immediately!";
    else if (coatingThickness >= 50 && coatingThickness <= 100 && isHighTraffic) 
    return "Poor - Needs recoating soon";
    else if (coatingThickness >= 50 && coatingThickness <= 100 && !isHighTraffic)
    return "Acceptable - Monitor closely"
    else if ( coatingThickness > 100 && coatingThickness <= 150)
    return "Good - No action needed";
    else (coatingThickness > 150)
    return "Excellent - Overcoated!";

}

console.log(benchQualityChecker(151, true));  // Expected output: "High Quality"

// feito direto no git 

