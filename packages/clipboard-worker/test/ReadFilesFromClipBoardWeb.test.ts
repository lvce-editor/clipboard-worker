import { test, expect, jest, beforeEach } from '@jest/globals'

const mockInvoke = jest.fn() as jest.MockedFunction<any>
const mockDeserializeUrls = jest.fn() as jest.MockedFunction<any>

jest.unstable_mockModule('../src/parts/RendererProcess/RendererProcess.ts', () => ({
  invoke: mockInvoke,
}))

jest.unstable_mockModule('../src/parts/DeserializeUrls/DeserializeUrls.ts', () => ({
  deserializeUrls: mockDeserializeUrls,
}))

jest.unstable_mockModule('../src/parts/MemoryClipBoardState/MemoryClipBoardState.ts', () => ({
  get: jest.fn(),
  readFiles: jest.fn(),
}))

const ReadFilesFromClipBoardWeb = await import('../src/parts/ReadFilesFromClipBoardWeb/ReadFilesFromClipBoardWeb.ts')
const MemoryClipBoardState = await import('../src/parts/MemoryClipBoardState/MemoryClipBoardState.ts')

beforeEach(() => {
  jest.resetAllMocks()
})

test('should return files from memory clipboard when enabled', async () => {
  const mockFiles = ['/path/to/file1.txt', '/path/to/file2.txt']
  jest.mocked(MemoryClipBoardState.get).mockReturnValue(true)
  jest.mocked(MemoryClipBoardState.readFiles).mockReturnValue(mockFiles)

  const result = await ReadFilesFromClipBoardWeb.readFilesFromClipBoardWeb()

  expect(result).toBe(mockFiles)
  expect(MemoryClipBoardState.get).toHaveBeenCalled()
  expect(MemoryClipBoardState.readFiles).toHaveBeenCalled()
  expect(mockInvoke).not.toHaveBeenCalled()
})

test('should read files from clipboard when memory clipboard disabled', async () => {
  const mockItems = 'mock clipboard items'
  const mockUrls = ['/path/to/file1.txt', '/path/to/file2.txt']

  jest.mocked(MemoryClipBoardState.get).mockReturnValue(false)
  mockInvoke.mockResolvedValue(mockItems)
  mockDeserializeUrls.mockResolvedValue(mockUrls)

  const result = await ReadFilesFromClipBoardWeb.readFilesFromClipBoardWeb()

  expect(result).toBe(mockUrls)
  expect(MemoryClipBoardState.get).toHaveBeenCalled()
  expect(mockInvoke).toHaveBeenCalledWith('ClipBoard.read', { format: 'web application/vnd.lvce.resources' })
  expect(mockDeserializeUrls).toHaveBeenCalledWith(mockItems)
})
