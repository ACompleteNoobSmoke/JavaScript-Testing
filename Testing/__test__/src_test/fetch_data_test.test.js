import fetchData from "../../src/fetch_data";

describe('Testing Promise', () => {
    test('Testing if promise resolves', () => {
        // return fetchData().then(data => {
        //     expect(data).toBe('data back from the server');
        // })

        return expect(fetchData()).resolves.toBe('data back from the server')
    })

    test.only('Testing if promise rejects', () => {
        // return fetchData().catch(e => {
        //     expect(e).toBe('oops error');
        // })

        return expect(fetchData()).rejects.toBe('oops error');
    })
})