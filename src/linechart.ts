import { SerialChartGraphicator } from './serialchart';
import { Line, Cell } from './matrix';

export class LineChartGraphicator extends SerialChartGraphicator {

    // same config than serial chart
    // static defaultC3Config: c3.ChartConfiguration = bg.changing(SerialChartGraphicator.defaultC3Config, {

    // })

    processGraphicatorConfig(){
        super.processGraphicatorConfig()
        this.config.c3Config.axis.y.min = this.calcularMinimo(); // line chart only
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