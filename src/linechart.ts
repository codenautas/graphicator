import * as bg from 'best-globals';

import { SerialChart } from './serialchart';
import { Graphicator, GeneralConfig } from '.';

export class LineChart extends SerialChart {
    static defaultConfig: GeneralConfig = bg.changing(SerialChart.defaultConfig, {
        c3Config: {
            axis: {
                y: {
                    padding: { bottom: 0, top: 25 }
                }
            }
        }
    });

    processGraphicatorConfig() {
        super.processGraphicatorConfig()

        let maxMin: any = Graphicator.calcularMinMax(this.getMatrix());
        let minYValue = (maxMin.min < 0 ? maxMin.min : (2 * maxMin.min - maxMin.max > 0 ? 2 * maxMin.min - maxMin.max : 0)); // acomoda el 0 automáticamente, si los datos útiles ocupan menos de la mitad cambio el 0        

        if (minYValue > 0) {
            minYValue = 0
        }
        this.config.c3Config.axis.y.min = minYValue;
        
        this.config.c3Config.data.type = this.config.apilado ? 'area' : 'line';
    }
}