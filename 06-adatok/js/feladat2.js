/*
2. Adott az alábbi objektum:

```
    const user = {
        firstName: 'John',        lastName: 'Doe'    };
```

Ments el külön `l`, `f`, és `j` változókba a fenti objektum lastName, firstName, és job property-jeit! Ha valamelyik nincs megadva, akkor az érték legyen a “unknown” string!
*/

const user = {
    firstName: 'John',
    lastName: 'Doe'
}

const {firstName: f, lastName: l, job: j = 'unknown'} = user;
console.log(f, l, j);