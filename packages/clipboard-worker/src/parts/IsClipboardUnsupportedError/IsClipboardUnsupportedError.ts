export const isClipboardUnsupportedError = (error: unknown): boolean => {
  return error instanceof Error && error.message === 'navigator.clipboard.readText is not a function'
}
