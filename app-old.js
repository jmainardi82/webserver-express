const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type ': 'application/json' });
        let salida = {
            nombre: 'javier',
            edad: 38,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        //res.write('hola mundo');
        res.end();
    })
    .listen(8080);


console.log('escuchando al puerto 8080');