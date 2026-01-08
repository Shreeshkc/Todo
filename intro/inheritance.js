class Person{
    constructor(name){
        this.name = name;

    }

    walk()
    {
        console.log("walk")
    }
}
class Teacher extends Person{

    constructor(name, degree){//custom constructor
        super(name),
        this.degree = degree
    }
    teach()
    {
        console.log("teach");
    }
}
const teacher = new Teacher('Shreesh','MSC');
teach