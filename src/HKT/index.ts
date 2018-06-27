export type HKT<F, A> = { type: "HKT"; F: F; A: A }

export type HKT2<F, A, B> = HKT<HKT<F, A>, B>
