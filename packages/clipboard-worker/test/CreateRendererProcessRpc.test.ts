import { beforeEach, expect, jest, test } from '@jest/globals'

const mockCreate = jest.fn() as jest.MockedFunction<any>
const mockSendMessagePortToRendererProcess = jest.fn() as jest.MockedFunction<any>

jest.unstable_mockModule('@lvce-editor/rpc', () => ({
  TransferMessagePortRpcParent: {
    create: mockCreate,
  },
}))

jest.unstable_mockModule('../src/parts/SendMessagePortToRendererProcess/SendMessagePortToRendererProcess.ts', () => ({
  sendMessagePortToRendererProcess: mockSendMessagePortToRendererProcess,
}))

const CreateRendererProcessRpc = await import('../src/parts/CreateRendererProcessRpc/CreateRendererProcessRpc.ts')

beforeEach(() => {
  jest.resetAllMocks()
})

test('uses the clipboard worker renderer process port sender', async () => {
  const mockRpc = {}
  mockCreate.mockResolvedValue(mockRpc)

  const rpc = await CreateRendererProcessRpc.createRendererProcessRpc()

  expect(rpc).toBe(mockRpc)
  expect(mockCreate).toHaveBeenCalledWith({
    commandMap: {},
    send: mockSendMessagePortToRendererProcess,
  })
})
