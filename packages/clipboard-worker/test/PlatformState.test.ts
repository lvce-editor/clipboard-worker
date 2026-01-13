import { test, expect, beforeEach } from '@jest/globals'
import * as PlatformState from '../src/parts/PlatformState/PlatformState.ts'
import * as PlatformType from '../src/parts/PlatformType/PlatformType.ts'

beforeEach(() => {
  PlatformState.set(PlatformType.Web)
})

test('should set and get platform state', () => {
  expect(PlatformState.get()).toBe(PlatformType.Web)

  PlatformState.set(PlatformType.Electron)
  expect(PlatformState.get()).toBe(PlatformType.Electron)

  PlatformState.set(PlatformType.Remote)
  expect(PlatformState.get()).toBe(PlatformType.Remote)
})

test('should handle different platform values', () => {
  const testPlatforms = [0, 1, 2, 999]
  for (const platform of testPlatforms) {
    PlatformState.set(platform)
    expect(PlatformState.get()).toBe(platform)
  }
})
