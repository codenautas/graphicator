import * as bg from 'best-globals';
import { GeneralConfig } from './graph-configuration';
import { BarChart } from './barchart';
import { Utils } from './utils';

export class PyramidChart extends BarChart {

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
                    tick: {
                        format: function (d: number) {
                            return (parseInt(d.toString()) === d) ? Math.abs(d) : null;
                        }
                    },
                }
            }
        }
    });

    getConfig(userConfig: GeneralConfig): GeneralConfig {
        //en la pirámide el usuario no puede elegir la orientacion y apilado, entonces se vuelve a pisar 
        return bg.changing(super.getConfig(userConfig), PyramidChart.defaultConfig);
    }

    processValues() {
        this.changeVariableSign();
        super.processValues();
    }

  

    // change cell.valor sign to choose pyramid side for each category
    changeVariableSign(): void {
        let mtx = this.getMatrix();
        let lineVar = Utils.getUniqueArrayElement(mtx.lineVariables, 'lineVariables[*]');
        let varValues = mtx.vars[lineVar].values;

        for (let catName in varValues) {
            mtx.lines.filter(line => line.titles.indexOf(catName) > -1)
                .forEach(line =>
                    line.cells.forEach(c => c.valor *= varValues[catName].signo_piramide)
                );
        }
    }
}
