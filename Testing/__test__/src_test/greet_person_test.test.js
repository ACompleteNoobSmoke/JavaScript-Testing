import {greetPerson, greetPerson2} from "../../src/greet_person";
import { person } from "../../src/person";

describe('Testing the greet person functionality', () => {

    describe('Testing Greet User 1', () => {
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

    describe('Testing Greet User 2', () => {
        test('If Greet User 2 Has Callback', (done) => {
            const newPerson = new person('Osaretin', 'Male');
            const callback = data => {
                try{
                    expect(data).toBe(newPerson);
                    done();
                }catch(err){
                    done(err);
                }
            }
            greetPerson2(newPerson, callback);
        })

        test('If Greet User 2 Has No Callback', () => {
            const newPerson = new person('Osaretin', 'Male');
            expect(greetPerson2(newPerson)).toBe('Hello there Osaretin');
        })
    })
    
})