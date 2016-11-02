class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(pointA, pointB) {
        let deltaX = pointA.x - pointB.x;
        let deltaY = pointA.y - pointB.y;
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));