import express from "express";
import { PORT } from "./env.js";
import path from "path";

const app = express();

const staticPath = path.join(import.meta.dirname, "public");
app.use(express.static(staticPath))

app.get("/", (req, res) => {
  res.sendFile(staticPath);
});

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});

//*———————————————————————————— Sample Codes ——————————————————————————————————————

//* Ways to fetch dirname and filename
// console.log(import.meta.dirname);
// console.log(import.meta.filename);
// console.log(import.meta.url);
// const __filename = new URL(import.meta.url).pathname;
// console.log(__filename);

//* We can use top-level await without needing to wrap it in an async function
// const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
// const json = await res.json()
// console.log(json);