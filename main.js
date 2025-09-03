import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "Example Text Interface Program");
let likesBikes = await ti.promptYesOrNo("Do you like bikes?");

if (likesBikes) {
  ti.output("You are a good human");
} else {
  ti.output("I am so sorry for you. Do you at least like running or hiking or something?");
}

ti.output("I made new text appear");
ti.output("Bikes are fun");

ti.output("Welcome to my program!");
let name = await ti.prompt("What is your name?");
ti.output("Hello, " + name);
ti.setTitle("No title")


