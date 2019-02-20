const matchers = value => ({
  toEqual(expectation) {
    console.log(value == expectation);
  },
  toThrowError() {
    try {
      value();
    } catch (error) {
      console.log(true);
    }
  },
  toThrowErrorMessage(errorMessage) {
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
