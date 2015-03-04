var Weather = function() {
  this.isSunny = true;
};

Weather.prototype.beStormy = function(){
  this.isSunny = false;
};