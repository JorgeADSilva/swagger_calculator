const express = require("express");
const app = express();

const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');


app.use(
  '/api-docs',
  swaggerUi.serve, 
  swaggerUi.setup(swaggerDocument)
);

app.listen(8001, () => {
  console.log("server listening on port 8001");
});

app.get('/', (req, res) => {
    res.send('Hello from the Calculator API.\n To see my documentation please go to localhost:8001/api-docs/. :)');
});

app.get('/sum', (req, res) => {
    num1 = parseInt(req.query.num1);
    num2 = parseInt(req.query.num2);
    result = num1 + num2;
    res.send('Result-> ' + result);
});