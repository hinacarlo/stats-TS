import { WinsAnalyis } from './analyzers/WinsAnalysis';
import { CSVFileReader } from './CSVFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';
import { Summary } from './Summary';

// enum - enumeration that stored closely related values - TS
// purpose is for other engineer. it's like an object
// but it's for other engineers to read that it is a collection of closely related values
// only use enums when you know before hand the all possible values  when writing the code

const reader = MatchReader.fromCSV('football.csv');

/* const csvFileReader = new CSVFileReader('football.csv'); */
/* const reader = new MatchReader(csvFileReader); */
reader.load();

const summary = Summary.winsAnalysisWithHtmlReport('Man United');
/* const summary = new Summary(new WinsAnalyis('Man United'), new HtmlReport()); */
const summary2 = new Summary(
  new WinsAnalyis('Man United'),
  new ConsoleReport()
);

summary.buildAndPrintReport(reader.matches);
summary2.buildAndPrintReport(reader.matches);
