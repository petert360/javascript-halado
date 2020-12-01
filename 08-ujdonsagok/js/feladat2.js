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
        const huCurrency = new Intl.NumberFormat('hu-HU', {
            style:'currency',
            currency: 'HUF'
        });
        return huCurrency.format(num);
    },
    list: function (str) {
        return `${str[0]}, ${str[1]}, és ${str[2]}`;
    }
}

const sampleDate = new Date(Date.now());
console.log(hu.date(sampleDate));

const sampleNum = 10;
console.log(hu.currency(sampleNum));

const sampleStringArr = ['abc', 'def', 'ghi'];
console.log(hu.list(sampleStringArr));