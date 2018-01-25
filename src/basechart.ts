/*
* Logic for transformation from Tabulator toMatrix function data to c3js charts required data
*/

import * as c3 from 'c3';
import * as bg from 'best-globals';

import { Matrix } from './matrix';
import { GeneralConfig } from './graph-configuration';

export abstract class BaseChart {
    chartAPI: c3.ChartAPI;
    config: GeneralConfig;

    // TODO: change this in order to allowing set defaults in non c3configs (apilado, um, tipo, etc)
    static defaultConfig: GeneralConfig = {
        apilado: false,
        um: '',
        c3Config:{
            data: {
                type: 'line', //default type
                order: null
            }
        }
    }

    constructor(userConfig: GeneralConfig) {
        //what is it? typescript way to reference self classname dinamically,
        //why did it? to reference static member of the child Class that is being initialized with this inherited constructor
        let selfClass = <typeof BaseChart>this.constructor; 
        this.config = bg.changing(selfClass.defaultConfig, userConfig);
        this.validate();
        this.processGraphicatorConfig();
        this.processValues();
    }

    processGraphicatorConfig() {
        this.config.c3Config.bindto = '#' + this.config.idElemParaBindear;
    }

    validate(){
        var matrix = this.getMatrix();
        if (matrix.columns.length < 1){
            throw 'la matriz no tiene ninguna columna';
        }
        // if (matrix.lineVariables.length > 2){
        //     throw 'la cantidad de lineVariables es mayor que 2';
        // }
        // if(matrix.columnVariables.length > 1) {
        //     throw 'solo se puede tener 1 variable de columna';
        // }
    }
    
    abstract processValues(): any;

    renderTabulation() {
        this.chartAPI = c3.generate(this.config.c3Config);
    }

    getMatrix(): Matrix {
        return this.config.matrix;
    }
};