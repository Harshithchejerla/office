const promise = new promise((reslove, reject) => {
 console.log("Async task execution");
 throw "err";
 if (false) {
    const person = { name: "hari" };
    resolve(person);
 } else {
    const error = { errCode: "1001" };
    reject(error);
 }
 });
  
 promise
   .then((val) => {
    console.log(val);
   })
   .catch((err) => console.log(err))
   .finally(() => {
    console.log("clean up");
   });