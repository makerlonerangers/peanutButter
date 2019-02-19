const describe = (title, callback) => {
  console.log(title);
  callback();
};

const it = (description, callback) => {
  console.log(description);
  callback();
};
