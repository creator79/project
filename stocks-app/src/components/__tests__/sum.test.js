import {sum} from "../sum"

// eslint-disable-next-line no-undef
test("check the sum of two numbers", () =>{

// eslint-disable-next-line no-undef
expect(sum(2,2)).toBe(4)
expect(sum(2,5)).toBe(7)
expect(sum(1,2)).toBe(3)
expect(sum(2,-2)).toBe(0)
expect(sum(2,8)).toBe(10)
expect(sum(2,2)).toBe(4)

});