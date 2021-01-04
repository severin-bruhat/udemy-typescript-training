import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

const reader = new CsvFileReader('football.csv');
reader.read();

const dateOfFirstMatch = reader.data[0][0];
console.log(dateOfFirstMatch);



let manUnitedWind = 0;

for(let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult.Homewin) {
        manUnitedWind++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWind++;
    }
}

console.log(`Man United won ${manUnitedWind} games`);