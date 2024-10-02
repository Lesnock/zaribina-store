import { it, expect } from "vitest";
import { ProductCodeSpecification } from "./product-code-specification";

it('should return true on valid product code', () => {
    const specification = new ProductCodeSpecification()
    expect(specification.isSatisfiedBy('240001')).toBeTruthy()
})

it('should return false on invalid product code', () => {
    const specification = new ProductCodeSpecification()
    expect(specification.isSatisfiedBy('09388301923123')).toBeFalsy()
})