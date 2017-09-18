/// <reference types="c3" />
import { Graphicator } from "./graphicator";
export declare abstract class ProgressiveChartGraphicator extends Graphicator {
    abstract buildProgressChartParams(matrix: any): c3.ChartConfiguration;
    buildChartParams(matrix: any): c3.ChartConfiguration;
    getBaseChartParams(matrix: any, rowsForChart: string[][]): c3.ChartConfiguration;
}
