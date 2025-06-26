import type { ExecArgs } from '../ExecArgs/ExecArgs.ts'
import { getWriteNativeFilesArgsXClip } from '../GetWriteNativeFilesArgsXclip/GetWriteNativeFilesArgsXclip.ts'
import { toUri } from '../ToUri/ToUri.ts'

const getUri = (files: readonly string[]): string => {
  const first = files[0]
  const uri = toUri(first)
  return uri
}

const getWriteNativeFilesArgsXsel = (files: readonly string[]): readonly ExecArgs[] => {
  const uri = getUri(files)
  return [
    {
      command: 'xsel',
      args: ['--clipboard'],
      stdin: uri,
      stdio: ['pipe', 'pipe', 'pipe'],
    },
  ]
}

// TODO support multiple
export const getWriteNativeFilesArgs = (files: readonly string[]): readonly ExecArgs[] => {
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
