import fs from 'fs';

const matches = fs
    .readFileSync('football.csv', {
        encoding: 'utf-8'
    })
    .split('\n')
    .map((row: string): string[] => {
        return row.split(',');
    });

enum MatchResult {
    Homewin = 'H',
    AwayWin = 'A',
    Draw = 'D'
};

let manUnitedWind = 0;

for(let match of matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult.Homewin) {
        manUnitedWind++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWind++;
    }
}

console.log(`Man United won ${manUnitedWind} games`);