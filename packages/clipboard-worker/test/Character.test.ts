import { test, expect } from '@jest/globals'
import * as Character from '../src/parts/Character/Character.ts'

test('should export all character constants', () => {
  expect(Character.Backslash).toBe('\\')
  expect(Character.Dash).toBe('-')
  expect(Character.Dot).toBe('.')
  expect(Character.EmptyString).toBe('')
  expect(Character.NewLine).toBe('\n')
  expect(Character.OpenAngleBracket).toBe('<')
  expect(Character.Slash).toBe('/')
  expect(Character.Space).toBe(' ')
  expect(Character.Tab).toBe('\t')
  expect(Character.Underline).toBe('_')
  expect(Character.T).toBe('t')
  expect(Character.SemiColon).toBe(';')
})
