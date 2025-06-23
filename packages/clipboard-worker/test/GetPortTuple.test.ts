import { test, expect } from '@jest/globals'
import { getPortTuple } from '../src/parts/GetPortTuple/GetPortTuple.ts'

test('getPortTuple should return a MessageChannel with port1 and port2', () => {
  const result = getPortTuple()

  expect(result).toHaveProperty('port1')
  expect(result).toHaveProperty('port2')
  expect(result.port1).toBeInstanceOf(MessagePort)
  expect(result.port2).toBeInstanceOf(MessagePort)
})
