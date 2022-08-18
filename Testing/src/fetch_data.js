const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        return Promise.resolve().then(() => {
            setTimeout(() => {
                resolve('data back from the server');
            }, 100)
            setTimeout(() => {
                resolve('oop error');
            }, 200)
        })
    });
    return promise;
}

export default fetchData;