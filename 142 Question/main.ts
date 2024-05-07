let promis = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hellow World");
  }, 2000);
});

promis.then((resol) => {
  console.log(resol);
});
