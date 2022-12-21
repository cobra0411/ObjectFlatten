// flatten an object
// dont flatten an Array

const flattenObject = (obj, parent = "", finalObject = {}) => {
  for (let key in obj) {
    let value = obj[key];
    let newKey = parent + key;
    if (typeof value === "object") {
      if (Array.isArray(value)) {
        finalObject[newKey] = value;
      } else {
        flattenObject(value, newKey + ".", finalObject);
      }
    } else {
      finalObject[newKey] = value;
    }
  }
  return finalObject;
};
const myObj = {
  a: "a1",
  b: "b1",
  c: {
    c1: "c11",
    d1: "d11",
    e1: {
      f1: ["f1", "f2"],
      g1: "g11"
    }
  }
};
const flattedObject = flattenObject(myObj);
console.log(flattedObject);
