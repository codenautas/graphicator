/*
* Logic for transformation from Tabulator toMatrix function data to c3js charts required data
*/

import { GeneralConfig } from './graph-configuration';

import { LineChart } from './linechart';
import { BarChart } from './barchart';
import { PieChart } from './piechart';
import { BaseChart } from './basechart';
import { PyramidChart } from './pyramidchart';
import { Matrix } from '.';
import { Line, Cell } from './matrix';

export abstract class Graphicator {
    static render(config: GeneralConfig) {
        var chart: BaseChart;
        switch (config.tipo) {
            case 'barra':
                chart = new BarChart(config);
                break;
            case 'piramide':
                chart = new PyramidChart(config);
                break;
            case 'torta':
                chart = new PieChart(config);
                break;
            default:
                chart = new LineChart(config);
                break;
        }
        chart.renderTabulation();
        return chart;
    }

    // TODO: Esto no debería estar en tabulator?
    static calcularMinMax(matrix: Matrix): any {
        var max = Number.MIN_VALUE;
        var minCellVal = Number.MAX_VALUE;
        matrix.lines.forEach(function (line: Line) {
            line.cells.forEach(function (cell: Cell) {
                if (cell && cell.valor && !isNaN(cell.valor)) {
                    max = Math.max(cell.valor, max);
                    minCellVal = Math.min(cell.valor, minCellVal);
                }
            });
        });
        return {min:minCellVal, max:max};
    }
};