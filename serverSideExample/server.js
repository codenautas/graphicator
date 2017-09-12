var express = require('express');
var app = express();

var Path = require('path');

var serveContent = require('serve-content');

var server = app.listen(3000, function () {
    console.log('Listening on port %d', server.address().port);
});

function site_up(req, res) {

    res.send(`
        <link rel="shortcut icon" href="tabulator-ico.png" type="image/png" />
        <link rel="stylesheet" type="text/css" href="example.css"> 
        <link rel="stylesheet" href="../node_modules/c3/c3.min.css">

        <h1>graphicator demo</h1>
        <div id="mortalidadChart"></div>
        <div id="mortalidadChart2"></div>
        <div id="poblacionChart"></div>
        <div id="adopcionesChart"></div>

        <script src='../dist/bundle.js'></script>
    `);
}

[
    'node_modules/like-ar',
    'node_modules/js-to-html',
    'node_modules/require-bro/lib',
    'node_modules/tabulator',
    'serverSideExample',
    ''
].forEach(function (jsPath) {
    console.log('colgando ', './' + jsPath, Path.resolve('./' + jsPath));
    app.use('/', serveContent('./' + jsPath, { allowedExts: ['js', 'css'] }));
});

app.use('/serverSideExample', serveContent('./', { allowedExts: ['png', 'jpg', 'jpeg', 'css'] }));

app.get('/index.html', site_up);
app.get('/', site_up);

// app.use(tabulator());

