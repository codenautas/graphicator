import { SerialChartGraphicator } from './serialchart';

export class BarChartGraphicator extends SerialChartGraphicator {

    /*
    * Common construction for all "progressive" charts (line, bar, stacked bars, etc),  (for example pie chart isn't a "progressive" chart)
    */
    buildChartParams(): c3.ChartConfiguration {
        return this.getBaseChartParams('bar');
    }
}