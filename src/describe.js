const describe = (title, callback) => {
  console.group(title);
  callback();
  console.groupEnd();
};
