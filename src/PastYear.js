export default class PastAge {
  constructor(earthYearsSince, mercuryYearsSince, venusYearsSince, marsYearsSince, jupiterYearsSince) {
    this.earthYearsSince = earthYearsSince;
    this.mercuryYearsSince = mercuryYearsSince;
    this.venusYearsSince = venusYearsSince;
    this.marsYearsSince = marsYearsSince;
    this.jupiterYearsSince = jupiterYearsSince;
    }

    yearsSince(earthAge, pastAge){
      this.earthYearsSince = Number((earthAge - pastAge).toFixed(2));
      this.mercuryYearsSince = Number((this.earthYearsSince / 0.24).toFixed(2));
      this.venusYearsSince = Number((this.earthYearsSince / 0.62).toFixed(2));
      this.marsYearsSince = Number((this.earthYearsSince / 1.88).toFixed(2));
      this.jupiterYearsSince = Number((this.earthYearsSince / 11.86).toFixed(2));
    }
  }

