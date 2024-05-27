
const { fizzBuzz } = require("../main");


it("checks if number is divisible by 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
});

it("checks if number is divisible by 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
});

it("checks if number is divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
});

it("checks if number is not divisible by 3 or 5", () => {
    expect(fizzBuzz(1)).toBe(1);
});




