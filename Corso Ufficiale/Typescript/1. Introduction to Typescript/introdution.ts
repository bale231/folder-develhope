// Welcome to the TypeScript Playground, this is a website
// which gives you a chance to write, share and learn TypeScript.

// You could think of it in three ways:
//
//  - A location to learn TypeScript where nothing can break
//  - A place to experiment with TypeScript syntax, and share the URLs with others
//  - A sandbox to experiment with different compiler features of TypeScript

const anExampleVariable = "Hello World";
console.log(anExampleVariable);

function formatMessage(countryName: string, population: number = 0) {
  return `The population of ${countryName} is ${population}`;
}

let country: string = "Thailand";
let population: number = 68_950_850;

const obj = {
  name: "Luigi",
  surname: "Balestrucci",
  birthday: "19/05/2000",
  city: "Trani",
};

console.log(obj.name);
const message = formatMessage(country, population);
console.log(message);
//          ^?
// To learn more about the language, click above in "Examples" or "What's New".
// Otherwise, get started by removing these comments and the world is your playground.
