function generate_cell_element() {
  let cell_element = document.createElement('div')
  cell_element.classList.add('cell', 'untouched')
  return cell_element
}

function generate_grid_element_from_grid(grid) {
  let grid_element = document.createElement('div')
  grid_element.classList.add('grid')
  grid.flat().forEach(element => grid_element.appendChild(element))
  return grid_element
}

function generate_grid() {
  let grid = Array.from(Array(28), () => new Array(28))
  for (let i = 0; i < 28; i++){
    for (let j = 0; j < 28; j++) {
      let cell = generate_cell_element()
      cell.addEventListener('mouseover', () => { if (mouseDown) change_color(i, j) })
      cell.addEventListener('mousedown', () => change_color(i, j))
      grid[i][j] = cell
    }
  }
  return grid
}

function fill_grid(pixels) {
  grid.flat().forEach((cell, i) => {
    color = pixels[i]
    cell.style.backgroundColor = rgb(color, color, color)
  })
}

function change_color(i, j) {
    grid[i][j].style.backgroundColor = rgb(255, 255, 255)
}

function inside_grid_bounds(i, j) {
  return i >= 0 && i <= 27 && j >= 0 && j <= 27
}

function getStringifiedGrid() {
  arr = []
  grid.flat().forEach(cell => {
    arr.push(get_color_val(cell))
  })
  return JSON.stringify(arr)
}

function get_color_val(cell) {
  let s = window.getComputedStyle(cell, null).getPropertyValue('background-color');
  return s.split(',')[1] * 1  // takes out one of the color values and converts it into a digit from 0-255
}

function rgb(r, g, b){
  return "rgb("+r+","+g+","+b+")";
}

function applyGaussianFilter(matrix) {
  // create a copy of the original matrix
  var output = Array.from(Array(28), () => new Array(28));

  // define the Gaussian filter
  var gaussianFilter = [[1/16, 1/8, 1/16],
                        [1/8, 1/4, 1/8],
                        [1/16, 1/8, 1/16]];

  // loop through each element of the matrix
  for (var i = 0; i < matrix.length; i++) {
      for (var j = 0; j < matrix[i].length; j++) {
          // set the current element as the center of the filter
          var sum = 0;
          for (var x = 0; x < 3; x++) {
              for (var y = 0; y < 3; y++) {
                  // check if the current filter position is within the matrix
                  var row = i + x - 1;
                  var col = j + y - 1;
                  if (row >= 0 && row < matrix.length && col >= 0 && col < matrix[i].length) {
                      sum += get_color_val(matrix[row][col]) * gaussianFilter[x][y] * 1.7;
                  }
              }
          }
          output[i][j] = sum;
      }
  }
  return output;
}

function blur_grid() {
  blurred = applyGaussianFilter(grid)

  for (let i = 0; i < 27; i++) {
    for (let j = 0; j < 27; j++) {
      color = blurred[i][j]
      grid[i][j].style.backgroundColor = rgb(color, color, color)
    }
  }
}

function submit_button() {
  blur_grid()
  pixel_field = document.getElementById('pixels')
  pixel_field.value = getStringifiedGrid()

  form = document.getElementById('canvas-menu-form')
  form.submit()
}

function clear_grid() {
  for (let i = 0; i < 27; i++) {
    for (let j = 0; j < 27; j++) {
      grid[i][j].style.backgroundColor = rgb(0,0,0)
    }
  }
}

function toggle_info() {
  msg = document.getElementById('info-alert')
  if (msg.style.visibility == 'visible')
    msg.style.visibility = 'hidden'
  else
    msg.style.visibility = 'visible'

}