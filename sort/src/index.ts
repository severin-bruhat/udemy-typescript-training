import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'

const numbersCollection = new NumbersCollection([53, 3332, 99, 34215, 9000, 13579]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(sorter.collection);
