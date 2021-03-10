const students = [
    {id: 23, name:"ibrahim"},
    {id: 32, name:"faruk"},
    {id: 33, name:"bitul"},
    {id: 55, name:"yusuf"}
]


const names = students.map(s => s.name);
const sId = students.map(s => s.id);
const bigger = students.filter(s => s.id > 30);
const find = students.find(s => s.id > 30);
console.log(find);