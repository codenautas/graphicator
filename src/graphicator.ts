/*
* Logic for transformation from Tabulator toMatrix function data to c3js charts required data
*/

// var Tabulator = require('tabulator'); // since Tabulator is a umd module
import Tabulator = require('tabulator');
import * as c3 from 'c3';

export abstract class Graphicator {

    tabulator: Tabulator;
    elementIdToRender: string;
    matrix: object;

    constructor(elementId: string, datum: object) {
        this.tabulator = new Tabulator();
        this.tabulator.defaultShowAttribute = 'valor';
        this.matrix = this.tabulator.toMatrix(datum);
        this.elementIdToRender = elementId;
    }

    abstract buildChartParams(matrix: any): c3.ChartConfiguration;

    renderTabulation() {
        this.renderTableInElement();
        this.renderChart(this.buildChartParams(this.matrix));
    }

    renderChart(chartParameters: c3.ChartConfiguration) {
        c3.generate({ bindto: '#' + this.elementIdToRender, ...chartParameters });
    }

    // TODO: move to tabulator?
    renderTableInElement() {
        let element = document.getElementById(this.elementIdToRender);
        element.innerHTML = "";
        const table = this.tabulator.toHtmlTable(this.matrix);
        element.parentNode.insertBefore(table.create(), element);
    }
};