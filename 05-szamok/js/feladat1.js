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
// de megoldható 

function sumParameters1(...param) {
    let sum = 0;
    for (let i = 0; i < param.length; i++) {
        sum = sum + param[i];

    }
    console.log(sum);
}

sumParameters1(1, 2, 3);