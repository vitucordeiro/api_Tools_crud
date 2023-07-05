 
 
import { Itools } from "./types.tool";
import sequelizeConnector from "../db/connection";

import { initializeModels } from "../db/model";
const models = initializeModels(sequelizeConnector)

export const query_getTool = async (data:Number): Promise<any>=>{
    try{
        var tool = Number(data)
        const getTool = await models.Tool.findByPk(tool)
        return getTool
    }catch(error){
        return error 
    }
}

export const query_getTools = async (): Promise<object>=>{
    try{
        const data =  await models.Tool.findAll({})
        return data
    }catch(error){
        return {error}
    }
    
}
export const query_setCreateTool = async (data:Itools): Promise<any>=>{
    
    try{
        return await models.Tool.create({
            title:data.title,
            link:data.link,
            description:data.description,
            tags:data.tags
        })
    }catch(error){
        return error
    }
}

export const query_setDeleteTool = async (data:Number): Promise<any>=>{
    try{
        return await models.Tool.destroy({where:{id:data}}) 
    }catch(error){
        return error
    }
    
}
