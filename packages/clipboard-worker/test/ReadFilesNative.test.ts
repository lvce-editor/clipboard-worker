import { test, expect, jest, beforeEach } from '@jest/globals'

const mockInvoke = jest.fn() as jest.MockedFunction<any>

jest.unstable_mockModule('../src/parts/SharedProcess/SharedProcess.ts', () => {
  return {
    invoke: mockInvoke,
  }
})

const ReadFilesNative = await import('../src/parts/ReadFilesNative/ReadFilesNative.ts')

beforeEach(() => {
  jest.resetAllMocks()
})

test('readNativeFiles should throw error for web platform', async () => {
  await expect(ReadFilesNative.readNativeFiles()).rejects.toThrow('not supported')
})

test('readNativeFiles should throw VError for other errors', async () => {
  const error = new Error('Some error')
  mockInvoke.mockRejectedValue(error)

  await expect(ReadFilesNative.readNativeFiles()).rejects.toThrow('Failed to read files from native clipboard')
})
