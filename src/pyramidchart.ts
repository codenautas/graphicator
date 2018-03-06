import * as bg from 'best-globals';
import { GeneralConfig } from './graph-configuration';
import { BarChart } from './barchart';
import { Utils } from './utils';
import { SerialChart } from '.';
import { Line } from './matrix';

export class PyramidChart extends BarChart {
    static yTickFormat(d: any) {
        return isNaN(d) ? d : Math.abs(SerialChart.yTickFormat(d));
    }

    static defaultConfig: GeneralConfig = bg.changing(BarChart.defaultConfig, {
        apilado: true,
        c3Config: {
            data: {
                type: 'bar'
            },
            bar: {
                width: {
                    ratio: '0.8'
                }
            },
            axis: {
                rotated: true,
                y: {
                    //hack porque ahora se calcula mal el min y max para los apilados
                    padding: { bottom: 90, top: 90 },
                    tick: {
                        format: (d: number) => PyramidChart.yTickFormat(d)
                    }
                }
            }
        }
    });

    getConfig(userConfig: GeneralConfig): GeneralConfig {
        //en la pirámide el usuario no puede elegir la orientacion y apilado, entonces se vuelve a pisar 
        return bg.changing(super.getConfig(userConfig), PyramidChart.defaultConfig);
    }

    processValues() {
        this.revertOrder();
        this.changeVariableSign();
        super.processValues();
    }

    // change cell.valor sign to choose pyramid side for each category
    changeVariableSign(): void {
        let mtx = this.getMatrix();
        let lineVar = Utils.getUniqueArrayElement(mtx.lineVariables, 'lineVariables[*]');
        let varValues = mtx.vars[lineVar].values;
        delete varValues.null;
        for (let catName in varValues) {
            let catLine = mtx.lines.find((line:Line) => line.titles.indexOf(catName) > -1);
            catLine.cells.forEach(c => c.valor *= varValues[catName].signo_piramide);
        }
    }
}
