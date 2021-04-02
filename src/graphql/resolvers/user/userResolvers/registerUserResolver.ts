import { Arg, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { UserInput } from "../userInput/userInput";
import bcrypt from "bcrypt";
import { getRepository } from "fireorm";
import { User } from "../userEntity/userEntity";
import { isAuth } from "../../../middleware/isAuth";

@Resolver()
export class RegisterUserResolver{
  
  @UseMiddleware(isAuth)
  @Mutation(() => User)
  async register(
      @Arg("user",()=>UserInput) user:UserInput,
       
    
    ): Promise<User> {
      const hashedPassword = await bcrypt.hash(user.password, 12);
   
      const userRepository = getRepository(UserInput);
      const newUser =  await userRepository.create({
        email:user.email,
        firstName:user.firstName,
        password:hashedPassword,
        roles:user.roles
        
      });
      return newUser   
    }
}
