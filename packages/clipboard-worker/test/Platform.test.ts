import { test, expect } from '@jest/globals'
import { platform } from '../src/parts/Platform/Platform.ts'

test('platform should be 0', () => {
  expect(platform).toBe(0)
})
