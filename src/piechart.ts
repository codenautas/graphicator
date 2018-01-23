import { Graphicator } from './graphicator';
import { Utils } from './utils';
import * as d3 from 'd3';
import * as bg from 'best-globals';

export class PieChartGraphicator extends Graphicator {

    static defaultC3Config: c3.ChartConfiguration = bg.changing(Graphicator.defaultC3Config, {
        data: {
            type: 'pie', //default type
        },
        pie: {
            label: {
                format: function (value: any) {
                    return d3.format('')(value);
                }
            }
        }
    });

    processValues(){
        let matrix = this.config.matrix;
        const dataVarName = Utils.getUniqueArrayElement(matrix.dataVariables, 'matrix.dataVariables');
        const columns = matrix.columns.map((x: any, index: number) => [Utils.getUniqueArrayElement(x.titles, 'matrix.columns[*].titles'), Utils.getUniqueArrayElement(matrix.lines, 'matrix.lines').cells[index][dataVarName]]);
        this.config.c3Config.data.columns= columns;
    }
}