class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "eidgah high school";
    }
}

const student1 = new Student(1, "ibrahim");
const student2 = new Student(2, "ebnol");
console.log(student1.name, student2.id);