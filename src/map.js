let map = new Map();
map.set("a", "value of a");
let obj1 = {};
map.set(obj1, { value: 1 });
let fun = () => {
  console.log("hello from function");
};
map.set(fun, () => {
  console.log("hello from function stored in map");
});
//console.log(map.size);
//map.get(fun)();
let a = map.get(obj1);
//console.log(a.value);
for (let a of map) {
  //console.log( a);
}
let weakMap = new WeakMap();
let b = {};
weakMap.set(b, { v: 3 });
weakMap.set(obj1, { value: 1 });
let w = weakMap.get(b);
console.log(w.v);
