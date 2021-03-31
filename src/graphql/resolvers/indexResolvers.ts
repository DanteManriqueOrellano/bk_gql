import { ClassType, NonEmptyArray } from "type-graphql";

import { pingResolver } from "./pingResolver";
import { ticResolver } from "./ticResolver";
import { RegisterUserResolver } from "./user/userResolvers/registerUserResolver";

export const clasesResolver:NonEmptyArray<ClassType> = [
    pingResolver,
    ticResolver,
    RegisterUserResolver
]
