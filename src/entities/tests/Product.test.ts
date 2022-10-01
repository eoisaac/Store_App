import { expect, test } from "vitest"
import { v4 as uuidv4 } from 'uuid';
import { Product } from "../Product"

test('create product', () => {
  const randomId = uuidv4().toString()

  const product = new Product({ id: randomId, name: "", price: 10 })

  expect(product).toBeInstanceOf(Product)
  expect(product.id).toEqual(randomId)
})