function orderRectangles(rectanglesData) {
    let rectangles = [];
    for (let [width, height] of rectanglesData) {
        let rectangle = createRectangle(width, height);
        rectangles.push(rectangle);
    }
    rectangles.sort((a,b) => a.compareTo(b));
    return rectangles;

    function createRectangle(width, height) {
        let rectangle = {
            width: width,
            height: height,
            area: () => rectangle.width * rectangle.height,
            compareTo: (anotherRectangle) => {
                return (anotherRectangle.area() - rectangle.area()) ||  // first criteria if not null
                        (anotherRectangle.width - rectangle.width);
            }
        };
        return rectangle;
    }
}

console.log(orderRectangles([[10, 5], [5, 12]]));
console.log(orderRectangles([[10, 5], [3, 20], [5, 12]]));