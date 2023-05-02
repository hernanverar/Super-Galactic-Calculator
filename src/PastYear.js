export default class PastAge {
  constructor(pastAge, mercuryRatio, venusRatio, marsRatio, jupiterRatio) {
    if (!pastAge || !(pastAge instanceof Date) || isNaN(pastAge.getTime())) {
      throw new Error(
        "Invalid pastAge input. Please enter a valid Date object."
      );
    }

    this.pastAge = pastAge;
    this.mercuryRatio = mercuryRatio;
    this.venusRatio = venusRatio;
    this.marsRatio = marsRatio;
    this.jupiterRatio = jupiterRatio;
    this.planetRatio = {
      Mercury: 0.2408467,
      Venus: 0.61519726,
      Earth: 1,
      Mars: 1.8808158,
      Jupiter: 11.862615,
    };
  }

  getPastAge(planet) {
    const pastAgeYears = this._calculateAge(this.pastAge);
    switch (planet) {
      case "Mercury":
        return (
          Math.round(
            (pastAgeYears / (this.mercuryRatio * this.jupiterRatio)) * 100
          ) / 100
        );
      case "Venus":
        return (
          Math.round(
            (pastAgeYears / (this.venusRatio * this.jupiterRatio)) * 100
          ) / 100
        );
      case "Mars":
        return (
          Math.round(
            (pastAgeYears / (this.marsRatio * this.jupiterRatio)) * 100
          ) / 100
        );
      case "Jupiter":
        return Math.round((pastAgeYears / this.jupiterRatio) * 100) / 100;
      default:
        return pastAgeYears;
    }
  }

  _calculateAge(date) {
    const ageDiffMs = Date.now() - date.getTime();
    const ageDate = new Date(ageDiffMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  _calculatePlanetDate(planet) {
    const planetAgeYears = this.getPastAge(planet);
    const planetAgeMs = planetAgeYears * 31557600000; // 1 earth year in milliseconds
    const planetDate = new Date(Date.now() - planetAgeMs);
    return planetDate;
  }
}
