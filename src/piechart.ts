import { Graphicator } from './graphicator';
import * as d3 from 'd3';

export class PieChartGraphicator extends Graphicator {
    buildChartParams(matrix: any): c3.ChartConfiguration {
        const dataVarName = this.getUniqueArrayElement(matrix.dataVariables, 'matrix.dataVariables');
        const columns = matrix.columns.map((x: any, index: number) => [this.getUniqueArrayElement(x.titles, 'matrix.columns[*].titles'), this.getUniqueArrayElement(matrix.lines, 'matrix.lines').cells[index][dataVarName]]);
        return {
            data: {
                columns: columns,
                type: 'pie'
            },
            pie: {
                label: {
                    format: function (value: any, ratio: any, id: any) {
                        return d3.format('')(value);
                    }
                }
            }
        };
    }
}