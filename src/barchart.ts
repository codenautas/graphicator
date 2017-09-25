import { SerialChartGraphicator } from './serialchart';
import { Utils } from './utils';

export class BarChartGraphicator extends SerialChartGraphicator {

    /*
    * Common construction for all "progressive" charts (line, bar, stacked bars, etc),  (for example pie chart isn't a "progressive" chart)
    */
    buildChartParams(): c3.ChartConfiguration {
        const rowsForChart: string[][] = this.matrix.lines.map((x: any) => [Utils.getUniqueArrayElement(x.titles, 'matrix.lines[*].titles')].concat(x.cells.map((c: any) => (c && c.valor) || '')));
        let chartParameters: c3.ChartConfiguration = this.getBaseChartParams(rowsForChart);
        chartParameters.data.type = 'bar';
        chartParameters.data.groups = [rowsForChart.map((x: any[]) => x[0] /*first element is the name */)];
        return chartParameters;
    }
}