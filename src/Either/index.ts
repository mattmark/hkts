import { HKT2 } from "../HKT"

export type Either<L, R> = HKT2<"Either", L, R>
export type EitherV<L, R> = { type: "Left"; left: L } | { type: "Right"; right: R }

/**
 *
 *
 */
export function inj<L, R>(e: EitherV<L, R>): Either<L, R> {
  return (e as any) as Either<L, R>
}

/**
 *
 *
 */
export function prj<L, R>(fe: Either<L, R>): EitherV<L, R> {
  return (fe as any) as EitherV<L, R>
}

/**
 *
 *
 */
export function left<L, R>(left: L): Either<L, R> {
  return inj<L, R>({ type: "Left", left })
}

/**
 *
 *
 */
export function right<L, R>(right: R): Either<L, R> {
  return inj<L, R>({ type: "Right", right })
}

/**
 * Returns true if this is a Left, false otherwise.
 */
export function isLeft<L, R>(e: Either<L, R>): boolean {
  return prj(e).type === "Left"
}

/**
 * Returns true if this is a Right, false otherwise.
 */
export function isRight<L, R>(e: Either<L, R>): boolean {
  return prj(e).type === "Right"
}

/**
 * A partial function that extracts the value from the `Left` data constructor.
 * Passing a `Right` to `fromLeft` will throw an error at runtime.
 */
export function fromLeft<L, R>(flr: Either<L, R>): L {
  const lr = prj(flr)

  if (lr.type === "Right") {
    throw new Error("fromLeft returned a Right")
  }

  return lr.left
}

/**
 * A partial function that extracts the value from the `right` data constructor.
 * Passing a `Left` to `fromRight` will throw an error at runtime.
 */
export function fromRight<L, R>(flr: Either<L, R>): R {
  const lr = prj(flr)

  if (lr.type === "Left") {
    throw new Error("fromRight returned a Left")
  }

  return lr.right
}

export function map<L, A, B>(f: (a: A) => B, fa: Either<L, A>): Either<L, B> {
  const a = prj(fa)

  if (a.type === "Left") {
    return (a as any) as Either<L, B>
  }

  return right<L, B>(f(a.right))
}
