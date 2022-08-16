function numberOfOccurences (arr, n) {
    if(isNaN(n))
        throw new Error(`${n} is not a number`);
    
    let count = 0;
    for(let i of arr){
        if(i === n) count++;
    }

    return count;
}

// module.exports = {
//     numberOfOccurences
// }

export { numberOfOccurences }