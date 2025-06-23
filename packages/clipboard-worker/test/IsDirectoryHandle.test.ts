import { test, expect } from '@jest/globals'
import { isDirectoryHandle } from '../src/parts/IsDirectoryHandle/IsDirectoryHandle.ts'

test('isDirectoryHandle should return true for directory handle', () => {
  const mockDirectoryHandle = {
    kind: 'directory',
  } as FileSystemDirectoryHandle

  expect(isDirectoryHandle(mockDirectoryHandle)).toBe(true)
})

test('isDirectoryHandle should return false for file handle', () => {
  const mockFileHandle = {
    kind: 'file',
  } as FileSystemFileHandle

  expect(isDirectoryHandle(mockFileHandle)).toBe(false)
})
