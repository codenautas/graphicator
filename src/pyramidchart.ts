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
            bar:{
                width: {
                    ratio: '0.95'
                }
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
    });
    
    getConfig(userConfig:GeneralConfig): GeneralConfig {
        //en la pirámide el usuario no puede elegir la orientacion y apilado, entonces se vuelve a pisar 
        return bg.changing(super.getConfig(userConfig), PyramidChart.defaultConfig);
    }
    
    processValues(){
        this.revertOrder();
        super.processValues();
    }
    
    private revertOrder(): void {
        //revert columns and cells to ascendent piramid
        this.config.matrix.columns.reverse();
        this.config.matrix.lines.forEach(function(line){
            line.cells.reverse();
        });
    }
}
