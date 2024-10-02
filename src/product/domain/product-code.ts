import { ValidationError } from "@/general/errors/ValidationError";
import { Specification } from "@/general/contracts/specification";

export class ProductCode {
    private constructor (
        private value: string,
    ) {}

    static build(value: string, productCodeSpecification: Specification<string>): ProductCode {
        if (!productCodeSpecification.isSatisfiedBy(value)) {
            throw new ValidationError("Invalid product code")
        }
        return new ProductCode(value)
    }

    public get(): string {
        return this.value
    }
}