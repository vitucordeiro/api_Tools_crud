
import { Sequelize, Dialect} from "sequelize";
import { Idatabase } from "./types.config";
import * as dotenv from 'dotenv';

dotenv.config()

const dbConfig: Idatabase = {
  database: process.env.DATABASE || '',
  username: process.env.NAME || '',
  password: process.env.PASSWORD || '',
  host: process.env.HOST || '',
  port: process.env.PORT || '',
  dialect: process.env.DIALECT as Dialect|| '',
};

const sequelizeConnector = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: parseInt(dbConfig.port),
    dialect: dbConfig.dialect,
  })


export default sequelizeConnector;
