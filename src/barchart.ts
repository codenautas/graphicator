import { SerialChart } from './serialchart';
import * as bg from 'best-globals';
import { GeneralConfig } from './graph-configuration';

export class BarChart extends SerialChart {

    static defaultConfig: GeneralConfig = bg.changing(SerialChart.defaultConfig, {
        c3Config: {
            data: {
                type: 'bar'
            }
        }
    })

    processGraphicatorConfig() {
        super.processGraphicatorConfig();
        this.config.c3Config.axis.x.type = 'category';
    }
}