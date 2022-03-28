export class Point {
    /**
     * 
     * @param {number} x
     * @param {number} y
     */
    constructor(x, y) {
        if (typeof(x) != "number" || typeof(y) != "number") {
            throw "Coordinates must by numbers.";
        }
        this.x = x;
        this.y = y;
    }

    /**
     * Get the abs of point
     * @return {number} x
     */
    get getX() {
        return this.x;
    }

    /**
     * Set the abs to a new value
     * @param {number} new_x
     * @throw InvalidArgument
     */
    set setX(new_x) {
        if (isNaN(new_x)) {
            throw `InvalidArgument: ${new_x} is not a number`;
        }
        this.x = new_x; 
    }

    /**
     * Get the ordinate of point
     * @return {number} y
     */
    get getY() {
        return this.y;
    }

    /**
     * Set the ord to a new value
     * @param {number} new_y
     * @throw InvalidArgument
     */
    set setY(new_y) {
        if (isNaN(new_y)) {
            throw `InvalidArgument: ${new_y} is not a number`;
        }
        this.y = new_y;
    }

    /**
     * @return {array} [x, y]
     */
    get getCoord() {
        return [this.x, this.y]
    }

    /**
     * @returns {string} String of the coordinates of the point.
     */
    toString() {
        return this.getCoord.toString();
    }

    /**
     * Get the gradient of the line determined by this point and another point Q
     * 
     * @param {Point} Q Point
     * @return {number} gradient
     * @throw DivisionByZero: points are on the same abscissa
     */
    gradientWithPoint(Q) {
        let x1 = this.x;
        let y1 = this.y;
        let x2 = Q.getX;
        let y2 = Q.getY
        
        if (x2 - x1 == 0) {
            throw new Error(`DivisionByZero: points are on the same abscissa.`);
        }
        return (y2 - y1) / (x2 - x1);
    }

    /**
     * Calculate the two coefficients of the line determined with another point Q
     * 
     * @param {Point} Q
     * @return {array} the array [gradient, b] of the equation Y = gradient * X + b
     * @throw DivisionByZero: points are on the same abscissa
     * @see gradientWithPoint
     */
    lineEqCoeffWithPoint(Q) {
        let x1 = this.x;
        let y1 = this.y;
        let gradient = null;
        gradient = this.gradientWithPoint(Q);
        let b = - gradient * x1 + y1;
        return [gradient, b];
    }
}