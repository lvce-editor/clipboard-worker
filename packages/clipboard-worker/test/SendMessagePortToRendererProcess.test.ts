import { test, expect, jest, beforeEach } from '@jest/globals'

const mockInvokeAndTransfer = jest.fn() as jest.MockedFunction<any>

jest.unstable_mockModule('../src/parts/RendererWorker/RendererWorker.ts', () => {
  return {
    invokeAndTransfer: mockInvokeAndTransfer,
  }
})

const SendMessagePortToRendererProcess = await import('../src/parts/SendMessagePortToRendererProcess/SendMessagePortToRendererProcess.ts')

beforeEach(() => {
  jest.resetAllMocks()
})

test('sendMessagePortToRendererProcess should invoke and transfer port', async () => {
  const mockPort = {} as MessagePort
  mockInvokeAndTransfer.mockResolvedValue(undefined)

  await SendMessagePortToRendererProcess.sendMessagePortToRendererProcess(mockPort)

  expect(mockInvokeAndTransfer).toHaveBeenCalledWith(
    'SendMessagePortToExtensionHostWorker.sendMessagePortToExtensionHostWorker',
    mockPort,
    'HandleMessagePort.handleMessagePort2',
    55,
  )
})
