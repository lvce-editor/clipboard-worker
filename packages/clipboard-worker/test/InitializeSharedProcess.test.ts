import { test, expect } from '@jest/globals'
import { initializeSharedProcess } from '../src/parts/InitializeSharedProcess/InitializeSharedProcess.ts'

test('initializeSharedProcess should be a function', () => {
  expect(typeof initializeSharedProcess).toBe('function')
})

test.skip('initializeSharedProcess should return a promise that resolves to void', async () => {
  const result = await initializeSharedProcess(0)
  expect(result).toBeUndefined()
})
