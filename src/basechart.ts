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
        this.config = this.getConfig(userConfig);
        this.validate();
        this.processGraphicatorConfig();
        this.processValues();
    }

    getConfig(userConfig:GeneralConfig): GeneralConfig {
        //what is it? typescript way to reference self classname dinamically,
        //why did it? to reference static member of the child Class that is being initialized with this inherited constructor
        let selfClass = <typeof BaseChart>this.constructor; 
        return bg.changing(selfClass.defaultConfig, userConfig);
    }

    processGraphicatorConfig() {
        this.config.c3Config.bindto = '#' + this.config.idElemParaBindear;
    }

    validate(){
        var matrix = this.getMatrix();
        if (matrix.columns.length < 1){
            throw 'la matriz no tiene ninguna columna';
        }
        if (matrix.lineVariables.length > 1){
            throw 'Solo se pueden graficar tabulados con una sola variable con ubicación "fil", intente poniendo en ubicación "z" alguna variable que tenga ubicación "fil"';
        }
        if(matrix.columnVariables.length > 1) {
            throw 'Solo se pueden graficar tabulados con una sola variable con ubicación "col", intente poniendo en ubicación "z" alguna variable que tenga ubicación "col"';
        }

        if(this.getTotalVariables() > 2) {
            throw 'la cantidad de variables es mayor que 3';
        }
    }
    
    getTotalVariables():number{
        return this.getMatrix().lineVariables.length + this.getMatrix().columnVariables.length;
    }

    abstract processValues(): any;

    renderTabulation() {
        this.chartAPI = c3.generate(this.config.c3Config);
    }

    getMatrix(): Matrix {
        return this.config.matrix;
    }
};