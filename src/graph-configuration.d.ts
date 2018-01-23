import * as c3 from 'c3';
import { Matrix } from './matrix';

export interface GeneralConfig {
    matrix: Matrix;
    idElemParaBindear: string;
    apilado?: boolean; //specifies if group chart data
    tipo?: string;
    um?: string;
    c3Config: c3.ChartConfiguration;
}