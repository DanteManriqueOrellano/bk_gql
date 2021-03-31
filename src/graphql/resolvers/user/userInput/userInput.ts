import { Collection } from "fireorm";
import { Field, InputType } from "type-graphql";

@InputType()
@Collection()
export class User {
    @Field()
    id =""
    @Field()
    firstName:string =""
    @Field()
    email:string =""
    @Field()
    password : string =""
}