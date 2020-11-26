/*
1. Adott az alábbi objektum:

```
    const user = {
        firstName: 'John',        lastName: 'Doe'    };
```
Mentsd el külön lastName, firstName, és job változókba a fenti objektum property-jeit!Ha valamelyik nincs megadva, akkor az érték legyen a “unknown” string!
*/

const user = {
    firstName: 'John',
    lastName: 'Doe'
}

const {firstName, lastName, job = 'unknown'} = user;
console.log(firstName, lastName, job);