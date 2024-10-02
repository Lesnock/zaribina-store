interface Input {
    name: string
    id?: number
}

export class ProductGroup {
    private constructor (
        public name: string,
        public id: number|null = null,
    ) {}

    static create ({ name, id }: Input): ProductGroup {
        return new ProductGroup(name, id)
    }

    public changeName (name: string): this {
        this.name = name
        return this
    }
}