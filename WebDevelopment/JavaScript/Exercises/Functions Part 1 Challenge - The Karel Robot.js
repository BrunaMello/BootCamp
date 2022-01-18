//https://stanford.edu/~cpiech/karel/ide.html


function main(){
    goZigZag();
}


function goZigZag(){
    move();
    turnLeft();
    move();
    move();
    turnRight();
    move();
    move();
    turnLeft();
    move();
    move();
    turnRight();
    move();

}


function goStraitgh(){
    move();
    move();
    move();
    move();
    turnLeft();
    move();
    move();
    move();
    move();
}

