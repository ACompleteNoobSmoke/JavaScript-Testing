const greetPerson = (person, callback) => {
    if(callback) callback(person);
    else console.log(person.toString());
}

export default greetPerson;