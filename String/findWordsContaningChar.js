//2942-Find words containgin character
//Approach-1 Builtin methods
function findWordsContaining(words, x) {
  let res = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      res.push(i);
    }
  }
  return res;
}

//Approach-2
function findWordsContaining(words, x) {
  let res = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === x) {
        res.push(i);
        break;
      }
    }
  }
  return res;
}

let words = ["leeot", "code"];
let x = "o";
let result = findWordsContaining(words, x);
console.log(result);
