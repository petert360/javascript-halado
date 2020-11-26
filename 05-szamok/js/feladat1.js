/* 
1. Feladat
Írj egy függvényt, ami a paraméterként kapott tetszőleges darabszámú, tetszőlegesen méretű egész számot összead, és visszatér az összeadás végeredményével! A paraméterként kapott értékek egyszerű number típusúak legyenek! Amennyiben bármelyik paraméter értéke, vagy a részeredmény meghaladja a biztonságos tartomány, automatikusan konvertáljad BigIntbe, és így számoljunk tovább, és természetesen a visszatérési érték is BigInt legyen!
*/

// 1. lépés: kell egy fv, ami paramétereket fogad, és a paramétereket összeadja.
// ezt a rest paraméterátadással fogom megoldani
// `function restParameter(x, y, ...z) { }`
// Ebben az esetben az `x`, és `y` paraméter utána az összes többi paramétert a `z`-ben tömbként fog tárolódni.

// 2. lépés miután megvannak a paraméterek egy tömbben, a tömb elemein végigmegyek és összeadom őket.
// ez megoldható for ciklussal ez lesz a sumParameters1
// ugyanakkor megoldható a .reduce() tömb metódussal is ez lesz a sumParameters2 függvény.
/*
Az Array.reduce() metódus
forrás: 
https://www.javascripttutorial.net/javascript-array-reduce/
https://javascript.info/array-methods#reduce-reduceright

szintaxis: array.reduce(reducer [, initialValue]);
A reducer() egy függvény hívás (callback function), amit minden egyes elemre meghív a metódus.
A reducer() visszatérési értéke akkumulálódik és argumentumként adódik át a következő reducer() híváskor.
Ha nem adok meg initialValue-t, akkor a tömb első elemét veszi annak és a második elemtől kezdődik az iteráció. Ez azért igényel odafigyelést, mert ha a tömb üres, hibát eredményez a metódus hívás.

Harmadik lépésben arrFn-t hozok létre a fnDec helyett.
*/

function sumParameters1(...param) {
    let sum = 0;
    for (let i = 0; i < param.length; i++) {
        sum = sum + param[i];

    }
    console.log(sum);
}

//isSafeInteger figyelés if..else megoldással
function sumParameters2(...param) {
    let sum = param.reduce(function reducer(accumulator, current) {
        if (Number.isSafeInteger(accumulator) && Number.isSafeInteger(current)) {
            return accumulator + current;
        } else {
            return BigInt(accumulator) + BigInt(current);
        }
    })
    console.log(sum);
}

function sumParameters3(...param) {
    console.log(param.reduce((accumulator, current) => (accumulator + current)))
}

//2-es megoldás arrFn-nél
function sumParameters4(...param) {
    console.log(param.reduce((accumulator, current) => {
        if (Number.isSafeInteger(accumulator) && Number.isSafeInteger(current)) {
            return accumulator + current;
        } else {
            return BigInt(accumulator) + BigInt(current);
        }

        }))
}



sumParameters1(1, 2, 3);
sumParameters2(1, Number.MAX_VALUE, 3);
sumParameters3(1, 2, 3);
sumParameters4(1, Number.MAX_VALUE, 3);