import { SerialChart } from './serialchart';

export class BarChart extends SerialChart {

    processGraphicatorConfig(){
        super.processGraphicatorConfig();
        this.config.c3Config.axis.x.type = 'category';
    }

}