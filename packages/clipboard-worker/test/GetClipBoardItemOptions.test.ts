import { test, expect } from '@jest/globals'
import { getClipBoardItemOptions } from '../src/parts/GetClipBoardItemOptions/GetClipBoardItemOptions.ts'

test('should create clipboard item options with resources', () => {
  const resources = ['/path/to/file1.txt', '/path/to/file2.txt']
  const result = getClipBoardItemOptions(resources)

  expect(result).toHaveLength(1)
  const keys = Object.keys(result[0])
  expect(keys[0]).toBe('web application/vnd.lvce.resources')
  expect(result[0][keys[0]]).toBeInstanceOf(Blob)
})

test('should handle empty resources array', () => {
  const resources: string[] = []
  const result = getClipBoardItemOptions(resources)

  expect(result).toHaveLength(1)
  const keys = Object.keys(result[0])
  expect(keys[0]).toBe('web application/vnd.lvce.resources')
  expect(result[0][keys[0]]).toBeInstanceOf(Blob)
})

test('should handle single resource', () => {
  const resources = ['/path/to/single.txt']
  const result = getClipBoardItemOptions(resources)

  expect(result).toHaveLength(1)
  const keys = Object.keys(result[0])
  expect(keys[0]).toBe('web application/vnd.lvce.resources')
  expect(result[0][keys[0]]).toBeInstanceOf(Blob)
})
