// https://app.codesignal.com/interview-practice/task/yM4uWYeQTHzYewW9H
function isCryptSolution(crypt, solution) {
    let betterSol = {};
    for (let i = 0; i < solution.length; i++) {
        betterSol[solution[i][0]] = solution[i][1];
    }
    let total = 0;
    for (let i = 0; i < 2; i++) {
        let num = getNum(crypt[i], betterSol);
        if (num != -1) {
            total += num;
        } else {
            return false;
        }
    }
    return total == getNum(crypt[2], betterSol);
}

function getNum(word, solution) {
    if (solution[word[0]] == 0 && word.length > 1) {
        return -1;
    }
    
    let num = '';
    for (let i = 0; i < word.length; i++) {
        num += solution[word[i]];
    }
    return +num;
}
