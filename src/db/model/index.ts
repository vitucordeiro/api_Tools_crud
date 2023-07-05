import { Sequelize } from "sequelize";
import Tool,{initToolModel} from "./tool";

export const initializeModels = (sequelize:Sequelize)=>{
    initToolModel(sequelize);
    return {
        Tool
    }
}