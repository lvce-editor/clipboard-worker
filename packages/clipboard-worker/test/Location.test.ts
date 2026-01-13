import { test, expect } from '@jest/globals'

// Mock location object
const mockLocation = {
  host: 'localhost:3000',
  protocol: 'https:',
}

Object.defineProperty(globalThis, 'location', {
  value: mockLocation,
  writable: true,
})

const Location = await import('../src/parts/Location/Location.ts')

test('should get host from location', () => {
  const host = Location.getHost()
  expect(host).toBe('localhost:3000')
})

test('should get protocol from location', () => {
  const protocol = Location.getProtocol()
  expect(protocol).toBe('https:')
})
