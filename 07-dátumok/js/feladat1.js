//1. Írj egy függvényt, aminek a visszatérési értéke az adott év 01.01. óta eltelt másodperceinek s száma!

function secInYear() {
    const startOfYear = new Date(Date.UTC(2020, 0, 1));
    //const startOfYearAlt = Date.UTC(2020, 0, 1);
    const currentDate = new Date(Date.now());
    const diffInSec = (currentDate - startOfYear) / 1000;
    return parseInt(diffInSec);
}

console.log(secInYear());