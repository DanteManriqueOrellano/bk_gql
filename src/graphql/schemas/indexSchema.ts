import { AuthChecker, buildSchema } from "type-graphql";
import { Context } from "../resolvers/authorization/context.interface";
//import { authChecker } from "../resolvers/authorization/auth-checker";
import { clasesResolver } from "../resolvers/indexResolvers";

const myauthChecker: AuthChecker<Context> = ({ context: { user } }, roles) => {
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
        authChecker:myauthChecker
    })
