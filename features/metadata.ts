import 'reflect-metadata';

const plane = {
    color: 'red'
};

Reflect.defineMetadata('ColorNote', 'hi there color', plane, 'color');
const colorNote = Reflect.getMetadata('ColorNote', plane, 'color');
console.log(colorNote);


// Reflect.defineMetadata('note', 'hi there', plane);
// const note = Reflect.getMetadata('note', plane);

// console.log(plane);
// console.log(note);