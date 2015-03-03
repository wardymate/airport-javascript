var Airport = function() {
  this.planes = [];
  this.isFull = false;
};

Airport.prototype.dock = function(plane) {
  this.planes.push(plane);
  plane.land();
};



