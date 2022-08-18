import greetPerson from "../../src/greet_person";
import { person } from "../../src/person";

describe('Testing the greet person functionality', () => {
    test('Testing callback in jest', (done) => {
        const newPerson = new person('Victoria', 'Female');
        const callback = data => {
            try{
               expect(data).toBe(newPerson);
               done(); 
            }catch(err){
                done(err);
            }      
        }
        greetPerson(newPerson, callback);
    })

    test('Testing if there is no callback', () => {
        const newPerson = new person('Ade', 'Male');
        console.log = jest.fn();
        greetPerson(newPerson);
        expect(console.log).toHaveBeenCalledWith(newPerson.toString());
    })
})