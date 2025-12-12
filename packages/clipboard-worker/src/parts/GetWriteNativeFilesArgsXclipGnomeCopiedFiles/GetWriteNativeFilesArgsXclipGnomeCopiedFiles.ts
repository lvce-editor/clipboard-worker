import type { ExecArgs } from '../ExecArgs/ExecArgs.ts'
import { getStdinGnomeCopiedFiles } from '../GetStdinGnomeCopiedFIles/GetStdinGnomeCopiedFiles.ts'

export const getWriteNativeFilesArgsXClipGnomeCopiedFiles = (files: readonly string[]): ExecArgs => {
  const stdin = getStdinGnomeCopiedFiles(files)
  return {
    args: ['-selection', '-l', '0', 'clipboard', '-t', 'x-special/gnome-copied-files'],
    command: 'xclip',
    stdin: stdin,
    stdio: ['pipe', 'ignore', 'ignore'],
  }
}
