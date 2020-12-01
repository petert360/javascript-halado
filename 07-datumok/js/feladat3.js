//3. Írj egy függvényt, ami paraméterként egy Date objektumot kap, a visszatérési értéke pedig egy objektum két tulajdonsággal, ami a következő formátumban tartalmazza a paraméterként kapott dátumot:
//- `short`: 2020. jan. 11. 14:20 (tehát évszám, a hónap neve röviden magyarul, kisbetűkkel a nap száma, majd az idő a másodperc nélkül)
//- `long`: 2020. január 11. 14:20:10 (tehát évszám, a hónap neve magyarul, a nap száma, majd az idő)

const shortMonths = ['jan.', 'feb.', 'márc.', 'ápr.', 'máj.', 'jún.', 'júl.', 'aug.', 'szept.', 'okt.', 'nov.', 'dec.'];
const longMonths = ['január', 'február', 'március', 'április', 'május', 'június', 'július', 'augusztus', 'szeptember', 'október', 'november', 'december'];

function formatDate(date) {
    const shortFormat = `${date.getFullYear()}. ${shortMonths[date.getMonth()]} ${date.getDate()}. ${date.toLocaleTimeString('hu', { hour: '2-digit', minute: '2-digit'})}`;
    const longFormat = `${date.getFullYear()}. ${longMonths[date.getMonth()]} ${date.getDate()}. ${date.toLocaleTimeString('hu')}`;
    let returnObject = {
         short: shortFormat,         //2020. jan. 11. 14:20
         long: longFormat,     //2020. január 11. 14:20:10
    }
    return returnObject;
}
const sampleDate = new Date(Date.now());
console.log(sampleDate);
console.log(formatDate(sampleDate));