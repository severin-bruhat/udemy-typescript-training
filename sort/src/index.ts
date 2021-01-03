import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'

const numbersCollection = new NumbersCollection([53, 3332, 99, 0, -10, 88]);
const charactersCollection = new CharactersCollection("Hello");
const numberSorter = new Sorter(numbersCollection);
const charSorter = new Sorter(charactersCollection);
numberSorter.sort();
charSorter.sort();
console.log(numbersCollection.data);
console.log(charactersCollection.data);
