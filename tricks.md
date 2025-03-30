**Creating a array of some length and populating with some value**

let x = Array.from({length:5}).fill(10)
let x = Array.from({length:5},()=>0)
let x = new Array(5).fill(10)


**Creating a 2D array of some length and populating with some value**

let x = Array.from({length:ROW},()=>new Array(COL).fill(0))