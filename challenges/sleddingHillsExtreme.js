// https://app.codesignal.com/challenge/LxnQG73ppitjERCdn
function sleddingHillsExtreme(enjoyability, maxRuns) {
    let total = 0;
    let eSorted = enjoyability.sort((a, b) => b - a);
    
    let currentMax = eSorted[0];
    let numAtMax = 1;
    
    while (maxRuns > 0) {
        // Find the amount of numbers at the maximum
        while (eSorted[numAtMax] === currentMax) {
            numAtMax++;
        }
        
        // Find the value that is next
        let nextVal = eSorted[numAtMax] || 0;
        
        // Find how many runs it will take to reach the next value (or until out of runs)
        let runs = numAtMax *(currentMax - nextVal)
        runs = Math.min(runs, maxRuns);
        if (!runs) {
            break;
        }
        
        // Find the number of times every value at the current max can be added
        let fullRuns = ~~(runs / numAtMax);
        total += numAtMax * getSumOfSeries(currentMax, fullRuns);
        currentMax -= fullRuns;
        
        // Find the number of runs left over
        // If this is positive, then this should be the last runs
        let leftOverRuns = runs % numAtMax
        total += leftOverRuns * currentMax;
        
        // Decrement for all the runs accounted for
        maxRuns -= runs;
    }
    
    return total % (1e9 + 7);
}

function getSumOfSeries (start, runs) {
    return runs * (2 * start - runs + 1) / 2;
}
