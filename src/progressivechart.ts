import { Graphicator } from "./graphicator";

export abstract class ProgressiveChartGraphicator extends Graphicator {

    abstract buildProgressChartParams(matrix: any): c3.ChartConfiguration;

    buildChartParams(matrix: any): c3.ChartConfiguration {
        return this.buildProgressChartParams(matrix);
    }

    /*
    * Common construction for all "progressive" charts (line, bar, stacked bars, etc),  (for example pie chart isn't a "progressive" chart)
     */
    getBaseChartParams(matrix: any, rowsForChart: string[][]): c3.ChartConfiguration {
        const xTitles = ['x'].concat(matrix.columns.map((x: any) => this.getUniqueArrayElement(x.titles, 'matrix.columns[*].titles')));
        return {
            data: {
                x: 'x',
                columns: [xTitles].concat(rowsForChart),
            },
            axis: {
                x: {
                    label: {
                        text: this.getUniqueArrayElement(matrix.columnVariables, 'matrix.columnVariables'),
                        position: 'outer-center'
                    }
                },
                y: {
                    label: {
                        text: this.getUniqueArrayElement(matrix.dataVariables, 'matrix.dataVariables'),
                        position: 'outer-middle'
                    },
                    min: 0
                }
            },
            grid: {
                x: {
                    show: true
                },
                y: {
                    show: true
                }
            }
        }
    }
}