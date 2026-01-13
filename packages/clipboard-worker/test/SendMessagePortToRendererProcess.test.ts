import { test, expect, jest, beforeEach } from '@jest/globals'

const mockInvokeAndTransfer = jest.fn() as jest.MockedFunction<any>

jest.unstable_mockModule('../src/parts/RendererWorker/RendererWorker.ts', () => {
  return {
    invokeAndTransfer: mockInvokeAndTransfer,
  }
})

jest.unstable_mockModule('@lvce-editor/rpc-registry', () => ({
  RpcId: {
    DebugWorker: 55,
  },
}))

const SendMessagePortToRendererProcess = await import('../src/parts/SendMessagePortToRendererProcess/SendMessagePortToRendererProcess.ts')

beforeEach(() => {
  jest.resetAllMocks()
})

test('sendMessagePortToRendererProcess should invoke and transfer port', async () => {
  const mockPort = {} as MessagePort
  mockInvokeAndTransfer.mockResolvedValue(undefined)

  await SendMessagePortToRendererProcess.sendMessagePortToRendererProcess(mockPort)

  expect(mockInvokeAndTransfer).toHaveBeenCalledWith(
    'SendMessagePortToExtensionHostWorker.sendMessagePortToRendererProcess',
    mockPort,
    'HandleMessagePort.handleMessagePort',
    55,
  )
})
