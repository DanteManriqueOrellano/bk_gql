import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../types/myContex";

export const isAuth:MiddlewareFn<MyContext> = async ({context},next)=>{
    if(!context.req.session!.userId){
        throw new Error("nu autenticado");
        
    }
    return next();

} ;