import { it, expect, vi } from "vitest";
import { CreateProductUsecase } from "./create-product-usecase";
import { ProductRepositoryInMemory } from "../../../product/repositories/product-repository-in-memory";
import { ProductBuilder } from "../../../product/testing/builders/product-builder";
import { EventBusNodeEmitter } from "src/general/events/event-bus-node-emitter";

it('should create product', async () => {
    const repository = new ProductRepositoryInMemory()
    const eventbus = { emit: vi.fn(), on: vi.fn() }
    const usecase = new CreateProductUsecase(repository, eventbus)
    await usecase.execute(ProductBuilder.aProduct().withCode('240001').buildAsDto())
    expect(repository.findByCode('240001')).toBeTruthy()
    expect(eventbus.emit).toHaveBeenCalled()
})

it('should not create product with invalid code', async () => {
    const repository = new ProductRepositoryInMemory()
    const usecase = new CreateProductUsecase(repository, new EventBusNodeEmitter)
    expect(usecase.execute(ProductBuilder.aProduct().withInvalidCode().buildAsDto())).rejects.toThrowError()
})

it('should not create product with invalid price', async () => {
    const repository = new ProductRepositoryInMemory()
    const usecase = new CreateProductUsecase(repository, new EventBusNodeEmitter)
    expect(usecase.execute(ProductBuilder.aProduct().withInvalidPrice().buildAsDto())).rejects.toThrowError()
})