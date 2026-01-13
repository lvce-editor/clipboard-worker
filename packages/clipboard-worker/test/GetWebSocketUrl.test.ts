import { test, expect } from '@jest/globals'
import { getWebSocketUrl } from '../src/parts/GetWebSocketUrl/GetWebSocketUrl.ts'

test('should construct WebSocket URL with HTTPS protocol', () => {
  const url = getWebSocketUrl('test', 'localhost:3000', 'https:')
  expect(url).toBe('wss://localhost:3000/websocket/test')
})

test('should construct WebSocket URL with HTTP protocol', () => {
  const url = getWebSocketUrl('test', 'localhost:3000', 'http:')
  expect(url).toBe('ws://localhost:3000/websocket/test')
})

test('should handle different types', () => {
  const url = getWebSocketUrl('clipboard', 'example.com', 'https:')
  expect(url).toBe('wss://example.com/websocket/clipboard')
})

test('should handle host with port', () => {
  const url = getWebSocketUrl('files', '127.0.0.1:8080', 'http:')
  expect(url).toBe('ws://127.0.0.1:8080/websocket/files')
})
