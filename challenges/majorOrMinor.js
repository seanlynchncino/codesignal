// https://app.codesignal.com/challenge/unNteEzHcKKDsdjtq
majorOrMinor = scale => {
    return (getNoteNum(scale[2]) + getNoteNum(scale[1])) % 2 ? "minor" : "major";
}

getNoteNum = note => {
    let num = ((note.charCodeAt() % 65 + 5) % 7) * 2;
    num > 4 ? num-- :0;

    return note[2] ? ++num : num;
}
