class Boat {
    color: string = 'red';

    formattedColor(): string {
        return `This boat's color is ${this.color}`;
    }

    @logError
    pilot(): void {
        throw new Error();
        console.log('swish');
    }
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value; //reference to pilot()

    desc.value = function(){
        try {
            method();
        } catch(e) {
            console.log('Oops');
        }
    }
}

new Boat().pilot();