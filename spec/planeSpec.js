describe("Plane", function() {
  var plane;


  it("should be in the air when created", function() {
    plane = new Plane();
    expect(plane.isFlying).toBe(true)
  });

  it("can land", function(){
    plane = new Plane();
    plane.land;
    expect(plane.isFlying).toBe(false)
  });

});