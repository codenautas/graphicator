import * as bg from 'best-globals';
import { Utils } from "./utils";

import { Column, Line } from "./matrix";
import { BaseChart } from "./basechart";

/*
* Common construction for all "serial" charts (line, bar, stacked bars, etc),  (for example pie chart isn't a "serial" chart)
 */
export abstract class SerialChart extends BaseChart {

    static defaultC3Config: c3.ChartConfiguration = bg.changing(BaseChart.defaultC3Config,{
        data: {
            x: 'x',
            type: 'line',
        },
        axis: {
            y: {
                padding: { bottom: 0 },
            },
            x: {
                tick: {
                    //si una columna tiene mas de un título tomo el primero
                    // values: this.getMatrix().columns.map((x: any) => x.titles.slice(-1)[0])
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
                lines: [{ value: 0, class: 'zeroAxis' }] //assigning css class to 0 value in axis Y
            }
        }
    });

    processGraphicatorConfig() {
        super.processGraphicatorConfig();

        this.config.c3Config.data.groups = this.config.apilado? [this.getRowsForChart().map((x: any[]) => x[0] /*first element is the name */)]: undefined; 
        this.config.c3Config.axis.x.label= { position: 'outer-center', text: this.getMatrix().vars[this.getMatrix().columnVariables[0]].label };
        this.config.c3Config.axis.y.label = { position: 'outer-middle', text: this.config.um }; 
    }
    
    processValues(): any {
        const xTitles = ['x'].concat(this.getMatrix().columns.map((c: Column) => c.titles.slice(-1)[0])); //Utils.getUniqueArrayElement(x.titles, 'matrix.columns[*].titles')));
        this.config.c3Config.data.columns = [xTitles].concat(this.getRowsForChart());
    }

    private getRowsForChart() {
        let be = this;
        const rowsForChart: any[] = this.getMatrix().lines.map((line: Line) => {
            let lineTitle = Utils.getUniqueArrayElement(line.titles, 'matrix.lines[*].titles');
            let lineVariable = Utils.getUniqueArrayElement(be.getMatrix().lineVariables, 'be.getMatrix().lineVariables');
            let lineLabel = be.getMatrix().vars[lineVariable].values[lineTitle].label;
            return [lineLabel].concat(line.cells.map((c: any) => (c && c.valor) || null));
        });
        return rowsForChart;
    }
}