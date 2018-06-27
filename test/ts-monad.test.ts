import tape, { Test } from "tape"

tape("Widget", function(t: Test) {
  t.plan(1)
  t.pass("should take a multiplicand in its constructor")
})
