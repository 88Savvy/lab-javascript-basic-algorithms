// Iteration 1: Names and Input

let hacker1 = "driverName1";
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "driverName2";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

// 3.1

let hacker1Capitalized = "";

for (let i = 0; i < hacker1.length; i++) {
  hacker1Capitalized += `${hacker1[i].toUpperCase()} `;
}

console.log(hacker1Capitalized);

// 3.2

let hacker2Reversed = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reversed += hacker2[i];
}

console.log(hacker2Reversed);

// 3.3

if (hacker1.localeCompare(hacker2) < 0) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log(`Yo, the navigator goes first, definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

// Bonus 1

let paragraphs =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed elit vitae sapien rutrum varius sed at augue. Vestibulum ultricies convallis nunc vel pharetra. Sed gravida metus tellus, at dictum nisl malesuada a. Nulla mauris nisi, volutpat vitae elit ac, facilisis euismod purus. Aliquam at molestie quam, in commodo eros. Nulla facilisi. Aliquam quis aliquet tortor, et cursus augue. Curabitur dignissim porta est hendrerit bibendum. In porttitor nunc vel ligula bibendum cursus. Morbi accumsan lorem ut nulla pulvinar, eget semper nibh elementum. Donec non massa malesuada, viverra risus ac, tempor neque. Nulla mollis, libero non molestie congue, dui sapien egestas leo, nec consequat leo dolor eu tortor. Morbi at lacus nunc. Aliquam aliquet libero quam. Nulla et risus consectetur, pulvinar leo vel, blandit lorem. Proin quis turpis a mi tincidunt eleifend. Quisque eu posuere magna. Ut in elit et nulla aliquam lacinia. In vitae tincidunt arcu. Quisque quis mi facilisis, lobortis ex quis, cursus purus. Sed luctus nunc eget varius ultricies. Aliquam felis enim, aliquet nec sem in, condimentum facilisis arcu. Vivamus facilisis id erat ac pharetra. Etiam auctor ipsum ligula, id dictum arcu viverra quis. Mauris molestie augue ut lacus bibendum, a imperdiet risus vehicula. Mauris tempor enim risus, ut elementum sem dignissim id. Nulla nec sem ut velit efficitur gravida. Aliquam ut egestas eros. Aliquam sed convallis mauris. Duis vehicula elementum luctus. Ut et scelerisque ex. Mauris tempus sollicitudin elit in posuere. Ut lacinia magna et pellentesque vehicula. Proin consectetur nec tellus a tincidunt. Maecenas eu erat tellus. Suspendisse cursus congue nibh. Donec non ligula a arcu maximus tristique quis quis nisi. Vestibulum interdum, odio quis gravida rutrum, lectus lectus efficitur dui, ac dignissim enim eros vitae nunc. Cras id posuere ex.";
let paragWordCount = 0;
let etCount = 0;

for (let i = 0; i < paragraphs.length; i++) {
  if (paragraphs[i] === " " || paragraphs[i] === "\n") {
    // check if [i] is a space or line break; if true, +1 to paragWordCount.
    paragWordCount++;
  }
}

console.log(paragWordCount);

for (let i = 0; i < paragraphs.length; i++) {
  if (paragraphs[i] + paragraphs[i + 1] === "et") {
    etCount++;
  }
}

console.log(etCount);

// Bonus 2

/* Through trial and error, I realized can't just compare the string to a reversed string as capital and special characters may affect the result */

let phraseToCheck = "Was it a car or a cat I saw?";
let cleanString = "";

for (let i = 0; i < phraseToCheck.length; i++) {
  if (
    phraseToCheck[i].toLowerCase() >= "a" &&
    phraseToCheck[i].toLowerCase <= "z"
  ) {
    cleanString += phraseToCheck[i].toLowerCase();
  }
}

console.log(cleanString);

/*Now, I can create a reversed string for comparison based on cleanString*/

let reversedString = "";

for (let i = cleanString.length - 1; i >= 0; i--) {
  reversedString += cleanString[i];
}

/*Finally, if cleanString === reverseString, phraseToCheck isPalindrome (true). I then print the result to check if logic is working */

let isPalindrome = cleanString === reversedString;

if (isPalindrome) {
  console.log(`${phraseToCheck} is a palindrome`);
} else {
  console.log(`${phraseToCheck} is not a palindrome`);
}
