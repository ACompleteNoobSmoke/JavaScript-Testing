import { filterByGender } from "../../src/filterPerson";
import { person } from "../../src/person";


describe('Used to test filter by gender', () => {
    test('test filter by gender if female', () => {
        const people = getPeople();
        const searchGender = "Female";
        const actualPeople = filterByGender(people, searchGender);
        actualPeople.forEach(e => expect(e.gender).toBe(searchGender));
    })

    test('test filter by gender if male', () => {
        const people = getPeople();
        const searchGender = "Male";
        const actualPeople = filterByGender(people, searchGender);
        actualPeople.forEach(e => expect(e.gender).toBe(searchGender));
    })

    test('test to string', () => {
        const person = getPeople()[0];
        const personToString = person.toString();
        expect('Name: Victoria\nGender: Female').toMatch(personToString);
    })
})



function getPeople(){
    const person1 = new person('Victoria', 'Female');
    const person2 = new person('Osaretin', 'Male');
    const person3 = new person('Summer', 'Female');
    const person4 = new person('Ade', 'Male');
    const person5 = new person('Princess', 'Female');
    const person6 = new person('Boye', 'Male');
    const person7 = new person('Dana', 'Female');
    const person8 = new person('Jackie Chan', 'Male');
    const person9 = new person('Da Savage', 'Female');
    const person10 = new person('Mando', 'Male');
    return new Array(person1, person2, person3, person4, person5,
        person6, person7, person8, person9, person10);
}