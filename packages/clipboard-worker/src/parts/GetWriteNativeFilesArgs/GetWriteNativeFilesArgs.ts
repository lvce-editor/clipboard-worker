import type { ExecArgs } from '../ExecArgs/ExecArgs.ts'

const getUri = (files: readonly string[]): string => {
  const first = files[0]
  const uri = `file://${first}`
  return uri
}

const getWriteNativeFilesArgsXsel = (files: readonly string[]): ExecArgs => {
  const uri = getUri(files)
  return {
    command: 'xsel',
    args: ['--clipboard'],
    stdin: uri,
  }
}

const getWriteNativeFilesArgsXClip = (files: readonly string[]): ExecArgs => {
  const uri = getUri(files)
  return {
    command: 'xsel',
    args: ['--clipboard'],
    stdin: uri,
  }
}

// TODO support multiple
export const getWriteNativeFilesArgs = (files: readonly string[]): ExecArgs => {
  const useClip = true
  const useXsel = false
  if (useClip) {
    return getWriteNativeFilesArgsXClip(files)
  }
  if (useXsel) {
    return getWriteNativeFilesArgsXsel(files)
  }
  throw new Error('unsupported clipboard')
}
