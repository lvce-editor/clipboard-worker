import { test, expect } from '@jest/globals'
import { joinLines } from '../src/parts/JoinLines/JoinLines.ts'

test('should join empty array of lines', () => {
  const result = joinLines([])
  expect(result).toBe('')
})

test('should join single line', () => {
  const result = joinLines(['single line'])
  expect(result).toBe('single line')
})

test('should join multiple lines with newlines', () => {
  const lines = ['line1', 'line2', 'line3']
  const result = joinLines(lines)
  expect(result).toBe('line1\nline2\nline3')
})

test('should handle lines with empty strings', () => {
  const lines = ['line1', '', 'line3']
  const result = joinLines(lines)
  expect(result).toBe('line1\n\nline3')
})

test('should handle lines with special characters', () => {
  const lines = ['line with spaces', 'line\twith\ttabs', 'line\nwith\nnewlines']
  const result = joinLines(lines)
  expect(result).toBe('line with spaces\nline\twith\ttabs\nline\nwith\nnewlines')
})
