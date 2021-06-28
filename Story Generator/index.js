document.getElementById("genStory").onclick = generateStory;

const randomName = getRandomName();
const randomLocation = getRandomLocation();
const randomReaction = getRandomReaction();

function generateStory() {
  let name = document.getElementById("nameField").value;
  if (name == "") {
    name = "Bob";
  }
  let units = getUnits();
  let story1 = "It was " + units[0] + " outside, so " + randomName;
  let story2 = " went for a walk. When they got to the " + randomLocation;
  let story3 =
    ", they stared in horror for a few moments, then " + randomReaction;
  let story4 = ". " + name + " saw the whole thing, but was not surprised --";
  let story5 = randomName + " weighs " + units[1] + ", and it was a hot day.";

  let finalStory = story1 + story2 + story3 + story4 + story5;
  document.getElementById("story").innerHTML = finalStory;
}
function getUnits() {
  if (document.getElementById("US").checked) {
    temperature = "94 fahrenheit";
    weight = "300 pounds";
  } else {
    temperature = "34 centigrade";
    weight = "21 stone";
  }
  units = [temperature, weight];
  return units;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // max & min both included
}

function getRandomName() {
  let names = [
    "Willy the Goblin",
    "Big Santa",
    "Mildburg Jeanette",
    "Father Christams",
  ];
  let number = getRandomIntInclusive(0, 3);
  return names[number];
}
function getRandomLocation() {
  let locations = [
    "soup kitchen",
    "White House",
    "Butcher Shop",
    "Insane Asylum",
  ];
  let number = getRandomIntInclusive(0, 3);
  return locations[number];
}
function getRandomReaction() {
  let reaction = [
    "melted into a puddle on the sidewalk",
    "spontaneosly combusted",
    "turned into a slug and crawled away",
  ];
  let number = getRandomIntInclusive(0, 2);
  return reaction[number];
}
