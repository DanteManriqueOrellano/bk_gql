import { Field, ObjectType, } from 'type-graphql';

@ObjectType()
export class User {
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