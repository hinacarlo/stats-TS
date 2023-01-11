import { CSVFileReader } from './CSVFileReader';
// enum - enumeration that stored closely related values - TS
// purpose is for other engineer. it's like an object
// but it's for other engineers to read that it is a collection of closely related values
// only use enums when you know before hand the all possible values  when writing the code
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

let manUnitedWins = 0;
let reader = new CSVFileReader('football.csv');
reader.read();

console.log(reader.data);

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(manUnitedWins);
