import { Dialect } from "sequelize"
export interface Idatabase{
    database:string,
    username:string,
    password:string,
    host:string,
    port:string,
    dialect:Dialect
  }
