import { Graphicator } from "./graphicator";
import { Utils } from "./utils";

export abstract class SerialChartGraphicator extends Graphicator {

    /*
    * Common construction for all "serial" charts (line, bar, stacked bars, etc),  (for example pie chart isn't a "serial" chart)
     */
    getBaseChartParams(rowsForChart: string[][]): c3.ChartConfiguration {
        const xTitles = ['x'].concat(this.matrix.columns.map((x: any) => Utils.getUniqueArrayElement(x.titles, 'matrix.columns[*].titles')));
        return {
            data: {
                x: 'x',
                columns: [xTitles].concat(rowsForChart),
            },
            axis: {
                x: {
                    label: {
                        text: this.matrix.vars[Utils.getUniqueArrayElement(this.matrix.columnVariables, 'matrix.columnVariables')].label,
                        position: 'outer-center'
                    }
                },
                y: {
                    label: {
                        text: Utils.getUniqueArrayElement(this.matrix.dataVariables, 'matrix.dataVariables') + ' por ' + this.matrix.vars[Utils.getUniqueArrayElement(this.matrix.lineVariables, 'be.matrix.lineVariables')].label,
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