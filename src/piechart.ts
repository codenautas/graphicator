import { Graphicator } from './graphicator';
import { Utils } from './utils';
import * as d3 from 'd3';

export class PieChartGraphicator extends Graphicator {
    buildChartParams(matrix: any): c3.ChartConfiguration {
        const dataVarName = Utils.getUniqueArrayElement(matrix.dataVariables, 'matrix.dataVariables');
        const columns = matrix.columns.map((x: any, index: number) => [Utils.getUniqueArrayElement(x.titles, 'matrix.columns[*].titles'), Utils.getUniqueArrayElement(matrix.lines, 'matrix.lines').cells[index][dataVarName]]);
        return {
            data: {
                columns: columns,
                type: 'pie'
            },
            pie: {
                label: {
                    format: function (value: any) {
                        return d3.format('')(value);
                    }
                }
            }
        };
    }
}