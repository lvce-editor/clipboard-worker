import { test, describe, expect, beforeEach } from '@jest/globals'
import { disableMemoryClipBoard, enableMemoryClipBoard } from '../src/parts/EnableMemoryClipBoard/EnableMemoryClipBoard.ts'
import * as MemoryClipBoardState from '../src/parts/MemoryClipBoardState/MemoryClipBoardState.ts'

describe('EnableMemoryClipBoard', () => {
  beforeEach(() => {
    MemoryClipBoardState.set(false)
  })

  test('should enable memory clipboard', () => {
    enableMemoryClipBoard()
    expect(MemoryClipBoardState.get()).toBe(true)
  })

  test('should disable memory clipboard', () => {
    MemoryClipBoardState.set(true)
    disableMemoryClipBoard()
    expect(MemoryClipBoardState.get()).toBe(false)
  })
})
