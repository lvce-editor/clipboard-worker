import { test, expect, jest, beforeEach } from '@jest/globals'

const mockGetPortTuple = jest.fn() as jest.MockedFunction<any>
const mockSendMessagePortToRendererProcess = jest.fn() as jest.MockedFunction<any>
const mockPlainMessagePortRpcParent = {
  create: jest.fn() as jest.MockedFunction<any>,
}

jest.unstable_mockModule('../src/parts/GetPortTuple/GetPortTuple.ts', () => {
  return {
    getPortTuple: mockGetPortTuple,
  }
})

jest.unstable_mockModule('../src/parts/SendMessagePortToRendererProcess/SendMessagePortToRendererProcess.ts', () => {
  return {
    sendMessagePortToRendererProcess: mockSendMessagePortToRendererProcess,
  }
})

jest.unstable_mockModule('@lvce-editor/rpc', () => {
  return {
    PlainMessagePortRpcParent: mockPlainMessagePortRpcParent,
  }
})

const CreateRendererProcessRpc = await import('../src/parts/CreateRendererProcessRpc/CreateRendererProcessRpc.ts')

beforeEach(() => {
  jest.resetAllMocks()
})

test('createRendererProcessRpc should create rpc successfully', async () => {
  const mockPort1 = {} as MessagePort
  const mockPort2 = {} as MessagePort
  const mockRpc = { invoke: jest.fn() }

  mockGetPortTuple.mockReturnValue({ port1: mockPort1, port2: mockPort2 })
  mockSendMessagePortToRendererProcess.mockResolvedValue(undefined)
  mockPlainMessagePortRpcParent.create.mockResolvedValue(mockRpc)

  const result = await CreateRendererProcessRpc.createRendererProcessRpc()

  expect(mockGetPortTuple).toHaveBeenCalled()
  expect(mockSendMessagePortToRendererProcess).toHaveBeenCalledWith(mockPort2)
  expect(mockPlainMessagePortRpcParent.create).toHaveBeenCalledWith({
    commandMap: {},
    messagePort: mockPort1,
  })
  expect(result).toBe(mockRpc)
})

test('createRendererProcessRpc should throw VError on error', async () => {
  const error = new Error('Some error')
  mockGetPortTuple.mockImplementation(() => {
    throw error
  })

  await expect(CreateRendererProcessRpc.createRendererProcessRpc()).rejects.toThrow('Failed to create renderer process rpc')
})
