import { ProgressiveChartGraphicator } from './progressivechart';
import { Utils } from './utils';

export class LineChartGraphicator extends ProgressiveChartGraphicator {

    buildProgressChartParams(matrix: any): c3.ChartConfiguration {
        const rowsForChart: any[] = matrix.lines.map((x: any) => [Utils.getUniqueArrayElement(x.titles, 'matrix.lines[*].titles')].concat(x.cells.map((c: any) => (c && c.valor) || '')));
        let chartParameters: c3.ChartConfiguration = this.getBaseChartParams(matrix, rowsForChart);
        chartParameters.data.type = 'line';
        return chartParameters;
    }
}