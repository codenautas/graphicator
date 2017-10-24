import { SerialChartGraphicator } from './serialchart';

export class BarChartGraphicator extends SerialChartGraphicator {

    /*
    * Common construction for all "progressive" charts (line, bar, stacked bars, etc),  (for example pie chart isn't a "progressive" chart)
    */
    buildChartParams(): c3.ChartConfiguration {
        let chartParameters: c3.ChartConfiguration = this.getBaseChartParams('bar');
        chartParameters.data.columns.splice(1,1);//removing total
        return chartParameters;
    }
}