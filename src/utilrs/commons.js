const compareDiff = (obj1, obj2) => {
  let newObj = {};
  Object.entries(obj1).forEach(([key, value]) => {
    if (obj2[key] !== value) newObj[key] = value;
  });
  return newObj;
};

const money = (v) => v.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");

export { compareDiff, money };
