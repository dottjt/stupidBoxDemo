// get the thing to move 
// Grid should be 41h by 801w, so it's just single lane. 

var xpos = 0;
var ypos = 0;
var snake = document.getElementById("snake");

console.log(xpos);
console.log(ypos);


function snakeMovementLeft() { 
	var id = setInterval(moveleft, 5);

	function moveleft() {
		if (xpos === 760) {
			clearInterval(id);
		} else {
			xpos--;
			snake.style.left = xpos + 'px';
		}
	}
}

function snakeMovementRight() { 
	var id = setInterval(moveright, 5);

	function moveright() {
		if (xpos === 760) {
			clearInterval(id);
		} else {
			xpos++;
			snake.style.right = xpos + 'px';
		}
	}
}

function snakeMovementUp() { 
	var id = setInterval(moveup, 5);

	function moveup() {
		if (ypos === -1) {
			clearInterval(id);
		} else {
			ypos++;
			snake.style.bottom = ypos + 'px';
		}
	}
}

function snakeMovementDown() { 
	var id = setInterval(movedown, 5);

	function movedown() {
		if (ypos === 760) {
			clearInterval(id);
		} else {
			ypos--;
			snake.style.bottom = ypos + 'px';
		}
	}
}


function snakeMovementEvent(event) {
	console.log(event.keyCode)
	if (event.keyCode === 115) {
		snakeMovementRight();
	} else if (event.keyCode === 97) {
		snakeMovementLeft();
	} else if (event.keyCode === 119) {
		snakeMovementUp();
	} else if (event.keyCode === 114) {
		snakeMovementDown();
	} else {
		return
	}
}

addEventListener('keypress', snakeMovementEvent);
