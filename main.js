// Different Data Types

	// String
	"Hello"

	// Number
	2, 3.5, 9000

	// Boolean
	true, false

	// No Value
	undefined

// Comments

	// This is a single line comment

	/* This
	is a
	multi-line
	comment */

// Use console to print something

	console.log("Printing something with console");

// Make an alert

	alert("This is an alert")

// Variables

	var string = "String";
	var number = 9;
	var isThisABoolean = true;

// Arrays

	["A", "B", "C"]
	[1, 2, 3]

	// Store arrays in variables
	var letters = ["A", "B", "C"];

	// Indexes
		// "A" has the index of 0, "B" has the index of 1, and so on

	// Put arrays in other arrays
	var letters = ["A", "B", "C"];
	var numbers = [1, 2, 3];

		// Put variables in array
		var pair = [letters, number];

		// Access item in arrays by position
		console.log(pair[0][0]);
		// This will get the first item of the first array

// Objects

	var morning = {eat: 'Breakfast', brush: 'teeth'};

	// Bracket notation
	console.log(morning['eat']);

	// Dot notation
	console.log(morning.brush);

// Testing

	// Are these true?
	"string" === "string"
	>true

	5 === 6
	>false

	// Are these false?
	"string" !== "string"
	>false

	5 !== 6
	>false

	// If statement
	if(10>9){
		console.log("10 is greater than 9")
	}
	// Only runs if it's true

	// Else statement
	if(10<9){
		console.log("This is impossible")
	} else{
		console.log("10 is greater than 9")
	}
	// Runs else if false

	// Else if statement
	if(10<9){
		console.log("This is impossible")
	} else if(9===9){
		console.log("9 is equal to 9")
	} else{
		console.log("Don't worry about this")
	}
	// Runs else if statement

// Loops

	// For
	for(var i = 0; i<10; i++){
		console.log(i)
	}
	// Will show number until i is increased to 10
	vocaloids = ["Miku", "Luka", "Rin", "Len", "Gumi", "IA"]
	for(var i = 0; i<vocaloids.length; i++){
		console.log(vocaloids[i])
	}
	// Will list all items in array until i is greater than the amount in array

	// While
	x = 3
	while(x<10){
		console.log(x + 7)
		x++;
	}
	// Will print x + 7 until x === 10