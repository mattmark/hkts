import { Functor } from "../Functor"
import { HKT } from "../HKT"

/**
 *
 *
 */

export interface Apply<F> extends Functor<F> {
  ap<A, B>(fab: HKT<F, (a: A) => B>, fa: HKT<F, A>): HKT<F, B>
}

export function liftA2<F, A, B, C>(
  apply: Apply<F>,
  f: (a: A, b: B) => C
): (fa: HKT<F, A>, fb: HKT<F, B>) => HKT<F, C> {
  const cf = (a: A) => (b: B) => f(a, b)
  return (fa, fb) => apply.ap(apply.map(cf, fa), fb)
}
