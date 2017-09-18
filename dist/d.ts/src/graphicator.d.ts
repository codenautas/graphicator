/// <reference types="c3" />
import * as c3 from 'c3';
export declare abstract class Graphicator {
    tabulator: tabulatorLib;
    elementIdToRender: string;
    matrix: object;
    constructor(elementId: string, datum: object);
    abstract buildChartParams(matrix: any): c3.ChartConfiguration;
    renderTabulation(): void;
    renderChart(chartParameters: c3.ChartConfiguration): void;
    renderTableInElement(): void;
}
