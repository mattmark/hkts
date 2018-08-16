import { pipe } from "../Pipe"

/**
 *
 *
 */
export function compose(...fns: Array<any>) {
  return pipe(...fns.reverse())
}
