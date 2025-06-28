import * as MemoryClipBoardState from '../MemoryClipBoardState/MemoryClipBoardState.ts'

export const enableMemoryClipBoard = (): void => {
  MemoryClipBoardState.set(true)
}

export const disableMemoryClipBoard = (): void => {
  MemoryClipBoardState.set(false)
}
