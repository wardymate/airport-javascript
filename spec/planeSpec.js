describe("Plane", function() {
  var plane;


  it("should be in the air when created", function() {
    plane = new Plane();
    expect(plane.isFlying).toBe(true)
  });


});