// The Promise.all() static takes an iterable of as input and returns a single Promise.
//This returned promised fullfills when all of the input's promises fulfill (including when an empty iterable is passed),
//with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection
//reason.

/* Promise.all is rejected if any of the elements are rejected. For example, if you pass in four promises
that resolve after a timeout and one promise that rejects immediately, then Promises.all will reject
immediately*/

const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "one");
});

const  p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "two");
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "theree");
});

const p4 = new Promise ((resolve, reject) => {
  setTimeout(resolve, 4000, "four");
});

const p5 = new Promise((resolve, reject) => {
 reject("reject");
});

Promise.all([p1, p2, p3, p4, p5]).then(
  (values) => { 
    console.log(values);
  },
  (reason) => {
    console.log(reason)
  }
)
Promise.all([p1, p2, p3, p4, p5])
.then((values) => {
  console.log(values);
})
.catch((reason) => {
  console.log(reason);
})