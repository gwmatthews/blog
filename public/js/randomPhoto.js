// initialize random variable
let randomNum = Math.floor(Math.random()*13 + 1);

// get target div
const photoDiv = document.querySelector('#random-image');

// set up HTML to insert
const inner = `
<img src="images/${randomNum}.jpg" class="photo">
<span id="photo-caption">
<a href="https://www.barebones-photography.com/" target="_blank">
photo by Jim Matthews
</a>
</span>`

//insert HTML
photoDiv.innerHTML = inner;
