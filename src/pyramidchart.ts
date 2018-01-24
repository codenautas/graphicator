import * as bg from 'best-globals';
import { GeneralConfig } from './graph-configuration';
import { BarChart } from './barchart';

export class PyramidChart extends BarChart {

    static defaultConfig: GeneralConfig = bg.changing(BarChart.defaultConfig, {
        apilado: true,
        c3Config: {
            data: {
                type: 'bar'
            },
            axis: {
                rotated: true,
                y: {
                    tick: {
                        format: function (d: number) {
                            return (parseInt(d.toString()) === d) ? Math.abs(d) : null;
                        }
                    },
                }
            }
        }
    })

}
