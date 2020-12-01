/*
3. Feladat
Készíts egy objectConverter nevű objektumot, ami az alábbi metódusokkal rendelkezik:
 - `arrayToMap(array)`
 - `arrayToSet(array)`
 - `setToMap(set)`
 - `setToArray(set)`
 - `mapToArray(map)`
 - `mapToSet(map)`

A fenti metódusok értelemszerűen nem másra szolgálnak, mint az egyik összetett adattípusból konvertálják át az adatokat egy másikba. Mindegyik metódus visszatérési értéke egy új Array, Map, vagy Set object.
*/

const newObj = {
    arrayToMap: function (arr) {
        const newMap = new Map();
        arr.forEach(element => {
            newMap.set(arr.indexOf(element), element)
        });
        return newMap;   
    },
    arrayToSet: function (arr) {
        const newSet = new Set(arr);
        return [...newSet];
    },
    setToMap: function (set) {
        
    },
    setToArray: function (set) {
        
    },
    mapToArray: function (map) {
        
    },
    mapToSet: function (map) {
        
    },
}

const sampleStringArr = ['abc', 'def', 'ghi'];

console.log(newObj.arrayToMap(sampleStringArr));
console.log(newObj.arrayToSet(sampleStringArr));
