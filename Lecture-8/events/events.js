// Import event emitter
const EventEmitter = require("events");

// Create an instance of event emitter
const emitter = new EventEmitter();

//? Example 1:
// emitter.on("greet", () => {
//   console.log(`Hello Tushar Deshmukh`);
// });

// emitter.emit("greet");

// //? Example 2: Passing arguments
// emitter.on("greet", (name, prof) => {
//   console.log(`Hello ${name}, and you are ${prof}.`);
// });

// emitter.emit("greet", "Tushar Deshmukh", "Full Stack Developer");

//? Example 3: Take a single argument as an object
emitter.on("greet", (arg) => {
    const {name, prof} = arg;
  console.log(`Hello ${name}, and you are ${prof}.`);
});

emitter.emit("greet", {name: "Tushar Deshmukh", prof: "Full Stack Developer"});