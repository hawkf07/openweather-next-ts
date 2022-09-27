// src/server/router/index.ts
import { createRouter } from "./context";
import {byLocationRouter} from './weather/byLocation'
import superjson from "superjson";

import { exampleRouter } from "./example";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("weather.",byLocationRouter)

// export type definition of API
export type AppRouter = typeof appRouter;
