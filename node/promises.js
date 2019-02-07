const promiseExample = () => {
  return new Promise((resolve) => {
    setTimeout(() => { resolve('Hello') }, 3000);
  });
};

promiseExample()
  .then((res) => res)
  .then((res) => console.log(res)) // you can continuously call .then as many times as you want
  .catch((e) => console.log('im an err: ' + e)); // catches every promise until the last one
console.log('hi');