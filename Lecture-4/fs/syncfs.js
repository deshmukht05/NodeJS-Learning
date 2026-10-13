const fs = require("fs");
const path = require("path");

const fileName = "test.txt";
const filePath = path.join(__dirname, fileName);

//* Write File
// *-------------------------------------------------------------------------------------*
//* fs.writeFileSync(): Writes data to a file. If the file does not exist, it will be created. If the file exists, it overwrites the content.
//! syntax: fs.writeFileSync(filePath, data, options);
//? filePath: The file path to write to.
//? data: The content to write to the file.
//? options: Optional. Includes encoding ('utf8'), mode, or flags.
//*-------------------------------------------------------------------------------------*
// const initialData = "This is my initiail data. This is updated.";
// const writeName = fs.writeFileSync(filePath, initialData, "utf-8");
// console.log(writeName);

//* Read File
//*-------------------------------------------------------------------------------------*
//* fs.readFileSync(): Reads a file's content and returns it as a string or Buffer.
//! syntax: const data = fs.readFileSync(filePath, options);
//? filePath: Path of the file to read.
//? options: Optional. Encoding ('utf8') to get data as a string.
//*-------------------------------------------------------------------------------------*
// const readFile = fs.readFileSync(fileName, "utf-8");
// console.log(readFile);

//* Append File
//*-------------------------------------------------------------------------------------*
//* fs.appendFileSync(): Appends data to a file. If the file does not exist, it creates the file.
//! syntax: fs.appendFileSync(filePath, data, options);
//? filePath: File path to append to.
//? data: Content to add to the file.
//? options: Optional. Encoding options ('utf8').
//*-------------------------------------------------------------------------------------*
// const appendFile = fs.appendFileSync(filePath, "\nHi, I am Tushar Deshmukh", "utf-8");
// console.log(appendFile);

//* Delete File
//*-------------------------------------------------------------------------------------*
//* Delete File (fs.unlinkSync()) : Deletes a file by its path.
//! syntax: fs.unlinkSync(filePath);
//? filePath: The path of the file to delete.
//*-------------------------------------------------------------------------------------*
// const deleteFile = fs.unlinkSync(filePath)
// console.log(deleteFile);

//* Rename File
//*-------------------------------------------------------------------------------------*
//* Rename File (fs.renameSync) : Renames a file from one name to another.
//! syntax: fs.renameSync(oldPath, newPath);
//? oldPath: Current file path.
//? newPath: New file path or name.
//*-------------------------------------------------------------------------------------*
// const newFileName = "updatedTest.txt";
// const newFilePath = path.join(__dirname, newFileName);
// const renameFile = fs.renameSync(filePath, newFilePath);
// console.log(renameFile);
