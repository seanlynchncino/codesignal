// https://app.codesignal.com/interview-practice/task/pMvymcahZ8dY4g75q
function firstDuplicate(array) {
    let obj = {};
    for (var element of array) {
        if (obj[element]) {
            return element;
        }
        obj[element] = element;
    }
    return -1;
}
