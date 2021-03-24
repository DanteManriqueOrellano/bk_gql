import { ApolloServer } from "apollo-server-express";
import { schemas } from "./schemas/indexSchema";
import {app} from '../index'
export async function prepararServidor(){
  
    const server = new ApolloServer({
      
      playground: true,
      introspection: true,
      schema: await schemas   //await buildSchema({resolvers:[HolaResolvers]})
      
  });
      server.applyMiddleware({app,path:'/joder',cors:true})
  }