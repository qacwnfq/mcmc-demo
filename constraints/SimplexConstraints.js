// "use strict";
//
// MCMC.registerConstraints("SimplexConstraints", {
//   description: "Box Constraints (x_i > lb && sum(x_i) < ub",
//
//   init: (self) => {
//     // TODO
//   },
//
//   // TODO set ub and set lb?
//
//   getA() {
//     return math.matrix([[1, 0], [0, 1], [-1, 0], [0, -1]]);
//   },
//
//   getb() {
//     // TODO set lb and ub
//     return math.matrix([100, 100, 100, 100]);
//   },
//
//   // TODO fix
//   getVertices() {
//     return [
//       [ub, ub],
//       [ub, lb],
//       [lb, lb],
//       [lb, ub],
//     ];
//
//   attachUI: (self, folder) => {
//     // folder.add(self, "sigma", 0.05, 2).step(0.05).name("Proposal &sigma;");
//     // folder.open();
//     // TODO ?
//   },
// })
