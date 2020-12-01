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
    arrayToMap: function (array) {
        
    },
    arrayToSet: function (array) {
        
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

const sampleDate = new Date(Date.now());
console.log(hu.date(sampleDate));

const sampleNum = 10;
console.log(hu.currency(sampleNum));

const sampleStringArr = ['abc', 'def', 'ghi'];
console.log(hu.list(sampleStringArr));