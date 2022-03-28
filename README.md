# elliptic-curves-in-real-set
A ECMAScript module to perform point Addition and point doubling on Elliptic Curve in the set of real numbers. Only Weierstrass EC supported for now.

# Supported curves for now :

- [Weierstrass](#Weierstrass)

## Weierstrass

### Math behind point addition for Weierstrass EC

See : https://crypto.stanford.edu/pbc/notes/elliptic/explicit.html

### Example

```js
import { Weierstrass, WeierstrassPoint } from 'ecurves-in-real-set'

// Y^2 + a1 XY + a3 * Y = X^3 + a2 X^2 + a4 X + a6

// Initiate a new weierstrass cruve instance
// Let's use Short weierstrass equation : y2 = x3 + ax + b

let a = 2;
let b = 1;

let curve = new Weierstrass(0, 0, 0, a, b);
console.log("Curve equation:", curve.toString())

// create two points
let P = new WeierstrassPoint(curve, 0, 1);
let Q = new WeierstrassPoint(curve, 1.98, 3.567);

// add points or double a point
console.log("P + Q = ", P.add(Q).toString())
console.log("2P =", P.double().toString());
```
