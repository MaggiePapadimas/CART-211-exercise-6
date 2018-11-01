// Paddle
//
// A class that defines how a paddle behaves, including the ability
// to specify the input keys to move it up and down

//Paddle constructor /// fixed: added: // for comment

//Sets the properties with the provided arguments or defaults /////fixed: added: // for comment
function Paddle(x,y,w,h,speed,downKey,upKey) { ////fixed: spelling error Paddle
  this.x = x;
  this.y = y;
  this.xv = 0;
  this.yv = 0;
  this.w = w;
  this.h = h;
  this.speed = speed; // fixed: spelling error: speed
  this.downKey = downKey;
  this.upKey = upKey;
}

// handleInput()
//
// Check if the up or down keys are pressed and update velocity
// appropriately
Paddle.prototype.handleInput = function() { /////fixed: spelling error: prototype
  if (keyIsDown(this.upKey)) { //////fixed: added this. ///////fixed: added Is (KeyIsDown)
    this.vy = -this.speed;
  }
  else if (keyIsDown(this.downKey)) { //////fixed: added this. //////fixed: added Is (KeyIsDown)
    this.vy = this.speed; //fixed: removed (-)
  }
  else{
    this.vy = 0;
  }
}

// update()
// Update y position based on velocity
// Constrain the resulting position to be within the canvas
Paddle.prototype.update = function() {
  this.y += this.vy;
  this.y = constrain(this.y,0,height-this.h); //////fixed: spelling error: height //////fixed: spelling error constrain
}

// display()
//
// Draw the paddle as a rectangle on the screen
Paddle.prototype.display = function() { /////fixed: spelling error: display //// fixed: too many parentheses
  rect(this.x,this.y,this.w,this.h); ////fixed: spelling error: rect
}
