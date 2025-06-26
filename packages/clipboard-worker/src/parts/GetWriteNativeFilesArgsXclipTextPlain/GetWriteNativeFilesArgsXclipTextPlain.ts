import type { ExecArgs } from '../ExecArgs/ExecArgs.ts'
import { getStdinTextPlain } from '../GetStdinTextPlain/GetStdinTextPlain.ts'

export const getWriteNativeFilesArgsTextPlain = (files: readonly string[]): ExecArgs => {
  const stdin = getStdinTextPlain(files)
  return {
    command: 'xclip',
    args: ['-selection', '-l', '2', 'clipboard', '-t', 'text/plain;charset=utf-8'],
    stdin: stdin,
    stdio: ['pipe', 'ignore', 'ignore'],
  }
}
