class ArrayOfNumbers {
    constructor(public collection: number[]) {}

    get(index: number): number{
        return this.collection[index];
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]) {}

    get(index: number): string{
        return this.collection[index];
    }
}

class ArrayOfAnything<T> {
    constructor(public collection: T[]) {}

    get(index: number): T{
        return this.collection[index];
    }
}

const arr = new ArrayOfAnything(['a', 'b', 'c']); //TS guesses its an array of strings - type inference

// example of generics with functions

function printStings(arr: string[]): void {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function printNumbers(arr: number[]): void {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function printAnything<T>(arr: T[]): void {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printAnything<number>([1, 5, 12]);
printAnything([1, 5, 12]);

// Generic constraints

class Car {
    print(): void {
      console.log('I am a car');  
    }
}

class House {
    print(): void {
      console.log('I am a house');  
    }
}

interface Printable {
    print(): void ;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
    for(let i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}

printHousesOrCars<House>([new House(),new House()]);
printHousesOrCars<Car>([new Car(),new Car()]);