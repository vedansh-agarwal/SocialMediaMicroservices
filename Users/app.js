const express = require('express');
const expressFileUpload = require('express-fileupload');
const routes = require('./routes/userRoutes');
require('./config/mongoose');

const app = express();
app.use(expressFileUpload());
app.use(express.json());

const port = 3000;

app.use('/', routes);

app.listen(port, () => {
  console.log(`User microservice listening on port ${port}`);
});