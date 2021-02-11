var canvas;
var snake;
var size = 20;
var food;
var w;
var h;

function setup() {
    canvas = createCanvas(400, 400);
    w = Math.round(width / size);
    h = Math.round(height / size);
    frameRate(5);
    snake = new Snake();
    foodLocation();

}

function foodLocation() {
    var x = Math.round(random(w));
    var y = Math.round(random(h));
    food = createVector(x, y);

}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        snake.setDir(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
        snake.setDir(1, 0);
    } else if (keyCode === DOWN_ARROW) {
        snake.setDir(0, 1);
    } else if (keyCode === UP_ARROW) {
        snake.setDir(0, -1);
    } else if (key == ' ') {
        snake.grow();
    }

}

function draw() {
    canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2)
    scale(size);
    background(220);
    if (snake.eat(food)) {
        foodLocation();
    }
    snake.update();
    snake.show();


    if (snake.endGame()) {
        alert("GAME OVER");
        noLoop();
    }

    noStroke();
    fill(255, 0, 0);
    ellipse(food.x, food.y, 1, 1);
}
function displayGrid() {
    for (var i = 1; i < 10; i++) {
        line(i * 20, 0, i * 20, width);
    }
}