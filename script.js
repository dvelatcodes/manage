console.log("you are connected");

"A man a plan a canal Panama"

// creation of a function
function isPalindrome(sentence) {
    // line below is to remove all the empty spaces from the  string "sentence"
    let ink = sentence.replaceAll(' ', '');

    // line below is to transform the string to lower case
    let update = ink.toLowerCase();

    // line below is to transform the update variable to an array
    let result = [...update];

    // line below is to get the last value in the array
    let endVal = result.length - 1;

    // line below is a variable to confirm if the start and end value in the array are the same 
    let checker = false;

    // line 25 is a "for loop"
    // i++ means i = i + 1
    // i-- means i = i - 1
    for (let i = 0; i < result.length; i++) {
        if (result[i] === result[endVal]) {
            checker = true;
        }
        else if (result[i] != result[endVal]) {
            checker = false;
        }
        endVal--
        if (i === result.length - 1) {
            if (checker === true) {
                console.log(`${sentence} => is a palindrome`);
                return true;
            }
            else {
                console.log(sentence + ` => is not a palindrome`);
                return false;
            }
        }
        i = i + 1
    }
}


// the code below calls the function
isPalindrome("apple");

