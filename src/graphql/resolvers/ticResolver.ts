import { Query, Resolver } from "type-graphql";

@Resolver()
export class ticResolver{
    @Query(()=>String)
    tic():string{
        return "toe"
    }
}