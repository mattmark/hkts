import * as tape from "tape"
import { Pipe } from "../src/hkts"

tape("Sanity", function(t: tape.Test) {
  // Arrange
  const double = value => value * 2
  const increment = value => value + 1
  const decrement = value => value - 1
  const curried = Pipe.pipe(
    increment,
    increment,
    double,
    decrement
  )
  const expected = 11

  // Act
  const result = curried(4)
  // Asssert
  t.equals(result, expected, "should transform to expected value")
  t.end()
})
