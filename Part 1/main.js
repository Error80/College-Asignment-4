// Variables and Function Definitions
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
let insertX = ["Willy the Goblin","Big Daddy","Father Christmas"];
let insertY = ["the soup kitchen","Disneyland","the White House"];
let insertZ = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];


// Chooses Random Varriables
function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
  }

randomize.addEventListener('click', result);

function result() {

  // Replaces :insertX:, :insertY:, and :insertZ: with their respecive items.
  let newStory = storyText;
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);
  newStory = newStory.replace(/:insertx:/g, xItem);
  newStory = newStory.replace(/:inserty:/g, yItem);
  newStory = newStory.replace(/:insertz:/g, zItem);

  // Replaces Bob if a name is defined in the text box
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);

  }

  // Converts pounds and fahrenheit to stones and centigrade/celsius respectively
  if(document.getElementById("uk").checked) {

    let stone = 300 * 0.0714286
    const weight = Math.round(stone);
    newStory = newStory.replace("300 pounds", weight + " stones")

    let centigrade = (94 - 32) * 5/9;
    const temperature =  Math.round(centigrade);
    newStory = newStory.replace("94 fahrenheit", temperature + " centigrade")

  }

  // Displays the newly generated story on the page
  story.textContent = newStory;
  story.style.visibility = 'visible';
}
