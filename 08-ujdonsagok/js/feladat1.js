//1. Írj egy függvény kifejezést, ami a paraméterként megadott tömbből eltávolítja a duplikált elemeket! A függvény visszatérési értéke a duplikált elemektől mentes új tömb!


const sampleArr = [4, 5, 7, 8, 7, 9];

function deleteDuplicates(arr) {
    let newSet = new Set();
    for (let i = 0; i < arr.length; i += 1) {
        newSet.add(arr[i]);
    }
    return Array.from(newSet);
}

console.log(deleteDuplicates(sampleArr));



//https://www.samanthaming.com/tidbits/43-3-ways-to-remove-array-duplicates/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
// Use the spread operator to transform a set into an Array.
// console.log([...mySet])

function deleteDuplicates2(arr) {
    const newSet = new Set(arr);
    return [...newSet];
}

console.log(deleteDuplicates2(sampleArr));
