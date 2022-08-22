const greetPerson = (person, callback) => {
    if(callback) callback(person);
    else console.log(person.toString());
}

const greetPerson2 = (person, callback) => {
    if(callback) callback(person);
    else return `Hello there ${person.name}`
}

export {greetPerson, greetPerson2};