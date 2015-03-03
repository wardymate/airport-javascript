describe(" ", function(){
  var airport;

});

it("can dock a plane", function(){
  airport = new Airport();
  airport.dock("plane");
  expect(airport.planes.count).toEqual(1);
  
});