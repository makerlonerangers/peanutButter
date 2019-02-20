const matchers = value => ({
  toEqual(expectation) {
    console.log(value == expectation);
  },

  toThrowError(errorMessage) {
    try {
      value();
    } catch (error) {
      if (errorMessage === error.message) {
        console.log(true);
      } else {
        console.log(false);
      }
    }
  },
});
