import { Specification } from "@/general/contracts/specification";

export class ProductCodeSpecification implements Specification<string> {
    public isSatisfiedBy(candidate: string): boolean {
        const firstTwoChars = (Number(candidate.substring(0, 2)) as unknown) as number

        return !Number.isNaN(candidate) 
            && candidate.length === 6 
            && firstTwoChars >= 24 // 24 = year 2024
    }
}