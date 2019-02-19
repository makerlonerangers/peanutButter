const it = (description, callback) => {
  console.group(description);
  callback();
  console.groupEnd();
};
