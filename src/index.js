/** DATA */

var chromaticScale = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
  "C"
];

var scaleTypes = {
  Major: [2, 2, 1, 2, 2, 2, 1],
  Minor: [2, 1, 2, 2, 1, 2, 2]
};

var chordProgressions = {
  "ii, V, I": [2, 5, 1],
  "iii, vi, ii, V, I": [3, 6, 2, 5, 1]
};

/** end DATA */

//xxxxxxx keySelect: build select elem/out elem/addEvent
const keySelect = document.getElementById("keySelect"); // Get the select element
const keyOutput = document.getElementById("keyOutput"); // Get the keyOutput element
const keyFirstOption = document.createElement("option"); // Create a first option element
keyFirstOption.value = ""; // Set the value of the first option to an empty string
keyFirstOption.text = "Select a key"; // Set the text of the first option to provide instructions
keyFirstOption.selected = true; // Set the first option to be selected by default
keySelect.add(keyFirstOption); // Add the first option element to the select element
// create chromaticScale html select elem, set text, add option elem
for (let i = 0; i < chromaticScale.length; i++) {
  const scaleOption = document.createElement("option"); // Create an option element
  scaleOption.text = chromaticScale[i]; // Set the option's text to the array item
  keySelect.add(scaleOption); // Add the option element to the select element
}
// add event to keySelect
keySelect.addEventListener("change", function () {
  const keyCenter = keySelect.value; // Get the selected option value
  keyOutput.textContent = `Key: ${keyCenter}`; // Set the output element's text content to the selected option value
});
//xxxxxxx scaleSelect: build select elem/out elem/intervals/addEvent
const scaleSelect = document.getElementById("scaleSelect"); // Get the select element
const scaleOutput = document.getElementById("scaleOutput");
const intervalsOut = document.getElementById("intervalsOut");
const scaleFirstOption = document.createElement("option"); // Create a first option element
scaleFirstOption.value = ""; // Set the value of the first option to an empty string
scaleFirstOption.text = "Select a scale type"; // Set the text of the first option to provide instructions
scaleFirstOption.selected = true; // Set the first option to be selected by default
scaleSelect.add(scaleFirstOption); // Add the first option element to the select element
// create scaleTypes html select elem/out elem/addEvent
// set opt value & text to key, add option to select
for (const key in scaleTypes) {
  const option = document.createElement("option"); // Create an option element
  option.value = scaleTypes[key]; // Set the option's value to the key
  option.text = key; // Set the option's text to the value of the corresponding key
  scaleSelect.add(option); // Add the option element to the select element
}
// add event to scaleTypes
scaleSelect.addEventListener("change", function () {
  const scaleCenter = scaleSelect.value;
  if (scaleCenter === "2,1,2,2,1,2,2") {
    scaleOutput.textContent = `Scale: Minor`;
    intervalsOut.textContent = `Intervals: ${scaleCenter}`;
  } else {
    scaleOutput.textContent = `Scale: Major`;
    intervalsOut.textContent = `Intervals: ${scaleCenter}`;
  }
});
//xxxxxxx chordsSelect html select elem/out elem/addEvent
const chordsSelect = document.getElementById("chordsSelect");
const chordsOutput = document.getElementById("chordsOutput");
const chordsFirstOption = document.createElement("option"); // Create a first option element
chordsFirstOption.value = ""; // Set the value of the first option to an empty string
chordsFirstOption.text = "Select a scale type"; // Set the text of the first option to provide instructions
chordsFirstOption.selected = true; // Set the first option to be selected by default
chordsSelect.add(chordsFirstOption); // Add the first option element to the select element
// create chords html select elem
for (const chords in chordProgressions) {
  const option = document.createElement("option"); // Create an option element
  option.value = chordProgressions[chords];
  option.text = chords;
  chordsSelect.add(option);
}
// add event to chordsSelect
chordsSelect.addEventListener("change", function () {
  const chords = chordsSelect.value;
  chordsOutput.textContent = `Chord progression: ${chords}`;
});
