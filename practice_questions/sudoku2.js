// https://app.codesignal.com/interview-practice/task/SKZ45AF99NpbnvgTn
function sudoku2(grid) {
    return checkRows(grid) && checkCols(grid) && checkSections(grid);
}

function checkSections(grid) {
    for (let i = 0; i < 9; i++) {
        let row = 3 * (~~(i / 3));
        let colStart = 3 * (i % 3);
        let colEnd = colStart + 3;
        if (!checkRow(grid[row].slice(colStart, colEnd).concat(
                grid[row + 1].slice(colStart, colEnd), 
                grid[row + 2].slice(colStart, colEnd)))) 
            return false;
    }
    return true;
}

function checkCols(grid) {
    return checkRows(transposeGrid(grid));
}

function transposeGrid(grid) {
    return grid.map((col, i) => grid.map(row => row[i]));
}

function checkRows(grid) {
    for (let row = 0; row < grid.length; row++) {
        if (!checkRow(grid[row])) {
            return false;
        }
    }
    return true;
}

function checkRow(rowData) {
    let nums = {}
    for (let element of rowData) {
        if (element == '.') continue;
        if (nums[element]) {
            return false;
        } else {
            nums[element] = 1;
        }
    }
    return true;
}

