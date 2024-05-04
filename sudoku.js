function getRow(puzzle, row) {
  let rowArray=[]
  for (i=0;i<9; i++){
    rowArray.push(puzzle[row][i])
  }
  return rowArray
}


function getColumn(puzzle, col) {
  let colArray =[]
  for (i=0; i<9; i++){
    colArray.push(puzzle[i][col])
}
return colArray
}

function getSection(puzzle, x, y) {
let sectionArray = []
function getSectionNums(num){
  if (num === 0) {
    return [0,1,2];
  } else if (num === 1) {
      return [3,4,5];
  } else {
      return [6,7,8];
  }
  }
      rows = getSectionNums(y),
      columns = getSectionNums(x);
  rows.forEach(row => {
    columns.forEach(column => {
      sectionArray.push(puzzle[row][column]);
    })
  })
return sectionArray;
}
console.log(getSection(puzzle,2,2))
console.log(getSection(puzzle,2,1))

function includes1To9(arr){
  let pass;
  arr=arr.slice().sort()
  for (i=0;i<9;i++){
    if (arr[i]== i + 1){
      pass = true
    } else pass=false
}
return pass
}



function sudokuIsValid(puzzle) {
  let validRow = [];
  let validCol = [];
  let validSect = [];
  for (i = 0; i < 9; i++){
    if (includes1To9(getRow(puzzle,i))=== true){
      validRow.push(true)
    }else {
      validRow.push(false)
    }
  }
  for (i=0;i<9;i++){
    if (includes1To9(getColumn(puzzle,i))===true){
      validCol.push(true)
    }else {validCol.push(false)
    }
  }
  for (i=0; i<3; i++){
    for (j=0; j<3; j++){
      if (includes1To9(getSection(puzzle,i,j))===true){
        validSect.push(true)
      }else {
        validSect.push(false)
      }
    }
  }
  if ((validRow.includes(false) !== true) && (validCol.includes(false) !== true) && (validSect.includes(false) !== true)){
    return true
  }else {
    return false
  }
}

getRow(puzzle, 8);
getRow(puzzle, 0);
getColumn(puzzle, 0);
getColumn(puzzle, 8);
getSection(puzzle, 0, 0);
getSection(puzzle, 1,0);
