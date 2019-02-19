const matchers = value => ({
  toEqual(expectation) {
    console.log(value == expectation);
  },
});

const expect = value => matchers(value);
