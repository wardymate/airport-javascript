describe("Airport ", function(){
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['land','takeOff']);
  });

  it("can dock a plane", function(){
    airport.dock(plane);
    expect(airport.planes).toEqual([plane]);
  });

  it("should change the plane to not flying when it lands", function() {
    airport.dock(plane);
    expect(plane.land).toHaveBeenCalled();
  });

});