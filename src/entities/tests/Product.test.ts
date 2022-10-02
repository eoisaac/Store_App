import { expect, test } from "vitest"
import { v4 as uuidv4 } from 'uuid';
import { Product } from "../Product"

test('create product', () => {
  const randomId = uuidv4().toString()

  const product = new Product({ id: randomId, name: "productA", price: 50, amount: 2 })

  expect(product).toBeInstanceOf(Product)
  expect(product.id).toEqual(randomId)
})