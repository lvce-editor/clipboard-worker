import type { ExecArgs } from '../ExecArgs/ExecArgs.ts'
import { toUri } from '../ToUri/ToUri.ts'

// TODO support multiple file uris
const getUris = (files: readonly string[]): readonly string[] => {
  return files.map(toUri)
}

const getStdin = (files: readonly string[]): string => {
  const uris = getUris(files)
  return ['copy', ...uris].join('\n')
}

export const getWriteNativeFilesArgsXClip = (files: readonly string[]): readonly ExecArgs[] => {
  const stdin = getStdin(files)
  return {
    command: 'xclip',
    args: ['-selection', 'clipboard', '-t', 'x-special/gnome-copied-files'],
    stdin,
    stdio: ['pipe', 'ignore', 'ignore'],
  }
}
