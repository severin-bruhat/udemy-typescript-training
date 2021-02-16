class Boat {
    color: string = 'red';

    formattedColor(): string {
        return `This boat's color is ${this.color}`;
    }

    @logError('Oops, the boat sunk')
    pilot(): void {
        throw new Error();
        console.log('swish');
    }
}

function logError(errorMessage: string) {
    return function (target: any, key: string, desc: PropertyDescriptor): void {
        const method = desc.value; //reference to pilot()
    
        desc.value = function(){
            try {
                method();
            } catch(e) {
                console.log(errorMessage);
            }
        }
    }
}

new Boat().pilot();