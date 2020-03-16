// Programming Foundations
// Course Assignment
// 22.3.2020


// LEVEL 1
// Question 1
var stringValue = "Sample String";

// Question 2
person = {
    name: "John Doe",
    age: 24
};

// Question 3
var outOfStock = false;
if(outOfStock) {
    console.log("Out of stock");
} else {
    console.log("In stock");
}

// Question 4
var numberArray = [1, 2, 3, 4, 5];
for(var i = 0; i < numberArray.length; i++) {
    console.log(numberArray[i]);
}

// Question 5
for(var i = 15; i <= 25; i++) {
    console.log(i);
}

// Question 6
for(var i = 15; i <= 25; i++) {
    if(i === 20) {
        console.log(i);
    }
}

// Question 7
var objectArray = [
    {
        objectString: "String of Object, arrayIndex 0",
        objectNumber: 0,
        objectBoolean: false
    },
    {
        objectString: "String of Object, arrayIndex 1",
        objectNumber: 1,
        objectBoolean: true
    }
];

for(var i = 0; i < objectArray.length; i++) {
    console.log("objectNumber: " + objectArray[i].objectNumber + "\nobjectBoolean: " + objectArray[i].objectBoolean);
}

// Question 8
function whatIDontLike(stringIDontLike) {
    console.log("I don't like " + stringIDontLike);
}

whatIDontLike("simps");

// Question 9
function subtract(arg1, arg2) {
    var result = arg1 - arg2;
    console.log(result);
}

// Question 10
var emptyArray = [];

function pushFunction (arg) {
    emptyArray.push(arg);
}

pushFunction("This array is no longer empty");

// LEVEL 2
// Question 1
for(var i = 15; i <= 25; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }
}

// Question 2
var innerFunction = function() {
    console.log("I am a function");
}

function outerFunction(arg) {
    arg();
}

outerFunction(innerFunction);