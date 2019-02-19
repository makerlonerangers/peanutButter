const matchers = value => ({
  toEqual(expectation) {
    console.log(value == expectation);
  },
});
