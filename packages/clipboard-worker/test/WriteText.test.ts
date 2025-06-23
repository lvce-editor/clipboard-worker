import { test, expect, jest, beforeEach } from '@jest/globals'

const mockInvoke = jest.fn() as jest.MockedFunction<any>

jest.unstable_mockModule('../src/parts/RendererProcess/RendererProcess.ts', () => {
  return {
    invoke: mockInvoke,
  }
})

const WriteText = await import('../src/parts/WriteText/WriteText.ts')

beforeEach(() => {
  jest.resetAllMocks()
})

test('writeText should write text to clipboard successfully', async () => {
  const testText = 'test clipboard text'
  mockInvoke.mockResolvedValue(undefined)

  await WriteText.writeText(testText)
  expect(mockInvoke).toHaveBeenCalledWith('ClipBoard.writeText', testText)
})

test('writeText should throw VError for other errors', async () => {
  const testText = 'test clipboard text'
  const error = new Error('Some error')
  mockInvoke.mockRejectedValue(error)

  await expect(WriteText.writeText(testText)).rejects.toThrow('Failed to write text to clipboard')
})
