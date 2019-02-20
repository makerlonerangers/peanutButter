const matchers = (value,isInverted=false) => ({
  not: !isInverted ? matchers(value,true) : null,
  toEqual(expectation) {
    verdict = value == expectation;
    console.log(isInverted ? !verdict : verdict)
  },
  toContain(expectation) {
    verdict = value.includes(expectation);
    console.log(isInverted ? !verdict : verdict)
  }
});
