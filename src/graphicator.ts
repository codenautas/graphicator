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
        let matrixCellValues: number[] = [].concat(
            ...matrix.lines.map(
                line => line.cells.map(c => c.valor).filter(v => !isNaN(v))
            )
        );
        return {
            min: Math.min(...matrixCellValues, Number.MAX_VALUE),
            max: Math.max(...matrixCellValues, Number.MIN_VALUE)
        };
    }
};