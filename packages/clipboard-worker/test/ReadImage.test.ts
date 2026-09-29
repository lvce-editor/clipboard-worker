import { test, expect, jest, beforeEach } from '@jest/globals'

const mockInvoke = jest.fn() as jest.MockedFunction<any>

jest.unstable_mockModule('../src/parts/RendererProcess/RendererProcess.ts', () => ({
  invoke: mockInvoke,
}))

const ReadImage = await import('../src/parts/ReadImage/ReadImage.ts')
const MemoryClipBoardState = await import('../src/parts/MemoryClipBoardState/MemoryClipBoardState.ts')

beforeEach(() => {
  jest.resetAllMocks()
  MemoryClipBoardState.set(false)
  MemoryClipBoardState.writeImage(undefined)
})

test('readImage reads the memory clipboard when enabled', async () => {
  const image = new Blob(['image'], { type: 'image/png' })
  MemoryClipBoardState.set(true)
  MemoryClipBoardState.writeImage(image)

  await expect(ReadImage.readImage()).resolves.toBe(image)
  expect(mockInvoke).not.toHaveBeenCalled()
})

test('readImage reads the renderer-process clipboard when memory clipboard is disabled', async () => {
  const image = new Blob(['image'], { type: 'image/png' })
  mockInvoke.mockResolvedValue(image)

  await expect(ReadImage.readImage()).resolves.toBe(image)
  expect(mockInvoke).toHaveBeenCalledWith('ClipBoard.readImage')
})
