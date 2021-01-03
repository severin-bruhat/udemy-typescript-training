import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

const numbersCollection = new NumbersCollection([53, 3332, 99, 0, -10, 88]);
const numberSorter = new Sorter(numbersCollection);
numberSorter.sort();
console.log("numbersCollection");
console.log(numbersCollection.data);
console.log("\r");

const charactersCollection = new CharactersCollection("Hello");
const charSorter = new Sorter(charactersCollection);
charSorter.sort();
console.log("charactersCollection");
console.log(charactersCollection.data);
console.log("\r");

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

const linkedListSorter = new Sorter(linkedList);
linkedListSorter.sort();
console.log("linkedList");
linkedList.print();