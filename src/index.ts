import { CSVFileReader } from './CSVFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

// enum - enumeration that stored closely related values - TS
// purpose is for other engineer. it's like an object
// but it's for other engineers to read that it is a collection of closely related values
// only use enums when you know before hand the all possible values  when writing the code

let manUnitedWins = 0;
const csvFileReader = new CSVFileReader('football.csv');
const reader = new MatchReader(csvFileReader);
reader.load();

console.log(reader.matches[0]);

for (let match of reader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(manUnitedWins);
