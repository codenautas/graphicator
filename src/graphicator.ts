/*
* Logic for transformation from Tabulator toMatrix function data to c3js charts required data
*/

import * as c3 from 'c3';

export abstract class Graphicator {

    constructor(public elementIdToRender: string, public matrix: any) {
    }

    abstract buildChartParams(): c3.ChartConfiguration;

    renderTabulation(config: c3.ChartConfiguration) {
        c3.generate({ bindto: '#' + this.elementIdToRender, ...this.buildChartParams(), ...config });
    }
};