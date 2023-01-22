const sym = Symbol("hello i am a symbol");
///console.log(typeof sym);

const a = ["A", Symbol("i am ain array symbol")];
for (let b of a) {
  // console.log(b);
}
console.log(a[1]);
for (let i = 0; i < a.length; i++) {
  // console.log(a[i]);
}
const o = {
  name: "hello ",
  [Symbol("pin")]: "232312"
};
console.log(Object.getOwnPropertySymbols(o));
