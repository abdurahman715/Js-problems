//Reverse a sting
//1-Built-in methods
const str = "hello bro";
const reversed = str.split("").reverse().join("");
console.log(reversed);

//2-Using for loop
const str = "hello";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log(reversed);
