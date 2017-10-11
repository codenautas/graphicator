import { SerialChartGraphicator } from './serialchart';
import { Utils } from './utils';

export class LineChartGraphicator extends SerialChartGraphicator {

    buildChartParams(): c3.ChartConfiguration {
        let be = this;
        const rowsForChart: any[] = this.matrix.lines.map((line: any) => {
            let lineTitle = Utils.getUniqueArrayElement(line.titles, 'matrix.lines[*].titles');
            let lineVariable = Utils.getUniqueArrayElement(be.matrix.lineVariables, 'be.matrix.lineVariables');
            let lineLabel = be.matrix.vars[lineVariable].values[lineTitle].label;
            return [lineLabel].concat(line.cells.map((c: any) => (c && c.valor) || ''));
        });
        let chartParameters: c3.ChartConfiguration = this.getBaseChartParams(rowsForChart);
        chartParameters.data.type = 'line';
        return chartParameters;
    }
}