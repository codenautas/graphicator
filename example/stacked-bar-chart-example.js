"use strict";



var datum = {
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
renderChart(datum, 'adopcionesChart', 'bar');