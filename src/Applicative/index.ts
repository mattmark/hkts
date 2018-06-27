import { Pointed } from "../Pointed"
import { Apply } from "../Apply"

/**
 *
 *
 */
export interface Applicative<F> extends Apply<F>, Pointed<F> {}
