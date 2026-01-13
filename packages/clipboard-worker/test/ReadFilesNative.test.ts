import { test, expect, jest, beforeEach } from '@jest/globals'

const mockReadFilesFromClipBoardWeb = jest.fn() as jest.MockedFunction<any>

jest.unstable_mockModule('../src/parts/ReadFilesFromClipBoardWeb/ReadFilesFromClipBoardWeb.ts', () => ({
  readFilesFromClipBoardWeb: mockReadFilesFromClipBoardWeb,
}))

const ReadFilesNative = await import('../src/parts/ReadFilesNative/ReadFilesNative.ts')

beforeEach(() => {
  jest.resetAllMocks()
})

test('should read native files successfully', async () => {
  const mockUris = ['/path/to/file1.txt', '/path/to/file2.txt']
  mockReadFilesFromClipBoardWeb.mockResolvedValue(mockUris)

  const result = await ReadFilesNative.readNativeFiles()

  expect(result).toEqual({
    files: mockUris,
    type: 'copy',
  })
  expect(mockReadFilesFromClipBoardWeb).toHaveBeenCalled()
})

test('should throw VError when read native files fails', async () => {
  const error = new Error('Read failed')
  mockReadFilesFromClipBoardWeb.mockRejectedValue(error)

  await expect(ReadFilesNative.readNativeFiles()).rejects.toThrow('Failed to read files from native clipboard')
  expect(mockReadFilesFromClipBoardWeb).toHaveBeenCalled()
})
