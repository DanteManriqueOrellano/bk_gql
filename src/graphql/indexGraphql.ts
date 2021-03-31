import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import { schemas } from "./schemas/indexSchema";
import session from "express-session";
import connectRedis from "connect-redis";
import {redis} from '../utils/redis';
import cors from 'cors';

import {app} from '../index';

export async function prepararServidor(){
  
    const server = new ApolloServer({
      
      playground: true,
      introspection: true,
      schema: await schemas,
      context : ({req}:any)=> ({req})   
      
  });
  const RedisStore = connectRedis(session);
  app.use(cors({
      credentials : true,
      origin : "http://localhost:5000"
  }));

  app.use(
    session({
      store: new RedisStore({
        client: redis as any
      }),
      name: "qid",
      secret: "aslkdfjoiq12312",
      resave: true,
      saveUninitialized: true,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365 // 7 years
      }
    })
  );
 
      server.applyMiddleware({app,path:'/joder',cors:true})
  }