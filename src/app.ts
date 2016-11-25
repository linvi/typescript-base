import { Salut } from './test';

class Hello {
    constructor(public message: string) {

    }
}

var hello = new Hello("linvi");
console.log(`hello ${hello.message}`);

Salut.plop();