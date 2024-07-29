function asyncTask(cb)  {
  setTimeout(cb, 0);
}
asyncTask((err, data) => {

  if (err) {
    throw err;
  } else {
    console.log("data", data);
  }
});