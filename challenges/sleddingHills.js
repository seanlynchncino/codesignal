// https://app.codesignal.com/challenge/LLvSQBNDeLXqdksrX
function sleddingHills(enjoyability, maxRuns) {
    let total = 0;
    while (maxRuns > 0) {
        let nextRun = Math.max(...enjoyability);
        
        if (!nextRun) {
            break;
        }
        total += nextRun;
        enjoyability[enjoyability.indexOf(nextRun)]--;
        maxRuns--;
        
    }
    return total;
}
