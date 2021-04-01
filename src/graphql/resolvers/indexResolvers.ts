import { ClassType, NonEmptyArray } from "type-graphql";

import { pingResolver } from "./pingResolver";
import { ticResolver } from "./ticResolver";
import { MeResolver } from "./user/me";
import { LoginResolver } from "./user/userResolvers/loginResolver";
import { LogoutResolver } from "./user/userResolvers/logoutResolver";
import { RegisterUserResolver } from "./user/userResolvers/registerUserResolver";

export const clasesResolver:NonEmptyArray<ClassType> = [
    pingResolver,
    ticResolver,
    RegisterUserResolver,
    LoginResolver,
    MeResolver,
    LogoutResolver,
]
