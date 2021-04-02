import { buildSchema } from "type-graphql";
import { clasesResolver } from "../resolvers/indexResolvers";



export const schemas:Promise<any> =  buildSchema(
    {
        resolvers: clasesResolver,
        validate:false,
        
    })
