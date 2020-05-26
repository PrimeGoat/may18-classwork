//loop through the object using forEach so that it logs, (eg,for user1)
//'user1 is called Jon and is 23 years old'
//the loop should not return a data structure

const obj = {
user1: {
name: 'Jon',
age: 23,
},
user2: {
name: 'Jen',
age: 25,
},
user3: {
name: 'Jan',
age: 21,
},
}

Object.keys(obj).forEach(function(element) {
	console.log(element + " is called " + obj[element].name + " and is " + obj[element].age + " year(s) old");
});

// I want a list of all of the documents in the folder, not the files
// I want one list of all of the files in one data structure
const folder = {
taxes: ['2010.xlx', '2020.xlx'],
records: ['rec1.docx', 'rec2.docx', 'rec3.docx'],
miscellaneous: ['pic.jpg', 'passwords.pdf', 'docs.txt'],
Clubhouse: ['paty.jpg', 'christmasRules.pdf', 'pool.txt'],
}

const isDocument = function(ext) {
	switch(ext) {
			case "docx":
			case "txt":
					return true;
			default:
					return false;
	}
}

const getExtension = function(filename) {
	return filename.slice((Math.max(0, filename.lastIndexOf('.')) || Infinity) + 1);
}

const getDocs = function(dir) {
	let files = [];

	for(type in dir) {
		for(file of dir[type]) {
			if(isDocument(getExtension(file))) {
				files.push(file);
			}
		}
	}

	return files;
}

const getFiles = function(dir) {
	let files = [];

	for(type in dir) {
		for(file of dir[type]) {
			files.push(file);
		}
	}

	return files;
}

console.log(getDocs(folder));
console.log(getFiles(folder));

///Are the two books alike? Use Object methods to find out. Remember to Change value in one obj to test for non-alike objects
const book1 = {
title: 'My Book',
author: 'John Doe',
year: '2019',
}

const book2 = {
title: 'My Book',
author: 'John Doe',
year: '2019',
}

console.log(Object.values(book1).toString() == Object.values(book2).toString());

book2.title = "A Brief History of Time";
book2.author = "Stephen Hawking";

console.log(Object.values(book1).toString() == Object.values(book2).toString());


///Double the price of each item in the prices object and place those values in a new object called priceDoubler
let prices = {
cigarettes: 5.99,
coke: { lg: 2.99, sm: 1.99 },
chips: 2.79,
}

let priceDoubler = {};
for(entry in prices) {
	if(typeof prices[entry] == "object") {
		let obj = {};
		for(entry2 in prices[entry]) {
			obj[entry2] = prices[entry][entry2] * 2;
		}
		priceDoubler[entry] = obj;
	} else {
		priceDoubler[entry] = prices[entry] * 2;
	}
}

console.log(priceDoubler);