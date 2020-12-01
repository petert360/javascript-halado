/*
2. Feladat
Készíts egy `HU` nevű objektumot, aminek az alábbi propertijei vannak:
- `date()`: Visszaadja a paraméterként megadott dátumot a magyar dátumírás szabályainak megfelelően
- `currency()`: Visszaadja a paraméterként megadott számot a magyar pénzformátumnak megfelelően a Ft végződéssel együtt
- `list()`: A paraméterként kapott string tömböt visszaadja az alábbi formában: első, második és harmadik" (Tehát vesszőkkel elválasztva az utolsó elem előtt az és szóval)
*/

const hu = {
    date: function (date) {
        return date.toLocaleDateString('hu');
    },
    currency: function (num) {

    },
    //    list():
}

const sampleDate = new Date(Date.now());
console.log(hu.date(sampleDate));

const sampleNum = 10;
console.log(hu.currency(sampleNum));