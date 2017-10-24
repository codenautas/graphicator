import { Graphicator } from "./graphicator";
import { Utils } from "./utils";

export abstract class SerialChartGraphicator extends Graphicator {

    /*
    * Common construction for all "serial" charts (line, bar, stacked bars, etc),  (for example pie chart isn't a "serial" chart)
     */
    getBaseChartParams(type: string): c3.ChartConfiguration {
        let be = this;
        const rowsForChart: any[] = this.matrix.lines.map((line: any) => {
            let lineTitle = Utils.getUniqueArrayElement(line.titles, 'matrix.lines[*].titles');
            let lineVariable = Utils.getUniqueArrayElement(be.matrix.lineVariables, 'be.matrix.lineVariables');
            let lineLabel = be.matrix.vars[lineVariable].values[lineTitle].label;
            return [lineLabel].concat(line.cells.map((c: any) => (c && c.valor) || ''));
        });

        //hack for years descending order: negate years
        const xTitles = ['x'].concat(this.matrix.columns.map((x: any) => -Utils.getUniqueArrayElement(x.titles, 'matrix.columns[*].titles')));
        return {
            data: {
                x: 'x',
                columns: [xTitles].concat(rowsForChart),
                type: type,
                groups: [rowsForChart.map((x: any[]) => x[0] /*first element is the name */)],
            },
            axis: {
                x: {
                    //hack for years descending order: negate years again for show with correct sign
                    tick: { 
                        format: function (x) {
                          return -x;
                        }
                      }
                },
                y: {
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