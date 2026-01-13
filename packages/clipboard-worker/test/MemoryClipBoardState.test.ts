import { test, expect, beforeEach } from '@jest/globals'
import * as MemoryClipBoardState from '../src/parts/MemoryClipBoardState/MemoryClipBoardState.ts'

beforeEach(() => {
  MemoryClipBoardState.set(false)
  MemoryClipBoardState.writeText('')
  MemoryClipBoardState.writeFiles([])
})

test('should set and get enabled state', () => {
  expect(MemoryClipBoardState.get()).toBe(false)
  MemoryClipBoardState.set(true)
  expect(MemoryClipBoardState.get()).toBe(true)
  MemoryClipBoardState.set(false)
  expect(MemoryClipBoardState.get()).toBe(false)
})

test('should write and read text', () => {
  const testText = 'test text content'
  MemoryClipBoardState.writeText(testText)
  expect(MemoryClipBoardState.readText()).toBe(testText)
})

test('should write and read files', () => {
  const testFiles = ['/path/to/file1.txt', '/path/to/file2.txt']
  MemoryClipBoardState.writeFiles(testFiles)
  expect(MemoryClipBoardState.readFiles()).toEqual(testFiles)
})

test('should handle empty text and files', () => {
  expect(MemoryClipBoardState.readText()).toBe('')
  expect(MemoryClipBoardState.readFiles()).toEqual([])
})
