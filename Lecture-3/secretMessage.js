var animals = [
  "Hen",
  "elephant",
  "llama",
  "leopard",
  "ostrich",
  "Whale",
  "octopus",
  "rabbit",
  "lion",
  "dog"
];
function getFirstChar(animal) {
  return animal.charAt(0);
}
var animalsArr = animals.map(getFirstChar);
console.log(animalsArr.join(" "));
