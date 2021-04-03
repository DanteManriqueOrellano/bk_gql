import { Authorized, Query, Resolver } from "type-graphql";


@Resolver()
export class pingResolver{
    @Authorized()
    @Query(()=>String)
    ping():string{
        return "pong"
    }
}