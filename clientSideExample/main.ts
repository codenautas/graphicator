import {Graphicator} from '../src/graphicator';
import {LineChartGraphicator} from "../src/linechart";
import {BarChartGraphicator} from "../src/barchart";
import {PieChartGraphicator} from "../src/piechart";

let datum:object;
let graphicator:Graphicator;

//#########################

datum = {
    vars: [
        { name: 'comuna', place: 'left' },
        { name: 'año', place: 'top' },
        { name: 'valor', place: 'data' },
    ],
    list: [
        { comuna: 1, año: 2014, valor: 1230 },
        { comuna: 2, año: 2014, valor: 1430 },
        { comuna: 3, año: 2014, valor: 1980 },
        { comuna: 4, año: 2014, valor: 1520 },
        { comuna: 1, año: 2015, valor: 1360 },
        { comuna: 2, año: 2015, valor: 1330 },
        { comuna: 3, año: 2015, valor: 1320 },
        { comuna: 4, año: 2015, valor: 1490 },
        { comuna: 1, año: 2016, valor: 2230 },
        { comuna: 2, año: 2016, valor: 2330 },
        { comuna: 4, año: 2016, valor: 2620 },
        { comuna: 1, año: 2017, valor: 2730 },
        { comuna: 2, año: 2017, valor: 2830 },
        { comuna: 3, año: 2017, valor: 2780 },
        { comuna: 4, año: 2017, valor: 2920 },
    ]
}

graphicator = new LineChartGraphicator('mortalidadChart', datum);
graphicator.renderTabulation();

//#########################

datum = {
    vars: [
        { name: 'tipoDeHacinamiento', place: 'left' },
        { name: 'año', place: 'top' },
        { name: 'valor', place: 'data' },
    ],
    list: [
        { "tipoDeHacinamiento": "hacinadas"   , año: 2012, valor: 19.3 },
        { "tipoDeHacinamiento": "no hacinadas", año: 2012, valor: 78.8 },
        { "tipoDeHacinamiento": "hacinadas"   , año: 2013, valor: 16.4 },
        { "tipoDeHacinamiento": "no hacinadas", año: 2013, valor: 79.0 },
        { "tipoDeHacinamiento": "hacinadas"   , año: 2014, valor: 16.0 },
        { "tipoDeHacinamiento": "no hacinadas", año: 2014, valor: 81.3 },
        { "tipoDeHacinamiento": "hacinadas"   , año: 2015, valor: 12.3 },
        { "tipoDeHacinamiento": "no hacinadas", año: 2015, valor: 84.3 },
    ]
}

graphicator = new LineChartGraphicator('mortalidadChart2', datum);
graphicator.renderTabulation();

//#########################

datum = {
    vars: [
        { name: 'comuna', place: 'left' },
        { name: 'rangoEdad', place: 'top' },
        { name: 'valor', place: 'data' },
    ],
    list: [
        { comuna: 'Total', rangoEdad: '0-4', valor: 165.638 },
        { comuna: 'Total', rangoEdad: '5-9', valor: 156.372 },
        { comuna: 'Total', rangoEdad: '10-14', valor: 150.501 },
        { comuna: 'Total', rangoEdad: '15-17', valor: 92.521 },
    ]
}

graphicator = new PieChartGraphicator('poblacionChart', datum);
graphicator.renderTabulation();

//#########################


datum = {
    vars: [
        { name: 'sexo', place: 'left' },
        { name: 'año', place: 'top' },
        { name: 'valor', place: 'data' },
    ],
    list: [
        { sexo: 'mujer', año: 2015, valor: 1230 },
        { sexo: 'varon', año: 2015, valor: 1430 },
        { sexo: 'varon', año: 2015, valor: 1980 },
        { sexo: 'mujer', año: 2015, valor: 1520 },
        { sexo: 'mujer', año: 2016, valor: 2230 },
        { sexo: 'varon', año: 2016, valor: 2330 },
        { sexo: 'varon', año: 2016, valor: 2280 },
        { sexo: 'mujer', año: 2016, valor: 2620 },
        { sexo: 'mujer', año: 2017, valor: 2730 },
        { sexo: 'varon', año: 2017, valor: 2830 },
        { sexo: 'varon', año: 2017, valor: 2780 },
        { sexo: 'mujer', año: 2017, valor: 2920 },
    ]
}

graphicator = new BarChartGraphicator('adopcionesChart', datum);
graphicator.renderTabulation();