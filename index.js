// Iteration 1: Names and Input
const hacker1 = "Eric";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Mat";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if(hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

// Iteration 3: Loops
//3.1
let charDriver = "";

for (let i = 0; i < hacker1.length; i += 1 ){
  charDriver += hacker1[i] + ' ';
  
}
console.log(charDriver.toUpperCase())

//3.2

let hacker2Reverse = "";

for(let i = hacker2.length-1; i >= 0; i -= 1){
  hacker2Reverse += hacker2[i];
  
}
console.log(hacker2Reverse)

//3.3
let result = hacker1.localeCompare(hacker2);


if(result === -1){
  console.log("The driver's name goes first.");
} else if (result === 0){
  console.log("What?! You both have the same name?");
} else {
  console.log("Yo, the navigator goes first, definitely.");
}




// Bonus 1:

const longText =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et massa vestibulum, efficitur tellus a, pretium nisl. Duis mauris nisi, iaculis non justo sit amet, pellentesque aliquet lectus. Donec dapibus placerat egestas. Donec sit amet mattis nibh, ut feugiat urna. Quisque finibus nulla nec velit consectetur vehicula. Ut varius mauris ac odio volutpat, a efficitur nunc ultricies. Aliquam semper dolor nec ipsum cursus, et sodales lacus viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce ac volutpat augue. Donec posuere leo quis lorem bibendum, consequat auctor orci mattis.

Nullam in mi id ex porta aliquet non id nibh. Vivamus accumsan eleifend nunc in blandit. Ut nec erat at neque imperdiet fermentum. Nam rutrum sodales massa eget bibendum. Proin viverra accumsan ipsum, eget dapibus velit ullamcorper ac. Quisque ut tempor eros. Aenean egestas, dolor ut facilisis pellentesque, lacus ante lobortis enim, a placerat nulla velit a leo. Donec magna lorem, feugiat ac felis eget, condimentum dapibus quam. Quisque arcu lectus, suscipit in erat vel, aliquet laoreet neque. Quisque gravida, urna at pulvinar tempor, leo velit congue nulla, eget viverra augue tortor et sem. Sed vel aliquam elit. Maecenas sollicitudin metus leo, et laoreet lacus accumsan eget.

Fusce sit amet dolor ultrices, volutpat nulla at, lobortis quam. Duis ornare pulvinar eros, sed suscipit purus pellentesque ac. Aenean non ipsum facilisis sapien cursus porttitor ultricies nec ante. Proin varius euismod commodo. Suspendisse potenti. Proin vehicula justo a facilisis eleifend. Suspendisse potenti. Donec vehicula, arcu ac luctus varius, magna purus feugiat sapien, mollis dignissim dolor ante a leo. Nulla dui eros, vestibulum nec mi sit amet, sagittis fringilla eros. Suspendisse at fringilla sem, sit amet hendrerit leo. Proin facilisis erat et metus ultricies, quis cursus turpis semper. Morbi laoreet pulvinar turpis sit amet eleifend. Nam quis neque massa. Nulla suscipit, nibh sit amet imperdiet iaculis, nisi ligula tincidunt leo, et bibendum velit turpis at est.`

const countWords = longText.length;
let etCount = 0;

console.log(countWords);

for(let i=0; i<longText.length; i+=1){
  let etWord = ' ' + longText[i] + longText[i+1] + ' ';
if(etWord ===" et "){
  etCount += 1;
}
}

console.log(etCount)

//Bonus 2
let phraseToCheck = "No 'x' in Nixon";
let wordReverse = "";
let lettersOnly = phraseToCheck.replace(/\W/g, '');

for (let i = lettersOnly.length-1; i >= 0; i -= 1){
  wordReverse += lettersOnly[i];
}
  if (wordReverse.toLowerCase() === lettersOnly.toLowerCase()){
    console.log(`It's a Palindrome!`)
  } 
else {
    console.log(`It's not a Palindrome!`)
  }
