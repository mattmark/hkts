import * as tape from "tape"
import { Pipe } from "../src/hkts"

tape("Sanity", function(t: tape.Test) {
  t.plan(2)
  t.ok(Pipe)
  t.pass("should pass")
})
