/*
* Logic for transformation from Tabulator toMatrix function data to c3js charts required data
*/

const Tabulator = require('tabulator'); // since Tabulator is a webpack wrapped umd 
import * as c3 from 'c3';

export abstract class Graphicator {

    tabulator: tabulatorLib;
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

    // TODO: move to "utils library"
    validateOneElementArray(arrayVar: any[], varName: string) {
        if (arrayVar.length != 1) {
            throw new Error(varName + ' must have only one element');
        }
        //pass validation
    }

    // TODO: move to "utils library"
    getUniqueArrayElement(array: any[], varName: string) {
        this.validateOneElementArray(array, varName);
        return array[0];
    }

    // TODO: move to tabulator?
    renderTableInElement() {
        let element = document.getElementById(this.elementIdToRender);
        element.innerHTML = "";
        const table = this.tabulator.toHtmlTable(this.matrix);
        element.parentNode.insertBefore(table.create(), element);
    }
};