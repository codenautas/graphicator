import { SerialChartGraphicator } from './serialchart';

export class LineChartGraphicator extends SerialChartGraphicator {

    buildChartParams(): c3.ChartConfiguration {
        return this.getBaseChartParams('line');
    }
}