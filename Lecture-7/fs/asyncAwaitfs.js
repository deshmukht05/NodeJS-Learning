const fs = require("fs/promises");
const path = require("path");

const fileName = "AsyncAwait.txt";
const filePath = path.join(__dirname, fileName);

//* Read Folder Directory
// const filePath1 = __dirname;
// const readFolder = async () => {
//   try {
//     const res = await fs.readdir(filePath1);
//     console.log(res);
//   } catch (error) {
//     console.error(error);
//   }
// };
// readFolder();

//* Write File
//*-------------------------------------------------------------------------------------*
//* fsPromises.writeFile() : Writes data to a file asynchronously. If the file exists, it overwrites the content.
//! syntax: fs.Promises.writeFile(path, data, options);

//? path: The file path to write to.
//? data: The content to write to the file.
//? options: Optional. Specifies encoding (e.g., 'utf8'), mode, or flags.
//*-------------------------------------------------------------------------------------*
const writeFileData = async () => {
  try {
    await fs.writeFile(filePath, "This is Async Await File.", "utf-8");
    console.log("File created!");
  } catch (error) {
    console.error(error);
  }
};
writeFileData();

//* Read File
//*-------------------------------------------------------------------------------------*
//* Reading a File: fsPromises.readFile() : Reads the contents of a file asynchronously.
//! syntax: fsPromises.readFile(path, options);

//? path: The file path to read.
//? options: Optional. Can specify encoding (e.g., 'utf8') or return a Buffer if no encoding is provided.
//*-------------------------------------------------------------------------------------*
// const readFileData = async () => {
//   try {
//     const data = await fs.readFile(filePath, "utf-8");
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// };
// readFileData();

//* Update File
//*-------------------------------------------------------------------------------------*
//* Appending Data: fsPromises.appendFile() : Adds content to the end of a file. If the file does not exist, it creates a new one.
//! syntax: fsPromises.appendFile(path, data, options);

//? path: The file path to read.
//? options: Optional. Can specify encoding (e.g., 'utf8') or return a Buffer if no encoding is provided.
//*-------------------------------------------------------------------------------------*
// const updateFileData = async () => {
//   try {
//     await fs.appendFile(filePath, "\nHi, I am Tushar Deshmukh.", "utf-8");
//     console.log("File updated!");
//   } catch (error) {
//     console.error(error);
//   }
// };
// updateFileData();

//* Delete File
//*-------------------------------------------------------------------------------------*
//* Deleting a File: fsPromises.unlink() : Deletes a file by its path.
//! syntax: fsPromises.unlink(path)

//? path: The file path to delete.
//*-------------------------------------------------------------------------------------*
// const deleteFile = async () => {
//   try {
//     await fs.unlink(filePath);
//     console.log("File Deleted");
//   } catch (error) {
//     console.error(error);
//   }
// };
// deleteFile();
