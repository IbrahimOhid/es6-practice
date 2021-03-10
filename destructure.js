const person = { name: "Mohammad Ibrahim", age: 23, job: "Youtuber", gfName: "Rafia", address: "Islamabad", phone: 01834598910, friends: ["Yusu", "jisan"]}  

const {name, phone, gfName, address} = person;


const gfName = person.gfName;
const phone = person.phone;
console.log(name, address, gfName, phone);
 

const friends = ['ohid', 'jisan', 'yusuf', 'touhid', 'nahin', 'tanim', 'ibrahim'];
const [chotofriends, next, ...rest] = friends;
console.log(...rest);
