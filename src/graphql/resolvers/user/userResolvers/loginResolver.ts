import { Resolver, Mutation, Arg, Ctx } from "type-graphql";
import bcrypt from "bcrypt";
import { getBaseRepository} from 'fireorm'
import { MyContext } from "../../../types/myContex";
import { UserInput } from "../userInput/userInput";
import { User } from "../userEntity/userEntity";


@Resolver()
export class LoginResolver {
  @Mutation(()=>User)
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Ctx() ctx: MyContext
  ): Promise<UserInput | null> {
    const userCollections = getBaseRepository(UserInput)
    const documentUser = await userCollections.whereEqualTo(a=>a.email,email).findOne()
    
    if (!documentUser) {
      return null;
    }

    const valid = await bcrypt.compare(password, documentUser.password);
    if (!valid) {
      return null;
    }
    //console.log(ctx.req.session!.sssss)//= documentUser.id 
    //ctx.req.session!.id
    //console.log(ctx.req.session!.id)

    return documentUser;
  }
}