// https://app.codesignal.com/challenge/Cfwd7gTQcNyTejNtf
function matrixToDecimal(matrix) {
    let number = "";
    for (let col = 0; col < matrix[0].length; col++) {
        let decimal = matrix[2][col] === "." ? "." : "";
        let total = matrix[0][col] === "|" ? 5 : 0;

        for (let i = 0; i < 5; i++) {
            if (matrix[3 + i][col] === "|") {
                number += total + i + decimal;
                break;
            }
        }    
    }
    return parseFloat(number);
}
