import { test, expect, jest, beforeEach } from '@jest/globals'

const mockInitializeRendererProcess = jest.fn() as jest.MockedFunction<any>

jest.unstable_mockModule('../src/parts/InitializeRendererProcess/InitializeRendererProcess.ts', () => {
  return {
    initializeRendererProcess: mockInitializeRendererProcess,
  }
})

const Initialize = await import('../src/parts/Initialize/Initialize.ts')

beforeEach(() => {
  jest.resetAllMocks()
})

test('initialize should call both initialization functions', async () => {
  await Initialize.initialize(0)

  expect(mockInitializeRendererProcess).toHaveBeenCalled()
})
