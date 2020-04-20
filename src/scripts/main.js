// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";

// Make 5 pieces of pottery at the wheel

let mug = makePottery("mug", 2, 3);

console.log(mug);

let vase = makePottery("vase", 4, 5);

console.log(vase);

let jar = makePottery("jar", 10, 7);

console.log(jar);

let goblet = makePottery("goblet", 2, 4);

console.log(goblet);

let pot = makePottery("pot", 12, 8);

console.log(pot);

// Fire each piece of pottery in the kiln

let finalMug = firePottery(mug, 2100);

console.log(finalMug);

// Determine which ones should be sold, and their price

// Invoke the component function that renders the HTML list
