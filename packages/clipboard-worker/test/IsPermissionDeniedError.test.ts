import { test, expect } from '@jest/globals'
import { isPermissionDeniedError } from '../src/parts/IsPermissionDeniedError/IsPermissionDeniedError.ts'

test('isPermissionDeniedError - true', () => {
  const error = new Error('Read permission denied.')
  expect(isPermissionDeniedError(error)).toBe(true)
})

test('isPermissionDeniedError - false', () => {
  const error = new Error('Some other error')
  expect(isPermissionDeniedError(error)).toBe(false)
})
