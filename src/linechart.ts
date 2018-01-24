import { SerialChart } from './serialchart';
import { Line, Cell } from './matrix';

export class LineChart extends SerialChart {

    // static defaultC3Config: c3.ChartConfiguration = bg.changing(SerialChart.defaultC3Config, {
    // })

    processGraphicatorConfig(){
        super.processGraphicatorConfig()

        let minYValue = this.calcularMinimo()
        this.config.c3Config.axis.y.min = minYValue; // line chart only
        if (minYValue > 0) this.config.c3Config.grid.y.lines[0].value = minYValue;
        this.config.c3Config.data.type = this.config.apilado? 'area':'line';
    }

    private calcularMinimo(): number {
        var max = Number.MIN_VALUE;
        var minCellValue = Number.MAX_VALUE;
        this.getMatrix().lines.forEach(function (line: Line) {
            line.cells.forEach(function (cell: Cell) {
                if (cell && cell.valor) {
                    max = Math.max(cell.valor, max);
                    minCellValue = Math.min(cell.valor, minCellValue);
                }
            });
        });
        return (minCellValue < 0 ? minCellValue : (2 * minCellValue - max > 0 ? 2 * minCellValue - max : 0)); // acomoda el 0 automáticamente, si los datos útiles ocupan menos de la mitad cambio el 0        
    }
}