import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');
reader.read();

enum MatchResult {
    Homewin = 'H',
    AwayWin = 'A',
    Draw = 'D'
};

let manUnitedWind = 0;

for(let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult.Homewin) {
        manUnitedWind++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWind++;
    }
}

console.log(`Man United won ${manUnitedWind} games`);