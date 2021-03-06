import * as bg from 'best-globals';

import { Column, Line } from "./matrix";
import { BaseChart } from "./basechart";
import { GeneralConfig } from './graph-configuration';
import * as d3 from 'd3';

/*
* Common construction for all "serial" charts (line, bar, stacked bars, etc),  (for example pie chart isn't a "serial" chart)
 */
export abstract class SerialChart extends BaseChart {

    static yTickFormat(d: any) {
        //if number show only two decimals
        return isNaN(d) ? d : d3.round(d, 1);
    }

    static defaultConfig: GeneralConfig = bg.changing(BaseChart.defaultConfig, {
        c3Config: {
            data: {
                x: 'x',
                type: 'line',
            },
            axis: {
                y: {
                    padding: { bottom: 0, top: 0 },
                    tick: {
                        format: (d: any) => SerialChart.yTickFormat(d)
                    }
                },
                x: {
                    type: 'category',
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
        }
    });

    processGraphicatorConfig() {
        super.processGraphicatorConfig();

        this.config.c3Config.data.groups = this.config.apilado ? [this.getRowsForChart().map((x: any[]) => x[0] /*first element is the name */)] : undefined;
        this.config.c3Config.axis.x.label = { position: 'outer-center', text: this.getMatrix().vars[this.getMatrix().columnVariables[0]].label };
        this.config.c3Config.axis.y.label = { position: 'outer-middle', text: this.config.um };
    }

    // TODO: try with Row Oriented Data instead of Column oriented (see getRowsForChart method)
    processValues(): any {
        //for years in rotated charts we revert data order
        if (this.getMatrix().columnVariables[0] == 'annio' && !this.config.c3Config.axis.rotated) { this.revertOrder() }
        this.config.c3Config.data.columns = [this.getXTicks()].concat(this.getRowsForChart());
    }
    
    private getXTicks(): string[]{
        let mtx = this.getMatrix();
        let colVarValues = mtx.vars[mtx.columnVariables[0]].values;
        return ['x'].concat(mtx.columns.map((c: Column) => colVarValues[c.titles[c.titles.length-1]].label)); //Utils.getUniqueArrayElement(x.titles, 'matrix.columns[*].titles')));
    }

    // TODO: think in data by rows or json instead of by columns
    // http://c3js.org/samples/data_rowed.html
    // http://c3js.org/samples/data_json.html
    private getRowsForChart() {
        let mtx = this.getMatrix();
        const rowsForChart: any[] = mtx.lines.map((line: Line) => {
            let lineLabel: string = (line.titles.length && mtx.lineVariables.length)
                ? mtx.vars[mtx.lineVariables[0]].values[line.titles[0]].label
                : this.config.um;
            return [lineLabel].concat(line.cells.map((c: any) => (c && c.valor) || null));
        });
        return rowsForChart;
    }

    //revert columns and cells to ascendent order
    protected revertOrder(): void {
        this.config.matrix.columns.reverse();
        this.config.matrix.lines.forEach(line => line.cells.reverse());
    }
}