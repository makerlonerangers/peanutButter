const describe = (title, callback) => {
  console.log(title);
  callback();
};

const it = description => {
  console.log(description);
};
