import { test, expect, jest, beforeEach } from '@jest/globals'

const mockInvoke = jest.fn() as jest.MockedFunction<any>

jest.unstable_mockModule('../src/parts/RendererProcess/RendererProcess.ts', () => ({
  invoke: mockInvoke,
}))

const WriteBlob = await import('../src/parts/WriteBlob/WriteBlob.ts')

beforeEach(() => {
  jest.resetAllMocks()
})

test('should write blob successfully', async () => {
  const mockBlob = new Blob(['test'], { type: 'text/plain' })
  mockInvoke.mockResolvedValue(undefined)

  await WriteBlob.writeBlob(mockBlob)

  expect(mockInvoke).toHaveBeenCalledWith('ClipBoard.writeImage', mockBlob)
})

test('should throw VError when write blob fails', async () => {
  const mockBlob = new Blob(['test'], { type: 'text/plain' })
  const error = new Error('Write failed')
  mockInvoke.mockRejectedValue(error)

  await expect(WriteBlob.writeBlob(mockBlob)).rejects.toThrow('Failed to write blob to clipboard')
  expect(mockInvoke).toHaveBeenCalledWith('ClipBoard.writeImage', mockBlob)
})
