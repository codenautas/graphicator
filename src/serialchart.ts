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
            return [lineLabel].concat(line.cells.map((c: any) => (c && c.valor) || null));
        });
        const xTitles = ['x'].concat(this.matrix.columns.map((x: any) => x.titles.slice(-1)[0])); //Utils.getUniqueArrayElement(x.titles, 'matrix.columns[*].titles')));

        return {
            data: {
                x: 'x',
                columns: [xTitles].concat(rowsForChart),
                type: type,
                order: null
            },
            axis: {
                y: {
                    min: 0,
                    padding: { bottom: 0 },
                    // padding: this.minYValue<=0?{bottom: 0}:null,
                },
                x: {
                    tick: {
                        //si una columna tiene mas de un título tomo el primero
                        // values: this.matrix.columns.map((x: any) => x.titles.slice(-1)[0])
                        culling: false
                    }
                }
            },
            grid: {
                x: {
                    show: true
                },
                y: {
                    show: true,
                    lines: [{value: 0, class: 'zeroAxis'}] //assigning css class to 0 value in axis Y
                }
            }
        }
    }
}