import { test, expect } from '@jest/globals'
import { commandMap } from '../src/parts/CommandMap/CommandMap.ts'

test('commandMap should have expected commands', () => {
  expect(commandMap['ClipBoard.initialize']).toBeDefined()
  expect(commandMap['ClipBoard.readNativeFiles']).toBeDefined()
  expect(commandMap['ClipBoard.writeImage']).toBeDefined()
  expect(commandMap['ClipBoard.writeNativeFiles']).toBeDefined()
  expect(commandMap['ClipBoard.writeText']).toBeDefined()
})

test('commandMap commands should be functions', () => {
  expect(typeof commandMap['ClipBoard.initialize']).toBe('function')
  expect(typeof commandMap['ClipBoard.readNativeFiles']).toBe('function')
  expect(typeof commandMap['ClipBoard.writeImage']).toBe('function')
  expect(typeof commandMap['ClipBoard.writeNativeFiles']).toBe('function')
  expect(typeof commandMap['ClipBoard.writeText']).toBe('function')
})
