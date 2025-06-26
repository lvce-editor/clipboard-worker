import type { ExecArgs } from '../ExecArgs/ExecArgs.ts'

// TODO support multiple file uris
const getUri = (files: readonly string[]): string => {
  const first = files[0]
  const uri = `file://${first}`
  return uri
}

const getStdin = (files: readonly string[]): string => {
  const uri = getUri(files)
  return `copy\n${uri}`
}

export const getWriteNativeFilesArgsXClip = (files: readonly string[]): ExecArgs => {
  const stdin = getStdin(files)
  return {
    command: 'xclip',
    args: ['-selection', 'clipboard', '-l', '1', '-t', 'x-special/gnome-copied-files'],
    stdin,
  }
}
