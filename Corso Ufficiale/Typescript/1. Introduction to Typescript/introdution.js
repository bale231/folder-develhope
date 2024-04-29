// Welcome to the TypeScript Playground, this is a website
// which gives you a chance to write, share and learn TypeScript.
// You could think of it in three ways:
//
//  - A location to learn TypeScript where nothing can break
//  - A place to experiment with TypeScript syntax, and share the URLs with others
//  - A sandbox to experiment with different compiler features of TypeScript
let anExampleletiable = "Hello World";
console.log(anExampleletiable);
function formatMessage(countryName, population) {
    if (population === void 0) { population = 0; }
    return "The population of ".concat(countryName, " is ").concat(population);
}
let country = "Thailand";
let population = 68950850;
let obj = {
    name: "Luigi",
    surname: "Balestrucci",
    birthday: "19/05/2000",
    city: "Trani",
};
console.log(obj.name);
let message = formatMessage(country, population);
console.log(message);
//          ^?
// To learn more about the language, click above in "Examples" or "What's New".
// Otherwise, get started by removing these comments and the world is your playground.
