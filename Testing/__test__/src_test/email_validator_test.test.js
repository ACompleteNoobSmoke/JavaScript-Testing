import validator from '../../src/email_validator';


describe('Testing Email Validation', () => {

    describe.only('Utilizing Table Testing', () =>{
        describe.each([
            ['africanKing@gmail.com', true],
            ['acompletenoobsmoke@ngc.com', true],
            ['africankinggmail.com', false],
            ['acompletenoobsmoke@ngc', false]
        ])('email %s should be %o', (email, expected) => {
            test(`when ${email} return ${expected}`, () => {
                const actualResult = validator(email);
                expect(actualResult).toBe(expected);
            })
        })

        describe.each`
        email                           | expected
        ${'africanKing@gmail.com'}      | ${true}
        ${'acompletenoobsmoke@ngc.com'} | ${true}
        ${'africankinggmail.com'}       | ${false}
        ${'acompletenoobsmoke@ngc'}     | ${false}
        `('email $email should return $expected', ({email, expected}) => {
            test(`(Literal Template Version)\nwhen ${email} return ${expected}`, () => {
                const actualResult = validator(email);
                expect(actualResult).toBe(expected);
            })
        })

    })

   
    
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