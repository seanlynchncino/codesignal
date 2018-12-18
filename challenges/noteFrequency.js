// https://app.codesignal.com/challenge/cWB64385L6Fe6zD4D
const noteFrequency = note => {
    let offset = ((note.charCodeAt(0) % 65 + 5) % 7) * 2;
    offset > 4 ? offset-- :0;

    note.length > 2 ? (note[1] == "b" ? offset-- : offset++) :0;

    return 16.35159783 * 2 ** (~~note.slice(-1) + offset / 12);
}
