let paretnt = {
  foo() {
    console.log("i am a  parent object");
  }
};
let child = {
  name: "child",
  foo() {
    super.foo();
    console.log("i am child onject");
  }
};

Object.setPrototypeOf(child, paretnt);
//child.foo();
///
let arr = ["a", "b", "c", "c", "e"];
//for of iterate over iterable object such as array and
for (let a of arr) {
  console.log(a);
}
for (let a in child) {
  console.log(a);
}
