describe("Weather", function() {
  weather = new Weather();

  it('Should be sunny by default', function() {
    expect(weather.isSunny).toBe(true);
  });

  it('should be able to be stormy', function() {
    weather.beStormy();
    expect(weather.isSunny).toBe(false);
  });

});