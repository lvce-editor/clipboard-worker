import { test, expect, jest, beforeEach } from '@jest/globals'

const mockInvoke = jest.fn() as jest.MockedFunction<any>

jest.unstable_mockModule('../src/parts/RendererWorker/RendererWorker.ts', () => ({
  invokeAndTransfer: mockInvoke,
}))

const SendMessagePortToClipBoardProcess = await import('../src/parts/SendMessagePortToClipBoardProcess/SendMessagePortToClipBoardProcess.ts')

beforeEach(() => {
  jest.resetAllMocks()
})

test('should send message port to clipboard process', async () => {
  const mockPort = {} as MessagePort
  mockInvoke.mockResolvedValue(undefined)

  await SendMessagePortToClipBoardProcess.sendMessagePortToClipBoardProcess(mockPort)

  expect(mockInvoke).toHaveBeenCalledWith(
    'SendMessagePortToExtensionHostWorker.sendMessagePortToSharedProcess',
    mockPort,
    'HandleMessagePortForClipBoardProcess.handleMessagePortClipBoardProcess',
    3401,
  )
})
