class Vehicle {
    protected honk(): void {
        console.log('bip');
    }
}

class Car extends Vehicle{
    private drive(): void {
        console.log('vroom vromm');
    }

    public startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const car = new Car();
car.startDrivingProcess();
