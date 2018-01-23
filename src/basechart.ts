


/*
* Logic for transformation from Tabulator toMatrix function data to c3js charts required data
*/

import * as c3 from 'c3';
import * as bg from 'best-globals';

import { Matrix } from './matrix';
import { GeneralConfig } from './graph-configuration';

export abstract class BaseChart {
    chartAPI: c3.ChartAPI;
    config: GeneralConfig;

    // TODO: change this in order to allowing set defaults in non c3configs (apilado, um, tipo, etc)
    static defaultC3Config: c3.ChartConfiguration = {
        data: {
            type: 'line', //default type
            order: null
        },
    }

    constructor(userConfig: GeneralConfig) {
        let selfClass = <typeof BaseChart>this.constructor;
        this.config = bg.changing(userConfig, { c3Config: selfClass.defaultC3Config });
        this.processGraphicatorConfig();
        this.processValues();
    }

    processGraphicatorConfig() {
        this.config.c3Config.bindto = '#' + this.config.idElemParaBindear;
    }

    abstract processValues(): any;



    renderTabulation() {
        this.chartAPI = c3.generate(this.config.c3Config);
    }

    getMatrix(): Matrix {
        return this.config.matrix;
    }
};