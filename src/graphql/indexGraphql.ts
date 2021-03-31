import { ApolloServer } from "apollo-server-express";
import { schemas } from "./schemas/indexSchema";
import {} from 'type-graphql';
import cors from 'cors';

//let redisClient = redis.createClient()

import {app} from '../index'

export async function prepararServidor(){
  
    const server = new ApolloServer({
      
      playground: true,
      introspection: true,
      schema: await schemas,
      context : ({req}:any)=> ({req})   
      
  });

  app.use(cors({
      credentials : true,
      origin : "http://localhost:3000"
  }))
 
      server.applyMiddleware({app,path:'/joder',cors:true})
  }