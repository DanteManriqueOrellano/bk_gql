import { Collection } from "fireorm";
import { Field, InputType } from "type-graphql";


@InputType()
@Collection()
export class UserInput {
    @Field()
    id:string;
    @Field()
    firstName:string; 
    @Field()
    email:string;
    @Field()
    password : string; 
}