//print a given matrix in a spiral format
//SPIRAL PRINT

 
function spiralPrint(m, n, matrix) {
    let i, k = 0, l = 0;
    let lastRow = m - 1, lastCol = n - 1;
    
    while (k < lastRow && l < lastCol) {
        for (let i = 0; i <= lastCol; i++){
            console.log(matrix[k][i]);
        }
        k++;
        for (let i = k; i <= lastRow; i++){
            console.log(matrix[i][lastCol])
        }
        lastCol--;
        if (k <= lastRow) {
            for (let i = lastCol; i >= l; i--){
                console.log(matrix[lastRow][i])
            }
            lastRow--
        }
        if (l <= lastCol) {
            for (let i = lastRow; i >= k; i--){
                console.log(matrix[i][l])
            }
            l++
        }
    }
}

var matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
]

console.log(spiralPrint(4,5, matrix))

//METHOD TWO USING RECURSION WITH A HELPER FUNCTION

let input = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16] 
]

function spiralReversal(matriks) {
    let result = [];
    function goAround(matrix) {
        if (matrix.length === 0) {
            return;
        }
        //right
        result = result.concat(matrix.shift());
        //down
        for (let i = 1; i < matrix.length - 1; i++){
            result.push(matrix[i].pop())
        }
        //bottom
        result = result.concat(matrix.pop().reverse())
        //upward
        for (let k = matrix.length - 2; k > 0; k--){
            result.push(matrix[k].shift())
        }
        return goAround(matrix)
    }
    goAround(matriks);
    return result;
}

// console.log(spiralReversal(input))



//METHOD 3

function run(input, result) {
    if (input.length === 0) {
        return result;
    }
    //add the first row to result
    result = result.concat(input.shift())
    //add the last element in each remaining row
    input.forEach(function (rightEnd) {
        result.push(rightEnd.pop())
    })
    //add the last row to result in reverse order
    result = result.concat(input.pop().reverse())
    //add the first element in the each remaining row upwards
    let temp = [];
    input.forEach(function (leftEnd) {
        temp.push(leftEnd.shift())
    })
    result = result.concat(temp.reverse())
    return run(input, result)
}

console.log(run(input, []))