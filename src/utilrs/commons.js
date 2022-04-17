const compareDiff = (obj1, obj2) => {
  let newObj = {};
  Object.entries(obj1).forEach(([key, value]) => {
    console.log(obj2[key] + "-" + value);
    if (obj2[key] !== value) newObj[key] = value;
  });
  return newObj;
};

export { compareDiff };
