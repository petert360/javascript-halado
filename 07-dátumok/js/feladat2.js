//2. Írj egy függvényt, aminek a visszatérési értéke az adott évben eddig eltelt munkanapok (hétfő-péntek) száma!

function weekDaysOnStartWeek(date) {
    if (date.getDay() <= 5) {
        return (6 - date.getDay());
    } else {
        return 0
    }
}

function weekDaysOnEndWeek(date) {
    if (date.getDay() <= 5) {
        return date.getDay();
    } else {
        return 5
    }
}


function workdaysInYear() {
    const startOfYear = new Date(Date.UTC(2020, 0, 1));
    const currentDate = new Date(Date.now());
    const diffInDays = Math.floor((currentDate - startOfYear) / 1000 / 60 / 60 / 24);
    const numOfWeeks = Math.floor(diffInDays / 7)
    console.log(weekDaysOnStartWeek(startOfYear));
    console.log(weekDaysOnEndWeek(currentDate));
    console.log(diffInDays);
    console.log(numOfWeeks);
    return Number((numOfWeeks-2)*5 + weekDaysOnStartWeek(startOfYear) + weekDaysOnEndWeek(currentDate));

}

console.log(daysInYear());