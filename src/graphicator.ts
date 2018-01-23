/*
* Logic for transformation from Tabulator toMatrix function data to c3js charts required data
*/

import * as c3 from 'c3';
import * as bg from 'best-globals';

import { Matrix } from './matrix';
import { GeneralConfig } from './graph-configuration';

import { LineChartGraphicator } from './linechart';
import { BarChartGraphicator } from './barchart';
import { PieChartGraphicator } from './piechart';

export abstract class Graphicator {
    chartAPI: c3.ChartAPI;
    // minYValue: number = 0; //default min Y value
    config: GeneralConfig;
    //DEFAULT C3 CONFIG FOR ALL CHART TYPES
    static defaultC3Config: c3.ChartConfiguration = {
        data: {
            type: 'line', //default type
            order: null
        },
    }

    constructor(userConfig: GeneralConfig) {
        this.config.c3Config = bg.changing(Graphicator.defaultC3Config, userConfig.c3Config);
        this.processGraphicatorConfig();
        this.processValues();
    }

    processGraphicatorConfig() {
        this.config.c3Config.bindto = '#' + this.config.idElemParaBindear;
    }

    abstract processValues():any;

    static render(config: GeneralConfig) {
        var chart: Graphicator;
        switch (config.tipo) {
            case 'barra':
                chart = new BarChartGraphicator(config);
                break;
            case 'torta':
                chart = new PieChartGraphicator(config);
                break;
            default:
                chart = new LineChartGraphicator(config);
                break;
        }
        chart.renderTabulation();
        return chart;
    }

    renderTabulation() {
        this.chartAPI = c3.generate(this.config.c3Config);
    }

    getMatrix():Matrix{
        return this.config.matrix;
    }
};