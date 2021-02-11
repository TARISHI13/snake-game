class Snake {

    constructor() {
        this.body = [];
        this.body[0] = createVector(Math.round(w / 2), Math.round(h / 2));
        this.xdir = 0;
        this.ydir = 0;
        this.len = 0;
    }

    setDir(x, y) {
        this.xdir = x;
        this.ydir = y;
    }

    update() {
        var head = this.body[this.body.length - 1].copy();
        this.body.shift();
        head.x += this.xdir;
        head.y += this.ydir;
        this.body.push(head);
    }

    grow() {
        var head = this.body[this.body.length - 1].copy();
        this.len++;
        this.body.push(head);
    }

    endGame() {
        var x = this.body[this.body.length - 1].x;
        var y = this.body[this.body.length - 1].y;
        if (x > w - 1 || x < 0 || y > h - 1 || y < 0) {
            return true;
        }
        for (var i = 0; i < this.body.length - 1; i++) {
            var part = this.body[i];
            if (part.x == x && part.y == y) {
                return true;
            }
        }
        return false;
    }

    eat(pos) {
        var x = this.body[this.body.length - 1].x;
        var y = this.body[this.body.length - 1].y;
        if (x == pos.x && y == pos.y) {
            this.grow();
            return true;
        }
        return false;
    }

    show() {
        for (var i = 0; i < this.body.length; i++) {
            fill(0, 255, 0);
            noStroke();
            ellipse(this.body[i].x, this.body[i].y, 1, 1)
        }
    }

}