import 'reflect-metadata'
import * as functions from 'firebase-functions' 
import express from 'express'
import { prepararServidor } from './graphql/indexGraphql'
import { connect } from './orm/config'
export const app = express()
connect()
prepararServidor()

export const graphql = functions.https.onRequest(app); ;
 
