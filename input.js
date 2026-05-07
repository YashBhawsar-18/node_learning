// console.log(process); // process is a global object in Node.js that provides information about the current Node.js process and allows us to interact with it. It contains properties and methods that can be used to get information about the environment, manage the process, and handle events.


// console.log(process.argv); // argv stands for argument vector and it is an array that contains the command line arguments passed to the node process. The first element is the path to the node executable, the second element is the path to the script file being executed, and the subsequent elements are any additional command line arguments passed by the user.
// console.log(process);

// console.log(process.argv[2]); // this will print the third element of the argv array, which is the first command line argument passed by the user. For example, if we run the command "node input.js hello", it will print "hello".


const fs = require('fs'); // fs stands for file system and it is a core module in Node.js that provides an API for interacting with the file system. It allows us to read, write, and manipulate files and directories on the server.

const action = process.argv[2]; // this will store the first command line argument passed by the user in the variable action. For example, if we run the command "node input.js write", it will store "write" in the variable action. 

const fileName = process.argv[3]; // this will store the second command line argument passed by the user in the variable fileName. For example, if we run the command "node input.js write myFile.txt", it will store "myFile.txt" in the variable fileName.

const data = process.argv[4]; // this will store the third command line argument passed by the user in the variable data. For example, if we run the command "node input.js write myFile.txt Hello World", it will store "Hello World" in the variable data.

if(action === 'create') {
    fs.writeFileSync(fileName, data); // this will create a new file with the name stored in fileName and write the data stored in data to that file. For example, if we run the command "node input.js create myFile.txt Hello World", it will create a file named "myFile.txt" and write "Hello World" to that file.
} else if (action === 'delete') {
    fs.unlinkSync(fileName); // this will delete the file with the name stored in fileName. For example, if we run the command "node input.js delete myFile.txt", it will delete the file named "myFile.txt".
} else {
    console.log("Invalid action. Please use 'create' or 'delete'."); // this will print an error message if the action passed by the user is not "create" or "delete". For example, if we run the command "node input.js update myFile.txt Hello World", it will print "Invalid action. Please use 'create' or 'delete'."
}

// command to run the program: node input.js create input.txt "this is my first file created by command line input"
// npx nodemon input.js create input.txt "this is my first file created by command line input"