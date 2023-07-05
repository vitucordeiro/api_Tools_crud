import fastify, { FastifyInstance} from 'fastify';
import routes from './router';

import dbConnector from './db/connection/connect';
const app: FastifyInstance = fastify();

routes(app)
app.register(dbConnector)

const start = async () => {
   
    app.listen({port:3000})
    console.log('API Running at http://localhost:3000');
  
};

start();