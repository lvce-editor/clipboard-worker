import { test, expect, jest, beforeEach } from '@jest/globals'

const mockInvoke = jest.fn() as jest.MockedFunction<any>

jest.unstable_mockModule('../src/parts/SharedProcess/SharedProcess.ts', () => ({
  invoke: mockInvoke,
}))

const Exec = await import('../src/parts/Exec/Exec.ts')

beforeEach(() => {
  jest.resetAllMocks()
})

test('should invoke SharedProcess with command and args', async () => {
  mockInvoke.mockResolvedValue(undefined)

  await Exec.exec('test-command', 'arg1', 'arg2')

  expect(mockInvoke).toHaveBeenCalledWith('Exec.exec', 'test-command', 'arg1', 'arg2')
})

test('should handle command without args', async () => {
  mockInvoke.mockResolvedValue(undefined)

  await Exec.exec('simple-command')

  expect(mockInvoke).toHaveBeenCalledWith('Exec.exec', 'simple-command')
})

test('should handle multiple args', async () => {
  const args = ['arg1', 'arg2', 'arg3', 'arg4']
  mockInvoke.mockResolvedValue(undefined)

  await Exec.exec('multi-arg-command', ...args)

  expect(mockInvoke).toHaveBeenCalledWith('Exec.exec', 'multi-arg-command', ...args)
})
