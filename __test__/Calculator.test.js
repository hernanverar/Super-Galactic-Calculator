import Age from "../src/CurrentYear.js";
import FutureAge from "../src/FutureYear.js";
import PastAge from "../src/PastYear.js";

describe("Age constructor", () => {
  it("should create an object with correct properties and values", () => {
    const age = new Age(30, 125, 48, 16, 2);
    expect(age).toEqual({
      earthAge: 30,
      mercuryAge: 125,
      venusAge: 48,
      marsAge: 16,
      jupiterAge: 2,
    });
  });
});

describe("Age", () => {
  test("should return the correct age on Mercury", () => {
    const age = new Age(30, 125, 48, 16, 2);
    expect(age.getAgeOnPlanet("Mercury")).toBe(125);
  });
});

describe("Age", () => {
  test("should return the correct age on Venus", () => {
    const age = new Age(30, 125, 48, 16, 2);
    expect(age.getAgeOnPlanet("Venus")).toBe(48);
  });
});

describe("Age", () => {
  test("should return the correct age on Mars", () => {
    const age = new Age(30, 125, 48, 16, 2);
    expect(age.getAgeOnPlanet("Mars")).toBe(16);
  });
});

describe("Age", () => {
  test("should return the correct age on Jupiter", () => {
    const age = new Age(30, 125, 48, 16, 2);
    expect(age.getAgeOnPlanet("Jupiter")).toBe(2);
  });
});

//Here we have Future year calculations testing

describe("FutureAge", () => {
  describe("constructor", () => {
    it("should throw an error if the earthAgetill parameter is not a valid date", () => {
      expect(() => new FutureAge("not a date", 0.5, 0.5, 0.5, 0.5)).toThrow(
        "Invalid date input"
      );
    });
  });
  it("should set the instance variables correctly", () => {
    const earthAgetill = new Date("2022-01-01");
    const mercuryRatio = 0.5;
    const venusRatio = 0.7;
    const marsRatio = 1.2;
    const jupiterRatio = 3.0;

    const futureAge = new FutureAge(
      earthAgetill,
      mercuryRatio,
      venusRatio,
      marsRatio,
      jupiterRatio
    );

    expect(futureAge.earthAgetill).toEqual(earthAgetill);
    expect(futureAge.mercuryRatio).toEqual(mercuryRatio);
    expect(futureAge.venusRatio).toEqual(venusRatio);
    expect(futureAge.marsRatio).toEqual(marsRatio);
    expect(futureAge.jupiterRatio).toEqual(jupiterRatio);
  });
});

describe("getFutureAge", () => {
  it("should return the correct age on Mercury", () => {
    const earthAgetill = new Date("2022-01-01");
    const mercuryRatio = 0.5;
    const venusRatio = 0.7;
    const marsRatio = 1.2;
    const jupiterRatio = 3.0;

    const futureAge = new FutureAge(
      earthAgetill,
      mercuryRatio,
      venusRatio,
      marsRatio,
      jupiterRatio
    );

    expect(futureAge.getFutureAge("Mercury")).toEqual(futureAge.mercuryAge);
  });

  it("should return the correct age on Venus", () => {
    const earthAgetill = new Date("2022-01-01");
    const mercuryRatio = 0.5;
    const venusRatio = 0.7;
    const marsRatio = 1.2;
    const jupiterRatio = 3.0;

    const futureAge = new FutureAge(
      earthAgetill,
      mercuryRatio,
      venusRatio,
      marsRatio,
      jupiterRatio
    );

    expect(futureAge.getFutureAge("Venus")).toEqual(futureAge.venusAge);
  });

  it("should return the correct age on Mars", () => {
    const earthAgetill = new Date("2022-01-01");
    const mercuryRatio = 0.5;
    const venusRatio = 0.7;
    const marsRatio = 1.2;
    const jupiterRatio = 3.0;

    const futureAge = new FutureAge(
      earthAgetill,
      mercuryRatio,
      venusRatio,
      marsRatio,
      jupiterRatio
    );

    expect(futureAge.getFutureAge("Mars")).toEqual(futureAge.marsAge);
  });

  it("should return the correct age on jupiter", () => {
    const earthAgetill = new Date("2022-01-01");
    const mercuryRatio = 0.5;
    const venusRatio = 0.7;
    const marsRatio = 1.2;
    const jupiterRatio = 3.0;

    const futureAge = new FutureAge(
      earthAgetill,
      mercuryRatio,
      venusRatio,
      marsRatio,
      jupiterRatio
    );

    expect(futureAge.getFutureAge("Jupiter")).toEqual(futureAge.jupiterAge);
  });
});

// Testing for past time

describe("PastAge class", () => {
  describe("constructor", () => {
    it("should throw an error if the pastAge parameter is not a Date object", () => {
      expect(() => new PastAge("invalid date")).toThrow(
        "pastAge parameter must be a Date object"
      );
    });

    it("should throw an error if the pastAge parameter is not a valid date", () => {
      expect(() => new PastAge(new Date("invalid date"))).toThrow(
        "pastAge parameter must be a valid date"
      );
    });
  });

  describe("getPastAge", () => {
    it("should return the correct age for Mercury", () => {
      const pastAge = new Date(1980, 0, 1);
      const pastAgeObj = new PastAge(
        pastAge,
        0.2408467,
        0.61519726,
        1.8808158,
        11.862615
      );
      expect(pastAgeObj.getPastAge("Mercury")).toBe(133.44);
    });

    it("should return the correct age for Venus", () => {
      const pastAge = new Date(1980, 0, 1);
      const pastAgeObj = new PastAge(
        pastAge,
        0.2408467,
        0.61519726,
        1.8808158,
        11.862615
      );
      expect(pastAgeObj.getPastAge("Venus")).toBe(51.82);
    });

    it("should return the correct age for Mars", () => {
      const pastAge = new Date(1980, 0, 1);
      const pastAgeObj = new PastAge(
        pastAge,
        0.2408467,
        0.61519726,
        1.8808158,
        11.862615
      );
      expect(pastAgeObj.getPastAge("Mars")).toBe(17.13);
    });

    it("should return the correct age for Jupiter", () => {
      const pastAge = new Date(1980, 0, 1);
      const pastAgeObj = new PastAge(
        pastAge,
        0.2408467,
        0.61519726,
        1.8808158,
        11.862615
      );
      expect(pastAgeObj.getPastAge("Jupiter")).toBe(2.71);
    });

    it("should return the correct age for Earth", () => {
      const pastAge = new Date(1980, 0, 1);
      const pastAgeObj = new PastAge(
        pastAge,
        0.2408467,
        0.61519726,
        1.8808158,
        11.862615
      );
      expect(pastAgeObj.getPastAge("Earth")).toBe(43);
    });

    it("should return the age in Earth years if planet parameter is not valid", () => {
      const pastAge = new Date(1980, 0, 1);
      const pastAgeObj = new PastAge(
        pastAge,
        0.2408467,
        0.61519726,
        1.8808158,
        11.862615
      );
      expect(pastAgeObj.getPastAge("invalid planet")).toBe(43);
    });
  });

  describe("_calculateAge", () => {
    it("should calculate the age correctly for a given date", () => {
      const pastDate = new Date("1990-01-01");
      const ageCalculator = new PastAge(pastDate);
      const age = ageCalculator._calculateAge(new Date("2023-05-01"));
      expect(age).toEqual(33);
    });

    it("should return 0 if the date is in the future", () => {
      const pastDate = new Date("1990-01-01");
      const ageCalculator = new PastAge(pastDate);
      const age = ageCalculator._calculateAge(new Date("1980-01-01"));
      expect(age).toEqual(0);
    });
  });

  describe("_calculatePlanetDate", () => {
    it("should calculate the planet date correctly for a given planet", () => {
      const pastDate = new Date("1990-01-01");
      const ageCalculator = new PastAge(
        pastDate,
        0.2408467,
        0.61519726,
        1,
        1.8808158,
        11.862615
      );
      const planetDate = ageCalculator._calculatePlanetDate("Mars");
      expect(planetDate.getFullYear()).toEqual(1982);
      expect(planetDate.getMonth()).toEqual(1);
      expect(planetDate.getDate()).toEqual(27);
    });
  });
});