import 'reflect-metadata';

@controller
class Plane {
    color: string = 'red';

    @get('/login')
    fly(): void {
        console.log("vrrrrrr");
    }
}

function get(path: string) {
    return function(target: Plane, key: string) {
        Reflect.defineMetadata('path', path, target, key);
    }
}

function controller(target: typeof Plane) {
    for (let key in target.prototype) {
        const path = Reflect.getMetadata('path', target.prototype, key);
        const middleware = Reflect.getMetadata('middleware', target.prototype, key);
        console.log(path, middleware);
        //router.get(path, middleware, target.prototype[key]);
    }
}



// const plane = {
//     color: 'red'
// };

// Reflect.defineMetadata('ColorNote', 'hi there color', plane, 'color');
// const colorNote = Reflect.getMetadata('ColorNote', plane, 'color');
// console.log(colorNote);

// Reflect.defineMetadata('note', 'hi there', plane);
// const note = Reflect.getMetadata('note', plane);

// console.log(plane);
// console.log(note);