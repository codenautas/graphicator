import { SerialChartGraphicator } from './serialchart';
import { Utils } from './utils';

export class LineChartGraphicator extends SerialChartGraphicator {

    buildChartParams(): c3.ChartConfiguration {
        const rowsForChart: any[] = this.matrix.lines.map((x: any) => [Utils.getUniqueArrayElement(x.titles, 'matrix.lines[*].titles')].concat(x.cells.map((c: any) => (c && c.valor) || '')));
        let chartParameters: c3.ChartConfiguration = this.getBaseChartParams(rowsForChart);
        chartParameters.data.type = 'line';
        return chartParameters;
    }
}