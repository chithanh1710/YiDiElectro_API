import { UseMutateFunction } from "@tanstack/react-query";
import { propsSignIn } from "./propsSignIn";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type checkUser = UseMutateFunction<any, Error, propsSignIn, unknown>;
