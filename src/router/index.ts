import { FastifyInstance, RouteShorthandOptions} from "fastify";

import { getTool, getTools,setCreateTool,setDeleteTool } from "../controller/tool";

const routeOptions:RouteShorthandOptions ={
    schema:{

    }
}

export default function routes(app:FastifyInstance, ){

    app.get("/tools", getTools)

    app.get("/tool", getTool)

    app.post("/tools", setCreateTool)

    app.delete("/tool", setDeleteTool)
   
}