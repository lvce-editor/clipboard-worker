import { test, expect } from '@jest/globals'
import { RendererWorker } from '../src/parts/RpcId/RpcId.ts'

test('RendererWorker should be 1', () => {
  expect(RendererWorker).toBe(1)
})
