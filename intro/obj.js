const person = {
    name:'Shreesh',
    walk() {
        console.log(this)
    },
    talk() {},

};

person.walk();

const walk = person.walk.bind(person);//bind will fix the defualt returning of window object by replacing it w
//with this pointing to the ref object which is person.
walk();

person.talk();
const target='name';
person[target.value] = 'Shreesh';
