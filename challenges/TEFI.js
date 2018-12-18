// https://app.codesignal.com/challenge/we9iKLGLCQMdzEvW3
function TEFI(board) {
    let tefi = [0, 0, 0, 0];
    board = board.map(r => r.split('')); // Thanks anthony
    
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            // Skip .'s
            if (board[row][col] == ".") continue;
            
            // Found upper left char
            board[row][col] = '.';
            
            // Check if I
            if (col + 1 == board[row].length || (col + 1 < board[row].length && board[row][col + 1] == '.')) {
                // Definitely I
                tefi[3]++;
                
                // Remove stars from I
                let nextRow = row + 1;
                while (nextRow < board.length && board[nextRow][col] == '*') {
                    board[nextRow][col] = '.';
                    nextRow++;
                }
                
            // Check if T
            } else if (row + 1 < board.length && board[row + 1][col] == '.') {
                // Definitely T
                tefi[0]++;
                
                // Remove stars from T
                let nextCol = col + 1;
                let stemFound = false;
                while (nextCol < board[row].length && board[row][nextCol] == '*') {
                    board[row][nextCol] = '.';
                    
                    // Check for Stem
                    if (!stemFound) {
                        let nextRow = row + 1;
                        while (nextRow < board.length && board[nextRow][nextCol] == '*') {
                            // Found the stem. lets remove it
                            board[nextRow][nextCol] = '.';
                            nextRow++;
                            if (!stemFound) {
                                stemFound = true;
                            }
                        }
                    }
                    nextCol++;
                }
            } else {
                // It's an E or F
                // Remove Top Row
                let nextCol = col + 1;
                while (nextCol < board[row].length && board[row][nextCol] == '*') {
                    board[row][nextCol] = '.';
                    nextCol++;
                }

                // Start removing the stem
                let nextRow = row + 1;
                while (nextRow < board.length && board[nextRow][col] == '*') {
                    board[nextRow][col] = '.';
                    nextCol = col + 1;

                    // Check if it's the last row of the letter
                    if (nextRow + 1 == board.length || (nextRow + 1 < board.length && board[nextRow + 1][col] == '.')) {
                        // Definitely last row
                        // Check if F or E
                        if (nextCol < board[nextRow].length && board[nextRow][nextCol] == '.') {
                            // It's an F
                            tefi[2]++;
                            
                        } else {
                            // It's an E
                            tefi[1]++

                            // Remove Bottom Row
                            while (nextCol < board[nextRow].length && board[nextRow][nextCol] == '*') {
                                board[nextRow][nextCol] = '.';
                                nextCol++;
                            }
                        }
                    } else {
                        // Not the Last row -- check for a middle row and remove it
                        while (nextCol < board[nextRow].length && board[nextRow][nextCol] == '*') {
                            board[nextRow][nextCol] = '.';
                            nextCol++;
                        }

                        nextRow++;
                    }
                }
            }
            
        }
    }
    
    return tefi;
}
