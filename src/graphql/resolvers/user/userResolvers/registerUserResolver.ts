import { Args, ArgsType, Field, InputType, Mutation, ObjectType, Resolver } from "type-graphql";
//import { UserInput } from "../userInput/userInput";
import bcrypt from "bcrypt";
import { Collection, getRepository } from "fireorm";
//import { User } from "../userEntity/userEntity";
//import { isAuth } from "../../../middleware/isAuth";

@ArgsType()
@ObjectType()
@InputType()
@Collection()
export class MyUser {
  @Field()
  id:string;
  @Field()
  firstName:string; 
  @Field()
  email:string;
  @Field()
  password : string; 
  @Field(_type => [String])
  roles: string[];
  
}
@Resolver()
export class RegisterUserResolver{
  
  //@UseMiddleware(isAuth)
  @Mutation(() => MyUser)
  async register(
      
      @Args() user:MyUser ,
       
    ): Promise<MyUser> {
      const hashedPassword = await bcrypt.hash(user.password, 12);
   
      const userRepository = getRepository(MyUser);
      const newUser =  await userRepository.create({
        email:user.email,
        firstName:user.firstName,
        password:hashedPassword,
        roles:user.roles
        
      });
      return newUser   
    }
}