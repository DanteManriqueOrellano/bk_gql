import { Arg, Mutation, Resolver } from "type-graphql";
import { User } from "../userInput/userInput";
//import bcrypt from "bcrypt";
import { getRepository } from "fireorm";

@Resolver()
export class RegisterUserResolver{
  @Mutation(() => User)
  async register(
      @Arg("user",()=>User) user:User, 
    
    ): Promise<User> {
     // const hashedPassword = await bcrypt.hash(user.password, 12);
      const userRepository = getRepository(User);
      const newUser =  await userRepository.create(user);
      return newUser   
    }
}
