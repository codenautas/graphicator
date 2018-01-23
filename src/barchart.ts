import { SerialChartGraphicator } from './serialchart';

export class BarChartGraphicator extends SerialChartGraphicator {

    processGraphicatorConfig(){
        super.processGraphicatorConfig();
        this.config.c3Config.axis.x.type = 'category';
    }

}