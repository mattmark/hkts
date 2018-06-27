import { Functor } from "../Functor"
import { HKT } from "../HKT"

/**
 *
 *
 */
export interface Pointed<F> extends Functor<F> {
  of<A>(a: A): HKT<F, A>
}
