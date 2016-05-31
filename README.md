# stupidBoxDemo

So I was trying to make snake aka ReadyStyleSnake and from what I can tell, the game engine is all wrong. None of it seemed very "snakey" I realised that it was because I was making all the wrong assumptions about how a game of snake would work. 

This is the resulting code from that collosal mistake, though I thought I might iterate it into its own concept. It could be good to play around with.

# Tests

testalpha.js - Proves case for setInterval.

test.js - Let's try and get a div element moving left - Works as intended 30-05-16
test_1.js - Let's add a keypress and event listener for left. - Works as intended 30-05-16
test_2.js - Let's modularise the program (split eventListener and movement functions)  Works as intended 31-05-16
test_3.js - Add move right funcitonality - Works as intended 31-05-16
test_4.js - snake moves in four directions - Works 31-05-16

test_5.js - increase grid size to 400px and snake stops when hits walls - Works 31-05-16
test_51.js - improvements on test_5.js since test_5.js is shit



test_    .js - Reorganise code so that each keypress doesn't speed up the box
			// make variable or state or SOMETHING! in event listener, so pos can only go up +1. 
			// difficulty modelling acceleration. 



# Bugs

- The box shakes uncontrollably once it stops? 
- Each keypress makes the box speed up. 
- Create repository!
- Try and make the snake work within an X/Y grid. 

