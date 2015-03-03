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

  it("should know when it is empty", function() {
    expect(airport.isFull).toBe(false);
  });

  it("should know when it is full", function() {
    airport.dock(plane);
    airport.dock(plane);
    airport.dock(plane);
    expect(airport.isFull).toBe(true);
  });



  // it("should not allow a plane to land when the airport is full", function(){
  //   airport.isFull;
  //   expect(plane.land).toThrowError("Airport is full")
  // });

});