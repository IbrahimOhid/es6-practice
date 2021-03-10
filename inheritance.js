class Parent {
    constructor(){
        this.fatherName = "mohammad ibrahim ohid";
    }
}



class Child extends Parent {
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
     return this.name + " " + this.fatherName;
    }
}

const baby = new Child("ibrahim");
const baby2 = new Child("ohid");
console.log(baby.getFullName());
console.log(baby2.getFullName());