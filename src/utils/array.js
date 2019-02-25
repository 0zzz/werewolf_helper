export const uniq = array => array.filter((item, index, arr) => arr.indexOf(item) === index);

export const uniqBy = (array, key) => array.filter((element, index, arr) => arr.findIndex(item => item[key] === element[key]) === index);

