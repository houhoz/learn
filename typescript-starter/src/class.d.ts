declare class Persons {
    name: string;
    getName(): string;
}
declare const persons: Persons;
declare class Persons1 extends Persons {
    constructor();
    getName(): string;
}
interface FoodInterface {
    type: string;
}
declare class FoodClass implements FoodInterface {
    type: string;
    constructor(type: string);
}
interface I extends Persons {
}
declare class C extends Persons implements I {
    getName(): string;
}
