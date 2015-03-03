describe("Airport ", function(){
  var airport;
  var plane;
  var plane2;
  var plane3;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['land','takeOff']);
    plane2 = jasmine.createSpyObj('plane', ['land','takeOff']);
    plane3 = jasmine.createSpyObj('plane', ['land','takeOff']);
  });

  it("can dock a plane", function(){
    airport.dock(plane);
    expect(airport.planes).toEqual([plane]);
  });

  it("should change the plane to not flying when it lands", function() {
    airport.dock(plane);
    expect(plane.land).toHaveBeenCalled();
  });

  it ('should know its capacity', function() {
    expect(airport.capacity).toEqual(3);
  });

  it("should be empty when created", function() {
    expect(airport.planes.length).toEqual(0);
  });

  it("should know how many planes it is holding", function() {
    airport.dock(plane);
    expect(airport.planes.length).toEqual(1);
  });

  it ('should know if it is full', function() {
    airport.dock(plane);
    airport.dock(plane2);
    airport.dock(plane3);
    expect(airport.isFull).toEqual(true);
  });



  // it("should not allow a plane to land when the airport is full", function(){
  //   airport.isFull;
  //   expect(plane.land).toThrowError("Airport is full")
  // });

});