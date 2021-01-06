import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

// create an object that satifies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

// create an instance of MatchReader an pass in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();



let manUnitedWind = 0;

for(let match of matchReader.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult.Homewin) {
        manUnitedWind++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWind++;
    }
}

console.log(`Man United won ${manUnitedWind} games`);