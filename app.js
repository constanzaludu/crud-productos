//Aca se levanta el servidor. Se crea una nueva instancai y lo pone a escuchar en un puerto en particular

require('dotenv').config();
const Server = require('./models/server');

const server = new Server();

server.listen();