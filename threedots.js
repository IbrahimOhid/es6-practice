const ages = [22, 23, 24, 44, 55];
const ages2 = [44, 33, 22];
const ages3 = [88, 99, 44];
const allAges = [...ages, ...ages2, 5, ...ages3];
//console.log(allAges);

const business = 650;
const minister = 450;
const sochib = 250;
const takaPoisa = [111, 650, 450, 250,9999];
const maximum = Math.max(...takaPoisa);
console.log(maximum);
const minimum = Math.min(...takaPoisa);
console.log(minimum);