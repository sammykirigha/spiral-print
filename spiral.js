//print a given matrix in a spiral format
//SPIRAL PRINT

 
function spiralPrint(matrix) {
    let topRow = 0,
        leftCol = 0,
        btmRow = matrix.length - 1,
        rightCol = matrix[0].length - 1;
    
    while (topRow < btmRow && leftCol < rightCol) {
        for (let col = 0; col <= rightCol; col++){
            console.log(matrix[topRow][col]);
        }
        topRow++;
        for (let row = topRow; row <= btmRow; row++){
            console.log(matrix[row][rightCol]);
        }
        rightCol--;
        if (topRow <= btmRow) {
            for (let col = rightCol; col >= 0; col--){
                console.log(matrix[btmRow][col])
            }
            btmRow--
        }
        if (leftCol <= rightCol) {
            for (let row = btmRow; row > topRow; row--){
                console.log(matrix[row][leftCol]);
            }
            leftCol++
        }
    }
}

console.log(spiralPrint([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]))
//Time complexity: O(mn)
//Space Complexity:O(1)