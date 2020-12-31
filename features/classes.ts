class Vehicle {

    public constructor(public color: string) {}

    protected honk(): void {
        console.log('bip');
    }
}

const vehicule = new Vehicle('orange');
console.log(vehicule.color);

class Car extends Vehicle{
    public constructor(public wheels: number, color: string) {
        super(color);
    }

    private drive(): void {
        console.log('vroom vromm');
    }
 
    public startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const car = new Car(4, 'blue');
car.startDrivingProcess();
