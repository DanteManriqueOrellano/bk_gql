import { ClassType, NonEmptyArray } from "type-graphql";
import { pingResolver } from "./pingResolver";
import { ticResolver } from "./ticResolver";

export const clasesResolver:NonEmptyArray<ClassType> = [
    pingResolver,
    ticResolver
]
