import { test, expect, jest, beforeEach } from '@jest/globals'

const mockCopyFilesToClipBoardWeb = jest.fn() as jest.MockedFunction<any>

jest.unstable_mockModule('../src/parts/CopyFilesToClipBoardWeb/CopyFilesToClipBoardWeb.ts', () => ({
  copyFilesToClipBoardWeb: mockCopyFilesToClipBoardWeb,
}))

const WriteFilesNative = await import('../src/parts/WriteFilesNative/WriteFilesNative.ts')

beforeEach(() => {
  jest.resetAllMocks()
})

test('should write native files successfully', async () => {
  const files = ['/path/to/file1.txt', '/path/to/file2.txt']
  const type = 'copy'
  mockCopyFilesToClipBoardWeb.mockResolvedValue(undefined)

  await WriteFilesNative.writeNativeFiles(type, files)

  expect(mockCopyFilesToClipBoardWeb).toHaveBeenCalledWith(files)
})

test('should throw VError when write native files fails', async () => {
  const files = ['/path/to/file1.txt', '/path/to/file2.txt']
  const type = 'copy'
  const error = new Error('Write failed')
  mockCopyFilesToClipBoardWeb.mockRejectedValue(error)

  await expect(WriteFilesNative.writeNativeFiles(type, files)).rejects.toThrow('Failed to write files clipboard')
  expect(mockCopyFilesToClipBoardWeb).toHaveBeenCalledWith(files)
})
