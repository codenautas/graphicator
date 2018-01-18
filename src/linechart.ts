import { SerialChartGraphicator } from './serialchart';

export class LineChartGraphicator extends SerialChartGraphicator {

    buildChartParams(): c3.ChartConfiguration {
        let chartParameters: c3.ChartConfiguration = this.getBaseChartParams('line');
        // delete chartParameters.data.groups; //in line charts we don't want group data
        chartParameters.axis.y.min = this.minYValue;
        return chartParameters;
    }
}