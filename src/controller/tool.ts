import{FastifyReply, FastifyRequest, RouteHandlerMethod} from 'fastify'
import { query_getTool,query_getTools,query_setCreateTool,query_setDeleteTool } from '../repositories/tool'
import { Itools } from '../repositories/types.tool'
import { json } from 'sequelize'


export const getTool: RouteHandlerMethod = async (request:FastifyRequest, reply:FastifyReply):Promise<any> =>{
    const data:any= request.query
    const id:number = Number(data.id)
    try{
        var tool = await query_getTool(id)
        return reply
            .code(200)
            .header('Content-Type', 'application/json')
            .send({tool})
    }catch(error){
        return error
    }

}

export const getTools: RouteHandlerMethod = async(request:FastifyRequest, reply:FastifyReply):Promise<any> =>{
    try{ 
        var tools = await query_getTools()
        return reply
            .code(200)
            .header('Content-Type', 'application/json')
            .send({tools})

    }catch(error){
        return error
    }
}

export const setCreateTool: RouteHandlerMethod = async(request:FastifyRequest, reply:FastifyReply):Promise<any>=>{
    try{
        const{
            title,
            link,
            description,
            tags
        }:any = request.body

        const data:Itools = {
            title,
            link,
            description,
            tags
        }

        const createdTool = await query_setCreateTool(data)
        return reply
            .code(200)
            .header('Content-Type','application/json')
            .send({createdTool})

    }catch(error){
        return reply.code(400).send({error})
    }
}
export const setDeleteTool: RouteHandlerMethod = async (request:FastifyRequest, reply:FastifyReply): Promise<any>=>{
    const data:any = request.query
    const id:number = Number(data.id)
    try{
        await query_setDeleteTool(id)
        return reply.code(200)
    }catch(error){
        return reply.code(400).send({error})
    }
}