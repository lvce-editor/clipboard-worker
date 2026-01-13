import { test, expect, jest, beforeEach } from '@jest/globals'

const mockCreateClipBoardProcessRpc = jest.fn() as jest.MockedFunction<any>
const mockSet = jest.fn() as jest.MockedFunction<any>

jest.unstable_mockModule('../src/parts/CreateClipBoardProcessRpc/CreateClipBoardProcessRpc.ts', () => ({
  createClipBoardProcessRpc: mockCreateClipBoardProcessRpc,
}))

jest.unstable_mockModule('../src/parts/ClipBoardProcess/ClipBoardProcess.ts', () => ({
  set: mockSet,
}))

jest.unstable_mockModule('../src/parts/PlatformType/PlatformType.ts', () => ({
  Electron: 1,
  Remote: 2,
  Web: 0,
}))

const InitializeSharedProcess = await import('../src/parts/InitializeSharedProcess/InitializeSharedProcess.ts')
const PlatformType = await import('../src/parts/PlatformType/PlatformType.ts')

beforeEach(() => {
  jest.resetAllMocks()
})

test('should return early for Web platform', async () => {
  await InitializeSharedProcess.initializeSharedProcess(PlatformType.Web)

  expect(mockCreateClipBoardProcessRpc).not.toHaveBeenCalled()
  expect(mockSet).not.toHaveBeenCalled()
})

test('should initialize clipboard process for Electron platform', async () => {
  const mockRpc = {}
  mockCreateClipBoardProcessRpc.mockResolvedValue(mockRpc)

  await InitializeSharedProcess.initializeSharedProcess(PlatformType.Electron)

  expect(mockCreateClipBoardProcessRpc).toHaveBeenCalledWith(PlatformType.Electron)
  expect(mockSet).toHaveBeenCalledWith(mockRpc)
})

test('should initialize clipboard process for Remote platform', async () => {
  const mockRpc = {}
  mockCreateClipBoardProcessRpc.mockResolvedValue(mockRpc)

  await InitializeSharedProcess.initializeSharedProcess(PlatformType.Remote)

  expect(mockCreateClipBoardProcessRpc).toHaveBeenCalledWith(PlatformType.Remote)
  expect(mockSet).toHaveBeenCalledWith(mockRpc)
})
