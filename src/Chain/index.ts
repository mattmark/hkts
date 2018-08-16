import { Either, isLeft, fromLeft, fromRight } from "../Either"
import { Apply } from "../Apply"
import { HKT } from "../HKT"

export interface Chain<F> extends Apply<F> {
  chain<A, B>(f: (a: A) => HKT<F, B>, fa: HKT<F, A>): HKT<F, B>
}

export interface ChainRec<M> extends Chain<M> {
  chainRec<A, B>(f: (a: A) => HKT<M, Either<A, B>>, a: A): B
}

/**
 *
 *
 */
export function tailRec<A, B>(f: (a: A) => Either<A, B>, a: A): B {
  let v = f(a)

  while (isLeft(v)) {
    v = f(fromLeft(v))
  }

  return fromRight(v)
}
