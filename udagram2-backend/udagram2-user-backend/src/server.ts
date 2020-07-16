import cors from 'cors';
import express from 'express';
import {sequelize} from './sequelize';
import { networkInterfaces, hostname } from 'os';

import {IndexRouter} from './controllers/v0/index.router';

import bodyParser from 'body-parser';
import {config} from './config/config';
import { V0_USER_MODELS } from './controllers/v0/model.index';

(async () => {
  await sequelize.addModels(V0_USER_MODELS);
  await sequelize.sync();

  const app = express();
  if (! config.user_api_port) {
    console.error("No config.user_api_port set, please set it");
    return;
  }

  app.use(bodyParser.json());

  app.use(cors({
    allowedHeaders: [
      'Origin', 'X-Requested-With',
      'Content-Type', 'Accept',
      'X-Access-Token', 'Authorization',
    ],
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: config.app_url,
  }));

  console.log(`==================`);
  console.log(`Hostname: ${hostname}`);
  console.log(`Interfaces:`);
  console.log(networkInterfaces());
  console.log(`==================`);

  app.use('/api/v0/', IndexRouter);

  // Root URI call
  app.get( '/', async ( req, res ) => {
    res.send( '/api/v0/' );
  } );

  // Health feedback
  app.get("/health", (req, res, next) => {
    res.status(200).send("Ok");
  });

  // Start the Server
  app.listen( config.user_api_port, () => {
    console.log( `server listening to port ${config.user_api_port} for requests coming from ${config.app_url}` );
    console.log( `press CTRL+C to stop server` );
  } );
})();
