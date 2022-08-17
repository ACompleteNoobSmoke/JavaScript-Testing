import validator from '../../src/email_validator';


describe('Testing Email Validation', () => {
    
    test('True when email is valid', () => {
        let email = 'africanKing@gmail.com';
        const actualResult = validator(email);
        expect(actualResult).toBeTruthy();
    })

    test('False when email is not valid', () => {
        let email = 'africankinggmail.com';
        const actualResult = validator(email);
        expect(actualResult).toBeFalsy();
    })
})