/**
 *
 *
 */
export function pipe(...fns: Array<any>) {
  return (result: any) => fns.reduce((acc, fn) => fn(acc), result)
}
