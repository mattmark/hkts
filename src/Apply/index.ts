import { Functor } from "../Functor"
import { HKT } from "../HKT"

/**
 *
 *
 */

export interface Apply<F> extends Functor<F> {
  ap<A, B>(fab: HKT<F, (a: A) => B>, fa: HKT<F, A>): HKT<F, B>
}
