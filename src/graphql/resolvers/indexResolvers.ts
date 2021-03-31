import { ClassType, NonEmptyArray } from "type-graphql";

import { pingResolver } from "./pingResolver";
import { ticResolver } from "./ticResolver";
import { LoginResolver } from "./user/userResolvers/loginResolver";
import { RegisterUserResolver } from "./user/userResolvers/registerUserResolver";

export const clasesResolver:NonEmptyArray<ClassType> = [
    pingResolver,
    ticResolver,
    RegisterUserResolver,
    LoginResolver
]
