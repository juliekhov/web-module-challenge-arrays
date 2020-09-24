var originalFlavors = ["Banana Nut Fudge",
    "Black Walnut",
    "Burgundy Cherry",
    "Butterscotch Ribbon",
    "Cherry Macaron",
    "Chocolate",
    "Chocolate Almond",
    "Chocolate Chip",
    "Chocolate Fudge",
    "Chocolate Mint",
    "Chocolate Ribbon",
    "Coffee",
    "Coffee Candy",
    "Date Nut",
    "Eggnog",
    "French Vanilla",
    "Green Mint Stick",
    "Lemon Crisp",
    "Lemon Custard",
    "Lemon Sherbet",
    "Maple Nut",
    "Orange Sherbet",
    "Peach",
    "Peppermint Fudge Ribbon",
    "Peppermint Stick",
    "Pineapple Sherbet",
    "Raspberry Sherbet",
    "Rocky Road",
    "Strawberry",
    "Vanilla",
    "Vanilla Burnt Almond"
]

/* Task 1: Confirm that the array is exactly 31 flavors. Your function should accept:

(1) an array 

Your function should return a boolean TRUE if the length of the array is 31 and FALSE if the length of the array is NOT 31.

To save you from having to count the items above, you can assume that length of originalFlavors is 31. You may also want to test your function by creating and passing an array of a different length, to make sure it returns FALSE if length is not 31. 

i.e. is31Flavors(originalFlavors) will return TRUE.*/
// const numNums = ["13", 10, "4" ];

function is31Flavors(originalFlavors) {
    if (originalFlavors.length == 31) {
        return true;
    } else {
        return false;
    }

}

/* Task 2: Corporate has come to you with an idea for a new flavor: Rainbow Sherbert! They think this will be a game changer. You need to modify the array to include this flavor. 

Your function should accept:

(1) an array 
(2) a flavor

Your function should add the flavor to the front of the array and console.log the resulting array.

For example if called as follows addFlavor("Rainbow Sherbert", originalFlavors) should return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla Burnt Almond"] */

function addFlavor(firstFlav, originalFlavors) {

    originalFlavors.unshift(firstFlav);
    console.log(originalFlavors);

}

addFlavor(firstFlav, originalFlavor);

/* Task 3: Houston, we have a problem! There are now 32 flavors in the array! Your task is to remove an item from the end of the array. 

Your function should accept:

(1) an array 

Your function should remove a flavor from the end of the array and console.log the resulting array.

For example removeLastFlavor(originalFlavors) would return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla"]*/

function removeLastFlavor(originalFlavors) {

    originalFlavors.pop();
    console.log(originalFlavors);
}

/* Task 4: Write a function that returns a flavor at a given index in the array.

Your function should accept:

(1) an array 
(2) an index

For example, getFlavorByIndex(originalFlavors, 2) would return "Black Walnut", assuming Rainbow Sherbert has been added successfully. */

function getFlavorByIndex(originalFlavors, index) {
    return originalFlavors[index];

    // the getFlavorByIndex function with parameters originalFlavors array and integer 2 for the index, function will return a flavor at a given position in the array

}

/* Task 5: As corporate wants to add more and more flavors to their lineup, they've realized that they need to remove flavors based on flavor name, 
           as opposed to just arbitrarily removing the first or last flavor. Your task is to get an index by flavor name, and remove that flavor from the array. 

Your function should accept: 

(1) an array
(2) a string (flavor)

For example, removeFlavorByName(originalFlavors, "Vanilla") would return an array with the length 30 including all of the flavors except Vanilla. 

Hint: You can use .splice() for this

*/

function removeFlavorByName(originalFlavors, flavor) {
    for (let index in originalFlavors) {
        if (originalFlavors[index] == flavor) {
            // use this specific index value to splice the array, such that the result does not contain Vanilla.
            originalFlavors.splice(index, 1);
            // After removing 1 item starting at index in the array, the expected output is
            // the entire array without that single item at index
            return originalFlavors;
        }
    }
}


/* Task 6: With all of these changes going on, we don't want to lose track of the actual, original 31 flavors. Write a function called copy that makes a copy of the array. 

Your function should accept: 

2 arguments 1 for your new array and one for your original array

and should return a new array that is identical to the old array. You can name the new array however you'd like. */

function copy(clonedOriginal, originalFlavors) {

    clonedOriginal = [...originalFlavors];
    return clonedOriginal;

}

/* Task 7: July 7th is "World Chocolate Day" and Baskin Robins wants to create promotional materials highlighting 
           all of their chocolate flavors. Write a function that checks every item in the array for a given string 
           and returns a new array called filteredArray with just these values. 
           Rather than hardcoding "chocolate" into your function, pass a string as a parameter, and invoke with the 
           argument "chocolate". This way you could also filter for "Vanilla", 
           "Sherbert", etc. when those holidays roll around.

Your function should accept: 

(1) an Array
(2) a string (i.e. "chocolate")

USE ES6 "..." for spread operator
e.g. [...proLangs]

and return a new array. 

For example, filterByWord(originalFlavors, "Chocolate") should return ["Chocolate", "Chocolate Almond",..."Chocolate Ribbon"].

DO NOT USE ADVANCED ARRAY METHODS (i.e. .filter) to solve this problem.

hint - you can use the .includes method to help you solve this */

function filterByWord(originalFlavors, stringFlavor) {

    let filteredArray = new Array();

    for (let index in originalFlavors) {
        if (originalFlavors[index].includes("chocolate")) {
            filteredArray.unshift(originalFlavors[index]);
        }
    }
    return filteredArray;
}



/* 🧁🍦🍨 STRETCH 🍨🍦🍫*/

/* STRETCH 1: Write a function that returns the average number of words in an array. You should be able to use this function for any array, but can test with originalFlavors.

Your function should accept: 

(1) an array

and should return the average number of words per item in the array. 

For example, getAverageWordLength(originalFlavors) should return a number between 0 and 3. */


// console.log("average number of words per flavor string: " + getAverageWordLength(originalFlavors));

// returns the average number of words per string literal / item
function getAverageWordLength(originalFlavors) {
    // variable for number of spaces
    let spaces = 0;
    // variable for number of words in a given string
    let words;
    // we also need to add the words from each string

    let totalWords = 0;

    // weird...totalWords is being read as a string
    // console.log displays NaN...?
    // so we initialize it to 0 which is an integer
    //  console.log(totalWords);

    // check each index in the OG array, ex. index = 0
    for (let index in originalFlavors) {

        // console.log("this is the index we are on: " + index);
        // nested for loop, for each index in the 31 flavors array
        // we will look through the entire phrase (striteral)
        // index = 0 and i = 0 means 
        for (let i in originalFlavors[index]) {

            // console.log("i value: " + i);
            // for-in loop for second layer (the string describing the flavor)
            if (originalFlavors[index][i] == ' ') {
                spaces++;
                // console.log("number of spaces so far: " + spaces);
            }
        }
        // the number of words is always one more than the number of spaces
        words = spaces + 1;

        // console.log("number of words: " + words);
        // after finding the number of words in a string
        // we want to reset spaces to 0 for the next flavor / string
        spaces = 0;
        // how many words total so far? totalWords starts at 0
        totalWords += words;

        // console.log("totalWords: " + totalWords);
        // reset number of words after using it to get totalWords
        words = 0;
    }
    // console.log("total number of words: " + totalWords);
    // once the main for loop ends, totalWords will contain all the words in the flavor strings
    // the avg number of words per string is: avg = totalWords / 31
    return Math.round(totalWords / 31);
}

/* STRETCH 2: Baskin Robins now offers new flavors, seasonal flavors, and even regional flavors. Write a function that will randomly select a total of 31 flavors from originalFlavors, currentFlavors, seasonalFlavors, and regionalFlavors.

Your function should accept 4 different arrays,

and should return a new array called randomFlavors with a length 31.

forExample, getRandomFlavors(originalFlavors, newFlavors, seasonalFlavors, regionalFlavors) might return ["Strawberry Cheesecake", "Eggnog,"..."Chocolate"].*/

// Data ⬇️
var newFlavors = ["Date night",
    "U.S.S Butterscotch (Stranger Things special)",
    "Honey Almond",
    "Mint Chocolate Chip",
    "Chocolate",
    "Oreo® Cookies'n Cream",
    "Chocolate Chip",
    "Pralines 'n Cream",
    "Very Berry Strawberry",
    "Chocolate Chip Cookie Dough",
    "Old Fashioned Butter Pecan",
    "Jamoca®",
    "Jamoca® Almond Fudge",
    "Reese's® Peanut Butter Cup",
    "Rocky Road",
    "Peanut Butter ’n Chocolate",
    "Gold Medal Ribbon®",
    "World Class® Chocolate",
    "Cherries Jubilee",
    "Chocolate Fudge",
    "Daiquiri Ice",
    "Rainbow Sherbet",
    "Rainbow Swirl"
]
var seasonalFlavors = ["America's Birthday Cake",
    "Baseball Nut®",
    "Blueberry Cheesecake",
    "Bourbon Street Pecan Pie",
    "Brownie Bar Mashup",
    "Cherry Cordial with Kisses",
    "Chocolate Mousse Royale",
    "French Vanilla",
    "Eggnog",
    "German Chocolate Cake",
    "Icing on the Cake",
    "Love Potion #31",
    "New York Cheesecake",
    "Nutty Coconut",
    "Peppermint",
    "Strawberry Cheesecake",
    "Rock ’n Pop Swirl",
    "Reese’s Peanut Butter Cup",
    "Trick Oreo Treat",
    "Winter White Chocolate",
    "made with Snickers®",
    "made with M&M's®",
    "Heath®",
    "Mango Tango",
]
var regionalFlavors = ["Pink Bubblegum",
    "Caramel Macchiato",
    "York Peppermint Pattie",
    "Cotton Candy",
    "Orange Sherbet",
    "Grape Ice",
    "Watermelon Ice",
    "Miami Vice Sorbet",
    "Splish Splash®",
    "Wild 'n Reckless Sherbet",
    "Lemon Custard",
    "Oregon Blackberry",
    "Bananas ‘n Strawberries",
    "Mississippi Mud",
    "Rum Raisin",
    "Creole Cream Cheese",
    "Chocolate Almond",
    "Fudge Brownie",
    "Banana Nut",
    "Black Walnut",
    "Cotton Candy Crackle",
    "Quarterback Crunch",
    "Chocolate Chocolate Chip Cheesecake",
    "Caramel 'n' Cookies"
]

function getRandomFlavors(originalFlavors, newFlavors, seasonalFlavors, regionalFlavors) {

    // Need to select random numbers in indices for 4 arrays.
    // Choose 7 or 8 random flavors from each Array and ensure they combine to 31.
    // Math.round(Math.random()*[max - min]) + min
    // ex. between 0 and 3: Math.round((Math.random()*(3 - 0)) + 0
    // between 0 and n: Math.round((Math.random()*(n - 0)) + 0
    // or Math.round((Math.random()*n), n = (array.length - 1)
    // need a loop to get about 8 random flavors chosen from each array

    // variable if i want to store the random number first and then use it as an index then it will be easier to read the code
    let randomIndex;

    // for-loop for originalFlavors array.
    // this one will loop 8 times, getting indices 0 through 7 in randomFlavors array
    for (let i = 0; i < 8; i++) {
        // Store the random index value in randomIndex
        randomIndex = Math.round(Math.random() * (originalFlavors.length - 1));
        // use push method to put the random number in the index of originalFlavors array and push the flavor into the new array randomFlavors
        randomFlavors.push(originalFlavors[randomIndex]);
    }
    // for-loop for newFlavors array.
    // this one will loop 8 times, getting indices 8-15 in randomFlavors array 
    for (let i = 0; i < 8; i++) {
        // Same as first for-loop
        randomIndex = Math.round(Math.random() * (newFlavors.length - 1));
        // use push method to put the random number in the index of newFlavors array and push the flavor into the new array randomFlavors
        randomFlavors.push(newFlavors[randomIndex]);
    }
    // for-loop for seasonalFlavors array.
    // this one will loop 8 times
    for (let i = 0; i < 8; i++) {
        // Same as other for-loops
        randomIndex = Math.round(Math.random() * (seasonalFlavors.length - 1));
        // use push method to put the random number in the index of seasonalFlavors array and push the flavor into the new array randomFlavors
        randomFlavors.push(seasonalFlavors[randomIndex]);
    }
    // for-loop for reginalFlavors array.
    // this one will loop 7 times
    for (let i = 0; i < 7; i++) {
        // Same as before
        randomIndex = Math.round(Math.random() * (regionalFlavors.length - 1));
        // use push method to put the random number in the index of regionalFlavors array and push the flavor into the new array randomFlavors
        randomFlavors.push(regionalFlavors[randomIndex]);
    }
    // console.log(randomFlavors);
    // return the randomFlavors array
    return randomFlavors;

}