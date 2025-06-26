import { test, expect } from '@jest/globals'
import { Web } from '../src/parts/PlatformType/PlatformType.ts'

test('Web should be 0', () => {
  expect(Web).toBe(1)
})
