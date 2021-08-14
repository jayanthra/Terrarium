const leftContainer = document.querySelector('#left-container')
const rightContainer = document.querySelector('#right-container')

function createPlants(counter, parent) {
  let plants = ''
  for (i = counter; i < counter + 7; i++) {
    plants += `
    <div class="plant-holder">
      <img class="plant" alt="plant" 
      id="plant${i + 1}" src="./images/plant${i + 1}.png"/>
    </div>`
  }
  parent.innerHTML = plants
}

function dragElement(plant) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  plant.onpointerdown = pointerDown;
  function pointerDown(e) {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onpointermove = movePlant;
		document.onpointerup = placePlant;
  }

  function movePlant(e) {
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
    console.log(pos1, pos2, pos3, pos4);
		plant.style.top = plant.offsetTop - pos2 + 'px';
		plant.style.left = plant.offsetLeft - pos1 + 'px';
	}

	function placePlant() {
		document.onpointerup = null;
		document.onpointermove = null;
	}
}

function init() {
  createPlants(0, leftContainer)
  createPlants(7, rightContainer)
  for (let i = 0; i < 14; i++) {
    dragElement(document.getElementById(`plant${i + 1}`));
  }
}

init()