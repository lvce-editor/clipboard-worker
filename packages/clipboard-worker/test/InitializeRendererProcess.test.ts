import { test, expect, jest, beforeEach } from '@jest/globals'

const mockCreateRendererProcessRpc = jest.fn() as jest.MockedFunction<any>
const mockSet = jest.fn() as jest.MockedFunction<any>

jest.unstable_mockModule('../src/parts/CreateRendererProcessRpc/CreateRendererProcessRpc.ts', () => {
  return {
    createRendererProcessRpc: mockCreateRendererProcessRpc,
  }
})

jest.unstable_mockModule('../src/parts/RendererProcess/RendererProcess.ts', () => {
  return {
    set: mockSet,
  }
})

const InitializeRendererProcess = await import('../src/parts/InitializeRendererProcess/InitializeRendererProcess.ts')

beforeEach(() => {
  jest.resetAllMocks()
})

test('initializeRendererProcess should create rpc and set it', async () => {
  const mockRpc = { invoke: jest.fn() }
  mockCreateRendererProcessRpc.mockResolvedValue(mockRpc)

  await InitializeRendererProcess.initializeRendererProcess()

  expect(mockCreateRendererProcessRpc).toHaveBeenCalled()
  expect(mockSet).toHaveBeenCalledWith(mockRpc)
})
