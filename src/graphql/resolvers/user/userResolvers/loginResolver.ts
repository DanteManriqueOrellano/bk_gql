import { Resolver, Mutation, Arg, Ctx } from "type-graphql";
import bcrypt from "bcrypt";
import { getBaseRepository} from 'fireorm'
import { UserInput } from "../userInput/userInput";
import { User } from "../userEntity/userEntity";
import { MyContext } from "../../../types/myContex";


@Resolver()
export class LoginResolver {
  @Mutation(()=>User)
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Ctx() ctx:MyContext
    
  ): Promise<UserInput | null> {
    const userCollections = getBaseRepository(UserInput)
    const documentUser = await userCollections.whereEqualTo(a=>a.email,email).findOne()
    console.log(documentUser)
    if (!documentUser) {
      return null;
    }

    const valid = await bcrypt.compare(password, documentUser.password);
    if (!valid) {
      return null;
    }
    ctx.req.session!.userId = documentUser.id
    

    return documentUser;
  }
}