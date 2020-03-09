module.exports = function countCats(backyard) {
  let count = 0;
  for (let i = 0; i < backyard.length; i++) {
    for (let j = 0; j < backyard[i].length; j++) {
      (backyard[i][j] === "^^") ? count++ : count + 0 ;
    }
  }
  return count;
};