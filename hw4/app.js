//You are given an array of integers having both negative and positive values, except for one integer which can be negative or positive. Create a function to find out that integer.

// Loop through the array and XOR each integer with the result
// for (let i = 0; i < arr.length; i++) {
//   lonelyInteger ^= arr[i];
// }

function findLonelyInteger(arr) {
  let lonelyInteger = arr.reduce((a, b) => a ^ b);
  return lonelyInteger;
}
// Example usage
let arr = [-9, -105, -9, -9, -9, -9, 105];
let lonelyInteger = findLonelyInteger(arr);
console.log(lonelyInteger); // Output: -6

//question2
//create a function named countCharacters that accepts two parameters, a character and a string. It should return the number of times the character is present in the string.

function countCharacters(char, str) {
  let count = 0;
  let arr = str.split(""); // تبدیل رشته به آرایه از کاراکترها
  arr.forEach((element) => {
    if (element === char) {
      count++;
    }
  });
  return count;
}

// Example usage
let char = "s";
let str = "JavaScript is awesome!";
let charCount = countCharacters(char, str);
console.log(
  `The character: "${char}" \n countCharacters: ${charCount} \n the string: "${str}".`
);
// Output: The character "a" appears 2 times in the string "JavaScript is awesome!".

//question3
function getDaysInMonth(month, year) {
  let dayCount;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      dayCount = 31;
      break; //If the month is 1, 3,5, 7, 8, 10, or 12, the number of days in a month is 31.
    case 4:
    case 6:
    case 9:
    case 11:
      dayCount = 30;
      break; //If the month is 4, 6, 9, or 11, the number of days in that month is 30.
    case 2:
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        dayCount = 29; //if the year is not the leap year
      } else {
        dayCount = 28; //If the year is the leap year
      }
      break;
    default:
      dayCount = -1;
      break;
    //branch executes and sets the dayCount variable to -1
    //If the month is not in the valid range (1-12)
  }

  return dayCount;
}
// Example usage
let month = 65;
let year = 2030;
let daysInMonth = getDaysInMonth(month, year);
console.log(`year:${year} \nThe month:${month} \ndays:${daysInMonth}`);
if (daysInMonth == -1) {
  console.log("indicates the invalid month");
}

//question4
//حلقه های تو در تویی برای الگوریتم مرتب سازی حبابی در جاوا اسکریپت استفاده می شود. در هر دور از حلقه، دو عنصر مجاور در آرایه بررسی می شوند و در صورتی که اولی بزرگتر از دومی باشد، جای آنها عوض می شود. این عملیات تا زمانی ادامه می یابد که دیگر هیچ جفتی از عناصری که باید جابجا شوند وجود نداشته باشد.
function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

var myArray = [3, 6, 1, 8, 2, 4, 9, 5, 7];
console.log(bubbleSort(myArray));