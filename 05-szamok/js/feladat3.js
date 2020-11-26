/* 
3. Feladat
Írj egy függvényt, ami a paraméterként megadott tízes számrendszerbeli számot átkonvertálja kettes, nyolcas, és tizenhatos számrendszerbe is! Ezeket az értékeket pedig egy objectbe adja vissza! A property-k neve legyen: binary, octal, hexa.
*/
/*
Konvertálás:
A number.toString metódusban megadható a számrendszer, amiben a kívánt számot szeretnénk megjeleníteni.
*/

function converter(dec) {
    return {
        binary: `${dec.toString(2)}`,
        ocatal: `${dec.toString(8)}`,
        hexa: `${dec.toString(16)}`,
    }

}

console.log(converter(199));