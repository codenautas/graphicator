import { ProgressiveChartGraphicator } from './progressivechart';

export class BarChartGraphicator extends ProgressiveChartGraphicator {

    /*
    * Common construction for all "progressive" charts (line, bar, stacked bars, etc),  (for example pie chart isn't a "progressive" chart)
    */
    buildProgressChartParams(matrix: any): c3.ChartConfiguration {
        const rowsForChart: string[][] = matrix.lines.map((x: any) => [this.getUniqueArrayElement(x.titles, 'matrix.lines[*].titles')].concat(x.cells.map((c: any) => (c && c.valor) || '')));
        let chartParameters: c3.ChartConfiguration = this.getBaseChartParams(matrix, rowsForChart);
        chartParameters.data.type = 'bar';
        chartParameters.data.groups = [rowsForChart.map((x: any[]) => x[0] /*first element is the name */)];
        return chartParameters;
    }
}