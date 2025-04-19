//Object --
let bird = {
  genus: "corvus",
  species: "corvax",
  commonName: "raven",
  callType: "squawky",
  quote: "Nevermore",
  maxOffspring: 5,
  noisy: true,
  deadly: false,
};

const bookOfKnowledge = {
  "lunch time": "12:30 PM",
  "the ultimate answer": 42,
  bestSong: "Lonnie's Lament",
  earth: "Mostly harmless.",
};

bird.quote;
bird["quote"];
bird["color"];

bird["where it lives"] = "in the trees"; //  string labels
bird["color"] = "Grey";
bird["where"] = "in the trees";

bird.genus = "peacock";

let animal = {
  genus: "corvus",
  species: "corvax",
  commonName: "raven",
  callType: "squawky",
  quote: "Nevermore",
  maxOffspring: 5,
};
// bonus: make a copy of an object safely
animal2 = Object.assign({}, animal);
animal2 = { ...animal };
animal2 = JSON.parse(JSON.stringify(animal));

// Javascript object notaions

