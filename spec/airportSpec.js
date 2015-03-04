describe("Airport ", function(){
  var airport;
  // var plane;
});

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['land','takeOff']);
  });

  function fillAirport() {
  for (i = 0; i < 3; i++) {
    airport.dock(plane);
  };
  };

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

  it("should know when it is not full", function() {
    airport.dock(plane);
    airport.isFull();
    expect(airport.full).toBe(false);
  });

  it ("should know if it is full", function() {
    fillAirport();
    airport.isFull();
    expect(airport.full).toBe(true);
  });

  it("doesn't allow any more than planes to land when full", function() {
    fillAirport();
    expect(function() {
    airport.dock(plane);
    }).toThrow(new Error("Airport is full"));
  });

  it("doesn't allow planes to land when it is stormy", function () {
    airport.beStormy();
    expect(function() {
    airport.dock(plane);
    }).toThrow(new Error("It's too stormy to land!"));
  });




