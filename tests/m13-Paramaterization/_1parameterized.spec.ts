import { test, expect } from '@playwright/test';

const people = ['Adib', 'Seyf'];

for (const person of people) {
    test(`Testing ${person} `, async () => {
        console.log(person);
    });
}

const map1 = new Map();

map1.set(2, 20);
map1.set(3, 30);

for(const [key, value] of map1){
    test(`Testing function with ${key} and ${value}`, async () => {
        expect(key * 10).toEqual(value);
    });
}

