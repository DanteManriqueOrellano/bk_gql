import { Resolver, Query, Ctx } from "type-graphql";
import { MyContext } from "../../types/myContex";
import { User } from "./userEntity/userEntity";
import { getBaseRepository} from 'fireorm'
import { UserInput } from "./userInput/userInput";
@Resolver()
export class MeResolver {
  @Query(() => User, { nullable: true })
  async me(
      
        @Ctx() ctx: MyContext
      
      ): Promise<UserInput | undefined> {
    
        if (!ctx.req.session!.id) {
          return undefined;
        }
        const userCollection = getBaseRepository(UserInput);
        return userCollection.findById(ctx.req.session!.id);

    
  }
}