// interface Vehicule {
//     name: string;
//     year: Date;
//     broken: boolean;
//     summary(): string;
// }

// const oldCivic = {
//     name: 'civic',
//     year: new Date(), 
//     broken: true,
//     summary(): string {
//         return `Name: ${this.name}`;
//     }
// };

// const printVehicule = (vehicule: Vehicule): void => {
//     console.log(vehicule.summary);
//     // console.log(`Name: ${vehicule.name}`);
//     // console.log(`Year: ${vehicule.year}`);
//     // console.log(`Broken?: ${vehicule.broken}`);
// };

// printVehicule(oldCivic);


// Make it more generique and reusable
interface Reportable {
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: new Date(), 
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    }
};

const myDrink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has : ${this.sugar} grams of sugar`;
    }
};

const printVehicule = (item: Reportable): void => {
    console.log(item.summary);
};

printVehicule(oldCivic);
printVehicule(myDrink);