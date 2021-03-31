import { AbsResolverClass} from 'gql_din_mod'
import { Query } from 'type-graphql'

export class pingWithGqldyn extends AbsResolverClass {
    @Query(()=>String)
    pingWithGqlDyn():string{
        return "pong con gql"
    }

}
