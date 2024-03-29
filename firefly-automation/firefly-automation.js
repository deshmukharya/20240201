
// Constants defining the dimensions of the border grid
const WIDTH = 50;
const HEIGHT = 30;
const BORDER_WIDTH = 52; // Extra space for "|" at both ends
const BORDER_HEIGHT = 32; // Extra space for "-" at both ends

// Default characters for the grid
const default_character = " ";
const border_character = "-";
const blink_character = "*";

/**
 * Creates the initial border grid with specified dimensions and characters.
 * @returns {Array} 2D array representing the border grid.
 */
function createBorderGrid() {
  let returnArray = [];
  for (let hindex = 0; hindex < BORDER_HEIGHT; hindex++) {
    let newRow = [];
    returnArray.push(newRow);
    for (let windex = 0; windex < BORDER_WIDTH; windex++) {
      if (hindex === 0 || hindex === BORDER_HEIGHT - 1 || windex === 0 || windex === BORDER_WIDTH - 1) {
        newRow.push(border_character);
      } else {
        newRow.push(default_character);
      }
    }
  }
  return returnArray;
}

/**
 * Prints the given border grid to the console.
 * @param {Array} borderGrid - 2D array representing the border grid.
 */
function printBorderGrid(borderGrid) {
  for (let hindex = 0; hindex < BORDER_HEIGHT; hindex++) {
    let rowString = "";
    for (let windex = 0; windex < BORDER_WIDTH; windex++) {
      rowString += borderGrid[hindex][windex];
    }
    console.log(rowString);
  }
}

/**
 * Updates the border grid by placing a blinking star at a random position and handles out-of-bounds scenarios.
 * @param {Array} borderGrid - 2D array representing the border grid.
 */
function updateBorderGrid(borderGrid) {
  // Generate random delta values for coordinates
  let deltaRow = Math.floor(Math.random() * 3) - 1; // Random number between -1, 0, 1
  let deltaCol = Math.floor(Math.random() * 3) - 1; // Random number between -1, 0, 1

  // Calculate new coordinates
  let newRow = Math.floor(Math.random() * (BORDER_HEIGHT - 2)) + 1 + deltaRow; // Exclude border rows
  let newCol = Math.floor(Math.random() * (BORDER_WIDTH - 2)) + 1 + deltaCol; // Exclude border columns

  // Check if the star goes out of bounds
  if (newRow < 1 || newRow >= BORDER_HEIGHT - 1 || newCol < 1 || newCol >= BORDER_WIDTH - 1) {
    // Create a new border grid
    borderGrid = createBorderGrid();
    // Place the star at the new position
    borderGrid[newRow][newCol] = blink_character;
  } else {
    // Place the star at the new position
    borderGrid[newRow][newCol] = blink_character;
  }

  // Print the updated border grid
  printBorderGrid(borderGrid);

  // Reset the border grid to default after a short delay (200 milliseconds)
  setTimeout(() => {
    borderGrid[newRow][newCol] = default_character;
    printBorderGrid(borderGrid);
  }, 200);
}

// Create the initial border grid
let borderGrid = createBorderGrid();
// Set interval to update the border grid with the blinking star every 2 seconds
setInterval(() => {
  updateBorderGrid(borderGrid);
}, 2000);

