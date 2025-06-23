import { test, expect, jest, beforeEach } from '@jest/globals'
import { terminate } from '../src/parts/Terminate/Terminate.ts'

beforeEach(() => {
  // Mock globalThis.close
  globalThis.close = jest.fn()
})

test('terminate should be a function', () => {
  expect(typeof terminate).toBe('function')
})

test('terminate should call globalThis.close and return void', () => {
  const result = terminate()
  expect(globalThis.close).toHaveBeenCalled()
  expect(result).toBeUndefined()
})
