import { test, expect } from '@jest/globals'
import { isClipboardUnsupportedError } from '../src/parts/IsClipboardUnsupportedError/IsClipboardUnsupportedError.ts'

test('isClipboardUnsupportedError - true', () => {
  const error = new Error('navigator.clipboard.readText is not a function')
  expect(isClipboardUnsupportedError(error)).toBe(true)
})

test('isClipboardUnsupportedError - false', () => {
  const error = new Error('Some other error')
  expect(isClipboardUnsupportedError(error)).toBe(false)
})
