// Broken Basic OO Pong
// by Pippin Barr
//
// A broken primitive implementation of Pong with no scoring system
// just the ability to play the game with the keyboard.
//
// Arrow keys control the right hand paddle, W and S control
// the left hand paddle.
//
// Written with JavaScript OOP.

// Variable to contain the objects representing our ball and paddles
var ball; //fixed spelling error (ball)
var leftPaddle;
var rightPaddle;

// setup()
//
// Creates the ball and paddles
function setup() {
  createCanvas(640,480); ////fixed spelling error: create
  noStroke();
  // Create a ball
  ball = new Ball(width/2,height/2,5,5,10,50); ///Fixed ball moved to fast = changed 50 to 5 for vx & vy
  // Create the right paddle with UP and DOWN as controls
  rightPaddle = new Paddle(width-10,height/2,10,600,10, DOWN_ARROW, UP_ARROW); ////Fixed swapped UP_ARROW with DOWN_ARROW
  // Create the left paddle with W and S as controls
  // Keycodes 83 and 87 are W and S respectively
  leftPaddle = new Paddle(0,height/2,10,60,10,83,87); ////fixed closed parentheses
} /// Fixed closed curly bracket

// draw()
//
// Handles input, updates all the elements, checks for collisions
// and displays everything.
function draw() {
  background(0);

  leftPaddle.handleInput();
  rightPaddle.handleInput();

  ball.update(); /////fixed added closed parentheses
  leftPaddle.update();
  rightPaddle.update();

  if (ball.isOffTheScreen){ ////fixed too many parentheses ////Fixed added curly bracket*
    ball.reset(); ////fixed ball.reset
  }

  ball.handleCollision(leftPaddle);
  ball.handleCollision(rightPaddle);

  leftPaddle.display();
  rightPaddle.display(); ////Fixed closed parentheses

  ball.display(); /////Fixed moved ball.display

}
