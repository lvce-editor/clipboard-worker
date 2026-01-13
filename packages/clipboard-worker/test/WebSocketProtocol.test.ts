import { test, expect } from '@jest/globals'
import * as Protocol from '../src/parts/Protocol/Protocol.ts'
import { getWebSocketProtocol } from '../src/parts/WebSocketProtocol/WebSocketProtocol.ts'

test('should return WSS for HTTPS protocol', () => {
  const protocol = getWebSocketProtocol(Protocol.Https)
  expect(protocol).toBe(Protocol.Wss)
})

test('should return WS for HTTP protocol', () => {
  const protocol = getWebSocketProtocol('http:')
  expect(protocol).toBe(Protocol.Ws)
})

test('should handle other protocols', () => {
  const protocol = getWebSocketProtocol('ftp:')
  expect(protocol).toBe(Protocol.Ws)
})
