import { HKT } from "../HKT"
import { Applicative } from "../Applicative"

export type Identity<A> = HKT<"Identity", A>

/**
 *
 *
 */
function inj<A>(a: A): Identity<A> {
  return (a as any) as Identity<A>
}

/**
 *
 *
 */
function prj<A>(fa: Identity<A>): A {
  return (fa as any) as A
}

/**
 *
 *
 */
export function id<A>(a: A): A {
  return a
}

/**
 *
 *
 */
export function map<A, B>(f: (a: A) => B, fa: Identity<A>): Identity<B> {
  return inj(f(prj(fa)))
}

/**
 *
 *
 */
export function ap<A, B>(fab: Identity<(a: A) => B>, fa: Identity<A>): Identity<B> {
  return map(prj(fab), fa)
}

/**
 *
 *
 */
export function of<A>(a: A): Identity<A> {
  return inj(a)
}

/**
 *
 *
 */
export function chain<A, B>(f: (a: A) => Identity<B>, fa: Identity<A>): Identity<B> {
  return f(prj(fa))
}

/**
 *
 *
 */
export function reduce<A, B>(f: (b: B, a: A) => B, b: B, fa: Identity<A>): B {
  return f(b, prj(fa))
}

/**
 *
 *
 */
export function alt<A>(fx: Identity<A>): Identity<A> {
  return fx
}

/**
 *
 *
 */
export function traverse<F, A, B>(
  applicative: Applicative<F>,
  f: (a: A) => HKT<F, B>,
  ta: Identity<A>
): HKT<F, Identity<B>> {
  return applicative.map<B, Identity<B>>(of, f(prj(ta)))
}

/**
 *
 *
 */
export function extend<A, B>(f: (ea: Identity<A>) => B, ea: Identity<A>): Identity<B> {
  return of(f(ea))
}
