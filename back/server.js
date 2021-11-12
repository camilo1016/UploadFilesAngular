const express = require('express');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');
const cors = require('cors');

const PORT = 3000;
const app = express();

app.use(cors());

const multiPartMiddleware = multipart({
    uploadDir: './subidas'
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

// EndPoint to Upload files
app.post('/api/subir', multiPartMiddleware, (req, res) => {
    res.json({
        'message': 'Archivo subido existosamente'
    });
});

app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

app.listen(PORT, () => console.log(`App running on port: ${PORT}`));