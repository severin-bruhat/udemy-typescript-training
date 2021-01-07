import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';


// create an object that satifies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

// create an instance of MatchReader an pass in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();





console.log(`Man United won ${manUnitedWind} games`);