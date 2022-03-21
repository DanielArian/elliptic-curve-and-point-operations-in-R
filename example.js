// HOW TO USE

const wcurve = require('./weierstrass.js');

// Y^2 + a1 XY + a3 * Y = X^3 + a2 X^2 + a4 X + a6

// Short weierstrass : y2 = x3 + ax + b
let a = 2;
let b = 1;

// Initiate a new weierstrass cruve instance
let curve = new wcurve.Weierstrass(0, 0, 0, a, b);

// Initiate two new points
let P = new wcurve.WeierstrassPoint(curve, 0, 1);
let Q = new wcurve.WeierstrassPoint(curve, 1.98, 3.567);

// add points or double
console.log("P + Q = ", P.add(Q).toString())
console.log("2P =", P.double().toString());