import sequelizeConnector from "."
async function dbConnector(
    fastify:any,
    options:any,
    
    ){
    try{    
        await sequelizeConnector.authenticate()
        console.log(`Database connected`)
        fastify.decorate('db',{sequelizeConnector})


    }catch(e){
        console.log('error:',e)
    }

}
export default dbConnector;