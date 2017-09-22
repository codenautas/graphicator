import { Graphicator } from './graphicator';
import { Utils } from './utils';
import * as d3 from 'd3';

export class PieChartGraphicator extends Graphicator {
    buildChartParams(): c3.ChartConfiguration {
        const dataVarName = Utils.getUniqueArrayElement(this.matrix.dataVariables, 'matrix.dataVariables');
        const columns = this.matrix.columns.map((x: any, index: number) => [Utils.getUniqueArrayElement(x.titles, 'matrix.columns[*].titles'), Utils.getUniqueArrayElement(this.matrix.lines, 'matrix.lines').cells[index][dataVarName]]);
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