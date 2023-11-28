console.clear();

const API_URL = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch(API_URL);
  const data = await response.json();

  console.log(data);
  console.log("Count: ", data.count);
  console.log("Leia Organa's height: ", data.results[4].height);

  const r2d2 = data.results.find((character) => character.name === "R2-D2");
  console.log("R2-D2's eyecolor: ", r2d2.eye_color);
  return data;
}

fetchData();
