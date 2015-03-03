var Airport = function() {
  this.planes = [];
  this.capacity = 3;
};

Airport.prototype.dock = function(plane) {
  this.planes.push(plane);
  plane.land();
};

Airport.prototype.isFull = function() {
 // if (this.planes.length === this.capacity){ 
 //  return false;
 //  }
 //  else {
 //   return true; 
 //  }
   true;
};
  
