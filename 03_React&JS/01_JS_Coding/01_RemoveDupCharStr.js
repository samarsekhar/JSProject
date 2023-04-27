// Code: 1 - Remove Duplicate characters from String ?

function removeDuplicateChar() {
  const string = "priya riya supriya";

  const result = string
    .split("")
    .filter((item, index, arr) => {
      return arr.indexOf(item) == index;
    })
    .join("");
  return result;
}
console.log(removeDuplicateChar());

//
const chars = "priya riya supriya";
const uniqueChars = chars.filter((item, index) => {
  return chars.indexOf(item) === index;
});
console.log(uniqueChars);

//
// const str = "priya riya supriya";
// const res = "";
// for (let i = 0; i < str.length; i++) {
//   if (res.indexOf(str[i]) == -1) {
//     res.push(str[i]);
//   }
// }
// console.log("Remove Duplicate Characters:", res);

// function removeDupChar(str) {
//   const result = "";
//   for (let i = 0; i < str.length; i++) {
//     if (result.indexOf(str[i]) == -1) {
//       result += str[i];
//     }
//   }
//   return result;
// }

// const inputString = "priya riya supriya";
// const resultString = removeDupChar(inputString);
// console.log(resultString);
