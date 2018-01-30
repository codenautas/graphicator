import { BaseChart } from './basechart';
import { Utils } from './utils';
import * as d3 from 'd3';
import * as bg from 'best-globals';
import { GeneralConfig } from './graph-configuration';
import { Matrix } from './matrix';

export class PieChart extends BaseChart {

    static defaultConfig: GeneralConfig = bg.changing(BaseChart.defaultConfig, {
        c3Config:{
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
        }
    });

    processValues(){
        let matrix:Matrix = this.config.matrix;
        const dataVarName = Utils.getUniqueArrayElement(matrix.dataVariables, 'matrix.dataVariables');
        const columns = matrix.columns.map((x: any, index: number) => [Utils.getUniqueArrayElement(x.titles, 'matrix.columns[*].titles'), Utils.getUniqueArrayElement(matrix.lines, 'matrix.lines').cells[index][dataVarName]]);
        this.config.c3Config.data.columns= columns;
    }

    validate(){
        if(this.getTotalVariables() > 2) {
            throw 'la cantidad de variables es mayor que 2, el gráfico de torta solo admite 2 variables';
        }
    }
}