import { test, expect, jest, beforeEach } from '@jest/globals'

const mockInvoke = jest.fn() as jest.MockedFunction<any>

jest.unstable_mockModule('../src/parts/SharedProcess/SharedProcess.ts', () => {
  return {
    invoke: mockInvoke,
  }
})

const WriteFilesNative = await import('../src/parts/WriteFilesNative/WriteFilesNative.ts')

beforeEach(() => {
  jest.resetAllMocks()
})

test.skip('writeNativeFiles should throw error for web platform', async () => {
  await expect(WriteFilesNative.writeNativeFiles('text/plain', ['file1.txt'])).rejects.toThrow('not supported')
})

test.skip('writeNativeFiles should throw VError for other errors', async () => {
  const error = new Error('Some error')
  mockInvoke.mockRejectedValue(error)

  await expect(WriteFilesNative.writeNativeFiles('text/plain', ['file1.txt'])).rejects.toThrow('Failed to write files to native clipboard')
})
