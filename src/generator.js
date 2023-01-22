function* mygeerator() {
  let a = 1;
  while (a !== 101) {
    yield a++;
  }
}
let n = mygeerator();
let a = n.next();
while (a.done !== true) {
  console.log(a.value);
  a = n.next();
}
