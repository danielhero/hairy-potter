// Imports go first
import { makePottery } from "./PotteryWheel.js";

// Make 5 pieces of pottery at the wheel

let mug = makePottery("mug", 2, 3);

console.log(mug);

let vase = makePottery("vase", 5, 4);

console.log(vase);

let jar = makePottery("jar", 5, 7);

console.log(jar);

let bowl = makePottery("bowl", 2, 2);

console.log(bowl);

let plate = makePottery("plate", 1, 1);

console.log(plate);

// Fire each piece of pottery in the kiln

// Determine which ones should be sold, and their price

// Invoke the component function that renders the HTML list
