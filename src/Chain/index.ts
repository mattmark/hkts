import { Apply } from "../Apply"
import { HKT } from "../HKT"

/**
 *
 *
 */
export interface Chain<F> extends Apply<F> {
  chain<A, B>(f: (a: A) => HKT<F, B>, fa: HKT<F, A>): HKT<F, B>
}
