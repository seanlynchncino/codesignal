//
detectTempo = waveform => {
    let beats = getBeats(waveform);
    let tempo = Infinity;
    
    for (let index = 0; index < beats.length - 1; index++) {
        for (let i = index + 1; i < beats.length; i++) {
            let diff = beats[i] - beats[index];
            if (diff == 1 || diff > tempo) continue;
            
            let passing = true;
            for (let beat = beats[i] % diff; beat < waveform[0].length && passing; beat += diff) {
                if (!beats.includes(beat)) passing = false;
            }
            
            if (passing) tempo = diff;
        }
    }
    
    return tempo;
}

getBeats = waveform => {
    let beats = [];
    for (let i = 0; i < waveform[0].length; i++) {
        if (waveform[0][i] == "#" && waveform[waveform.length - 1][i] == "#") {
            beats.push(i);
        }
    }
    return beats;
}
