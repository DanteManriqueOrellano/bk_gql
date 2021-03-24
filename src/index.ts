import 'reflect-metadata'
import * as functions from 'firebase-functions' 
import express from 'express'
import { prepararServidor } from './graphql/indexGraphql'
export const app = express()
prepararServidor()
export const graphql = functions.https.onRequest(app); ;
 
