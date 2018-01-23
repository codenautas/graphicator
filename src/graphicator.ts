/*
* Logic for transformation from Tabulator toMatrix function data to c3js charts required data
*/

import { GeneralConfig } from './graph-configuration';

import { LineChart } from './linechart';
import { BarChart } from './barchart';
import { PieChart } from './piechart';
import { BaseChart } from './basechart';

export abstract class Graphicator {
    static render(config: GeneralConfig) {
        var chart: BaseChart;
        switch (config.tipo) {
            case 'barra':
                chart = new BarChart(config);
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
};