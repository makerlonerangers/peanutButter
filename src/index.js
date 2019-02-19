const describe = (title, callback) => {
  console.log(title);
  callback();
};

const it = (description, callback) => {
  console.log(description);
  callback();
};

const matchers = value => ({
  toEqual(expectation) {
    console.log(value == expectation);
  },
});

const expect = value => matchers(value);
