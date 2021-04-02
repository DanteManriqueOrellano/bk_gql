import { AuthChecker, buildSchema } from "type-graphql";
//import { myAuthChecker } from "../resolvers/authorization/auth-checker";
import { Context } from "../resolvers/authorization/context.interface";
import { clasesResolver } from "../resolvers/indexResolvers";

export const authChecker: AuthChecker<Context> = ({ context: { user } }, roles) => {
    if (roles.length === 0) {
      // if `@Authorized()`, check only if user exists
      return user !== undefined;
    }
    // there are some roles defined now
  
    if (!user) {
      // and if no user, restrict access
      return false;
    }
    if (user.roles.some(role => roles.includes(role))) {
      // grant access if the roles overlap
      return true;
    }
  
    // no roles matched, restrict access
    return false;
  };


export const schemas:Promise<any> =  buildSchema(
    {
        resolvers: clasesResolver,
        validate:false,
        /*authChecker : ({context:{req}})=>{
            return  !!req.session.userId;
        }*/
        authChecker      
    })
