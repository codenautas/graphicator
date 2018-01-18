/*
* Logic for transformation from Tabulator toMatrix function data to c3js charts required data
*/

import * as c3 from 'c3';
import * as bg from 'best-globals';

export abstract class Graphicator {
    minYValue: number = 0; //default min Y value

    constructor(public elementIdToRender: string, public matrix: Matrix) {
        this.minYValue = Graphicator.calcularMinimo(matrix);
    }

    static calcularMinimo(matrix:Matrix):number{
        var max = Number.MIN_VALUE;
        var minCellValue = Number.MAX_VALUE;
        matrix.lines.forEach(function (line) {
            line.cells.forEach(function (cell) {
                if (cell && cell.valor) {
                    max = Math.max(cell.valor, max);
                    minCellValue = Math.min(cell.valor, minCellValue);
                }
            });
        });
        return (minCellValue < 0 ? minCellValue : (2 * minCellValue - max > 0 ? 2 * minCellValue - max : 0)); // acomoda el 0 automáticamente, si los datos útiles ocupan menos de la mitad cambio el 0        
    }

    abstract buildChartParams(): c3.ChartConfiguration;

    renderTabulation(userConfig: c3.ChartConfiguration) {
        var finalConfig: c3.ChartConfiguration = bg.changing(bg.changing({ bindto: '#' + this.elementIdToRender }, this.buildChartParams()), userConfig || {});
        c3.generate(finalConfig);
    }
};