import { test, expect } from '@jest/globals'
import { getRpcFactory } from '../src/parts/GetRpcFactory/GetRpcFactory.ts'
import * as PlatformType from '../src/parts/PlatformType/PlatformType.ts'

test('should return Electron RPC factory for Electron platform', () => {
  const factory = getRpcFactory(PlatformType.Electron)
  expect(typeof factory).toBe('function')
})

test('should return Remote RPC factory for Remote platform', () => {
  const factory = getRpcFactory(PlatformType.Remote)
  expect(typeof factory).toBe('function')
})

test('should throw error for unexpected platform', () => {
  expect(() => {
    getRpcFactory(999)
  }).toThrow('unexpected platform')
})

test('should throw error for Web platform', () => {
  expect(() => {
    getRpcFactory(PlatformType.Web)
  }).toThrow('unexpected platform')
})
