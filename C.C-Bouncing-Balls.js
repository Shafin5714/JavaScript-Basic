// A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?
// Three conditions must be met for a valid experiment:

//     Float parameter "h" in meters must be greater than 0
//     Float parameter "bounce" must be greater than 0 and less than 1
//     Float parameter "window" must be less than h.

// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Example:

// - h = 3, bounce = 0.66, window = 1.5, result is 3

// - h = 3, bounce = 1, window = 1.5, result is -1 

// (Condition 2) not fulfilled).


function bouncingBall(h,  bounce,  window) {
     
    var count =0
    if(h>0 && bounce>=0 && bounce<1 && window<h){
        while(window<h){
            count=count+2
            h=h*bounce
        }  
     
        return count-1
    }
    return -1
    
}




console.log(bouncingBall(3, 0.66, 1.5));

function bouncingBall2(h,  bounce,  window) {
    // Qualify the condition that must be met
    const cond = h > 0 && (bounce > 0 && bounce < 1) && window < h;
    // Check the condition
    if (cond) {
        // If condition is met, the ball will be seen once going up...
        // And once coming down, as well as the first time its dropped
        return h < window ? -1 : 2 + bouncingBall((h * bounce), bounce, window);
    } else {
        // If condition is not met, per instructions, return -1
        return -1;
    }
}

console.log(bouncingBall2(3, 0.66, 1.5));