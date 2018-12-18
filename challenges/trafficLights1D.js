// https://app.codesignal.com/challenge/RNEKN3MFMDxGwHYab
function trafficLights1D(roadMap) {
    let len = roadMap.length;
    let totalTime = 0,
        lastDistance = 0;
    for (let i = 0; i < len; i++) {
        let currentInterval = roadMap[i][1];
        
        if (i > 0) {
            lastDistance = roadMap[i - 1][0];
        }
        totalTime += roadMap[i][0] - lastDistance;
        

        if (Math.trunc(totalTime / currentInterval) % 2) {
            totalTime += currentInterval - totalTime % currentInterval;
        }

    }
    
    return totalTime;
}
