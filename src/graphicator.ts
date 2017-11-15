/*
* Logic for transformation from Tabulator toMatrix function data to c3js charts required data
*/

import * as c3 from 'c3';
import * as bg from 'best-globals';

export abstract class Graphicator {

    constructor(public elementIdToRender: string, public matrix: any) {
    }

    abstract buildChartParams(): c3.ChartConfiguration;

    renderTabulation(userConfig: c3.ChartConfiguration) {
        var finalConfig:c3.ChartConfiguration = bg.changing(bg.changing({ bindto: '#' + this.elementIdToRender}, this.buildChartParams()), userConfig||{});
        c3.generate(finalConfig);
    }
};