// get the thing to move 
// Grid should be 41h by 801w, so it's just single lane. 

var xpos = 0;
var ypos = 0;
var snake = document.getElementById("snake");

console.log(xpos);
console.log(ypos);

function snakeMovementRight() { 
			
			xpos++;
			snake.style.right = xpos + 'px';
}


function snakeMovementEvent(event) {
	console.log(event.keyCode)

	if (event.keyCode === 115) {
		snakeMovementRight();
	} else {
		return
	}
}

addEventListener('keypress', snakeMovementEvent, false);

// okay, so it proves that you need to have setInterval. Hmmmm, need to figure out how else to use it. 