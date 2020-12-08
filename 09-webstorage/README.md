# **Feladatok**

1. Tárold el az alábbi értéket egy token nevű, httpOnly cookie-ba, ami 15 perc után lejár: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`

2. Az alábbi cookie-k vannak a böngésződben tárolva (hozd létre őket):
- viewed: 5
- uid: 354774631237
- ssid: Bx55OWbHJ0Vt_IGIF
Írj egy olyan objectet, az alábbi három metódust megvalósítja: - kiolvassa a sütik nevét, és értékét - átmenti őket sessionStorage-be - törli a sütiket

3. Adott egy json file, ami valójában egy tömb, lastName, firstName propertyket tartalmazó objektumokkal.
Írj egy függvényt, ami indít egy ajax kérést, ami elkéri a json tartalmát, és a firstName, lastName párosokat egymás alá beleírja egy div-en belüli p-tagekbe, és létrehoz egy users nevű bejegyzés a localStorage-be, ahol a json tartalmát letárolja.
Módosítsd a függvényt úgy, hogy amennyiben a localStorage-ba van users bejegyzés, úgy onnan olvassa ki az adatokat, ha nincs csak akkor küldjön ajax kérést.