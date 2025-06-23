import { test, expect, jest, beforeEach } from '@jest/globals'

const mockInvoke = jest.fn() as jest.MockedFunction<any>

jest.unstable_mockModule('../src/parts/RendererProcess/RendererProcess.ts', () => {
  return {
    invoke: mockInvoke,
  }
})

const ReadText = await import('../src/parts/ReadText/ReadText.ts')

beforeEach(() => {
  jest.resetAllMocks()
})

test('readText should return clipboard text successfully', async () => {
  const mockText = 'test clipboard text'
  mockInvoke.mockResolvedValue(mockText)

  const result = await ReadText.readText()
  expect(result).toBe(mockText)
  expect(mockInvoke).toHaveBeenCalledWith('ClipBoard.readText')
})

test('readText should throw VError for permission denied error', async () => {
  const error = new Error('Permission denied')
  error.name = 'NotAllowedError'
  mockInvoke.mockRejectedValue(error)

  await expect(ReadText.readText()).rejects.toThrow('NotAllowedError: Permission denied')
})

test('readText should throw VError for clipboard unsupported error', async () => {
  const error = new Error('Clipboard API not supported')
  error.name = 'NotSupportedError'
  mockInvoke.mockRejectedValue(error)

  await expect(ReadText.readText()).rejects.toThrow('NotSupportedError: Clipboard API not supported')
})

test('readText should throw VError for other errors', async () => {
  const error = new Error('Some other error')
  mockInvoke.mockRejectedValue(error)

  await expect(ReadText.readText()).rejects.toThrow('Some other error')
})
