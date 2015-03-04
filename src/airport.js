var Airport = function() {
  this.capacity = 3;
  this.planes = [];
  this.full = false;
  this.stormy =false;
};

Airport.prototype.dock = function(plane) {
  this.isFull();
  this.isStormy();
  if(this.stormy === true) {
    throw(new Error("It's too stormy to land!"));
  }
  else {
    if(this.full === true){
      throw(new Error("Airport is full"));
    }
    else {
    this.planes.push(plane);
    plane.land();
    };
  };
};

Airport.prototype.isFull = function() {
  if (this.planes.length >= this.capacity) {
    this.full = true;
  } else {
    this.full = false;
  };
};

Airport.prototype.isStormy = function() {
  if (this.planes.length >= this.capacity) {
    this.full = true;
  } else {
    this.full = false;
  };
};

Airport.prototype.beStormy = function() {
  this.stormy = true;
};


