import { test, expect, jest, beforeEach } from '@jest/globals'

const mockInvoke = jest.fn() as jest.MockedFunction<any>

jest.unstable_mockModule('../src/parts/RendererProcess/RendererProcess.ts', () => {
  return {
    invoke: mockInvoke,
  }
})

const WriteImage = await import('../src/parts/WriteImage/WriteImage.ts')
const MemoryClipBoardState = await import('../src/parts/MemoryClipBoardState/MemoryClipBoardState.ts')

beforeEach(() => {
  jest.resetAllMocks()
  MemoryClipBoardState.set(false)
  MemoryClipBoardState.writeImage(undefined)
})

test('writeImage should write image to memory clipboard when enabled', async () => {
  const testBlob = new Blob(['test'], { type: 'image/png' })
  MemoryClipBoardState.set(true)

  await WriteImage.writeImage(testBlob)

  expect(MemoryClipBoardState.readImage()).toBe(testBlob)
  expect(mockInvoke).not.toHaveBeenCalled()
})

test('writeImage should write image to clipboard successfully', async () => {
  const testBlob = new Blob(['test'], { type: 'image/png' })
  mockInvoke.mockResolvedValue(undefined)

  await WriteImage.writeImage(testBlob)
  expect(mockInvoke).toHaveBeenCalledWith('ClipBoard.writeImage', testBlob)
})

test('writeImage should throw VError for other errors', async () => {
  const testBlob = new Blob(['test'], { type: 'image/png' })
  const error = new Error('Some error')
  mockInvoke.mockRejectedValue(error)

  await expect(WriteImage.writeImage(testBlob)).rejects.toThrow('Failed to write image to clipboard')
})
