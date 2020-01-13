const assert = require("assert");

// Feel free to look things up online!

// TODO - write a function which converts a multi-word string into an array of words
const tokenize = str => str.split(" ");

// TODO - write a function which reverses the string
const reverse = str => {
    const arr = str.split("");
    const rev = arr.reverse();
    const join = rev.join("");

    return join;
};

// TODO - write a function which returns the inputted array without duplicate elements
const uniqueOnes = arr => Array.from(new Set(arr));

// TODO - write a function which returns the factorial of a positive integer
const factorial = num => (num === 0)?1:num*factorial(num -1); 

// TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
// if the two arrays are of unequal length
// Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
const zip = (arr1, arr2) => {
    const arr4 = [];
    if(arr1.length===arr2.length){
        for (i = 0; i< arr1.length; i++){
            const arr5=[];
            arr5.push(arr1[i]);
            arr5.push(arr2[i]);
            arr4.push(arr5);
        }

    return arr4;
    }   
    else{
        return -1; 
    }
};

// TODO - Write a function which does the opposite of `zip()`
const unzip = arr => {
    const arr1 = [];
    const arr2 = [];
    const arr3 = [];
    for(i = 0; i<arr.length; i++){
        arr1.push(arr[i][0]);
        arr2.push(arr[i][1]);
    }
    arr3.push(arr1,arr2);
    return arr3;
   
};

// TODO - write a function which shifts a string `num` characters to the right
// Example = shiftThree("Hello") === "lloHe"
const shiftRight = (str, num) => {
    const beg = str.substring(num-1);
    const end = str.substring(0,num-1);
    const fin = beg.concat(end);

    return fin;
};

// TODO - write a function which returns the current date in the following format:
// "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
const announceDate = () => {
    const date = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August","September","October","November","December"];
    
    const day = date.getDate();
    const mon = date.getMonth();
    const year = date.getFullYear(); 
    let hour = 0;
    let time = "AM";
    if(date.getHours()===0){
        hour = 12;
        time = "AM";
    }
    else if(date.getHours()===12){
        hour = 12;
        time = "PM";
    }
    else if (date.getHours() > 12){
         hour = date.getHours() - 12; 
        time = "PM";
    }
    else{
         hour = date.getHours();
         time = "AM";
    }
    const min = date.getMinutes();

    const fin = `Today's date is ${months[mon]} ${day}, ${year}. It is ${hour}:${min} ${time}.`;
    return fin;

};

// Write tests here:
assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);

console.log(tokenize("hello world"));
console.log(reverse("hello"));
console.log(uniqueOnes(["hello", "hello", "world"]));
console.log(factorial(5));
console.log(zip([1, 2, 3], [5, 3, 1,4]));
console.log(unzip([[1, 5], [2, 3], [3, 1]]));
console.log(shiftRight("hello", 3));
console.log(announceDate());

