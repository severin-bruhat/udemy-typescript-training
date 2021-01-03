import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'

const numbersCollection = new NumbersCollection([53, 3332, 99, 0, -10, 88]);
const numberSorter = new Sorter(numbersCollection);
numberSorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("Hello");
const charSorter = new Sorter(charactersCollection);
charSorter.sort();
console.log(charactersCollection.data);
