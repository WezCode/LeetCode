/**
 * @param {number[][]} grid
 * @return {number}
 * 
 * 
 * Time Taken: ~45 mins
 */

/*
You are given a map in form of a two-dimensional integer grid where 1 represents
land and 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). 

The grid is completely surrounded by water, and there is exactly one island 
(i.e., one or more connected land cells).

The island doesn't have "lakes" (water inside that isn't connected to the water
around the island). One cell is a square with side length 1.

The grid is rectangular, width and height don't exceed 100. 
Determine the perimeter of the island.
*/

/*Pseudocode solution

1. Can I assume that the length of each array is the same? (Start with yes)
2. Island can only be connected horizontally and vertically. This means that 
it can only differ by + - 1 in the same array (row) or the index of the array it is
in can differ by + - 1, and the index between the two arrays has to be the same.

3. To count the perimeter each block contributes, need to know how many "neighbours"
it has. A single block can have up to 4 neighbours, thus a single block can have 
a perimeter from 0 - 3 accordingly.

4. Create a method that checks each neighbour of a block and returns the perimeter for the block.
*/

// const grid = [
//     [0, 1, 0, 0],
//     [1, 1, 1, 0],
//     [0, 1, 0, 0],
//     [1, 1, 0, 0]
// ];

const grid = [[1, 0]];

var islandPerimeter = function (grid) {

    let perimeter = 0;
    const getSingleBlockPerimeter = (row, column) => {

        let neighbourCount = 0;

        // Check top neighbour
        neighbourCount += row === 0 ? 0 : grid[row - 1][column];
        // Check bottom neighbour
        neighbourCount += row === grid.length - 1 ? 0 : grid[row + 1][column];
        // Check right neighbour
        neighbourCount += column === grid[row].length - 1 ? 0 : grid[row][column + 1];
        // Check left neighbour
        neighbourCount += column === 0 ? 0 : grid[row][column - 1];

        return 4 - neighbourCount;
    }


    for (let rowIndex = 0; rowIndex < grid.length; ++rowIndex) {
        for (let columnIndex = 0; columnIndex < grid[rowIndex].length; ++columnIndex) {
            //If it is a land block
            if (grid[rowIndex][columnIndex] === 1) {
                perimeter += getSingleBlockPerimeter(rowIndex, columnIndex);
            }
        }
    }
    return perimeter;
};

console.log(islandPerimeter(grid));