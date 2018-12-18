// https://app.codesignal.com/interview-practice/task/5A8jwLGcEpTPyyjTB
function rotateImage(a) {
    return flipDiagonal(flipVertical(a));
}

function flipVertical(a) {
    for (let row = 0; row < a.length / 2; row++) {
        let temp = a[row];
        a[row] = a[a.length - 1 - row];
        a[a.length - 1 - row] = temp;
    }
    return a;
}

function flipDiagonal(a) {
    for (let row = 0; row < a.length - 1; row++) {
        for (let col = row + 1; col < a.length; col++) {
            let temp = a[row][col];
            a[row][col] = a[col][row];
            a[col][row] = temp;
        }
    }
    return a;
}
