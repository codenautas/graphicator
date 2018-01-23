import { SerialChart } from './serialchart';
import * as bg from 'best-globals';

export class BarChart extends SerialChart {

    static defaultC3Config: c3.ChartConfiguration = bg.changing(SerialChart.defaultC3Config, {
        data:{
            type:'bar'
        }
    })

    processGraphicatorConfig(){
        super.processGraphicatorConfig();
        this.config.c3Config.axis.x.type = 'category';
    }

}