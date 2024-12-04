declare module 'json-server' {
  import { RequestHandler, Router } from 'express'

  export function create(): Router
  export function router(source: string | object): Router
  export function defaults(options?: object): RequestHandler[]
}
